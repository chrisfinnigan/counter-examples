<template>
  <div :class="classObject">
    <h1>{{header}}</h1>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      header: {
        required: true,
        type: String
      },
      theme: {
        required: true, 
        type: String
      }
    },
    computed: {
      classObject: function () {
        return {
          'card': true,
          ['card-' + this.theme]: true
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .card{
    width: 50%;
    margin: 1rem auto;
    padding: 1rem;
  }

  .card-light {
     border: 1px solid #333;
     background: #ccc;
     color: #222;
  }

  .card-dark {
    border: 3px solid #333;
    background: #222;
    color: #fff;
  }

  h1 {
    margin: 0rem 0rem 1rem 0rem;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    padding: 0rem 0rem 1rem 0rem;
    border-bottom: 1px solid #333;
  }

  button{
    padding: 1rem;
    font-size: 1rem;
    margin: 1rem;
    font-weight: bold;
  }

  .counterOutput{
    font-size: 1rem;
    font-weight: bold;
  }
</style>
