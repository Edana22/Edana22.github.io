import{_ as s,c as l,b as i,o as e}from"./app-CfuPOgCv.js";const a={};function t(c,n){return e(),l("div",null,n[0]||(n[0]=[i(`<h1 id="js-dom操作" tabindex="-1"><a class="header-anchor" href="#js-dom操作"><span>js DOM操作</span></a></h1><h2 id="dom操作" tabindex="-1"><a class="header-anchor" href="#dom操作"><span>DOM操作</span></a></h2><h3 id="获取元素" tabindex="-1"><a class="header-anchor" href="#获取元素"><span>获取元素：</span></a></h3><p>DOM传统获取元素有三种方式，getElementById、getElementsByTagName、getElementsByClassName。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;div class=&quot;box&quot; id=&quot;timmer&quot;&gt;box1&lt;/div&gt;</span>
<span class="line">//下面三种方式均可获取到该元素</span>
<span class="line">var timmer = document.getElementById(&quot;timmer&quot;);</span>
<span class="line">var timmer = document.getElementsByTagName(&quot;div&quot;);//类选择器是HTML5新增的</span>
<span class="line">var timmer = document.getElementsByClassName(&quot;box&quot;);</span>
<span class="line"></span>
<span class="line">console.log(timmer);</span>
<span class="line">// console.log 返回的是元素对象</span>
<span class="line">console.log(typeof timmer);</span>
<span class="line"></span>
<span class="line">// console.dir() 打印返回的元素对象，更好的查看它的属性和方法</span>
<span class="line">console.dir(timmer)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>querySelector() 获取元素（只能获取第一个元素）：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//和上面三种方式获取元素一样，但早期ie不支持</span>
<span class="line">var firstbox = document.querySelector(&quot;.box&quot;);</span>
<span class="line">var firstbox = document.querySelector(&quot;div&quot;);</span>
<span class="line">var firstbox = document.querySelector(&quot;#timmer&quot;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130134837954-533033789.png" alt="img"></p><p>querySelectorAll() 获取元素：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;body&gt;</span>
<span class="line">    &lt;div class=&quot;box&quot;&gt;box1&lt;/div&gt;</span>
<span class="line">    &lt;div class=&quot;box&quot;&gt;box2&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">    &lt;div id=&quot;nav&quot;&gt;</span>
<span class="line">        &lt;ol&gt;</span>
<span class="line">            &lt;li&gt;1&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;2&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;3&lt;/li&gt;</span>
<span class="line">        &lt;/ol&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line"></span>
<span class="line">&lt;script&gt;// querySelector 也是HTML5新增的</span>
<span class="line">    // document.querySelector(&quot;选择器&quot;) 可以传所有的选择器类型,返回第一个元素对象</span>
<span class="line">    var firstbox = document.querySelector(&quot;.box&quot;);</span>
<span class="line">    console.log(firstbox);</span>
<span class="line">    var nav = document.querySelector(&quot;#nav&quot;);</span>
<span class="line">    console.log(nav);</span>
<span class="line">    var firstLi = document.querySelector(&quot;li&quot;);</span>
<span class="line">    console.log(firstLi);</span>
<span class="line">    </span>
<span class="line">     // document.querySelectorAll 获取所有元素对象</span>
<span class="line">    var allLi = document.querySelectorAll(&quot;li&quot;);</span>
<span class="line">    console.log(allLi);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130135629677-1580660292.png" alt="img"> <img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130135702520-157944996.png" alt="img"></p><p>获取特殊元素：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;script&gt;</span>
<span class="line">    // 1. 获取body</span>
<span class="line">    var body = document.body;</span>
<span class="line">    console.log(body);</span>
<span class="line">    // 2. 获取html</span>
<span class="line">    var html = document.documentElement;</span>
<span class="line">    console.log(html);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h3><p>事件三要素： 事件源 事件类型 事件处理程序。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;body&gt;</span>
<span class="line">    &lt;button&gt;事件三要素&lt;/button&gt;</span>
<span class="line">    &lt;span&gt;:&lt;/span&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;script type=&quot;text/javascript&quot;&gt;</span>
<span class="line">    // 事件三要素： 事件源 事件类型 事件处理程序</span>
<span class="line">    var btn = document.querySelector(&quot;button&quot;);</span>
<span class="line">    var span = document.querySelector(&quot;span&quot;);</span>
<span class="line">    btn.onclick = function(){</span>
<span class="line">        console.log(&quot;事件源 事件类型 事件处理程序&quot;);</span>
<span class="line">        span.innerText = &quot;:事件源 事件类型 事件处理程序&quot;;</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    function getCurrentDate(){</span>
<span class="line">        var date = new Date();</span>
<span class="line">        console.log(date);</span>
<span class="line">        return date;</span>
<span class="line">    }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击前：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130140218893-86241593.png" alt="img">点击后：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130140241756-393025983.png" alt="img"></p><h3 id="元素属性" tabindex="-1"><a class="header-anchor" href="#元素属性"><span>元素属性</span></a></h3><p>\\1. 修改普通元素内容用innerText、innerHTML。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;body&gt;</span>
<span class="line">    &lt;p id=&quot;time&quot;&gt;日期：2021&lt;/p&gt;</span>
<span class="line">    &lt;div id=&quot;div&quot;&gt;</span>
<span class="line">        我是第一行</span>
<span class="line">        &lt;div&gt;</span>
<span class="line">                我是第二行</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;script type=&quot;text/javascript&quot;&gt;</span>
<span class="line">    var time = document.querySelector(&quot;#time&quot;);</span>
<span class="line">    </span>
<span class="line">    /**</span>
<span class="line">     * innerText 不识别 html标签，非标准</span>
<span class="line">     * innerHTML识别 html标签,W3C标准</span>
<span class="line">     * innerText、innerHTML 都可以读取元素内容</span>
<span class="line">     * innerText 忽略所有标签、空格、换行</span>
<span class="line">     * innerHTML 识别标签、空格、换行</span>
<span class="line">     * */</span>
<span class="line">    // time.innerText = &quot;&lt;strong&gt;日期：&lt;/strong&gt;2021&quot;;</span>
<span class="line">    time.innerHTML= &quot;&lt;strong&gt;日期：&lt;/strong&gt;2021&quot;;</span>
<span class="line">    </span>
<span class="line">    var div = document.querySelector(&quot;#div&quot;);</span>
<span class="line">    console.log(div.innerText);</span>
<span class="line">    console.log(div.innerHTML);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130140528968-1407472381.png" alt="img"></p><p>\\2. 表单属性</p><p>表单元素内容是value。input有很多种type。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;body&gt;</span>
<span class="line">    &lt;button&gt;btn&lt;/button&gt;</span>
<span class="line">    &lt;input placeholder=&quot;我是input&quot; title=&quot;input&quot; /&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;script type=&quot;text/javascript&quot;&gt;</span>
<span class="line">    /**</span>
<span class="line">     * 利用DOM可以操作表单的如下属性;</span>
<span class="line">     * type, value, checked, selected, disabled</span>
<span class="line">     * */</span>
<span class="line">    var btn = document.querySelector(&quot;button&quot;);</span>
<span class="line">    var input = document.querySelector(&quot;input&quot;);</span>
<span class="line">    btn.onclick = function() {</span>
<span class="line">        // innerHTML是普通元素的，表单元素是value</span>
<span class="line">        // input.innerHTML = &quot;被点击了&quot;;</span>
<span class="line">        input.value = &quot;被点击了&quot;;</span>
<span class="line">        // 下面两句等价</span>
<span class="line">        // this 指向事件函数的调用者</span>
<span class="line">        // btn.disabled = true;</span>
<span class="line">        this.disabled = true;</span>
<span class="line">    }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击前：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130140620678-126720991.png" alt="img"> 点击后：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130140630374-866838322.png" alt="img"></p><p>\\3. 样式属性</p><p>操作style样式时：a. 属性用驼峰命名法；<em><strong>b. DOM操作修改行内样式，行内样式权重更高。</strong></em></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;body&gt;</span>
<span class="line">    &lt;div&gt;&lt;/div&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">/**</span>
<span class="line"> * 操作style样式时：</span>
<span class="line"> *     1. 属性用驼峰命名法</span>
<span class="line"> *  2. DOM操作修改行内样式，行内样式权重更高</span>
<span class="line"> * */</span>
<span class="line">    var div = document.querySelector(&quot;div&quot;);</span>
<span class="line">    div.onclick = function() {</span>
<span class="line">        div.style.backgroundColor = &quot;red&quot;;</span>
<span class="line">    }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style&gt;</span>
<span class="line">    div {</span>
<span class="line">        width: 100px;</span>
<span class="line">        height: 100px;</span>
<span class="line">        background-color: aqua;</span>
<span class="line">    }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>点击前：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130140918591-276300511.png" alt="img">点击后：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130140929610-1443580253.png" alt="img"></strong></em></p><p>点击修改class：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">    &lt;head&gt;</span>
<span class="line">        &lt;meta charset=&quot;utf-8&quot;&gt;</span>
<span class="line">        &lt;title&gt;&lt;/title&gt;</span>
<span class="line">    &lt;/head&gt;</span>
<span class="line">    &lt;body&gt;</span>
<span class="line">        &lt;div&gt;div&lt;/div&gt;</span>
<span class="line">    &lt;/body&gt;</span>
<span class="line">    &lt;script type=&quot;text/javascript&quot;&gt;</span>
<span class="line">        var div = document.querySelector(&quot;div&quot;);</span>
<span class="line">        div.onclick = function(){</span>
<span class="line">            /**</span>
<span class="line">             * class是关键字，所以用className改变类，并会覆盖原来的类名</span>
<span class="line">             * 如果想保留原来的类名，则用this.className = &quot;firstClass change&quot;;</span>
<span class="line">             * */</span>
<span class="line">            // div.className = &quot;change&quot;;</span>
<span class="line">            this.className = &quot;change&quot;;</span>
<span class="line">        }</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">    </span>
<span class="line">    &lt;style type=&quot;text/css&quot;&gt;</span>
<span class="line">        .change{</span>
<span class="line">            background-color: #008000;</span>
<span class="line">            font-size: large;</span>
<span class="line">            font-weight: 700;</span>
<span class="line">            color: white;</span>
<span class="line">        }</span>
<span class="line">    &lt;/style&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击前：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130141037458-305903395.png" alt="img">点击后：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130141048638-571990047.png" alt="img"></p><p>\\4. 事件对象</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">    &lt;head&gt;</span>
<span class="line">        &lt;meta charset=&quot;utf-8&quot;&gt;</span>
<span class="line">        &lt;title&gt;&lt;/title&gt;</span>
<span class="line">    &lt;/head&gt;</span>
<span class="line">    &lt;body&gt;</span>
<span class="line">        &lt;div&gt;div&lt;/div&gt;</span>
<span class="line">    &lt;/body&gt;</span>
<span class="line">    &lt;script type=&quot;text/javascript&quot;&gt;</span>
<span class="line">        var div = document.querySelector(&quot;div&quot;);</span>
<span class="line">        div.onclick = function(event){</span>
<span class="line">            // 1. event就是一个事件对象，写到我们侦听函数的小括号里，当形参来看</span>
<span class="line">            // 2. 事件对象有了事件才会存在，是系统自动创建的，我们不需要自己传递参数</span>
<span class="line">            // 3. 事件对象 是我们事件的一系列相关数据的集合，跟事件相关的。</span>
<span class="line">            // 比如鼠标点击就包含了鼠标的相关信息，比如鼠标坐标</span>
<span class="line">            //键盘事件就包括了键盘事件的信息，比如判断用户按下了哪个键</span>
<span class="line">            // 4. 事件对象可以自己命名，如event, evt, e</span>
<span class="line">            console.log(event);</span>
<span class="line">            //event.target 点击了哪个元素，就返回哪个元素</span>
<span class="line">            //this 绑定了哪个元素，就返回哪个元素</span>
<span class="line">            console.log(event.target);</span>
<span class="line">        }</span>
<span class="line">        </span>
<span class="line">        //这里和上面等价</span>
<span class="line">        // div.addEventListener(&quot;click&quot;,function(e){</span>
<span class="line">        //     console.log(e);</span>
<span class="line">        // })</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130141316034-1856270482.png" alt="img"></p><p>事件委托：巧妙利用事件冒泡。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">    &lt;head&gt;</span>
<span class="line">        &lt;meta charset=&quot;utf-8&quot;&gt;</span>
<span class="line">        &lt;title&gt;&lt;/title&gt;</span>
<span class="line">    &lt;/head&gt;</span>
<span class="line">    &lt;body&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">            &lt;li&gt;9&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;8&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;7&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;6&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;5&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;4&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;3&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;2&lt;/li&gt;</span>
<span class="line">            &lt;li&gt;1&lt;/li&gt;</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line">    &lt;/body&gt;</span>
<span class="line">    &lt;script type=&quot;text/javascript&quot;&gt;</span>
<span class="line">    /**</span>
<span class="line">     * 事件委托的核心：给父节点添加侦听器，利用事件冒泡影响每一个子节点</span>
<span class="line">     * addEventListener(&quot;name&quot;, function(){}, true/false) </span>
<span class="line">     * 第三个参数为false或者省略是冒泡阶段</span>
<span class="line">     * 第三个参数为true是捕获阶段</span>
<span class="line">     * */</span>
<span class="line">        var ul = document.querySelector(&quot;ul&quot;);</span>
<span class="line">        ul.addEventListener(&quot;click&quot;,function(e){</span>
<span class="line">            console.log(e);</span>
<span class="line">            console.log(&quot;我是li冒泡到ul的事件&quot;);</span>
<span class="line">        })</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">    &lt;style type=&quot;text/css&quot;&gt;</span>
<span class="line">    ul{</span>
<span class="line">        background-color: yellow;</span>
<span class="line">        padding: 20px;</span>
<span class="line">    }</span>
<span class="line">        li{</span>
<span class="line">            display: inline-block;</span>
<span class="line">            padding: 10px;</span>
<span class="line">            background-color: red;</span>
<span class="line">        }</span>
<span class="line">    &lt;/style&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130141600092-361166370.gif" alt="img"></p>`,38)]))}const p=s(a,[["render",t]]),v=JSON.parse('{"path":"/article-web/js/1.%20js%20DOM%E6%93%8D%E4%BD%9C.html","title":"js DOM操作","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"DOM操作","slug":"dom操作","link":"#dom操作","children":[{"level":3,"title":"获取元素：","slug":"获取元素","link":"#获取元素","children":[]},{"level":3,"title":"事件","slug":"事件","link":"#事件","children":[]},{"level":3,"title":"元素属性","slug":"元素属性","link":"#元素属性","children":[]}]}],"git":{"updatedTime":1749527809000,"contributors":[{"name":"twoflowers","username":"twoflowers","email":"1292548615@qq.com","commits":1,"url":"https://github.com/twoflowers"}],"changelog":[{"hash":"f3b962e68f6ffcb84ea2e07a3893611af691f7e8","time":1749527809000,"email":"1292548615@qq.com","author":"twoflowers","message":"初步完成navbar和sidebar的设置"}]},"filePathRelative":"article-web/js/1. js DOM操作.md"}');export{p as comp,v as data};
