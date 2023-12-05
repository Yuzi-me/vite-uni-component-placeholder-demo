<!--
  * @Descripttion: 我的分包
  * @Author: Yuzi
  * @Date: 2023.12.02 17:05
  * @LastEditors: Yuzi
  * @LastEditTime: 2023.12.02 17:05
-->

<template>
  <view class="container">
    <subtitle>分包调用分包组件</subtitle>
    <card @click="handleBtn" />
  </view>
</template>

<script>
import card from '@/operate/components/card'
export default {
  components: {
    card
  },
  componentPlaceholder: {
    subtitle: 'view',
    card: 'view'
  },
  data() {
    return {
      message: 'Hello Word',
    }
  },
  methods: {
    handleBtn() {
      uni.showToast({
        title: '没有跳转',
        icon: 'none',
        duration: 2000
      });
    }
  },
};
</script>