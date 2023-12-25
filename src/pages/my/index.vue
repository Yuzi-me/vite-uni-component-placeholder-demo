<template>
  <view class="container">
    <buttons @click="handleBtn">分包调用分包组件</buttons>
  </view>
</template>

<script>
import buttons from '@/components/button/index'
const componentPlaceholder = {
  buttons: 'view'
}
export default {
  components: {
    buttons
  },
  data() {
    return {}
  },
  methods: {
    handleBtn() {
      uni.navigateTo({
        url: '/my/index/index',
        // 带上success的话，在打包h5时，跳转不会报navigateTo:fail Navigation cancelled from " to "" with a new navigation.的错误
        success: res => { }
      })
    }
  },
};
</script>

<style></style>