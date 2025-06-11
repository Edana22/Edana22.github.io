<template><div><h1 id="c指针学习笔记" tabindex="-1"><a class="header-anchor" href="#c指针学习笔记"><span>C指针学习笔记</span></a></h1>
<h2 id="【代码】" tabindex="-1"><a class="header-anchor" href="#【代码】"><span>【代码】</span></a></h2>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span> </span></span>
<span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;math.h></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/**</span>
<span class="line">* 指针变量自身也占用内存，且所有指针占用内存的大小是相同的，</span>
<span class="line">* 而且要能表示内存中最大地址，32位机占4个字节，64位机占8个字节。 </span>
<span class="line">*/</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">/* 	在定义指针变量时，*的作用只有点明这个变量是指针变量； </span>
<span class="line">		指针变量中存放的是地址，如0x62fdfc; </span>
<span class="line">	   在使用过程中，*代表取内容，取出该地址中存放的内容；</span>
<span class="line">	   int a=10, *p; p=&amp;a; //假设a的地址是 0x62fdfc</span>
<span class="line">	   &amp;是取出存放a变量的地址0x62fdfc，p是(int*)型的指针变量 ，</span>
<span class="line">	   &amp;a也是(int*)型，所以可以互相赋值。</span>
<span class="line">	   *p是取出 0x62fdfc中存放的值，int型，10.</span>
<span class="line">	   */</span></span>
<span class="line">	<span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> b<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> s<span class="token punctuation">,</span> t<span class="token punctuation">,</span> <span class="token operator">*</span>pa<span class="token punctuation">,</span> <span class="token operator">*</span>pb<span class="token punctuation">,</span><span class="token operator">*</span>pc<span class="token punctuation">,</span><span class="token operator">*</span>pd<span class="token punctuation">;</span></span>
<span class="line">	pa <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span></span>
<span class="line">	pb<span class="token operator">=</span>pa<span class="token punctuation">;</span></span>
<span class="line">	s<span class="token operator">=</span><span class="token operator">*</span>pb<span class="token punctuation">;</span></span>
<span class="line">	pc<span class="token operator">=</span><span class="token operator">&amp;</span>b<span class="token punctuation">;</span></span>
<span class="line">	<span class="token comment">/*	指针是直接对相应地址中存的内容直接操作的 ； </span>
<span class="line">		*pc=*pb; 改变的不是pc中存放的地址值，而是pc对应的地址值中的内容，</span>
<span class="line">		因为 *pc==0x62fdfc中存放的值==a值 </span>
<span class="line">		在pc和pb指针都有一个固定的地址后，才可以用这种赋值方式。 </span>
<span class="line">	*/</span></span>
<span class="line">	<span class="token operator">*</span>pc <span class="token operator">=</span> <span class="token operator">*</span>pb<span class="token punctuation">;</span></span>
<span class="line">	t<span class="token operator">=</span>a<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//	*pb = &amp;a;//error:int* to int</span></span>
<span class="line"><span class="token comment">//	pc=*pa;//error:int to int*</span></span>
<span class="line"><span class="token comment">//	t=pc;//error:int* to int</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">int</span> ss<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span>  <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">int</span> <span class="token operator">*</span>ps<span class="token punctuation">;</span></span>
<span class="line">	ps<span class="token operator">=</span>ss<span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">		ps<span class="token operator">=</span>ps<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【调试过程】" tabindex="-1"><a class="header-anchor" href="#【调试过程】"><span>【调试过程】</span></a></h2>
<ol>
<li><strong>定义</strong>指针变量时，<code v-pre>*</code> 只是指明这个变量是指针变量；</li>
<li><strong>使用</strong>指针变量时，<code v-pre>*</code> 代表【<strong>取内容</strong>】。</li>
<li><code v-pre>&amp;</code> 代表【取地址】。</li>
</ol>
<p>指针变量就是存放内存地址的变量。c语言中使用 <code v-pre>int *pa;</code> 的方式来定义指针。</p>
<p>点击面板左侧【调试】，右键，把这几个变量都添加查看，得到下图。</p>
<p><img src="@source/article-bug/c/c_pointer_study_1.png" alt="img"></p>
<p>下面讲解析具体语句作用。</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>b<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token operator">*</span>pa<span class="token punctuation">,</span> <span class="token operator">*</span>pb<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>定义了int型变量a、b 和指针变量pa、pb。<em><em>pa和pb的类型是(int</em>)</em>*。</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line">pa<span class="token operator">=</span><span class="token operator">&amp;</span>a<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>pa 类型是<code v-pre>(int*)</code>， &amp;a类型也是<code v-pre>(int*)</code>，现在 <code v-pre>*pa</code>  的值就等于<code v-pre>a</code>的值。
<code v-pre>pa = (int *)0x62fde8</code> 表示 pa这个指针变量中存放的是<strong>a的地址:0x62fde8</strong>。</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line">pb<span class="token operator">=</span>pa<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>把指针pb的内容换成pa的值，所以现在pb和pa指向的地址相同，都是0x62fde8。
<code v-pre>pb = (int *)0x62fde8</code> 表示指针pb中存放的内容也改成了地址<strong>0x62fde8</strong>。</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line">s<span class="token operator">=</span><span class="token operator">*</span>pb<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>*</code> 代表**【取内容】**，pb的类型是<code v-pre>(int*)</code>，<code v-pre>*pb</code> 就是int型，<code v-pre>*pb</code>取出pb所存地址中的值，即地址 <strong>0x62fde8</strong> 中的 a值10，所以 <code v-pre>s=10</code>。</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line">pc<span class="token operator">=</span><span class="token operator">&amp;</span>b<span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>把b的地址值存入指针pc，<code v-pre>pc = (int *)0x62fde4</code>也就是说b的地址是<strong>0x62fde4</strong>。</p>
<p>b是20，<code v-pre>*pc</code> 也是20。</p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line"><span class="token operator">*</span>pc <span class="token operator">=</span> <span class="token operator">*</span>pb<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>pb 指向a，所以<code v-pre>*pb</code> 是a的地址所在的值10；</p>
<p>pc指向b，所以<code v-pre>*pc</code>是b的地址所在的值，原来是20，赋值后变成10。</p>
<p>⚠ 两个指针直接把地址中的值交换，各自保存的地址值不变。<strong>pb指向的地址仍是0x62fde8，pc指向的地址仍是0x62fde4，知识这两个地址中的数值变了。</strong>（这种交换只能在两个指针都有具体数值后才能进行）。
<img src="@source/article-bug/c/c_pointer_study_2.png" alt="alt text"></p>
<div class="language-c line-numbers-mode" data-highlighter="prismjs" data-ext="c"><pre v-pre><code><span class="line">ps<span class="token operator">=</span>ps<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在数组的循环中 <code v-pre>ps=ps+1; </code> 代表指针向后移动一个元素。
<img src="@source/article-bug/c/c_pointer_study_3.gif" alt="alt text"></p>
</div></template>


