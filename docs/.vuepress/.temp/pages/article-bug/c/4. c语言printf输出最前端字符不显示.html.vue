<template><div><h1 id="c语言printf输出最前端字符不显示" tabindex="-1"><a class="header-anchor" href="#c语言printf输出最前端字符不显示"><span>c语言printf输出最前端字符不显示</span></a></h1>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202103/2194212-20210302093105376-1835270092.png" alt="img"></p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202103/2194212-20210302092905881-1052503763.png" alt="img"></p>
<p>原因：语法错误，和其它语言语法混用。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">printf("链表长度 : %d \n",length); </span>
<span class="line">printf("length is : %d \n",length); </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>才是正确语法。</p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202103/2194212-20210302093004405-1595227071.png" alt="img"></p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202103/2194212-20210302093029864-19666658.png" alt="img"></p>
</div></template>


