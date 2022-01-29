<template>
  <button :class="`btn btn-${theme}`" :type="type" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
    theme: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style lang="postcss" scoped>
.btn {
  @apply px-5 py-1 rounded transition duration-150 ease-in-out;

  &.btn-primary {
    @apply bg-green-500 text-white;

    &:hover {
      @apply bg-green-600;
    }
  }
}
</style>
