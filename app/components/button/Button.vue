<script setup>
  const props = defineProps({
    class: {
      type: String,
      default: ''
    },
  });
</script>

<template>
  <button type="button"
          :class="[props.class]"
          class="wrap-anywhere bg-black text-white break-all text-md px-3 p-2.5">
    <slot />
  </button>
</template>
