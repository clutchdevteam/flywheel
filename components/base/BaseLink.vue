<template>
  <a class="cursor-pointer" :href="href" v-bind="$attrs">
    <slot />
  </a>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      required: true,
    },
  },
};
</script>
