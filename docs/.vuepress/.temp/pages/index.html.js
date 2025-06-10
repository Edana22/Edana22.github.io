import comp from "E:/SunshineEbook/jingzhe-blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"actions\":[{\"text\":\"Get Started -->\",\"link\":\"/article-web/前言.md\",\"type\":\"primary\"}],\"features\":[{\"title\":\"前端学习\",\"details\":\"补齐前端基础知识，掌握开发调试技巧。补齐纯前端的缺失知识。\"},{\"title\":\"Vue学习\",\"details\":\"学习和理解 Vue 基础，学会使用 Vue 快速编写 Web 应用。\"},{\"title\":\"uniapp学习\",\"details\":\"理解小程序框架原理，掌握踩坑必备指南。\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
