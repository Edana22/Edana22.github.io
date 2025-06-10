<template><div><h1 id="element-plus-组件switch注意事项" tabindex="-1"><a class="header-anchor" href="#element-plus-组件switch注意事项"><span>element-plus 组件switch注意事项</span></a></h1>
<h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2>
<p>[1] <a href="https://element-plus.org/zh-CN/component/switch.html" target="_blank" rel="noopener noreferrer">Switch 开关 | Element Plus</a></p>
<h2 id="起因" tabindex="-1"><a class="header-anchor" href="#起因"><span>起因</span></a></h2>
<p>某个项目的一个页面中要使用到 element-plus 的 switch 组件，但是出现一个问题，一旦使用 switch，绑定的变量就会全变成 0；不用 switch 绑定数据时页面显示的数据则正常。</p>
<h3 id="错误截图如下" tabindex="-1"><a class="header-anchor" href="#错误截图如下"><span>错误截图如下：</span></a></h3>
<p><img src="@source/./article-vue/vue-ecosystem/C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20250528152539692.png" alt="image-20250528152539692"></p>
<h3 id="错误代码及示例如下" tabindex="-1"><a class="header-anchor" href="#错误代码及示例如下"><span>错误代码及示例如下：</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">list<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"小黄鸭"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">online</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"小恐龙"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">online</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"小兔子"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">online</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"小蝴蝶"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">online</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>element-plus switch使用注意点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ list }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.online<span class="token punctuation">"</span></span> <span class="token attr-name">active-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">inactive-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="错误原因" tabindex="-1"><a class="header-anchor" href="#错误原因"><span>错误原因</span></a></h2>
<blockquote>
<p>官网文档中写了 <strong><code v-pre> v-model 支持 boolean / string / number， 必须等于 active-value 或 inactive-value</code></strong></p>
<p><img src="@source/./article-vue/vue-ecosystem/C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20250528145114344.png" alt="image-20250528145114344"></p>
</blockquote>
<p>来观察错误代码：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.online<span class="token punctuation">"</span></span> <span class="token attr-name">active-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">inactive-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注意：</p>
<ol>
<li><code v-pre>active-value=&quot;1&quot; inactive-value=&quot;0&quot;</code> 后面绑定的都是<strong>字符串</strong></li>
<li><code v-pre>online: 1</code> 这里的 <code v-pre>1</code> 是数字，<code v-pre>online: 0</code> 这里的 <code v-pre>0</code> 也是数字</li>
<li><code v-pre> :active-value=&quot;1&quot;  :inactive-value=&quot;0&quot;</code>   才是绑定数字 <code v-pre>1</code> 和 <code v-pre>0</code></li>
<li><strong><code v-pre> v-model=&quot;value&quot;</code> 中 <code v-pre>value </code>必须等于 <code v-pre>active-value</code> 或 <code v-pre>inactive-value</code></strong></li>
<li><code v-pre> v-model=&quot;value&quot;</code> 中 <code v-pre>value </code>先和 <code v-pre>active-value</code> 比较，相等就打开，否则就是关闭状态</li>
</ol>
<h3 id="先说switch为什么都关闭" tabindex="-1"><a class="header-anchor" href="#先说switch为什么都关闭"><span>先说switch为什么都关闭：</span></a></h3>
<ul>
<li><code v-pre>online: 1</code> 这里的 <code v-pre>1</code> 是数字，而 <code v-pre>active-value=&quot;1&quot;</code> 是和<strong>字符串</strong>判断</li>
<li>在这个组件中判断 <strong>数字1和字符串1</strong> <strong>不相等</strong>，也就是<code v-pre> item.online != active-value</code>，所以<code v-pre> el-switch</code> 是关闭状态</li>
</ul>
<h3 id="然后是为什么-list-显示的-online-是-0" tabindex="-1"><a class="header-anchor" href="#然后是为什么-list-显示的-online-是-0"><span>然后是为什么 {{list}} 显示的 online 是 0</span></a></h3>
<ul>
<li>
<p><code v-pre>v-model</code>是双向绑定，它可以修改<code v-pre>item.online</code>的值</p>
</li>
<li>
<p><strong><code v-pre> v-model=&quot;value&quot;</code> 中 <code v-pre>value </code>必须等于 <code v-pre>active-value</code> 或 <code v-pre>inactive-value</code></strong></p>
</li>
<li>
<p>此时的 <code v-pre>item.online</code> 不等于 <code v-pre>active-value</code>，所以变成了 <code v-pre>inactive-value </code> 的值</p>
</li>
<li>
<p>又因为  <code v-pre>active-value=&quot;1&quot; inactive-value=&quot;0&quot;</code> 后面绑定的都是字符串，所以 <code v-pre>value</code>，也就是<code v-pre> item.online</code> 的值变成了字符串</p>
</li>
<li>
<p><img src="@source/./article-vue/vue-ecosystem/C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20250528144728096.png" alt="image-20250528144728096"></p>
</li>
<li>
<p>仔细看这里的 0 不是数字 <code v-pre>0</code>，而是字符串 <code v-pre>&quot;0&quot;</code></p>
</li>
</ul>
<p>关于 <code v-pre>value </code>不等于 <code v-pre>active-value</code> 就会被赋值为 <code v-pre>inactive-value </code>可以用代码测试</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.online<span class="token punctuation">"</span></span> <span class="token attr-name">active-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">inactive-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="@source/./article-vue/vue-ecosystem/C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20250528165519448.png" alt="image-20250528165519448"></p>
<h2 id="正确写法" tabindex="-1"><a class="header-anchor" href="#正确写法"><span>正确写法</span></a></h2>
<p><code v-pre>active-value</code> 和 <code v-pre>inactive-value</code> 前加 <code v-pre>:</code> 绑定数字而不是字符串</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>element-plus switch使用注意点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ list }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">padding-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.online<span class="token punctuation">"</span></span> <span class="token attr-name">:active-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">:inactive-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/./article-vue/vue-ecosystem/C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20250528152145951.png" alt="image-20250528152145951"></p>
</div></template>


