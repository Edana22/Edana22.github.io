<template><div><h1 id="带头结点的单链表的初始化、插入、删除、查询长度和输出元素" tabindex="-1"><a class="header-anchor" href="#带头结点的单链表的初始化、插入、删除、查询长度和输出元素"><span>带头结点的单链表的初始化、插入、删除、查询长度和输出元素</span></a></h1>
<p>带头结点的单链表的初始化、插入、删除、查询长度和输出元素，源码如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">  1 #include&lt;stdio.h> </span>
<span class="line">  2 #include&lt;math.h></span>
<span class="line">  3 #include&lt;stdlib.h> </span>
<span class="line">  4 #include&lt;malloc.h> </span>
<span class="line">  5 </span>
<span class="line">  6 #define MAXSIZE 10 //定义顺序表最大长度</span>
<span class="line">  7 #define TRUE 1</span>
<span class="line">  8 #define FALSE 0</span>
<span class="line">  9 #define OK 1</span>
<span class="line"> 10 #define ERROR 0</span>
<span class="line"> 11 #define INFEASIBLE -1</span>
<span class="line"> 12 #define LIST_INIT_SIZE 100</span>
<span class="line"> 13 #define LISTINCREMENT 10</span>
<span class="line"> 14 </span>
<span class="line"> 15 typedef int Element;</span>
<span class="line"> 16 </span>
<span class="line"> 17 typedef struct node{</span>
<span class="line"> 18     Element e;</span>
<span class="line"> 19     struct node* next;//这里只是声明了一个名为next的指针，指针本身也占内存空间，里面存放的始终是地址。 struct node* 表示指针的类型是 struct node，即指向的地址里存放的是一个结构体 </span>
<span class="line"> 20 }LNode, *Linklist;</span>
<span class="line"> 21 </span>
<span class="line"> 22 /**</span>
<span class="line"> 23 * 带头结点的单链表进行增删改查 </span>
<span class="line"> 24 * 头结点就可以指代整个链表了 </span>
<span class="line"> 25 */</span>
<span class="line"> 26 </span>
<span class="line"> 27 int main() {</span>
<span class="line"> 28     Linklist initLinklist(Linklist head);</span>
<span class="line"> 29     int getLength(Linklist head);</span>
<span class="line"> 30     Linklist insert(Linklist head, int k, Element e);</span>
<span class="line"> 31     Linklist del(Linklist head, int position);</span>
<span class="line"> 32     int find(Linklist head, int position);</span>
<span class="line"> 33     void output(Linklist head);    </span>
<span class="line"> 34     </span>
<span class="line"> 35     Linklist head;//头结点 </span>
<span class="line"> 36     </span>
<span class="line"> 37     head = initLinklist(head); </span>
<span class="line"> 38     insert(head, 1,1);//只有头结点时，长度是0 ，插入位置从1开始算 </span>
<span class="line"> 39     insert(head, 2,2);</span>
<span class="line"> 40     insert(head, 3,3);</span>
<span class="line"> 41     insert (head,2,999);</span>
<span class="line"> 42     int listLength = getLength(head);</span>
<span class="line"> 43     printf("length is : %d \n",listLength); </span>
<span class="line"> 44     output(head);</span>
<span class="line"> 45     </span>
<span class="line"> 46     find(head,2);</span>
<span class="line"> 47     </span>
<span class="line"> 48     del(head, 2); </span>
<span class="line"> 49     listLength = getLength(head);</span>
<span class="line"> 50     printf("length is : %d \n",listLength);</span>
<span class="line"> 51     output(head);</span>
<span class="line"> 52     </span>
<span class="line"> 53     del(head, 1);</span>
<span class="line"> 54     printf("length is : %d \n",listLength); </span>
<span class="line"> 55     listLength = getLength(head);</span>
<span class="line"> 56     output(head);</span>
<span class="line"> 57     </span>
<span class="line"> 58 }</span>
<span class="line"> 59 </span>
<span class="line"> 60 /**</span>
<span class="line"> 61 * 初始化单链表，建立一个头结点 </span>
<span class="line"> 62 */</span>
<span class="line"> 63 Linklist initLinklist(Linklist head){</span>
<span class="line"> 64     head = (Linklist)malloc(sizeof(LNode));</span>
<span class="line"> 65     head->next = NULL;</span>
<span class="line"> 66     printf("init single list successful! \n"); </span>
<span class="line"> 67     return head;</span>
<span class="line"> 68 }</span>
<span class="line"> 69 </span>
<span class="line"> 70 /**</span>
<span class="line"> 71 * 插入元素 </span>
<span class="line"> 72 */</span>
<span class="line"> 73 Linklist insert(Linklist head, int k, Element e){</span>
<span class="line"> 74     int getLength(Linklist head);</span>
<span class="line"> 75     </span>
<span class="line"> 76     Linklist p = (Linklist)malloc(sizeof(LNode));//申请一个新节点</span>
<span class="line"> 77     Linklist pre = (Linklist)malloc(sizeof(LNode));//申请一个新节点</span>
<span class="line"> 78     int length = getLength(head);</span>
<span class="line"> 79     pre = head;</span>
<span class="line"> 80 </span>
<span class="line"> 81     if(k == length+1){    //在链表末尾添加新节点 </span>
<span class="line"> 82         while(pre->next) {</span>
<span class="line"> 83             pre = pre->next;</span>
<span class="line"> 84         }//循环结束时，pre已经到达链表末尾 </span>
<span class="line"> 85         p->e = e;</span>
<span class="line"> 86         pre->next = p;</span>
<span class="line"> 87         p->next = NULL;</span>
<span class="line"> 88     }else if(k > 0 &amp;&amp; k &lt;= length){//在链表中间添加节点 ，插入位置从1开始算 </span>
<span class="line"> 89         int j = 1;</span>
<span class="line"> 90         while(j &lt; k) {</span>
<span class="line"> 91             pre = pre->next;</span>
<span class="line"> 92             j++;</span>
<span class="line"> 93         }//循环结束时，pre是要插入位置的前驱节点</span>
<span class="line"> 94         p->e = e;</span>
<span class="line"> 95         p->next = pre->next;</span>
<span class="line"> 96         pre->next = p; </span>
<span class="line"> 97     }else{</span>
<span class="line"> 98         printf("插入的位置有误！\n");</span>
<span class="line"> 99     }</span>
<span class="line">100     return head;</span>
<span class="line">101 }</span>
<span class="line">102 </span>
<span class="line">103 /**</span>
<span class="line">104 * 删除指定位置的链表元素  </span>
<span class="line">105 */</span>
<span class="line">106 Linklist del(Linklist head, int position) {</span>
<span class="line">107     int getLength(Linklist head) ;</span>
<span class="line">108     </span>
<span class="line">109     int length = getLength(head);</span>
<span class="line">110     if(position &lt;= 0 || position > length ){</span>
<span class="line">111         printf("删除位置有误！\n");</span>
<span class="line">112     }else{</span>
<span class="line">113         Linklist pre = (Linklist)malloc(sizeof(LNode));</span>
<span class="line">114         Linklist key = (Linklist)malloc(sizeof(LNode));//key是被删除的元素 </span>
<span class="line">115         pre = head;</span>
<span class="line">116         int k = 1;</span>
<span class="line">117         while(k &lt; position){</span>
<span class="line">118             pre = pre->next;</span>
<span class="line">119             k++;</span>
<span class="line">120         }//循环结束时，pre是被删除节点的前驱元素</span>
<span class="line">121         key = pre->next;</span>
<span class="line">122         key->e = pre->next->e; </span>
<span class="line">123         if(position == length) {//被删除的是链表末尾元素 </span>
<span class="line">124             pre->next = NULL;</span>
<span class="line">125         }else{//被删除的是链表中间元素 </span>
<span class="line">126             pre->next = key->next;</span>
<span class="line">127         } </span>
<span class="line">128         printf("删除的位置是%d, 删除位置的元素是%d \n", position, key->e) ;</span>
<span class="line">129         free(key);</span>
<span class="line">130     }</span>
<span class="line">131     return head;</span>
<span class="line">132 }</span>
<span class="line">133 </span>
<span class="line">134 /**</span>
<span class="line">135 * 查询指定位置的链表元素  </span>
<span class="line">136 */</span>
<span class="line">137 int find(Linklist head, int position){</span>
<span class="line">138     int getLength(Linklist head);</span>
<span class="line">139     </span>
<span class="line">140     Linklist pre = (Linklist)malloc(sizeof(LNode));</span>
<span class="line">141     pre = head;</span>
<span class="line">142     int length = getLength(head);</span>
<span class="line">143     int k = 1;</span>
<span class="line">144     if(position &lt;= length){</span>
<span class="line">145         while(k &lt; position)    {</span>
<span class="line">146             pre = pre->next;</span>
<span class="line">147             k++;</span>
<span class="line">148         }//循环结束时，pre是被查询节点的前驱元素</span>
<span class="line">149         printf("------------------------------\n");</span>
<span class="line">150         printf("位置%d的元素内容是%d\n", position,pre->next->e);</span>
<span class="line">151         printf("------------------------------\n");</span>
<span class="line">152     }else{</span>
<span class="line">153         printf("查询位置有误！\n");</span>
<span class="line">154     }</span>
<span class="line">155 }</span>
<span class="line">156 </span>
<span class="line">157 /**</span>
<span class="line">158 * 输出链表元素  </span>
<span class="line">159 */</span>
<span class="line">160 void output(Linklist head){</span>
<span class="line">161     Linklist p = (Linklist)malloc(sizeof(LNode));//申请一个新节点</span>
<span class="line">162     p = head;</span>
<span class="line">163     do{    </span>
<span class="line">164         p = p->next;</span>
<span class="line">165         printf("%5d", p->e);</span>
<span class="line">166     }while(p->next);</span>
<span class="line">167     printf("\n");</span>
<span class="line">168 }</span>
<span class="line">169 </span>
<span class="line">170 /**</span>
<span class="line">171 * 求单链表的长度 </span>
<span class="line">172 * 长度不算头结点 </span>
<span class="line">173 */</span>
<span class="line">174 int getLength(Linklist head){</span>
<span class="line">175     int length = 0;</span>
<span class="line">176     Linklist p = (Linklist)malloc(sizeof(LNode));//申请一个新节点</span>
<span class="line">177     p = head;</span>
<span class="line">178     while(p->next){</span>
<span class="line">179         length++;</span>
<span class="line">180         p = p->next;</span>
<span class="line">181     }</span>
<span class="line">182     return length;</span>
<span class="line">183 }</span>
<span class="line">运行结果如下：</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202103/2194212-20210302104929825-1757224601.png" alt="img"></p>
</div></template>


