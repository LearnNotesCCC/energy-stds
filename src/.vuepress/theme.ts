import { hopeTheme } from "vuepress-theme-hope";
import { Nar } from "./nav";
import { Side } from "./side";

export default hopeTheme({
  hostname: "https://energy.advisera.com.cn",

  author: {
    name: "EnMS",
    url: "https://www.advisera.com.cn",
  },

  iconAssets: "iconfont",//设置icon图库：还可以选择"fontawesome""iconfont"

  logo: "energy.svg",

  repo: "energy",

  repoDisplay: false,

  docsDir: "demo/theme-docs/src",

  navbar: Nar,

  sidebar: Side,

  //footer: "MIT, Copyright © 2022-2023 <a href='https://energy.advisera.com.cn'>EnMS</a>",

  displayFooter: true,

  pure:true,




  // locales: {
  //   "/": {
  //     // navbar
  //     navbar: Nar,

  //     // sidebar
  //     sidebar: Side,

  //     footer: "默认页脚",

  //     displayFooter: true,

  //     // page meta
  //     metaLocales: {
  //       editLink: "在 GitHub 上编辑此页",
  //     },
  //   },

  //   // "/": {
  //   //   // navbar
  //   //   navbar: enNavbar,

  //   //   // sidebar
  //   //   sidebar: enSidebar,

  //   //   footer: "Default footer",

  //   //   displayFooter: true,

  //   //   metaLocales: {
  //   //     editLink: "Edit this page on GitHub",
  //   //   },
  //   // },

  //   /**
  //    * Chinese locale config
  //    */
  //   // "/zh/": {
  //   //   // navbar
  //   //   navbar: zhNavbar,

  //   //   // sidebar
  //   //   sidebar: zhSidebar,

  //   //   footer: "默认页脚",

  //   //   displayFooter: true,

  //   //   // page meta
  //   //   metaLocales: {
  //   //     editLink: "在 GitHub 上编辑此页",
  //   //   },
  //   // },
  // },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      // "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    // comment: {
    //   /*
    //    @ts-expect-error: You should generate and use your own comment service
    //   */
    //   provider: "Waline",
    // },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },


    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
