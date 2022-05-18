<template>
  <div>
    <h1>Hello Main</h1>
    <li v-for="data in this.commentDetails" :key="data.id">
      <CardBootstrap v-bind:msg="data.title" />
    </li>
  </div>
</template>

<script>
import CardBootstrap from '../card/CardBootstrap.vue'
const axios = require('axios').default;

export default {
  name: 'FirstPage',
  components: {
    CardBootstrap,
  },
  data: function () {
    return {
      commentDetails: 0,
    };
  },
  mounted() {
    console.log("MOUNTED");
    this.getData();
  },
  methods: {
    getData() {
      axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        this.commentDetails = response.data;
        console.log(this.commentDetails);
      });
    },
  },
}
</script>