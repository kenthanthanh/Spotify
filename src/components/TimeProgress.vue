<template>
  <div
    class="text-[11px] text-gray-400 flex items-center gap-[8px] w-full h-full"
  >
    <span>{{
      isTrackTimeCurrent == "0:00" || !isTrackTimeCurrent
        ? "00:00"
        : isTrackTimeCurrent
    }}</span>
    <div
      class="flex items-center w-[100%] relative mb-[8px]"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
    >
      <div class="flex items-center">
        <input
          v-model="range"
          ref="seeker"
          type="range"
          class="absolute rounded-full w-full h-[0px] z-40 appearance-none bg-opacity-100 focus:outline-none accent-white mt-[6px]"
        />
        <div
          class="pointer-events-none absolute h-[4px] z-10 inset-y-0 left-0 w-0 rounded-full mt-[1px]"
          :style="`width: ${range}%;`"
          :class="isHover ? 'bg-green-500' : 'bg-white'"
        ></div>
        <div
          class="absolute h-[4px] z-[-0] inset-y-0 left-0 w-full bg-gray-500 rounded-full mt-[1px]"
        ></div>
      </div>
      <!-- v-model="getVolPercent" -->
    </div>
    <span v-show="isTrackTimeTotal">{{ isTrackTimeTotal }}</span>
  </div>
</template>

<script>
import { ref, toRefs, onMounted, watch } from "vue";

import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    let isHover = ref(false);
    let isTrackTimeCurrent = ref(null);
    let isTrackTimeTotal = ref(null);
    let seeker = ref(null);
    let range = ref(0);

    const audio = store.state.audio;
    const currentTrack = store.getters.getCurrentTrack;

    onMounted(() => {
      if (audio) {
        setTimeout(() => {
          timeupdate();
          loadedmetadata();
        }, 15);
      }
      // When change
      if (currentTrack) {
        seeker.value.addEventListener("change", function (e) {
          const time = (audio.duration / 100) * e.target.value;
          audio.currentTime = time;
          range.value = time;
        });
        // When mousedown
        seeker.value.addEventListener("mousedown", function () {
          audio.pause();
          store.state.isPlaying = false;
        });
        // When mouseup
        seeker.value.addEventListener("mouseup", function () {
          audio.play();
          store.state.isPlaying = true;
        });
      }
    });

    const timeupdate = () => {
      store.state.audio.addEventListener("timeupdate", function () {
        var minutes = Math.floor(audio.currentTime / 60);
        var seconds = Math.floor(audio.currentTime % 60);

        isTrackTimeCurrent.value =
          minutes + ":" + seconds.toString().padStart(2, "0");
        const value = (100 / audio.duration) * audio.currentTime;

        range.value = value;
        seeker.value = value;
      });
    };

    const loadedmetadata = () => {
      store.state.audio.addEventListener("loadedmetadata", function () {
        const duration = audio.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        isTrackTimeTotal.value =
          minutes + ":" + seconds.toString().padStart(2, "0");
      });
    };

    watch(
      () => audio,
      () => {
        timeupdate();
        loadedmetadata();
      }
    );

    return {
      isHover,
      isTrackTimeCurrent,
      isTrackTimeTotal,
      seeker,
      range,
      timeupdate,
      loadedmetadata,
    };
  },
  components: {},

  methods: {
    ...mapActions([]),
  },

  computed: {},
};
</script>

<style></style>
