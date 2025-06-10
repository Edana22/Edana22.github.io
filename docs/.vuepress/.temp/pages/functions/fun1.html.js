import comp from "E:/SunshineEbook/blog_project/jingzhe-blog/docs/.vuepress/.temp/pages/functions/fun1.html.vue"
const data = JSON.parse("{\"path\":\"/functions/fun1.html\",\"title\":\"我是fun1\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"functions/fun1.md\"}")
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
