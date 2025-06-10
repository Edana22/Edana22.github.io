<template><div><h1 id="js-dom操作" tabindex="-1"><a class="header-anchor" href="#js-dom操作"><span>js DOM操作</span></a></h1>
<h2 id="dom操作" tabindex="-1"><a class="header-anchor" href="#dom操作"><span>DOM操作</span></a></h2>
<h3 id="获取元素" tabindex="-1"><a class="header-anchor" href="#获取元素"><span>获取元素：</span></a></h3>
<p>DOM传统获取元素有三种方式，getElementById、getElementsByTagName、getElementsByClassName。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;div class="box" id="timmer">box1&lt;/div></span>
<span class="line">//下面三种方式均可获取到该元素</span>
<span class="line">var timmer = document.getElementById("timmer");</span>
<span class="line">var timmer = document.getElementsByTagName("div");//类选择器是HTML5新增的</span>
<span class="line">var timmer = document.getElementsByClassName("box");</span>
<span class="line"></span>
<span class="line">console.log(timmer);</span>
<span class="line">// console.log 返回的是元素对象</span>
<span class="line">console.log(typeof timmer);</span>
<span class="line"></span>
<span class="line">// console.dir() 打印返回的元素对象，更好的查看它的属性和方法</span>
<span class="line">console.dir(timmer)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>querySelector() 获取元素（只能获取第一个元素）：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">//和上面三种方式获取元素一样，但早期ie不支持</span>
<span class="line">var firstbox = document.querySelector(".box");</span>
<span class="line">var firstbox = document.querySelector("div");</span>
<span class="line">var firstbox = document.querySelector("#timmer");</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130134837954-533033789.png" alt="img"></p>
<p>querySelectorAll() 获取元素：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;body></span>
<span class="line">    &lt;div class="box">box1&lt;/div></span>
<span class="line">    &lt;div class="box">box2&lt;/div></span>
<span class="line"></span>
<span class="line">    &lt;div id="nav"></span>
<span class="line">        &lt;ol></span>
<span class="line">            &lt;li>1&lt;/li></span>
<span class="line">            &lt;li>2&lt;/li></span>
<span class="line">            &lt;li>3&lt;/li></span>
<span class="line">        &lt;/ol></span>
<span class="line">    &lt;/div></span>
<span class="line">&lt;/body></span>
<span class="line"></span>
<span class="line">&lt;script>// querySelector 也是HTML5新增的</span>
<span class="line">    // document.querySelector("选择器") 可以传所有的选择器类型,返回第一个元素对象</span>
<span class="line">    var firstbox = document.querySelector(".box");</span>
<span class="line">    console.log(firstbox);</span>
<span class="line">    var nav = document.querySelector("#nav");</span>
<span class="line">    console.log(nav);</span>
<span class="line">    var firstLi = document.querySelector("li");</span>
<span class="line">    console.log(firstLi);</span>
<span class="line">    </span>
<span class="line">     // document.querySelectorAll 获取所有元素对象</span>
<span class="line">    var allLi = document.querySelectorAll("li");</span>
<span class="line">    console.log(allLi);</span>
<span class="line">&lt;/script></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130135629677-1580660292.png" alt="img"> <img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130135702520-157944996.png" alt="img"></p>
<p>获取特殊元素：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;script></span>
<span class="line">    // 1. 获取body</span>
<span class="line">    var body = document.body;</span>
<span class="line">    console.log(body);</span>
<span class="line">    // 2. 获取html</span>
<span class="line">    var html = document.documentElement;</span>
<span class="line">    console.log(html);</span>
<span class="line">&lt;/script></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h3>
<p>事件三要素： 事件源 事件类型 事件处理程序。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;body></span>
<span class="line">    &lt;button>事件三要素&lt;/button></span>
<span class="line">    &lt;span>:&lt;/span></span>
<span class="line">&lt;/body></span>
<span class="line">&lt;script type="text/javascript"></span>
<span class="line">    // 事件三要素： 事件源 事件类型 事件处理程序</span>
<span class="line">    var btn = document.querySelector("button");</span>
<span class="line">    var span = document.querySelector("span");</span>
<span class="line">    btn.onclick = function(){</span>
<span class="line">        console.log("事件源 事件类型 事件处理程序");</span>
<span class="line">        span.innerText = ":事件源 事件类型 事件处理程序";</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    function getCurrentDate(){</span>
<span class="line">        var date = new Date();</span>
<span class="line">        console.log(date);</span>
<span class="line">        return date;</span>
<span class="line">    }</span>
<span class="line">&lt;/script></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击前：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130140218893-86241593.png" alt="img">点击后：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130140241756-393025983.png" alt="img"></p>
<h3 id="元素属性" tabindex="-1"><a class="header-anchor" href="#元素属性"><span>元素属性</span></a></h3>
<p>\1. 修改普通元素内容用innerText、innerHTML。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;body></span>
<span class="line">    &lt;p id="time">日期：2021&lt;/p></span>
<span class="line">    &lt;div id="div"></span>
<span class="line">        我是第一行</span>
<span class="line">        &lt;div></span>
<span class="line">                我是第二行</span>
<span class="line">        &lt;/div></span>
<span class="line">    &lt;/div></span>
<span class="line">&lt;/body></span>
<span class="line">&lt;script type="text/javascript"></span>
<span class="line">    var time = document.querySelector("#time");</span>
<span class="line">    </span>
<span class="line">    /**</span>
<span class="line">     * innerText 不识别 html标签，非标准</span>
<span class="line">     * innerHTML识别 html标签,W3C标准</span>
<span class="line">     * innerText、innerHTML 都可以读取元素内容</span>
<span class="line">     * innerText 忽略所有标签、空格、换行</span>
<span class="line">     * innerHTML 识别标签、空格、换行</span>
<span class="line">     * */</span>
<span class="line">    // time.innerText = "&lt;strong>日期：&lt;/strong>2021";</span>
<span class="line">    time.innerHTML= "&lt;strong>日期：&lt;/strong>2021";</span>
<span class="line">    </span>
<span class="line">    var div = document.querySelector("#div");</span>
<span class="line">    console.log(div.innerText);</span>
<span class="line">    console.log(div.innerHTML);</span>
<span class="line">&lt;/script></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130140528968-1407472381.png" alt="img"></p>
<p>\2. 表单属性</p>
<p>表单元素内容是value。input有很多种type。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;body></span>
<span class="line">    &lt;button>btn&lt;/button></span>
<span class="line">    &lt;input placeholder="我是input" title="input" /></span>
<span class="line">&lt;/body></span>
<span class="line">&lt;script type="text/javascript"></span>
<span class="line">    /**</span>
<span class="line">     * 利用DOM可以操作表单的如下属性;</span>
<span class="line">     * type, value, checked, selected, disabled</span>
<span class="line">     * */</span>
<span class="line">    var btn = document.querySelector("button");</span>
<span class="line">    var input = document.querySelector("input");</span>
<span class="line">    btn.onclick = function() {</span>
<span class="line">        // innerHTML是普通元素的，表单元素是value</span>
<span class="line">        // input.innerHTML = "被点击了";</span>
<span class="line">        input.value = "被点击了";</span>
<span class="line">        // 下面两句等价</span>
<span class="line">        // this 指向事件函数的调用者</span>
<span class="line">        // btn.disabled = true;</span>
<span class="line">        this.disabled = true;</span>
<span class="line">    }</span>
<span class="line">&lt;/script></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击前：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130140620678-126720991.png" alt="img"> 点击后：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130140630374-866838322.png" alt="img"></p>
<p>\3. 样式属性</p>
<p>操作style样式时：a. 属性用驼峰命名法；<em><strong>b. DOM操作修改行内样式，行内样式权重更高。</strong></em></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;body></span>
<span class="line">    &lt;div>&lt;/div></span>
<span class="line">&lt;/body></span>
<span class="line">&lt;script></span>
<span class="line">/**</span>
<span class="line"> * 操作style样式时：</span>
<span class="line"> *     1. 属性用驼峰命名法</span>
<span class="line"> *  2. DOM操作修改行内样式，行内样式权重更高</span>
<span class="line"> * */</span>
<span class="line">    var div = document.querySelector("div");</span>
<span class="line">    div.onclick = function() {</span>
<span class="line">        div.style.backgroundColor = "red";</span>
<span class="line">    }</span>
<span class="line">&lt;/script></span>
<span class="line">&lt;style></span>
<span class="line">    div {</span>
<span class="line">        width: 100px;</span>
<span class="line">        height: 100px;</span>
<span class="line">        background-color: aqua;</span>
<span class="line">    }</span>
<span class="line">&lt;/style></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>点击前：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130140918591-276300511.png" alt="img">点击后：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130140929610-1443580253.png" alt="img"></strong></em></p>
<p>点击修改class：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;!DOCTYPE html></span>
<span class="line">&lt;html></span>
<span class="line">    &lt;head></span>
<span class="line">        &lt;meta charset="utf-8"></span>
<span class="line">        &lt;title>&lt;/title></span>
<span class="line">    &lt;/head></span>
<span class="line">    &lt;body></span>
<span class="line">        &lt;div>div&lt;/div></span>
<span class="line">    &lt;/body></span>
<span class="line">    &lt;script type="text/javascript"></span>
<span class="line">        var div = document.querySelector("div");</span>
<span class="line">        div.onclick = function(){</span>
<span class="line">            /**</span>
<span class="line">             * class是关键字，所以用className改变类，并会覆盖原来的类名</span>
<span class="line">             * 如果想保留原来的类名，则用this.className = "firstClass change";</span>
<span class="line">             * */</span>
<span class="line">            // div.className = "change";</span>
<span class="line">            this.className = "change";</span>
<span class="line">        }</span>
<span class="line">    &lt;/script></span>
<span class="line">    </span>
<span class="line">    &lt;style type="text/css"></span>
<span class="line">        .change{</span>
<span class="line">            background-color: #008000;</span>
<span class="line">            font-size: large;</span>
<span class="line">            font-weight: 700;</span>
<span class="line">            color: white;</span>
<span class="line">        }</span>
<span class="line">    &lt;/style></span>
<span class="line">&lt;/html></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>点击前：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130141037458-305903395.png" alt="img">点击后：<img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130141048638-571990047.png" alt="img"></p>
<p>\4. 事件对象</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;!DOCTYPE html></span>
<span class="line">&lt;html></span>
<span class="line">    &lt;head></span>
<span class="line">        &lt;meta charset="utf-8"></span>
<span class="line">        &lt;title>&lt;/title></span>
<span class="line">    &lt;/head></span>
<span class="line">    &lt;body></span>
<span class="line">        &lt;div>div&lt;/div></span>
<span class="line">    &lt;/body></span>
<span class="line">    &lt;script type="text/javascript"></span>
<span class="line">        var div = document.querySelector("div");</span>
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
<span class="line">        // div.addEventListener("click",function(e){</span>
<span class="line">        //     console.log(e);</span>
<span class="line">        // })</span>
<span class="line">    &lt;/script></span>
<span class="line">&lt;/html></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130141316034-1856270482.png" alt="img"></p>
<p>事件委托：巧妙利用事件冒泡。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;!DOCTYPE html></span>
<span class="line">&lt;html></span>
<span class="line">    &lt;head></span>
<span class="line">        &lt;meta charset="utf-8"></span>
<span class="line">        &lt;title>&lt;/title></span>
<span class="line">    &lt;/head></span>
<span class="line">    &lt;body></span>
<span class="line">        &lt;ul></span>
<span class="line">            &lt;li>9&lt;/li></span>
<span class="line">            &lt;li>8&lt;/li></span>
<span class="line">            &lt;li>7&lt;/li></span>
<span class="line">            &lt;li>6&lt;/li></span>
<span class="line">            &lt;li>5&lt;/li></span>
<span class="line">            &lt;li>4&lt;/li></span>
<span class="line">            &lt;li>3&lt;/li></span>
<span class="line">            &lt;li>2&lt;/li></span>
<span class="line">            &lt;li>1&lt;/li></span>
<span class="line">        &lt;/ul></span>
<span class="line">    &lt;/body></span>
<span class="line">    &lt;script type="text/javascript"></span>
<span class="line">    /**</span>
<span class="line">     * 事件委托的核心：给父节点添加侦听器，利用事件冒泡影响每一个子节点</span>
<span class="line">     * addEventListener("name", function(){}, true/false) </span>
<span class="line">     * 第三个参数为false或者省略是冒泡阶段</span>
<span class="line">     * 第三个参数为true是捕获阶段</span>
<span class="line">     * */</span>
<span class="line">        var ul = document.querySelector("ul");</span>
<span class="line">        ul.addEventListener("click",function(e){</span>
<span class="line">            console.log(e);</span>
<span class="line">            console.log("我是li冒泡到ul的事件");</span>
<span class="line">        })</span>
<span class="line">    &lt;/script></span>
<span class="line">    &lt;style type="text/css"></span>
<span class="line">    ul{</span>
<span class="line">        background-color: yellow;</span>
<span class="line">        padding: 20px;</span>
<span class="line">    }</span>
<span class="line">        li{</span>
<span class="line">            display: inline-block;</span>
<span class="line">            padding: 10px;</span>
<span class="line">            background-color: red;</span>
<span class="line">        }</span>
<span class="line">    &lt;/style></span>
<span class="line">&lt;/html></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202111/2194212-20211130141600092-361166370.gif" alt="img"></p>
</div></template>


