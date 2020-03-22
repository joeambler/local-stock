<template>
  <div>
      <h1>{{ shop.name }} </h1>
    
  </div>
</template>

<script lang="ts">
import Shop from "../models/Shop"
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ShopComponent extends Vue {
  @Prop() private shop!: Shop;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
