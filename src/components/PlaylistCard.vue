<script>
import { ref, toRefs } from "vue";
import { RouterLink } from "vue-router";

import Play from "vue-material-design-icons/Play.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  components: {
    Play,
    Pause,
  },
  props: {
    image: String,
    title: String,
    subTitle: String,
    playlist: Object,
  },
  setup() {
    let isHover = ref(false);

    return {
      isHover,
    };
  },
  methods: {
    ...mapMutations(["playFromFirst", "playOrPauseTrack"]),
  },
  computed: {
    ...mapState(["isPlaying"]),
    ...mapGetters(["getPlaylist"]),
  },
};
</script>
<template>
  <RouterLink to="library">
    <div
      class="p-[16px] rounded-lg bg-[#181818] hover:bg-[#252525] cursor-pointer select-none"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
    >
      <div class="relative">
        <img
          :src="image"
          :alt="title"
          class="rounded-lg object-cover h-[127px] w-[127px]"
        />
        <button
          v-show="isHover"
          class="p-[8px] rounded-full bg-[#1ed760] absolute bottom-[8px] right-[8px]"
          @click.prevent="
            () => {
              playlist === getPlaylist
                ? playOrPauseTrack()
                : playFromFirst(playlist);
            }
          "
        >
          <Pause
            v-if="isPlaying && playlist === getPlaylist"
            fillColor="#181818"
            :size="28"
          />
          <Play v-else fillColor="#181818" :size="28" />
        </button>
      </div>
      <div class="mt-[16px]">
        <h3 class="text-white font-bold text-base truncate">
          {{ title }}
        </h3>
        <p class="text-sm font-medium text-[#6a6a6a] truncate">
          {{ subTitle }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>

<style></style>
