<template>
  <view class="subTitle">
    <slot />
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  onLoad() { },
  methods: {},
}
</script>

<style>
.subTitle {
  font-size: 14px;
  color: #959aad;
  padding-bottom: 20px;
}
</style>