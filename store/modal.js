export const state = () => ({
  pageHasModalOpen: false,
});

export const mutations = {
  isModalOpen(state, isModalOpen) {
    state.pageHasModalOpen = isModalOpen;
  },
};
