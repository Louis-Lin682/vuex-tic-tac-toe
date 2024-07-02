<template>
  <div class="flex flex-col items-center mb-8">
      <div v-for="(row, x) in $store.state.board" :key="x" class="flex">
        <div v-for="(cell, y) in row" :key="y" @click="makeMove(x, y)" :class="{ 'border': true, 'border-white': true, 'w-20': true, 'h-20': true, 'hover:bg-gray-700': true, 
        'flex items-center justify-center material-icons-outlined text-4xl cursor-pointer': true, 'text-pink-500': cell === 'X',
       'text-blue-400': cell === 'O'}">
        {{ cell === 'X' ? 'close': cell === 'O' ? 'circle' : '' }}
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'GameContent',
  props: {
    
  },
  methods: {
    makeMove(x, y) {
      this.$store.commit('makeMove', { x, y });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
