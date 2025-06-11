<template><div><h1 id="根据先序遍历序列、中序遍历序列画二叉树" tabindex="-1"><a class="header-anchor" href="#根据先序遍历序列、中序遍历序列画二叉树"><span>根据先序遍历序列、中序遍历序列画二叉树</span></a></h1>
<p>某二叉树的先序遍历序列是 <strong>EFHIGJK</strong> , 中序遍历序列是 <strong>HFIEJKG</strong> ,画出该二叉树。</p>
<p>1、由先序<strong>EFHIGJK</strong>可知E是根节点。
2、由中序<strong>HFIEJKG</strong>,可知<strong>HFI</strong>在根节点左边，<strong>JKG</strong>在根节点右边，示意图如图1：</p>
<p><img src="@source/./article-bug/c/C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20250611130501798.png" alt="image-20250611130501798"></p>
<p>3、左边节点序列:先序是<strong>FHI</strong>,所以F是根节点。
4、左边节点序列:中序<strong>HFI</strong>，所以H左I右,示意图如图2：</p>
<p><img src="@source/./article-bug/c/C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20250611130520157.png" alt="image-20250611130520157"></p>
<p>5、右边节点序列:先序是<strong>GJK</strong>,所以G是根节点。
6、右边节点序列:中序<strong>JKG</strong>，所以<strong>JK</strong>都在G左边,示意图如图3：</p>
<p><img src="@source/./article-bug/c/C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20250611130543201.png" alt="image-20250611130543201"></p>
<p>7、先序是<strong>JK</strong>,所以J是根节点。
8、中序<strong>JK</strong>，所以K在J右边,示意图如图4：</p>
<p><img src="@source/./article-bug/c/C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20250611130558638.png" alt="image-20250611130558638"></p>
</div></template>


