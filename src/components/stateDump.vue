<template>
  <div class="stateDump">
    <div class="stateData">
      {{stateDump}}
    </div>
  </div>
</template>

<script>
  import { mapGetters} from 'vuex'
  export default {
    name: 'stateDump',
    methods: {
    },
    computed: {
      ...mapGetters([
        'stateDump'
      ])
    }
  }
</script>

<style scoped lang="scss">

h1 {
  margin: 0px 0px 20px 0px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 0px 0px 10px 0px;
  border-bottom: 1px solid #333;
}

.stateDump{
  width: 33%;
  margin-bottom: 1rem;
  opacity: 0.8;
  min-height: 100px;
}
.stateData{
  text-align: left;
  font-size: 14px;
}
</style>
