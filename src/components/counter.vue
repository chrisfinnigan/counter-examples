<template>
  <div class="counter">
    <button @click='asyncDecrement({by: by, duration: duration, vuexKey: vuexKey})'>-{{by}}</button>
    <span class="counterOutput">{{counter}}</span>
    <button @click='asyncIncrement({by: by, duration: duration, vuexKey: vuexKey})'>+{{by}}</button> 
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'StaticCounter',
    methods: {
      ...mapActions([
        'asyncIncrement',
        'asyncDecrement'
      ])
    },
    computed: {
      ...mapState({
        counter: state => state[this.$prop.vuexKey]
      })
    },
    props: {
      by: Number,
      duration: Number,
      vuexKey: String
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
