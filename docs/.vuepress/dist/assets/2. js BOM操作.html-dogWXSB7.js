import{_ as s,c as l,b as i,o as e}from"./app-DyBO3kfI.js";const a={};function t(d,n){return e(),l("div",null,n[0]||(n[0]=[i(`<h1 id="js-bom操作" tabindex="-1"><a class="header-anchor" href="#js-bom操作"><span>js BOM操作</span></a></h1><h2 id="bom-browser-object-model-浏览器对象模型。" tabindex="-1"><a class="header-anchor" href="#bom-browser-object-model-浏览器对象模型。"><span>BOM：Browser Object Model, 浏览器对象模型。</span></a></h2><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130142418751-582218507.png" alt="img"></p><hr><h3 id="window-onload" tabindex="-1"><a class="header-anchor" href="#window-onload"><span>window.onload</span></a></h3><p>在html中，通常js代码要放在元素之下，否则会报错。比如在元素之前的script中给一个button绑定onclick事件，会报错：Uncaught TypeError: Cannot set property &#39;onclick&#39; of null</p><p>有了window.onload 后就可以把js代码写到页面元素的上方，因为onload是等页面内容全部加载完毕后才去执行处理函数。</p><ul><li>传统使用多个window.onload时会发生冲突，后一个会覆盖前一个。</li><li>多个addEventListener也不会冲突。</li><li>load必须等页面内容全部加载完，包含页面dom元素、图片、flash、css等。</li><li>DOMContentLoaded是DOM加载完毕，不包含图片、falsh、css等就可以执行，加载速度比load更快一些。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">    &lt;head&gt;</span>
<span class="line">        &lt;meta charset=&quot;utf-8&quot;&gt;</span>
<span class="line">        &lt;title&gt;&lt;/title&gt;</span>
<span class="line">    &lt;/head&gt;</span>
<span class="line">    &lt;body&gt;</span>
<span class="line">        &lt;script type=&quot;text/javascript&quot;&gt;</span>
<span class="line">            // var btn1 = document.querySelector(&quot;#btn1&quot;);</span>
<span class="line">            // btn1.onclick = function(){</span>
<span class="line">            //     console.log(&quot;传统方式函数在元素之前时，不会触发,并且会报错&quot;);</span>
<span class="line">            // }</span>
<span class="line">            </span>
<span class="line">            window.onload = function(){</span>
<span class="line">                var btn2 = document.querySelector(&quot;#btn2&quot;);</span>
<span class="line">                btn2.onclick = function(){</span>
<span class="line">                    console.log(&quot;window.onload时窗口（页面）加载事件，当文档内容完全加载完成后触发（包括图像、脚本文件、测试士、文件等）&quot;);</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">            window.onload = function(){</span>
<span class="line">                var btn2 = document.querySelector(&quot;#btn2&quot;);</span>
<span class="line">                btn2.addEventListener(&quot;click&quot;,function(){</span>
<span class="line">                    console.log(&quot;但是传统使用多个window.onload时会发生冲突，后一个会覆盖前一个&quot;);</span>
<span class="line">                })</span>
<span class="line">            }</span>
<span class="line">            </span>
<span class="line">            window.addEventListener(&quot;load&quot;,function(){</span>
<span class="line">                var btn3 = document.querySelector(&quot;#btn3&quot;);</span>
<span class="line">                btn3.addEventListener(&quot;click&quot;,function(){</span>
<span class="line">                    console.log(&quot;推荐这样使用&quot;);</span>
<span class="line">                })</span>
<span class="line">            })</span>
<span class="line">            window.addEventListener(&quot;load&quot;,function(){</span>
<span class="line">                var btn3 = document.querySelector(&quot;#btn3&quot;);</span>
<span class="line">                btn3.addEventListener(&quot;click&quot;,function(){</span>
<span class="line">                    console.log(&quot;多个addEventListener也不会冲突&quot;);</span>
<span class="line">                })</span>
<span class="line">            })</span>
<span class="line">            </span>
<span class="line">            window.addEventListener(&quot;DOMContentLoaded&quot;,function(){</span>
<span class="line">                var btn3 = document.querySelector(&quot;#btn3&quot;);</span>
<span class="line">                btn3.addEventListener(&quot;click&quot;,function(){</span>
<span class="line">                    console.log(&quot;load必须等页面内容全部加载完，包含页面dom元素、图片、flash、css等。&quot;);</span>
<span class="line">                    console.log(&quot;DOMContentLoaded是DOM加载完毕，不包含图片、falsh、css等就可以执行，加载速度比load更快一些&quot;);</span>
<span class="line">                })</span>
<span class="line">            })</span>
<span class="line">        &lt;/script&gt;</span>
<span class="line">        &lt;button id=&quot;btn1&quot;&gt;btn1&lt;/button&gt;</span>
<span class="line">        &lt;button id=&quot;btn2&quot;&gt;btn2&lt;/button&gt;</span>
<span class="line">        &lt;button id=&quot;btn3&quot;&gt;btn3&lt;/button&gt;</span>
<span class="line">    &lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130151116753-1902339847.gif" alt="img"></p><hr><h3 id="定时器" tabindex="-1"><a class="header-anchor" href="#定时器"><span>定时器</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">    &lt;head&gt;</span>
<span class="line">        &lt;meta charset=&quot;utf-8&quot;&gt;</span>
<span class="line">        &lt;title&gt;&lt;/title&gt;</span>
<span class="line">    &lt;/head&gt;</span>
<span class="line">    &lt;body&gt;</span>
<span class="line">    &lt;/body&gt;</span>
<span class="line">    &lt;script type=&quot;text/javascript&quot;&gt;</span>
<span class="line">        window.setTimeout(function() {</span>
<span class="line">            console.log(&quot;window.setTimeout定时器&quot;);</span>
<span class="line">        }, 1000)</span>
<span class="line">        setTimeout(function() {</span>
<span class="line">            console.log(&quot;window可以省略&quot;);</span>
<span class="line">        }, 1000)</span>
<span class="line">        var timmer= window.setInterval(function(){</span>
<span class="line">            console.log(&quot;window.setInterval循环定时器，window可以省略&quot;);</span>
<span class="line">        },1000)</span>
<span class="line">        </span>
<span class="line">        setTimeout(function() {</span>
<span class="line">            clearInterval(timmer);</span>
<span class="line">            console.log(&quot;清除定时器&quot;);</span>
<span class="line">        }, 5000)</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130150942099-190280381.gif" alt="img"></p><hr><h3 id="this-指向" tabindex="-1"><a class="header-anchor" href="#this-指向"><span>this 指向</span></a></h3><ul><li>一般情况下，this的最终指向是调用它的那个对象。</li><li>全局作用域或者普通函数中this只想全局对象window（定时器中的window省略了，this也指向window）</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">var btn = document.querySelector(&quot;button&quot;);</span>
<span class="line">btn.onclick = function() {</span>
<span class="line">    //一般情况下，this的最终指向是调用它的那个对象</span>
<span class="line">    console.log(&quot;一般情况:&quot;,this);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130145044839-38319741.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// 全局作用域或者普通函数中this只想全局对象window（定时器中的window省略了，this也指向window）</span>
<span class="line">console.log(&quot;全局作用域：&quot;,this);</span>
<span class="line">function fn(){</span>
<span class="line">    console.log(&quot;普通函数:&quot;,this);</span>
<span class="line">}</span>
<span class="line">window.fn();//和 fn(); 等价</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130145134535-1159871297.png" alt="img"></p><hr><h3 id="js-的同步和异步" tabindex="-1"><a class="header-anchor" href="#js-的同步和异步"><span>js 的同步和异步</span></a></h3><p>js的同步是顺序执行，形成一个执行栈。</p><p>js异步是通过回调函数实现的：</p><ol><li>普通事件，如 click，resize等</li><li>资源加载，如load、error等</li><li>定时器，包括setInterval, setTimeout等</li></ol><p><strong>js执行机制</strong></p><ol><li>先执行执行栈中的同步任务</li><li>异步任务（回调函数）放到任务队列（消息队列）中</li><li>执行栈中的同步任务执行完毕后，系统会按次序读取任务队列中的异步任务，然后被读取的异步任务进入执行栈开始执行</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">console.log(1);</span>
<span class="line">setTimeout(function() {</span>
<span class="line">    console.log(4);</span>
<span class="line">}, 2000)</span>
<span class="line">setTimeout(function() {</span>
<span class="line">    console.log(3);</span>
<span class="line">}, 1000)</span>
<span class="line">console.log(2);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130150511974-765225.gif" alt="img"></p>`,30)]))}const o=s(a,[["render",t]]),p=JSON.parse('{"path":"/article-web/js/2.%20js%20BOM%E6%93%8D%E4%BD%9C.html","title":"js BOM操作","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"BOM：Browser Object Model, 浏览器对象模型。","slug":"bom-browser-object-model-浏览器对象模型。","link":"#bom-browser-object-model-浏览器对象模型。","children":[{"level":3,"title":"window.onload","slug":"window-onload","link":"#window-onload","children":[]},{"level":3,"title":"定时器","slug":"定时器","link":"#定时器","children":[]},{"level":3,"title":"this 指向","slug":"this-指向","link":"#this-指向","children":[]},{"level":3,"title":"js 的同步和异步","slug":"js-的同步和异步","link":"#js-的同步和异步","children":[]}]}],"git":{"updatedTime":1749527809000,"contributors":[{"name":"twoflowers","username":"","email":"1292548615@qq.com","commits":1}],"changelog":[{"hash":"f3b962e68f6ffcb84ea2e07a3893611af691f7e8","time":1749527809000,"email":"1292548615@qq.com","author":"twoflowers","message":"初步完成navbar和sidebar的设置"}]},"filePathRelative":"article-web/js/2. js BOM操作.md"}');export{o as comp,p as data};
