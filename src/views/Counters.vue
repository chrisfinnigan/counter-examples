<template>
  <div class="home">

    <!-- Counter With Fixed Actions and Getters -->
    <card 
      :header='"Actions and Getter Hard Coded In Component"' 
      :theme='"light"'
    >
      <counterStatic
        :by='5'
        :duration='100'
      />
    </card>

     <!-- Counter With Configurable Actions and Getters : Outputting Integer Counter Value -->
    <card 
      :header='"Actions and Getter Passed As Prop"' 
      :theme='"light"'
    >
      <counterDynamic 
        :by='50' 
        :duration='100'
        :counterGetter='"getCounterInteger"'
        :incrementAction='"asyncIncrement"'
        :decrementAction='"asyncDecrement"'
      />
    </card>

     <!-- Counter With Configurable Actions and Getters : Outputting Binary Counter Value -->
    <card 
      :header='"Actions and Getters Passed As Prop"' 
      :theme='"light"'
    >
      <counterDynamic 
        :by='100' 
        :duration='100'
        :counterGetter='"getCounterBinary"'
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
  import counterStatic from '@/components/counter.vue'
  import counterDynamic from '@/components/counterDynamic.vue'
  import stateDump from '@/components/stateDump.vue'

  export default {
    name: 'CountersView',
    components: {
      card,
      counterStatic,
      counterDynamic,
      stateDump
    }
  }
</script>
