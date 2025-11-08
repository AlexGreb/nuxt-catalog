<script setup>
  const props = defineProps({
    isSelected: {
      type: Boolean,
      default: false
    }
  });
</script>

<template>
  <button type="button"
          :class="{'bg-black text-white': props.isSelected, 'bg-white text-black': !props.isSelected }"
          class="wrap-anywhere w-full block break-all border text-md border-gray px-3 py-2">
    <slot/>
  </button>
</template>
