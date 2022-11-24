<template>
<div>{{product}}</div>
  фыв
</template>

<script>
import Store from "@/store";

export default {
  name: "home",
  data() {
    return {
      info: [],
      product: Store.state.product.rows
    }
  },
}
</script>

<style scoped>

</style>