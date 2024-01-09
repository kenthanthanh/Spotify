<template>
  <div>
    <div class="p-[8px]">
      <div class="flex items-center flex-initial">
        <div class="flex items-center w-[29%]">
          <div class="flex items-center">
            <div class="">
              <img
                class="object-cover rounded h-[56px] w-[56px]"
                :src="getSongs[getCurrentIndex].poster"
                alt="Album cover for {{ getSongs[getCurrentIndex].title }}"
              />
            </div>
            <div class="ml-[8px] cursor-pointer">
              <div class="text-sm text-white hover:underline">
                <a href="#!">
                  {{ getSongs[getCurrentIndex].title }}
                </a>
              </div>
              <div
                class="hover:underline text-gray-400 text-xs hover:text-white"
              >
                <a href="#!">{{ getSongs[getCurrentIndex].singer }}</a>
              </div>
            </div>
          </div>
          <Heart
            class="p-[8px] ml-[16px]"
            fillColor="#FFFFFFB2"
            :size="20"
            style="display: inline-block"
          />
        </div>
        <div class="grow flex flex-col items-center">
          <div class="flex items-center gap-[8px] mb-[8px]">
            <button
              class="p-[8px]"
              @click="
                () => {
                  $store.state.isRepeat = !isRepeat;
                }
              "
            >
              <Repeat
                :fillColor="isRepeat ? '#1db954' : '#FFFFFFB2'"
                :size="24"
              />
            </button>
            <button class="p-[8px]">
              <Prev fillColor="#FFFFFFB2" :size="24" />
            </button>
            <button
              class="p-[4px] rounded-full bg-white mx-[8px]"
              @click="$store.state.isPlaying = !isPlaying"
            >
              <Play v-if="!isPlaying" fillColor="#181818" :size="24" />
              <Pause v-else fillColor="#181818" :size="24" />
            </button>
            <button class="p-[8px]">
              <Next class="" fillColor="#FFFFFFB2" :size="24" />
            </button>
            <button
              class="p-[8px]"
              @click="
                () => {
                  $store.state.isRandom = !isRandom;
                }
              "
            >
              <Random
                :fillColor="isRandom ? '#1db954' : '#FFFFFFB2'"
                :size="24"
              />
            </button>
          </div>
          <div
            class="text-[11px] text-gray-400 flex items-center gap-[8px] w-[100%]"
          >
            <span>00:00</span>
            <input
              id="progress"
              type="range"
              class="progress h-[4px] w-[100%] bg-white"
              :value="getTimeProgress"
              step="1"
              min="0"
              max="100"
            />
            <span>05:00</span>
          </div>
        </div>
        <div class="flex items-center">
          <button class="p-[8px]">
            <NowPlaying fillColor="#fff" :size="20" />
          </button>
          <button class="p-[8px]">
            <Lyrics fillColor="#FFFFFFB2" :size="20" />
          </button>
          <button class="p-[8px]">
            <Queue fillColor="#FFFFFFB2" :size="20" />
          </button>
          <button class="p-[8px] flex items-center">
            <Volume fillColor="#FFFFFFB2" :size="20" />
            <input
              id="volume"
              class="progress h-[4px] w-[90px] rounded-full"
              type="range"
              step="1"
              min="0"
              max="100"
              :value="
                getVolume !== undefined && 1 >= getVolume >= 0
                  ? getVolume * 100
                  : 100
              "
            />
          </button>
          <button class="p-[8px]">
            <OpenMiniPlayer fillColor="#fff" :size="20" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heart from "vue-material-design-icons/Heart.vue";
import Play from "vue-material-design-icons/Play.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import Repeat from "vue-material-design-icons/Repeat.vue";
import Next from "vue-material-design-icons/SkipNext.vue";
import Prev from "vue-material-design-icons/SkipPrevious.vue";
import Random from "vue-material-design-icons/CircleOutline.vue";
import Queue from "vue-material-design-icons/ListBoxOutline.vue";
import Lyrics from "vue-material-design-icons/MusicNote.vue";
import NowPlaying from "vue-material-design-icons/Music.vue";
import Volume from "vue-material-design-icons/VolumeSource.vue";
import OpenMiniPlayer from "vue-material-design-icons/OpenInApp.vue";

import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: {
    Play,
    Pause,
    Prev,
    Next,
    Random,
    Heart,
    Repeat,
    Queue,
    Lyrics,
    NowPlaying,
    Volume,
    OpenMiniPlayer,
  },
  mounted() {
    const audio = this.player;
    audio.ontimeupdate = this.onTimeUpdate;
  },
  // beforeUnmount() {
  //   const audio = this.$store.state.player;
  //   audio.ontimeupdate = null; // Remove event listener when component unmounts
  // },
  methods: {
    ...mapActions([
      "play",
      "pause",
      "next",
      "prev",
      "random",
      "repeat",
      "onTimeUpdate",
    ]),
    ...mapMutations(["updateVolume"]),
    // handleScroll() {
    //   const scrollPosition = window.scrollY;
    //   this.shouldHideCD = scrollPosition > 200; // Adjust threshold as needed
    // },
  },

  computed: {
    ...mapState(["player"]),
    ...mapGetters([
      "getSongs",
      "getPlayer",
      "getCurrentIndex",
      "getTimeProgress",
      "isPlaying",
      "isRandom",
      "isRepeat",
      "getVolume",
    ]),
  },
};
</script>

<style lang="scss">
.actived {
  fill: #1db954;
}
:root {
  --primary-color: #ec1f55;
  --text-color: #333;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

body {
  background-color: #f5f5f5;
}

html {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.control-table {
  &-btn {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 18px 0 8px 0;
    .btn {
      color: #666;
      padding: 18px;
      font-size: 18px;
    }
    .btn.active {
      color: var(--primary-color);
    }
    .btn-toggle-play {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      font-size: 24px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--primary-color);
    }
  }
  &-progress {
    .progress {
      width: 100%;
      -webkit-appearance: none;
      height: 6px;
      background: #d3d3d3;
      outline: none;
      opacity: 0.7;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
    }

    .progress::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 12px;
      height: 6px;
      background-color: var(--primary-color);
      cursor: pointer;
    }
  }

  input {
    border-radius: 7px;
    width: 80%;
    height: 22px;
    margin-left: -11.5%;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  }
  // progress::-webkit-progress-bar {
  //   background-color: yellow;
  //   border-radius: 7px;
  // }
  // progress::-webkit-progress-value {
  //   background-color: blue;
  //   border-radius: 7px;
  //   box-shadow: 1px 1px 5px 3px rgba( 255, 0, 0, 0.8 );
  // }
  // progress::-moz-progress-bar {
  //   /* style rules */
  // }
}
</style>
