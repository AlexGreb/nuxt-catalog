<script setup>
const brandsStore = useBrandsStore();
await brandsStore.fetchBrands();
const route = useRoute();

brandsStore.setBrandFilterByQuery();
watch(
    () => route.query.brand,
    (newQuery, oldQuery) => {
      if(newQuery !== oldQuery) {
        brandsStore.setBrandFilterByQuery();
      }
    }
);


</script>

<template>
    <Catalog/>
</template>

