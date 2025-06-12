import{_ as s,c as e,b as i,o as a}from"./app-DyBO3kfI.js";const l={};function c(t,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="uniapp中mqtt的基本使用" tabindex="-1"><a class="header-anchor" href="#uniapp中mqtt的基本使用"><span>uniapp中mqtt的基本使用</span></a></h1><p>参考文档：</p><p>[1] https://www.hivemq.com/blog/mqtt-client-library-mqtt-js/</p><p>[2] https://www.tabnine.com/code/javascript/functions/mqtt/MqttClient/on</p><p>[3] https://docs.cloudplugs.com/kb/Developer-Guides/MQTT-API/Javascript-Examples</p><p>[4] https://blog.51cto.com/olivetree/1621128?winzoom=1</p><p>[5] https://www.emqx.com/zh/blog/mqtt-js-tutorial</p><hr><p>\\1. 安装mqtt</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">npm install mqtt@3.0.0 --save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>\\2. 先设置 MQTT_OPTIONS</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">const MQTT_OPTIONS = {</span>
<span class="line">    connectTimeout: 5000,</span>
<span class="line">    clientId: &#39;47dd2bbc-937b-45d3-9ddc-c5250205d1b6&#39;,</span>
<span class="line">    username: &#39;admin&#39;,</span>
<span class="line">    password: &#39;H9634C07116@!#&#39;,</span>
<span class="line">    clean: false</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\\3. 创建一个mqtt客户端</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// 连接字符串, 通过协议指定使用的连接方式</span>
<span class="line">// ws 未加密 WebSocket 连接</span>
<span class="line">// wss 加密 WebSocket 连接</span>
<span class="line">// mqtt 未加密 TCP 连接</span>
<span class="line">// mqtts 加密 TCP 连接</span>
<span class="line">// wxs 微信小程序连接</span>
<span class="line">// alis 支付宝小程序连接</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">// 改变client</span>
<span class="line">// #ifdef H5</span>
<span class="line">var preStr = &quot;wss://&quot;;</span>
<span class="line">var mqtt = require(&#39;mqtt&#39;); //改变mqtt,h5可以直接写&#39;mqtt&#39;</span>
<span class="line">// #endif</span>
<span class="line">// #ifdef MP-WEIXIN||APP-PLUS</span>
<span class="line">var preStr = &quot;wxs://&quot;;</span>
<span class="line">var mqtt = require(&#39;mqtt/dist/mqtt.js&#39;); //小程序必须写&#39;mqtt/dist/mqtt.js&#39;</span>
<span class="line">// #endif</span>
<span class="line"></span>
<span class="line">var client = mqtt.connect（preStr + url,MQTT_OPTIONS）；//mqtt.connect([url], options)</span>
<span class="line">/**</span>
<span class="line">* connect、error、reconnect、message、end、close都是回调函数</span>
<span class="line">* 在相应的状态自然会调用</span>
<span class="line">*/</span>
<span class="line">client.on(&#39;connect&#39;, function() {</span>
<span class="line">    console.log(&#39;MQTT client is connected&#39;);</span>
<span class="line">}).on(&#39;error&#39;, (e) =&gt; {</span>
<span class="line">    console.log(&#39;MQTT error:&#39;, e);</span>
<span class="line">}).on(&#39;reconnect&#39;, function() {</span>
<span class="line">    console.log(&#39;MQTT client is reconnect...&#39;);</span>
<span class="line">}).on(&#39;message&#39;, function(topic, message) {</span>
<span class="line">    console.log(&#39;topic:&#39;, topic);</span>
<span class="line">    console.log(&quot;message: &quot;, message.toString());</span>
<span class="line">}).on(&#39;end&#39;,function(){</span>
<span class="line">    console.log(&#39;MQTT client is end&#39;);</span>
<span class="line">}).on(&#39;close&#39;, function() {</span>
<span class="line">    console.log(&#39;MQTT connection closed, now exiting.&#39;);</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line">* topic, msg 是根据文档定义的</span>
<span class="line">* 先订阅，再发布</span>
<span class="line">*/</span>
<span class="line">client.subscribe(topic)；</span>
<span class="line">client.publish(topic, msg)；/* 退订主题 */client.unsubscribe(topic)；</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const d=s(l,[["render",c]]),r=JSON.parse('{"path":"/article-uniapp/4.%20uniapp%E4%B8%ADmqtt%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8.html","title":"uniapp中mqtt的基本使用","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1749527809000,"contributors":[{"name":"twoflowers","username":"","email":"1292548615@qq.com","commits":1}],"changelog":[{"hash":"f3b962e68f6ffcb84ea2e07a3893611af691f7e8","time":1749527809000,"email":"1292548615@qq.com","author":"twoflowers","message":"初步完成navbar和sidebar的设置"}]},"filePathRelative":"article-uniapp/4. uniapp中mqtt的基本使用.md"}');export{d as comp,r as data};
