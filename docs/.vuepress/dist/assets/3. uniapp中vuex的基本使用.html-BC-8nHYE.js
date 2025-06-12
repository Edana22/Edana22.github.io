import{_ as n,c as e,b as a,o as i}from"./app-DyBO3kfI.js";const l={};function t(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="uniapp中vuex的基本使用" tabindex="-1"><a class="header-anchor" href="#uniapp中vuex的基本使用"><span>uniapp中vuex的基本使用</span></a></h1><h3 id="_1-创建一个uniapp项目" tabindex="-1"><a class="header-anchor" href="#_1-创建一个uniapp项目"><span>1. 创建一个uniapp项目</span></a></h3><h3 id="_2-在项目目录下用npm安装-vuex" tabindex="-1"><a class="header-anchor" href="#_2-在项目目录下用npm安装-vuex"><span>2. 在项目目录下用npm安装 vuex</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">npm install vuex --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-在项目根目录下创建-store文件夹-在store文件夹中创建-index-js" tabindex="-1"><a class="header-anchor" href="#_3-在项目根目录下创建-store文件夹-在store文件夹中创建-index-js"><span>3. 在项目根目录下创建 store文件夹，在store文件夹中创建 index.js</span></a></h3><p><img src="https://img2020.cnblogs.com/blog/2194212/202109/2194212-20210926173210864-173399506.png" alt="img"></p><h3 id="_4-在index-js中显式地通过-vue-use-来安装-vuex" tabindex="-1"><a class="header-anchor" href="#_4-在index-js中显式地通过-vue-use-来安装-vuex"><span>4. 在index.js中<a href="https://vuex.vuejs.org/zh/installation.html" target="_blank" rel="noopener noreferrer">显式地通过 <code>Vue.use()</code> 来安装 Vuex：</a></span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import Vue from &#39;vue&#39;</span>
<span class="line">import Vuex from &#39;vuex&#39;</span>
<span class="line"></span>
<span class="line">Vue.use(Vuex)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-在index-js中创建store" tabindex="-1"><a class="header-anchor" href="#_5-在index-js中创建store"><span>5.在index.js中创建store</span></a></h3><h4 id="_5-1-完整的store目录如下" tabindex="-1"><a class="header-anchor" href="#_5-1-完整的store目录如下"><span>5.1 完整的store目录如下：</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const store = new Vuex.Store({</span>
<span class="line">  state: {</span>
<span class="line">    // 存放状态</span>
<span class="line">  },</span>
<span class="line">  getters: {</span>
<span class="line">    // state的计算属性</span>
<span class="line">  },</span>
<span class="line">  mutations: {</span>
<span class="line">    // 更改state中状态的逻辑，同步操作</span>
<span class="line">  },</span>
<span class="line">  actions: {</span>
<span class="line">    // 提交mutation，异步操作</span>
<span class="line">  },</span>
<span class="line">  // 如果将store分成一个个的模块的话，则需要用到modules。</span>
<span class="line">   //然后在每一个module中写state, getters, mutations, actions等。</span>
<span class="line">  modules: {</span>
<span class="line">    a: moduleA,</span>
<span class="line">    b: moduleB,</span>
<span class="line">    // ...</span>
<span class="line">  }</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.2 导出store</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export default store</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>\\6. 在main.js 中引入store</p><p><img src="https://img2020.cnblogs.com/blog/2194212/202109/2194212-20210926173907988-1585696762.png" alt="img"></p><hr><h2 id="vuex的基础用法" tabindex="-1"><a class="header-anchor" href="#vuex的基础用法"><span>vuex的基础用法</span></a></h2><p>index.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import Vue from &#39;vue&#39;</span>
<span class="line">import Vuex from &#39;vuex&#39;</span>
<span class="line"></span>
<span class="line">Vue.use(Vuex)</span>
<span class="line"></span>
<span class="line">const store = new Vuex.Store({</span>
<span class="line">	state: {</span>
<span class="line">		// 存放状态</span>
<span class="line">		count:0,</span>
<span class="line">		test:&#39;这是store.js中的数据&#39;</span>
<span class="line">	},</span>
<span class="line">	getters: {</span>
<span class="line">		// state的计算属性</span>
<span class="line">		//用 this.$store.getters.getData()读取</span>
<span class="line">		getData(state){</span>
<span class="line">			return state;</span>
<span class="line">		}</span>
<span class="line">	},</span>
<span class="line">	mutations: {</span>
<span class="line">		// 更改state中状态的逻辑，同步操作</span>
<span class="line">		//用 this.$store.commit(&#39;function_name&#39;,payload) 使用，若无参数则不写payload</span>
<span class="line">		add(state,n){</span>
<span class="line">			state.count += n;</span>
<span class="line">		}</span>
<span class="line">	},</span>
<span class="line">	actions: {</span>
<span class="line">		// 提交mutation，异步操作</span>
<span class="line">	}</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">export default store</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202109/2194212-20210926175836286-2019292716.png" alt="img"></p>`,20)]))}const p=n(l,[["render",t]]),c=JSON.parse('{"path":"/article-uniapp/3.%20uniapp%E4%B8%ADvuex%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html","title":"uniapp中vuex的基本使用","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"1. 创建一个uniapp项目","slug":"_1-创建一个uniapp项目","link":"#_1-创建一个uniapp项目","children":[]},{"level":3,"title":"2. 在项目目录下用npm安装 vuex","slug":"_2-在项目目录下用npm安装-vuex","link":"#_2-在项目目录下用npm安装-vuex","children":[]},{"level":3,"title":"3. 在项目根目录下创建 store文件夹，在store文件夹中创建 index.js","slug":"_3-在项目根目录下创建-store文件夹-在store文件夹中创建-index-js","link":"#_3-在项目根目录下创建-store文件夹-在store文件夹中创建-index-js","children":[]},{"level":3,"title":"4. 在index.js中显式地通过 Vue.use() 来安装 Vuex：","slug":"_4-在index-js中显式地通过-vue-use-来安装-vuex","link":"#_4-在index-js中显式地通过-vue-use-来安装-vuex","children":[]},{"level":3,"title":"5.在index.js中创建store","slug":"_5-在index-js中创建store","link":"#_5-在index-js中创建store","children":[]},{"level":2,"title":"vuex的基础用法","slug":"vuex的基础用法","link":"#vuex的基础用法","children":[]}],"git":{"updatedTime":1749527809000,"contributors":[{"name":"twoflowers","username":"","email":"1292548615@qq.com","commits":1}],"changelog":[{"hash":"f3b962e68f6ffcb84ea2e07a3893611af691f7e8","time":1749527809000,"email":"1292548615@qq.com","author":"twoflowers","message":"初步完成navbar和sidebar的设置"}]},"filePathRelative":"article-uniapp/3. uniapp中vuex的基本使用.md"}');export{p as comp,c as data};
