<script>
import FilterPlaylists from "../components/FilterPlaylists.vue";
export default {
  components: {
    FilterPlaylists,
  },
  computed: {},
};
</script>
<template>
  <div class="flex gap-[24px] flex-col px-[24px] pt-[72px]">
    <FilterPlaylists title="Made For You" filter="playlist" />
    <FilterPlaylists title="Podcasts to make you smarter" filter="podcast" />
    <FilterPlaylists title="Your shows" filter="playlist" />
    <FilterPlaylists title="Your artist" filter="artist" />
  </div>
</template>

<style></style>
