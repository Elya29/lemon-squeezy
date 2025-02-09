import type { Site, Ui, Features, Url } from './types'

export const SITE: Site = {
  website: 'https://elya29.github.io',
  base: '/lemon-squeezy',
  title: 'Lemon Squeezy',
  description: 'La programmation pour les enfants',
  author: 'Alex Palma',
  lang: 'fr',
  ogLocale: 'fr_FR',
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/parcours',
      title: 'Parcours',
      displayMode: 'alwaysText',
      text: 'Parcours',
    },
    {
      path: '/games',
      title: 'Ressources',
      displayMode: 'alwaysText',
      text: 'Ressources',
    },
  ],
  socialLinks: [
    {
      link: 'https://github.com/Elya29',
      title: 'Alex sur Github',
      displayMode: 'alwaysIcon',
      icon: 'i-uil-github-alt',
    },
    {
      link: 'mailto:elya29870@gmail.com' as unknown as Url,
      title: 'Me contacter par email',
      displayMode: 'alwaysIcon',
      icon: 'i-material-symbols-alternate-email',
    },
  ],
  navBarLayout: {
    left: [],
    right: [
      'internalNavs',
      'socialLinks',
      'searchButton',
      'themeButton',
      'rssLink',
    ],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: [
    { title: 'Jeux', path: '/games' },
    { title: 'Vidéos', path: '/streams' },
    // { title: 'Articles', path: '/feeds' },
  ],
  groupView: {
    maxGroupColumns: 3,
    showGroupItemColorOnHover: true,
  },
  githubView: {
    monorepos: ['withastro/astro', 'withastro/starlight'],
    mainLogoOverrides: [
      [/starlight/, 'https://starlight.astro.build/favicon.svg'],
    ],
    subLogoMatches: [
      [/theme/, 'i-unjs-theme-colors'],
      [/github/, 'https://www.svgrepo.com/show/475654/github-color.svg'],
      [/tweet/, 'i-logos-twitter'],
      [/bluesky/, 'i-logos-bluesky'],
    ],
  },
  externalLink: {
    newTab: true,
    cursorType: 'pointer',
    showNewTabIcon: false,
  },
}

/**
 * Configures whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  share: [
    true,
    {
      twitter: false,
      bluesky: false,
      mastodon: false,
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: false,
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 1,
      maxHeadingLevel: 4,
      displayPosition: 'left',
      displayMode: 'hover',
    },
  ],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'unicorn',
    },
  ],
  slideEnterAnim: [true, { enterStep: 60 }],
}
