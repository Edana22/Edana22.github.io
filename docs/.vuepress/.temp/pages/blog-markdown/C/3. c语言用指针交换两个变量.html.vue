<template><div><h1 id="c语言用指针交换两个变量" tabindex="-1"><a class="header-anchor" href="#c语言用指针交换两个变量"><span>c语言用指针交换两个变量</span></a></h1>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202011/2194212-20201111112730041-138969857.png" alt="img"></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">#include&lt;stdio.h></span>
<span class="line">#include&lt;math.h></span>
<span class="line"></span>
<span class="line">int  main(){</span>
<span class="line">    void swap(int a,int b);</span>
<span class="line">    void swapPointer(int* p1, int* p2);</span>
<span class="line">    int a = 10, b = 20;</span>
<span class="line">//    swap(a, b);</span>
<span class="line">    swapPointer(&amp;a, &amp;b); // &amp;a 是 int* 类型 </span>
<span class="line">    printf("main: a = %d, b = %d\n",a, b);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//值传递，传递副本值 ,只是交换了a b的副本值，原有值没有交换</span>
<span class="line">void swap(int a, int b){</span>
<span class="line">    int temp;</span>
<span class="line">    temp = a;</span>
<span class="line">    a = b;</span>
<span class="line">    printf("swap: a = %d, b = %d \n",a, b);</span>
<span class="line">    b = temp;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//引用传递，传递原变量地址 </span>
<span class="line">void swapPointer(int* p1, int* p2){</span>
<span class="line">    int temp;</span>
<span class="line">    temp = *p1; //指针 p1 所存地址中的内容，赋给 temp </span>
<span class="line">    *p1 = *p2;</span>
<span class="line">    *p2 = temp;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<p>swap函数是值传递，传递给实参的是形参的副本值，形参本身的值没有变。</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202011/2194212-20201111112926290-74859387.jpg" alt="img"></p>
<p>swapPointer()是引用传递，在调用swapPointer(&amp;a, &amp;b);时，a、b的地址就传给了指针变量p1、p2，*p1=10，<em>p2=20。然后交换</em>p1、*p2的值（*p1 = *p2;是交换两个地址中的值，p1=p2是把p2中的地址值也改成了0x62fe1c）。</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202011/2194212-20201111113000155-873872596.gif" alt="img"></p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202011/2194212-20201111113020376-1726172768.jpg" alt="img"></p>
</div></template>


