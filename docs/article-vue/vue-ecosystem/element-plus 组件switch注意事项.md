# element-plus 组件switch注意事项

## 参考文档

[1] [Switch 开关 | Element Plus](https://element-plus.org/zh-CN/component/switch.html)

## 起因

某个项目的一个页面中要使用到 element-plus 的 switch 组件，但是出现一个问题，一旦使用 switch，绑定的变量就会全变成 0；不用 switch 绑定数据时页面显示的数据则正常。

### 错误截图如下：

![image-20250528152539692](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20250528152539692.png)

### 错误代码及示例如下：

```vue
<script setup>
import { ref } from 'vue';
const list = ref(null);
list.value = [
    {
        name: "小黄鸭",
        online: 1
    },
    {
        name: "小恐龙",
        online: 1
    },
    {
        name: "小兔子",
        online: 0
    },
    {
        name: "小蝴蝶",
        online: 0
    }
];
</script>

<template>
    <h1>element-plus switch使用注意点</h1>
    <div>{{ list }}</div>
    <hr>
    <div v-for="item in list">
        <span>{{ item.name }}</span>
        <el-switch v-model="item.online" active-value="1" inactive-value="0" />
    </div>
</template>
```

## 错误原因

> 官网文档中写了 **` v-model 支持 boolean / string / number， 必须等于 active-value 或 inactive-value`**
>
> ![image-20250528145114344](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20250528145114344.png)

来观察错误代码：

```vue
<el-switch v-model="item.online" active-value="1" inactive-value="0" />
```

注意：

1.   `active-value="1" inactive-value="0"` 后面绑定的都是**字符串**
2.  `online: 1` 这里的 `1` 是数字，`online: 0` 这里的 `0` 也是数字
3. ` :active-value="1"  :inactive-value="0"`   才是绑定数字 `1` 和 `0`
4. **` v-model="value"` 中 `value `必须等于 `active-value` 或 `inactive-value`**
5. ` v-model="value"` 中 `value `先和 `active-value` 比较，相等就打开，否则就是关闭状态

### 先说switch为什么都关闭：

-  `online: 1` 这里的 `1` 是数字，而 `active-value="1"` 是和**字符串**判断
- 在这个组件中判断 **数字1和字符串1** **不相等**，也就是` item.online != active-value`，所以` el-switch` 是关闭状态

### 然后是为什么 {{list}} 显示的 online 是 0 

-  `v-model`是双向绑定，它可以修改`item.online`的值

- **` v-model="value"` 中 `value `必须等于 `active-value` 或 `inactive-value`** 
- 此时的 `item.online` 不等于 `active-value`，所以变成了 `inactive-value ` 的值

- 又因为  `active-value="1" inactive-value="0"` 后面绑定的都是字符串，所以 `value`，也就是` item.online` 的值变成了字符串
- ![image-20250528144728096](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20250528144728096.png)

- 仔细看这里的 0 不是数字 `0`，而是字符串 `"0"`

关于 `value `不等于 `active-value` 就会被赋值为 `inactive-value `可以用代码测试

```vue
 <el-switch v-model="item.online" active-value="1" inactive-value="2" />
```

![image-20250528165519448](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20250528165519448.png)

## 正确写法

 `active-value` 和 `inactive-value` 前加 ` : ` 绑定数字而不是字符串

```html
<template>
    <h1>element-plus switch使用注意点</h1>
    <div>{{ list }}</div>
    <hr>
    <div v-for="item in list">
        <span style="padding-right: 10px;">{{ item.name }}</span>
        <el-switch v-model="item.online" :active-value="1" :inactive-value="0" />
    </div>
</template>
```

![image-20250528152145951](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20250528152145951.png)



