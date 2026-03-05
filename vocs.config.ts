import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'PopApp UI',
  description: 'React Native component registry for Expo apps',
  rootDir: '.',
  basePath: '/docs',
  iconUrl: '/assets/icon.svg',
  logoUrl: {
    light: '/assets/ui-logo-light.svg',
    dark: '/assets/ui-logo-dark.svg',
  },
  topNav: [
    { text: 'PopApp', link: 'https://popapp.run' },
    { text: 'GitHub', link: 'https://github.com/popapp-ai/ui' },
  ],
  sidebar: [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/' },
        { text: 'Installation', link: '/getting-started' },
      ],
    },
    {
      text: 'Components',
      items: [
        { text: 'Button', link: '/components/button' },
      ],
    },
  ],
})
