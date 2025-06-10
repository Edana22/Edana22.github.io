<template><div><h1 id="uni-forms-和-uni-data-select-嵌套使用并校验" tabindex="-1"><a class="header-anchor" href="#uni-forms-和-uni-data-select-嵌套使用并校验"><span>uni-forms 和 uni-data-select 嵌套使用并校验</span></a></h1>
<h3 id="原来的方法步骤太繁琐-已经更新" tabindex="-1"><a class="header-anchor" href="#原来的方法步骤太繁琐-已经更新"><span><strong>原来的方法步骤太繁琐，已经更新！</strong></span></a></h3>
<p>使用 uni-forms-item 和 uni-data-select 嵌套时，首先要注意：</p>
<ul>
<li>
<p>:name=[ ] 属性必须使用动态绑定，而且数组中的字符串必须和 v-model 的属性完全相同</p>
<p>，如</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202403/2194212-20240311110854096-1457370445.png" alt="img"></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">:name="[index, 'value']"</span>
<span class="line">v-model="formData[index].value"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>:rules 绑定在 uni-forms-item上</p>
</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;uni-forms-item v-for="(item, index) in  formData " :label="item.label" :required="item.isRequired"  :label-width="110" :name="[index, 'value']" :rules="item.rules"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>下面就来看代码（v-model绑定值时必须用 formData[index].value，且name必须为 :name=&quot;[index,'value']&quot;， 其她的可以用item访问属性）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;template></span>
<span class="line">    &lt;view class="form-container"></span>
<span class="line">        &lt;uni-forms ref="form" :model="formData" validate-trigger="bind"></span>
<span class="line">            &lt;uni-forms-item v-for="(item, index) in  formData " :label="item.label" :required="item.isRequired"</span>
<span class="line">                :label-width="110" :name="[index, 'value']" :rules="item.rules"></span>
<span class="line">                &lt;uni-data-select v-if="item.type == 'select'" v-model="formData[index].value"</span>
<span class="line">                    :localdata="formData[index].range"></span>
<span class="line">                &lt;/uni-data-select></span>
<span class="line">                &lt;uni-easyinput v-if="item.type == 'input'" v-model="formData[index].value">&lt;/uni-easyinput></span>
<span class="line">                &lt;switch v-if="item.type == 'switch'" :checked="formData[index].value" @change="changeSwitch" /></span>
<span class="line">            &lt;/uni-forms-item></span>
<span class="line">        &lt;/uni-forms></span>
<span class="line"></span>
<span class="line">        &lt;button @click="submit" type="primary">Submit&lt;/button></span>
<span class="line">    &lt;/view></span>
<span class="line">&lt;/template></span>
<span class="line"></span>
<span class="line">&lt;script></span>
<span class="line">export default {</span>
<span class="line">    data() {</span>
<span class="line">        return {</span>
<span class="line">            formData: {</span>
<span class="line">                scale: {</span>
<span class="line">                    label: "规模",</span>
<span class="line">                    type: "select",</span>
<span class="line">                    value: null, //设置为null，第一次进入不选择时才会提示“不能为空”</span>
<span class="line">                    range: [</span>
<span class="line">                        { text: "8千吨以上", value: "1" },</span>
<span class="line">                        { text: "5千-8千吨", value: "2" },</span>
<span class="line">                        { text: "3千-5千吨", value: "3" },</span>
<span class="line">                        { text: "3千吨以下", value: "4" }</span>
<span class="line">                    ],</span>
<span class="line">                    isRequired: true,</span>
<span class="line">                    rules: [</span>
<span class="line">                        { 'required': true, errorMessage: '本项不能为空！' },</span>
<span class="line">                    ]</span>
<span class="line">                },</span>
<span class="line">                brand: {</span>
<span class="line">                    label: "所属品牌",</span>
<span class="line">                    type: "select",</span>
<span class="line">                    value: null,</span>
<span class="line">                    range: [</span>
<span class="line">                        { text: "中石化", value: "1" },</span>
<span class="line">                        { text: "中石油", value: "2" },</span>
<span class="line">                        { text: "中油BP", value: "3" },</span>
<span class="line">                        { text: "中海油", value: "4" },</span>
<span class="line">                        { text: "中化石油", value: "5" },</span>
<span class="line">                        { text: "中油通驿", value: "6" },</span>
<span class="line">                        { text: "社会油站", value: "7" }</span>
<span class="line">                    ],</span>
<span class="line">                    isRequired: true,</span>
<span class="line">                    rules: [</span>
<span class="line">                        { 'required': true, errorMessage: '本项不能为空！' },</span>
<span class="line">                    ]</span>
<span class="line">                },</span>
<span class="line">                age: {</span>
<span class="line">                    label: "年龄",</span>
<span class="line">                    type: "input",</span>
<span class="line">                    value: null,</span>
<span class="line">                    isRequired: true,</span>
<span class="line">                    rules: [</span>
<span class="line">                        { 'required': true, errorMessage: '本项不能为空！' },</span>
<span class="line">                        { format: 'number', errorMessage: '只能输入数字' },</span>
<span class="line">                        { minimum: 0, maximum: 99, errorMessage: '必须在{minimum}~{maximum}之间' }</span>
<span class="line">                    ]</span>
<span class="line">                },</span>
<span class="line">                status: {</span>
<span class="line">                    label: "状态",</span>
<span class="line">                    type: "switch",</span>
<span class="line">                    value: 1,</span>
<span class="line">                    isRequired: false,</span>
<span class="line">                    rules: []</span>
<span class="line">                }</span>
<span class="line">            },</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    methods: {</span>
<span class="line">        changeSwitch(e) {</span>
<span class="line">            console.log('switch 发生 change 事件，携带值为', e.detail.value)</span>
<span class="line">            let value = e.detail.value;</span>
<span class="line">            this.formData.status.value = value ? 1 : 0;</span>
<span class="line">        },</span>
<span class="line">        // 触发提交表单</span>
<span class="line">        submit() {</span>
<span class="line">            console.log('this.formData', this.formData);</span>
<span class="line">            this.$refs.form.validate().then(res => {</span>
<span class="line">                console.log('表单数据信息：', res);</span>
<span class="line"></span>
<span class="line">            }).catch(err => {</span>
<span class="line">                console.log('表单错误信息：', err);</span>
<span class="line">            });</span>
<span class="line">        },</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script></span>
<span class="line"></span>
<span class="line">&lt;style>&lt;/style></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202403/2194212-20240320103422971-1562365268.gif" alt="img"></p>
<p>【注意】第一次进入页面后，要想select无选择时点提交提示“不能为空”，对应的value值要设为 null，否则第一次不会提示“不能为空”！</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202403/2194212-20240320103800979-304616712.gif" alt="img"></p>
</div></template>


