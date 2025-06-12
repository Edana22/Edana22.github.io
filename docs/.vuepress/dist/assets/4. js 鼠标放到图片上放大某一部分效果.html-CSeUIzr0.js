import{_ as n,c as i,b as l,o as e}from"./app-DyBO3kfI.js";const a={};function c(p,s){return e(),i("div",null,s[0]||(s[0]=[l(`<h1 id="js-鼠标放到图片上放大某一部分效果" tabindex="-1"><a class="header-anchor" href="#js-鼠标放到图片上放大某一部分效果"><span>js 鼠标放到图片上放大某一部分效果</span></a></h1><p>动图效果：</p><p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211201135143342-2140762270.gif" alt="img"></p><p>代码：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">    &lt;head&gt;</span>
<span class="line">        &lt;meta charset=&quot;utf-8&quot;&gt;</span>
<span class="line">        &lt;title&gt;&lt;/title&gt;</span>
<span class="line">        &lt;style type=&quot;text/css&quot;&gt;</span>
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
<span class="line">        &lt;/style&gt;</span>
<span class="line">    &lt;/head&gt;</span>
<span class="line">    &lt;body&gt;</span>
<span class="line">        &lt;div class=&quot;container&quot;&gt;</span>
<span class="line">            &lt;div class=&quot;box&quot; style=&quot;top: 0px;left: 0px;&quot;&gt;&lt;/div&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        &lt;div class=&quot;bigger&quot;&gt;</span>
<span class="line">            &lt;img class=&quot;biggerImg&quot; src=&quot;./images/1.png&quot; style=&quot;display: none;&quot; /&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    &lt;/body&gt;</span>
<span class="line"></span>
<span class="line">    &lt;script type=&quot;text/javascript&quot;&gt;</span>
<span class="line">        var container = document.querySelector(&quot;.container&quot;);</span>
<span class="line">        var box = document.querySelector(&quot;.box&quot;);</span>
<span class="line">        var bigger = document.querySelector(&quot;.biggerImg&quot;);</span>
<span class="line">        var width = box.parentNode.offsetWidth;</span>
<span class="line">        var height = box.parentNode.offsetHeight;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        container.addEventListener(&quot;mousedown&quot;, function() {</span>
<span class="line">            bigger.style.display = &quot;block&quot;;</span>
<span class="line">            container.addEventListener(&quot;mousemove&quot;, mouseMove);</span>
<span class="line">            container.addEventListener(&quot;mouseup&quot;, function() {</span>
<span class="line">                bigger.style.display = &quot;none&quot;;</span>
<span class="line">                container.removeEventListener(&quot;mousemove&quot;, mouseMove);</span>
<span class="line">            })</span>
<span class="line">        });</span>
<span class="line"></span>
<span class="line">        function mouseMove(e) {</span>
<span class="line">            if (e.clientY - 50 &lt; 0) {</span>
<span class="line">                box.style.top = 0;</span>
<span class="line">                bigger.style.top = 0;</span>
<span class="line">            } else if (e.clientY - 50 &gt; 100) {</span>
<span class="line">                box.style.top = 100;</span>
<span class="line">                bigger.style.top = 100;</span>
<span class="line">            } else {</span>
<span class="line">                box.style.top = e.clientY - 50 + &quot;px&quot;;</span>
<span class="line">                bigger.style.top = -2 * (e.clientY - 50) + &quot;px&quot;;</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            if (e.clientX - 50 &lt; 0) {</span>
<span class="line">                box.style.left = 0;</span>
<span class="line">                bigger.style.left = 0;</span>
<span class="line">            } else if (e.clientX - 50 &gt; 100) {</span>
<span class="line">                box.style.left = 100;</span>
<span class="line">                bigger.style.left = 100;</span>
<span class="line">            } else {</span>
<span class="line">                box.style.left = e.clientX - 50 + &quot;px&quot;;</span>
<span class="line">                bigger.style.left = -2 * (e.clientX - 50) + &quot;px&quot;;</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const t=n(a,[["render",c]]),v=JSON.parse('{"path":"/article-web/js/4.%20js%20%E9%BC%A0%E6%A0%87%E6%94%BE%E5%88%B0%E5%9B%BE%E7%89%87%E4%B8%8A%E6%94%BE%E5%A4%A7%E6%9F%90%E4%B8%80%E9%83%A8%E5%88%86%E6%95%88%E6%9E%9C.html","title":"js 鼠标放到图片上放大某一部分效果","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1749527809000,"contributors":[{"name":"twoflowers","username":"","email":"1292548615@qq.com","commits":1}],"changelog":[{"hash":"f3b962e68f6ffcb84ea2e07a3893611af691f7e8","time":1749527809000,"email":"1292548615@qq.com","author":"twoflowers","message":"初步完成navbar和sidebar的设置"}]},"filePathRelative":"article-web/js/4. js 鼠标放到图片上放大某一部分效果.md"}');export{t as comp,v as data};
