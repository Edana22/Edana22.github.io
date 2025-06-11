<template><div><h1 id="二维数组转置代码" tabindex="-1"><a class="header-anchor" href="#二维数组转置代码"><span>二维数组转置代码</span></a></h1>
<h2 id="【代码】" tabindex="-1"><a class="header-anchor" href="#【代码】"><span>【代码】</span></a></h2>
<div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre v-pre><code><span class="line">#include&lt;stdio.h&gt; </span>
<span class="line">#include&lt;math.h&gt;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	//二行三列矩阵，第一行数据为1,2,3；第二行数据为4,5,6 </span>
<span class="line">	int arr[2][3] = {{1,2,3},{4,5,6}};</span>
<span class="line">	int arrTran[3][2]; //转置后的矩阵为 3*2</span>
<span class="line">	int i,j;</span>
<span class="line">	</span>
<span class="line">	//按行输出arr </span>
<span class="line">	printf(&quot;arr is :\n&quot;);</span>
<span class="line">	for(i = 0; i &lt; 2; i++){</span>
<span class="line">		for(j = 0; j &lt; 3; j++){</span>
<span class="line">			printf(&quot;	%d&quot;, arr[i][j]);</span>
<span class="line">		}</span>
<span class="line">		printf(&quot;\n&quot;);</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	//转置就是把i、j调换 </span>
<span class="line">	printf(&quot;arrTran is : \n&quot;);</span>
<span class="line">	for(j = 0; j &lt; 3; j++){</span>
<span class="line">		for(i = 0; i &lt; 2; i++){</span>
<span class="line">			arrTran[j][i] = arr[i][j];</span>
<span class="line">			printf(&quot;	%d&quot;, arrTran[j][i]);</span>
<span class="line">		}</span>
<span class="line">		printf(&quot;\n&quot;);</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【运行结果】" tabindex="-1"><a class="header-anchor" href="#【运行结果】"><span>【运行结果】</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">arr is :</span>
<span class="line">        1       2       3</span>
<span class="line">        4       5       6</span>
<span class="line">arrTran is :</span>
<span class="line">        1       4</span>
<span class="line">        2       5</span>
<span class="line">        3       6</span>
<span class="line"></span>
<span class="line">--------------------------------</span>
<span class="line">Process exited after 0.06195 seconds with return value 0</span>
<span class="line">请按任意键继续. . .</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


