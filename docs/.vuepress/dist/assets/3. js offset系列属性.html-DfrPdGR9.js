import{_ as n,c as l,b as i,o as e}from"./app-DyBO3kfI.js";const a={};function t(d,s){return e(),l("div",null,s[0]||(s[0]=[i(`<h1 id="js-offset系列属性" tabindex="-1"><a class="header-anchor" href="#js-offset系列属性"><span>js offset系列属性</span></a></h1><hr><p>offsetParent:返回该元素有定位的父级，如果父级都没有定位则返回body</p><ul><li></li><li><p>offsetTop:返回元素相对父级（带有定位的父级）上方的偏移</p></li><li><p>offsetLeft:返回元素相对父级（带有定位的父级）左边框的偏移</p></li><li><p>offsetWidth:返回自身的宽度，包括padding、border、内容区，返回数值不带单位</p></li><li><p>offsetHeight:返回自身的高度，包括padding、border、内容区，返回数值不带单位</p></li><li></li><li><p>style.width 只能获取行内样式的数据，返回有单位，能用js修改数值</p></li><li><p>offsetWidth只能读不能改，返回无单位</p></li></ul><p><strong>注意：要放在js代码前面，js中才能正确获取offset系列属性。如果style代码要放在js代码后面，需要使用 window.onload 等待资源加载完毕再执行js代码。</strong></p><hr><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">    &lt;head&gt;</span>
<span class="line">        &lt;meta charset=&quot;utf-8&quot;&gt;</span>
<span class="line">        &lt;title&gt;&lt;/title&gt;</span>
<span class="line">    &lt;/head&gt;</span>
<span class="line">    &lt;body&gt;</span>
<span class="line">        &lt;div class=&quot;parent&quot;&gt;</span>
<span class="line">            &lt;div class=&quot;child&quot;&gt;child&lt;/div&gt;</span>
<span class="line">            &lt;div id=&quot;style&quot; style=&quot;width: 88px;height: 66px;background-color: #00FFFF;&quot;&gt;</span>
<span class="line">                test style</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        </span>
<span class="line">    &lt;/body&gt;</span>
<span class="line">    &lt;script&gt;</span>
<span class="line">    window.onload = function(){</span>
<span class="line">        /**</span>
<span class="line">         * offsetParent:返回该元素有定位的父级，如果父级都没有定位则返回body</span>
<span class="line">         * </span>
<span class="line">         * offsetTop:返回元素相对父级（带有定位的父级）上方的偏移</span>
<span class="line">         * offsetLeft:返回元素相对父级（带有定位的父级）左边框的偏移</span>
<span class="line">         * offsetWidth:返回自身的宽度，包括padding、border、内容区，返回数值不带单位</span>
<span class="line">         * offsetHeight:返回自身的高度，包括padding、border、内容区，返回数值不带单位</span>
<span class="line">         * </span>
<span class="line">         * style.width 只能获取行内样式的数据，返回有单位，能用js修改数值</span>
<span class="line">         * offsetWidth只能读不能改，返回无单位</span>
<span class="line">         * */</span>
<span class="line">        var parent = document.querySelector(&quot;.parent&quot;);</span>
<span class="line">        console.log(&quot;parentNode:&quot;,parent.parentNode);</span>
<span class="line">        var child = document.querySelector(&quot;.child&quot;);</span>
<span class="line">        console.log(&quot;offsetParent:&quot;, child.offsetParent);</span>
<span class="line">        console.log(&quot;offsetTop:&quot;, child.offsetTop);</span>
<span class="line">        console.log(&quot;offsetLeft:&quot;, child.offsetLeft);</span>
<span class="line">        console.log(&quot;offsetWidth:&quot;, child.offsetWidth);</span>
<span class="line">        console.log(&quot;offsetHeight:&quot;, child.offsetHeight);</span>
<span class="line">        </span>
<span class="line">        console.log(&quot;--------------------------------&quot;);</span>
<span class="line">        var style = document.querySelector(&quot;#style&quot;);</span>
<span class="line">        console.log(&quot;offsetWidth:&quot;,style.offsetWidth);</span>
<span class="line">        console.log(&quot;style.width:&quot;,style.style.width);</span>
<span class="line">        style.style.width = 111+&quot;px&quot;;//这句生效，注意加单位</span>
<span class="line">        console.log(style.style.width);</span>
<span class="line">        style.offsetWidth = 222+&quot;px&quot;;//这句不生效</span>
<span class="line">        console.log(style.offsetWidth);</span>
<span class="line">    }</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line"></span>
<span class="line">    &lt;style&gt;</span>
<span class="line">        * {</span>
<span class="line">            padding: 0;</span>
<span class="line">            margin: 0;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        .parent {</span>
<span class="line">            position: relative;</span>
<span class="line">            display: inline-block;</span>
<span class="line">            width: 200px;</span>
<span class="line">            height: 200px;</span>
<span class="line">            margin: 50px;</span>
<span class="line">            background-color: #008000;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        .child {</span>
<span class="line">            display: inline-block;</span>
<span class="line">            position: absolute;</span>
<span class="line">            width: 50px;</span>
<span class="line">            height: 50px;</span>
<span class="line">            margin: 10px;</span>
<span class="line">            border: 5px solid yellow;</span>
<span class="line">            background-color: red;</span>
<span class="line">        }</span>
<span class="line">        #style{</span>
<span class="line">            position: absolute;</span>
<span class="line">            bottom: 0;</span>
<span class="line">            right: 0;</span>
<span class="line">        }</span>
<span class="line">    &lt;/style&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211201091958224-160721846.png" alt="img"></p><h3 id="style和offsetwidth的区别" tabindex="-1"><a class="header-anchor" href="#style和offsetwidth的区别"><span>style和offsetWidth的区别：</span></a></h3><ul><li>style.width 只能获取行内样式的数据，返回有单位，能用js修改数值</li><li>offsetWidth只能读不能改，返回无单位</li></ul><p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211201092355937-2112786319.png" alt="img"></p><h3 id="对于-style-width-只能获取行内样式的数据-如果没有行内样式-第一次获取style-width-会是空-但是给style-width-赋值后-再次获取能正常获取到值。" tabindex="-1"><a class="header-anchor" href="#对于-style-width-只能获取行内样式的数据-如果没有行内样式-第一次获取style-width-会是空-但是给style-width-赋值后-再次获取能正常获取到值。"><span>对于“style.width 只能获取行内样式的数据 ”，如果没有行内样式，第一次获取style.width 会是空，但是给style.width 赋值后，再次获取能正常获取到值。</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">    &lt;head&gt;</span>
<span class="line">        &lt;meta charset=&quot;utf-8&quot;&gt;</span>
<span class="line">        &lt;title&gt;&lt;/title&gt;</span>
<span class="line">        &lt;style type=&quot;text/css&quot;&gt;</span>
<span class="line">            div{</span>
<span class="line">                width: 100px;</span>
<span class="line">                height: 100px;</span>
<span class="line">                position: absolute;</span>
<span class="line">                background-color: #008099;</span>
<span class="line">            }</span>
<span class="line">        &lt;/style&gt;</span>
<span class="line">    &lt;/head&gt;</span>
<span class="line">    &lt;body&gt;</span>
<span class="line">        &lt;div&gt;&lt;/div&gt;</span>
<span class="line">    &lt;/body&gt;</span>
<span class="line">    &lt;script type=&quot;text/javascript&quot;&gt;</span>
<span class="line">        var div = document.querySelector(&quot;div&quot;);</span>
<span class="line">        // div.style.left = 102 + &quot;px&quot;;</span>
<span class="line">        console.log(div.style.left);</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211201173600322-122077187.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">div.style.left = 102 + &quot;px&quot;;</span>
<span class="line">console.log(div.style.left);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211201173627270-1809416393.png" alt="img"></p>`,16)]))}const p=n(a,[["render",t]]),o=JSON.parse('{"path":"/article-web/js/3.%20js%20offset%E7%B3%BB%E5%88%97%E5%B1%9E%E6%80%A7.html","title":"js offset系列属性","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"style和offsetWidth的区别：","slug":"style和offsetwidth的区别","link":"#style和offsetwidth的区别","children":[]},{"level":3,"title":"对于“style.width 只能获取行内样式的数据 ”，如果没有行内样式，第一次获取style.width 会是空，但是给style.width 赋值后，再次获取能正常获取到值。","slug":"对于-style-width-只能获取行内样式的数据-如果没有行内样式-第一次获取style-width-会是空-但是给style-width-赋值后-再次获取能正常获取到值。","link":"#对于-style-width-只能获取行内样式的数据-如果没有行内样式-第一次获取style-width-会是空-但是给style-width-赋值后-再次获取能正常获取到值。","children":[]}],"git":{"updatedTime":1749527809000,"contributors":[{"name":"twoflowers","username":"","email":"1292548615@qq.com","commits":1}],"changelog":[{"hash":"f3b962e68f6ffcb84ea2e07a3893611af691f7e8","time":1749527809000,"email":"1292548615@qq.com","author":"twoflowers","message":"初步完成navbar和sidebar的设置"}]},"filePathRelative":"article-web/js/3. js offset系列属性.md"}');export{p as comp,o as data};
