<template>
  <header class="container mx-auto flex justify-between">
    <div class="w-28">
      <BaseLink href="/" :inert="isMobileMenuOpen">
        <BaseImage v-if="logo" :src="logo.filename" :alt="logo.alt" />
      </BaseLink>
    </div>

    <nav>
      <ul class="desktop hidden md:flex space-x-6">
        <li v-for="menu in nav" :key="menu.id">
          <BaseMenu :menu="menu" :depth="0" />
        </li>
      </ul>

      <div class="mobile md:hidden">
        <button
          ref="openButtonRef"
          @click="toggleMobileMenu"
          type="button"
          :inert="isMobileMenuOpen"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <Portal to="mobile-menu">
            <div
              :class="`fixed inset-0 bg-black transition duration-150 ${
                isMobileMenuOpen
                  ? 'bg-opacity-75'
                  : 'bg-opacity-0 pointer-events-none'
              }`"
              :inert="!isMobileMenuOpen"
              @keydown.esc="closeMenu"
            >
              <div
                :class="`flex transform transition-transform duration-150 ease-in-out ${
                  isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`"
              >
                <div>
                  <button
                    class="flex justify-center items-center bg-white rounded-full ml-4 mr-4 mt-4 h-12 w-12"
                    ref="closeButtonRef"
                    @click="closeMenu"
                    type="button"
                  >
                    <span class="sr-only">Close menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  class="flex flex-col justify-between h-screen w-full bg-white"
                >
                  <nav role="navigation">
                    <ul>
                      <li
                        class="py-3 px-4 border-b border-gray-300"
                        v-for="menu in nav"
                        :key="menu.id"
                      >
                        <BaseMenu :menu="menu" :depth="0" />
                      </li>
                    </ul>
                  </nav>

                  <div class="px-3 py-6">
                    <BaseLink href="/">
                      <BaseImage
                        v-if="logo"
                        :src="logo.filename"
                        :alt="logo.alt"
                      />
                    </BaseLink>
                  </div>
                </div>
              </div>
            </div>
          </Portal>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";
import { Portal } from "portal-vue";

export default {
  components: {
    Portal,
  },
  props: {
    nav: {
      type: Array,
      required: true,
    },
    logo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState("global", ["isMobileMenuOpen", "pageHasModalOpen"]),
  },
  methods: {
    async toggleMobileMenu() {
      await this.$store.commit(
        "global/isMobileMenuOpen",
        !this.isMobileMenuOpen
      );
      await this.$nextTick();
      await this.$nextTick();

      this.$refs.closeButtonRef?.focus();
    },
    async closeMenu() {
      await this.$store.commit("global/isMobileMenuOpen", false);
      await this.$nextTick();
      await this.$nextTick();

      this.$refs.openButtonRef?.focus();
    },
  },
};
</script>
