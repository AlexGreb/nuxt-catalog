<script setup>
  const cartStore = useCartStore();
</script>

<template>
  <NuxtLink to="/cart"
            class="relative">
    <SvgoIcon name="icon:cart"
              width="34"
              height="34"
              fill="currentColor" />
    <span class="p-1 absolute bottom-0 right-0 box-border w-4 h-4 rounded-full flex justify-center items-center text-xs bg-[#da7800]">
      {{cartStore.getCartItemsCount}}
    </span>
  </NuxtLink>
</template>

