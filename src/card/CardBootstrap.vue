<template>
    <div>
        <b-card header="Card Header" header-text-variant="light" header-tag="header" header-bg-variant="info"
            title="Title" style="max-width: 20rem;">
            <h1>{{ msg }}</h1>
            <b-card-text>Header and footers variants.</b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'CardBootstrap',
    props: {
        msg: String
    },
      mounted() {
    // console.log("MOUNTED CARD");
    // console.log(this.msg);
  },
}
</script>