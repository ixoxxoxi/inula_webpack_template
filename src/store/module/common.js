import { createStore } from 'openinula';

const useCommonStore = createStore({
  id: 'number',
  state: {
    num: 1,
  },
  actions: {
    add(state, payload) {
      state.num += payload;
    },
  },
  computed: {
    double(state) {
      return state.num * 2;
    },
  },
});

export default useCommonStore;
