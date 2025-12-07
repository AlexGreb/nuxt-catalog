<script setup>
const brandsStore = useBrandsStore();
await brandsStore.fetchBrands();
const route = useRoute();

brandsStore.setBrandFilterByQuery();
watch(
    () => route.query,
    (newQuery, oldQuery) => {
      if(newQuery.brand !== oldQuery.brand) {
        brandsStore.setBrandFilterByQuery();
      }
    }
);


</script>

<template>
    <Catalog/>
</template>

