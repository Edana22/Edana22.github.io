import comp from "E:/SunshineEbook/blog_project/jingzhe-blog/docs/.vuepress/.temp/pages/article-vue/1. vue简单语法梳理.html.vue"
const data = JSON.parse("{\"path\":\"/article-vue/1.%20vue%E7%AE%80%E5%8D%95%E8%AF%AD%E6%B3%95%E6%A2%B3%E7%90%86.html\",\"title\":\"vue简单语法梳理\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"article-vue/1. vue简单语法梳理.md\"}")
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
