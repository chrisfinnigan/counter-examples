<template>
  <div class="counter">
    <button @click="decrementCounter">-{{by}}</button>
    <span class="counterOutput">{{counter}}</span>
    <button @click="incrementCounter">+{{by}}</button>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: "dynamicCounter",
    methods: {
      incrementCounter() {
        try {
          //This allows us to dynamically set the action to be called with value in prop `incrementAction`
          this.$store.dispatch(this.incrementAction, {
            by: this.by,
            duration: this.duration,
            storeKey: this.storeKey
          });
        } catch (error) {
          console.log(error)
        }
      },
      decrementCounter() {
        try {
          //This allows us to dynamically set the action to be called by each button click `decrementAction`
          this.$store.dispatch(this.decrementAction, {
            by: this.by,
            duration: this.duration,
            storeKey: this.storeKey
          });
        } catch (error) {
          console.log(error)
        }
      }
    },
    computed: {
      ...mapState({
        stateDump: state => state
      }),
      counter() {
        //This allows us to dynamically set the action to be called by each button click
        return this.$store.getters[this.counterGetter];
      }
    },
    props: {
      by: Number,
      duration: Number,
      incrementAction: String,
      decrementAction: String,
      counterGetter: String,
      storeKey: String
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .counter{
    min-width: 33%;
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
