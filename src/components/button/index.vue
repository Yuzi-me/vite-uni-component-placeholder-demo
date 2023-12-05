<template>
  <button @click="handleBtn">
    <slot /> <text>→</text>
  </button>
</template>

<script>
export default {
  data() {
    return {}
  },
  onLoad() { },
  methods: {
    handleBtn() {
      this.$emit('click')
    }
  },
}
</script>

<style lang="scss">
button {
  height: 45px;
  color: white;
  font-size: 16px;
  background: #0099f3;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui;
  gap: 10px;
  box-shadow: 0px 30px 30px -15px rgba(0, 0, 0, 0.15), 0px -5px 10px 0px rgba(0, 0, 0, 0.05);

  &::after {
    display: none;
  }
}
</style>