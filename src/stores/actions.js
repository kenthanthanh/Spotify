export default {
  play({ commit }, track) {
    commit("play", { track });
  },
  pause({ commit }) {
    commit("pause");
  },
  next({ commit }) {
    const tracks = this.getters.getTracks;

    commit("next", tracks);
  },
  prev({ commit }) {
    commit("prev");
  },
  random({ commit }) {
    commit("random");
  },
  repeat({ commit }) {
    commit("repeat");
  },
  onTimeUpdate({ commit }) {
    commit("onTimeUpdate");
  },
};
