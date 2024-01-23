export default {
  getData(state) {
    return state.data.data;
  },
  getFilteredData(state) {
    return (state.filteredData = state.filteredData
      ? state.filteredData
      : state.data.data);
  },
  getTracks(state) {
    state.currentPlaylist = state.currentPlaylist
      ? state.currentPlaylist
      : state.data.data[0];
    return state.currentPlaylist.tracks;
  },
  getPlaylist(state) {
    return (state.currentPlaylist = state.currentPlaylist
      ? state.currentPlaylist
      : state.data.data[0]);
  },
  getCurrentTrack(state) {
    return state.currentTrack
      ? state.currentTrack
      : state.data.data[0].tracks[0];
  },
  getVolPercent(state) {
    return state.volume * 100;
  },

  getFilterPlaylist(state) {
    return {
      all: () => state.data.data,
      playlist: () =>
        state.data.data.filter((playlist) => playlist.type === "Playlist"),
      artist: () =>
        state.data.data.filter((playlist) => playlist.type === "Artist"),
      podcast: () =>
        state.data.data.filter((playlist) => playlist.type === "Podcast"),
      current: () =>
        state.data.data.filter(
          (playlist) => playlist.type === state.currentPlaylist
        ),
    };
  },
};
