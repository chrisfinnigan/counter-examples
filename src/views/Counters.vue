<template>
  <div class="home">
    <!-- Counter with hard coded increment and decrement values -->
    <card 
      :header='"Counter with hard coded increment and decrement values"' 
      :theme='"light"'
    >
      <counter />
    </card>

  
    <!-- Counter With Configurable Actions and Getters : Outputting Integer Counter Value -->
    <card 
      :header='"Counter with variable increment / decrement values passed by prop"' 
      :theme='"light"'
    >
      <counterProps 
        :by='10'
      />
    </card>
  </div>
</template>

<script>
  import card from '@/components/card.vue'
  import counter from '@/components/counter.vue'
  import counterProps from '@/components/counterProps.vue'
  
  export default {
    name: 'CountersView',
    components: {
      card,
      counter,
      counterProps
    }
  }
</script>
