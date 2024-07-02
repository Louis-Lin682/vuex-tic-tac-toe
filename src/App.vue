<template>
  <main class="pt-8 text-center dark:bg-gray-800 min-h-screen dark:text-white">
    <h1 class="mb-8 text-3xl font-bold">井字遊戲</h1>
    <h3 class="text-xl mb-4">玩家 {{ $store.state.player }} 開始 </h3>
    <game-content></game-content>
    <reset-button></reset-button>
  </main>
</template>

<script>
import GameContent from './components/GameContent.vue'
import ResetButton from './components/ResetButton.vue'

export default {
  name: 'App',
  components: {
    ResetButton,
    GameContent
  }
}
</script>

<style>

</style>
