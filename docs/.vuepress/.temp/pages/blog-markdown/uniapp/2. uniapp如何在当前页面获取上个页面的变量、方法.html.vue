<template><div><h1 id="uniapp如何在当前页面获取上个页面的变量、方法" tabindex="-1"><a class="header-anchor" href="#uniapp如何在当前页面获取上个页面的变量、方法"><span>uniapp如何在当前页面获取上个页面的变量、方法</span></a></h1>
<h3 id="getcurrentpages" tabindex="-1"><a class="header-anchor" href="#getcurrentpages"><span><a href="https://uniapp.dcloud.net.cn/collocation/frame/window?id=getcurrentpages" target="_blank" rel="noopener noreferrer">getCurrentPages()</a></span></a></h3>
<p><code v-pre>getCurrentPages()</code> 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。</p>
<p>注意： <code v-pre>getCurrentPages()</code>仅用于展示页面栈的情况，请勿修改页面栈，以免造成页面状态错误。</p>
<hr>
<p>如：页面点击路径为 “我的” | “我的收藏” | “罐表详情”，在“罐表详情”页使用 ：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">var pages = getCurrentPages();</span>
<span class="line">var prePage = pages[pages.length - 2];</span>
<span class="line">console.log("pages:",pages);</span>
<span class="line">console.log("prePage:",prePage);</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果如下：</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202109/2194212-20210913090629587-1130348935.png" alt="img"></p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202109/2194212-20210913090656634-612790233.png" alt="img"></p>
<p>在源码中：</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202109/2194212-20210913090721764-1540721181.png" alt="img"></p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202109/2194212-20210913090726070-1777683087.png" alt="img"></p>
</div></template>


