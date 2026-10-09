<script setup lang="ts">

import { buildStyleguideSections } from "~/styleguide/registry.ts";
import {SECTIONS, EXAMPLE_DESCRIPTIONS} from "~/styleguide/catalogue.ts";
import type { Component } from "vue";

const exampleComponents = import.meta.glob<Component>('@/styleguide/examples/**/*.vue', {
  import: 'default',
  eager: true,
})

const exampleSources = import.meta.glob<string>('@/styleguide/examples/**/*.vue', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const sections = buildStyleguideSections(exampleComponents, exampleSources, SECTIONS, EXAMPLE_DESCRIPTIONS);

const links = sections.map(section => ({ to: '#' + section.description.id, label: section.description.title }))

useSeoMeta({
  title: 'Styleguide',
  robots: 'noindex, nofollow'
})

</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <UPageLinks :links="links" />
        </UPageAside>
      </template>

      <UPageBody>
        <section v-for="section in sections" :key="section.description.id">
          <h2 class="text-center text-2xl font-bold text-highlighted mb-6 scroll-mt-24" :id="section.description.id">{{ section.description.title }}</h2>

          <div class="space-y-10">
            <StyleguideExample v-for="example of section.examples" :example="example" :key="example.location.slug" />
          </div>
        </section>
      </UPageBody>

    </UPage>
  </UContainer>
</template>
