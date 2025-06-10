<template><div><h1 id="uniapp-微信小程序-新版canvas常用api及注意事项" tabindex="-1"><a class="header-anchor" href="#uniapp-微信小程序-新版canvas常用api及注意事项"><span>uniapp + 微信小程序：新版canvas常用api及注意事项</span></a></h1>
<h1 id="关于新旧canvas的比较我以前写过一篇博客-https-www-cnblogs-com-sunshine233-p-17014701-html-这里就不重复了。" tabindex="-1"><a class="header-anchor" href="#关于新旧canvas的比较我以前写过一篇博客-https-www-cnblogs-com-sunshine233-p-17014701-html-这里就不重复了。"><span>关于新旧canvas的比较我以前写过一篇博客 ：https://www.cnblogs.com/sunshine233/p/17014701.html ，这里就不重复了。</span></a></h1>
<p>但在正文开始之前，我不得不再说一遍微信的文档写的真垃圾。很多问题的答案都是在微信开发者社区里找到的。</p>
<h1 id="一、新版canvas-基础用法" tabindex="-1"><a class="header-anchor" href="#一、新版canvas-基础用法"><span>一、新版canvas 基础用法：</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;template></span>
<span class="line">    &lt;view></span>
<span class="line">        &lt;view class="divider">新版canvas 👇&lt;/view></span>
<span class="line">        &lt;!-- 1. canvas-id 换成了 id --></span>
<span class="line">        &lt;!-- 2. 增加了 type="2d" 表示新版canvas --></span>
<span class="line">        &lt;canvas id="myCanvas" type="2d" >&lt;/canvas></span>
<span class="line">    &lt;/view></span>
<span class="line">&lt;/template></span>
<span class="line"></span>
<span class="line">&lt;script></span>
<span class="line">    export default {</span>
<span class="line">        data() {</span>
<span class="line">            return {}</span>
<span class="line">        },</span>
<span class="line">        mounted() {</span>
<span class="line">            this.newCanvas();</span>
<span class="line">        },</span>
<span class="line">        methods: {</span>
<span class="line">            newCanvas() {</span>
<span class="line">                // 3. 获取canvas节点的方式变了，必须按照这个格式写</span>
<span class="line">                // 3.1 如果不是直接页面而是子页面，把 wx 改成 this，否则获取不到 node节点</span>
<span class="line">                // 也就是 wx.createSelectorQuery()  其她部分一样</span>
<span class="line">                wx.createSelectorQuery()</span>
<span class="line">                    .select('#myCanvas')</span>
<span class="line">                    .node(({</span>
<span class="line">                        node: canvas</span>
<span class="line">                    }) => {</span>
<span class="line">                        //4. 获取正确实例</span>
<span class="line">                        const ctx = canvas.getContext('2d');</span>
<span class="line">    </span>
<span class="line">                        ctx.fillStyle = "green";</span>
<span class="line">                        ctx.fillRect(0, 0, 50, 50);</span>
<span class="line">                        // 4.1 设置字体大小（两个参数必须都写）</span>
<span class="line">                        ctx.font = "20px sans-serif";</span>
<span class="line">                        // 4.2 写文字</span>
<span class="line">                        ctx.fillText("我是新版canvas", 50, 30);</span>
<span class="line">                        // 4.3 新版 canvas 不需要调用 draw()</span>
<span class="line">                        // ctx.draw(); </span>
<span class="line">                    }).exec();</span>
<span class="line">            },</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">&lt;/script></span>
<span class="line"></span>
<span class="line">&lt;style scoped></span>
<span class="line">    .divider {</span>
<span class="line">        margin: 10px 0;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    canvas {</span>
<span class="line">        background-color: antiquewhite;</span>
<span class="line">    }</span>
<span class="line">&lt;/style></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码中获取实例的写法和官方实例效果一样</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202502/2194212-20250224152737434-84669005.png" alt="img"></p>
<p>运行结果：</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202502/2194212-20250224152459638-878269718.png" alt="img"></p>
<h1 id="二、新版canvas画图模糊失真" tabindex="-1"><a class="header-anchor" href="#二、新版canvas画图模糊失真"><span>二、新版canvas画图模糊失真</span></a></h1>
<p>但canvas实际上有两种设置尺寸的方式：</p>
<ul>
<li>一种是默认尺寸300*150（文档中写可以直接用 <canvas id="myCanvas" type="2d" width="300" height="300"></canvas> 修改，但我2025/2/24尝试好像不起效了）；</li>
<li>一种是在css中设置 canvas { width: 300px; height: 300px; }</li>
</ul>
<p>这两个尺寸被成为<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/ability/canvas.html" target="_blank" rel="noopener noreferrer">渲染宽高和逻辑宽高</a>。但我觉得微信文档写的似乎有点问题且模糊不清。</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202502/2194212-20250224154620301-2099265022.png" alt="img"></p>
<p>查了别的文档 + 实践，我发现如果在css中手动设置了canvas的宽高，画图就会出现模糊（因为canvaWidth和styleWidth不一致）。</p>
<p>和上一段代码差异只增加了css</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;template></span>
<span class="line">    &lt;view></span>
<span class="line">        &lt;view class="divider">新版canvas 👇&lt;/view></span>
<span class="line">        &lt;!-- 1. canvas-id 换成了 id --></span>
<span class="line">        &lt;!-- 2. 增加了 type="2d" 表示新版canvas --></span>
<span class="line">        &lt;canvas id="myCanvas" type="2d" >&lt;/canvas></span>
<span class="line">    &lt;/view></span>
<span class="line">&lt;/template></span>
<span class="line"></span>
<span class="line">&lt;script></span>
<span class="line">    export default {</span>
<span class="line">        data() {</span>
<span class="line">            return {}</span>
<span class="line">        },</span>
<span class="line">        mounted() {</span>
<span class="line">            this.newCanvas();</span>
<span class="line">        },</span>
<span class="line">        methods: {</span>
<span class="line">            newCanvas() {</span>
<span class="line">                // 3. 获取canvas节点的方式变了，必须按照这个格式写</span>
<span class="line">                // 3.1 如果不是直接页面而是子页面，把 wx 改成 this，否则获取不到 node节点</span>
<span class="line">                // 也就是 wx.createSelectorQuery()  其她部分一样</span>
<span class="line">                wx.createSelectorQuery()</span>
<span class="line">                    .select('#myCanvas')</span>
<span class="line">                    .node(({</span>
<span class="line">                        node: canvas</span>
<span class="line">                    }) => {</span>
<span class="line">                        //4. 获取正确实例</span>
<span class="line">                        const ctx = canvas.getContext('2d');</span>
<span class="line">    </span>
<span class="line">                        ctx.fillStyle = "green";</span>
<span class="line">                        ctx.fillRect(0, 0, 50, 50);</span>
<span class="line">                        // 4.1 设置字体大小（两个参数必须都写）</span>
<span class="line">                        ctx.font = "20px sans-serif";</span>
<span class="line">                        // 4.2 写文字</span>
<span class="line">                        ctx.fillText("我是新版canvas", 50, 30);</span>
<span class="line">                    </span>
<span class="line">                        // 4.3 新版 canvas 不需要调用 draw()</span>
<span class="line">                        // ctx.draw(); </span>
<span class="line">                    }).exec();</span>
<span class="line">            },</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">&lt;/script></span>
<span class="line"></span>
<span class="line">&lt;style scoped></span>
<span class="line">    .divider {</span>
<span class="line">        margin: 10px 0;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    canvas {</span>
<span class="line">        background-color: antiquewhite;</span>
<span class="line">        width: 300px;</span>
<span class="line">        height: 300px;</span>
<span class="line">    }</span>
<span class="line">&lt;/style></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2024.cnblogs.com/blog/2194212/202502/2194212-20250224154953413-1564103644.png" alt="img"></p>
<p>想解决模糊失真的问题就要使用 canvas.width = styleWidth<em>dpr; canvas.height = styleHeight</em>dpr; 也就是重新设置canvas的尺寸等于css中的尺寸*像素比。</p>
<p>获取像素比微信已经给出了api ： const dpr = wx.getWindowInfo().pixelRatio;</p>
<p>现在css中宽高设置的都是300， 所以要设置 canvas.width = 300* dpr; canvas.height = 300 * dpr; 最后缩放 ctx.scale(dpr, dpr);</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;template></span>
<span class="line">    &lt;view></span>
<span class="line">        &lt;view class="divider">新版canvas 👇&lt;/view></span>
<span class="line">        &lt;!-- 1. canvas-id 换成了 id --></span>
<span class="line">        &lt;!-- 2. 增加了 type="2d" 表示新版canvas --></span>
<span class="line">        &lt;canvas id="myCanvas" type="2d" >&lt;/canvas></span>
<span class="line">    &lt;/view></span>
<span class="line">&lt;/template></span>
<span class="line"></span>
<span class="line">&lt;script></span>
<span class="line">    export default {</span>
<span class="line">        data() {</span>
<span class="line">            return {}</span>
<span class="line">        },</span>
<span class="line">        mounted() {</span>
<span class="line">            this.newCanvas();</span>
<span class="line">        },</span>
<span class="line">        methods: {</span>
<span class="line">            newCanvas() {</span>
<span class="line">                // 3. 获取canvas节点的方式变了，必须按照这个格式写</span>
<span class="line">                // 3.1 如果不是直接页面而是子页面，把 wx 改成 this，否则获取不到 node节点</span>
<span class="line">                // 也就是 wx.createSelectorQuery()  其她部分一样</span>
<span class="line">                wx.createSelectorQuery()</span>
<span class="line">                    .select('#myCanvas')</span>
<span class="line">                    .node(({</span>
<span class="line">                        node: canvas</span>
<span class="line">                    }) => {</span>
<span class="line">                        //4. 获取正确实例</span>
<span class="line">                        const ctx = canvas.getContext('2d');</span>
<span class="line">                     </span>
<span class="line">                        const dpr = wx.getWindowInfo().pixelRatio;</span>
<span class="line">                        console.log("default canvas.width:", canvas.width,</span>
<span class="line">                         " default canvas.height:", canvas.height);</span>
<span class="line">                        console.log("dpr:", dpr);</span>
<span class="line">                        canvas.width = 300* dpr;</span>
<span class="line">                        canvas.height = 300 * dpr;</span>
<span class="line">                        ctx.scale(dpr, dpr);</span>
<span class="line"></span>
<span class="line">                        ctx.fillStyle = "green";</span>
<span class="line">                        ctx.fillRect(0, 0, 50, 50);</span>
<span class="line">                        // 4.1 设置字体大小（两个参数必须都写）</span>
<span class="line">                        ctx.font = "20px sans-serif";</span>
<span class="line">                        // 4.2 写文字</span>
<span class="line">                        ctx.fillText("我是新版canvas", 50, 30);</span>
<span class="line"></span>
<span class="line">                        // 4.3 新版 canvas 不需要调用 draw()</span>
<span class="line">                        // ctx.draw(); </span>
<span class="line">                    }).exec();</span>
<span class="line">            },</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">&lt;/script></span>
<span class="line"></span>
<span class="line">&lt;style scoped></span>
<span class="line">    .divider {</span>
<span class="line">        margin: 10px 0;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    canvas {</span>
<span class="line">        background-color: antiquewhite;</span>
<span class="line">        width: 300px;</span>
<span class="line">        height: 300px;</span>
<span class="line">    }</span>
<span class="line">&lt;/style></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2024.cnblogs.com/blog/2194212/202502/2194212-20250224155520075-1435097000.png" alt="img"></p>
<p>如果想用动态数据可以用</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;template></span>
<span class="line">    &lt;view></span>
<span class="line">        &lt;view class="divider">新版canvas 👇&lt;/view></span>
<span class="line">        &lt;!-- 1. canvas-id 换成了 id --></span>
<span class="line">        &lt;!-- 2. 增加了 type="2d" 表示新版canvas --></span>
<span class="line">        &lt;canvas id="myCanvas" type="2d" :style="{width:styleWidth+'px',height:styleHeight+'px'}" >&lt;/canvas></span>
<span class="line">    &lt;/view></span>
<span class="line">&lt;/template></span>
<span class="line"></span>
<span class="line">&lt;script></span>
<span class="line">    export default {</span>
<span class="line">        data() {</span>
<span class="line">            return {</span>
<span class="line">                styleWidth:200,</span>
<span class="line">                styleHeight:100</span>
<span class="line">            }</span>
<span class="line">        },</span>
<span class="line">        mounted() {</span>
<span class="line">            this.newCanvas();</span>
<span class="line">        },</span>
<span class="line">        methods: {</span>
<span class="line">            newCanvas() {</span>
<span class="line">                // 3. 获取canvas节点的方式变了，必须按照这个格式写</span>
<span class="line">                // 3.1 如果不是直接页面而是子页面，把 wx 改成 this，否则获取不到 node节点</span>
<span class="line">                // 也就是 wx.createSelectorQuery()  其她部分一样</span>
<span class="line">                wx.createSelectorQuery()</span>
<span class="line">                    .select('#myCanvas')</span>
<span class="line">                    .node(({</span>
<span class="line">                        node: canvas</span>
<span class="line">                    }) => {</span>
<span class="line">                        //4. 获取正确实例</span>
<span class="line">                        const ctx = canvas.getContext('2d');</span>
<span class="line">                     </span>
<span class="line">                        const dpr = wx.getWindowInfo().pixelRatio;</span>
<span class="line">                        console.log("default canvas.width:", canvas.width,</span>
<span class="line">                         " default canvas.height:", canvas.height);</span>
<span class="line">                        console.log("dpr:", dpr);</span>
<span class="line">                        canvas.width = this.styleWidth* dpr;</span>
<span class="line">                        canvas.height = this.styleHeight * dpr;</span>
<span class="line">                        ctx.scale(dpr, dpr);</span>
<span class="line"></span>
<span class="line">                        ctx.fillStyle = "green";</span>
<span class="line">                        ctx.fillRect(0, 0, 50, 50);</span>
<span class="line">                        // 4.1 设置字体大小（两个参数必须都写）</span>
<span class="line">                        ctx.font = "20px sans-serif";</span>
<span class="line">                        // 4.2 写文字</span>
<span class="line">                        ctx.fillText("我是新版canvas", 50, 30);</span>
<span class="line"></span>
<span class="line">                        // 4.3 新版 canvas 不需要调用 draw()</span>
<span class="line">                        // ctx.draw(); </span>
<span class="line">                    }).exec();</span>
<span class="line">            },</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">&lt;/script></span>
<span class="line"></span>
<span class="line">&lt;style scoped></span>
<span class="line">    .divider {</span>
<span class="line">        margin: 10px 0;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    canvas {</span>
<span class="line">        background-color: antiquewhite;</span>
<span class="line">    }</span>
<span class="line">&lt;/style>            </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2024.cnblogs.com/blog/2194212/202502/2194212-20250224155940685-1345758220.png" alt="img"></p>
<h1 id="三、新版canvas易错api" tabindex="-1"><a class="header-anchor" href="#三、新版canvas易错api"><span>三、新版canvas易错api</span></a></h1>
<h2 id="id不能用数字开头-字符串的数字也不行" tabindex="-1"><a class="header-anchor" href="#id不能用数字开头-字符串的数字也不行"><span>id不能用数字开头，字符串的数字也不行</span></a></h2>
<h2 id="括号赋值变成了等号赋值" tabindex="-1"><a class="header-anchor" href="#括号赋值变成了等号赋值"><span>括号赋值变成了等号赋值</span></a></h2>
<p>旧版： ctx.setFillStyle(&quot;red&quot;); ctx.fillRect(50, 50, 75, 75);</p>
<p>新版： // 设置的方式从 ctx.setFillStyle(&quot;red&quot;) 改成了 ctx.fillStyle = &quot;red&quot;; ctx.fillStyle = &quot;red&quot;; ctx.fillRect(50, 50, 75, 75);</p>
<h2 id="画图片" tabindex="-1"><a class="header-anchor" href="#画图片"><span>画图片</span></a></h2>
<p>旧版： ctx.drawImage(&quot;/static/cherry.png, 0,0,100,100&quot;);</p>
<p>新版：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">const image = canvas.createImage();</span>
<span class="line">image.src = "/static/cherry.png";</span>
<span class="line">image.onload = () => {</span>
<span class="line">    //等待图片资源加载完成才可以画</span>
<span class="line">    ctx.drawImage(image, 0, 0,100,100);</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2024.cnblogs.com/blog/2194212/202502/2194212-20250224165102142-387271707.png" alt="img"></p>
<h2 id="设置文字大小" tabindex="-1"><a class="header-anchor" href="#设置文字大小"><span>设置文字大小</span></a></h2>
<p>旧版： ctx.setFontSize(20); ctx.fillText('20', 20, 20);</p>
<p>新版： ctx.font = &quot;20px sans-serif&quot;; ctx.fillText(&quot;我是新版canvas&quot;, 50, 30);</p>
<h2 id="实时刷新抖动白屏" tabindex="-1"><a class="header-anchor" href="#实时刷新抖动白屏"><span>实时刷新抖动白屏</span></a></h2>
<p>还有一点要注意，如果需要实时更新数据，就需要canvas不同绘画，但不要多次运行 const ctx = canvas.getContext('2d'); 否则页面刷新时会有白屏抖动。</p>
<p>正确的做法是分两个函数，一个初始化context，一个只专心画内容。</p>
<p>下面是我的一部分代码（不能直接运行，删去了部分敏感信息）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;template></span>
<span class="line">    &lt;view></span>
<span class="line">        &lt;view v-for="item in tankList"></span>
<span class="line">            &lt;canvas type="2d" :id="item.id" class="canvas" >&lt;/canvas></span>
<span class="line">        &lt;/view></span>
<span class="line">    &lt;/view></span>
<span class="line">&lt;/template></span>
<span class="line"></span>
<span class="line">&lt;script></span>
<span class="line"></span>
<span class="line">export default {</span>
<span class="line">    props: {</span>
<span class="line">        tankList: {</span>
<span class="line">            type: Array,</span>
<span class="line">            default: []</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    data() {</span>
<span class="line">        return {</span>
<span class="line">            // 油罐图片的宽高</span>
<span class="line">            bgimgWidth: 200,</span>
<span class="line">            bgimgHeight: 150,</span>
<span class="line"></span>
<span class="line">            context: [],</span>
<span class="line">            bgImg: null</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    mounted() {</span>
<span class="line">        this.createContexts(this.bgimgWidth, this.bgimgHeight);//每次进来的时候先画一次</span>
<span class="line">    },</span>
<span class="line">    watch: {</span>
<span class="line">        tankList(newValue, oldValue) {</span>
<span class="line">            // if 防止没有context还要画图报错</span>
<span class="line">            if (this.context.length != 0) {</span>
<span class="line">                this.refreshCanvas(this.bgimgWidth, this.bgimgHeight);</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    methods: {</span>
<span class="line">        // 这个页面只运行一次</span>
<span class="line">        createContexts() {</span>
<span class="line">            // ❗❗❗ 新版canvas需要消除锯齿</span>
<span class="line">            const windowInfo = wx.getWindowInfo();</span>
<span class="line">            const availableWidth = windowInfo.windowWidth;</span>
<span class="line">            const dpr = windowInfo.pixelRatio;//设备像素比</span>
<span class="line"></span>
<span class="line">            // 1. 给 context[] 赋值（在这个页面只创建一次）</span>
<span class="line">            this.tankList.forEach((tank, index) => {</span>
<span class="line">                this.createSelectorQuery()</span>
<span class="line">                    .select(`#${tank.id}`)</span>
<span class="line">                    .node(({ node: canvas }) => {</span>
<span class="line">                        this.context[index] = canvas.getContext('2d');</span>
<span class="line">                        console.log('this.context[] 建立成功');</span>
<span class="line"></span>
<span class="line">                        canvas.width = availableWidth * dpr;</span>
<span class="line">                        canvas.height = availableWidth * 0.4 * dpr; //按照下面css的尺寸比例</span>
<span class="line">                        this.context[index].scale(dpr, dpr); //必须有</span>
<span class="line"></span>
<span class="line">                        //这里调用一遍，防止等待时间过长</span>
<span class="line">                        this.refreshCanvas(this.bgimgWidth, this.bgimgHeight);</span>
<span class="line">                    }).exec();</span>
<span class="line">            })</span>
<span class="line">        },</span>
<span class="line">        refreshCanvas(bgimgWidth, bgimgHeight) {</span>
<span class="line">            const context = this.context;</span>
<span class="line"></span>
<span class="line">            // 2. 设置不同油罐油品的颜色</span>
<span class="line">            let oilColors = [];//存储不同油罐油品的颜色</span>
<span class="line">            this.tankList.forEach(tank => {</span>
<span class="line">                oilColors.push(converIntToRgb(tank.oilColor));</span>
<span class="line">            });</span>
<span class="line"></span>
<span class="line">            this.tankList.forEach((tank, index) => {</span>
<span class="line">                this.createSelectorQuery()</span>
<span class="line">                    .select(`#hc${tank.id}`)</span>
<span class="line">                    .node(({ node: canvas }) => {</span>
<span class="line">                        this.bgImg = canvas.createImage();</span>
<span class="line">                        this.bgImg.src = "/static/hcbgimg.png";</span>
<span class="line">                        this.bgImg.onload = () => {</span>
<span class="line">                            // ❗❗❗ 每次画新的之前先清空画布（包括图片）</span>
<span class="line">                            this.context[index].clearRect(0, 0, bgimgWidth, bgimgHeight);</span>
<span class="line"> </span>
<span class="line">                            // 新版canvas画背景图片,将图片绘制到 canvas 上</span>
<span class="line">                            this.context[index].drawImage(this.bgImg, 0, 0, bgimgWidth, bgimgHeight);</span>
<span class="line"></span>
<span class="line">                            // 写详细信息(放外面会被图片挡住，因为图片加载较慢)</span>
<span class="line">                            const textColor = tank.connect ? "black" : "red";</span>
<span class="line">                            context[index].fillStyle = textColor;</span>
<span class="line">                            context[index].font = "20px sans-serif";</span>
<span class="line">                            context[index].fillText(tank.id, bgimgWidth * 0.06, bgimgHeight * 0.6);</span>
<span class="line">                        }</span>
<span class="line">                    }).exec();</span>
<span class="line">            });</span>
<span class="line">        },</span>
<span class="line">         </span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script></span>
<span class="line"></span>
<span class="line">&lt;style scoped></span>
<span class="line">.canvas {</span>
<span class="line">    width: 750rpx;</span>
<span class="line">    height: 300rpx;</span>
<span class="line">    margin-top: 30rpx;</span>
<span class="line">    margin-left: 37rpx;</span>
<span class="line">    margin-right: 37rpx;</span>
<span class="line">}</span>
<span class="line">&lt;/style></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


