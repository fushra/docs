/** @type {import('@docusaurus/types').DocusaurusConfig} */

const docsRepo = 'https://github.com/fushra/docs'

module.exports = {
  title: 'Fushra Docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fushra', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Fushra docs',
      logo: {
        alt: 'Fushra logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'meml-basics/install',
          position: 'left',
          label: 'Tutorials',
        },
        {
          type: 'doc',
          docId: 'reference/index',
          position: 'left',
          label: 'Reference',
        },
        {
          href: 'https://github.com/fushra/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorials',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/meml',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/UPQW9juP5Z',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/fushra',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Fushra GitHub',
              href: 'https://github.com/fushra',
            },
            {
              label: 'MEML GitHub',
              href: 'https://github.com/fushra/meml',
            },
            {
              label: 'MLD GitHub',
              href: 'https://github.com/fushra/mld',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fushra.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: `${docsRepo}/edit/master/website/docs/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
