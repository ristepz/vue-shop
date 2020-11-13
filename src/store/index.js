import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      currency: 'EUR',
      products: [],
      selectedProduct: null,
      cart: []
    };
  },
  mutations: {
    /**
     * Fill products
     * @param state
     * @param payload
     */
    setProducts(state, payload = []) {
      state.products = payload;
    },
    /**
     * Select active product
     * @param state
     * @param payload
     */
    selectProduct(state, payload) {
      state.selectedProduct = payload;
    },
    /**
     * Close modal mutation
     * @param state
     */
    closeProductDetails(state) {
      state.selectedProduct = null;
    },
    /**
     * Add to cart
     * @param state
     * @param payload
     */
    addToCart(state, payload) {
      state.cart.push(payload);
    },
    /**
     * Remove from cart
     * @param state
     * @param payload
     */
    removeFromCart(state, payload) {
      const productIndex = state.cart.findIndex(c => {
        return c.ID === payload;
      })
      state.cart.splice(productIndex, 1);
    }
  },
  actions: {
    /**
     * Fill products action
     * @param commit
     * @param payload
     */
    setProducts({ commit }, payload = []) {
      commit('setProducts', payload);
    }
  },
  getters: {
    /**
     * Get all products
     * @param state
     * @returns {*[]|[]|(function(): default.computed.$store.getters.getProducts)}
     */
    getProducts(state) {
      return state.products;
    },
    /**
     * Get cart amount
     * @param state
     */
    getTotalCartAmount(state){
      const total = state.cart.reduce((acc, current)=>{
        acc += current.Price;
        return acc;
      }, 0)
      return `${state.currency} ${total.toFixed(2)}`
    }
  }
});