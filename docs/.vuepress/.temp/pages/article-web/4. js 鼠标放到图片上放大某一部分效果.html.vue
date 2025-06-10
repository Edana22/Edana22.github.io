<template><div><h1 id="js-鼠标放到图片上放大某一部分效果" tabindex="-1"><a class="header-anchor" href="#js-鼠标放到图片上放大某一部分效果"><span>js 鼠标放到图片上放大某一部分效果</span></a></h1>
<p>动图效果：</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211201135143342-2140762270.gif" alt="img"></p>
<p>代码：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;!DOCTYPE html></span>
<span class="line">&lt;html></span>
<span class="line">    &lt;head></span>
<span class="line">        &lt;meta charset="utf-8"></span>
<span class="line">        &lt;title>&lt;/title></span>
<span class="line">        &lt;style type="text/css"></span>
<span class="line">            * {</span>
<span class="line">                margin: 0;</span>
<span class="line">                padding: 0;</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            .container,</span>
<span class="line">            img,</span>
<span class="line">            .bigger {</span>
<span class="line">                width: 200px;</span>
<span class="line">                height: 200px;</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            .container {</span>
<span class="line">                display: inline-block;</span>
<span class="line">                position: relative;</span>
<span class="line">                background: url(images/1.png) center;</span>
<span class="line">                background-size: contain;</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            img {</span>
<span class="line">                position: absolute;</span>
<span class="line">                top: 0;</span>
<span class="line">                left: 0;</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            .box {</span>
<span class="line">                width: 100px;</span>
<span class="line">                height: 100px;</span>
<span class="line">                background-color: #ffff7f;</span>
<span class="line">                opacity: 0.7;</span>
<span class="line">                position: absolute;</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            .bigger {</span>
<span class="line">                position: relative;</span>
<span class="line">                display: inline-block;</span>
<span class="line">                overflow: hidden;</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            .biggerImg {</span>
<span class="line">                position: absolute;</span>
<span class="line">                transform: scale(2);</span>
<span class="line">                transform-origin: top left;</span>
<span class="line">            }</span>
<span class="line">        &lt;/style></span>
<span class="line">    &lt;/head></span>
<span class="line">    &lt;body></span>
<span class="line">        &lt;div class="container"></span>
<span class="line">            &lt;div class="box" style="top: 0px;left: 0px;">&lt;/div></span>
<span class="line">        &lt;/div></span>
<span class="line">        &lt;div class="bigger"></span>
<span class="line">            &lt;img class="biggerImg" src="./images/1.png" style="display: none;" /></span>
<span class="line">        &lt;/div></span>
<span class="line">    &lt;/body></span>
<span class="line"></span>
<span class="line">    &lt;script type="text/javascript"></span>
<span class="line">        var container = document.querySelector(".container");</span>
<span class="line">        var box = document.querySelector(".box");</span>
<span class="line">        var bigger = document.querySelector(".biggerImg");</span>
<span class="line">        var width = box.parentNode.offsetWidth;</span>
<span class="line">        var height = box.parentNode.offsetHeight;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        container.addEventListener("mousedown", function() {</span>
<span class="line">            bigger.style.display = "block";</span>
<span class="line">            container.addEventListener("mousemove", mouseMove);</span>
<span class="line">            container.addEventListener("mouseup", function() {</span>
<span class="line">                bigger.style.display = "none";</span>
<span class="line">                container.removeEventListener("mousemove", mouseMove);</span>
<span class="line">            })</span>
<span class="line">        });</span>
<span class="line"></span>
<span class="line">        function mouseMove(e) {</span>
<span class="line">            if (e.clientY - 50 &lt; 0) {</span>
<span class="line">                box.style.top = 0;</span>
<span class="line">                bigger.style.top = 0;</span>
<span class="line">            } else if (e.clientY - 50 > 100) {</span>
<span class="line">                box.style.top = 100;</span>
<span class="line">                bigger.style.top = 100;</span>
<span class="line">            } else {</span>
<span class="line">                box.style.top = e.clientY - 50 + "px";</span>
<span class="line">                bigger.style.top = -2 * (e.clientY - 50) + "px";</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            if (e.clientX - 50 &lt; 0) {</span>
<span class="line">                box.style.left = 0;</span>
<span class="line">                bigger.style.left = 0;</span>
<span class="line">            } else if (e.clientX - 50 > 100) {</span>
<span class="line">                box.style.left = 100;</span>
<span class="line">                bigger.style.left = 100;</span>
<span class="line">            } else {</span>
<span class="line">                box.style.left = e.clientX - 50 + "px";</span>
<span class="line">                bigger.style.left = -2 * (e.clientX - 50) + "px";</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    &lt;/script></span>
<span class="line">&lt;/html></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


