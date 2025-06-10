<template><div><h1 id="扩展运算符-map-filter-在嵌套对象数组中的使用" tabindex="-1"><a class="header-anchor" href="#扩展运算符-map-filter-在嵌套对象数组中的使用"><span>扩展运算符...+map+filter 在嵌套对象数组中的使用</span></a></h1>
<h3 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档：</span></a></h3>
<ul>
<li>使用基于嵌套值的数组过滤对象数组： https://segmentfault.com/q/1010000042989861</li>
<li>js 扩展运算符(...)的用法 ：https://www.cnblogs.com/caihongmin/p/16395573.html</li>
<li>对象的扩展运算符： https://blog.csdn.net/weixin_42265852/article/details/88739525</li>
<li>Vue判断对象中是否存在某个属性： https://blog.csdn.net/gltncx11/article/details/109491728</li>
</ul>
<h4 id="初始数据如下" tabindex="-1"><a class="header-anchor" href="#初始数据如下"><span>初始数据如下：</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">const cards =  [</span>
<span class="line">                {</span>
<span class="line">                    name: "myMember",</span>
<span class="line">                    nameZH: "我的会员卡",</span>
<span class="line">                    cardAuth: 1,</span>
<span class="line">                    value: [</span>
<span class="line">                        {</span>
<span class="line">                            name: "预约",</span>
<span class="line">                            subAuth: "update",</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            name: "查询",</span>
<span class="line">                        }</span>
<span class="line">                    ]</span>
<span class="line">                },</span>
<span class="line">                {</span>
<span class="line">                    name: "oilStationManage",</span>
<span class="line">                    nameZH: "历史记录",</span>
<span class="line">                    cardAuth: 0,</span>
<span class="line">                    value: [</span>
<span class="line">                        {</span>
<span class="line">                            name: "消费记录",</span>
<span class="line">                            subAuth: "read",</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            name: "交易记录",</span>
<span class="line">                            subAuth: "read",</span>
<span class="line">                        },</span>
<span class="line">                    ]</span>
<span class="line">                },</span>
<span class="line">                {</span>
<span class="line">                    name: "workersManage",</span>
<span class="line">                    nameZH: "员工管理",</span>
<span class="line">                    cardAuth: 1,</span>
<span class="line">                    value: [</span>
<span class="line">                        {</span>
<span class="line">                            name: "销售员工",</span>
<span class="line">                            subAuth: "read",</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            name: "技术员工",</span>
<span class="line">                        }</span>
<span class="line">                    ]</span>
<span class="line">                }</span>
<span class="line">            ];</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我想找出 cardAuth==1、有“subAuth”属性的值组成的数组，也就是：</p>
<h4 id="输出结果" tabindex="-1"><a class="header-anchor" href="#输出结果"><span>输出结果</span></a></h4>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">[</span>
<span class="line">    {</span>
<span class="line">        name: "myMember",</span>
<span class="line">        nameZH: "我的会员卡",</span>
<span class="line">        cardAuth: 1,</span>
<span class="line">        value: [</span>
<span class="line">            {</span>
<span class="line">                name: "预约",</span>
<span class="line">                subAuth: "update",</span>
<span class="line">            },</span>
<span class="line">        ]</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        name: "workersManage",</span>
<span class="line">        nameZH: "员工管理",</span>
<span class="line">        cardAuth: 1,</span>
<span class="line">        value: [</span>
<span class="line">            {</span>
<span class="line">                name: "销售员工",</span>
<span class="line">                subAuth: "read",</span>
<span class="line">            },</span>
<span class="line">        ]</span>
<span class="line">    }</span>
<span class="line">]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我在 https://segmentfault.com/q/1010000042989861 找到了一个完全符合我要求的答案，但是代码看上去很复杂，在这里记录一下代码解释：</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227151433154-1293104690.png" alt="img"></p>
<h3 id="先验知识" tabindex="-1"><a class="header-anchor" href="#先验知识"><span>先验知识：</span></a></h3>
<ul>
<li>js 判断对象中是否存在某个属性可以用 in 和 hasOwnProperty</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">var obj = { a:2 }; </span>
<span class="line"></span>
<span class="line">("a" in obj); // true </span>
<span class="line">("b" in obj); // false </span>
<span class="line"></span>
<span class="line">obj.hasOwnProperty( "a" ); // true </span>
<span class="line">obj.hasOwnProperty( "b" ); // false</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><em>扩展运算符 ...</em></li>
</ul>
<p>定义： 扩展运算符(...)是ES6的语法，用于取出参数对象的所有可遍历属性，然后拷贝到当前对象之中。</p>
<h5 id="自定义的属性在拓展运算符后面-则拓展运算符对象内部同名的属性将被覆盖掉。" tabindex="-1"><a class="header-anchor" href="#自定义的属性在拓展运算符后面-则拓展运算符对象内部同名的属性将被覆盖掉。"><span>自定义的属性在拓展运算符后面，则拓展运算符对象内部同名的属性将被覆盖掉。</span></a></h5>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">let person = {name: "Amy", age: 15};</span>
<span class="line">{ ...person, name: "Mike", age: 17}; // {name: 'Mike', age: 17}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>代码解释：</p>
<ol>
<li>过滤出 cardAuth == 1 的值， 用 let authCards = cards.filter(card=&gt;card.cardAuth == 1)</li>
<li>在第一步的基础上，过滤二级对象的数组属性值  authCards.map(e=&gt;{ return {...e,value:e.value.filter(ee=&gt;&quot;subAuth&quot; in ee)} })</li>
</ol>
<p>cards.filter(card=&gt;card.cardAuth == 1) 运行结果：</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227152555845-1319339508.png" alt="img"></p>
<p>authCards.map(e=&gt;{ console.log(e); })</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227153113210-1354939071.png" alt="img"></p>
<p>authCards.map(e=&gt;{ console.log(e.value) })</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227153233064-882753910.png" alt="img"></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">authCards.map(e=>{</span>
<span class="line">   e.value.filter(ee=>{</span>
<span class="line">       if("subAuth" in ee){</span>
<span class="line">           console.log(ee)</span>
<span class="line">       }</span>
<span class="line">   })</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227153420645-1780903353.png" alt="img"></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">authCards.map(e=>{</span>
<span class="line">   e.value.filter(ee=>{</span>
<span class="line">       if("subAuth" in ee){</span>
<span class="line">           console.log({...ee})</span>
<span class="line">       }</span>
<span class="line">   })</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227153645242-865555946.png" alt="img"></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">authCards.map(e=>{</span>
<span class="line">   e.value.filter(ee=>{</span>
<span class="line">       if("subAuth" in ee){</span>
<span class="line">           console.log({...ee,subAuth:666})</span>
<span class="line">       }</span>
<span class="line">   })</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227153745078-1005359944.png" alt="img"></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">authCards.map(e=>{</span>
<span class="line">  return {...e,value:e.value.filter(ee=>"subAuth" in ee)}</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227154059201-216407760.png" alt="img"></p>
</div></template>


