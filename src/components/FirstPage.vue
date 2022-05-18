<template>
  <div>
    <h1>Hello Main</h1>
    <CardBootstrap />
  </div>
</template>

<script>
import CardBootstrap from '../card/CardBootstrap.vue'

export default {
  name: 'FirstPage',
  components: {
    CardBootstrap,
  }
}
</script>