<template><div><h1 id="html中引入外部js文件-使用外部js文件里的方法" tabindex="-1"><a class="header-anchor" href="#html中引入外部js文件-使用外部js文件里的方法"><span>html中引入外部js文件，使用外部js文件里的方法</span></a></h1>
<p>外部js文件1：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">/**</span>
<span class="line"> * 加了window.onload 后，直接引入js文件即可</span>
<span class="line"> * 页面资源全部加载完毕后会自动调用window.onload里的回调函数</span>
<span class="line"> */</span>
<span class="line">window.addEventListener("load",function(){</span>
<span class="line">    console.log("我是外部js test1");</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>外部js文件2：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">/**</span>
<span class="line"> * 普通函数</span>
<span class="line"> * 引入js文件后，还需要在 script 里手动调用一下函数名，这个函数才会执行</span>
<span class="line"> */</span>
<span class="line">function test2(){</span>
<span class="line">    console.log("我是外部js test2");</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>html文件：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;!DOCTYPE html></span>
<span class="line">&lt;html></span>
<span class="line">    &lt;head></span>
<span class="line">        &lt;meta charset="utf-8"></span>
<span class="line">        &lt;title>&lt;/title></span>
<span class="line">    &lt;/head></span>
<span class="line">    &lt;script src="js/test.js">&lt;/script></span>
<span class="line">    &lt;script src="js/test2.js">&lt;/script></span>
<span class="line">    &lt;body></span>
<span class="line">        &lt;div id="app"></span>
<span class="line">            引入外部js</span>
<span class="line">        &lt;/div></span>
<span class="line">        &lt;script></span>
<span class="line">            test2();</span>
<span class="line">        &lt;/script></span>
<span class="line">    &lt;/body></span>
<span class="line">&lt;/html></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211202101500929-827907570.png" alt="img"></p>
</div></template>


