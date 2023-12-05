<template>
  <view class="container">
    <subTitle>主包调用分包组件</subTitle>
    <card @click="cardClick"></card>
  </view>
</template>

<script>
import subTitle from '@/components/subTitle/index'
import card from '@/operate/components/card'
export default {
  components: {
    subTitle,
    card
  },
  componentPlaceholder: {
    'sub-title': 'view',
    card: 'view'
  },
  data() {
    return {}
  },
  onLoad() { },
  methods: {
    cardClick() {
      uni.navigateTo({
        url: '/operate/index/index',
        // 带上success的话，在打包h5时，跳转不会报navigateTo:fail Navigation cancelled from " to "" with a new navigation.的错误
        success: res => { }
      })
    }
  },
};
</script>

<style>
buttons {
  display: block;
  margin-top: 100px;
}
</style>