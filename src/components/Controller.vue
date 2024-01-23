<template>
  <div>
    <div class="bg-black flex items-center flex-initial h-full pb-[8px]">
      <div class="flex items-center w-[30%]">
        <div class="flex items-center pl-[16px]">
          <div class="shrink-0">
            <img
              class="object-cover rounded h-[56px] w-[56px]"
              :src="getCurrentTrack.poster"
              alt="Album cover for {{getCurrentTrack.name }}"
            />
          </div>
          <div class="ml-[8px] cursor-pointer">
            <div class="text-sm text-white hover:underline">
              <a href="#!">
                {{ getCurrentTrack.name }}
              </a>
            </div>
            <div class="hover:underline text-gray-400 text-xs hover:text-white">
              <a href="#!">{{ getCurrentTrack.singer }}</a>
            </div>
          </div>
        </div>
        <div
          @click="
            () => {
              getCurrentTrack.isLiked = !getCurrentTrack.isLiked;
            }
          "
        >
          <Heart
            class="p-[8px] ml-[16px]"
            fillColor="#1db954"
            v-if="getCurrentTrack.isLiked"
            :size="20"
            style="display: inline-block"
          />
          <HeartOutline
            fillColor="#FFFFFFB2"
            v-else
            :size="20"
            class="fill-white hover:fill-green-400 p-[8px] ml-[16px]"
            style="display: inline-block"
          />
        </div>
      </div>
      <div class="flex flex-col items-center w-[40%] h-full">
        <div class="flex items-center gap-[8px] mb-[8px]">
          <button
            class="p-[8px]"
            @click="
              () => {
                updateRandom();
              }
            "
          >
            <Random
              :fillColor="isRandom ? '#1db954' : '#FFFFFFB2'"
              :size="24"
            />
          </button>

          <button class="p-[8px]" @click="isRandom ? random() : prev()">
            <Prev fillColor="#FFFFFFB2" :size="24" />
          </button>
          <button
            class="p-[4px] rounded-full bg-white mx-[8px]"
            @click="playOrPauseTrack()"
          >
            <Play v-if="!isPlaying" fillColor="#181818" :size="24" />
            <Pause v-else fillColor="#181818" :size="24" />
          </button>
          <button class="p-[8px]" @click="isRandom ? random() : next()">
            <Next class="" fillColor="#FFFFFFB2" :size="24" />
          </button>
          <button
            class="p-[8px]"
            @click="
              () => {
                updateRepeat();
                repeat();
              }
            "
          >
            <Repeat
              :fillColor="isRepeat ? '#1db954' : '#FFFFFFB2'"
              :size="24"
            />
          </button>
        </div>
        <TimeProgress />
      </div>
      <div class="flex items-center justify-end" style="flex: 1">
        <button class="p-[8px]">
          <NowPlaying fillColor="#FFFFFFB2" :size="20" />
        </button>
        <button class="p-[8px]">
          <Lyrics fillColor="#FFFFFFB2" :size="20" />
        </button>
        <button class="p-[8px]">
          <Queue fillColor="#FFFFFFB2" :size="20" />
        </button>
        <button>
          <VolumeProgress />
        </button>
        <button class="p-[8px]">
          <OpenMiniPlayer fillColor="#fff" :size="20" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
// Icon
import Heart from "vue-material-design-icons/Heart.vue";
import Play from "vue-material-design-icons/Play.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import Repeat from "vue-material-design-icons/Repeat.vue";
import Next from "vue-material-design-icons/SkipNext.vue";
import Prev from "vue-material-design-icons/SkipPrevious.vue";
import Random from "vue-material-design-icons/GhostOutline.vue";
import Queue from "vue-material-design-icons/ListBoxOutline.vue";
import Lyrics from "vue-material-design-icons/MusicNote.vue";
import NowPlaying from "vue-material-design-icons/Music.vue";
import OpenMiniPlayer from "vue-material-design-icons/OpenInApp.vue";
import HeartOutline from "vue-material-design-icons/HeartOutline.vue";

// Component
import VolumeProgress from "./VolumeProgress.vue";
import TimeProgress from "./TimeProgress.vue";

import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  setup() {
    let isHover = ref(false);
    return {
      isHover,
    };
  },
  components: {
    // Icon
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
    OpenMiniPlayer,
    HeartOutline,
    // Component
    VolumeProgress,
    TimeProgress,
  },

  methods: {
    ...mapActions([]),
    ...mapMutations([
      "updateRepeat",
      "repeat",
      "updateRandom",
      "random",
      "updateVolume",
      "playOrPauseTrack",
      "next",
      "prev",
    ]),
  },

  computed: {
    ...mapState(["isPlaying", "isRandom", "isRepeat"]),
    ...mapGetters(["getCurrentTrack"]),
  },
};
</script>

<style lang="scss"></style>
