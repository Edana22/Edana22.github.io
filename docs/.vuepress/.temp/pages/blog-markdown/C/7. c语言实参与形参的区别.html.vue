<template><div><h1 id="c语言实参与形参的区别" tabindex="-1"><a class="header-anchor" href="#c语言实参与形参的区别"><span>c语言实参与形参的区别</span></a></h1>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"> <span class="token number">1</span> #include<span class="token operator">&lt;</span>stdio<span class="token punctuation">.</span>h<span class="token operator">></span></span>
<span class="line"> <span class="token number">2</span> #include<span class="token operator">&lt;</span>math<span class="token punctuation">.</span>h<span class="token operator">></span></span>
<span class="line"> <span class="token number">3</span> </span>
<span class="line"> <span class="token number">4</span> <span class="token comment">/**</span>
<span class="line"> 5 * 形参和实参的功能是作数据传送。</span>
<span class="line"> 6 * 函数调用中发生的数据传送是单向的。即只能把实参的值传送给形参，而不能把形参的值反向地传送给实参。 </span>
<span class="line"> 7 * 因此在函数调用过程中，形参的值发生改变，而实参中的值不会变化。</span>
<span class="line"> 8 * 当形参和实参不是指针类型时，在该函数运行时，形参和实参是不同的变量，他们在内存中位于不同的位置，形参将实参的内容复制一份，在该函数运行结束的时候形参被释放，而实参内容不会改变。</span>
<span class="line"> 9 * 如果函数的参数是指针类型变量,在调用该函数的过程中，传给函数的是实参的地址，在函数体内部使用的也是实参的地址，即使用的就是实参本身。所以在函数体内部可以改变实参的值。</span>
<span class="line">10 */</span></span>
<span class="line"><span class="token number">11</span> </span>
<span class="line"><span class="token number">12</span> <span class="token keyword">void</span> <span class="token function">swapByPointer</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>q<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//形参</span></span>
<span class="line"><span class="token number">13</span>     <span class="token keyword">int</span> temp<span class="token punctuation">;</span></span>
<span class="line"><span class="token number">14</span>     temp <span class="token operator">=</span> <span class="token operator">*</span>p<span class="token punctuation">;</span></span>
<span class="line"><span class="token number">15</span>     <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token operator">*</span>q<span class="token punctuation">;</span></span>
<span class="line"><span class="token number">16</span>     <span class="token operator">*</span>q <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line"><span class="token number">17</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token number">18</span> </span>
<span class="line"><span class="token number">19</span> <span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token number">20</span>     <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token number">21</span>     <span class="token function">swapByPointer</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span><span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//主调函数中的是实参，有确定的值，把值传给形参 </span></span>
<span class="line"><span class="token number">22</span>     <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"a=%d,  b=%d "</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token number">23</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


