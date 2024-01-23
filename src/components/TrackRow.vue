<template>
  <tr
    class="h-[56px] hover:text-white select-none"
    :class="isHover ? 'rounded bg-[#ffffff4d] ' : ''"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <td
      @click="
        () => {
          track === currentTrack ? playOrPauseTrack() : play({ track, index });
        }
      "
    >
      <div
        class="pl-[16px] flex items-center justify-center text-base text-gray-400"
      >
        <div v-if="isHover && currentTrack === track" class="cursor-pointer">
          <Play v-if="!isPlaying" fillColor="#fff" :size="18" />
          <Pause v-else fillColor="#fff" :size="18" />
        </div>

        <div v-else class="font-normal">
          <Lyrics
            v-if="currentTrack === track && isPlaying"
            fillColor="#1db954"
            :size="20"
          />

          <span
            v-else
            class="inline-block"
            :style="
              currentTrack && track === currentTrack
                ? `color: #1db954`
                : `color: #fff`
            "
          >
            {{ index + 1 }}
          </span>
        </div>
      </div>
    </td>

    <td>
      <div class="flex items-center">
        <div class="shrink-0">
          <img
            class="object-cover rounded h-[40px] w-[40px]"
            :src="track.poster"
            alt="Album cover for {{ track }}"
          />
        </div>
        <div class="ml-[8px] cursor-pointer">
          <div
            class="text-base hover:underline"
            :style="
              currentTrack && track == currentTrack
                ? `color: #1db954`
                : `color: #fff`
            "
          >
            <a href="#!">
              {{ track.name }}
            </a>
          </div>
          <a href="#!" class="hover:underline">{{ track.singer }}</a>
        </div>
      </div>
    </td>
    <td class="hover:underline cursor-pointer">
      <a href="#!">{{ track.name }}</a>
    </td>
    <td>4 weeks ago</td>
    <td
      @click="
        () => {
          track.isLiked = !track.isLiked;
        }
      "
    >
      <button class="flex items-center justify-center cursor-pointer">
        <Heart
          class="p-[16px]"
          fillColor="#1db954"
          v-if="track.isLiked"
          :size="20"
          style="display: inline-block"
        />
        <HeartOutline
          fillColor="#FFFFFFB2"
          v-else
          :size="20"
          class="fill-white hover:fill-green-400 p-[16px]"
          style="display: inline-block"
        />
      </button>
    </td>
    <td class="text-center pr-[16px]" v-show="isTrackTimeTotal">
      {{ isTrackTimeTotal }}
    </td>
  </tr>
</template>

<script>
import { ref, onMounted } from "vue";
import { mapState, mapGetters, mapActions, mapMutations, useStore } from "vuex";

import Play from "vue-material-design-icons/Play.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import DotsHorizontal from "vue-material-design-icons/DotsHorizontal.vue";
import Heart from "vue-material-design-icons/Heart.vue";
import HeartOutline from "vue-material-design-icons/HeartOutline.vue";
import Lyrics from "vue-material-design-icons/Music.vue";

export default {
  props: {
    track: Object,
    index: Number,
  },
  setup({ track, index }) {
    let isHover = ref(false);
    let isTrackTimeTotal = ref(null);
    onMounted(() => {
      const audio = new Audio(track.path);
      audio.addEventListener("loadedmetadata", function () {
        const duration = audio.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        isTrackTimeTotal.value =
          minutes + ":" + seconds.toString().padStart(2, "0");
      });
    });
    return {
      isHover,
      isTrackTimeTotal,
    };
  },

  components: {
    Lyrics,
    Play,
    Pause,
    DotsHorizontal,
    Heart,
    HeartOutline,
    Pause,

    // Component
  },

  methods: {
    ...mapActions([]),
    ...mapMutations(["play", "playOrPauseTrack"]),
  },
  computed: {
    ...mapState(["currentTrack", "isPlaying"]),
    ...mapGetters(["getTracks"]),
  },
};
</script>

<style scoped>
td + td {
  padding-left: 16px;
}
td {
  height: inherit;
}
</style>
