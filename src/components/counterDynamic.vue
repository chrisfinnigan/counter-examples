<template>
  <div class="counter">
    <button @click="decrementCounter">-{{by}}</button>
    <span class="counterOutput">{{counter}}</span>
    <button @click="incrementCounter">+{{by}}</button>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "dynamicCounter",
    methods: {
      incrementCounter() {
        //This allows us to dynamically set the action to be called with value in prop `incrementAction`
        this.$store.dispatch(this.incrementAction, {
          by: this.by,
          duration: this.duration
        });
      },
      decrementCounter() {
        //This allows us to dynamically set the action to be called by each button click `decrementAction`
        this.$store.dispatch(this.decrementAction, {
          by: this.by,
          duration: this.duration
        });
      }
    },
    computed: {
      ...mapGetters(["stateDump"]),
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
      counterGetter: String
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
