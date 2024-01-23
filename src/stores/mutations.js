export default {
  // do nó chuyển từ audio object -> local storage -> empty object
  // chuyển lại vuex -> empty object -> src= undefined
  // log ra object với attr là undefined
  initialStorage(state) {
    if (localStorage.getItem("store")) {
      const storedState = JSON.parse(localStorage.getItem("store"));
      storedState.isPlaying = false;
      // storedState.timeProgress = 0;

      Object.assign(state, storedState);
      const playerData = {
        src: state.currentTrack ? state.currentTrack.path : "",
        loop: state.isRepeat,
        volume: state.volume,
      };

      state.audio = new Audio();
      Object.assign(state.audio, playerData);
    } else {
      state.audio = new Audio();
    }
  },
  updateTrackState(state, { track, index }) {
    state.currentTrack = track;
    state.currentIndex = index;
  },

  updateCurrentPlaylist(state, playlist) {
    state.currentPlaylist = playlist;
  },
  play(state, { track, index }) {
    if (!state.audio) {
      state.audio = new Audio();
    }
    let audio = state.audio;
    audio.volume = state.volume;
    if (typeof track.path !== "undefined") {
      audio.src = track.path;
      audio.load();
    }
    // Fix DOM error by play() interrupt -> create a setTimout to load
    setTimeout(() => {
      this.commit("updateTrackState", {
        track: track,
        index: index,
      });

      state.isPlaying = true;

      audio.play();
    }, 15);
    audio.addEventListener("ended", () => {
      if (state.isRepeat) {
        this.commit("repeat");
      } else if (state.isRandom) {
        this.commit("random");
      } else {
        this.commit("next");
      }
    });
  },
  pause(state) {
    state.audio.pause();
    state.isPlaying = false;
  },
  prev(state) {
    const tracks = state.currentPlaylist.tracks;
    let trackIndex = state.currentIndex;
    if (trackIndex === 0) {
      trackIndex = tracks.length - 1;
    } else {
      trackIndex--;
    }
    this.commit("updateTrackState", {
      track: tracks[trackIndex],
      index: trackIndex,
    });
    this.commit("play", {
      track: tracks[trackIndex],
      index: trackIndex,
    });
  },
  next(state) {
    const tracks = state.currentPlaylist.tracks;
    let trackIndex = state.currentIndex;
    if (trackIndex === tracks.length - 1) {
      trackIndex = 0;
    } else {
      trackIndex++;
    }
    this.commit("updateTrackState", {
      track: tracks[trackIndex],
      index: trackIndex,
    });
    this.commit("play", {
      track: tracks[trackIndex],
      index: trackIndex,
    });
  },
  updateRandom(state) {
    state.isRandom = !state.isRandom;
  },
  random(state) {
    let randomIndex;
    const tracks = state.currentPlaylist.tracks;
    do {
      randomIndex = Math.floor(Math.random() * tracks.length);
    } while (randomIndex === state.currentIndex);
    this.commit("updateTrackState", {
      track: tracks[randomIndex],
      index: randomIndex,
    });
    // state.isRandom = true;
    this.commit("play", {
      track: tracks[randomIndex],
      index: randomIndex,
    });
  },
  updateRepeat(state) {
    state.isRepeat = !state.isRepeat;
  },
  repeat(state) {
    state.audio.loop = state.isRepeat;
  },

  updateVolume(state, volume) {
    state.audio.volume = volume;
    state.volume = volume;
  },

  playOrPauseTrack(state) {
    if (!state.isPlaying) {
      state.isPlaying = true;
      state.audio.play();
    } else {
      state.isPlaying = false;
      state.audio.pause();
    }
  },

  playFromFirst(state, playlist) {
    state.currentPlaylist = playlist;
    const tracks = state.currentPlaylist.tracks;
    state.currentIndex = 0;
    this.commit("play", {
      track: tracks[state.currentIndex],
      index: state.currentIndex,
    });
  },

  // Reset State

  // resetState(state) {
  //   state.isPlaying = false;
  //   state.audio = null;
  //   state.currentPlaylist = null;
  //   state.currentTrack = null;
  //   state.currentIndex = null;
  // },

  // Update isLiked display
  // Problems with store new data for Json data

  // updateJsonState(state, { index, isLiked }) {
  //   const storedState = JSON.parse(localStorage.getItem("store"));
  //   storedState.currentPlaylist[index].isLiked = isLiked;
  //   localStorage.setItem("store", JSON.stringify(storedState));
  // },

  // updateIsLikedPlaylist(state, isLikedPlaylist) {
  //   const storedState = JSON.parse(localStorage.getItem("store"));
  //   storedState.isLiked = state.isLikedTrack;
  //   localStorage.setItem("store", JSON.stringify(storedState));
  // },
  filterPlaylist(state, filterType) {
    state.currentFilter = filterType;
    if (filterType === "All") {
      state.filteredData = state.data.data;
    } else if (filterType === "Current") {
      state.filteredData = [].concat(state.currentPlaylist);
    } else {
      state.filteredData = state.data.data.filter(
        (playlist) => playlist.type === filterType
      );
    }
  },
};
