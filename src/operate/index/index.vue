<!--
  * @Descripttion: 经营分包
  * @Author: Yuzi
  * @Date: 2023.11.25 17:05
  * @LastEditors: Yuzi
  * @LastEditTime: 2023.11.25 17:05
-->

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
  componentPlaceholder: {
    subtitle: 'view'
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

<style></style>