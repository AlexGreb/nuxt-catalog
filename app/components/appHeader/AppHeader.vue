<script setup>
  const route = useRoute()
  const isCartPage = computed(() => route.path === '/cart')
</script>

<template>
  <div class="py-4 grid items-center"
       :class="{'grid-cols-[151px__32px] justify-between': !isCartPage, 'justify-center': isCartPage,}">
    <NuxtLink to="/">
      <Logo/>
    </NuxtLink>
    <CartIcon v-if="!isCartPage" class="text-white"/>
  </div>
</template>
