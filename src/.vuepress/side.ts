import { sidebar } from "vuepress-theme-hope";

export const Side = sidebar({
  "/energy/": [
    {
      icon: "frame",
      text: "EnMS要求及使用指南",
      //   prefix: "EnMS",
      link: "/energy/50001.md",
      //   children: ["","EnMS对认证机构的要求"],
    },
    {
      icon: "react",
      text: "EnMS对认证机构的要求",
      //   prefix: "EnMS",
      link: "/energy/50003.md",
      //   children: ["","EnMS对认证机构的要求"],
    },
    {
      icon: "guide",
      text: "EnMS实施、保持和改进指南",
      //   prefix: "EnMS",
      link: "/energy/50004.md",
      //   children: ["","EnMS对认证机构的要求"],
    },

  ],
  "/carbon/": [
    {
      icon:"hot",
      text:"碳管理体系 要求",
      link:"/carbon/ca-39-2022.md",
    },
  ],
});
