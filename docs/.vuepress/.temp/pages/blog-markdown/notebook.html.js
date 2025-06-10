import comp from "E:/SunshineEbook/jingzhe-blog/docs/.vuepress/.temp/pages/blog-markdown/notebook.html.vue"
const data = JSON.parse("{\"path\":\"/blog-markdown/notebook.html\",\"title\":\"导航栏\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"blog-markdown/notebook.md\"}")
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
