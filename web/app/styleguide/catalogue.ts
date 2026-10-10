import type { ExampleDescription } from '~/styleguide/types.ts'

export const SECTIONS = [
  { id: 'headings', title: 'Titres' },
  { id: 'text', title: 'Textes' },
  { id: 'links', title: 'Liens' },
  { id: 'lists', title: 'Listes' },
  { id: 'actions', title: 'Boutons' },
] as const

export const EXAMPLE_DESCRIPTIONS: Record<string, ExampleDescription> = {
  'text/paragraph': { name: 'Paragraphe', usage: 'Texte courant' },
  'text/lead-paragraph': {
    name: 'Chapô',
    usage: "Texte d'introduction, sous le titre",
  },
  'text/secondary-text': {
    name: 'Texte secondaire',
    usage: 'Dates, légendes, mentions',
  },
  'actions/primary-button': {
    name: 'Bouton principal',
    usage: 'Une action principale par section',
  },
  'actions/secondary-button': {
    name: 'Bouton secondaire',
    usage: 'Actions annexes',
  },
  'headings/h1': { name: 'Titre de page', usage: 'Un seul par page' },
  'headings/h2': {
    name: 'Titre de section',
    usage: 'Découpe une page en sections',
  },
  'headings/h3': { name: 'Sous-titre', usage: 'Découpe une section' },
  'links/internal-link': {
    name: 'Lien interne',
    usage: 'Vers une page du site',
  },
  'links/external-link': { name: 'Lien externe', usage: 'Vers un autre site' },
  'lists/bulleted-list': {
    name: 'Liste à puces',
    usage: 'Énumération courte, sans ordre',
  },
}
