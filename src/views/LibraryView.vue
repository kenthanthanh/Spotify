<template>
  <div class="overflow-x-hidden rounded">
    <div
      class="flex items-end gap-[16px] p-[24px] pt-[84px]"
      style="
        background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%),
          #5f5f5f;
      "
    >
      <div class="w-[232px] h-[232px] rounded shrink-0">
        <img
          class="h-[100%] w-full object-cover rounded"
          :src="getPlaylist.albumCover"
          alt=""
        />
      </div>
      <div class="flex gap-[8px] flex-col">
        <span class="text-sm text-white">{{ getPlaylist.type }}</span>
        <h1 class="text-white text-8xl font-extrabold truncate" :style="{}">
          {{ getPlaylist.name }}
        </h1>
        <div class="flex items-center">
          <img
            :src="getPlaylist.albumCover"
            alt=""
            class="rounded-full bg-[#000000B3]"
            style="width: 24px; height: 24px; object-fit: cover"
          />
          <a href="#!" class="text-white text-[14px] ml-1.5 font-bold">{{
            getPlaylist.author
          }}</a>
          <span class="rounded-full h-[4px] w-[4px] bg-white mx-[4px]"></span>
          <span class="text-white text-[14px] font-normal truncate"
            >{{ getPlaylist.tracks.length }}
            <span>
              <span v-if="getPlaylist.type == 'PlaylistTable'">songs, </span>
              <span v-else>episodes, </span>
            </span>
            <span class="text-gray-400"> about 7 hr 30 min </span>
          </span>
        </div>
      </div>
    </div>
    <div class="p-[24px]">
      <div class="flex justify-between">
        <div class="flex items-center gap-[24px]">
          <button
            class="p-[12px] rounded-full bg-[#1ed760]"
            @click="
              () => {
                if (getTracks.includes(getCurrentTrack)) {
                  playOrPauseTrack();
                } else {
                  playFromFirst(getPlaylist);
                }
              }
            "
          >
            <Play
              v-if="!(isPlaying && getTracks.includes(getCurrentTrack))"
              fillColor="#181818"
              :size="32"
            />
            <Pause v-else fillColor="#181818" :size="32" />
          </button>
          <button
            class="flex items-center"
            @click="
              () => {
                getPlaylist.isLiked = !getPlaylist.isLiked;
              }
            "
          >
            <Heart
              class=""
              fillColor="#1db954"
              v-if="getPlaylist.isLiked"
              :size="36"
              style="display: inline-block"
            />
            <HeartOutline
              fillColor="#FFFFFFB2"
              v-else
              :size="36"
              class="fill-white hover:fill-green-400"
              style="display: inline-block"
            />
          </button>
          <button type="button">
            <DotsHorizontal fillColor="#FFFFFFB2" :size="32" />
          </button>
        </div>
        <button
          type="button"
          class="flex items-center text-[#FFFFFFB2] text-[14px] font-normal px-[8px]"
        >
          List
          <DotsHorizontal class="ml-[8px]" fillColor="#FFFFFFB2" :size="32" />
        </button>
      </div>
    </div>
    <div class="px-[16px]">
      <PlaylistTable />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import Play from "vue-material-design-icons/Play.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import DotsHorizontal from "vue-material-design-icons/DotsHorizontal.vue";
import Heart from "vue-material-design-icons/Heart.vue";
import HeartOutline from "vue-material-design-icons/HeartOutline.vue";

// Component
import PlaylistTable from "../components/PlaylistTable.vue";

import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

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
    DotsHorizontal,
    Heart,
    HeartOutline,

    // Component
    PlaylistTable,
  },
  methods: {
    ...mapActions([]),
    ...mapMutations(["playOrPauseTrack", "playFromFirst"]),
  },
  computed: {
    ...mapState(["isPlaying"]),
    ...mapGetters(["getPlaylist", "getTracks", "getCurrentTrack"]),
  },
};
</script>
<style scoped></style>
