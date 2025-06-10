<template><div><h1 id="c语言指针学习笔记" tabindex="-1"><a class="header-anchor" href="#c语言指针学习笔记"><span>c语言指针学习笔记</span></a></h1>
<p>指针变量就是存放内存地址的变量。c语言中使用 int *pa; 的方式来定义指针。
<img src="https://img2020.cnblogs.com/blog/2194212/202011/2194212-20201111110949340-40867330.png" alt="img"></p>
<p>`
main()</p>
<div class="language-makefile line-numbers-mode" data-highlighter="prismjs" data-ext="makefile"><pre v-pre><code><span class="line">int a <span class="token operator">=</span> 10, b<span class="token operator">=</span>20, s, t, *pa, *pb,*pc,*pd<span class="token punctuation">;</span></span>
<span class="line">pa <span class="token operator">=</span> &amp;a<span class="token punctuation">;</span></span>
<span class="line">pb<span class="token operator">=</span>pa<span class="token punctuation">;</span></span>
<span class="line">s<span class="token operator">=</span>*pb<span class="token punctuation">;</span></span>
<span class="line">pc<span class="token operator">=</span>&amp;b<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">*pc <span class="token operator">=</span> *pb<span class="token punctuation">;</span></span>
<span class="line">t<span class="token operator">=</span>a<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">int ss[10]  <span class="token operator">=</span> <span class="token punctuation">{</span>0,1,2,3,4,5,6,7,8,9<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">int *ps<span class="token punctuation">;</span></span>
<span class="line">ps<span class="token operator">=</span>ss<span class="token punctuation">;</span></span>
<span class="line">for<span class="token punctuation">(</span>int i<span class="token operator">=</span>0<span class="token punctuation">;</span>i&lt;10<span class="token punctuation">;</span>i++<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	ps<span class="token operator">=</span>ps+1<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>`</p>
<ol>
<li>定义指针变量时，* 只是指明这个变量是指针变量；</li>
<li>使用指针变量时，* 代表【取内容】。</li>
<li>&amp;代表【取地址】。
————————————————————————————————————————————————————————
具体语句解析：</li>
</ol>
<p><code v-pre>int a=10,b=20, *pa, *pb;</code> 定义了int型变量a、b 和指针变量pa、pb，pa和pb的类型是(int*)。</p>
<p><code v-pre>pa=&amp;a;</code> 在使用中 pa 类型就是(int*)， &amp;a类型也是(int*)。 pa这个指针变量中存放的是a的地址:0x62fde8.
<img src="https://img2020.cnblogs.com/blog/2194212/202011/2194212-20201111105325866-798853915.png" alt="img"></p>
<p><code v-pre>pb=pa;</code>指针pb中存放的内容也改成了地址0x62fde8。
<img src="https://img2020.cnblogs.com/blog/2194212/202011/2194212-20201111105436657-262988610.png" alt="img"></p>
<p><code v-pre>s=*pb;</code>使用中 * 代表【取内容】，*pb 是int型，就是取出pb所存地址中的值，即地址 0x62fde8 中的a值10。
<img src="https://img2020.cnblogs.com/blog/2194212/202011/2194212-20201111105525260-2143460048.png" alt="img"></p>
<p><code v-pre>pc=&amp;b; *pc = *pb;</code>
pc=&amp;b；给指针pc一个地址值，*pb就是取出地址0x62fde8中的值10，*pc就是取出地址0x62fde4中的值20. *pc = *pb; 直接把地址中的值交换，各自保存的地址值不变（这种交换只能在两个指针都有具体数值后才能进行）。
<img src="https://img2020.cnblogs.com/blog/2194212/202011/2194212-20201111105623140-2110389288.png" alt="img">
<img src="https://img2020.cnblogs.com/blog/2194212/202011/2194212-20201111105728703-425654540.png" alt="img"></p>
<p><code v-pre>ps=ps+1;</code>在数组的循环中，ps=ps+1; 代表指针向后移动一个元素。
<img src="https://img2020.cnblogs.com/blog/2194212/202011/2194212-20201111110054005-1417349357.gif" alt="img"></p>
</div></template>


