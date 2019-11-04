<template>
  <div class="counter">
    <button @click='decrement(by)'>-{{by}}</button>
    <span class="counterOutput">{{count}}</span>
    <button @click='increment(by)'>+{{by}}</button> 
  </div>
</template>

<script>
  export default {
    name: 'CounterProps',
    data: function () {
      return {
        count: 0
      }
    },
    methods: {
      increment (by) {
        this.count = this.count + by
      },
      decrement (by) {
        this.count = this.count - by
      }
    },
    props: {
      by: {
        required: true,
        type: Number
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
