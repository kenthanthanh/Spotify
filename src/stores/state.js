import data from "../assets/data/data.json";
const filters = {
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
export default {
  filters,
  data,
  filteredData: null,
  currentFilter: null,
  currentPlaylist: null,
  currentTrack: null,
  currentIndex: null,
  isRandom: false,
  isPlaying: false,
  isRepeat: false,
  volume: 1,
  audio: null,
  isSelectFilter: false,
};
