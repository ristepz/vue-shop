<template>
  <div class="col product">
    <div class="prd-image"
         :style="{background: `url(${product.Image}) center center no-repeat`}"
         @click="loadLargeImage(product)"></div>
    <h3 class="product-title" :title="product.Title">{{ productTitle }}</h3>
    <div class="product-price" v-html="price"></div>
    <span class="add-to-cart btn btn-primary btn-lg btn-block" @click="addToCart">Add To Cart</span>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      titleLen: 40
    }
  },
  props: {
    product: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    price() {
      return `<strong>${this.$store.state.currency}</strong> ${this.product.Price}`;
    },
    productTitle() {
      if (this.product.Title.length > this.titleLen) {
        return `${this.product.Title.substr(0, this.titleLen)}...`
      }
      return this.product.Title
    }
  },
  methods: {
    loadLargeImage(product) {
      this.$store.commit('selectProduct', product);
    },
    addToCart(){
      this.$store.commit('addToCart', this.product);
    }
  }
}
</script>

<style scoped>
div.product {
  padding: 4px;
  margin-bottom: 10px;
}

div.prd-image {
  width: 94%;
  height: 300px;
  background-size: auto 100% !important;
  cursor: pointer;
}

h3.product-title {
  font-size: 18px;
  padding: 6px 0 6px 0;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  min-height: 90px;
}

div.product-price {
  text-align: center;
  margin-bottom: 10px;
}

.add-to-cart {
  margin-bottom: 14px;
}
</style>