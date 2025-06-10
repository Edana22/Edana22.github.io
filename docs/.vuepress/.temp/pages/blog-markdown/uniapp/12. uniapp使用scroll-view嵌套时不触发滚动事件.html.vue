<template><div><h1 id="uniapp使用scroll-view嵌套时不触发滚动事件" tabindex="-1"><a class="header-anchor" href="#uniapp使用scroll-view嵌套时不触发滚动事件"><span>uniapp使用scroll-view嵌套时不触发滚动事件</span></a></h1>
<p>参考链接：</p>
<ul>
<li>微信文档：https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html</li>
<li>uniapp文档： https://uniapp.dcloud.net.cn/component/scroll-view.html</li>
</ul>
<p>布局代码：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;scroll-view scroll-y class="scroll-box" bindscrolltolower="scrollToBottom"></span>
<span class="line">    &lt;view></span>
<span class="line">        &lt;view v-for="item in 30">{{ item }}: test scroller-view 滚动到底部事件&lt;/view></span>
<span class="line">    &lt;/view></span>
<span class="line">&lt;/scroll-view></span>
<span class="line">scrollToBottom(e) {</span>
<span class="line">    console.log('e', e);</span>
<span class="line">    console.log("scroller-view 滚动到底部事件");</span>
<span class="line">}</span>
<span class="line">.scroll-box {</span>
<span class="line">    background-color: antiquewhite;</span>
<span class="line">    width: 100%;</span>
<span class="line">    height: 500px;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>刚开始按照微信文档设置了 bindscrolltolower=&quot;scrollToBottom&quot; 方法但不触发，</p>
<p>增加了 lower-threshold='100' 也不触发。</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202503/2194212-20250310111821149-949738445.gif" alt="img"></p>
<p>后来发现微信文档和uniapp文档不一样。</p>
<p>微信文档：</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202503/2194212-20250310110459060-116603360.png" alt="img"></p>
<p>uniapp文档：</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202503/2194212-20250310110441143-101489242.png" alt="img"></p>
<p>把绑定方法的属性从微信文档的写法改成uniapp的写法就可以了 <strong>@scrolltolower=&quot;scrollToBottom&quot;</strong></p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202503/2194212-20250310112312379-1245841651.gif" alt="img"></p>
</div></template>


