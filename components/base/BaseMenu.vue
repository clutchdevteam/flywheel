<template>
  <div>
    <template v-if="menu.submenus">
      <BaseMenuItem :menu="menu" :depth="depth + 1" />
    </template>

    <nuxt-link
      v-else
      :id="menu.title.toLowerCase().replace(' ', '-')"
      :to="menu.link"
    >
      {{ menu.title }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      required: true,
    },
    depth: {
      type: Number,
      required: true,
    },
  },
};
</script>
