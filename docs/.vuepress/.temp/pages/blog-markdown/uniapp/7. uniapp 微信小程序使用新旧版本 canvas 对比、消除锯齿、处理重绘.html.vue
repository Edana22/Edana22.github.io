<template><div><h1 id="uniapp-微信小程序使用新旧版本-canvas-对比、消除锯齿、处理重绘" tabindex="-1"><a class="header-anchor" href="#uniapp-微信小程序使用新旧版本-canvas-对比、消除锯齿、处理重绘"><span>uniapp 微信小程序使用新旧版本 canvas 对比、消除锯齿、处理重绘</span></a></h1>
<p>微信小程序使用canvas时，分为旧版和新版。https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html</p>
<p>**旧版：**不支持同层渲染，使用canvas的图层总在最上层。模拟器可能表现正常，但真机的canvas图层一定在最上层，设置了 z-index 也无效。</p>
<p>**新版：**2.9.0 起支持一套新 Canvas 2D 接口（需指定 type 属性），同时支持<a href="https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html#%E5%8E%9F%E7%94%9F%E7%BB%84%E4%BB%B6%E5%90%8C%E5%B1%82%E6%B8%B2%E6%9F%93" target="_blank" rel="noopener noreferrer">同层渲染</a>，原有接口不再维护。</p>
<p>注意1：因为内容较多，所以代码都折叠了，需要代码的小伙伴请注意。</p>
<p>注意2：canvas 涉及到的单位都是 px</p>
<hr>
<h3 id="旧版-canvas" tabindex="-1"><a class="header-anchor" href="#旧版-canvas"><span>旧版 canvas:</span></a></h3>
<p><img src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="img">View Code</p>
<p>**旧版效果图：**h5 和微信开发者工具正常显示，但是真机（安卓）上canvas 中画的矩形在最上层，挡住了文字。</p>
<p>**解决办法：**改成新版 canvas： https://developers.weixin.qq.com/miniprogram/dev/framework/ability/canvas-legacy-migration.html</p>
<p><img src="https://img2023.cnblogs.com/blog/2194212/202212/2194212-20221230142746504-98960526.png" alt="img"><img src="https://img2023.cnblogs.com/blog/2194212/202212/2194212-20221230142935307-2030963599.png" alt="img"></p>
<hr>
<h3 id="新版canvas" tabindex="-1"><a class="header-anchor" href="#新版canvas"><span>新版canvas：</span></a></h3>
<p>组件介绍：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/canvas.html</p>
<p>api： https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasContext.arc.html</p>
<p><img src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="img">View Code</p>
<p>**旧版效果图：**微信开发者工具上canvas 中画的矩形在最上层，挡住了文字，但是真机（安卓）正常显示。</p>
<p><strong>注意：</strong></p>
<ol>
<li>设置 strokeStyle 和 fillStyle 的方法都变了，从 <strong>ctx.setFillStyle(&quot;red&quot;) 改成了 ctx.fillStyle = &quot;red&quot;;</strong> 从 （“参数”）的形式改成了 “用 = 赋值” 的形式。其她类似的api如果使用时报错，都要修改为用=赋值的形式。</li>
<li>不需要再调用 ctx.draw() 了。</li>
<li>新版 canvas 的文档写的不好(微信文档和uniapp文档写的都不好)，有很多问题需要查看社区提问的回答，比如 <a href="https://developers.weixin.qq.com/community/develop/doc/000caea9508b18e7c5f9581f258c00?highLine=Canvas%202d%20null" target="_blank" rel="noopener noreferrer">创建'2d'canvas出现Cannot read 'node' of null的问题？</a></li>
</ol>
<p><img src="https://img2023.cnblogs.com/blog/2194212/202212/2194212-20221230143728518-1684880745.png" alt="img"><img src="https://img2023.cnblogs.com/blog/2194212/202212/2194212-20221230143751929-515339385.png" alt="img"></p>
<hr>
<h3 id="新版canvas绘制消除锯齿" tabindex="-1"><a class="header-anchor" href="#新版canvas绘制消除锯齿"><span>新版canvas绘制消除锯齿：</span></a></h3>
<ol>
<li><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/ability/canvas.html" target="_blank" rel="noopener noreferrer">不同的设备上，存在物理像素和逻辑像素不相等的情况，所以一般我们需要用 wx.getWindowInfo 获取设备的像素比，乘上 canvas 的渲染大小，作为画布的逻辑大小。</a></li>
<li><a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/system/wx.getWindowInfo.html" target="_blank" rel="noopener noreferrer">wx.getWindowInfo() </a></li>
<li>canvas.width、canvas.height 和 css 中width、height属性区别可以看：https://segmentfault.com/a/1190000020189168</li>
</ol>
<p>不使用 ctx.scale(dpr, dpr) 代码：</p>
<p><img src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="img">View Code</p>
<p>使用 ctx.scale(dpr, dpr) 代码：</p>
<p><img src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="img">View Code</p>
<p>效果图对比：</p>
<p><img src="https://img2023.cnblogs.com/blog/2194212/202212/2194212-20221230163625122-132484713.jpg" alt="img"><img src="https://img2023.cnblogs.com/blog/2194212/202212/2194212-20221230163637719-1059480340.jpg" alt="img"></p>
<hr>
<h3 id="新版canvas绘制有重绘的情况" tabindex="-1"><a class="header-anchor" href="#新版canvas绘制有重绘的情况"><span>新版canvas绘制有重绘的情况：</span></a></h3>
<ol>
<li>点的坐标要用 canvasWidth 确定，而不是 styleWidth</li>
<li>如果有重绘的话， res[0].width 会变，所以用 canvas.width = this.defaultCanvasW * dpr; 而不是 canvas.width = width * dpr;</li>
<li>console.log(<code v-pre>%cx:${pointO.x}, y:${pointO.y}</code>, &quot;color:green;font-size:large&quot;); // %c 是改变 console.log 样式的。</li>
<li>设置画布尺寸代码为： canvas.width = this.defaultCanvasW * dpr;  canvas.height = this.defaultCanvasH * dpr;</li>
</ol>
<p><img src="http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif" alt="img">View Code</p>
<p>运行效果：</p>
<p><img src="https://img2023.cnblogs.com/blog/2194212/202301/2194212-20230103143251851-1535318794.png" alt="img"><img src="https://img2023.cnblogs.com/blog/2194212/202301/2194212-20230103143323639-2011708712.png" alt="img"></p>
<p>如果设置画布尺寸仍用 canvas.width = width * dpr; 则重绘的时候结果如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">const canvas = res[0].node;</span>
<span class="line">const ctx = canvas.getContext('2d');</span>
<span class="line"></span>
<span class="line">// Canvas 画布的实际绘制宽高</span>
<span class="line">const width = res[0].width; //画布尺寸 300</span>
<span class="line">const height = res[0].height; //画布尺寸 150</span>
<span class="line">console.log("width:", width, " height:", height);</span>
<span class="line">// 初始化画布大小</span>
<span class="line">const dpr = wx.getWindowInfo().pixelRatio;</span>
<span class="line">console.log("dpr：", dpr);</span>
<span class="line">// canvas.width = this.defaultCanvasW * dpr; //设置画布尺寸</span>
<span class="line">// canvas.height = this.defaultCanvasH * dpr; //设置画布尺寸</span>
<span class="line">canvas.width = width * dpr;</span>
<span class="line">canvas.height = height * dpr;</span>
<span class="line">ctx.scale(dpr, dpr); </span>
<span class="line">console.log("canvas.width:", canvas.width, " canvas.height:", canvas.height);</span>
<span class="line"></span>
<span class="line">drawCircle(ctx);//一定要放在 ctx.scale(dpr, dpr); 之后，</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2023.cnblogs.com/blog/2194212/202301/2194212-20230103150642716-176831170.gif" alt="img"></p>
</div></template>


