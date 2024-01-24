<template>
  <aside
    id="SideNav"
    class="py-[8px] px-[12px] fixed top-0 left-0 bg-black h-[100vh] w-[408px] rounded overflow-y-auto"
  >
    <ul class="flex flex-col items-start rounded bg-[#00000080]">
      <RouterLink to="/">
        <MenuItemComponent
          name="Home"
          :iconSize="21"
          iconString="home"
          pageUrl="/"
          class="ml-[1px]"
        />
      </RouterLink>
      <RouterLink to="/search">
        <MenuItemComponent
          name="Search"
          :iconSize="22"
          iconString="search"
          pageUrl="/search"
          class="ml-[2px]"
        />
      </RouterLink>
      <RouterLink
        to="/library"
        class="flex items-center justify-between mt-[8px] w-[100%]"
      >
        <MenuItemComponent
          name="Your Library"
          :iconSize="21"
          iconString="library"
          pageUrl="/library"
          class="ml-[1px]"
        />
        <div class="flex items-center">
          <button
            @click="openMenu = !openMenu"
            type="button"
            class="rounded-full bg-[#000000B3] hover:bg-[#282828] p-[2px] cursor-pointer"
          >
            <Plus fillColor="#FFFFFFB2" :size="24" />
          </button>

          <button
            type="button"
            class="rounded-full bg-[#000000B3] hover:bg-[#282828] p-[2px] hover:bg-[#] ml-[8px] cursor-pointer"
          >
            <ChevronRight fillColor="#FFFFFFB2" :size="24" />
          </button>
        </div>
      </RouterLink>
    </ul>
    <div class="rounded bg-[#00000080] mt-[8px]">
      <ul class="overflow-hidden flex items-center gap-[8px] p-[8px]">
        <FilterData />
      </ul>
      <div class="border-b border-b-gray-700">
        <!-- Search in here -->
        <!-- List playlist/ podcast, any thing -->
        <ul>
          <li
            class="w-[100%] cursor-pointer p-[8px] playlist-item"
            v-for="(playlist, index) in getFilteredData"
            :key="index"
            @click="updateCurrentPlaylist(playlist)"
          >
            <RouterLink to="library">
              <div class="flex items-center gap-[8px]">
                <div class="shrink-0">
                  <img
                    class="object-cover rounded h-[48px] w-[48px]"
                    :src="playlist.albumCover"
                    alt="Album cover for {{ playlist.name }}"
                  />
                </div>
                <div
                  class="font-semibold text-white text-[16px] w-[190px] truncate"
                >
                  <p class="truncate">
                    {{ playlist.name }}
                  </p>
                  <p class="flex items-center gap-[8px]">
                    <Pin
                      v-show="playlist.isPin"
                      fillColor="#1abc54"
                      :size="18"
                    />
                    <span
                      class="flex items-center text-[14px] text-gray-400 pr-[8px] truncate"
                    >
                      <span>{{ playlist.type }} </span>
                      <span
                        class="inline-block rounded-full h-[4px] w-[4px] bg-gray-400 mx-[4px] shrink-0"
                      ></span>

                      <span>{{ playlist.author }} </span>
                    </span>
                  </p>
                </div>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
import { ref } from "vue";
import { mapState, mapGetters, mapMutations } from "vuex";

import { RouterLink, RouterView } from "vue-router";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import Plus from "vue-material-design-icons/Plus.vue";
import Pin from "vue-material-design-icons/Pin.vue";
// Components
import MenuItemComponent from "../components/MenuItem.vue";
import FilterData from "../components/FilterData.vue";
export default {
  setup() {
    let openMenu = ref(false);
    return {
      openMenu,
    };
  },
  components: {
    // Icon
    ChevronRight,
    Plus,
    Pin,
    // Components
    MenuItemComponent,
    FilterData,
    RouterLink,
    RouterView,
  },
  computed: {
    ...mapState([]),
    ...mapGetters(["getFilteredData"]),
  },
  methods: {
    ...mapMutations(["updateCurrentPlaylist"]),
  },
};
</script>

<style scoped>
.playlist-item:hover {
  background: #ffffff4d;
  border-radius: 8px;
  user-select: none;
}
</style>
