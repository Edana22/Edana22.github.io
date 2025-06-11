<template><div><h1 id="用指针交换两个变量" tabindex="-1"><a class="header-anchor" href="#用指针交换两个变量"><span>用指针交换两个变量</span></a></h1>
<h2 id="【代码】" tabindex="-1"><a class="header-anchor" href="#【代码】"><span>【代码】</span></a></h2>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;math.h></span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span>  <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">void</span> <span class="token function">swapPointer</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> p1<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//    swap(a, b);</span></span>
<span class="line">    <span class="token function">swapPointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &amp;a 是 int* 类型 </span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"main: a = %d, b = %d\n"</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//值传递，传递副本值 ,只是交换了a b的副本值，原有值没有交换</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> temp<span class="token punctuation">;</span></span>
<span class="line">    temp <span class="token operator">=</span> a<span class="token punctuation">;</span></span>
<span class="line">    a <span class="token operator">=</span> b<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"swap: a = %d, b = %d \n"</span><span class="token punctuation">,</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    b <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//引用传递，传递原变量地址 </span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">swapPointer</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> p1<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">*</span> p2<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> temp<span class="token punctuation">;</span></span>
<span class="line">    temp <span class="token operator">=</span> <span class="token operator">*</span>p1<span class="token punctuation">;</span> <span class="token comment">//指针 p1 所存地址中的内容，赋给 temp </span></span>
<span class="line">    <span class="token operator">*</span>p1 <span class="token operator">=</span> <span class="token operator">*</span>p2<span class="token punctuation">;</span></span>
<span class="line">    <span class="token operator">*</span>p2 <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【运行结果及解析】" tabindex="-1"><a class="header-anchor" href="#【运行结果及解析】"><span>【运行结果及解析】</span></a></h2>
<p>swap函数是值传递，传递给实参的是形参的副本值，形参本身的值没有变。
<img src="@source/article-bug/c/c_pointer_study_4.png" alt="alt text"></p>
<p>swapPointer()是引用传递，在调用swapPointer(&amp;a, &amp;b);时，a、b的地址就传给了指针变量p1、p2，*p1=10，<em>p2=20。然后交换</em>p1、*p2的值（*p1 = *p2;是交换两个地址中的值，p1=p2是把p2中的地址值也改成了0x62fe1c）。
<img src="@source/article-bug/c/c_pointer_study_5.gif" alt="alt text"></p>
<p><img src="@source/article-bug/c/c_pointer_study_6.png" alt="alt text"></p>
</div></template>


