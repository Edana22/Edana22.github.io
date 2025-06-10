<template><div><h1 id="uniapp使用map显示多条polyline" tabindex="-1"><a class="header-anchor" href="#uniapp使用map显示多条polyline"><span>uniapp使用map显示多条polyline</span></a></h1>
<h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接：</span></a></h3>
<ul>
<li>https://developers.weixin.qq.com/miniprogram/dev/component/map.html</li>
<li>微信开放社区问答</li>
</ul>
<h3 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识"><span>基础知识：</span></a></h3>
<p>坐标系</p>
<ul>
<li>wgs-84:地球坐标系（国际通用）--- gps</li>
<li>gcj02:火星坐标系（wgs84加密）国内必须用加密后的坐标</li>
<li>bd09:百度坐标系（百度地图使用）</li>
<li>wgs-84 和 gcj02 之间可以用java代码转换。</li>
</ul>
<p>微信小程序使用<map></p>
<ul>
<li>api: wx.getLocation(Object object) https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html</li>
<li>地图相关使用的坐标格式应为 gcj02。</li>
<li>若使用该接口，需要在 app.json 中进行声明，否则将无法正常使用该接口</li>
<li>使用前还需要先通过类目审核，再在小程序管理后台，「开发」-「开发管理」-「接口设置」中自助开通该接口权限。</li>
</ul>
<p>经度（竖）：0~180°
纬度（横）：0~90°</p>
<p>实际api中使用的参数通常是（纬度，经度）而不是先经度后纬度。</p>
<hr>
<h3 id="布局代码" tabindex="-1"><a class="header-anchor" href="#布局代码"><span>布局代码</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;map id="myMap" :latitude="myLatitude" :longitude="myLongitude" :scale="scale" :polyline="polyline" show-location :include-points="polyline[0].points">&lt;/map></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>最重要的参数是 polyline 和 include-points</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">return {</span>
<span class="line">    // 39.908823,116.397470(北京)</span>
<span class="line">    myLatitude: 39.908823, //中心纬度 </span>
<span class="line">    myLongitude: 116.397470, //中心经度  </span>
<span class="line">    scale: 12, //取值范围为3-20</span>
<span class="line">    polyline: [</span>
<span class="line">        {</span>
<span class="line">            points: [{</span>
<span class="line">                longitude: 113.3245211,</span>
<span class="line">                latitude: 23.10229</span>
<span class="line">            }, {</span>
<span class="line">                longitude: 113.324520,</span>
<span class="line">                latitude: 23.21229</span>
<span class="line">            }],</span>
<span class="line">            color: "#FF0000",</span>
<span class="line">            width: 5,</span>
<span class="line">            arrowLine: true,</span>
<span class="line">        },</span>
<span class="line">        // {</span>
<span class="line">        //     points: [{</span>
<span class="line">        //         longitude: 113.3255211,</span>
<span class="line">        //         latitude: 23.10229</span>
<span class="line">        //     }, {</span>
<span class="line">        //         longitude: 113.325520,</span>
<span class="line">        //         latitude: 23.21229</span>
<span class="line">        //     }],</span>
<span class="line">        //     color: "#0000ff",</span>
<span class="line">        //     width: 5,</span>
<span class="line">        //     arrowLine: true,</span>
<span class="line">        // },</span>
<span class="line">    ],</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>微信文档参数解释如下：</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202503/2194212-20250310114341851-42619484.png" alt="img"></p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202503/2194212-20250310114401741-2019297274.png" alt="img"></p>
<p>polyline 是数组，有一条路线就增加一个 { } **，**对象属性有 points, color, width, arrowLine</p>
<p>points也是一个数组，多个坐标点放在这个数组里，arrowLine 负责箭头显示与否。</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202503/2194212-20250310114620971-1248941100.png" alt="img"></p>
<p>❗❗❗ include-points 也是数组，以上图为例，include-points绑定的数据应该是polyline[0].points 。直接绑定 polyline 没有效果。</p>
<p>现在的效果如下</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202503/2194212-20250310115208116-1264650819.png" alt="img"></p>
<p>白色的就是箭头</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202503/2194212-20250310115255589-1796902163.png" alt="img"></p>
<p>如果要显示多条路线，在polyline里增加新的对象</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">polyline: [</span>
<span class="line">    {</span>
<span class="line">        points: [{</span>
<span class="line">            longitude: 113.3245211,</span>
<span class="line">            latitude: 23.10229</span>
<span class="line">        }, {</span>
<span class="line">            longitude: 113.324520,</span>
<span class="line">            latitude: 23.21229</span>
<span class="line">        }],</span>
<span class="line">        color: "#FF0000",</span>
<span class="line">        width: 5,</span>
<span class="line">        arrowLine: true,</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        points: [{</span>
<span class="line">            longitude: 113.3255211,</span>
<span class="line">            latitude: 23.10229</span>
<span class="line">        }, {</span>
<span class="line">            longitude: 113.325520,</span>
<span class="line">            latitude: 23.21229</span>
<span class="line">        }],</span>
<span class="line">        color: "#0000ff",</span>
<span class="line">        width: 5,</span>
<span class="line">        arrowLine: true,</span>
<span class="line">    },</span>
<span class="line">]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示效果如下（因为两条路径坐标一样，所以路径一样）：</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202503/2194212-20250310115455765-792888199.png" alt="img"></p>
</div></template>


