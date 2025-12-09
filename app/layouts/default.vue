<script setup>
//TODO
const brandsStore = useBrandsStore();
await brandsStore.fetchBrands();
const route = useRoute();

brandsStore.setBrandFilterByQuery();
watch(
    () => route.fullPath,
    (newQuery, oldQuery) => {
      if(newQuery !== oldQuery) {
        brandsStore.setBrandFilterByQuery();
      }
    }
);
</script>

<template>
  <header class="sticky top-0 bg-black border-gray border-b">
    <Container>
      <AppHeader/>
    </Container>
  </header>
  <main class="py-5">
    <Container>
        <slot/>
    </Container>
  </main>
  <footer class="bg-black text-white py-3">
    <Container>
      Copyright
    </Container>
  </footer>
</template>

<style scoped>

</style>
