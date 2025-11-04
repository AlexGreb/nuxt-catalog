<script setup>
  const props = defineProps({
    class: {
      type: String,
      default: ''
    },
    isSelected: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      default: null
    }
  });
</script>

<template>
  <button type="button"
          :class="{'bg-black text-white': props.isSelected, 'bg-white text-black': !props.isSelected }"
          @click="onClick"
          class="wrap-anywhere w-full block break-all border text-md border-gray px-3 py-2">
    <slot/>
  </button>
</template>
