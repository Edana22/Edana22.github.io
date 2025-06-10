<template><div><h1 id="uni-forms的使用-1-4-10版本-基础使用和用v-for和动态绑定展示数据" tabindex="-1"><a class="header-anchor" href="#uni-forms的使用-1-4-10版本-基础使用和用v-for和动态绑定展示数据"><span>uni-forms的使用-1.4.10版本：基础使用和用v-for和动态绑定展示数据</span></a></h1>
<h2 id="【注意版本】" tabindex="-1"><a class="header-anchor" href="#【注意版本】"><span><strong>【注意版本】</strong></span></a></h2>
<p>uni-forms 1.4.0 版本以后，很多用法和原来不一样。我使用的版本是 1.4.10 。</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202403/2194212-20240306125329738-1845559293.png" alt="img"></p>
<h3 id="导入组件后" tabindex="-1"><a class="header-anchor" href="#导入组件后"><span>导入组件后：</span></a></h3>
<ul>
<li>使用<uni-forms>包裹<uni-forms-item>，<uni-forms-item>包裹其她组件，如 uni-easyinput、uni-data-select 和 <code v-pre>uni-app</code> 内置的表单组件；</li>
<li>每个要校验的表单项，不管input还是checkbox，都必须放在<code v-pre>&lt;uni-forms-item&gt;</code>组件中，且一个<code v-pre>&lt;uni-forms-item&gt;</code>组件只能放置一个表单项。</li>
<li>required 只负责显示 * ，不负责校验。必填项需要在校验rules中写  { required: true, errorMessage: '请输入title', }</li>
<li><code v-pre>uni-forms</code> 用 <code v-pre>model</code>属性绑定对象，rules 属性绑定校验规则，如 <uni-forms ref="form" :model="formData" :rules="rules"></uni-forms></li>
<li><code v-pre>uni-forms-item</code> 需要设置 <code v-pre>name</code> 属性为当前字段名，name的值需要和内部组件绑定的属性值相同，如 <uni-forms-item label="学校" name="school" :label-width="100" required> <uni-easyinput v-model="formData.school" /> </uni-forms-item>
https://blog.csdn.net/qq_44792224/article/details/135771630</li>
<li>rules 是对象，用 uni-form-item上绑定的name值（如school）定义一个新对象，属性为 {rules:[ {检验规则} ] } ，如 formRules: { school: { rules: [ { format: &quot;string&quot;, errorMessage: '类型必须是 string', }, ] } }</li>
<li>表单校验时机：<code v-pre>uni-forms 1.4.0</code> 后，只有 <code v-pre>uni-forms</code>上可以配置 <code v-pre>validateTrigger</code>，不再支持单独控制每个子表单的校验时机 <uni-forms ref="form" :model="formData" :rules="formRules" validate-trigger="bind"></uni-forms></li>
</ul>
<h3 id="一个简单的使用例子如下" tabindex="-1"><a class="header-anchor" href="#一个简单的使用例子如下"><span>一个简单的使用例子如下：</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;template></span>
<span class="line">    &lt;view></span>
<span class="line">        &lt;view class="info-container" v-for="item in formData">{{ item }}&lt;/view></span>
<span class="line">        &lt;!-- ----------------------------------------------------------------------- --></span>
<span class="line">        &lt;view class="form-container"></span>
<span class="line">            &lt;uni-forms ref="form" :model="formData" :rules="formRules" validate-trigger="bind"></span>
<span class="line">                &lt;uni-forms-item label="姓名" name="name" label-width="100px" required></span>
<span class="line">                    &lt;uni-easyinput v-model="formData.name" /></span>
<span class="line">                &lt;/uni-forms-item></span>
<span class="line">                &lt;uni-forms-item label="年龄" name="age" :label-width="100" required></span>
<span class="line">                    &lt;uni-easyinput v-model="formData.age" /></span>
<span class="line">                &lt;/uni-forms-item></span>
<span class="line">                &lt;uni-forms-item label="学校" name="school" :label-width="100" required></span>
<span class="line">                    &lt;uni-easyinput v-model="formData.school" /></span>
<span class="line">                &lt;/uni-forms-item></span>
<span class="line">            &lt;/uni-forms></span>
<span class="line">        &lt;/view></span>
<span class="line">    &lt;/view></span>
<span class="line">&lt;/template></span>
<span class="line"></span>
<span class="line">&lt;script></span>
<span class="line">export default {</span>
<span class="line">    data() {</span>
<span class="line">        return {</span>
<span class="line">            formData: {</span>
<span class="line">                name: "姜南",</span>
<span class="line">                age: 28,</span>
<span class="line">                school: "清华大学"</span>
<span class="line">            },</span>
<span class="line">            formRules: {</span>
<span class="line">                name: {</span>
<span class="line">                    rules: [</span>
<span class="line">                        {</span>
<span class="line">                            required: true,</span>
<span class="line">                            errorMessage: '请输入title',</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            minLength: 1,</span>
<span class="line">                            maxLength: 5,</span>
<span class="line">                            errorMessage: '{label}长度在 {minLength} 到 {maxLength} 个字符',</span>
<span class="line">                        },</span>
<span class="line">                    ],</span>
<span class="line">                },</span>
<span class="line">                age: {</span>
<span class="line">                    rules: [</span>
<span class="line">                        {</span>
<span class="line">                            required: true,</span>
<span class="line">                            errorMessage: '请输入age',</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            format: "number",</span>
<span class="line">                            errorMessage: '类型必须是 number',</span>
<span class="line">                        },</span>
<span class="line">                        {</span>
<span class="line">                            minimum: 1,</span>
<span class="line">                            maximum: 100,</span>
<span class="line">                            errorMessage: '年龄必须在 {minimum} 到 {maximum} 之间',</span>
<span class="line">                        },</span>
<span class="line">                    ]</span>
<span class="line">                },</span>
<span class="line">                school: {</span>
<span class="line">                    rules: [</span>
<span class="line">                        {</span>
<span class="line">                            required: true,</span>
<span class="line">                            errorMessage: '请输入school',</span>
<span class="line">                        },</span>
<span class="line">                    ]</span>
<span class="line">                }</span>
<span class="line">            },</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    methods: {</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script></span>
<span class="line"></span>
<span class="line">&lt;style ></span>
<span class="line">.info-container {</span>
<span class="line">    display: inline-block;</span>
<span class="line">    width: 30%;</span>
<span class="line">    text-align: center;</span>
<span class="line">    background-color: antiquewhite;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.form-container {</span>
<span class="line">    padding: 10rpx;</span>
<span class="line">    margin: 10rpx;</span>
<span class="line">    border: 1rpx solid green;</span>
<span class="line">}</span>
<span class="line">/* 有scoped这里不生效 */</span>
<span class="line">.uni-forms-item {</span>
<span class="line">    background-color: yellow;</span>
<span class="line">}</span>
<span class="line">&lt;/style></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202403/2194212-20240306132053357-52413710.gif" alt="img"></p>
<h2 id="在-uni-forms-item-中使用动态绑定数据时" tabindex="-1"><a class="header-anchor" href="#在-uni-forms-item-中使用动态绑定数据时"><span>在 uni-forms-item 中使用动态绑定数据时：</span></a></h2>
<p>官网文档：<a href="https://uniapp.dcloud.net.cn/component/uniui/uni-forms.html#%E5%8A%A8%E6%80%81%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C" target="_blank" rel="noopener noreferrer">https://uniapp.dcloud.net.cn/component/uniui/uni-forms.html#%E5%8A%A8%E6%80%81%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C</a></p>
<ul>
<li>
<p>在 uni-forms-item 上动态绑定 rules
<img src="https://img2024.cnblogs.com/blog/2194212/202403/2194212-20240306152221304-1593143676.png" alt="img"></p>
</li>
<li>
<p>name 需要动态指定，动态表单推荐使用 Array 类型，内容从左到右为绑定值的调用链。['domains',index,'value'] 等同于 dynamicFormData.domains[index].value</p>
<p>需要绑定值的组件的 v-model 也需要动态指定 dynamicFormData.domains[index].value</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202403/2194212-20240306152328899-1302355855.png" alt="img"></p>
</li>
</ul>
<p>动态绑定+for循环时使用的数据如下:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">formData2: {</span>
<span class="line">    name: "",</span>
<span class="line">    value: [</span>
<span class="line">        {</span>
<span class="line">            title: "name",</span>
<span class="line">            value: "张三",</span>
<span class="line">            rules: [</span>
<span class="line">                { 'required': true, errorMessage: '域名项必填' }</span>
<span class="line">            ]</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            title: "age",</span>
<span class="line">            value: 35,</span>
<span class="line">            rules: [</span>
<span class="line">                { 'required': true, errorMessage: '域名项必填' },</span>
<span class="line">                {</span>
<span class="line">                    format: "number",</span>
<span class="line">                    errorMessage: '类型必须是 number',</span>
<span class="line">                },</span>
<span class="line">                {</span>
<span class="line">                    minimum: 1,</span>
<span class="line">                    maximum: 100,</span>
<span class="line">                    errorMessage: '年龄必须在 {minimum} 到 {maximum} 之间',</span>
<span class="line">                },</span>
<span class="line">            ]</span>
<span class="line">        },</span>
<span class="line">        {</span>
<span class="line">            title: "school",</span>
<span class="line">            value: "清华大学",</span>
<span class="line">            rules: [</span>
<span class="line">                { 'required': true, errorMessage: '域名项必填' }</span>
<span class="line">            ]</span>
<span class="line">        }</span>
<span class="line">    ]</span>
<span class="line">}</span>
<span class="line">&lt;uni-forms ref="form" :model="formData2" validate-trigger="bind"></span>
<span class="line">    &lt;uni-forms-item v-for="(item, index) in formData2.value" :key="item.title" :label="item.title" required</span>
<span class="line">        :name="['value', index, 'value']" :rules="item.rules"></span>
<span class="line">        &lt;uni-easyinput v-model="formData2.value[index].value" /></span>
<span class="line">    &lt;/uni-forms-item></span>
<span class="line">&lt;/uni-forms></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>要注意 uni-forms 绑定的对象名和 uni-forms-item 适应的属性名、:name 的顺序、uni-easyinput 使用的属性名！</strong></p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202403/2194212-20240306153945130-1329481067.png" alt="img"></p>
<p>全部代码如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;template></span>
<span class="line">    &lt;view></span>
<span class="line">        &lt;view class="info-container" v-for="item in formData2.value">{{ item.value }}&lt;/view></span>
<span class="line">        &lt;view class="form-container"></span>
<span class="line">            &lt;!-- 注意 :model="formData2" 绑定的必须是对象，不能是数组 --></span>
<span class="line">            &lt;uni-forms ref="form" :model="formData2" validate-trigger="bind"></span>
<span class="line">                &lt;!-- 注意v-for绑定的是 formData2.value  --></span>
<span class="line">                &lt;uni-forms-item v-for="(item, index) in formData2.value" :key="item.title" :label="item.title" required</span>
<span class="line">                    :name="['value', index, 'value']" :rules="item.rules"></span>
<span class="line">                    &lt;!-- 注意 v-model不是从item读取的，是从formData2.value用index读取的，因为要和上层 :name=[] 中的属性对应 --></span>
<span class="line">                    &lt;uni-easyinput v-model="formData2.value[index].value" /></span>
<span class="line">                &lt;/uni-forms-item></span>
<span class="line">            &lt;/uni-forms></span>
<span class="line">        &lt;/view></span>
<span class="line">    &lt;/view></span>
<span class="line">&lt;/template></span>
<span class="line"></span>
<span class="line">&lt;script></span>
<span class="line">export default {</span>
<span class="line">    data() {</span>
<span class="line">        return {</span>
<span class="line">            // 如果所有的input校验规则都一样，uni-forms-item 直接绑定这个rules也可以，用 :rules=testRules 替换 :rules="item.rules"</span>
<span class="line">            testRules: [</span>
<span class="line">                { 'required': true, errorMessage: '域名项必填' }</span>
<span class="line">            ],</span>
<span class="line">            formData2: {</span>
<span class="line">                name: "",</span>
<span class="line">                value: [</span>
<span class="line">                    {</span>
<span class="line">                        title: "name",</span>
<span class="line">                        value: "姜南",</span>
<span class="line">                        rules: [</span>
<span class="line">                            { 'required': true, errorMessage: '域名项必填' }</span>
<span class="line">                        ]</span>
<span class="line">                    },</span>
<span class="line">                    {</span>
<span class="line">                        title: "age",</span>
<span class="line">                        value: 35,</span>
<span class="line">                        // 这里的rules直接从数组层开始写</span>
<span class="line">                        rules: [</span>
<span class="line">                            { 'required': true, errorMessage: '域名项必填' },</span>
<span class="line">                            {</span>
<span class="line">                                format: "number",</span>
<span class="line">                                errorMessage: '类型必须是 number',</span>
<span class="line">                            },</span>
<span class="line">                            {</span>
<span class="line">                                minimum: 1,</span>
<span class="line">                                maximum: 100,</span>
<span class="line">                                errorMessage: '年龄必须在 {minimum} 到 {maximum} 之间',</span>
<span class="line">                            },</span>
<span class="line">                        ]</span>
<span class="line">                    },</span>
<span class="line">                    {</span>
<span class="line">                        title: "school",</span>
<span class="line">                        value: "清华大学",</span>
<span class="line">                        rules: [</span>
<span class="line">                            { 'required': true, errorMessage: '域名项必填' }</span>
<span class="line">                        ]</span>
<span class="line">                    }</span>
<span class="line">                ]</span>
<span class="line">            },</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    methods: {</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line">&lt;/script></span>
<span class="line"></span>
<span class="line">&lt;style></span>
<span class="line">.info-container {</span>
<span class="line">    display: inline-block;</span>
<span class="line">    width: 30%;</span>
<span class="line">    text-align: center;</span>
<span class="line">    background-color: antiquewhite;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.form-container {</span>
<span class="line">    padding: 10rpx;</span>
<span class="line">    margin: 10rpx;</span>
<span class="line">    border: 1rpx solid green;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">.uni-forms-item {</span>
<span class="line">    background-color: yellow;</span>
<span class="line">}</span>
<span class="line">&lt;/style></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202403/2194212-20240306154700875-284230311.gif" alt="img"></p>
<p>假设所有的数据都是必填，除此之外没有别的校验，则可以用一个rules：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">testRules: [</span>
<span class="line">    { 'required': true, errorMessage: '域名项必填' }</span>
<span class="line">]</span>
<span class="line"></span>
<span class="line">&lt;uni-forms ref="form" :model="formData2" validate-trigger="bind"></span>
<span class="line">    &lt;uni-forms-item v-for="(item, index) in formData2.value" :key="item.title" :label="item.title" required</span>
<span class="line">        :name="['value', index, 'value']" :rules="testRules"></span>
<span class="line">        &lt;uni-easyinput v-model="formData2.value[index].value" /></span>
<span class="line">    &lt;/uni-forms-item></span>
<span class="line">&lt;/uni-forms></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p>
<p><img src="https://img2024.cnblogs.com/blog/2194212/202403/2194212-20240306155305066-1047815785.gif" alt="img"></p>
</div></template>


