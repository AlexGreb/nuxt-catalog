<script setup>
  import { onBeforeRouteLeave } from 'vue-router';
  import {useBrandsStore} from "../../stores/brands.js";
  const brandsStore = useBrandsStore();
  onBeforeRouteLeave(() => {
    brandsStore.resetSelectedBrands();
  })
</script>

<template xmlns="http://www.w3.org/1999/html">
  <div class="grid md:grid-cols-[250px__1fr] gap-7">
      <BrandList/>
      <ProductList/>
    </div>
</template>

