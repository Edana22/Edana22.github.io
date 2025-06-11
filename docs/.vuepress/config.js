import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  port: 8088,
  lang: "zh-CN",

  title: "惊蛰",
  description: "记录工作、学习和生活",
  // head 渲染为网页title左侧的小图标
  head: [["link", { rel: "icon", href: "/images/jingzhe-128.png" }]],

  theme: defaultTheme({
    navbar: [
      {
        text: "前端",
        link: "/article-web/前言.md", //放第一个文件
      },
      {
        text: "开发调试记录",
        link: "/article-bug/前言.md", //放第一个文件
      },
      {
        text: "Vue",
        prefix: "/article-vue/",
        children: [
          {
            text: "vue学习",
            link: "basic-use/1. vue简单语法梳理.md", //放第一个文件
          },
          {
            text: "vuex",
            link: "https://vuex.vuejs.org/zh/",
          },
          {
            text: "vueRouter",
            link: "https://router.vuejs.org/",
          },
        ],
      },
      {
        text: "uniapp",
        link: "/article-uniapp/2. uniapp如何在当前页面获取上个页面的变量、方法.md",
      },
      {
        text: "java",
        link: "/article-java/前言.md",
      },
      {
        text: "其它语言",
        prefix: "/blog-markdown/",
        children: [
          {
            text: "C",
            link: "C/2. c语言指针学习笔记.md",
          },
          {
            text: "matlab",
            link: "git/1. git 简介与基础使用.md",
          },
          {
            text: "git",
            link: "git/1. git 简介与基础使用.md",
          },
          {
            text: "quasar",
            link: "C/2. c语言指针学习笔记.md",
          },
          {
            text: "navicat",
            link: "C/2. c语言指针学习笔记.md",
          },
        ],
      },
      {
        text: "计算机基础",
        link: "notebook.md",
      },
      {
        text: "生活感悟",
        children: ["学习技巧", "生活经验", "", ""],
      },
      {
        text: "自媒体",
        link: "/we-media/we-media.md",
      },
    ],
    sidebar: {
      "/article-web/": [
        {
          text: "前言",
          link: "前言.md",
        },
        {
          text: "HTML",
          prefix: "/article-web/html",
          collapsible: true,
          children: [
            {
              text: "DOM操作",
              link: "1. js DOM操作.md",
            },
            {
              text: "BOM操作",
              link: "2. js BOM操作.md",
            },
          ],
        },
        {
          text: "CSS",
          prefix: "/article-web/css",
          collapsible: true,
          children: [
            {
              text: "DOM操作",
              link: "1. js DOM操作.md",
            },
            {
              text: "BOM操作",
              link: "2. js BOM操作.md",
            },
          ],
        },
        {
          text: "JS",
          prefix: "/article-web/js",
          collapsible: true,
          children: [
            {
              text: "DOM操作",
              link: "1. js DOM操作.md",
            },
            {
              text: "BOM操作",
              link: "2. js BOM操作.md",
            },
          ],
        },
      ],
      "/article-bug/": [
        {
          text: "前言",
          link: "前言.md",
        },
        {
          text: "C",
          prefix: "/article-bug/c",
          collapsible: true,
          children: [
            {
              text: "二维数组转置代码",
              link: "二维数组转置代码.md",
            },
            {
              text: "printf 输出最前端字符不显示",
              link: "printf 输出最前端字符不显示.md",
            },
            {
              text: "实参与形参",
              link: "实参与形参.md",
            },
            {
              text: "C指针学习笔记",
              link: "C指针学习笔记.md",
            },
            {
              text: "链表中指针的一些用法要点",
              link: "链表中指针的一些用法要点.md",
            },
            {
              text: "带头结点单链表的常用操作",
              link: "带头结点单链表的常用操作.md",
            },
            {
              text: "根据遍历序列画二叉树",
              link: "根据遍历序列画二叉树.md",
            },
            {
              text: "用指针交换两个变量",
              link: "用指针交换两个变量.md",
            },
          ],
        },
      ],
      "/article-vue/": [
        {
          text: "vue入门",
          prefix: "/article-vue/basic-use/",
          collapsible: true,
          children: [
            {
              text: "vue简单语法梳理",
              link: "1. vue简单语法梳理.md",
            },
            {
              text: "vue-cli的安装步骤",
              link: "2. vue-cli的安装步骤.md",
            },
          ],
        },
        {
          text: "深入使用vue",
          prefix: "/article-vue/css",
          collapsible: true,
          children: [
            {
              text: "DOM操作",
              link: "1. js DOM操作.md",
            },
            {
              text: "BOM操作",
              link: "2. js BOM操作.md",
            },
          ],
        },
        {
          text: "vue底层原理及常见面试题",
          prefix: "/article-vue/js",
          collapsible: true,
          children: [],
        },
      ],
      "/article-uniapp/": [
        {
          text: "uniapp使用",
          prefix: "/article-uniapp/",
          collapsible: true,
          children: [
            {
              text: "获取上个页面的变量",
              link: "2. uniapp如何在当前页面获取上个页面的变量、方法.md",
            },
            {
              text: "uniapp中vuex的基本使用",
              link: "3. uniapp中vuex的基本使用.md",
            },
            {
              text: "uniapp中mqtt的基本使用",
              link: "4. uniapp中mqtt的基本使用.md",
            },
          ],
        },
      ],
      "/article-java/": [
        {
          text: "java 基础",
          prefix: "/article-java/",
          collapsible: true,
          children: [
            {
              text: "获取上个页面的变量",
              link: "2. uniapp如何在当前页面获取上个页面的变量、方法.md",
            },
            {
              text: "uniapp中vuex的基本使用",
              link: "3. uniapp中vuex的基本使用.md",
            },
            {
              text: "uniapp中mqtt的基本使用",
              link: "4. uniapp中mqtt的基本使用.md",
            },
          ],
        },
        {
          text: "springboot",
          prefix: "/article-java/",
          collapsible: true,
          children: [
            {
              text: "获取上个页面的变量",
              link: "2. uniapp如何在当前页面获取上个页面的变量、方法.md",
            },
            {
              text: "uniapp中vuex的基本使用",
              link: "3. uniapp中vuex的基本使用.md",
            },
            {
              text: "uniapp中mqtt的基本使用",
              link: "4. uniapp中mqtt的基本使用.md",
            },
          ],
        },
      ],
      "/we-media/": "heading", //这种放在只有一篇md的配置中
    },
  }),

  bundler: viteBundler(),
  plugins: [
    mdEnhancePlugin({
      // 启用 mermaid
      mermaid: true,
    }),
  ],
});
