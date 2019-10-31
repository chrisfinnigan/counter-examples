<template>
  <div class="home">
    <!-- Counter With Configurable Actions and Getters : Outputting Integer Counter Value -->
    <card 
      :header='"Vuex Store Key, Actions and Getter Passed As Props"' 
      :theme='"light"'
    >
      <counterDynamic 
        :by='50'
        :storeKey='"counterA"'
        :counterGetter='"getCounterA"'
        :incrementAction='"incrementCounterVal"'
        :decrementAction='"decrementCounterVal"'
      />
    </card>

    <!-- Counter With Configurable Actions and Getters : Outputting Binary Counter Value -->
    <card 
      :header='"Vuex Store Key, Actions and Getter Passed As Props"' 
      :theme='"light"'
    >
      <counterDynamic 
        :by='50'
        :storeKey='"counterB"'
        :counterGetter='"getCounterB"'
        :incrementAction='"incrementCounterVal"'
        :decrementAction='"decrementCounterVal"'
      />
    </card>

    <!-- Displaying the Actual Vuex State Value -->
    <card 
      :header='"State Dump"' 
      :theme='"dark"'
    >
      <stateDump />
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
