import type {
  Section,
  SectionDescription,
  SectionId,
  Example,
  ExampleDescription,
  ExampleLocation
} from "~/styleguide/types.ts";
import type {Component} from "vue";

export const isSectionId = (sectionDescriptions: readonly SectionDescription[], value: string): value is SectionId => {
  return sectionDescriptions.some(section => section.id === value);
}

export const parseExampleLocation = (path: string, sectionDescriptions: readonly SectionDescription[]): ExampleLocation => {
  const regex = /(?<section>[a-z]+)\/(?<order>[0-9]{2})-(?<name>[a-z0-9-]+)\.vue$/;
  const match = path.match(regex);

  if (!match || !match.groups || !match.groups.section || !match.groups.order || !match.groups.name ) {
    throw new Error('Unrecognized path pattern : ' + path);
  }

  const sectionId = match.groups.section;
  const order = match.groups.order;
  const name = match.groups.name;

  if (!isSectionId(sectionDescriptions, sectionId)) {
    throw new Error(`Unable to parse example path : '${sectionId}' is not a valid sectionId`);
  }

  return { sectionId, order: Number(order), slug: `${sectionId}/${name}`, path: path };
};

export const describeExample = (
  location: ExampleLocation,
  exampleDescriptions: Record<string, ExampleDescription>
): ExampleDescription => {
  const description = exampleDescriptions[location.slug];
  if (description) {
    return description;
  }
  return { name: location.slug, usage: '' };
}

export const extractSnippet = (raw: string): string => {
  const start = raw.indexOf('<template>') + '<template>'.length;
  const end = raw.lastIndexOf('</template>');

  if (raw.indexOf('<template>') === -1 || end === -1) {
    throw new Error(`Unable to parse snippet : missing <template> tag`);
  }

  const lines = raw
    .slice(start, end)
    .split('\n')
  ;

  const firstLine = lines[0];
  if (firstLine !== undefined && firstLine.trim() === '') {
    lines.shift();
  }

  const lastLine = lines[lines.length - 1];
  if (lastLine !== undefined && lastLine.trim() === '') {
    lines.pop();
  }

  const minIndent = Math.min(...lines.filter(line => line.trim() !== '').map(line => line.search(/\S/)));

  return lines.map(line => line.slice(minIndent)).join('\n');
}

export const buildExamples = (
  components: Record<string, Component>,
  sources: Record<string, string>,
  sectionDescriptions: readonly SectionDescription[],
  exampleDescriptions: Record<string, ExampleDescription>,
): Example[] => {
  return Object.entries(components).map(([path, component]) => {
    const source = sources[path];
    if (source === undefined) {
      throw new Error('Unable to build examples, missing source for ' + path);
    }

    const location = parseExampleLocation(path, sectionDescriptions);
    const description = describeExample(location, exampleDescriptions);
    const snippet = extractSnippet(source);

    return {
      location,
      description,
      component,
      snippet
    }
  })
}

export const groupBySection = (examplesList: Example[], sectionDescriptions: readonly SectionDescription[]): Section[] => {
  return sectionDescriptions.map((description: SectionDescription) => {
    const examples = examplesList
      .filter(example => example.location.sectionId === description.id)
      .toSorted((a,b) => {
        return a.location.order - b.location.order
      });

    return {
      description,
      examples
    };
  }).filter(section => section.examples.length > 0);
}

export const buildStyleguideSections = (
  components: Record<string, Component>,
  sources: Record<string, string>,
  sectionDescriptions: readonly SectionDescription[],
  exampleDescriptions: Record<string, ExampleDescription>,
): Section[]  => {
  const examplesList = buildExamples(components, sources, sectionDescriptions, exampleDescriptions);
  return groupBySection(examplesList, sectionDescriptions);
}
