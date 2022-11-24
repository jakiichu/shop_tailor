<template>
  <div class="app">
    <nav-bar/>
    <div class=" container">

      <router-view/>

    </div>
  </div>
</template>

<script>
import navBar from "@/components/NavBar";
import Store from "@/store";


export default {
  components: {
    navBar
  },
  name: "App",


  methods: {},
  data() {
    return {
      info: [],
      product: Store.state.product.rows
    }
  },
  beforeMount() {
    Store.state.createProduct()
  }

}
</script>

<style scoped>

</style>