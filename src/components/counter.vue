<template>
  <div class="counter">
    <button @click='asyncDecrement({by: by, duration: duration})'>-{{by}}</button>
    <span class="counterOutput">{{getCounterInteger}}</span>
    <button @click='asyncIncrement({by: by, duration: duration})'>+{{by}}</button> 
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'StaticCounter',
    methods: {
      ...mapActions([
        'asyncIncrement',
        'asyncDecrement'
      ])
    },
    computed: {
      ...mapGetters([
        'getCounterInteger',
        'stateDump'
      ])
    },
    props: {
      by: Number,
      duration: Number,
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
