import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
//import {Search} from "./searchPro";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "能源、碳管理",
  description: "关注企业节能减排，可持续发展",

  // locales: {
  //   "/": {
  //   lang: "zh-CN",
  //   title: "能源、碳资产管理",
  //   description: "关注企业节能减排，可持续发展",
  //   },
    
  //   //多语言设置
  //   // "/": {
  //   //   lang: "en-US",
  //   //   title: "Docs Demo",
  //   //   description: "A docs demo for vuepress-theme-hope",
  //   // },
  //   // "/zh/": {
  //   //   lang: "zh-CN",
  //   //   title: "文档演示",
  //   //   description: "vuepress-theme-hope 的文档演示",
  //   // },
  // },

  theme,

  shouldPrefetch: true,
  // plugins:[Search,],
});
