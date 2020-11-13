<template>
  <div class="container-fluid">
    <Modal v-if="showModal" :product="$store.state.selectedProduct"/>
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import { Http } from './services/Http';
import { ProductModel } from './models/ProductModel';
import Header from './components/Header.vue';
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  data() {
    return {}
  },
  created() {
    // Object destructuring

    // const userData = {
    //   FirstName: "Jon",
    //   LastName: "Doe",
    //   Age: 38,
    //   City: "London",
    //   Profession: "Web Developer"
    // };
    //
    // const {FirstName, LastName} = userData;
    // console.log(FirstName, LastName);
    const http = new Http();
    http.getProducts()
        .then((resp) => {
          //@TODO insert product data in store
          const categories = new Set();
          const products = resp.data.map(p => {
            categories.add(p.category);
            return new ProductModel(p);
          });
          this.$store.dispatch('setProducts', { products, categories });
        })
        .catch((err) => {
          console.log(err);
        })

    // Populate cart from local storage if any
    const storageCart = localStorage.getItem('cart');
    if (storageCart) {
      this.$store.commit('fillCartFromLocalStorage', JSON.parse(storageCart));
    }
  },
  computed: {
    showModal() {
      return this.$store.state.selectedProduct !== null;
    }
  },
  components: {
    Header,
    Modal
  }
}
</script>
