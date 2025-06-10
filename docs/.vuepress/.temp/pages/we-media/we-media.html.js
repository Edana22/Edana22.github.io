import comp from "E:/SunshineEbook/jingzhe-blog/docs/.vuepress/.temp/pages/we-media/we-media.html.vue"
const data = JSON.parse("{\"path\":\"/we-media/we-media.html\",\"title\":\"关于我\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"抖音账号：\",\"slug\":\"抖音账号\",\"link\":\"#抖音账号\",\"children\":[]},{\"level\":2,\"title\":\"哔哩哔哩账号：\",\"slug\":\"哔哩哔哩账号\",\"link\":\"#哔哩哔哩账号\",\"children\":[]},{\"level\":2,\"title\":\"博客园：\",\"slug\":\"博客园\",\"link\":\"#博客园\",\"children\":[]},{\"level\":2,\"title\":\"个人小程序：\",\"slug\":\"个人小程序\",\"link\":\"#个人小程序\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"we-media/we-media.md\"}")
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
