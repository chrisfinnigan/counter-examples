<template>
  <div class="home">
    <!-- Counter With Configurable Actions and Getters : Outputting Integer Counter Value -->
    <card 
      :header='"Dynamic Vuex Store Key, Actions and Getter Passed As Props"' 
      :theme='"light"'
    >
      <counterDynamic 
        :storeKey='"counterA"'
        :by='50' 
        :duration='100'
        :counterGetter='"getCounterAInteger"'
        :incrementAction='"asyncIncrement"'
        :decrementAction='"asyncDecrement"'
      />
    </card>

     <!-- Counter With Configurable Actions and Getters : Outputting Binary Counter Value -->
    <card 
      :header='"Dynamic Vuex Store Key, Actions and Getter Passed As Props"' 
      :theme='"light"'
    >
      <counterDynamic 
        :storeKey='"counterB"'
        :by='100' 
        :duration='100'
        :counterGetter='"getCounterBBinary"'
        :incrementAction='"asyncIncrement"'
        :decrementAction='"asyncDecrement"'
      />
    </card>

    <!-- Displaying the Actual Vuex State Value -->
     <card 
      :header='"State Dump"' 
      :theme='"dark"'
    >
      <stateDump/>
    </card>
    
  </div>
</template>

<script>
  import card from '@/components/card.vue'
  import counterDynamic from '@/components/counterDynamic.vue'
  import stateDump from '@/components/stateDump.vue'

  export default {
    name: 'CountersView',
    components: {
      card,
      counterDynamic,
      stateDump
    }
  }
</script>
