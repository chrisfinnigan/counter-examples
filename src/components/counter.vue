<template>
  <div class="counter">
    <button @click='decrement()'>-1</button>
    <span class="counterOutput">{{count}}</span>
    <button @click='increment()'>+1</button> 
  </div>
</template>

<script>
  export default {
    name: 'Counter',
    data: () => {
      return {
        count: 0
      }
    },
    methods: {
      increment() {
        this.count++
      },
      decrement() {
        this.count--
      }
    }
  }
</script>

<style scoped lang="scss">
  .counter{
    min-width: 33%;
    margin: auto auto;
  }

  button{
    padding: 15px;
    font-size: 16px;
    margin: 15px;
    font-weight: bold;
  }

  .counterOutput{
    font-size: 16px;
    font-weight: bold;
  }
</style>
