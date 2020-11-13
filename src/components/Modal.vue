<template>
  <div class="product-modal">
    <button type="button" @click="closeModal" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="modal-header">
      <h5 class="modal-title">{{ product.Title }}</h5>
    </div>
    <div class="modal-content">
      <img :src="product.Image" style="width: 400px; height: auto;"/>
      <p>{{ product.Desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    product: {
      type: Object,
      default: () => {
      }
    },
  },
  methods: {
    closeModal() {
      this.$store.commit('closeProductDetails');
    }
  }
}
</script>

<style scoped>
.modal {
  display: block !important;
}

div.product-modal {
  width: 60% !important;
  min-height: 400px;
  position: fixed;
  left: 20%;
  top: calc(50% - 200px);
  z-index: 9999;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px #CCC solid;
  -webkit-box-shadow: 0px 0px 18px 8px rgba(0,0,0,0.3) ;
  -moz-box-shadow: 0px 0px 18px 8px rgba(0,0,0,0.3);
  box-shadow: 0px 0px 18px 8px rgba(0,0,0,0.3);
}

div.modal-content {
  border: none !important;
  padding-top: 6px;
}

div.modal-content img {
  display: block;
  width: auto !important;
  height: 250px !important;
  margin: 0 auto;
}
</style>