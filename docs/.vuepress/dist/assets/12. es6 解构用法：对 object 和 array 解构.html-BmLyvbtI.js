import{_ as s,c as e,b as a,o as l}from"./app-CfuPOgCv.js";const i={};function t(o,n){return l(),e("div",null,n[0]||(n[0]=[a(`<h1 id="es6-解构用法-对-object-和-array-解构" tabindex="-1"><a class="header-anchor" href="#es6-解构用法-对-object-和-array-解构"><span>es6 解构用法：对 object 和 array 解构</span></a></h1><p>参考文档：《Understanding ECMAScript 6》《深入理解ES6》</p><p><a href="https://book.douban.com/subject/26864806/" target="_blank" rel="noopener noreferrer">https://book.douban.com/subject/26864806/ </a>（英文版+中文版）</p><hr><p>**解构目的：**为了使代码更简单、简洁</p><p>**解构对象：**object 和 array <strong>【注意】</strong></p><ul><li><p><strong>针对对象和数组，使用语法不同。</strong></p></li><li><p><strong>一定要注意同样的符号出现在 = 左边和右边是不同的含义！！</strong></p></li><li><p><strong>解构时必须初始化（let, var, const），否则会报语法错误。</strong></p></li><li><p><strong>object通过属性名访问对象，所以解构时用属性名作为新变量名；数组通过索引访问，所以解构时也只和索引位置有关。</strong></p></li><li><p>解构对象时：</p></li><li><ul><li>原有属性可设置别名，但不可设置默认值（设置了不报错也不启用默认值）</li><li>嵌套解构只新建最内层{ }中的属性名</li><li>冒号后面有{ } 是内层解构，冒号后面直接是变量名字则是别名</li></ul></li><li><p>解构数组时：</p><ul><li>设置的默认值只有指定位置的变量不存在或其值未定义时才起效</li><li>嵌套解构时 = 左边 [ ] 中的变量都存在，但都是单个的值</li><li>用扩展运算符... 可以把剩余的值都放到一个变量中，但这个变量在解构中必须是最后一个变量</li></ul></li></ul><h3 id="一、-对象解构" tabindex="-1"><a class="header-anchor" href="#一、-对象解构"><span>一、 对象解构</span></a></h3><h4 id="_1-1-基础用法" tabindex="-1"><a class="header-anchor" href="#_1-1-基础用法"><span>1.1 基础用法</span></a></h4><p>= 左边用 var, let 或 const 声明，然后一个 { } 包裹要新建的局部变量； = 右边是原始的对象。</p><p>左边用 { } 括起来是解构对象的语法，可以简单理解为右边是对象，所以左边也要是对象。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">        let node = {</span>
<span class="line">            type: &quot;Identifier&quot;,</span>
<span class="line">            name: &quot;foo&quot;</span>
<span class="line">        };</span>
<span class="line">        </span>
<span class="line">        //因为右边是对象，所以左边也要是对象，所以用{}括起来，里面的type、name是原始变量的属性</span>
<span class="line">        let { type, name } = node; </span>
<span class="line">        console.log(type); // &quot;Identifier&quot;</span>
<span class="line">        console.log(name); // &quot;foo&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单独的属性变量已经被定义后，想修改为原始对象的初始值：</p><blockquote><p>type and name are initialized with values when declared, and then two variables with the same names are initialized with different values.</p></blockquote><p>圆括号（）让代码块变成表达式，表达式的值是 = 右侧的值。<strong>对象解构重新赋值时一定要加圆括号（），数组解构重新赋值不用加圆括号（）</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">        let node = {</span>
<span class="line">            type: &quot;Identifier&quot;,</span>
<span class="line">            name: &quot;foo&quot;</span>
<span class="line">        },        // change the values of variables after they’re defined,</span>
<span class="line">        type = &quot;Literal&quot;,</span>
<span class="line">        name = 5;</span>
<span class="line">        // assign different values using destructuring</span>
<span class="line">        ({ type, name } = node);</span>
<span class="line">        console.log(type); // &quot;Identifier&quot;</span>
<span class="line">        console.log(name); // &quot;foo&quot;        </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-解构设置默认值-原有属性不可设置默认值-只有新属性才变量会使用默认值-因为新属性变量时原始对象中不存在的属性" tabindex="-1"><a class="header-anchor" href="#_1-2-解构设置默认值-原有属性不可设置默认值-只有新属性才变量会使用默认值-因为新属性变量时原始对象中不存在的属性"><span>1.2 解构设置默认值（<strong>原有属性不可设置默认值，只有新属性才变量会使用默认值，因为新属性变量时原始对象中不存在的属性</strong>）</span></a></h4><p>如果 = 左边有原始对象没有的属性名，则默认赋 undefined ，设置了默认值则为默认值。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">        let node = {</span>
<span class="line">            type: &quot;Identifier&quot;,</span>
<span class="line">            name: &quot;foo&quot;</span>
<span class="line">        };</span>
<span class="line">        let { type, name, value } = node;//value不设置默认值就是 undefined </span>
<span class="line">        console.log(type); // &quot;Identifier&quot;</span>
<span class="line">        console.log(name); // &quot;foo&quot;</span>
<span class="line">        console.log(value); // undefined</span>
<span class="line">    -- 给新属性赋值和设置默认值</span>
<span class="line">        let node = {</span>
<span class="line">            type: &quot;Identifier&quot;,</span>
<span class="line">            name: &quot;foo&quot;</span>
<span class="line">        };</span>
<span class="line">        let { type, name, value = true } = node;</span>
<span class="line">        console.log(type); // &quot;Identifier&quot;</span>
<span class="line">        console.log(name); // &quot;foo&quot;</span>
<span class="line">        console.log(value); // true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**【注意】**<strong>原有属性可设置别名，但不可设置默认值。（设置了不会报错，但也不会使用默认值，而是使用从解构获取的对象中的值）</strong></p><blockquote><p>When you use a destructuring assignment statement and you specify a local variable with a property name that doesn’t exist on the object, that local variable is assigned a value of undefined.</p><p>You can optionally define a default value to use <strong>when a specified property doesn’t exist.</strong></p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">        let node = {</span>
<span class="line">            type: &quot;Identifier&quot;,</span>
<span class="line">            name: &quot;foo&quot;</span>
<span class="line">        };</span>
<span class="line">        let { type, name } = node;</span>
<span class="line">        console.log(type); // &quot;Identifier&quot;</span>
<span class="line">        console.log(name); // &quot;foo&quot;</span>
<span class="line">        let node = {</span>
<span class="line">            type: &quot;Identifier&quot;,</span>
<span class="line">            name: &quot;foo&quot;</span>
<span class="line">        };</span>
<span class="line">        // 给原有属性设置默认值无效，因为其值不是 null 或 undefined</span>
<span class="line">        let { type, name=&quot;new name&quot; } = node;</span>
<span class="line">        console.log(type); // &quot;Identifier&quot;</span>
<span class="line">        console.log(name); // &quot;foo&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-给原对象中属性起别名" tabindex="-1"><a class="header-anchor" href="#_1-3-给原对象中属性起别名"><span>1.3 给原对象中属性起别名</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">        let node = {</span>
<span class="line">        type: &quot;Identifier&quot;</span>
<span class="line">        };</span>
<span class="line">        // {原属性：别名}</span>
<span class="line">        let { type: localType, name: localName = &quot;bar&quot; } = node;</span>
<span class="line">        console.log(localType); // &quot;Identifier&quot;</span>
<span class="line">        console.log(localName); // &quot;bar&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-嵌套解构" tabindex="-1"><a class="header-anchor" href="#_1-4-嵌套解构"><span>1.4 嵌套解构</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">        let node = {</span>
<span class="line">            type: &quot;Identifier&quot;,</span>
<span class="line">            name: &quot;foo&quot;,</span>
<span class="line">            loc: {</span>
<span class="line">                start: {</span>
<span class="line">                    line: 1,</span>
<span class="line">                    column: 1</span>
<span class="line">                },</span>
<span class="line">                end: {</span>
<span class="line">                    line: 1,</span>
<span class="line">                    column: 4</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">        };</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>针对上面这个嵌套的对象，可以使用嵌套解构，但要注意：<strong>最后新建的本地变量只有最内层解构，外侧的loc变量并不存在！！</strong></p><p>冒号后面有{ } 是内层解构，冒号后面直接是变量名字则是别名。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">        // 此时loc变量不存在，存在的是start变量（解构出的变量是最内层{}）</span>
<span class="line">        let { loc: { start }} = node;</span>
<span class="line">        console.log(start.line); // 1</span>
<span class="line">        console.log(start.column); // 1</span>
<span class="line">        console.log(loc); // 报错 Uncaught ReferenceError: loc is not defined</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嵌套解构使用别名：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">        // 冒号后面有{}是内层解构，冒号后面直接是变量名字则是别名</span>
<span class="line">        let { loc: { start: localStart }} = node;</span>
<span class="line">        console.log(localStart.line); // 1</span>
<span class="line">        console.log(localStart.column); // 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、数组解构" tabindex="-1"><a class="header-anchor" href="#二、数组解构"><span>二、数组解构</span></a></h3><h4 id="_2-1-基础用法" tabindex="-1"><a class="header-anchor" href="#_2-1-基础用法"><span>2.1 基础用法</span></a></h4><p>= 左边用 var, let 或 const 声明，然后一个 [ ] 包裹要新建的局部变量； = 右边是原始数组。</p><p>左边用 [ ] 括起来是解构数组的语法，可以简单理解为右边是数组，所以左边也要是数组。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">        let colors = [ &quot;red&quot;, &quot;green&quot;, &quot;blue&quot; ];</span>
<span class="line">        // Those values are chosen because of their position in the array; </span>
<span class="line">        // the actual variable names could be anything. </span>
<span class="line">        let [ firstColor, secondColor ] = colors;</span>
<span class="line">        console.log(firstColor); // &quot;red&quot;</span>
<span class="line">        console.log(secondColor); // &quot;green&quot;</span>
<span class="line">        // 只要第三个位置的元素值</span>
<span class="line">        let colors = [ &quot;red&quot;, &quot;green&quot;, &quot;blue&quot; ];</span>
<span class="line">        let [ , , thirdColor ] = colors;</span>
<span class="line">        console.log(thirdColor); // &quot;blue&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单独的变量已经被定义后，想修改为原始数组的初始值：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">        // 通过解构获得原始数组的值（无需圆括号（））</span>
<span class="line">        let colors = [ &quot;red&quot;, &quot;green&quot;, &quot;blue&quot; ],</span>
<span class="line">        firstColor = &quot;black&quot;,</span>
<span class="line">        secondColor = &quot;purple&quot;;</span>
<span class="line">        // The only difference is that firstColor and  secondColor have already been defined.</span>
<span class="line">        [ firstColor, secondColor ] = colors; // 数组解构时无需圆括号，对象解构时需要圆括号</span>
<span class="line">        console.log(firstColor); // &quot;red&quot;</span>
<span class="line">        console.log(secondColor); // &quot;green&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-数组解构的妙用-交换变量值" tabindex="-1"><a class="header-anchor" href="#_2-2-数组解构的妙用-交换变量值"><span>2.2 数组解构的妙用：交换变量值</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">        // swapping variables in ECMAScript 6</span>
<span class="line">        let a = 1,</span>
<span class="line">        b = 2;</span>
<span class="line">        // [] 在等号左边是解构，[]在等号右边是数组</span>
<span class="line">        // 一定要注意同样的符号出现在 = 左边和右边是不同的含义！！</span>
<span class="line">        // 解构，第一位置的变量值等于右边数组中索引为0的值，即 已定义的变量a被赋值为[b,a]数组i=0的值，也就是b</span>
<span class="line">        // 同理，变量b被重新赋值为i=1的数组值a</span>
<span class="line">        [ a, b ] = [ b, a ];</span>
<span class="line">        console.log(a); // 2</span>
<span class="line">        console.log(b); // 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-解构时设置默认值" tabindex="-1"><a class="header-anchor" href="#_2-3-解构时设置默认值"><span>2.3 解构时设置默认值</span></a></h4><p>只有当指定位置的属性不存在或其值未定义时，才会使用默认值。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">        let colors = [ &quot;red&quot; ];</span>
<span class="line">        // Array destructuring assignment allows you to specify a default value for any position in the array, too.        // The default value is used when the property at the given position either doesn’t exist or has the value  undefined .</span>
<span class="line">        let [ firstColor, secondColor = &quot;green&quot; ] = colors;</span>
<span class="line">        console.log(firstColor); // &quot;red&quot;</span>
<span class="line">        console.log(secondColor); // &quot;green&quot;    </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-嵌套解构" tabindex="-1"><a class="header-anchor" href="#_2-4-嵌套解构"><span>2.4 嵌套解构</span></a></h4><p>外层解构的新变量也存在，但只会按照索引位置取一个值而不是数组，如果想让最后一个变量是数组，需要使用扩展运算符...</p><blockquote><p>Rest items use the ... syntax to assign the remaining items in an array to a particular variable.</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">        let colors = [ &quot;red&quot;, [ &quot;green&quot;, &quot;lightgreen&quot; ], &quot;blue&quot; ];</span>
<span class="line">        // later</span>
<span class="line">        let [ firstColor, [ secondColor ] ] = colors;</span>
<span class="line">        console.log(firstColor); // &quot;red&quot;</span>
<span class="line">        console.log(secondColor); // &quot;green&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用扩展运算符... 必须是最后一个变量，且后面不能有逗号</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">        let colors = [ &quot;red&quot;, &quot;green&quot;, &quot;blue&quot; ];</span>
<span class="line">        let [ firstColor, ...restColors ] = colors;//restColors 是数组</span>
<span class="line">        console.log(firstColor); // &quot;red&quot;</span>
<span class="line">        console.log(restColors.length); // 2</span>
<span class="line">        console.log(restColors[0]); // &quot;green&quot;</span>
<span class="line">        console.log(restColors[1]); // &quot;blue&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三、混合解构</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    let node = {</span>
<span class="line">        type: &quot;Identifier&quot;,</span>
<span class="line">        name: &quot;foo&quot;,</span>
<span class="line">    loc: {</span>
<span class="line">        start: {</span>
<span class="line">            line: 1,</span>
<span class="line">            column: 1</span>
<span class="line">        },</span>
<span class="line">        end: {</span>
<span class="line">            line: 1,</span>
<span class="line">            column: 4</span>
<span class="line">        }</span>
<span class="line">    },</span>
<span class="line">    range: [0, 3]</span>
<span class="line">    };</span>
<span class="line">    </span>
<span class="line">    let { </span>
<span class="line">        loc: { start },</span>
<span class="line">        range: [ startIndex ]</span>
<span class="line">    } = node;</span>
<span class="line">    </span>
<span class="line">    console.log(start.line); // 1</span>
<span class="line">    console.log(start.column); // 1</span>
<span class="line">    console.log(startIndex); // 0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我觉得这样太复杂了，不过书上写这样十分有效，因为不用遍历整个json结构了。。</p><blockquote><p>This approach is particularly useful for pulling values out of JSON configuration structures without navigating the entire structure.</p></blockquote>`,53)]))}const r=s(i,[["render",t]]),c=JSON.parse('{"path":"/article-web/js/12.%20es6%20%E8%A7%A3%E6%9E%84%E7%94%A8%E6%B3%95%EF%BC%9A%E5%AF%B9%20object%20%E5%92%8C%20array%20%E8%A7%A3%E6%9E%84.html","title":"es6 解构用法：对 object 和 array 解构","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"一、 对象解构","slug":"一、-对象解构","link":"#一、-对象解构","children":[]},{"level":3,"title":"二、数组解构","slug":"二、数组解构","link":"#二、数组解构","children":[]}],"git":{"updatedTime":1749527809000,"contributors":[{"name":"twoflowers","username":"twoflowers","email":"1292548615@qq.com","commits":1,"url":"https://github.com/twoflowers"}],"changelog":[{"hash":"f3b962e68f6ffcb84ea2e07a3893611af691f7e8","time":1749527809000,"email":"1292548615@qq.com","author":"twoflowers","message":"初步完成navbar和sidebar的设置"}]},"filePathRelative":"article-web/js/12. es6 解构用法：对 object 和 array 解构.md"}');export{r as comp,c as data};
