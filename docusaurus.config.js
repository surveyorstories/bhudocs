// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Surveyor stories",
  tagline: "A Tool to Discover",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://github.com",

  baseUrl: "/bhudocs",
  deploymentBranch: "gh-pages",

  organizationName: "surveyorstories", // Usually your GitHub org/user name.
  projectName: "bhukamathaweb", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    "plugin-image-zoom",
    // require.resolve("docusaurus-plugin-image-zoom"),
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 100,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: true,
      },
    ],

    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "img/192.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/docs",
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/surveyorstories/bhudocs/edit/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/surveyorstories/bhudocs/edit/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo_light.svg",
      announcementBar: {
        id: "support_us",
        content:
          'Are you intrested!. We are looking to revamp our docs, please fill  <a target="_blank" rel="noopener noreferrer" href="/bhudocs/contribution">this survey</a> to contribute',
        backgroundColor: "#099f3d",
        textColor: "#fff",
        isCloseable: true,
      },
      navbar: {
        title: "Surveyor stories",
        logo: {
          alt: "Surveyor stories",
          src: "img/logo_light.svg",
          srcDark: "img/logo_dark.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "Documentation",
          },
          {
            href: "/#faqs",
            label: "Faq's",
            position: "right",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/surveyorstories",
            // label: "GitHub",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      // zoom: {
      //   selector: ".markdown :not(em) > img",
      //   config: {
      //     // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      //     background: {
      //       light: "rgb(255, 255, 255)",
      //       dark: "rgb(50, 50, 50)",
      //     },
      //   },
      // },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/surveyorstories",
              },
              {
                label: "Telegram Group",
                href: "https://t.me/surveyor_stories",
              },

              {
                label: "YouTube",
                href: "https://www.youtube.com/@surveyorstories",
              },
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/surveyorstories",
              // },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/surveyorstories",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Surveyor Stories. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
