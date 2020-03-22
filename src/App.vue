<template>
  <div id="app">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Local Stock</a>
    </nav>
    <div class="main-content">
      <ShopListComponent />
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ShopListComponent from './components/ShopListComponent.vue';

@Component({
  components: {
    ShopListComponent,
  },
})


export default class App extends Vue {}
</script>

<style>
.main-content {
  margin-top: 2em;
}
</style>
