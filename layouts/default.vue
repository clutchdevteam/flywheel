<template>
  <div class="site-wrapper">
    <SiteHeader :nav="mainNav" :logo="logo" :inert="hasOpenMenu" />

    <main :inert="hasOpenMenu">
      <Nuxt />
    </main>

    <SiteFooter :footer-content="footer" :inert="hasOpenMenu" />

    <PortalTarget name="modal"></PortalTarget>
    <PortalTarget name="mobile-menu"></PortalTarget>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("global", [
      "pageHasModalOpen",
      "isMobileMenuOpen",
      "mainNav",
      "logo",
      "footer",
    ]),
    hasOpenMenu() {
      return this.pageHasModalOpen || this.isMobileMenuOpen;
    },
  },
};
</script>

<style lang="postcss" scoped>
body {
  overflow-x: hidden;
  margin: 0;
}

.site-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header,
footer {
  flex-grow: 0;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
</style>
