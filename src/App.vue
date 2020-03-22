<template>
  <div id="app">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <h1>Local Stock</h1>
    
    <ShopListComponent />
  </div>
</template>

<script>
import ShopListComponent from './components/ShopListComponent.vue'

export default {
  name: 'App',
  components: {
    ShopListComponent
  }
}
</script>

<style>

</style>
