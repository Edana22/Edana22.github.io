<template><div><h1 id="js-使用localstorage本地存储用户名、密码" tabindex="-1"><a class="header-anchor" href="#js-使用localstorage本地存储用户名、密码"><span>js 使用localStorage本地存储用户名、密码</span></a></h1>
<p>效果图如下：</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211202153725043-1348661792.gif" alt="img"></p>
<p>代码如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;!DOCTYPE html></span>
<span class="line">&lt;html></span>
<span class="line">    &lt;head></span>
<span class="line">        &lt;meta charset="utf-8"></span>
<span class="line">        &lt;title>&lt;/title></span>
<span class="line">    &lt;/head></span>
<span class="line">    &lt;style></span>
<span class="line">        #check{</span>
<span class="line">            width: 15px;</span>
<span class="line">            height: 15px;</span>
<span class="line">        }</span>
<span class="line">    &lt;/style></span>
<span class="line">    &lt;body></span>
<span class="line">        &lt;span>用户名：&lt;/span></span>
<span class="line">        &lt;input id="uname" /></span>
<span class="line">        &lt;span>密码&lt;/span></span>
<span class="line">        &lt;input type="password" id="psw" /></span>
<span class="line">        &lt;br></span>
<span class="line">        &lt;br></span>
<span class="line">        &lt;input type="checkbox" id="check" /></span>
<span class="line">        &lt;span>存储用户名、密码到本地&lt;/span></span>
<span class="line">    &lt;/body></span>
<span class="line">    &lt;script></span>
<span class="line">        var uname = document.querySelector("#uname");</span>
<span class="line">        var psw = document.querySelector("#psw");</span>
<span class="line">        var check = document.querySelector("#check");</span>
<span class="line">        </span>
<span class="line">        uname.addEventListener("change",()=>{</span>
<span class="line">            if(!localStorage.getItem(uname.value)){</span>
<span class="line">                check.checked = false;</span>
<span class="line">            }</span>
<span class="line">        })</span>
<span class="line">        check.addEventListener("change",()=>{</span>
<span class="line">            if(check.checked){</span>
<span class="line">                //选中，记住账号名和密码</span>
<span class="line">                localStorage.setItem(uname.value, psw.value);</span>
<span class="line">                console.log(localStorage.getItem(uname.value));</span>
<span class="line">            }</span>
<span class="line">        })</span>
<span class="line">    &lt;/script></span>
<span class="line">&lt;/html></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


