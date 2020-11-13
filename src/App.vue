<template>
  <div class="container-fluid">
    <Modal v-if="showModal" :product="$store.state.selectedProduct"/>
    <Header/>
    <Shop/>
  </div>
</template>

<script>
import { Http } from './services/Http';
import { ProductModel } from './models/ProductModel';
import Shop from './components/Shop.vue';
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
          const products = resp.data.map(p => {
            return new ProductModel(p);
          });
          this.$store.dispatch('setProducts', products);
        })
        .catch((err) => {
          console.log(err);
        })
  },
  computed: {
    showModal() {
      return this.$store.state.selectedProduct !== null;
    }
  },
  components: {
    Shop,
    Header,
    Modal
  }
}
</script>
