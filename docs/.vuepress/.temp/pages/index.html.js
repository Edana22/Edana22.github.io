import comp from "E:/SunshineEbook/jingzhe-blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/images/jingzhe-256.png\",\"actions\":[{\"text\":\"Get Started -->\",\"link\":\"/article-web/前言.md\",\"type\":\"primary\"}],\"features\":[{\"title\":\"前端基础\",\"details\":\"从html开始的前端系列课程。\"},{\"title\":\"BUG调试\",\"details\":\"工作中遇到的bug及解决方法。\"},{\"title\":\"个人感悟\",\"details\":\"职场经验、生活感悟。\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{\"updatedTime\":1749527809000,\"contributors\":[{\"name\":\"twoflowers\",\"username\":\"\",\"email\":\"1292548615@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"f3b962e68f6ffcb84ea2e07a3893611af691f7e8\",\"time\":1749527809000,\"email\":\"1292548615@qq.com\",\"author\":\"twoflowers\",\"message\":\"初步完成navbar和sidebar的设置\"}]},\"filePathRelative\":\"README.md\"}")
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
