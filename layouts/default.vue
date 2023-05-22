<template>
  <client>
    <CustomHeader :currentRoute="currentRoute" />
    <Nuxt />
  </client>
</template>
<script>
import CustomHeader from '~/components/CustomHeader.vue'
export default {
  components: {
    CustomHeader,
  },
  data() {
    return {}
  },
  computed: {
    currentRoute() {
      console.log(this.$route)
      if (this.$route.name === 'index') {
        return '遊戲大廳'
      } else if (this.$route.name === 'roulette') {
        return '幸運輪盤'
      }
      return '遊戲大廳'
    },
  },
  methods: {},
}
</script>
<style scoped>
</style>