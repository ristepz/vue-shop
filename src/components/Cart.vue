<template>
  <ul id="vue-cart" class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Cart
      <span class="badge badge-primary badge-pill">{{ cart.length }}</span>
    </li>
    <li class="list-group-item" v-for="(product, index) in cart" :key="index">
      <img :src="product.Image" width="40" height="40"/>
      <h4>{{ product.Title }}</h4>
      <button type="button" @click="removeProduct(product.ID)" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <span class="price" v-html="price(product.Price, product.quantity)"></span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Total: {{totalCartVal}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    cart() {
      return this.$store.state.cart
    },
    totalCartVal(){
      return this.$store.getters.getTotalCartAmount
    }
  },
  methods: {
    price(price, qty) {
      return `<strong>${this.$store.state.currency}</strong> ${price}&nbsp;&nbsp;X&nbsp;&nbsp;${qty}`;
    },
    removeProduct(ID) {
      this.$store.commit('removeFromCart', ID)
    }
  }
}
</script>

<style scoped>
li.list-group-item img {
  float: left;
  margin-right: 6px;
}

li.list-group-item h4 {
  float: left;
  font-size: 14px;
  max-width: 55%;
  transform: translateY(5px);
}

li.list-group-item span.price {
  float: right;
  margin-right: 16px;
  font-size: 14px;
}

li.list-group-item button {
  float: right;
}
</style>