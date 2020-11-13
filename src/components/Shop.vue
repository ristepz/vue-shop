<template>
  <div class="row">
    <div class="col-sm-3 filters">
      <Filters />
    </div>
    <div class="col-sm-9">
      <div class="row">
        <template v-for="(p, index) in products">
          <Product :product="p"/>
          <div class="w-100" v-if="(index + 1) % 3 === 0"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Product from './Product.vue';
import Filters from "./Filters.vue";

export default {
  name: "Shop",
  computed: {
    products() {
      return this.$store.getters.getProducts;
    }
  },
  components: {
    Product,
    Filters
  }
}
</script>

<style scoped>
</style>