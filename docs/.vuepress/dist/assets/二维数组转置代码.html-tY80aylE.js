import{_ as s,c as a,b as i,o as e}from"./app-DyBO3kfI.js";const l={};function r(t,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="二维数组转置代码" tabindex="-1"><a class="header-anchor" href="#二维数组转置代码"><span>二维数组转置代码</span></a></h1><h2 id="【代码】" tabindex="-1"><a class="header-anchor" href="#【代码】"><span>【代码】</span></a></h2><div class="language-C line-numbers-mode" data-highlighter="prismjs" data-ext="C"><pre><code><span class="line">#include&lt;stdio.h&gt; </span>
<span class="line">#include&lt;math.h&gt;</span>
<span class="line"></span>
<span class="line">int main(){</span>
<span class="line">	//二行三列矩阵，第一行数据为1,2,3；第二行数据为4,5,6 </span>
<span class="line">	int arr[2][3] = {{1,2,3},{4,5,6}};</span>
<span class="line">	int arrTran[3][2]; //转置后的矩阵为 3*2</span>
<span class="line">	int i,j;</span>
<span class="line">	</span>
<span class="line">	//按行输出arr </span>
<span class="line">	printf(&quot;arr is :\\n&quot;);</span>
<span class="line">	for(i = 0; i &lt; 2; i++){</span>
<span class="line">		for(j = 0; j &lt; 3; j++){</span>
<span class="line">			printf(&quot;	%d&quot;, arr[i][j]);</span>
<span class="line">		}</span>
<span class="line">		printf(&quot;\\n&quot;);</span>
<span class="line">	}</span>
<span class="line">	</span>
<span class="line">	//转置就是把i、j调换 </span>
<span class="line">	printf(&quot;arrTran is : \\n&quot;);</span>
<span class="line">	for(j = 0; j &lt; 3; j++){</span>
<span class="line">		for(i = 0; i &lt; 2; i++){</span>
<span class="line">			arrTran[j][i] = arr[i][j];</span>
<span class="line">			printf(&quot;	%d&quot;, arrTran[j][i]);</span>
<span class="line">		}</span>
<span class="line">		printf(&quot;\\n&quot;);</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【运行结果】" tabindex="-1"><a class="header-anchor" href="#【运行结果】"><span>【运行结果】</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">arr is :</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const d=s(l,[["render",r]]),p=JSON.parse('{"path":"/article-bug/c/%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84%E8%BD%AC%E7%BD%AE%E4%BB%A3%E7%A0%81.html","title":"二维数组转置代码","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"【代码】","slug":"【代码】","link":"#【代码】","children":[]},{"level":2,"title":"【运行结果】","slug":"【运行结果】","link":"#【运行结果】","children":[]}],"git":{"updatedTime":1749634927000,"contributors":[{"name":"twoflowers","username":"","email":"1292548615@qq.com","commits":1}],"changelog":[{"hash":"a7ee8813216eb799ca1707cb7c7c5142cb71b5da","time":1749634927000,"email":"1292548615@qq.com","author":"twoflowers","message":"把c语言部分整理完成"}]},"filePathRelative":"article-bug/c/二维数组转置代码.md"}');export{d as comp,p as data};
