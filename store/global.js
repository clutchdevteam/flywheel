export const state = () => ({
  isMobileMenuOpen: false,
  pageHasModalOpen: false,
});

export const mutations = {
  isMobileMenuOpen(state, isMenuOpen) {
    state.isMobileMenuOpen = isMenuOpen;
  },
  isModalOpen(state, isModalOpen) {
    state.pageHasModalOpen = isModalOpen;
  },
};
