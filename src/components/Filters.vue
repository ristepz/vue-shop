<template>
  <div class="row cat-filters">
    <div class="col-sm-12">
      <h4 class="display-4">Categories</h4>
      <ul class="list-group">
        <li :class="['list-group-item', {'active': selectedCat === c}]"
            @click="selectCat(c)"
            v-for="(c, i) in cats" :key="i">
          {{ c }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      localSelectedCat: null
    };
  },
  computed: {
    cats() {
      return this.$store.state.categories;
    },
    selectedCat() {
      return this.$store.state.selectedCategory;
    }
  },
  methods: {
    selectCat(c) {
      if (c === this.localSelectedCat) {
        this.$store.commit('clearCatFilter');
        return;
      }
      this.$store.commit('setSelectedCat', c);
      this.localSelectedCat = c;
    }
  }
}
</script>

<style scoped>
h4 {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
}

div.cat-filters ul li {
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

div.cat-filters ul li:hover {
  background: #333;
  color: #fff;
}
</style>