import type { Component } from 'vue'
import type { SECTIONS } from '~/styleguide/catalogue.ts'

export type SectionId = (typeof SECTIONS)[number]['id']

export type SectionDescription = {
  id: SectionId
  title: string
}

export type ExampleDescription = {
  name: string
  usage: string
  presentation?: boolean
}

export type ExampleLocation = {
  sectionId: SectionId
  order: number
  slug: string
  path: string
}

export type Example = {
  location: ExampleLocation
  description: ExampleDescription
  component: Component
  snippet: string
}

export type Section = {
  description: SectionDescription
  examples: Example[]
}
