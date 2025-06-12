import{_ as s,c as e,b as a,o as i}from"./app-CfuPOgCv.js";const l={};function d(r,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="新建-indexeddb-数据库并插入数据" tabindex="-1"><a class="header-anchor" href="#新建-indexeddb-数据库并插入数据"><span>新建 indexedDB 数据库并插入数据</span></a></h1><h3 id="一、什么叫数据库" tabindex="-1"><a class="header-anchor" href="#一、什么叫数据库"><span>一、什么叫数据库</span></a></h3><p>DB的全名是database，即数据库。</p><h3 id="二、数据库的种类" tabindex="-1"><a class="header-anchor" href="#二、数据库的种类"><span>二、数据库的种类</span></a></h3><p>数据库有两种类型，分别是关系型数据库和非关系型数据库。</p><ul><li>关系型数据库：<strong>Oracle</strong>、<strong>DB2</strong>、<strong>MicrosoftSQLServer</strong>、MicrosoftAccess、<strong>MySQL</strong>等。</li><li>非关系型数据库：NoSql、Cloudant、MongoDb、redis、HBase等。</li></ul><p>关系型数据库的优点：</p><ol><li>能够复杂查询：可以用SQL句子便捷的在一个表及多个表之间做复杂的数据查询。</li><li>事务支持性优秀：能够实现对于安全性要求很高的数据访问。</li></ol><p>非关系型数据库的优点：</p><ol><li>性能好：NOSQL是基于键值对的，可以想象成表中的主键和值的对应关系，并且不用通过SQL层的解析，因此性能表现优异。</li><li>可扩展性好：同样也是基于键值对，数据间耦合度低，因此很容易水平扩展。</li></ol><ul><li>SQL (Structured Query Language) 是一种数据库语言 。</li><li>就数据库类型而言，<strong>IndexedDB</strong> 不属于关系型数据库（不支持 SQL 查询语句），更接近 NoSQL 数据库。</li></ul><hr><h2 id="indexeddb-具有以下特点" tabindex="-1"><a class="header-anchor" href="#indexeddb-具有以下特点"><span>IndexedDB 具有以下特点</span></a></h2><p>（1）键值对储存。 IndexedDB 内部采用对象仓库（object store）存放数据。所有类型的数据都可以直接存入，包括 JavaScript 对象。对象仓库中，数据以&quot;键值对&quot;的形式保存，每一个数据记录都有对应的主键，主键是独一无二的，不能有重复，否则会抛出一个错误。</p><p>（2）异步。 IndexedDB 操作时不会锁死浏览器，用户依然可以进行其他操作，这与 LocalStorage 形成对比，后者的操作是同步的。异步设计是为了防止大量数据的读写，拖慢网页的表现。</p><p>（3）支持事务。 IndexedDB 支持事务（transaction），这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回滚到事务发生之前的状态，不存在只改写一部分数据的情况。</p><p>（4）同源限制 IndexedDB 受到同源限制，每一个数据库对应创建它的域名。网页只能访问自身域名下的数据库，而不能访问跨域的数据库。</p><p>（5）储存空间大 IndexedDB 的储存空间比 LocalStorage 大得多，一般来说不少于 250MB，甚至没有上限。</p><p>（6）支持二进制储存。 IndexedDB 不仅可以储存字符串，还可以储存二进制数据（ArrayBuffer 对象和 Blob 对象）。</p><ul><li><strong>数据库</strong>是一系列相关数据的容器。</li><li>每个数据库包含若干个<strong>对象仓库（object store）</strong>。它类似于关系型数据库的表格。</li><li>对象仓库保存的是<strong>数据记录</strong>。每条记录类似于关系型数据库的行，但是只有主键和数据体两部分。</li><li>数据库 &gt; 对象仓库 &gt; 数据记录</li></ul><h2 id="操作流程" tabindex="-1"><a class="header-anchor" href="#操作流程"><span>操作流程</span></a></h2><ol><li><h3 id="打开数据库-indexeddb-open" tabindex="-1"><a class="header-anchor" href="#打开数据库-indexeddb-open"><span>打开数据库： indexedDB.open()</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">var version = 1;</span>
<span class="line">var databaseName = &quot;database&quot;;</span>
<span class="line">var request = window.indexedDB.open(databaseName, version);//这是一个异步操作，但是会立刻返回一个IDBOpenDBRequest对象。方法返回一个IDBRequest对象。这个对象通过三种事件error、success、upgradeneeded处理打开数据库的操作结果。</span>
<span class="line">var db;</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 新建数据库与打开数据库是同一个操作。</span>
<span class="line"> * 如果要打开的数据库不存在，则会先新建数据库：</span>
<span class="line"> *         1. 新建数据库时调用 request.onupgradeneeded（因为这时版本从无到有，所以会触发这个事件）</span>
<span class="line"> *         2. 把数据库版本设为 1</span>
<span class="line"> *         3. 此时数据库对象 db = e.target.result;</span>
<span class="line"> * 新建数据库后，就可以打开数据库了，所以继续调用 request.onsuccess</span>
<span class="line"> * */</span>
<span class="line">request.onupgradeneeded = function(e) {</span>
<span class="line">    db = e.target.result;</span>
<span class="line">    console.log(&quot;onupgrageneeded&quot;);</span>
<span class="line">    // 通常新建数据库以后，第一件事是新建对象仓库（即新建表），并设置主键</span>
<span class="line">    var objectStore = db.createObjectStore(&quot;person&quot;, {</span>
<span class="line">        keyPath: &quot;id&quot; //设置主键为 id</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 如果要打开的数据库存在，则会直接打开该数据库</span>
<span class="line"> * 此时数据库对象 db = request.result;</span>
<span class="line"> * */</span>
<span class="line">request.onsuccess = function(e) {</span>
<span class="line">    db = request.result;</span>
<span class="line">    console.log(&quot;success&quot;);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 数据库打开错误时调用此回调函数</span>
<span class="line"> * */</span>
<span class="line">request.onerror = function(e) {</span>
<span class="line">    console.log(&quot;error&quot;);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211206111952590-1861223178.png" alt="img"></p></li><li><h3 id="新建数据库" tabindex="-1"><a class="header-anchor" href="#新建数据库"><span>新建数据库：</span></a></h3><p>新建数据库与打开数据库是同一个操作。如果指定的数据库不存在，就会新建。</p><p>a. 新建对象仓库（即新建表）。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">request.onupgradeneeded = function(e) {</span>
<span class="line">    db = e.target.result;</span>
<span class="line">    console.log(&quot;onupgrageneeded&quot;);</span>
<span class="line">    // 通常，新建数据库以后，第一件事是新建对象仓库（即新建表），并设置主键</span>
<span class="line">    var objectStore = db.createObjectStore(&quot;person&quot;, {</span>
<span class="line">        keyPath: &quot;id&quot; //设置主键为 id</span>
<span class="line">    });</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b. 更好的写法是先判断一下，这张表格是否存在，如果不存在再新建。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">request.onupgradeneeded = function(e) {</span>
<span class="line">    db = e.target.result;</span>
<span class="line">    console.log(&quot;onupgrageneeded&quot;);</span>
<span class="line">    // 通常新建数据库以后，第一件事是新建对象仓库（即新建表），并设置主键</span>
<span class="line">    var objectStore;</span>
<span class="line">    if(!db.objectStoreNames.contains(databaseName)) {//如果这个 对象仓库/表 不存在，就新建</span>
<span class="line">        objectStore = db.createObjectStore(&quot;person&quot;, {</span>
<span class="line">            keyPath: &quot;id&quot; //设置主键为 id</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c. 如果数据记录里面没有合适作为主键的属性，可以让 IndexedDB 自动生成主键（设置主键）。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">var objectStore = db.createObjectStore(&quot;person&quot;, { autoIncrement: true }); //指定主键为一个递增的整数</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>d. 新建数据库后可以新建当前数据库的索引，使用索引可以更方便的查询数据。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> * 新建当前数据库的索引</span>
<span class="line"> * 必须在VersionChange监听函数里调用</span>
<span class="line"> * objectStore.createIndex(indexName, keyPath, objectParameters)</span>
<span class="line"> * indexName：索引名</span>
<span class="line"> * keyPath：主键</span>
<span class="line"> * objectParameters：配置对象（可选）</span>
<span class="line"> * unique：如果设为 true，将不允许重复的值</span>
<span class="line"> * multiEntry：如果设为 true，对于有多个值的主键数组，每个值将在索引里面新建一个条目，否则主键数组对应一个条目。</span>
<span class="line"> * </span>
<span class="line"> * */</span>
<span class="line">objectStore.createIndex(&quot;name&quot;,&quot;name&quot;,{unique:false});//可以重复</span>
<span class="line">objectStore.createIndex(&quot;age&quot;,&quot;age&quot;,{unique:false});//可以重复</span>
<span class="line">objectStore.createIndex(&quot;email&quot;,&quot;email&quot;,{unique:true});//不能重复</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用索引查询代码如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">useIndex() {</span>
<span class="line">    var db = this.db;</span>
<span class="line">    var objectStore = db.transaction(&quot;person&quot;,&quot;readonly&quot;).objectStore(&quot;person&quot;);</span>
<span class="line">    var index = objectStore.index(&quot;name&quot;);</span>
<span class="line">    var request = index.get(&quot;张三&quot;); //只返回第一个</span>
<span class="line">    // var request = index.getAll(&quot;张三&quot;);//返回所有的 “张三”</span>
<span class="line">    </span>
<span class="line">    request.onsuccess = function(e){</span>
<span class="line">        var result = e.target.result;</span>
<span class="line">        if(result){</span>
<span class="line">            console.log(&quot;result:&quot;,result);</span>
<span class="line">            console.log(&quot;索引查询成功&quot;);</span>
<span class="line">        }else{</span>
<span class="line">            console.log(&quot;索引查询失败&quot;);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">},</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><h3 id="新增数据" tabindex="-1"><a class="header-anchor" href="#新增数据"><span><strong>新增数据：</strong></span></a></h3><p>新增数据指的是向对象仓库写入数据记录。这需要通过事务完成。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">var obj1 = {id:1,name:&quot;张三&quot;,age:24,email:&quot;zhangsan@foxmail.com&quot;};</span>
<span class="line">var obj2 = {id:2,name:&quot;李四&quot;,age:30,email:&quot;lisi@foxmail.com&quot;};</span>
<span class="line">function addRecord(obj){</span>
<span class="line">    var request = db.transaction([&quot;person&quot;],&quot;readwrite&quot;) //写入数据需要新建一个事务。新建时必须指定表格名称和操作模式（“只读”或“读写”）</span>
<span class="line">    .objectStore(&quot;person&quot;) //新建事务以后，通过IDBTransaction.objectStore(name)方法，拿到 IDBObjectStore 对象</span>
<span class="line">    .add(obj); //再通过表格对象的add()方法，向表格写入一条记录</span>
<span class="line">    request.onsuccess = function(e){</span>
<span class="line">        console.log(&quot;数据写入成功&quot;);</span>
<span class="line">    }</span>
<span class="line">    request.onerror = function(e){</span>
<span class="line">        console.log(&quot;数据写入失败&quot;);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">window.onload = function(){</span>
<span class="line">    addRecord(obj1);</span>
<span class="line">    addRecord(obj2);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：不加window.onload 可能存在异步问题，报undefined错误。<img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211206114145886-1075675017.png" alt="img"></p><p>执行过代码后如果对象仓库仍是空，刷新一下即可：</p><p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211206114019396-530379478.png" alt="img"></p><p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211206114026351-222139046.png" alt="img"></p></li></ol><hr><p>参考文章：</p><p>[1] https://www.shulanxt.com/doc/dbdoc/db-intro</p><p>[2] http://www.ruanyifeng.com/blog/2018/07/indexeddb.html</p><p>[3] https://wangdoc.com/javascript/bom/indexeddb.html</p><p>[4] https://www.bilibili.com/video/BV15J411H7GH</p><p>[5] https://developer.mozilla.org/zh-CN/docs/Web/API/IDBObjectStore</p><p>[6] https://zhuanlan.zhihu.com/p/399223337</p>`,30)]))}const c=s(l,[["render",d]]),p=JSON.parse('{"path":"/article-web/js/8.%20%E6%96%B0%E5%BB%BA%20indexedDB%20%E6%95%B0%E6%8D%AE%E5%BA%93%E5%B9%B6%E6%8F%92%E5%85%A5%E6%95%B0%E6%8D%AE.html","title":"新建 indexedDB 数据库并插入数据","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"一、什么叫数据库","slug":"一、什么叫数据库","link":"#一、什么叫数据库","children":[]},{"level":3,"title":"二、数据库的种类","slug":"二、数据库的种类","link":"#二、数据库的种类","children":[]},{"level":2,"title":"IndexedDB 具有以下特点","slug":"indexeddb-具有以下特点","link":"#indexeddb-具有以下特点","children":[]},{"level":2,"title":"操作流程","slug":"操作流程","link":"#操作流程","children":[]}],"git":{"updatedTime":1749527809000,"contributors":[{"name":"twoflowers","username":"twoflowers","email":"1292548615@qq.com","commits":1,"url":"https://github.com/twoflowers"}],"changelog":[{"hash":"f3b962e68f6ffcb84ea2e07a3893611af691f7e8","time":1749527809000,"email":"1292548615@qq.com","author":"twoflowers","message":"初步完成navbar和sidebar的设置"}]},"filePathRelative":"article-web/js/8. 新建 indexedDB 数据库并插入数据.md"}');export{c as comp,p as data};
