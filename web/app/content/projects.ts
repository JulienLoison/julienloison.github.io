import type { Project } from '~/content/types.ts'

export const projects = [
  {
    name: 'Mon site perso',
    description:
      "Site perso one page, développé avec l'aide de Claude en tuteur technique et chef de projet. TODO - élaborer ce pitch.",
    image: {
      path: '/images/projects/mon-site.png',
      alt: "Capture d'écran de mon site",
    },
    stack:
      'Nuxt 4 · Vue 3 · TypeScript · Nuxt Content · Docker (dev tooling) · GitHub Pages',
    status: 'in_progress',
    date: '2026-10',
    tags: ['landing', 'full-stack'],
    repository: 'https://github.com/JulienLoison/julienloison.github.io',
  },
] satisfies Project[]
