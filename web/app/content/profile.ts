import type { Profile } from '~/content/types.ts'

export const profile = {
  name: 'Julien Loison',
  baseline: 'Lead Développeur',
  abstract:
    "Développeur backend fort de 10 ans d'expérience (PHP/Symfony), passé d'alternant à Directeur Technique au sein d'une agence e-commerce lyonnaise, je crois qu'à l'ère du développement assisté par IA, être développeur ne se résume pas à connaître un langage. C'est savoir concevoir, architecturer et appliquer les bonnes pratiques, en restant exigeant sur la qualité du code, mais aussi dialoguer avec l'ensemble des acteurs d'un projet, pour transformer un besoin en solution technique pertinente.",
  image: {
    path: '/images/portrait.jpeg',
    alt: 'Portrait Julien Loison',
  },
  email: 'julien.loison.pro@gmail.com',
  github: 'https://github.com/JulienLoison',
  linkedin: 'https://www.linkedin.com/in/julien-loison/',
  pdf: {
    path: '/files/cv_julien_loison.pdf',
    name: 'CV Julien LOISON.pdf',
  },
} satisfies Profile
