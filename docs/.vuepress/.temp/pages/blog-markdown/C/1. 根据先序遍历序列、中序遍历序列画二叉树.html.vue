<template><div><h1 id="根据先序遍历序列、中序遍历序列画二叉树" tabindex="-1"><a class="header-anchor" href="#根据先序遍历序列、中序遍历序列画二叉树"><span>根据先序遍历序列、中序遍历序列画二叉树</span></a></h1>
<p>某二叉树的先序遍历序列是EFHIGJK, 中序遍历序列是HFIEJKG,画出该二叉树。</p>
<p>1、由先序EFHIGJK可知E是根节点。
2、由中序HFIEJKG,可知HFI在根节点左边，JKG在根节点右边，示意图如图1：
<img src="https://img2020.cnblogs.com/blog/2194212/202010/2194212-20201028090704304-1213383986.png" alt="img"></p>
<p>3、左边节点序列:先序是FHI,所以F是根节点。
4、左边节点序列:中序HFI，所以H左I右,示意图如图2：
<img src="https://img2020.cnblogs.com/blog/2194212/202010/2194212-20201028090713871-819114745.png" alt="img"></p>
<p>5、右边节点序列:先序是GJK,所以G是根节点。
6、右边节点序列:中序JKG，所以JK都在G左边,示意图如图3：
<img src="https://img2020.cnblogs.com/blog/2194212/202010/2194212-20201028090726103-336779284.png" alt="img"></p>
<p>7、先序是JK,所以J是根节点。
8、中序JK，所以K在J右边,示意图如图4：
<img src="https://img2020.cnblogs.com/blog/2194212/202010/2194212-20201028090738758-723434363.png" alt="img"></p>
</div></template>


