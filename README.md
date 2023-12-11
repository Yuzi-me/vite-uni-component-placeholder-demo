# vite-uni-component-placeholder

[![npm](https://img.shields.io/npm/v/vite-uni-component-placeholder.svg)](https://www.npmjs.com/package/vite-uni-component-placeholder)
[![npm](https://img.shields.io/npm/dm/vite-uni-component-placeholder.svg)](https://www.npmjs.com/package/vite-uni-component-placeholder)
[![npm](https://img.shields.io/npm/dt/vite-uni-component-placeholder.svg)](https://www.npmjs.com/package/vite-uni-component-placeholder)
[![npm](https://img.shields.io/npm/l/vite-uni-component-placeholder.svg)](https://github.com/Yuzi-me/vite-uni-component-placeholder/issues)
<br/>
<br/>

# 🛟 问题

目前 uniapp 未能对分包异步化做出更好的解决方案，虽说可以在 pages.json 中配置，但未能得到更明显，更灵活的效果。😇 随着项目业务增加，主包必定会有过大的情况，所以需要对项目进行分包处理。当编写的组件不能灵活调用到分包中的话，就会面临着组件也会 build 到主包中，超出各个厂家规定。🚫

# 📖 简介

此插件能够解决 uniapp 分包后，异步化调用组件，能够运用到主包、分包中随便怎么调用。同样，我们可以把组件单独作为一个分包，这样就可以灵活调用。<br/>

# 🖥 平台支持

目前平台支持 componentPlaceholder 的有：<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/placeholder.html" target="_blank">微信小程序</a>
，<a href="https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/guide/basic-ability/subpackages/async/" target="_blank">抖音小程序</a> 望补充<a href="https://github.com/Yuzi-me/vite-uni-component-placeholder/issues" target="_blank">issues</a>

# 🏕 示例

### vite 版

<a href="https://github.com/Yuzi-me/vite-uni-component-placeholder-demo" target="_blank">vite-uni-component-placeholder-demo</a>

### webpack 版

<a href="https://github.com/Yuzi-me/webpack-uni-component-placeholder-demo" target="_blank">webpack-uni-component-placeholder-demo</a>

# 🛠 安装

```
npm install vite-uni-component-placeholder
```

或

```
yarn add vite-uni-component-placeholder
```

# ⚙️ 配置

找到 vite.config.js 配置插件

```
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import ViteUniComponentPlaceholder from "vite-uni-component-placeholder"; // Add This Line

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    ViteUniComponentPlaceholder()   // Add This Line
  ],
})
```

# ✏️ 使用

## 🥇 No.1

在 vue 中 script 引用组件，例如：/pages/index/index.vue 中

```
<template>
  <view class="container">
    <subtitle>主包调用分包组件</subtitle>
    <card></card>
  </view>
</template>

<script>
// 组件引用
import subtitle from '@/components/subTitle/index'
import card from '@/operate/components/card'

export default {
  // 注册组件
  components: {
    subtitle,
    card
  },
  // 关键一步在这里，异步化组件
  componentPlaceholder: {
    subtitle: 'view',
    card: 'view'
  },
  data() {
    return {}
  },
  onLoad() { },
  methods: { },
};
</script>
```

#### 📌 描述：

如果组件是在当前分包中，可以正常引用。但，如果组件是在其他分包中，引用的话，就会报错。小程序就提供了分包组件异步化，可以直接引用其他分包中的组件。

上面代码是，最关键的一步是，在需要异步化页面中写了 componentPlacholder，将会把这里写的直接生成到小程序 json 中。

<b>subtitle：</b> 组件是在组件分包中，我在这里将所有基础 UI 组件分成了一个包，一样的也要在 componentPlaceholder 中异步化<br/>
<b>card：</b>组件是另外一个分包中的业务组件，也需要 componentPlaceholder 异步化

## 🥈 No.2

自动扫描组件，在 pages.json 中加入

```
"easycom": {
  "autoscan": true,
  "custom": {
    "subtitle": "@/components/subTitle/index"
  }
}
```

然后在页面中异步化注册

```
<template>
  <view class="container">
    <subtitle>调用内部组件</subtitle>
    <card @click="handleBtn" />
  </view>
</template>

<script>
import card from '@/operate/components/card'
export default {
  components: {
    card
  },
  // 关键一步在这里，异步化组件
  componentPlaceholder: {
    subtitle: 'view'
  },
  data() {
    return { }
  },
  methods: { },
};
</script>
```

#### 📌 描述：

上面在页面中，并没有将 subtitle 组件引用，也没有注册，而是通过 <a href="https://uniapp.dcloud.net.cn/collocation/pages.html#easycom" target="_blank">easycom</a> 方式引入。然后我们异步化组件，一样的可以实现效果。

# 🙋🏻‍♂️ 温馨提示

如果您喜欢骆驼峰命名规则，需要注意的是，uniapp 生成 json 文件后，会生成带杆(-)的命名
例如：

```
"subTitle": "@/components/subTitle/index"
```

将会生成以下格式

```
"usingComponents": {
  "sub-title": "../../components/subTitle/index"
}
```

那么，您在 componentPlaceholder 中需要这样写

```
componentPlaceholder: {
  'sub-title': 'view'
}
```

# 🤜🏻 感谢

如果您有更好的方法或者遇到问题，一起研究讨论。请到移步到<a href="https://github.com/Yuzi-me/vite-uni-component-placeholder/issues" target="_blank">issues</a>，感谢您！！🧑‍💻
