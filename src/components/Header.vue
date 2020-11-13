<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/"><img src="http://localhost:3000/logo.png" style="width: 60px; height: auto;"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <template v-if="$store.state.showCart">
          <span class="cart-icon" @click="toggleCartView()"><i>{{ cart.length }}</i></span>
          <Cart v-show="showCart"/>
        </template>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<script>
import Cart from './Cart.vue';

export default {
  name: "Header",
  data() {
    return {
      showCart: false
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
  },
  methods: {
    toggleCartView() {
      this.showCart = !this.showCart;
    }
  },
  components: {
    Cart
  }
}
</script>

<style scoped>
#vue-cart {
  position: absolute;
  width: 460px;
  top: 86px;
  z-index: 9999;
  transform: translateX(-50%);
  -webkit-box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.52);
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.52);
}

.navbar {
  margin-bottom: 25px;
}

span.cart-icon {
  display: inline-block;
  width: 50px;
  height: 50px;
  background: url('http://localhost:3000/cart-icon.png') center center no-repeat;
  background-size: cover;
  cursor: pointer;
  margin-right: 20px;
  position: relative;
}

span.cart-icon i {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #004eb0;
  color: #fff;
  position: absolute;
  right: -8px;
  top: -8px;
  font-weight: 600;
  font-size: 14px;
  font-style: normal;
  padding: 2px 4px 4px 4px;
  text-align: center;
}
</style>