<template>
  <div class="cardGrid">
    <ul v-for="data in this.dataMerged" :key="data.id">
      <CardBootstrap :cardTitle="data.title" :cardBody="data.body" :cardUsername="data.username" :cardName="data.name"
        :cardEmail="data.email" />
    </ul>
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
      userDetails: 0,
      dataMerged: [],
    };
  },
  mounted() {
    console.log("FirstPage mounted");
  },
  async created() {
    console.log("FirstPage created")
    this.commentDetails = await this.getCommentDetails()
    this.userDetails = await this.getUserDetails()
    this.mergeData();
  },
  methods: {
    async getCommentDetails() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response.data;
    },
    async getUserDetails() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      return response.data;
    },
    mergeData() {
      console.log(this.commentDetails);
      this.commentDetails.forEach(comment => {
        this.userDetails.forEach(user => {
          if (comment.userId == user.id) {
            this.dataMerged.push(
              {
                "id": comment.id,
                "title": comment.title,
                "body": comment.body,
                "name": user.name,
                "username": user.username,
                "email": user.email
              }
            )
          }
        });
      });
    }
  }
}
</script>

<style>
.cardGrid {
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: center;
}
</style>