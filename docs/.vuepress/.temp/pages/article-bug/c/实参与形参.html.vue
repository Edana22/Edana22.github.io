<template><div><h1 id="实参与形参" tabindex="-1"><a class="header-anchor" href="#实参与形参"><span>实参与形参</span></a></h1>
<h2 id="【代码】" tabindex="-1"><a class="header-anchor" href="#【代码】"><span>【代码】</span></a></h2>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;math.h></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/*</span>
<span class="line">形参和实参的功能是作数据传送。</span>
<span class="line">函数调用中发生的数据传送是单向的。</span>
<span class="line">即只能把实参的值传送给形参，而不能把形参的值反向地传送给实参。 </span>
<span class="line">因此在函数调用过程中，形参的值发生改变，而实参中的值不会变化。</span>
<span class="line"></span>
<span class="line">当形参和实参不是指针类型时，在该函数运行时，形参和实参是不同的变量，他们在内存中位于不同的位置，形参将实参的内容复制一份，在该函数运行结束的时候形参被释放，而实参内容不会改变。</span>
<span class="line">如果函数的参数是指针类型变量,在调用该函数的过程中，传给函数的是实参的地址，在函数体内部使用的也是实参的地址，即使用的就是实参本身。所以在函数体内部可以改变实参的值。</span>
<span class="line">*/</span></span>
<span class="line"><span class="token keyword">void</span> <span class="token function">swapByPointer</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>q<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//形参 </span></span>
<span class="line">	<span class="token comment">//p,q内存的地址没有变，但是地址内的内容变了</span></span>
<span class="line">	<span class="token comment">//交换两个数主要目的是交换值不是交换地址 </span></span>
<span class="line">	<span class="token keyword">int</span> temp<span class="token punctuation">;</span></span>
<span class="line">	temp <span class="token operator">=</span> <span class="token operator">*</span>p<span class="token punctuation">;</span></span>
<span class="line">	<span class="token operator">*</span>p <span class="token operator">=</span> <span class="token operator">*</span>q<span class="token punctuation">;</span></span>
<span class="line">	<span class="token operator">*</span>q <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line">	</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token function">swapByPointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//主调函数中的是实参，有确定的值，这样才能把这些值传送给形参 </span></span>
<span class="line">	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"a=%d,  b=%d "</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【运行结果】" tabindex="-1"><a class="header-anchor" href="#【运行结果】"><span>【运行结果】</span></a></h2>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line">a<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span>  b<span class="token operator">=</span><span class="token number">10</span></span>
<span class="line"><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span></span>
<span class="line">Process exited after <span class="token number">0.05185</span> seconds with <span class="token keyword">return</span> value <span class="token number">0</span></span>
<span class="line">请按任意键继续<span class="token punctuation">.</span> <span class="token punctuation">.</span> <span class="token punctuation">.</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


