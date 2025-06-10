<template><div><h1 id="uniapp中mqtt的基本使用" tabindex="-1"><a class="header-anchor" href="#uniapp中mqtt的基本使用"><span>uniapp中mqtt的基本使用</span></a></h1>
<p>参考文档：</p>
<p>[1] https://www.hivemq.com/blog/mqtt-client-library-mqtt-js/</p>
<p>[2] https://www.tabnine.com/code/javascript/functions/mqtt/MqttClient/on</p>
<p>[3] https://docs.cloudplugs.com/kb/Developer-Guides/MQTT-API/Javascript-Examples</p>
<p>[4] https://blog.51cto.com/olivetree/1621128?winzoom=1</p>
<p>[5] https://www.emqx.com/zh/blog/mqtt-js-tutorial</p>
<hr>
<p>\1. 安装mqtt</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">npm install mqtt@3.0.0 --save</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>\2. 先设置 MQTT_OPTIONS</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">const MQTT_OPTIONS = {</span>
<span class="line">    connectTimeout: 5000,</span>
<span class="line">    clientId: '47dd2bbc-937b-45d3-9ddc-c5250205d1b6',</span>
<span class="line">    username: 'admin',</span>
<span class="line">    password: 'H9634C07116@!#',</span>
<span class="line">    clean: false</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\3. 创建一个mqtt客户端</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">// 连接字符串, 通过协议指定使用的连接方式</span>
<span class="line">// ws 未加密 WebSocket 连接</span>
<span class="line">// wss 加密 WebSocket 连接</span>
<span class="line">// mqtt 未加密 TCP 连接</span>
<span class="line">// mqtts 加密 TCP 连接</span>
<span class="line">// wxs 微信小程序连接</span>
<span class="line">// alis 支付宝小程序连接</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">// 改变client</span>
<span class="line">// #ifdef H5</span>
<span class="line">var preStr = "wss://";</span>
<span class="line">var mqtt = require('mqtt'); //改变mqtt,h5可以直接写'mqtt'</span>
<span class="line">// #endif</span>
<span class="line">// #ifdef MP-WEIXIN||APP-PLUS</span>
<span class="line">var preStr = "wxs://";</span>
<span class="line">var mqtt = require('mqtt/dist/mqtt.js'); //小程序必须写'mqtt/dist/mqtt.js'</span>
<span class="line">// #endif</span>
<span class="line"></span>
<span class="line">var client = mqtt.connect（preStr + url,MQTT_OPTIONS）；//mqtt.connect([url], options)</span>
<span class="line">/**</span>
<span class="line">* connect、error、reconnect、message、end、close都是回调函数</span>
<span class="line">* 在相应的状态自然会调用</span>
<span class="line">*/</span>
<span class="line">client.on('connect', function() {</span>
<span class="line">    console.log('MQTT client is connected');</span>
<span class="line">}).on('error', (e) => {</span>
<span class="line">    console.log('MQTT error:', e);</span>
<span class="line">}).on('reconnect', function() {</span>
<span class="line">    console.log('MQTT client is reconnect...');</span>
<span class="line">}).on('message', function(topic, message) {</span>
<span class="line">    console.log('topic:', topic);</span>
<span class="line">    console.log("message: ", message.toString());</span>
<span class="line">}).on('end',function(){</span>
<span class="line">    console.log('MQTT client is end');</span>
<span class="line">}).on('close', function() {</span>
<span class="line">    console.log('MQTT connection closed, now exiting.');</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line">* topic, msg 是根据文档定义的</span>
<span class="line">* 先订阅，再发布</span>
<span class="line">*/</span>
<span class="line">client.subscribe(topic)；</span>
<span class="line">client.publish(topic, msg)；/* 退订主题 */client.unsubscribe(topic)；</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


