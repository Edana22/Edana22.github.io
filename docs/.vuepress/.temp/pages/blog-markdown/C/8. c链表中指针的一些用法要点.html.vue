<template><div><h1 id="c链表中指针的一些用法要点" tabindex="-1"><a class="header-anchor" href="#c链表中指针的一些用法要点"><span>c链表中指针的一些用法要点</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">/* 结构体不能含有同类型的结构，但是可以含有指向同类型结构的指针。这样的定义是定义一个链表的基础。 */1 typedef int Element;</span>
<span class="line">2 </span>
<span class="line">3 typedef struct node{</span>
<span class="line">4     Element e;</span>
<span class="line">5     struct node* next;//这里只是声明了一个名为next的指针，指针本身也占内存空间，里面存放的始终是地址。 struct node* 表示指针的类型是 struct node，即指向的地址里存放的是一个结构体 </span>
<span class="line">6 }LNode, *Linklist;　　//LNode等价于struct node; *LinkList 等价于 struct node* </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>等号 = 左右 的 p 和 p-&gt;next 意义不同，要注意甄别；</p>
</li>
<li>
<p>pre 单独出现的时候代表一个节点 ，如head，就代表head节点；</p>
</li>
<li>
<p>pre在 = 左边</p>
<p>出现时</p>
<p>代表一个节点</p>
<p>，</p>
<p>在= 右边</p>
<p>出现时</p>
<p>代表节点pre的地址；</p>
<ul>
<li>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">　　p = head; //节点p指向节点head的地址</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>p-&gt;next 在= 左边</p>
<p>出现时 节点p的</p>
<p>指针域</p>
<p>；</p>
<p>在 = 右边</p>
<p>出现时代表节点 p 的下一个节点地址（即</p>
<p>下一节点数据域的地址</p>
<p>）；</p>
<ul>
<li>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">　　p->next = pre->next; //p 的指针域指向原先 pre 节点的下一个节点地址</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">　　pre->next = p; //pre的指针域指向节点 p 的地址</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>单链表中申请的节点 p 不能使用&quot;p++&quot;操作。p++本身不会出现语法问题，但是并不会&quot;从指向p变成指向p的下一个节点&quot; ， 而是&quot;从指向p的数据域地址变成指向p的指针域地址&quot;</p>
</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line"> 1 /**</span>
<span class="line"> 2 * 插入元素 </span>
<span class="line"> 3 */</span>
<span class="line"> 4 Linklist insert(Linklist head, int k, Element e){</span>
<span class="line"> 5     int getLength(Linklist head);</span>
<span class="line"> 6     </span>
<span class="line"> 7     Linklist p = (Linklist)malloc(sizeof(LNode));//申请一个新节点</span>
<span class="line"> 8     Linklist pre = (Linklist)malloc(sizeof(LNode));//申请一个新节点</span>
<span class="line"> 9     int length = getLength(head);</span>
<span class="line">10     pre = head;</span>
<span class="line">11 </span>
<span class="line">12     if(k == length+1){    //在链表末尾添加新节点 </span>
<span class="line">13         while(pre->next) {</span>
<span class="line">14             pre = pre->next; //单链表中申请的节点 p 不能使用"p++"操作。p++本身不会出现语法问题，但是并不会"从指向p变成指向p的下一个节点" ， 而是"从指向p的数据域地址变成指向p的指针域地址" </span>
<span class="line">15         }//循环结束时，pre已经到达链表末尾 </span>
<span class="line">16         p->e = e;</span>
<span class="line">17         pre->next = p;</span>
<span class="line">18         p->next = NULL;</span>
<span class="line">19     }else if(k > 0 &amp;&amp; k &lt;= length){//在链表中间添加节点 ，插入位置从1开始算 </span>
<span class="line">20         int j = 1;</span>
<span class="line">21         while(j &lt; k) {</span>
<span class="line">22             pre = pre->next;//单链表中申请的节点 p 不能使用"p++"操作。p++本身不会出现语法问题，但是并不会"从指向p变成指向p的下一个节点" ， 而是"从指向p的数据域地址变成指向p的指针域地址" </span>
<span class="line">23             j++;</span>
<span class="line">24         }//循环结束时，pre是要插入位置的前驱节点</span>
<span class="line">25         p->e = e;</span>
<span class="line">26         p->next = pre->next; // p 的指针域指向原先 pre 节点的下一个节点的地址 </span>
<span class="line">27         pre->next = p;  // pre的指针域指向节点 p 的地址</span>
<span class="line">28     }else{</span>
<span class="line">29         printf("插入的位置有误！\n");</span>
<span class="line">30     }</span>
<span class="line">31     return head;</span>
<span class="line">32 }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


