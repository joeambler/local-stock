<template>
  <div v-on:click="togglePreview" class="list-group-item list-group-item-action">
      <h1>{{ shop.name }} </h1>
      <p>{{ shop.address }}</p>
      <ShopStockPreviewComponent v-if="showPreview" :shop="shop" />
  </div>
</template>

<script lang="ts">
import ShopStockPreviewComponent from "./ShopStockPreviewComponent.vue"
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    ShopStockPreviewComponent
  }
})
export default class ShopComponent extends Vue {
  @Prop() private shop!: any;
  private showPreview = false;
  togglePreview(): void {
    this.showPreview = !this.showPreview
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
