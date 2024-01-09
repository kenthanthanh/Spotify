export default {
  getSongs(state) {
    return state.songs;
  },
  getPlayer(state) {
    return state.player;
  },
  getCurrentIndex(state) {
    return state.currentIndex;
  },
  getTimeProgress(state) {
    return state.timeProgress;
  },
  isPlaying(state) {
    return state.isPlaying;
  },
  isRandom(state) {
    return state.isRandom;
  },
  isRepeat(state) {
    return state.isRepeat;
  },
  getVolume(state) {
    return state.volume;
  },
};
