<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style>
/*每个页面公共css */
page {
  background: #f6f7f8;
}

view {
  line-height: 1;
  box-sizing: border-box;
}

.container {
  padding: 30px;
}

.hoverClass {
  opacity: .5;
}
</style>
