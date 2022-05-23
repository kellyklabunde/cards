<template>
    <div class="showCard">
        <div>
            <CardBootstrap v-if="this.isModalVisible" :cardTitle="this.dataMerged[0].title"
                :cardBody="this.dataMerged[0].body" :cardUsername="this.dataMerged[0].username"
                :cardName="this.dataMerged[0].name" :cardEmail="this.dataMerged[0].email" />
        </div>
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
            isModalVisible: false,
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
            console.log('https://jsonplaceholder.typicode.com/posts/' + this.id)
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + this.id);
            console.log(response.data)
            return response.data;
        },
        async getUserDetails() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
        },
        mergeData() {
            this.userDetails.forEach(user => {
                if (this.commentDetails.userId == user.id) {
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
            this.isModalVisible = true
        },
    }
}
</script>

<style>
.showCard {
    background-color: rgba(199, 199, 199, 0.336);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.showCard button {
    cursor: pointer;

}
</style>