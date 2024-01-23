<script>
import { ref, toRefs } from "vue";
import { RouterLink } from "vue-router";
import { useStore, mapGetters, mapState, mapMutations } from "vuex";

import PlaylistCard from "../components/PlaylistCard.vue";

export default {
  props: {
    title: String,
    filter: String,
  },
  setup({ title, filter }) {
    const store = useStore();
    const getData = store.getters.getData;

    const filterType = filter[0].toUpperCase() + filter.slice(1);
    const filteredPlaylist = getData.filter(
      (playlist) => playlist.type === filterType
    );

    return {
      filteredPlaylist,
    };
  },
  components: {
    PlaylistCard,
  },
  computed: {},
  methods: {
    ...mapMutations(["updateCurrentPlaylist"]),
  },
};
</script>
<template>
  <div class="mb-[16px]">
    <button
      type="button"
      class="font-bold text-white text-2xl hover:underline cursor-pointer"
    >
      {{ title }}
    </button>

    <div class="py-1.5"></div>
    <div
      class="overflow-hidden gap-[24px] grid xxl:grid-cols-9 lg:grid-cols-8 md:grid-cols-5 sm:grid-cols-3"
    >
      <PlaylistCard
        v-for="(playlist, index) in filteredPlaylist"
        :key="index"
        :image="playlist.albumCover"
        :title="playlist.name"
        :subTitle="playlist.author"
        :playlist="playlist"
        @click="updateCurrentPlaylist(playlist)"
      />
    </div>
  </div>
</template>
<style></style>
