<template>
  <h2 v-if="$store.state.winner" class="text-6xl font-bold mb-8">玩家 "{{ $store.state.winner }}" 勝利!</h2>
  <button @click="resetGame" class="px-4 py-2 bg-pink-500 rounded font-bold hover:bg-pink-600 duration-300">重新開始</button>
</template>

<script>
export default {
  name: 'ResetButton',
  props: {
    
  },
  methods: {
    resetGame() {
      this.$store.commit('resetGame')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
