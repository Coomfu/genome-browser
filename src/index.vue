<template>
  <div class="app-index">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="0">主页</el-menu-item>
      <el-menu-item index="1">数据下载</el-menu-item>
      <el-menu-item index="2">数据展示</el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '0',
    }
  },
  methods: {
    handleSelect(key, path) {
      switch (key) {
        case '0':
          this.$router.replace({name: 'home'})
          break
        case '1':
          this.$router.replace({name: 'download'})
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.app-index {
  width: 100%;
  height: 100%;
}
.el-menu--horizontal {
  padding-left: 50px;
  text-align: right;
}
</style>
