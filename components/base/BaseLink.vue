<template>
  <a v-if="external" class="cursor-pointer" :href="href" v-bind="$attrs">
    <slot />
  </a>

  <nuxt-link v-else class="cursor-pointer" :to="href" v-bind="$attrs">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      required: true,
    },
    external: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
