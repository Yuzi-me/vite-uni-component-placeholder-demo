<template>
  <view class="card" hover-class="hoverClass" @click="handleCardBtn">
    <image class="logo" src="/static/logo.png"></image>
    <view class="content">
      经营分包Card组件
      <text>Module Operate Card Component</text>
    </view>
    <view class="arrow">→</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() { },
  methods: {
    handleCardBtn() {
      this.$emit('click')
    }
  },
}
</script>

<style lang="scss">
.card {
  background: white;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  gap: 10px;
  font-size: 20px;
  box-shadow: 0px 30px 30px -15px rgba(0, 0, 0, 0.15), 0px -5px 10px 0px rgba(0, 0, 0, 0.05);

  image {
    width: 40px;
    height: 40px;
  }

  view {
    &.content {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    &.arrow {
      font-size: 14px;
      color: #999;
      font-family: system-ui;
    }
  }

  text {
    color: #999;
    font-size: 12px;
    margin-top: 8px;
  }
}
</style>