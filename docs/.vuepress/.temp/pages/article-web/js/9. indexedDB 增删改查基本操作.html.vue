<template><div><h1 id="indexeddb-增删改查基本操作" tabindex="-1"><a class="header-anchor" href="#indexeddb-增删改查基本操作"><span>indexedDB 增删改查基本操作</span></a></h1>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211207104814784-1003078314.png" alt="img"></p>
<p><img src="https://img2020.cnblogs.com/blog/2194212/202112/2194212-20211207104848096-2022074205.png" alt="img"></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;!DOCTYPE html></span>
<span class="line">&lt;html></span>
<span class="line">    &lt;head></span>
<span class="line">        &lt;meta charset="utf-8"></span>
<span class="line">        &lt;title>&lt;/title></span>
<span class="line">        &lt;script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js">&lt;/script></span>
<span class="line">        &lt;script src="./js/vue.min.js">&lt;/script></span>
<span class="line">    &lt;/head></span>
<span class="line">    &lt;body></span>
<span class="line">        &lt;div id="app"></span>
<span class="line">            &lt;p>数据库名字:&lt;/p></span>
<span class="line">            &lt;input placeholder="输入要打开的数据库名字" v-model="databaseName" /></span>
<span class="line">            &lt;button @click="openMyDataBase(databaseName,version)">打开数据库&lt;/button></span>
<span class="line">            &lt;button @click="readAll" :disabled="!db">遍历数据&lt;/button></span>
<span class="line">            &lt;button @click="useIndex" :disabled="!db">使用索引&lt;/button></span>
<span class="line">            &lt;button @click="clear" :disabled="!db">清空对象仓库&lt;/button></span>
<span class="line"></span>
<span class="line">            &lt;p>主键:&lt;/p></span>
<span class="line">            &lt;input placeholder="输入要读取数据的主键" type="number" v-model="primaryKey" /></span>
<span class="line">            &lt;button @click="read" :disabled="!db">读取数据&lt;/button></span>
<span class="line">            &lt;button @click="remove" :disabled="!db">删除数据&lt;/button></span>
<span class="line"></span>
<span class="line">            &lt;p>要修改的属性:&lt;/p></span>
<span class="line">            &lt;input v-model="obj.name" /></span>
<span class="line">            &lt;input v-model="obj.age" /></span>
<span class="line">            &lt;input v-model="obj.email" /></span>
<span class="line">            &lt;button :disabled="!db" @click="updateDate">更新数据&lt;/button></span>
<span class="line"></span>
<span class="line">            &lt;p>要插入对象的信息（插入位置是最后一行）:&lt;/p></span>
<span class="line">            &lt;input v-model="obj.name" /></span>
<span class="line">            &lt;input v-model="obj.age" /></span>
<span class="line">            &lt;input v-model="obj.email" /></span>
<span class="line">            &lt;button @click="addRecord(obj)" :disabled="!db">插入一条新数据&lt;/button></span>
<span class="line">        &lt;/div></span>
<span class="line"></span>
<span class="line">    &lt;/body></span>
<span class="line">    &lt;script></span>
<span class="line">        var vm = new Vue({</span>
<span class="line">            el: "#app",</span>
<span class="line">            data: {</span>
<span class="line">                version: 1,</span>
<span class="line">                databaseName: "test",</span>
<span class="line">                db: null,</span>
<span class="line">                request: null,</span>
<span class="line">                primaryKey: 1,</span>
<span class="line">                obj: {</span>
<span class="line">                    name: "张三",</span>
<span class="line">                    age: 22,</span>
<span class="line">                    email: "Zsan@foxmail.com"</span>
<span class="line">                }</span>
<span class="line">            },</span>
<span class="line">            methods: {</span>
<span class="line">                openMyDataBase(databaseName, version) {</span>
<span class="line">                    var that = this;</span>
<span class="line">                    var db;</span>
<span class="line">                    this.request = window.indexedDB.open(databaseName, version);</span>
<span class="line">                    this.request.onupgradeneeded = function(e) {</span>
<span class="line">                        db = e.target.result;</span>
<span class="line">                        console.log("onupgrageneeded");</span>
<span class="line">                        // 通常新建数据库以后，第一件事是新建对象仓库（即新建表），并设置主键</span>
<span class="line">                        var objectStore;</span>
<span class="line">                        if (!db.objectStoreNames.contains(databaseName)) { //如果这个 对象仓库/表 不存在，就新建</span>
<span class="line">                            objectStore = db.createObjectStore("person", {</span>
<span class="line">                                autoIncrement: true //指定主键为一个递增的整数</span>
<span class="line">                            });</span>
<span class="line">                        }</span>
<span class="line">                        /**</span>
<span class="line">                         * 新建当前数据库的索引</span>
<span class="line">                         * 必须在VersionChange监听函数里调用</span>
<span class="line">                         * objectStore.createIndex(indexName, keyPath, objectParameters)</span>
<span class="line">                         * indexName：索引名</span>
<span class="line">                         * keyPath：主键</span>
<span class="line">                         * objectParameters：配置对象（可选）</span>
<span class="line">                         * unique：如果设为 true，将不允许重复的值</span>
<span class="line">                         * multiEntry：如果设为 true，对于有多个值的主键数组，每个值将在索引里面新建一个条目，否则主键数组对应一个条目。</span>
<span class="line">                         * </span>
<span class="line">                         * */</span>
<span class="line">                        objectStore.createIndex("name","name",{unique:false});//可以重复</span>
<span class="line">                        objectStore.createIndex("age","age",{unique:false});//可以重复</span>
<span class="line">                        objectStore.createIndex("email","email",{unique:true});//不能重复</span>
<span class="line">                    }</span>
<span class="line"></span>
<span class="line">                    this.request.onsuccess = function(e) {</span>
<span class="line">                        db = that.request.result;</span>
<span class="line">                        that.db = db;</span>
<span class="line">                        console.log("success");</span>
<span class="line">                    }</span>
<span class="line"></span>
<span class="line">                    this.request.onerror = function(e) {</span>
<span class="line">                        console.log("error");</span>
<span class="line">                    }</span>
<span class="line">                },</span>
<span class="line">                addRecord(obj) {</span>
<span class="line">                    var that = this;</span>
<span class="line">                    var db = that.db;</span>
<span class="line">                    var transaction = db.transaction(["person"],</span>
<span class="line">                        "readwrite"); //写入数据需要新建一个事务。新建时必须指定表格名称和操作模式（“只读”或“读写”）</span>
<span class="line">                    var objectStore = transaction.objectStore(</span>
<span class="line">                        "person"); //新建事务以后，通过IDBTransaction.objectStore(name)方法，拿到 IDBObjectStore 对象</span>
<span class="line">                    this.obj.age = parseInt(this.obj.age);</span>
<span class="line">                    var request = objectStore.add(obj); //再通过表格对象的add()方法，向表格写入一条记录</span>
<span class="line">                    request.onsuccess = function(e) {</span>
<span class="line">                        console.log("数据写入成功");</span>
<span class="line">                    }</span>
<span class="line">                    request.onerror = function(e) {</span>
<span class="line">                        console.log("数据写入失败:",e.srcElement.error);</span>
<span class="line">                    }</span>
<span class="line">                },</span>
<span class="line">                read() {</span>
<span class="line">                    var that = this;</span>
<span class="line">                    var db = that.db;</span>
<span class="line">                    var transaction = db.transaction(["person"]);</span>
<span class="line">                    var objectStore = transaction.objectStore("person");</span>
<span class="line">                    var request = objectStore.get(parseInt(this.primaryKey)); //objectStore.get()方法用于读取数据，参数是主键的值。</span>
<span class="line">                    request.onsuccess = function(e) {</span>
<span class="line">                        if (request.result) {</span>
<span class="line">                            var obj = {</span>
<span class="line">                                name: "",</span>
<span class="line">                                age: 0,</span>
<span class="line">                                email: ""</span>
<span class="line">                            };</span>
<span class="line">                            obj.name = request.result.name;</span>
<span class="line">                            obj.age = request.result.age;</span>
<span class="line">                            obj.email = request.result.email;</span>
<span class="line">                            console.log("obj:", obj);</span>
<span class="line">                            that.obj = obj;</span>
<span class="line">                        } else {</span>
<span class="line">                            console.log("未获得数据记录");</span>
<span class="line">                        }</span>
<span class="line">                    }</span>
<span class="line"></span>
<span class="line">                    request.onerror = function(e) {</span>
<span class="line">                        console.log("事务失败");</span>
<span class="line">                    }</span>
<span class="line">                },</span>
<span class="line">                readAll() {</span>
<span class="line">                    var that = this;</span>
<span class="line">                    var db = that.db;</span>
<span class="line">                    var transaction = db.transaction(["person"]);</span>
<span class="line">                    var objectStore = transaction.objectStore(</span>
<span class="line">                        "person");</span>
<span class="line">                    objectStore.openCursor().onsuccess = function(e) {</span>
<span class="line">                        var cursor = e.target.result;</span>
<span class="line">                        var obj = {</span>
<span class="line">                            primaryKey: 1,</span>
<span class="line">                            name: "",</span>
<span class="line">                            age: 0,</span>
<span class="line">                            email: ""</span>
<span class="line">                        };</span>
<span class="line">                        if (cursor) {</span>
<span class="line">                            obj.primaryKey = cursor.key;</span>
<span class="line">                            obj.name = cursor.value.name;</span>
<span class="line">                            obj.age = cursor.value.age;</span>
<span class="line">                            obj.email = cursor.value.email;</span>
<span class="line">                            console.log("obj:", obj);</span>
<span class="line">                            cursor.continue();</span>
<span class="line">                        } else {</span>
<span class="line">                            console.log("没有更多数据了");</span>
<span class="line">                        }</span>
<span class="line">                    }</span>
<span class="line">                },</span>
<span class="line">                updateDate() {</span>
<span class="line">                    var that = this;</span>
<span class="line">                    var db = this.db;</span>
<span class="line">                    var objectStore = db.transaction("person", "readwrite").objectStore("person");</span>
<span class="line">                    /**</span>
<span class="line">                     * 更新数据要使用IDBObject.put()方法。</span>
<span class="line">                     * 第一个参数为新数据</span>
<span class="line">                     * 第二个参数为主键，该参数可选，且只在自动递增时才有必要提供，因为那时主键不包含在数据值里面</span>
<span class="line">                     * */</span>
<span class="line">                    this.obj.age = parseInt(this.obj.age);</span>
<span class="line">                    var request = objectStore.put(this.obj, parseInt(this.primaryKey));</span>
<span class="line">                    // var request = db.transaction(['person'], 'readwrite')</span>
<span class="line">                    //     .objectStore('person')</span>
<span class="line">                    //     .put({ id: 1, name: '李四', age: 35, email: 'lisi@example.com' }); //put()方法自动更新了主键为1的记录。</span>
<span class="line"></span>
<span class="line">                    request.onsuccess = function(event) {</span>
<span class="line">                        console.log('数据更新成功');</span>
<span class="line">                    };</span>
<span class="line"></span>
<span class="line">                    request.onerror = function(event) {</span>
<span class="line">                        console.log('数据更新失败');</span>
<span class="line">                    }</span>
<span class="line">                },</span>
<span class="line">                remove() {</span>
<span class="line">                    var that = this;</span>
<span class="line">                    var db = this.db;</span>
<span class="line">                    console.log(this.primaryKey);</span>
<span class="line">                    var request = db.transaction("person", "readwrite").objectStore("person").delete(parseInt(this</span>
<span class="line">                        .primaryKey));</span>
<span class="line"></span>
<span class="line">                    request.onsuccess = function(event) {</span>
<span class="line">                        console.log('数据删除成功');</span>
<span class="line">                    };</span>
<span class="line">                },</span>
<span class="line">                useIndex() {</span>
<span class="line">                    var db = this.db;</span>
<span class="line">                    var objectStore = db.transaction("person","readonly").objectStore("person");</span>
<span class="line">                    var index = objectStore.index("name");</span>
<span class="line">                    var request = index.get("张三"); //只返回第一个</span>
<span class="line">                    // var request = index.getAll("张三");//返回所有的 “张三”</span>
<span class="line">                    </span>
<span class="line">                    request.onsuccess = function(e){</span>
<span class="line">                        var result = e.target.result;</span>
<span class="line">                        if(result){</span>
<span class="line">                            console.log("result:",result);</span>
<span class="line">                            console.log("索引查询成功");</span>
<span class="line">                        }else{</span>
<span class="line">                            console.log("索引查询失败");</span>
<span class="line">                        }</span>
<span class="line">                    }</span>
<span class="line">                },</span>
<span class="line">                clear() {</span>
<span class="line">                    var db = this.db;</span>
<span class="line">                    var request = db.transaction("person", "readwrite").objectStore("person").clear();</span>
<span class="line">                    request.onsuccess = function(e) {</span>
<span class="line">                        console.log("清空对象仓库成功");</span>
<span class="line">                    }</span>
<span class="line">                    request.onerror = function(e) {</span>
<span class="line">                        console.log("清空仓库失败");</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        })</span>
<span class="line">    &lt;/script></span>
<span class="line">&lt;/html></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接：</p>
<p>[1] https://www.shulanxt.com/doc/dbdoc/db-intro</p>
<p>[2] http://www.ruanyifeng.com/blog/2018/07/indexeddb.html</p>
<p>[3] https://wangdoc.com/javascript/bom/indexeddb.html</p>
<p>[4] https://www.bilibili.com/video/BV15J411H7GH</p>
<p>[5] https://developer.mozilla.org/zh-CN/docs/Web/API/IDBObjectStore</p>
<p>[6] https://zhuanlan.zhihu.com/p/399223337</p>
</div></template>


