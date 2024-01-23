<script>
import { ref, onMounted } from "vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

import { RouterLink, RouterView } from "vue-router";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import Plus from "vue-material-design-icons/Plus.vue";
import Pin from "vue-material-design-icons/Pin.vue";

// Components
import Controller from "./components/Controller.vue";

import HeaderView from "./views/Header.vue";
import FooterView from "./views/Footer.vue";
import SidebarView from "./views/Sidebar.vue";
export default {
  beforeCreate() {
    this.$store.commit("initialStorage");
  },
  setup() {
    let openMenu = ref(false);
    return {
      openMenu,
    };
  },
  components: {
    ChevronRight,
    Plus,
    Pin,
    Controller,
    RouterLink,
    RouterView,
    HeaderView,
    FooterView,
    SidebarView,
  },
  computed: {
    ...mapState(["currentTrack", "data"]),
    ...mapGetters(["getData"]),
  },
  methods: {
    ...mapMutations(["updateCurrentPlaylist"]),
  },
};
</script>
<template>
  <div class="bg-black relative pb-[32px] h-[100vh] rounded p-[8px] w-[100vw]">
    <HeaderView />
    <SidebarView />
    <div
      class="ml-[408px] h-[100%] overflow-y-auto bg-gradient-to-b from-[#1c1c1c] to-black max-w-[calc(100%-408px)]"
    >
      <div>
        <RouterView />
        <FooterView
          :style="{ 'margin-bottom': currentTrack ? '72px' : '0px' }"
        />
      </div>
    </div>
    <Controller
      class="z-20 absolute bottom-[0px] left-0 w-full h-[72px]"
      v-show="currentTrack"
    />
  </div>
</template>
<style scoped></style>
