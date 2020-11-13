<template>
  <div class="row">
    <div class="col">
      <h4 class="display-4">Checkout</h4>
    </div>
    <div class="col-12">
      <Cart :show-checkout-button="false" v-if="!placeCartSuccess"/>
      <p v-if="placeCartSuccess">Order successfully placed.</p>
      <button type="button" class="btn btn-primary btn-lg btn-block"
              @click="placeOrder">Place Order
      </button>
    </div>
  </div>

</template>

<script>
import Cart from '../components/Cart.vue';

export default {
  name: "Checkout",
  data() {
    return {
      placeCartSuccess: false
    }
  },
  created() {
    this.$store.commit('toggleCart', false)
  },
  methods: {
    placeOrder() {
      this.placeCartSuccess = true
      this.$store.commit('clearCart')
    }
  },
  components: {
    Cart
  }
}
</script>

<style scoped>

</style>