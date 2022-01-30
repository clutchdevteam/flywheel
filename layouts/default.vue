<template>
  <div class="site-wrapper">
    <header>Header</header>

    <main>
      <Nuxt />
    </main>

    <footer>Footer</footer>

    <PortalTarget name="modal"></PortalTarget>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("modal", ["pageHasModalOpen"]),
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
