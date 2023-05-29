<template>
  <div class="grid grid-rows-2 grid-cols-2 grid-flow-col gap-4 m-4">
    <div
      v-for="(gameType, index) in gameTypes"
      :key="index"
      class="flex items-center justify-center flex-col"
      @click="goGame(gameType)"
    >
      <img :src="`${gameType.img}`" />
      <p class="mt-2 font-bold">{{ gameType.title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  layout: 'default',
  data() {
    return {
      gameTypes: [
        {
          title: '幸運輪盤',
          img: '/roulette/banner.png',
          components: '/roulette',
        },
        {
          title: '5PK',
          img: '/roulette/banner.png',
          components: '/5pk',
        },
        {
          title: '百家樂',
          img: '/roulette/banner.png',
          components: '/baccarat',
        },
        {
          title: '21點',
          img: '/roulette/banner.png',
          components: '/blackJack',
        },
      ],
    }
  },
  methods: {
    goGame(gameType) {
      const goto = gameType.components
      this.$router.push(goto)
      // this.$router.push('/roulette')
    },
  },
}
</script>
<style scoped>
</style>