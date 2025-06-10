<template><div><h1 id="html中使用mqtt、clientid-使用随机字符" tabindex="-1"><a class="header-anchor" href="#html中使用mqtt、clientid-使用随机字符"><span>html中使用mqtt、clientId 使用随机字符</span></a></h1>
<p><a href="https://github.com/mqttjs" target="_blank" rel="noopener noreferrer">MQTT.js</a> 是一个开源项目，支持 nodejs 和 Browser js ，这里对比一下 nodejs 和 Browser js 的用法：
<code v-pre>注：nodejs是运行在webserver的js，Browser js意思是运行在浏览器上的js，也就是H5用到的js</code>
<code v-pre>注：目前项目方已经提供 CDN，不需要自己打包 https://unpkg.com/mqtt/dist/mqtt.min.js</code></p>
<p><strong>url：ws://xxxxx:port/mqtt</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;!DOCTYPE html></span>
<span class="line">&lt;html lang="en"></span>
<span class="line"></span>
<span class="line">&lt;head></span>
<span class="line">    &lt;meta charset="UTF-8"></span>
<span class="line">    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"></span>
<span class="line">    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"></span>
<span class="line">    &lt;title>Document&lt;/title></span>
<span class="line">&lt;/head></span>
<span class="line"></span>
<span class="line">&lt;body></span>
<span class="line">    &lt;p>文件链接：&lt;a href=" https://unpkg.com/mqtt/dist/mqtt.min.js"> https://unpkg.com/mqtt/dist/mqtt.min.js&lt;/a> &lt;/p></span>
<span class="line">    &lt;p>打开控制台看打印的信息&lt;/p></span>
<span class="line"></span>
<span class="line">    &lt;script src="https://unpkg.com/mqtt/dist/mqtt.min.js">&lt;/script></span>
<span class="line">    &lt;script></span>
<span class="line">        function randomName(len) {</span>
<span class="line">            var len = len || 23;</span>
<span class="line">            var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';</span>
<span class="line">            var maxPos = chars.length;</span>
<span class="line">            var str = '';</span>
<span class="line">            for (let i = 0; i &lt; len; i++) {</span>
<span class="line">                str += chars.charAt(Math.floor(Math.random() * maxPos));</span>
<span class="line">            }</span>
<span class="line">            return new Date().getTime() + str;</span>
<span class="line">        }</span>
<span class="line">        // 请确保仅在浏览器中将此捆绑包与ws 或 wssURL 一起使用。其他 URL 类型将失败</span>
<span class="line">        const connectUrl = 'ws://broker.emqx.io:8083/mqtt'</span>
<span class="line">        const options = {</span>
<span class="line">            connectTimeout: 4000,</span>
<span class="line">            reconnectPeriod: 1000,</span>
<span class="line">            clientId: 'emqx_test',</span>
<span class="line">            username: 'emqx_test',</span>
<span class="line">            password: 'emqx_test',</span>
<span class="line">            clean: true,</span>
<span class="line">        }</span>
<span class="line">        options.clientId = randomName(16);</span>
<span class="line"></span>
<span class="line">        // var client = mqtt.connect(connectUrl);//连接的时候不用 options 也可以</span>
<span class="line">        var client = mqtt.connect(connectUrl, options);</span>
<span class="line"></span>
<span class="line">        // topic 是任意字符串，如果使用常见名字如 demo，可能会收到别人测试时发送的数据</span>
<span class="line">        const topic = "myTopic125";</span>
<span class="line"></span>
<span class="line">        client.on("connect", () => {</span>
<span class="line">            console.log('连接成功');</span>
<span class="line">        });</span>
<span class="line">        client.subscribe(topic, () => {</span>
<span class="line">            console.log('订阅了主题：', { topic });</span>
<span class="line">        })</span>
<span class="line">        client.on('message', (topic, msg) => {</span>
<span class="line">            console.log(`topic: ${topic}`);</span>
<span class="line">            console.log(`message: ${msg.toString()}`);</span>
<span class="line">        });</span>
<span class="line">        client.on("close", () => {</span>
<span class="line">            console.log('已经断开连接');</span>
<span class="line">        });</span>
<span class="line"></span>
<span class="line">        // 每隔2秒发送一次消息</span>
<span class="line">        setInterval(() => {</span>
<span class="line">            client.publish(topic, "" + new Date());</span>
<span class="line">        }, 2000);</span>
<span class="line">    &lt;/script></span>
<span class="line">&lt;/body></span>
<span class="line"></span>
<span class="line">&lt;/html></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<p><img src="https://img2022.cnblogs.com/blog/2194212/202211/2194212-20221109135221364-401281994.png" alt="img"></p>
<p>options.clientId = randomName(16); 是把 clientId 改为随机数，因为如果 clientId 是写死的值，mqtt 会频繁重连：</p>
<p><img src="https://img2022.cnblogs.com/blog/2194212/202211/2194212-20221109135532510-47759036.png" alt="img"></p>
<p>参考文档：</p>
<p>[1] https://www.dazhuanlan.com/jimholms/topics/1108692</p>
<p>[2] https://blog.csdn.net/qq_17627195/article/details/124492512</p>
<p>[3] https://www.zkii.net/tech/arduino/4013.html</p>
</div></template>


