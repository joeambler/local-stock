<template>
  <div>
    <ShopComponent v-for="shop in shops" :key="shop.id" :shop="shop" />
  </div>
</template>

<script  lang="ts">
import Shop from "../models/Shop"
import ShopComponent from "./ShopComponent.vue";
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
    ShopComponent,
  },
})
export default class ShopListComponent extends Vue {
  private shops = [ new Shop(0, "SmartSave"), ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
