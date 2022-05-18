<template>
  <div>
    <h1>Hello Main</h1>
    <CardBootstrap msg="1" />
    <li v-for="data in this.dummyData" :key="data.id">
      <h1>{{ data.title }}</h1>
    </li>
  </div>
</template>

<script>
import CardBootstrap from '../card/CardBootstrap.vue'
import { dummyData } from './DummyData.js'

export default {
  name: 'FirstPage',
  components: {
    CardBootstrap,
  },
  data: function () {
    return {
      dummyData
    };
  },
  mounted() {
    console.log("MOUNTED");
    console.log(dummyData);
  },
}
</script>