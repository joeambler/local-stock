<template>
  <div class="list-group">
    <div v-on:click="changeStock" v-for="stockItem in stock" :key="stockItem.id" class="list-group-item list-group-item-action">
        <p>{{ stockItem.name }} 
          <span v-if="stockItem.stockLevel == 0" class="stock-item badge badge-pill badge-danger">No Stock</span>
          <span v-else-if="stockItem.stockLevel == 1" class="stock-item badge badge-pill badge-warning">Very Low Stock</span>
          <span v-else-if="stockItem.stockLevel == 2" class="stock-item badge badge-pill badge-warning">Low Stock</span>
          <span v-else-if="stockItem.stockLevel == 3" class="stock-item badge badge-pill badge-success">In Stock</span>
          <span v-else-if="stockItem.stockLevel == 4" class="stock-item badge badge-pill badge-success">Highly Stocked</span>
        </p>
    </div>
  </div>
</template>

<script lang="ts">
import {Stock} from "../models/StockItem"
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ShopStockPreviewComponent extends Vue {
  @Prop() private shop!: any;
  changeStock(e: any): void {
    e.stopPropagation();
    alert("Change Stock");
  }
  private stock = [
    new Stock.StockItem(0, "Eggs", Stock.StockLevel.VERY_LOW),
    new Stock.StockItem(0, "Toilet Roll", Stock.StockLevel.NORMAL),
    new Stock.StockItem(0, "Bread Flour", Stock.StockLevel.OUT_OF_STOCK)
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stock-item {
  float: right;
}
</style>
