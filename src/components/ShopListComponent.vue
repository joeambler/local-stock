<template>

<!--Grid row-->
<div class="row d-flex justify-content-center">

  <!--Grid column-->
  <div class="col-md-6 list-group">
    <ShopComponent v-for="shop in shops" :key="shop.id" :shop="shop" />

  </div>
  <!--Grid column-->

</div>
<!--Grid row-->

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
  private shops = [ new Shop(0, "SmartSave", "Hilmarton Road"),  new Shop(0, "Tesco", "Caledonian Road") ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
