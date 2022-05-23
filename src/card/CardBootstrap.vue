<template>
    <div>
        <b-card :header="cardUsername" header-text-variant="light" header-tag="header" header-bg-variant="info"
            :footer="cardEmail" footer-tag="footer" footer-bg-variant="info" footer-border-variant="light"
            footer-text-variant="light" :title="cardTitle" style="max-width: 20rem;">
            <b-card-text> {{ cardBody }} </b-card-text>
            <b-card-text> {{ cardName }} </b-card-text>

        </b-card>
    </div>
</template>

<script>
export default {
    name: 'CardBootstrap',
    props: {
        cardTitle: String,
        cardBody: String,
        cardUsername: String,
        cardName: String,
        cardEmail: String
    },
    mounted() {
    },
}
</script>