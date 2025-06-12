import{_ as n,c as a,b as e,o as l}from"./app-CfuPOgCv.js";const i={};function t(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="js-使用localstorage本地存储用户名、密码" tabindex="-1"><a class="header-anchor" href="#js-使用localstorage本地存储用户名、密码"><span>js 使用localStorage本地存储用户名、密码</span></a></h1><p>效果图如下：</p><p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211202153725043-1348661792.gif" alt="img"></p><p>代码如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">    &lt;head&gt;</span>
<span class="line">        &lt;meta charset=&quot;utf-8&quot;&gt;</span>
<span class="line">        &lt;title&gt;&lt;/title&gt;</span>
<span class="line">    &lt;/head&gt;</span>
<span class="line">    &lt;style&gt;</span>
<span class="line">        #check{</span>
<span class="line">            width: 15px;</span>
<span class="line">            height: 15px;</span>
<span class="line">        }</span>
<span class="line">    &lt;/style&gt;</span>
<span class="line">    &lt;body&gt;</span>
<span class="line">        &lt;span&gt;用户名：&lt;/span&gt;</span>
<span class="line">        &lt;input id=&quot;uname&quot; /&gt;</span>
<span class="line">        &lt;span&gt;密码&lt;/span&gt;</span>
<span class="line">        &lt;input type=&quot;password&quot; id=&quot;psw&quot; /&gt;</span>
<span class="line">        &lt;br&gt;</span>
<span class="line">        &lt;br&gt;</span>
<span class="line">        &lt;input type=&quot;checkbox&quot; id=&quot;check&quot; /&gt;</span>
<span class="line">        &lt;span&gt;存储用户名、密码到本地&lt;/span&gt;</span>
<span class="line">    &lt;/body&gt;</span>
<span class="line">    &lt;script&gt;</span>
<span class="line">        var uname = document.querySelector(&quot;#uname&quot;);</span>
<span class="line">        var psw = document.querySelector(&quot;#psw&quot;);</span>
<span class="line">        var check = document.querySelector(&quot;#check&quot;);</span>
<span class="line">        </span>
<span class="line">        uname.addEventListener(&quot;change&quot;,()=&gt;{</span>
<span class="line">            if(!localStorage.getItem(uname.value)){</span>
<span class="line">                check.checked = false;</span>
<span class="line">            }</span>
<span class="line">        })</span>
<span class="line">        check.addEventListener(&quot;change&quot;,()=&gt;{</span>
<span class="line">            if(check.checked){</span>
<span class="line">                //选中，记住账号名和密码</span>
<span class="line">                localStorage.setItem(uname.value, psw.value);</span>
<span class="line">                console.log(localStorage.getItem(uname.value));</span>
<span class="line">            }</span>
<span class="line">        })</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const d=n(i,[["render",t]]),r=JSON.parse('{"path":"/article-web/js/7.%20js%20%E4%BD%BF%E7%94%A8localStorage%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8%E7%94%A8%E6%88%B7%E5%90%8D%E3%80%81%E5%AF%86%E7%A0%81.html","title":"js 使用localStorage本地存储用户名、密码","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1749527809000,"contributors":[{"name":"twoflowers","username":"twoflowers","email":"1292548615@qq.com","commits":1,"url":"https://github.com/twoflowers"}],"changelog":[{"hash":"f3b962e68f6ffcb84ea2e07a3893611af691f7e8","time":1749527809000,"email":"1292548615@qq.com","author":"twoflowers","message":"初步完成navbar和sidebar的设置"}]},"filePathRelative":"article-web/js/7. js 使用localStorage本地存储用户名、密码.md"}');export{d as comp,r as data};
