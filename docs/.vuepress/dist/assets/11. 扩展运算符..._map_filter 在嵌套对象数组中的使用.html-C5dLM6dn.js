import{_ as n,c as a,b as e,o as i}from"./app-DyBO3kfI.js";const l={};function d(c,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="扩展运算符-map-filter-在嵌套对象数组中的使用" tabindex="-1"><a class="header-anchor" href="#扩展运算符-map-filter-在嵌套对象数组中的使用"><span>扩展运算符...+map+filter 在嵌套对象数组中的使用</span></a></h1><h3 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档：</span></a></h3><ul><li>使用基于嵌套值的数组过滤对象数组： https://segmentfault.com/q/1010000042989861</li><li>js 扩展运算符(...)的用法 ：https://www.cnblogs.com/caihongmin/p/16395573.html</li><li>对象的扩展运算符： https://blog.csdn.net/weixin_42265852/article/details/88739525</li><li>Vue判断对象中是否存在某个属性： https://blog.csdn.net/gltncx11/article/details/109491728</li></ul><h4 id="初始数据如下" tabindex="-1"><a class="header-anchor" href="#初始数据如下"><span>初始数据如下：</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const cards =  [</span>
<span class="line">                {</span>
<span class="line">                    name: &quot;myMember&quot;,</span>
<span class="line">                    nameZH: &quot;我的会员卡&quot;,</span>
<span class="line">                    cardAuth: 1,</span>
<span class="line">                    value: [</span>
<span class="line">                        {</span>
<span class="line">                            name: &quot;预约&quot;,</span>
<span class="line">                            subAuth: &quot;update&quot;,</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            name: &quot;查询&quot;,</span>
<span class="line">                        }</span>
<span class="line">                    ]</span>
<span class="line">                },</span>
<span class="line">                {</span>
<span class="line">                    name: &quot;oilStationManage&quot;,</span>
<span class="line">                    nameZH: &quot;历史记录&quot;,</span>
<span class="line">                    cardAuth: 0,</span>
<span class="line">                    value: [</span>
<span class="line">                        {</span>
<span class="line">                            name: &quot;消费记录&quot;,</span>
<span class="line">                            subAuth: &quot;read&quot;,</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            name: &quot;交易记录&quot;,</span>
<span class="line">                            subAuth: &quot;read&quot;,</span>
<span class="line">                        },</span>
<span class="line">                    ]</span>
<span class="line">                },</span>
<span class="line">                {</span>
<span class="line">                    name: &quot;workersManage&quot;,</span>
<span class="line">                    nameZH: &quot;员工管理&quot;,</span>
<span class="line">                    cardAuth: 1,</span>
<span class="line">                    value: [</span>
<span class="line">                        {</span>
<span class="line">                            name: &quot;销售员工&quot;,</span>
<span class="line">                            subAuth: &quot;read&quot;,</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            name: &quot;技术员工&quot;,</span>
<span class="line">                        }</span>
<span class="line">                    ]</span>
<span class="line">                }</span>
<span class="line">            ];</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我想找出 cardAuth==1、有“subAuth”属性的值组成的数组，也就是：</p><h4 id="输出结果" tabindex="-1"><a class="header-anchor" href="#输出结果"><span>输出结果</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[</span>
<span class="line">    {</span>
<span class="line">        name: &quot;myMember&quot;,</span>
<span class="line">        nameZH: &quot;我的会员卡&quot;,</span>
<span class="line">        cardAuth: 1,</span>
<span class="line">        value: [</span>
<span class="line">            {</span>
<span class="line">                name: &quot;预约&quot;,</span>
<span class="line">                subAuth: &quot;update&quot;,</span>
<span class="line">            },</span>
<span class="line">        ]</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        name: &quot;workersManage&quot;,</span>
<span class="line">        nameZH: &quot;员工管理&quot;,</span>
<span class="line">        cardAuth: 1,</span>
<span class="line">        value: [</span>
<span class="line">            {</span>
<span class="line">                name: &quot;销售员工&quot;,</span>
<span class="line">                subAuth: &quot;read&quot;,</span>
<span class="line">            },</span>
<span class="line">        ]</span>
<span class="line">    }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我在 https://segmentfault.com/q/1010000042989861 找到了一个完全符合我要求的答案，但是代码看上去很复杂，在这里记录一下代码解释：</p><p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227151433154-1293104690.png" alt="img"></p><h3 id="先验知识" tabindex="-1"><a class="header-anchor" href="#先验知识"><span>先验知识：</span></a></h3><ul><li>js 判断对象中是否存在某个属性可以用 in 和 hasOwnProperty</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">var obj = { a:2 }; </span>
<span class="line"></span>
<span class="line">(&quot;a&quot; in obj); // true </span>
<span class="line">(&quot;b&quot; in obj); // false </span>
<span class="line"></span>
<span class="line">obj.hasOwnProperty( &quot;a&quot; ); // true </span>
<span class="line">obj.hasOwnProperty( &quot;b&quot; ); // false</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><em>扩展运算符 ...</em></li></ul><p>定义： 扩展运算符(...)是ES6的语法，用于取出参数对象的所有可遍历属性，然后拷贝到当前对象之中。</p><h5 id="自定义的属性在拓展运算符后面-则拓展运算符对象内部同名的属性将被覆盖掉。" tabindex="-1"><a class="header-anchor" href="#自定义的属性在拓展运算符后面-则拓展运算符对象内部同名的属性将被覆盖掉。"><span>自定义的属性在拓展运算符后面，则拓展运算符对象内部同名的属性将被覆盖掉。</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">let person = {name: &quot;Amy&quot;, age: 15};</span>
<span class="line">{ ...person, name: &quot;Mike&quot;, age: 17}; // {name: &#39;Mike&#39;, age: 17}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>代码解释：</p><ol><li>过滤出 cardAuth == 1 的值， 用 let authCards = cards.filter(card=&gt;card.cardAuth == 1)</li><li>在第一步的基础上，过滤二级对象的数组属性值 authCards.map(e=&gt;{ return {...e,value:e.value.filter(ee=&gt;&quot;subAuth&quot; in ee)} })</li></ol><p>cards.filter(card=&gt;card.cardAuth == 1) 运行结果：</p><p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227152555845-1319339508.png" alt="img"></p><p>authCards.map(e=&gt;{ console.log(e); })</p><p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227153113210-1354939071.png" alt="img"></p><p>authCards.map(e=&gt;{ console.log(e.value) })</p><p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227153233064-882753910.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">authCards.map(e=&gt;{</span>
<span class="line">   e.value.filter(ee=&gt;{</span>
<span class="line">       if(&quot;subAuth&quot; in ee){</span>
<span class="line">           console.log(ee)</span>
<span class="line">       }</span>
<span class="line">   })</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227153420645-1780903353.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">authCards.map(e=&gt;{</span>
<span class="line">   e.value.filter(ee=&gt;{</span>
<span class="line">       if(&quot;subAuth&quot; in ee){</span>
<span class="line">           console.log({...ee})</span>
<span class="line">       }</span>
<span class="line">   })</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227153645242-865555946.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">authCards.map(e=&gt;{</span>
<span class="line">   e.value.filter(ee=&gt;{</span>
<span class="line">       if(&quot;subAuth&quot; in ee){</span>
<span class="line">           console.log({...ee,subAuth:666})</span>
<span class="line">       }</span>
<span class="line">   })</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227153745078-1005359944.png" alt="img"></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">authCards.map(e=&gt;{</span>
<span class="line">  return {...e,value:e.value.filter(ee=&gt;&quot;subAuth&quot; in ee)}</span>
<span class="line">})</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2024.cnblogs.com/blog/2194212/202402/2194212-20240227154059201-216407760.png" alt="img"></p>`,33)]))}const t=n(l,[["render",d]]),r=JSON.parse('{"path":"/article-web/js/11.%20%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6..._map_filter%20%E5%9C%A8%E5%B5%8C%E5%A5%97%E5%AF%B9%E8%B1%A1%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"扩展运算符...+map+filter 在嵌套对象数组中的使用","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"参考文档：","slug":"参考文档","link":"#参考文档","children":[]},{"level":3,"title":"先验知识：","slug":"先验知识","link":"#先验知识","children":[]}],"git":{"updatedTime":1749527809000,"contributors":[{"name":"twoflowers","username":"","email":"1292548615@qq.com","commits":1}],"changelog":[{"hash":"f3b962e68f6ffcb84ea2e07a3893611af691f7e8","time":1749527809000,"email":"1292548615@qq.com","author":"twoflowers","message":"初步完成navbar和sidebar的设置"}]},"filePathRelative":"article-web/js/11. 扩展运算符...+map+filter 在嵌套对象数组中的使用.md"}');export{t as comp,r as data};
