import{_ as n,c as a,d as e,o as i}from"./app-CeIyOE1o.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="vue项目中使用canvas" tabindex="-1"><a class="header-anchor" href="#vue项目中使用canvas"><span>vue项目中使用canvas</span></a></h1><p>canvas API 文档：https://www.canvasapi.cn/</p><hr><h2 id="一、在html中使用canvas" tabindex="-1"><a class="header-anchor" href="#一、在html中使用canvas"><span>一、在html中使用canvas</span></a></h2><p><a href="https://www.w3school.com.cn/html/html5_canvas.asp" target="_blank" rel="noopener noreferrer"><strong>canvas 元素用于在网页上绘制图形。</strong></a></p><p><a href="https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_canvas_image" target="_blank" rel="noopener noreferrer"><strong>在html中，使用 document.getElementById(&quot;myCanvas&quot;) 找到相应元素，然后继续下一步操作。</strong></a></p><p><a href="https://www.w3school.com.cn/tiy/t.asp?f=eg_html5_canvas_image" target="_blank" rel="noopener noreferrer"><strong><img src="https://img2020.cnblogs.com/blog/2194212/202110/2194212-20211028091729153-140552545.png" alt="img"></strong></a></p><h2 id="二、在vue中使用canvas" tabindex="-1"><a class="header-anchor" href="#二、在vue中使用canvas"><span>二、在vue中使用canvas</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>        &lt;p&gt;vue项目中测试canvas&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;canvas id=&quot;mycanvas&quot; ref=&quot;mycanvas&quot;&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span>        &lt;img id=&quot;myimg&quot; ref=&quot;myimg&quot; src=&quot;./assets/logo.png&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>    export default {</span></span>
<span class="line"><span>        name: &#39;app&#39;,</span></span>
<span class="line"><span>        mounted() {</span></span>
<span class="line"><span>            this.draw();</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        methods: {</span></span>
<span class="line"><span>            draw() {</span></span>
<span class="line"><span>                window.onload = function() {</span></span>
<span class="line"><span>                    var img = document.getElementById(&quot;myimg&quot;);</span></span>
<span class="line"><span>                    var c = document.getElementById(&quot;mycanvas&quot;);</span></span>
<span class="line"><span>                    var cxt = c.getContext(&quot;2d&quot;);</span></span>
<span class="line"><span>                    cxt.drawImage(img, 0, 0, 80, 80)</span></span>
<span class="line"><span>                };</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>    #app {</span></span>
<span class="line"><span>        text-align: center;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    canvas {</span></span>
<span class="line"><span>        background-color: lightsalmon;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    img {</span></span>
<span class="line"><span>        width: 50px;</span></span>
<span class="line"><span>        height: 50px;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><img src="https://img2020.cnblogs.com/blog/2194212/202110/2194212-20211028090724570-2012068624.png" alt="img"></strong></p><hr><h1 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意：</span></a></h1><p>1、在找到canvas和img元素的时候，用 document.getElementById(&quot;mycanvas&quot;); 可以找到，但用 var ctx = this.$refs.mycanvas; 将会找不到，会报undefined错误。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-"><span class="line"><span>draw() {</span></span>
<span class="line"><span>    window.onload = function() {</span></span>
<span class="line"><span>        var c = this.$refs.mycanvas;</span></span>
<span class="line"><span>        var img = this.$refs.myimg;</span></span>
<span class="line"><span>        var cxt = c.getContext(&quot;2d&quot;);</span></span>
<span class="line"><span>        cxt.drawImage(img, 0, 0, 80, 80)</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202110/2194212-20211028091131398-1706868586.png" alt="img"></p><p>2、不加<a href="https://www.runoob.com/w3cnote/javascript-window-onload.html" target="_blank" rel="noopener noreferrer"> window.onload </a>也不会绘制图片，因为 <strong>drawImage这个方法，当图片在没加载完的情况下使用，他会不被调用。绘制就会失败。</strong></p><p>具体解决办法见 https://www.cnblogs.com/padding1015/p/9717845.html</p>`,17)]))}const d=n(l,[["render",p]]),r=JSON.parse('{"path":"/vue_debug/674nlxw3/","title":" vue项目中使用canvas","lang":"zh-CN","frontmatter":{"title":" vue项目中使用canvas","createTime":"2025/06/23 09:09:24","permalink":"/vue_debug/674nlxw3/"},"readingTime":{"minutes":0.97,"words":291},"git":{"createdTime":1750842564000,"updatedTime":1750842564000,"contributors":[{"name":"twoflowers","username":"","email":"1292548615@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/51a398cd538d08b052e061e4b9f2c3353a7fae1d5406ef128cad6096d91bd325?d=retro"}]},"filePathRelative":"notes/vue/2.vue_debug_实战/1.vue项目中使用canvas.md","headers":[],"categoryList":[{"id":"4358b5","sort":10001,"name":"notes"},{"id":"67cf80","sort":10002,"name":"vue"},{"id":"bb9845","sort":2,"name":"vue_debug_实战"}]}');export{d as comp,r as data};
