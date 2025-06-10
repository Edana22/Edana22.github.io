import comp from "E:/SunshineEbook/jingzhe-blog/docs/.vuepress/.temp/pages/article-web/前言.html.vue"
const data = JSON.parse("{\"path\":\"/article-web/%E5%89%8D%E8%A8%80.html\",\"title\":\"前言\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"article-web/前言.md\"}")
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
