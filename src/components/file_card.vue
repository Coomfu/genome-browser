<template>
  <el-card
    class="fileCard"
    :body-style="{ display: 'flex' }"
  >
    <img :src="cardData.image">
    <div class="fileCard-content">
      <div class="fileCard-content-name">{{ cardData.name }}</div>
      <div class="fileCard-content-info">{{ cardData.info }}</div>
    </div>
    <el-button
      class="fileCard-downloadBtn"
      type="primary"
    >
      download
    </el-button>
  </el-card>
</template>
<script>
export default {
  props: {
    cardData: {
      type: Object,
      default: () => {
        return {
          name: 'fileName',
          image: require('@/assets/logo.png'),
          info: '这是一段描述....',
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.fileCard {
  img {
    width: 138px;
    height: 138px;
    padding: 5px;
  }
  &-content {
    width: 100%;
    text-align: center;
    &-name {
      padding: 5px;
      font-size: 20px;
    }
    &-info {
      white-space: pre-wrap;
      padding: 5px;
      text-align: left;
    }
  }
  &-downloadBtn {
    align-self: end;
  }
}
</style>
