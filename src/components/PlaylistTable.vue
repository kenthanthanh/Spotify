<template>
  <table class="table-fixed w-[100%] text-left text-sm text-gray-400">
    <thead class="border-b border-b-[#2A2A2A] mb-[8px]">
      <tr class="px-[16px] mb-[8px]">
        <th class="w-[5%] text-center pl-[16px]">#</th>
        <th class="w-[40%]">Title</th>
        <th class="w-[25%]">Album</th>
        <th class="w-[15%]">Date added</th>
        <th class="w-[5%]"></th>
        <th class="flex justify-center pr-[16px]">
          <ClockTimeThreeOutline
            style="display: inline-block"
            fillColor="#FFFFFFB2"
            :size="20"
          />
        </th>
      </tr>
    </thead>
    <tbody v-for="(track, index) in getTracks" :key="track.id">
      <TrackRow :track="track" :index="index" />
    </tbody>
  </table>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import ClockTimeThreeOutline from "vue-material-design-icons/ClockTimeThreeOutline.vue";

import TrackRow from "./TrackRow.vue";

export default {
  setup() {},
  components: {
    // Icon
    ClockTimeThreeOutline,
    // Component
    TrackRow,
  },
  methods: {},
  computed: {
    ...mapGetters(["getTracks"]),
  },
};
</script>

<style scoped>
th + th {
  padding-left: 16px;
}
</style>
