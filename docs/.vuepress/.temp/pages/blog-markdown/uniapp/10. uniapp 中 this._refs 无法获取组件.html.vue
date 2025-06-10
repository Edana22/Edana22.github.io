<template><div><h1 id="uniapp-中-this-refs-无法获取组件" tabindex="-1"><a class="header-anchor" href="#uniapp-中-this-refs-无法获取组件"><span>uniapp 中 this.$refs 无法获取组件</span></a></h1>
<p>先排除这些原因：</p>
<ol>
<li>https://segmentfault.com/q/1010000043755258</li>
<li>https://ask.dcloud.net.cn/question/71788</li>
<li>https://www.cnblogs.com/e0yu/p/16135985.html</li>
<li>https://blog.csdn.net/m0_50015961/article/details/112170523</li>
</ol>
<p>总结一下就是：ref 不能引用 view 内置组件、循环创建的自定义组件也不能使用 ref 、不能和v-if同时使用。</p>
<p>但我用的不是内置组件，是uniapp的扩展组件 uni-drawer，使用前也通过HbuilderＸ导入了，this.$refs.name 仍然返回 undefined。</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202403/2194212-20240304085009222-445331343.png" alt="img"></p>
<p>最后解决方法是：</p>
<p>认真检查后发现，导入的时候选错项目了……直接按照记忆中选了最后一个，但目标项目在中间。</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202403/2194212-20240304085221270-745658338.png" alt="img"></p>
<p>重新导入后就能获取到组件了。说来挺不好意思的 (˘•ω•˘)</p>
</div></template>


