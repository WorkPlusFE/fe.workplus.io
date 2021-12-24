// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WorkPlusFE',
  tagline: '深圳恒拓高科信息技术有限公司-前端技术部',
  url: 'https://workplus.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'workplusfe', // Usually your GitHub org/user name.
  projectName: 'fe.workplus.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      algolia: {
        appId: 'test',
        apiKey: '1e1e188d5cc1f18ca6648322f3716333',
        indexName: 'workplus',
        contextualSearch: true,
      },
      navbar: {
        title: 'WorkPlusFE',
        logo: {
          alt: 'WorkPlusFE',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'start',
            position: 'left',
            label: '开发',
          },
          {
            type: 'doc',
            docId: 'guide',
            position: 'left',
            label: '规范',
          },
          {
            type: 'doc',
            docId: 'packages',
            position: 'left',
            label: '工具',
          },
          {
            type: 'doc',
            docId: 'advanced',
            position: 'left',
            label: '进阶',
          },
          {
            type: 'doc',
            docId: 'gists',
            position: 'right',
            label: 'Gists',
          },
          {
            href: 'https://fe-blog.workplus.io',
            label: '博客',
            position: 'right',
          },
          {
            href: 'https://github.com/workplusfe',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
