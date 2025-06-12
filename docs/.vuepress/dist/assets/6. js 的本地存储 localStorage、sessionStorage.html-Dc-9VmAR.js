import{_ as n,c as l,b as a,o as e}from"./app-DyBO3kfI.js";const i={};function t(c,s){return e(),l("div",null,s[0]||(s[0]=[a(`<h1 id="js-的本地存储-localstorage、sessionstorage" tabindex="-1"><a class="header-anchor" href="#js-的本地存储-localstorage、sessionstorage"><span>js 的本地存储 localStorage、sessionStorage</span></a></h1><h3 id="本地存储特性" tabindex="-1"><a class="header-anchor" href="#本地存储特性"><span>本地存储特性</span></a></h3><ol><li>数据存储在用户浏览器中</li><li>设置、读取方便，甚至页面刷新也不丢失数据</li><li>容量较大，sessionStorage 约5M，localStorage容量约20M</li><li>只能存储字符串，可以将对象JSON.stringify()编码后再存储</li></ol><p>localStorage：关闭浏览器后数据仍然存在，直到手动删除为止</p><ol><li>生命周期永久有效。除非手动删除，否则关闭页面也会存在</li><li>可以多窗口（页面）共享（同一浏览器可以共享）</li><li>以键值对的形式存储使用</li><li>window.localStorage中的 window 可以省略</li></ol><p>sessionStorage：刷新当前页后数据仍然存在，但关闭当前页后数据就没有了</p><ol><li>生命周期是浏览器窗口的生命周期，当前浏览器窗口关闭即消失</li><li>在同一个窗口（页面）下数据可以共享</li><li>以键值对的形式存储使用</li><li>window.sessionStorage中的 window 可以省略</li></ol><hr><h3 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage"><span>localStorage</span></a></h3><p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211202142131054-1540127942.gif" alt="img"></p><p>代码如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">    &lt;head&gt;</span>
<span class="line">        &lt;meta charset=&quot;utf-8&quot;&gt;</span>
<span class="line">        &lt;title&gt;&lt;/title&gt;</span>
<span class="line">    &lt;/head&gt;</span>
<span class="line">    &lt;body&gt;</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;button&gt;使用 localStorage &lt;/button&gt;</span>
<span class="line">            &lt;input class=&quot;input&quot; placeholder=&quot;请输入用户名&quot; /&gt;</span>
<span class="line">            &lt;button class=&quot;save&quot;&gt;存储用户名&lt;/button&gt;</span>
<span class="line">            &lt;button class=&quot;get&quot;&gt;获取用户名&lt;/button&gt;</span>
<span class="line">            &lt;button class=&quot;remove&quot;&gt;删除用户名&lt;/button&gt;</span>
<span class="line">            &lt;button class=&quot;clear&quot;&gt;清除所有用户名&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    &lt;/body&gt;</span>
<span class="line"></span>
<span class="line">    &lt;script&gt;</span>
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
<span class="line">        var inputL = document.querySelector(&quot;.input&quot;);</span>
<span class="line">        var saveL = document.querySelector(&quot;.save&quot;);</span>
<span class="line">        var getL = document.querySelector(&quot;.get&quot;);</span>
<span class="line">        var removeL = document.querySelector(&quot;.remove&quot;);</span>
<span class="line">        var clearL = document.querySelector(&quot;.clear&quot;);</span>
<span class="line"></span>
<span class="line">        saveL.addEventListener(&quot;click&quot;, () =&gt; {</span>
<span class="line">            var name = inputL.value;</span>
<span class="line">            //window 可以省略</span>
<span class="line">            window.localStorage.setItem(&quot;username&quot;, name);</span>
<span class="line">        })</span>
<span class="line">        getL.addEventListener(&quot;click&quot;, () =&gt; {</span>
<span class="line">            // 获取用户名</span>
<span class="line">            console.log(&quot;localStorage 用户名：&quot;, window.localStorage.getItem(&quot;username&quot;));</span>
<span class="line">        })</span>
<span class="line">        removeL.addEventListener(&quot;click&quot;, () =&gt; {</span>
<span class="line">            localStorage.removeItem(&quot;username&quot;);</span>
<span class="line">        })</span>
<span class="line">        clearL.addEventListener(&quot;click&quot;, () =&gt; {</span>
<span class="line">            localStorage.clear();</span>
<span class="line">        })</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sessionstorage" tabindex="-1"><a class="header-anchor" href="#sessionstorage"><span>sessionStorage</span></a></h4><p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211202142617166-615484016.gif" alt="img"></p><p>代码如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">    &lt;head&gt;</span>
<span class="line">        &lt;meta charset=&quot;utf-8&quot;&gt;</span>
<span class="line">        &lt;title&gt;&lt;/title&gt;</span>
<span class="line">    &lt;/head&gt;</span>
<span class="line">    &lt;body&gt;</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;button&gt;使用sessionStorage&lt;/button&gt;</span>
<span class="line">            &lt;input id=&quot;input&quot; placeholder=&quot;请输入用户名&quot; /&gt;</span>
<span class="line">            &lt;button id=&quot;save&quot;&gt;存储用户名&lt;/button&gt;</span>
<span class="line">            &lt;button id=&quot;get&quot;&gt;获取用户名&lt;/button&gt;</span>
<span class="line">            &lt;button id=&quot;remove&quot;&gt;删除用户名&lt;/button&gt;</span>
<span class="line">            &lt;button id=&quot;clear&quot;&gt;清除所有用户名&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    &lt;/body&gt;</span>
<span class="line"></span>
<span class="line">    &lt;script&gt;</span>
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
<span class="line">        var input = document.querySelector(&quot;#input&quot;);</span>
<span class="line">        var save = document.querySelector(&quot;#save&quot;);</span>
<span class="line">        var get = document.querySelector(&quot;#get&quot;);</span>
<span class="line">        var remove = document.querySelector(&quot;#remove&quot;);</span>
<span class="line">        var clear = document.querySelector(&quot;#clear&quot;);</span>
<span class="line"></span>
<span class="line">        save.addEventListener(&quot;click&quot;, () =&gt; {</span>
<span class="line">            var name = input.value;</span>
<span class="line">            //window 可以省略</span>
<span class="line">            window.sessionStorage.setItem(&quot;username&quot;, name);</span>
<span class="line">        })</span>
<span class="line">        get.addEventListener(&quot;click&quot;, () =&gt; {</span>
<span class="line">            // 获取用户名</span>
<span class="line">            console.log(&quot;sessionStorage 用户名：&quot;, window.sessionStorage.getItem(&quot;username&quot;));</span>
<span class="line">        })</span>
<span class="line">        remove.addEventListener(&quot;click&quot;, () =&gt; {</span>
<span class="line">            sessionStorage.removeItem(&quot;username&quot;);</span>
<span class="line">        })</span>
<span class="line">        clear.addEventListener(&quot;click&quot;, () =&gt; {</span>
<span class="line">            sessionStorage.clear();</span>
<span class="line">        })</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const o=n(i,[["render",t]]),r=JSON.parse('{"path":"/article-web/js/6.%20js%20%E7%9A%84%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8%20localStorage%E3%80%81sessionStorage.html","title":"js 的本地存储 localStorage、sessionStorage","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"本地存储特性","slug":"本地存储特性","link":"#本地存储特性","children":[]},{"level":3,"title":"localStorage","slug":"localstorage","link":"#localstorage","children":[]}],"git":{"updatedTime":1749527809000,"contributors":[{"name":"twoflowers","username":"","email":"1292548615@qq.com","commits":1}],"changelog":[{"hash":"f3b962e68f6ffcb84ea2e07a3893611af691f7e8","time":1749527809000,"email":"1292548615@qq.com","author":"twoflowers","message":"初步完成navbar和sidebar的设置"}]},"filePathRelative":"article-web/js/6. js 的本地存储 localStorage、sessionStorage.md"}');export{o as comp,r as data};
