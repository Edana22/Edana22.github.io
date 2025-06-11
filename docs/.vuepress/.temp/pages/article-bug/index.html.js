import comp from "E:/SunshineEbook/jingzhe-blog/docs/.vuepress/.temp/pages/article-bug/index.html.vue"
const data = JSON.parse("{\"path\":\"/article-bug/\",\"title\":\"uniapp如何在当前页面获取上个页面的变量、方法\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"getCurrentPages()\",\"slug\":\"getcurrentpages\",\"link\":\"#getcurrentpages\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"article-bug/readme.md\"}")
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
