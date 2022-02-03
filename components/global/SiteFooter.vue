<template>
  <footer>
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <BaseImage
          :src="footerContent.logo.filename"
          :alt="footerContent.logo.alt"
        />
      </div>

      <nav>
        <ul class="flex space-x-4">
          <li v-for="menu in footerContent.footerNav" :key="menu.id">
            <BaseLink :href="menu.slug.cached_url">{{ menu.title }}</BaseLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    footerContent: {
      type: Object,
      required: true,
    },
  },
};
</script>
