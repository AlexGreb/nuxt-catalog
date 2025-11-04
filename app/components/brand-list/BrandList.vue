<script setup>
  const brandsStore = useBrandsStore();
  await brandsStore.fetchBrands();
</script>

<template>
  <article class="pt-7">
    <h2 class="text-lg mb-3 mt-4 font-bold">Brands</h2>
    <ul class="list-none p-0 m-0 flex md:grid overflow-auto gap-2">
      <li class="shrink-0"
          v-for="brand in brandsStore.brands"
          :key="brand.id">
        <FilterLabel :is-selected="brandsStore.selectedBrandsId.has(brand.id)"
                     @click="() => brandsStore.toggleSelectedBrand(brand.id)">
          {{brand.title}}
        </FilterLabel>
      </li>
    </ul>
  </article>
</template>
