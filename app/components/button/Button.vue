<script setup>
  const props = defineProps({
    class: {
      type: String,
      default: ''
    },
    onClick: {
      type: Function,
      default: null
    }
  });
</script>

<template>
  <button type="button"
          :class="[props.class]"
          @click="onClick"
          class="wrap-anywhere bg-black text-white break-all text-md px-3 p-2.5">
    <slot />
  </button>
</template>
