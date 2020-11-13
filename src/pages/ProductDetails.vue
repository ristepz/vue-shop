<template>
  <div class="row">
    <div class="media">
      <img :src="product.Image" class="align-self-start mr-3" style="width: 500px; height: auto; padding: 25px;"/>
      <div class="media-body">
        <h5 class="display-4">{{ product.Title }}</h5>
        <a href="#" class="badge badge-primary">{{ product.Category }}</a><br/><br/>
        <p>{{ product.Desc }}</p>
        <h5 class="display-4"><strong>{{ $store.state.currency }}</strong> {{ product.Price }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  computed: {
    product() {
      const productName = this.$route.params.productName;
      const selectedProduct = this.$store.getters.getProducts.filter(p => {
        return p.Title === productName
      })
      if (selectedProduct.length === 1) {
        return selectedProduct[0]
      }
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>