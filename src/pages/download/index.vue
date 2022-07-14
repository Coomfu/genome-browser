<template>
  <div class="download">
    <file-card
      v-for="(item, key) in list_data"
      :key="key"
      :card-data="item"
      class="download-fileCard"
    />
  </div>
</template>

<script>
import {$get} from '@/utils/http'
import fileCard from '@/components/file_card.vue'
export default {
  components: {
    fileCard,
  },
  data() {
    return {
      list_data: [],
    }
  },
  async mounted() {
    const data = await $get('/character')({})
    this.list_data = data.map((item) => {
      return {
        name: item.name,
        image: item.avatar,
        info: item.lb_name + '\n' + item.lb_info,
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.download {
  padding: 50px 100px 50px 100px;
  &-fileCard {
    margin: 10px;
  }
}
</style>
