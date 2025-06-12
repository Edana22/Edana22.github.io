import{_ as s,c as l,b as e,o as i}from"./app-CfuPOgCv.js";const a={};function t(c,n){return i(),l("div",null,n[0]||(n[0]=[e(`<h1 id="html中使用mqtt、clientid-使用随机字符" tabindex="-1"><a class="header-anchor" href="#html中使用mqtt、clientid-使用随机字符"><span>html中使用mqtt、clientId 使用随机字符</span></a></h1><p><a href="https://github.com/mqttjs" target="_blank" rel="noopener noreferrer">MQTT.js</a> 是一个开源项目，支持 nodejs 和 Browser js ，这里对比一下 nodejs 和 Browser js 的用法： <code>注：nodejs是运行在webserver的js，Browser js意思是运行在浏览器上的js，也就是H5用到的js</code><code>注：目前项目方已经提供 CDN，不需要自己打包 https://unpkg.com/mqtt/dist/mqtt.min.js</code></p><p><strong>url：ws://xxxxx:port/mqtt</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!DOCTYPE html&gt;</span>
<span class="line">&lt;html lang=&quot;en&quot;&gt;</span>
<span class="line"></span>
<span class="line">&lt;head&gt;</span>
<span class="line">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span class="line">    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;</span>
<span class="line">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span class="line">    &lt;title&gt;Document&lt;/title&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line"></span>
<span class="line">&lt;body&gt;</span>
<span class="line">    &lt;p&gt;文件链接：&lt;a href=&quot; https://unpkg.com/mqtt/dist/mqtt.min.js&quot;&gt; https://unpkg.com/mqtt/dist/mqtt.min.js&lt;/a&gt; &lt;/p&gt;</span>
<span class="line">    &lt;p&gt;打开控制台看打印的信息&lt;/p&gt;</span>
<span class="line"></span>
<span class="line">    &lt;script src=&quot;https://unpkg.com/mqtt/dist/mqtt.min.js&quot;&gt;&lt;/script&gt;</span>
<span class="line">    &lt;script&gt;</span>
<span class="line">        function randomName(len) {</span>
<span class="line">            var len = len || 23;</span>
<span class="line">            var chars = &#39;ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678&#39;;</span>
<span class="line">            var maxPos = chars.length;</span>
<span class="line">            var str = &#39;&#39;;</span>
<span class="line">            for (let i = 0; i &lt; len; i++) {</span>
<span class="line">                str += chars.charAt(Math.floor(Math.random() * maxPos));</span>
<span class="line">            }</span>
<span class="line">            return new Date().getTime() + str;</span>
<span class="line">        }</span>
<span class="line">        // 请确保仅在浏览器中将此捆绑包与ws 或 wssURL 一起使用。其他 URL 类型将失败</span>
<span class="line">        const connectUrl = &#39;ws://broker.emqx.io:8083/mqtt&#39;</span>
<span class="line">        const options = {</span>
<span class="line">            connectTimeout: 4000,</span>
<span class="line">            reconnectPeriod: 1000,</span>
<span class="line">            clientId: &#39;emqx_test&#39;,</span>
<span class="line">            username: &#39;emqx_test&#39;,</span>
<span class="line">            password: &#39;emqx_test&#39;,</span>
<span class="line">            clean: true,</span>
<span class="line">        }</span>
<span class="line">        options.clientId = randomName(16);</span>
<span class="line"></span>
<span class="line">        // var client = mqtt.connect(connectUrl);//连接的时候不用 options 也可以</span>
<span class="line">        var client = mqtt.connect(connectUrl, options);</span>
<span class="line"></span>
<span class="line">        // topic 是任意字符串，如果使用常见名字如 demo，可能会收到别人测试时发送的数据</span>
<span class="line">        const topic = &quot;myTopic125&quot;;</span>
<span class="line"></span>
<span class="line">        client.on(&quot;connect&quot;, () =&gt; {</span>
<span class="line">            console.log(&#39;连接成功&#39;);</span>
<span class="line">        });</span>
<span class="line">        client.subscribe(topic, () =&gt; {</span>
<span class="line">            console.log(&#39;订阅了主题：&#39;, { topic });</span>
<span class="line">        })</span>
<span class="line">        client.on(&#39;message&#39;, (topic, msg) =&gt; {</span>
<span class="line">            console.log(\`topic: \${topic}\`);</span>
<span class="line">            console.log(\`message: \${msg.toString()}\`);</span>
<span class="line">        });</span>
<span class="line">        client.on(&quot;close&quot;, () =&gt; {</span>
<span class="line">            console.log(&#39;已经断开连接&#39;);</span>
<span class="line">        });</span>
<span class="line"></span>
<span class="line">        // 每隔2秒发送一次消息</span>
<span class="line">        setInterval(() =&gt; {</span>
<span class="line">            client.publish(topic, &quot;&quot; + new Date());</span>
<span class="line">        }, 2000);</span>
<span class="line">    &lt;/script&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line"></span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><p><img src="https://img2022.cnblogs.com/blog/2194212/202211/2194212-20221109135221364-401281994.png" alt="img"></p><p>options.clientId = randomName(16); 是把 clientId 改为随机数，因为如果 clientId 是写死的值，mqtt 会频繁重连：</p><p><img src="https://img2022.cnblogs.com/blog/2194212/202211/2194212-20221109135532510-47759036.png" alt="img"></p><p>参考文档：</p><p>[1] https://www.dazhuanlan.com/jimholms/topics/1108692</p><p>[2] https://blog.csdn.net/qq_17627195/article/details/124492512</p><p>[3] https://www.zkii.net/tech/arduino/4013.html</p>`,12)]))}const d=s(a,[["render",t]]),r=JSON.parse('{"path":"/article-web/js/13.%20html%E4%B8%AD%E4%BD%BF%E7%94%A8mqtt%E3%80%81clientId%20%E4%BD%BF%E7%94%A8%E9%9A%8F%E6%9C%BA%E5%AD%97%E7%AC%A6.html","title":"html中使用mqtt、clientId 使用随机字符","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1749527809000,"contributors":[{"name":"twoflowers","username":"twoflowers","email":"1292548615@qq.com","commits":1,"url":"https://github.com/twoflowers"}],"changelog":[{"hash":"f3b962e68f6ffcb84ea2e07a3893611af691f7e8","time":1749527809000,"email":"1292548615@qq.com","author":"twoflowers","message":"初步完成navbar和sidebar的设置"}]},"filePathRelative":"article-web/js/13. html中使用mqtt、clientId 使用随机字符.md"}');export{d as comp,r as data};
