<template>
  <div>
      <h1>{{ shop.name }} </h1>
    
  </div>
</template>

<script>
import Shop from "../models/Shop"
export default {
  name: 'ShopComponent',
  props: {
      shop: Shop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
