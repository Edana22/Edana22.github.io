import{_ as n,c as e,b as l,o as a}from"./app-CfuPOgCv.js";const i={};function t(d,s){return a(),e("div",null,s[0]||(s[0]=[l(`<h1 id="html中引入外部js文件-使用外部js文件里的方法" tabindex="-1"><a class="header-anchor" href="#html中引入外部js文件-使用外部js文件里的方法"><span>html中引入外部js文件，使用外部js文件里的方法</span></a></h1><p>外部js文件1：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> * 加了window.onload 后，直接引入js文件即可</span>
<span class="line"> * 页面资源全部加载完毕后会自动调用window.onload里的回调函数</span>
<span class="line"> */</span>
<span class="line">window.addEventListener(&quot;load&quot;,function(){</span>
<span class="line">    console.log(&quot;我是外部js test1&quot;);</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>外部js文件2：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> * 普通函数</span>
<span class="line"> * 引入js文件后，还需要在 script 里手动调用一下函数名，这个函数才会执行</span>
<span class="line"> */</span>
<span class="line">function test2(){</span>
<span class="line">    console.log(&quot;我是外部js test2&quot;);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>html文件：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">    &lt;head&gt;</span>
<span class="line">        &lt;meta charset=&quot;utf-8&quot;&gt;</span>
<span class="line">        &lt;title&gt;&lt;/title&gt;</span>
<span class="line">    &lt;/head&gt;</span>
<span class="line">    &lt;script src=&quot;js/test.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">    &lt;script src=&quot;js/test2.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">    &lt;body&gt;</span>
<span class="line">        &lt;div id=&quot;app&quot;&gt;</span>
<span class="line">            引入外部js</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        &lt;script&gt;</span>
<span class="line">            test2();</span>
<span class="line">        &lt;/script&gt;</span>
<span class="line">    &lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211202101500929-827907570.png" alt="img"></p>`,9)]))}const p=n(i,[["render",t]]),r=JSON.parse('{"path":"/article-web/js/5.%20html%E4%B8%AD%E5%BC%95%E5%85%A5%E5%A4%96%E9%83%A8js%E6%96%87%E4%BB%B6%EF%BC%8C%E4%BD%BF%E7%94%A8%E5%A4%96%E9%83%A8js%E6%96%87%E4%BB%B6%E9%87%8C%E7%9A%84%E6%96%B9%E6%B3%95.html","title":"html中引入外部js文件，使用外部js文件里的方法","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1749527809000,"contributors":[{"name":"twoflowers","username":"twoflowers","email":"1292548615@qq.com","commits":1,"url":"https://github.com/twoflowers"}],"changelog":[{"hash":"f3b962e68f6ffcb84ea2e07a3893611af691f7e8","time":1749527809000,"email":"1292548615@qq.com","author":"twoflowers","message":"初步完成navbar和sidebar的设置"}]},"filePathRelative":"article-web/js/5. html中引入外部js文件，使用外部js文件里的方法.md"}');export{p as comp,r as data};
