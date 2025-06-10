<template><div><h1 id="uniapp-使用-uni-createanimation-旋转动画模拟抽奖" tabindex="-1"><a class="header-anchor" href="#uniapp-使用-uni-createanimation-旋转动画模拟抽奖"><span>uniapp 使用 uni.createAnimation 旋转动画模拟抽奖</span></a></h1>
<p>效果图如下：</p>
<p><img src="https://img2023.cnblogs.com/blog/2194212/202212/2194212-20221223092226485-1756993848.gif" alt="img"></p>
<p>用到的图片如下：</p>
<p><img src="https://img2023.cnblogs.com/blog/2194212/202212/2194212-20221223092309002-891582282.png" alt="img"><img src="https://img2023.cnblogs.com/blog/2194212/202212/2194212-20221223092326539-125596610.png" alt="img"></p>
<p>wheel.png 　　　　　　　　　point.png</p>
<p>api文档：https://uniapp.dcloud.net.cn/api/ui/animation.html#createanimation</p>
<p>代码如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;template></span>
<span class="line">    &lt;view></span>
<span class="line">        &lt;view class="box"></span>
<span class="line">            &lt;image src="/static/wheel.png" :animation="animationData">&lt;/image></span>
<span class="line">            &lt;image src="/static/point.png" @click="run">&lt;/image></span>
<span class="line">        &lt;/view></span>
<span class="line">        &lt;view >index：{{result}} -- {{todoList[result]}}&lt;/view></span>
<span class="line">    &lt;/view></span>
<span class="line">&lt;/template></span>
<span class="line"></span>
<span class="line">&lt;script></span>
<span class="line">    export default {</span>
<span class="line">        data() {</span>
<span class="line">            return {</span>
<span class="line">                animationData: {},</span>
<span class="line">                lastResult: 0,</span>
<span class="line">                result: 0,</span>
<span class="line">                deg: 0,</span>
<span class="line">                todoList: ["跑步", "游泳", "学习", "读书", "工作", "休息"],</span>
<span class="line">            }</span>
<span class="line">        },</span>
<span class="line">        methods: {</span>
<span class="line">            run() {</span>
<span class="line">                let animation = uni.createAnimation({</span>
<span class="line">                    transformOrigin: "50% 50%",</span>
<span class="line">                    duration: 2000,</span>
<span class="line">                    timingFunction: "ease",</span>
<span class="line">                    delay: 0</span>
<span class="line">                });</span>
<span class="line">                this.animationData = animation;</span>
<span class="line">                this.animationData.rotate(this.randomNum()).step();</span>
<span class="line">                this.animationData = this.animationData.export();</span>
<span class="line">            },</span>
<span class="line">            randomNum() {</span>
<span class="line">                this.result = Math.floor(Math.random() * 6); //数组索引：[0,5]</span>
<span class="line">                if (this.result > this.lastResult) {</span>
<span class="line">                    this.deg += 360 * 3 + (this.result - this.lastResult) * 60;</span>
<span class="line">                } else {</span>
<span class="line">                    this.deg += 360 * 3 + 360 - (this.lastResult - this.result) * 60;</span>
<span class="line">                }</span>
<span class="line">                console.log(`result:${this.result},deg:${this.deg}`);</span>
<span class="line">                this.lastResult = this.result;</span>
<span class="line"></span>
<span class="line">                return this.deg;</span>
<span class="line">            },</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">&lt;/script></span>
<span class="line"></span>
<span class="line">&lt;style></span>
<span class="line">    .box {</span>
<span class="line">        width: 300rpx;</span>
<span class="line">        height: 300rpx;</span>
<span class="line">        margin: auto;</span>
<span class="line">        position: relative;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    image {</span>
<span class="line">        position: absolute;</span>
<span class="line">        width: 300rpx;</span>
<span class="line">        height: 300rpx;</span>
<span class="line">    }</span>
<span class="line">&lt;/style></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


