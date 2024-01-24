<template>
  <header
    id="TopNav"
    class="w-[calc(100%-8px-408px)] h-[64px] fixed right-0 z-20 bg-[#00000080] flex items-center justify-between px-[24px] rounded"
  >
    <div class="flex items-center">
      <button
        type="button"
        class="rounded-full bg-[#000000B3] hover:bg-[#282828] p-[1px] cursor-pointer"
      >
        <ChevronLeft fillColor="#FFFFFFB2" :size="30" />
      </button>
      <button
        type="button"
        class="rounded-full bg-[#000000B3] hover:bg-[#282828] p-[1px] ml-4 cursor-pointer"
      >
        <ChevronRight fillColor="#FFFFFFB2" :size="30" />
      </button>
    </div>
    <div>
      <button
        @click="openMenu = !openMenu"
        :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
        class="bg-black hover:bg-[#282828] rounded-full p-0.5 m-0.5 cursor-pointer"
      >
        <div class="flex items-center">
          <img
            src="../assets/img/avatar.avif"
            alt=""
            class="rounded-full bg-[#000000B3]"
            style="width: 27px; height: 27px; object-fit: cover"
          />
          <div class="text-white text-[14px] ml-1.5 font-semibold">h2_siee</div>
          <ChevronDown
            v-if="!openMenu"
            @click="openMenu = !openMenu"
            fillColor="#ffffff"
            :size="25"
          />
          <ChevronUp
            v-else
            @click="openMenu = !openMenu"
            fillColor="#ffffff"
            :size="25"
          />
        </div>
      </button>
    </div>
    <div
      v-show="openMenu"
      class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px]"
    >
      <ul class="text-[#FFFFFFE6] font-normal text-[14px] p-[4px]">
        <li class="p-3 hover:bg-[#3e3d3d] rounded-sm">
          <a href="#!">Account</a>
        </li>
        <li class="p-3 hover:bg-[#3e3d3d] rounded-sm">
          <a href="#!">Profile</a>
        </li>
        <li class="p-3 hover:bg-[#3e3d3d] rounded-sm">
          <a href="#!">Settings</a>
        </li>

        <li
          class="p-3 hover:bg-[#3e3d3d] border-t border-t-gray-600 rounded-sm"
        >
          <a href="#!">Log out</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

import ChevronUp from "vue-material-design-icons/ChevronUp.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";

export default {
  setup() {
    let openMenu = ref(false);
    return {
      openMenu,
    };
  },
  components: {
    ChevronUp,
    ChevronDown,
    ChevronRight,
    ChevronLeft,
    // Components
  },
  computed: {
    ...mapState([]),
    ...mapGetters([]),
  },
  methods: {
    ...mapMutations([]),
  },
};
</script>

<style></style>
