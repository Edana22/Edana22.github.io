import{_ as s,c as a,b as e,o as l}from"./app-CfuPOgCv.js";const i={};function c(r,n){return l(),a("div",null,n[0]||(n[0]=[e(`<h1 id="for-foreach-forin-forof用法和区别" tabindex="-1"><a class="header-anchor" href="#for-foreach-forin-forof用法和区别"><span>for,foreach,forin,forof用法和区别</span></a></h1><p>demo.js</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">var arrayList = [{ id: 1, name: &quot;zs&quot;, scope: 56 },</span>
<span class="line">{ id: 2, name: &quot;ls&quot;, scope: 86 },</span>
<span class="line">{ id: 3, name: &quot;wu&quot;, scope: 22 },</span>
<span class="line">{ id: 4, name: &quot;cl&quot;, scope: 42 },</span>
<span class="line">{ id: 5, name: &quot;qb&quot;, scope: 64 },</span>
<span class="line">];</span>
<span class="line"></span>
<span class="line">/* </span>
<span class="line">    普通for循环</span>
<span class="line">    for循环中可以使用return、break等来中断循环</span>
<span class="line">*/</span>
<span class="line">function forLoop() {</span>
<span class="line">    for (let index = 0; index &lt; arrayList.length; index++) {</span>
<span class="line">        const element = arrayList[index];</span>
<span class="line">        console.log(&quot;for-index:&quot;, index);</span>
<span class="line">        console.log(&quot;for-element:&quot;, element);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/* </span>
<span class="line">    for-each</span>
<span class="line">    arr.forEach(callback(currentValue [, index [, array]])[, thisArg])</span>
<span class="line">    不能使用return、break等中断循环，不改变原数组</span>
<span class="line">    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach</span>
<span class="line">*/</span>
<span class="line">function forEachLoop() {</span>
<span class="line">    arrayList.forEach((element, index) =&gt; {</span>
<span class="line">        console.log(&#39;for-each-index:&#39;, index);</span>
<span class="line">        console.log(&#39;for-each-element:&#39;, element);</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/* </span>
<span class="line">    for-in</span>
<span class="line">    for ... in是为遍历对象属性而构建的，循环遍历的值都是数据结构的键值(key,value),不建议与数组一起使用</span>
<span class="line">    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in</span>
<span class="line">*/</span>
<span class="line">function forInLoop() {</span>
<span class="line">    var obj = { id: 5, name: &quot;qb&quot;, scope: 64 };</span>
<span class="line">    for (const key in obj) {</span>
<span class="line">        console.log(&#39;for-in-key:&#39;, key);// obj = {key:value}</span>
<span class="line">        // 读取value</span>
<span class="line">        if (Object.hasOwnProperty.call(obj, key)) {</span>
<span class="line">            const value = obj[key];</span>
<span class="line">            // console.log(&#39;for-in-value:&#39;, value);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/* </span>
<span class="line">    for-of</span>
<span class="line">    它是ES6中新增加的语法，用来循环获取一对键值对中的值,循环一个普通对象会报错</span>
<span class="line">    for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句</span>
<span class="line">    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of</span>
<span class="line">*/</span>
<span class="line">function forOfLoop() {</span>
<span class="line">    var obj = { id: 5, name: &quot;qb&quot;, scope: 64 };</span>
<span class="line"></span>
<span class="line">    for (const iterator of arrayList) {</span>
<span class="line">        console.log(&#39;for-of-iterator:&#39;, iterator);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">forLoop();</span>
<span class="line">console.log(&#39;---------------------------------------&#39;);</span>
<span class="line">forEachLoop();</span>
<span class="line">console.log(&#39;---------------------------------------&#39;);</span>
<span class="line">forInLoop();</span>
<span class="line">console.log(&#39;---------------------------------------&#39;);</span>
<span class="line">forOfLoop();</span>
<span class="line">console.log(&#39;---------------------------------------&#39;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220330173039325-1800601010.png" alt="img"></p>`,4)]))}const d=s(i,[["render",c]]),p=JSON.parse('{"path":"/article-web/js/10.%20for_foreach_forin_forof%E7%94%A8%E6%B3%95%E5%92%8C%E5%8C%BA%E5%88%AB.html","title":"for,foreach,forin,forof用法和区别","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1749527809000,"contributors":[{"name":"twoflowers","username":"twoflowers","email":"1292548615@qq.com","commits":1,"url":"https://github.com/twoflowers"}],"changelog":[{"hash":"f3b962e68f6ffcb84ea2e07a3893611af691f7e8","time":1749527809000,"email":"1292548615@qq.com","author":"twoflowers","message":"初步完成navbar和sidebar的设置"}]},"filePathRelative":"article-web/js/10. for,foreach,forin,forof用法和区别.md"}');export{d as comp,p as data};
