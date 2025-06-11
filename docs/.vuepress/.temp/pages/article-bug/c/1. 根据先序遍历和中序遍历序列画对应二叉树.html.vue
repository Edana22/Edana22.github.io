<template><div><h1 id="根据遍历序列画二叉树" tabindex="-1"><a class="header-anchor" href="#根据遍历序列画二叉树"><span>根据遍历序列画二叉树</span></a></h1>
<h2 id="【题目】某二叉树的先序遍历序列是-efhigjk-中序遍历序列是-hfiejkg-画出该二叉树。" tabindex="-1"><a class="header-anchor" href="#【题目】某二叉树的先序遍历序列是-efhigjk-中序遍历序列是-hfiejkg-画出该二叉树。"><span>【题目】某二叉树的先序遍历序列是 <strong><code v-pre>EFHIGJK</code></strong> ， 中序遍历序列是 <strong><code v-pre>HFIEJKG</code></strong> ，画出该二叉树。</span></a></h2>
<p>【答案】</p>
<ol>
<li>由先序 <strong>EFHIGJK</strong> 可知 <strong>E</strong> 是根节点。</li>
<li>由中序 <strong>HFIEJKG</strong> ，可知 <strong>HFI</strong> 在根节点左边，<strong>JKG</strong> 在根节点右边。</li>
</ol>
<Mermaid id="mermaid-21" code="eJxLL0osyFAIcbHmcrWyssovSsxLTw1JrShR0NW1U/Bw8+RyBbO8vN25uJJzEouLXVLTFJCUpWXm5Fgpp1macQEAQMMWUw=="></Mermaid><ol start="3">
<li>左边节点序列：先序是<strong>FHI</strong>，所以 <strong>F</strong> 是根节点。</li>
<li>左边节点序列：中序<strong>HFI</strong>，所以 <strong>H左I右</strong>。</li>
</ol>
<Mermaid id="mermaid-34" code="eJxLL0osyFAIcbHmcrWyssovSsxLTw1JrShR0NW1U3DjcsMU9OByA9OeXK5g2svbnYsrOSexuNglNU0BSXFaZk6OlXKapRkXAOJnHXI="></Mermaid><ol start="5">
<li>右边节点序列：先序是 <strong>GJK</strong>，所以 <strong>G</strong> 是根节点。</li>
<li>右边节点序列：中序 <strong>JKG</strong>，所以 <strong>JK</strong> 都在 <strong>G</strong> 左边。</li>
</ol>
<Mermaid id="mermaid-47" code="eJxLL0osyFAIcbHmcrWyssovSsxLTw1JrShR0NW1U3DjcsMU9OByA9OeXK5g2h1FCZc7UPDp9mVPO9qeTVkPlPfy5uJKzkksLnZJTVNAMiotMyfHSjnN0owLAGaCKgI="></Mermaid><ol start="7">
<li>先序是 <strong>JK</strong> ，所以 <strong>J</strong> 是根节点。</li>
<li>中序 <strong>JK</strong> ，所以 <strong>K 在 J 右边</strong>。</li>
</ol>
<Mermaid id="mermaid-60" code="eJxLL0osyFAIcbHmcrWyssovSsxLTw1JrShR0NW1U3DjcsMU9OByA9OeXK5g2p3LHV3R0+3Lnna0PZuyHiTvhSLL5QWS79+MkPfm4krOSSwudklNU0AyJS0zJ8dKOc3SjAsArTI2ug=="></Mermaid></div></template>


