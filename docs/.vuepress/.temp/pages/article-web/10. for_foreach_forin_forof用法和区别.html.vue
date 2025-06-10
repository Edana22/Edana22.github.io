<template><div><h1 id="for-foreach-forin-forof用法和区别" tabindex="-1"><a class="header-anchor" href="#for-foreach-forin-forof用法和区别"><span>for,foreach,forin,forof用法和区别</span></a></h1>
<p>demo.js</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">var arrayList = [{ id: 1, name: "zs", scope: 56 },</span>
<span class="line">{ id: 2, name: "ls", scope: 86 },</span>
<span class="line">{ id: 3, name: "wu", scope: 22 },</span>
<span class="line">{ id: 4, name: "cl", scope: 42 },</span>
<span class="line">{ id: 5, name: "qb", scope: 64 },</span>
<span class="line">];</span>
<span class="line"></span>
<span class="line">/* </span>
<span class="line">    普通for循环</span>
<span class="line">    for循环中可以使用return、break等来中断循环</span>
<span class="line">*/</span>
<span class="line">function forLoop() {</span>
<span class="line">    for (let index = 0; index &lt; arrayList.length; index++) {</span>
<span class="line">        const element = arrayList[index];</span>
<span class="line">        console.log("for-index:", index);</span>
<span class="line">        console.log("for-element:", element);</span>
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
<span class="line">    arrayList.forEach((element, index) => {</span>
<span class="line">        console.log('for-each-index:', index);</span>
<span class="line">        console.log('for-each-element:', element);</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/* </span>
<span class="line">    for-in</span>
<span class="line">    for ... in是为遍历对象属性而构建的，循环遍历的值都是数据结构的键值(key,value),不建议与数组一起使用</span>
<span class="line">    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in</span>
<span class="line">*/</span>
<span class="line">function forInLoop() {</span>
<span class="line">    var obj = { id: 5, name: "qb", scope: 64 };</span>
<span class="line">    for (const key in obj) {</span>
<span class="line">        console.log('for-in-key:', key);// obj = {key:value}</span>
<span class="line">        // 读取value</span>
<span class="line">        if (Object.hasOwnProperty.call(obj, key)) {</span>
<span class="line">            const value = obj[key];</span>
<span class="line">            // console.log('for-in-value:', value);</span>
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
<span class="line">    var obj = { id: 5, name: "qb", scope: 64 };</span>
<span class="line"></span>
<span class="line">    for (const iterator of arrayList) {</span>
<span class="line">        console.log('for-of-iterator:', iterator);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">forLoop();</span>
<span class="line">console.log('---------------------------------------');</span>
<span class="line">forEachLoop();</span>
<span class="line">console.log('---------------------------------------');</span>
<span class="line">forInLoop();</span>
<span class="line">console.log('---------------------------------------');</span>
<span class="line">forOfLoop();</span>
<span class="line">console.log('---------------------------------------');</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2022.cnblogs.com/blog/2194212/202203/2194212-20220330173039325-1800601010.png" alt="img"></p>
</div></template>


