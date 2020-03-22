<template>
  <div>
    <ShopComponent v-for="shop in shops" :key="shop.id" :shop="shop" />
  </div>
</template>

<script>
import ShopComponent from "./ShopComponent";
import Shop from "../models/Shop"

export default {
  name: "ShopListComponent",
  data: function() {
    return {
      shops: [ new Shop(0,"SmartSave") ]
    }
  },
  props: {},
  components: {
    ShopComponent
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
