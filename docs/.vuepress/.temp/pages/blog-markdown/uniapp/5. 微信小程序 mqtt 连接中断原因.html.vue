<template><div><h1 id="微信小程序-mqtt-连接中断原因" tabindex="-1"><a class="header-anchor" href="#微信小程序-mqtt-连接中断原因"><span>微信小程序 mqtt 连接中断原因</span></a></h1>
<p>上周开发微信小程序时新加了一个页面，复用了以前页面的逻辑，但是今天发现新加的页面出现了很奇怪的问题：</p>
<ul>
<li>进入新页面后，点一下查询再退出页面，mqtt连接正常；</li>
<li>进入新页面后，直接返回退出页面，mqtt连接中断。</li>
</ul>
<p><img src="https://img2023.cnblogs.com/blog/2194212/202310/2194212-20231023102630030-1176214798.png" alt="img"></p>
<p>WebSocket connection to &quot;wss://www.xxxx.com/mqtt&quot; failed:Close received after close</p>
<p><img src="https://img2023.cnblogs.com/blog/2194212/202310/2194212-20231023102352228-1191222138.png" alt="img"></p>
<p>经过排查，发现小程序的生命周期onUnload和onHide里面都调用了取消订阅的方法 client.unsubscribe(subsTopic) ，但是不点查询的时候并没有订阅 subsTopic 。</p>
<p><strong>订阅之后多次取消订阅没有问题，但是没有订阅时调用取消订阅 mqtt 连接就会中断。</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">onUnload() {</span>
<span class="line">    console.log("卸载页面");</span>
<span class="line">    this.clearTopic();</span>
<span class="line">},</span>
<span class="line">onHide() {</span>
<span class="line">    console.log("隐藏页面");</span>
<span class="line">    this.clearTopic();</span>
<span class="line">},</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决办法：</p>
<p><strong>去掉onUnload和onHide里的 this.clearTopic，在查询数据里面1. 订阅主题 2. 发布主题 3. 获取数据 4. 取消订阅主题。</strong></p>
<p><strong>补充：也可以在 unsubscribe 之前先检查一下 this.subsTopic ，不为空才取消定订阅，否则不取消。</strong></p>
</div></template>


