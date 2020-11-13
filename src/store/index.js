import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      currency: 'EUR',
      products: [],
      selectedProduct: null,
      cart: [],
      categories: [],
      selectedCategory: null,
      showCart: true
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
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    /**
     * Fill from local storage
     * @param state
     * @param payload
     */
    fillCartFromLocalStorage(state, payload) {
      state.cart = payload;
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
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    /**
     * Set product categories
     * @param state
     * @param payload
     */
    setCategories(state, payload) {
      state.categories = payload;
    },
    /**
     * Select category
     * @param state
     * @param payload
     */
    setSelectedCat(state, payload) {
      state.selectedCategory = payload;
    },
    /**
     * Clear category filter
     * @param state
     */
    clearCatFilter(state) {
      state.selectedCategory = null;
    },
    /**
     * Clear cart
     * @param state
     */
    clearCart(state) {
      state.cart = [];
      localStorage.setItem('cart', JSON.stringify([]))
      state.showCart = true
    },
    /**
     * Toggle cart visiblilty
     * @param state
     * @param payload
     */
    toggleCart(state, payload) {
      state.showCart = payload
    }
  },
  actions: {
    /**
     * Fill products action
     * @param commit
     * @param payload
     */
    setProducts({ commit, state }, payload = {}) {
      const { products, categories } = payload;
      commit('setProducts', products);
      commit('setCategories', categories);
    }
  },
  getters: {
    /**
     * Get all products
     * @param state
     * @returns {*[]|[]|(function(): default.computed.$store.getters.getProducts)}
     */
    getProducts(state) {
      if (!state.selectedCategory) {
        return state.products;
      }
      return state.products.filter(p => {
        return p.Category === state.selectedCategory;
      });
    },
    /**
     * Get cart amount
     * @param state
     */
    getTotalCartAmount(state) {
      const total = state.cart.reduce((acc, current) => {
        acc += current.Price * current.quantity;
        return acc;
      }, 0)
      return `${state.currency} ${total.toFixed(2)}`
    }
  }
});