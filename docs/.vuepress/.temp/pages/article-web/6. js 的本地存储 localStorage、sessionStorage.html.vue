<template><div><h1 id="js-的本地存储-localstorage、sessionstorage" tabindex="-1"><a class="header-anchor" href="#js-的本地存储-localstorage、sessionstorage"><span>js 的本地存储 localStorage、sessionStorage</span></a></h1>
<h3 id="本地存储特性" tabindex="-1"><a class="header-anchor" href="#本地存储特性"><span>本地存储特性</span></a></h3>
<ol>
<li>数据存储在用户浏览器中</li>
<li>设置、读取方便，甚至页面刷新也不丢失数据</li>
<li>容量较大，sessionStorage 约5M，localStorage容量约20M</li>
<li>只能存储字符串，可以将对象JSON.stringify()编码后再存储</li>
</ol>
<p>localStorage：关闭浏览器后数据仍然存在，直到手动删除为止</p>
<ol>
<li>生命周期永久有效。除非手动删除，否则关闭页面也会存在</li>
<li>可以多窗口（页面）共享（同一浏览器可以共享）</li>
<li>以键值对的形式存储使用</li>
<li>window.localStorage中的 window 可以省略</li>
</ol>
<p>sessionStorage：刷新当前页后数据仍然存在，但关闭当前页后数据就没有了</p>
<ol>
<li>生命周期是浏览器窗口的生命周期，当前浏览器窗口关闭即消失</li>
<li>在同一个窗口（页面）下数据可以共享</li>
<li>以键值对的形式存储使用</li>
<li>window.sessionStorage中的 window 可以省略</li>
</ol>
<hr>
<h3 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage"><span>localStorage</span></a></h3>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211202142131054-1540127942.gif" alt="img"></p>
<p>代码如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;!DOCTYPE html></span>
<span class="line">&lt;html></span>
<span class="line">    &lt;head></span>
<span class="line">        &lt;meta charset="utf-8"></span>
<span class="line">        &lt;title>&lt;/title></span>
<span class="line">    &lt;/head></span>
<span class="line">    &lt;body></span>
<span class="line">        &lt;div></span>
<span class="line">            &lt;button>使用 localStorage &lt;/button></span>
<span class="line">            &lt;input class="input" placeholder="请输入用户名" /></span>
<span class="line">            &lt;button class="save">存储用户名&lt;/button></span>
<span class="line">            &lt;button class="get">获取用户名&lt;/button></span>
<span class="line">            &lt;button class="remove">删除用户名&lt;/button></span>
<span class="line">            &lt;button class="clear">清除所有用户名&lt;/button></span>
<span class="line">        &lt;/div></span>
<span class="line">    &lt;/body></span>
<span class="line"></span>
<span class="line">    &lt;script></span>
<span class="line">        /**</span>
<span class="line">         * 本地存储特性</span>
<span class="line">         * 1、 数据存储在用户浏览器中</span>
<span class="line">         * 2、设置、读取方便，甚至页面刷新也不丢失数据</span>
<span class="line">         * 3、容量较大，sessionStorage 约5M，localStorage容量约20M</span>
<span class="line">         * 4、只能存储字符串，可以将对象JSON.stringify()编码后再存储</span>
<span class="line">         * */</span>
<span class="line">        /**</span>
<span class="line">         * localStorage</span>
<span class="line">         * 1、生命周期永久有效。除非手动删除，否则关闭页面也会存在</span>
<span class="line">         * 2、可以多窗口（页面）共享（同一浏览器可以共享）</span>
<span class="line">         * 3、以键值对的形式存储使用</span>
<span class="line">         * 4、window.localStorage中的 window 可以省略</span>
<span class="line">         * */</span>
<span class="line">        var inputL = document.querySelector(".input");</span>
<span class="line">        var saveL = document.querySelector(".save");</span>
<span class="line">        var getL = document.querySelector(".get");</span>
<span class="line">        var removeL = document.querySelector(".remove");</span>
<span class="line">        var clearL = document.querySelector(".clear");</span>
<span class="line"></span>
<span class="line">        saveL.addEventListener("click", () => {</span>
<span class="line">            var name = inputL.value;</span>
<span class="line">            //window 可以省略</span>
<span class="line">            window.localStorage.setItem("username", name);</span>
<span class="line">        })</span>
<span class="line">        getL.addEventListener("click", () => {</span>
<span class="line">            // 获取用户名</span>
<span class="line">            console.log("localStorage 用户名：", window.localStorage.getItem("username"));</span>
<span class="line">        })</span>
<span class="line">        removeL.addEventListener("click", () => {</span>
<span class="line">            localStorage.removeItem("username");</span>
<span class="line">        })</span>
<span class="line">        clearL.addEventListener("click", () => {</span>
<span class="line">            localStorage.clear();</span>
<span class="line">        })</span>
<span class="line">    &lt;/script></span>
<span class="line">&lt;/html></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sessionstorage" tabindex="-1"><a class="header-anchor" href="#sessionstorage"><span>sessionStorage</span></a></h4>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211202142617166-615484016.gif" alt="img"></p>
<p>代码如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;!DOCTYPE html></span>
<span class="line">&lt;html></span>
<span class="line">    &lt;head></span>
<span class="line">        &lt;meta charset="utf-8"></span>
<span class="line">        &lt;title>&lt;/title></span>
<span class="line">    &lt;/head></span>
<span class="line">    &lt;body></span>
<span class="line">        &lt;div></span>
<span class="line">            &lt;button>使用sessionStorage&lt;/button></span>
<span class="line">            &lt;input id="input" placeholder="请输入用户名" /></span>
<span class="line">            &lt;button id="save">存储用户名&lt;/button></span>
<span class="line">            &lt;button id="get">获取用户名&lt;/button></span>
<span class="line">            &lt;button id="remove">删除用户名&lt;/button></span>
<span class="line">            &lt;button id="clear">清除所有用户名&lt;/button></span>
<span class="line">        &lt;/div></span>
<span class="line">    &lt;/body></span>
<span class="line"></span>
<span class="line">    &lt;script></span>
<span class="line">        /**</span>
<span class="line">         * 本地存储特性</span>
<span class="line">         * 1、 数据存储在用户浏览器中</span>
<span class="line">         * 2、设置、读取方便，甚至页面刷新也不丢失数据</span>
<span class="line">         * 3、容量较大，sessionStorage 约5M，localStorage容量约20M</span>
<span class="line">         * 4、只能存储字符串，可以将对象JSON.stringify()编码后再存储</span>
<span class="line">         * */</span>
<span class="line">        /**</span>
<span class="line">         * sessionStorage </span>
<span class="line">         * 生命周期是浏览器窗口的生命周期，当前浏览器窗口关闭即消失</span>
<span class="line">         * 在同一个窗口（页面）下数据可以共享</span>
<span class="line">         * 以键值对的形式存储使用</span>
<span class="line">         * window.sessionStorage中的 window 可以省略</span>
<span class="line">         * */</span>
<span class="line">        var input = document.querySelector("#input");</span>
<span class="line">        var save = document.querySelector("#save");</span>
<span class="line">        var get = document.querySelector("#get");</span>
<span class="line">        var remove = document.querySelector("#remove");</span>
<span class="line">        var clear = document.querySelector("#clear");</span>
<span class="line"></span>
<span class="line">        save.addEventListener("click", () => {</span>
<span class="line">            var name = input.value;</span>
<span class="line">            //window 可以省略</span>
<span class="line">            window.sessionStorage.setItem("username", name);</span>
<span class="line">        })</span>
<span class="line">        get.addEventListener("click", () => {</span>
<span class="line">            // 获取用户名</span>
<span class="line">            console.log("sessionStorage 用户名：", window.sessionStorage.getItem("username"));</span>
<span class="line">        })</span>
<span class="line">        remove.addEventListener("click", () => {</span>
<span class="line">            sessionStorage.removeItem("username");</span>
<span class="line">        })</span>
<span class="line">        clear.addEventListener("click", () => {</span>
<span class="line">            sessionStorage.clear();</span>
<span class="line">        })</span>
<span class="line">    &lt;/script></span>
<span class="line">&lt;/html></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


