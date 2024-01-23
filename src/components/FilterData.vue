<script>
import { ref, toRefs } from "vue";
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
  // Using isSelectFilter in state than ref because i need to store state of it when reloaded
  // setup() {
  //   let isSelect = ref(false);

  //   return {
  //     isSelect,
  //   };
  // },
  computed: {
    ...mapState(["currentFilter", "isSelectFilter"]),
    ...mapGetters(["getFilterPlaylist"]),
  },
  methods: {
    ...mapMutations(["filterPlaylist"]),
  },
};
</script>
<template>
  <li
    class="text-[#fff] font-normal text-sm cursor-pointer hover:opacity-100 opacity-75"
    v-for="(filterType, index) in Object.keys(getFilterPlaylist)"
    :key="index"
    @click="
      () => {
        $store.state.isSelectFilter = true;
        const filter = filterType[0].toUpperCase() + filterType.slice(1);
        filterPlaylist(filter);
      }
    "
  >
    <span
      :class="
        isSelectFilter &&
        currentFilter === filterType[0].toUpperCase() + filterType.slice(1)
          ? 'text-black opacity-100 bg-white'
          : ''
      "
      class="h-[32px] min-w-fit rounded-full px-[12px] py-[4px] flex items-center justify-center bg-[#282828]"
    >
      <a href="#!"> {{ filterType[0].toUpperCase() + filterType.slice(1) }}</a>
    </span>
  </li>
</template>
<style></style>
