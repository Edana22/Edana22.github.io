<template><div><h1 id="uniapp-用view画抽奖转盘" tabindex="-1"><a class="header-anchor" href="#uniapp-用view画抽奖转盘"><span>uniapp 用view画抽奖转盘</span></a></h1>
<h3 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路"><span>实现思路：</span></a></h3>
<p>因为是画转盘，而不是画扇形，所以可以绕过用view画扇形，直接画一个圆，然后画几条直径，把文字写入的时候旋转一下就可以了。</p>
<h3 id="以6等分为例-实现步骤" tabindex="-1"><a class="header-anchor" href="#以6等分为例-实现步骤"><span>以6等分为例，实现步骤：</span></a></h3>
<ol>
<li>画转盘背景：
<ul>
<li>画一个圆，填充背景颜色；</li>
<li>用“子绝父相”布局，画一条直径，垂直居中；</li>
<li>再画一条直径，旋转60度；</li>
<li>画第三条直径，旋转120度；</li>
</ul>
</li>
<li>在转盘背景上写文字：
<ul>
<li>以圆的外接矩形为外层容器，设置绝对布局和flex布局水平居中；</li>
<li>内层view设置绝对布局，写入数据；</li>
<li>由于绝对布局和外层容器设置了水平居中，所有的内层view都堆在中心，水平居中；</li>
<li>以中心为旋转点，内层view分别旋转 -60度、-120度；-180度、-240度、-300度；</li>
<li>设置文字方向垂直，写入完成；</li>
</ul>
</li>
<li>画转盘上指针：
<ul>
<li>样式可以自定义。</li>
</ul>
</li>
<li>增加旋转动画。</li>
</ol>
<h3 id="实现效果" tabindex="-1"><a class="header-anchor" href="#实现效果"><span>实现效果：</span></a></h3>
<p><img src="https://img2023.cnblogs.com/blog/2194212/202301/2194212-20230130113128376-685102255.gif" alt="img"></p>
<h3 id="具体代码如下-添加了禁止连续点击多次" tabindex="-1"><a class="header-anchor" href="#具体代码如下-添加了禁止连续点击多次"><span>具体代码如下（添加了禁止连续点击多次）：</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;!-- 抽奖转盘 --></span>
<span class="line">&lt;template></span>
<span class="line">    &lt;view id="app"></span>
<span class="line">        &lt;view class="title">{{showTextList[result].title}}&lt;/view></span>
<span class="line">        &lt;view class="container" @click="startLottery" :style="{ top: windowSize.height * 0.05 + 'px' }"></span>
<span class="line">            &lt;!-- 转盘 --></span>
<span class="line">            &lt;view class="circle" :animation="animationData"></span>
<span class="line">                &lt;view class="lines"></span>
<span class="line">                    &lt;view v-for="(item, index) in lineList" :style="{ transform: 'rotate(' + item.rotateDeg + 'deg)' }"></span>
<span class="line">                    &lt;/view></span>
<span class="line">                &lt;/view></span>
<span class="line"></span>
<span class="line">                &lt;view class="texts"></span>
<span class="line">                    &lt;view v-for="(item, index) in showTextList"</span>
<span class="line">                        :style="{ transform: 'rotate(' + item.rotateDeg + 'deg)' }"></span>
<span class="line">                        {{ item.title }}</span>
<span class="line">                    &lt;/view></span>
<span class="line">                &lt;/view></span>
<span class="line">            &lt;/view></span>
<span class="line">            &lt;!-- 指针 --></span>
<span class="line">            &lt;view class="pointer"></span>
<span class="line">                &lt;view class="pointer-triangle" :style="{</span>
<span class="line">            borderBottomWidth: windowSize.width / 14 + 'px',</span>
<span class="line">            borderRightWidth: windowSize.width / 30 + 'px',</span>
<span class="line">            borderLeftWidth: windowSize.width / 30 + 'px',</span>
<span class="line">          }">&lt;/view></span>
<span class="line">                &lt;view class="pointer-circle" :style="{</span>
<span class="line">            width: windowSize.width / 12 + 'px',</span>
<span class="line">            height: windowSize.width / 12 + 'px',</span>
<span class="line">          }">GO&lt;/view></span>
<span class="line">            &lt;/view></span>
<span class="line">        &lt;/view></span>
<span class="line">    &lt;/view></span>
<span class="line">&lt;/template></span>
<span class="line"></span>
<span class="line">&lt;script></span>
<span class="line">    export default {</span>
<span class="line">        data() {</span>
<span class="line">            return {</span>
<span class="line">                windowSize: {},</span>
<span class="line">                lineList: [],</span>
<span class="line">                showTextList: [],</span>
<span class="line">                isClicked: false,</span>
<span class="line">                animationData: {},</span>
<span class="line">                lastResult: 0,</span>
<span class="line">                result: 0,</span>
<span class="line">                deg: 0,</span>
<span class="line">            };</span>
<span class="line">        },</span>
<span class="line">        onLoad() {</span>
<span class="line">            this.initData();</span>
<span class="line">        },</span>
<span class="line">        mounted() {</span>
<span class="line">            this.windowSize = this.getWindowSize();</span>
<span class="line">        },</span>
<span class="line">        methods: {</span>
<span class="line">            /* 获取屏幕可用尺寸 */</span>
<span class="line">            getWindowSize() {</span>
<span class="line">                const windowInfo = uni.getWindowInfo();</span>
<span class="line">                let availableWindowSize = {</span>
<span class="line">                    width: 0,</span>
<span class="line">                    height: 0</span>
<span class="line">                };</span>
<span class="line">                availableWindowSize.width = windowInfo.windowWidth; //px</span>
<span class="line">                availableWindowSize.height = windowInfo.windowHeight; //px</span>
<span class="line">                // console.log("windowSize", this.windowSize);</span>
<span class="line">                return availableWindowSize;</span>
<span class="line">            },</span>
<span class="line">            // 初始化数据</span>
<span class="line">            initData() {</span>
<span class="line">                this.lineList = [{</span>
<span class="line">                    rotateDeg: 0,</span>
<span class="line">                }, {</span>
<span class="line">                    rotateDeg: 60,</span>
<span class="line">                }, {</span>
<span class="line">                    rotateDeg: 120,</span>
<span class="line">                }];</span>
<span class="line">                // 文字要逆时针旋转</span>
<span class="line">                this.showTextList = [{</span>
<span class="line">                        title: "1:跑步",</span>
<span class="line">                        rotateDeg: 0</span>
<span class="line">                    },</span>
<span class="line">                    {</span>
<span class="line">                        title: "2:游泳",</span>
<span class="line">                        rotateDeg: -60</span>
<span class="line">                    },</span>
<span class="line">                    {</span>
<span class="line">                        title: "3:666",</span>
<span class="line">                        rotateDeg: -120</span>
<span class="line">                    },</span>
<span class="line">                    {</span>
<span class="line">                        title: "4:打拳",</span>
<span class="line">                        rotateDeg: -180</span>
<span class="line">                    },</span>
<span class="line">                    {</span>
<span class="line">                        title: "5:剑道",</span>
<span class="line">                        rotateDeg: -240</span>
<span class="line">                    },</span>
<span class="line">                    {</span>
<span class="line">                        title: "6:play piano",</span>
<span class="line">                        rotateDeg: -300</span>
<span class="line">                    }</span>
<span class="line">                ];</span>
<span class="line">            },</span>
<span class="line">            /* 开始旋转抽奖 */</span>
<span class="line">            startLottery() {</span>
<span class="line">                if (this.isClicked) {</span>
<span class="line">                    //已经点击了</span>
<span class="line">                    console.log("点击太频繁啦");</span>
<span class="line">                    return;</span>
<span class="line">                }</span>
<span class="line">                this.isClicked = true;</span>
<span class="line"></span>
<span class="line">                let animation = uni.createAnimation({</span>
<span class="line">                    transformOrigin: "50% 50%",</span>
<span class="line">                    duration:2000,</span>
<span class="line">                    timingFunction: "ease-in-out",</span>
<span class="line">                    delay: 0,</span>
<span class="line">                });</span>
<span class="line">                this.animationData = animation;</span>
<span class="line">                this.animationData.rotate(this.randomNum()).step();</span>
<span class="line">                this.animationData = this.animationData.export();</span>
<span class="line"></span>
<span class="line">                setTimeout(() => {</span>
<span class="line">                    this.isClicked = false;</span>
<span class="line">                }, 2000);</span>
<span class="line">            },</span>
<span class="line">            /* 获取随机数 */</span>
<span class="line">            randomNum() {</span>
<span class="line">                this.result = Math.floor(Math.random() * 6); //数组索引：[0,5]</span>
<span class="line">                if (this.result > this.lastResult) {</span>
<span class="line">                    this.deg += 360 * 4 + (this.result - this.lastResult) * 60;</span>
<span class="line">                } else {</span>
<span class="line">                    this.deg += 360 * 4 + 360 - (this.lastResult - this.result) * 60;</span>
<span class="line">                }</span>
<span class="line">                // console.log(`result:${this.result},deg:${this.deg}`);</span>
<span class="line">                this.lastResult = this.result;</span>
<span class="line"></span>
<span class="line">                return this.deg;</span>
<span class="line">            },</span>
<span class="line">        },</span>
<span class="line">    };</span>
<span class="line">&lt;/script></span>
<span class="line"></span>
<span class="line">&lt;style scoped></span>
<span class="line">    .title{</span>
<span class="line">        text-align: center;</span>
<span class="line">    }</span>
<span class="line">    .container {</span>
<span class="line">        position: relative;</span>
<span class="line">        width: 100%;</span>
<span class="line">        /* background: rgba(87, 189, 106, 0.5); */</span>
<span class="line">        border: 1rpx solid skyblue;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    .circle {</span>
<span class="line">        position: relative;</span>
<span class="line">        margin: auto;</span>
<span class="line">        width: 400rpx;</span>
<span class="line">        height: 400rpx;</span>
<span class="line">        border-radius: 50%;</span>
<span class="line">        border: 20rpx solid goldenrod;</span>
<span class="line">        background: rgba(0, 112, 46, 0.8);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    .lines {</span>
<span class="line">        position: absolute;</span>
<span class="line">        width: 100%;</span>
<span class="line">        height: 100%;</span>
<span class="line">        left: 0;</span>
<span class="line">        top: 0;</span>
<span class="line">        display: flex;</span>
<span class="line">        justify-content: center;</span>
<span class="line">        align-items: center;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    .lines>view {</span>
<span class="line">        display: inline-block;</span>
<span class="line">        width: 100%;</span>
<span class="line">        height: 1%;</span>
<span class="line">        position: absolute;</span>
<span class="line">        transform-origin: center center;</span>
<span class="line">        background-color: #f5b362;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    .texts {</span>
<span class="line">        position: absolute;</span>
<span class="line">        width: 100%;</span>
<span class="line">        height: 100%;</span>
<span class="line">        top: 0;</span>
<span class="line">        left: 0;</span>
<span class="line">        display: flex;</span>
<span class="line">        justify-content: center;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    .texts view {</span>
<span class="line">        display: inline-block;</span>
<span class="line">        height: 96%;</span>
<span class="line">        color: white;</span>
<span class="line">        position: absolute;</span>
<span class="line">        writing-mode: vertical-lr;</span>
<span class="line">        transform-origin: center center;</span>
<span class="line">        /* background-color: #bd2d30; */</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    .pointer {</span>
<span class="line">        position: absolute;</span>
<span class="line">        margin: auto;</span>
<span class="line">        width: 100%;</span>
<span class="line">        height: 100%;</span>
<span class="line">        top: 0;</span>
<span class="line">        left: 0;</span>
<span class="line">        /* border: 5rpx solid yellow; */</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    .pointer-triangle,</span>
<span class="line">    .pointer-circle {</span>
<span class="line">        position: absolute;</span>
<span class="line">        z-index: 1;</span>
<span class="line">        left: 50%;</span>
<span class="line">        top: 50%;</span>
<span class="line">        transform: translate(-50%, -50%);</span>
<span class="line">        display: inline-block;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    .pointer-triangle {</span>
<span class="line">        width: 0;</span>
<span class="line">        height: 0;</span>
<span class="line">        border-style: solid;</span>
<span class="line">        border-top-width: 0px;</span>
<span class="line">        border-color: transparent transparent #bd2d30 transparent;</span>
<span class="line">        transform: translate(-50%, -100%);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    .pointer-circle {</span>
<span class="line">        display: flex;</span>
<span class="line">        justify-content: center;</span>
<span class="line">        align-items: center;</span>
<span class="line">        border-radius: 50%;</span>
<span class="line">        color: white;</span>
<span class="line">        font-weight: bold;</span>
<span class="line">        background: #bd2d30;</span>
<span class="line">    }</span>
<span class="line">&lt;/style></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


