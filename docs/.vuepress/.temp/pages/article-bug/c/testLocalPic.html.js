import comp from "E:/SunshineEbook/jingzhe-blog/docs/.vuepress/.temp/pages/article-bug/c/testLocalPic.html.vue"
const data = JSON.parse("{\"path\":\"/article-bug/c/testLocalPic.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1749626622000,\"contributors\":[{\"name\":\"twoflowers\",\"username\":\"\",\"email\":\"1292548615@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"89ecd435c22733ad6b6cbfa3516f02d832feb6d4\",\"time\":1749626622000,\"email\":\"1292548615@qq.com\",\"author\":\"twoflowers\",\"message\":\"引入mermaid成功\"}]},\"filePathRelative\":\"article-bug/c/testLocalPic.md\"}")
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
