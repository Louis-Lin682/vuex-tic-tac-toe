<template>
  <h2 v-if="$store.state.gameWon" class="text-6xl font-bold mb-8">玩家 "{{ $store.state.gameWon }}" 總勝利!</h2>
  <h2 v-else-if="$store.state.winner" class="text-6xl font-bold mb-8">玩家 "{{ $store.state.winner }}" 勝利!</h2>
  <div class="gflex space-x-4">
    <button @click="resetGame" class="px-4 py-2 bg-pink-500 rounded font-bold hover:bg-pink-600 duration-300">重新開始</button>
    <button @click="nextRound" :disabled="$store.state.gameWon || !$store.state.gameStarted" :class="['px-4 py-2 bg-sky-500 rounded font-bold hover:bg-sky-600 duration-300',
      {'cursor-not-allowed': $store.state.gameWon || !$store.state.gameStarted}]">下一局</button>
  </div>
</template>

<script>
export default {
  name: 'ResetButton',
  props: {
    
  },
  methods: {
    resetGame() {
      this.$store.commit('resetGame')
    },
    nextRound() {
      this.$store.commit('nextRound')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
