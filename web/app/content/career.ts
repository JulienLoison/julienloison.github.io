import type { Curriculum } from '~/content/types.ts'

export const curriculum = {
  educationRecords: [
    {
      title:
        'Licence Sciences, Technologies, Santé (STS) – Mathématiques-Informatique',
      institution: 'Université Claude Bernard Lyon 1',
      location: 'Lyon (69)',
      startDate: '2012-09',
      endDate: '2015-07',
    },
    {
      title: "Chef de Projet Système d'Information",
      institution: 'Institut G4',
      location: 'Lyon (69)',
      startDate: '2015-09',
      endDate: '2017-07',
    },
    {
      title:
        'Diplôme Universitaire Technologique - Génie Mécanique et Productique',
      institution: 'Institut Universitaire Technologique Lyon 1',
      location: 'Lyon (69)',
      startDate: '2009-09',
      endDate: '2011-07',
    },
  ],
  workExperiences: [
    {
      title: 'Développeur',
      company: 'Aringway SAS',
      description:
        "Développement d'un Back Office campanion d'un Serious Game pour l'industrie",
      location: 'Lyon (69)',
      startDate: '2015-05',
      endDate: '2016-06',
      highlights: [
        'Développé un jeu vidéo éducatif (Serious Game) et son back-office de gestion de contenu sous Symfony, en environnement start-up.',
        "Réalisé l'intégration UI (Bootstrap, Materialize) et des web services JSON pour dynamiser l'expérience utilisateur.",
        'Participé au déploiement du jeu chez le client et animé les premières sessions de formation à sa prise en main.',
        "Monté en compétence rapidement sur le développement web en autonomie, au sein d'une équipe restreinte.",
        'Exploré des pistes techniques innovantes, notamment autour de la réalité virtuelle.',
      ],
    },
    {
      title: 'Développeur',
      company: 'Dedi Agency',
      description: 'Développement Symfony',
      location: 'Lyon (69)',
      startDate: '2016-09',
      endDate: '2017-08',
      highlights: [
        'Développé des fonctionnalités backend sous Symfony, avec intégration UI (Bootstrap) et web services JSON.',
        'Participé aux phases de cadrage des besoins et contribué à la rédaction de cahiers des charges.',
      ],
    },
    {
      title: 'Lead Développeur',
      company: 'Dedi Agency',
      description: 'Développement Symfony',
      location: 'Lyon (69)',
      startDate: '2017-09',
      endDate: '2022-08',
      highlights: [
        "Intervenu sur de nombreux projets e-commerce de tailles variées (de quelques semaines à plusieurs mois), couvrant l'ensemble du cycle de vie : conception, développement, livraison, TMA/TME, refontes et montées de version majeures.",
        'Conçu et développé des plateformes e-commerce sur mesure pour des clients B2B/B2C (Symfony, Sylius).',
        "Réalisé des interconnexions entre les plateformes e-commerce et des systèmes tiers, dont l'ERP Sage X100 et le PIM Akeneo, pour synchroniser catalogues, stocks et commandes.",
        'Collaboré avec les équipes commerciales et les chefs de projet pour cadrer les besoins clients, concevoir les solutions techniques et rédiger les cahiers des charges.',
        'Participé aux cérémonies Agile Scrum (sprint planning, daily stand-up, revues de sprint, rétrospectives) au sein des équipes projet.',
        "Formé et encadré plusieurs alternants au sein de l'équipe de développement, en les accompagnant sur la montée en compétence technique et les bonnes pratiques.",
        'Animé des formations client sur les livrables et accompagné la prise en main des outils développés.',
        'Anticipé les échéances et les risques projet, et proposé rapidement des solutions face aux imprévus.',
      ],
    },
    {
      title: 'Directeur Technique',
      company: 'Dedi Agency',
      description: 'Développement Symfony',
      location: 'Lyon (69)',
      startDate: '2022-09',
      endDate: '2025-08',
      highlights: [
        "Piloté la direction technique de l'agence à l'échelle de l'ensemble des projets clients (B2B/B2C) : architecture, standards techniques et choix technologiques.",
        "Encadré une équipe pouvant compter jusqu'à une quinzaine de développeuses et développeurs (front, back, TMA), et piloté le recrutement de l'équipe.",
        'Mis en place des pipelines CI/CD sur GitLab, des tests fonctionnels end-to-end automatisés (Panther) et des environnements de développement conteneurisés (Docker).',
        "Piloté l'infrastructure serveurs (Apache) dans une logique DevOps : déploiements, monitoring et gestion des accès utilisateurs.",
        'Travaillé en binôme avec la direction commerciale et les chefs de projet pour cadrer, concevoir et formaliser les propositions techniques et le phasage des projets clients.',
        'Animé les cérémonies Agile Scrum (sprint planning, daily stand-up, revues de sprint, rétrospectives) au sein des équipes de développement.',
      ],
    },
    {
      title: 'Lead Développeur',
      company: 'Dedi Agency',
      description: 'Développement Symfony',
      location: 'Lyon (69)',
      startDate: '2025-09',
      endDate: '2026-06',
    },
  ],
} satisfies Curriculum
