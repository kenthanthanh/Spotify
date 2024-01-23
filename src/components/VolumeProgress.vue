<template>
  <div class="p-[8px] flex items-center gap-[8px]">
    <div>
      <VolumeMute
        v-if="volume === 0"
        fillColor="#FFFFFFB2"
        :size="20"
        @click="updateVolume(1)"
      />
      <VolumeHigh
        v-else
        fillColor="#FFFFFFB2"
        :size="20"
        @click="updateVolume(0)"
      />
    </div>
    <div
      class="flex items-center w-[100px] relative mt-2 mb-[23px]"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
    >
      <!-- v-model="getVolPercent" -->
      <input
        step="1"
        min="0"
        max="100"
        :value="getVolPercent"
        type="range"
        class="mt-[24px] absolute rounded-full my-2 w-full h-0 z-40 appearance-none bg-opacity-100 focus:outline-none accent-white"
        @change="
          (e) => {
            let volume = e.target.value / 100;
            updateVolume(volume);
          }
        "
      />
      <div
        class="pointer-events-none mt-[6px] absolute h-[4px] z-10 inset-y-0 left-0 w-0 rounded-full"
        :style="`width: ${getVolPercent}%;`"
        :class="isHover ? 'bg-green-500' : 'bg-white'"
      ></div>
      <div
        class="absolute h-[4px] z-[-0] mt-[6px] inset-y-0 left-0 w-full bg-gray-500 rounded-full"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import VolumeMute from "vue-material-design-icons/VolumeMute.vue";
import VolumeHigh from "vue-material-design-icons/VolumeHigh.vue";

import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  setup() {
    let isHover = ref(false);

    return {
      isHover,
    };
  },
  components: {
    VolumeHigh,
    VolumeMute,
  },
  methods: {
    ...mapActions([]),
    ...mapMutations(["updateVolume"]),
  },

  computed: {
    ...mapState(["volume"]),
    ...mapGetters(["getVolPercent"]),
  },
};
</script>

<style></style>
