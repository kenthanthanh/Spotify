<template>
  <table class="table-fixed w-[100%] text-left text-sm text-gray-400">
    <thead class="border-b border-b-[#2A2A2A] mb-[8px]">
      <tr class="px-[16px] mb-[8px]">
        <th class="w-[40px] text-center pl-[16px]">#</th>
        <th class="w-[34%]">Title</th>
        <th class="w-[22%]">Album</th>
        <th class="w-[17%]">Date added</th>
        <th class="w-[40px]"></th>

        <th class="flex justify-center pr-[16px]">
          <ClockTimeThreeOutline
            style="display: inline-block"
            fillColor="#FFFFFFB2"
            :size="20"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(track, index) in getTracks"
        :key="track.id"
        class="h-[56px] hover:text-white"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
      >
        <td
          class="pl-[16px] flex items-center justify-center text-base text-gray-400"
          @click="
            () => {
              if (isPlaying && track == currentTrack) {
                audio.pause();
              } else if (!isPlaying && track == currentTrack) {
                audio.play();
              } else {
                play({ track, index });
              }
              playOrPauseTrack();
            }
          "
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
          class="text-center cursor-pointer"
          @click="
            () => {
              track.isLiked = !track.isLiked;
            }
          "
        >
          <Heart
            class="p-[8px] ml-[16px]"
            fillColor="#1db954"
            v-if="track.isLiked"
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
        </td>
        <td class="text-center pr-[16px]" v-show="true">5:00</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { ref, toRefs, onMounted, watch } from "vue";
import Play from "vue-material-design-icons/Play.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import DotsHorizontal from "vue-material-design-icons/DotsHorizontal.vue";
import Heart from "vue-material-design-icons/Heart.vue";
import ClockTimeThreeOutline from "vue-material-design-icons/ClockTimeThreeOutline.vue";
import HeartOutline from "vue-material-design-icons/HeartOutline.vue";
import Lyrics from "vue-material-design-icons/Music.vue";

import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { useStore } from "vuex";

export default {
  // mounted() {
  //   this.getTracks.forEach((track, index) => {
  //     console.log(track);
  //     this.getLikedTracks[index] = track.isLiked;
  //   });
  //   this.getTracks.forEach((track) => {
  //     const audio = new Audio(track.path);
  //     audio.addEventListener("loadedmetadata", function () {
  //       const duration = audio.duration;
  //       const minutes = Math.floor(duration / 60);
  //       const seconds = Math.floor(duration % 60);
  //       const isTrackTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  //       trackDurations[track.id] = isTrackTime;
  //     });
  //   });
  // },
  setup() {
    const store = useStore();

    let isHover = ref(false);
    let isTrackTimeTotal = ref(null);
    const getTracks = store.getters.getTracks;
    let trackDurations = ref([]);

    // onMounted(() => {
    //   const audio = new Audio(track.path);
    //   audio.addEventListener("loadedmetadata", function () {
    //     const duration = audio.duration;
    //     const minutes = Math.floor(duration / 60);
    //     const seconds = Math.floor(duration % 60);
    //     isTrackTimeTotal.value =
    //       minutes + ":" + seconds.toString().padStart(2, "0");
    //   });
    // });

    return {
      isHover,
      isTrackTimeTotal,
      // trackDurations,
      // loadedmetadata,
    };
  },
  components: {
    Lyrics,
    Play,
    Pause,
    DotsHorizontal,
    Heart,
    HeartOutline,
    ClockTimeThreeOutline,
    Pause,

    // Component
  },
  methods: {
    ...mapActions([]),
    ...mapMutations(["play", "playOrPauseTrack", "updateJsonState"]),
  },
  computed: {
    // trackTimeTotal(track, index) {
    //   console.log(track);
    //   const audio = new Audio();
    //   audio.src = track.path;
    //   console.log(audio.src);
    //   audio.addEventListener("loadedmetadata", function () {
    //     const duration = audio.duration;
    //     console.log(audio.duration);
    //     const minutes = Math.floor(duration / 60);
    //     const seconds = Math.floor(duration % 60);
    //     const isTrackTimeTotal =
    //       minutes + ":" + seconds.toString().padStart(2, "0");
    //     console.log(isTrackTimeTotal);
    //     // trackDurations[index] = isTrackTimeTotal;
    //     // console.log(trackDurations);
    //     // return isTrackTimeTotal;
    //   });
    // },
    ...mapState([
      "currentTrack",
      "currentIndex",
      "isPlaying",
      "audio",
      "isLikedTracks",
    ]),
    ...mapGetters(["getTracks", "getLikedTracks"]),
  },
};
</script>

<style scoped>
td + td,
th + th {
  padding-left: 16px;
}

tbody tr:hover {
  background: #ffffff4d;
  border-radius: 8px;
  user-select: none;
}
td {
  height: inherit;
}
</style>
