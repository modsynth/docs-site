module.exports = {
  title: 'Modsynth',
  tagline: 'Modular architecture for modern applications',
  url: 'https://modsynth.github.io',
  baseUrl: '/',
  organizationName: 'modsynth',
  projectName: 'docs-site',
  themeConfig: {
    navbar: {
      title: 'Modsynth',
      items: [
        {to: 'docs/intro', label: 'Docs', position: 'left'},
        {href: 'https://github.com/modsynth', label: 'GitHub', position: 'right'}
      ]
    },
    footer: {
      copyright: 'Copyright © 2025 Modsynth. Built with Docusaurus.'
    }
  },
  presets: [
    ['@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js')
      }
    }]
  ]
};
