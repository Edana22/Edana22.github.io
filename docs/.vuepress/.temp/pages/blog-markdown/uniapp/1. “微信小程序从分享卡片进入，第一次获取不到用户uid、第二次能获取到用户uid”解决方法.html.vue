<template><div><h1 id="微信小程序从分享卡片进入-第一次获取不到用户uid、第二次能获取到用户uid-解决方法" tabindex="-1"><a class="header-anchor" href="#微信小程序从分享卡片进入-第一次获取不到用户uid、第二次能获取到用户uid-解决方法"><span>“微信小程序从分享卡片进入，第一次获取不到用户uid、第二次能获取到用户uid”解决方法</span></a></h1>
<p>用uniapp开发微信小程序时，有一个需求是分享罐表详情页面给其它用户，其它用户（在已经登录的状态下）点击分享卡片可以直接跳转到该罐表详情页，且能显示自己是否已经收藏该罐表（收藏状态由用户uid和罐表id共同确定）。</p>
<p>基本思路是用 微信原生的<a href="https://uniapp.dcloud.net.cn/api/plugins/share?id=onshareappmessage" target="_blank" rel="noopener noreferrer"> </a>onShareAppMessage(OBJECT) 实现，uniapp文档：https://uniapp.dcloud.net.cn/api/plugins/share?id=onshareappmessage，微信小程序文档：https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShareAppMessage-Object-object 。</p>
<p>path 是其它用户点击分享卡片直接进入的页面，不写默认是分享的当前页面。</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202109/2194212-20210903115825300-94922755.png" alt="img"></p>
<h4 id="在-onshareappmessage-的path中传递的参数-由下一页面的onload-option-接收。" tabindex="-1"><a class="header-anchor" href="#在-onshareappmessage-的path中传递的参数-由下一页面的onload-option-接收。"><span>在 onShareAppMessage 的path中传递的参数，由下一页面的onLoad（option）接收。</span></a></h4>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202109/2194212-20210903120046514-520136244.png" alt="img"></p>
<p>以上是微信小程序实现页面分享的基础功能。</p>
<hr>
<p>遇到的一个bug是：其它用户点击分享卡片第一次不能正确获取uid、第二次进入小程序才能正确获取uid时。</p>
<p>第一次进入小程序：</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202109/2194212-20210903120355690-557994670.png" alt="img"></p>
<p>第二次进入小程序：</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202109/2194212-20210903115316490-79027468.png" alt="img"></p>
<p>解决办法：在罐表详情页面的分享设置path为home（而不是当前页面），然后从home跳转到罐表详情，这样就可以正确显示页面数据了。丹尼斯小程序就是这样实现的。丹尼斯小程序效果如下：</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202109/2194212-20210903141840248-175690400.gif" alt="img"></p>
<hr>
<p>罐表详情.vue</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">onShareAppMessage(options) {</span>
<span class="line">    var msg = "我给你分享了一个罐表，快来点击查看吧";</span>
<span class="line">    return {</span>
<span class="line">        title: msg, // 转发后 所显示的title</span>
<span class="line">        path: '/pages/home/home?id=' + this.id</span>
<span class="line">    }</span>
<span class="line">},</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>home.vue</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">onLoad(option) {</span>
<span class="line">    var scene = wx.getLaunchOptionsSync().scene; //获取场景值，判断是用哪种方式进入的小程序</span>
<span class="line">    if (scene == 1007 || scene == 1008 || scene == 1044) { //从分享进入</span>
<span class="line">        if (option.id) {</span>
<span class="line">            uni.navigateTo({</span>
<span class="line">                url: '../subpage/tableMarket/marketSeeTable/marketSeeTable?id=' + option.id</span>
<span class="line">            })</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>场景值介绍：https://developers.weixin.qq.com/miniprogram/dev/reference/scene-list.html</p>
</div></template>


