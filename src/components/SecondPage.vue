<template>
    <div>
        <CardBootstrap v-if="this.ready" :cardTitle="this.dataMerged[0].title" :cardBody="this.dataMerged[0].body"
            :cardUsername="this.dataMerged[0].username" :cardName="this.dataMerged[0].name"
            :cardEmail="this.dataMerged[0].email" />
    </div>
</template>

<script>
import CardBootstrap from '../card/CardBootstrap.vue'
const axios = require('axios').default;

export default {
    props: ['id'],
    components: {
        CardBootstrap,
    },
    data: function () {
        return {
            commentDetails: 0,
            userDetails: 0,
            dataMerged: [],
            ready: false
        };
    },
    mounted() {
        console.log("SecondPage mounted");
    },
    async created() {
        console.log("SecondPage created")
        this.commentDetails = await this.getCommentDetails()
        this.userDetails = await this.getUserDetails()
        this.mergeData();
    },
    methods: {
        async getCommentDetails() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id);
            return response.data;
        },
        async getUserDetails() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
        },
        mergeData() {
            this.userDetails.forEach(user => {
                if (this.commentDetails.id == user.id) {
                    this.dataMerged.push(
                        {
                            "id": this.commentDetails.id,
                            "title": this.commentDetails.title,
                            "body": this.commentDetails.body,
                            "name": user.name,
                            "username": user.username,
                            "email": user.email
                        }
                    )
                }
            });
            this.ready = true
        }
    }
}
</script>