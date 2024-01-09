<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import ChevronUp from "vue-material-design-icons/ChevronUp.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
import Plus from "vue-material-design-icons/Plus.vue";

import MenuItem from "./components/MenuItem.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import Controller from "./components/Controller.vue";

let openMenu = ref(false);
</script>
<template>
  <div class="bg-black">
    <div
      id="TopNav"
      class="w-[calc(100%-280px)] h-[64px] fixed right-0 z-20 bg-[#101010] bg-opacity-80 flex items-center justify-between px-[24px]"
    >
      <div class="flex items-center">
        <button
          type="button"
          class="rounded-full bg-[#000000B3] hover:bg-[#282828] p-[1px] cursor-pointer"
        >
          <ChevronLeft fillColor="#FFFFFF" :size="30" />
        </button>
        <button
          type="button"
          class="rounded-full bg-[#000000B3] hover:bg-[#282828] p-[1px] hover:bg-[#] ml-4 cursor-pointer"
        >
          <ChevronRight fillColor="#FFFFFF" :size="30" />
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
              src="./assets/img/avatar.avif"
              alt=""
              class="rounded-full bg-[#000000B3]"
              style="width: 27px; height: 27px; object-fit: cover"
            />
            <div class="text-white text-[14px] ml-1.5 font-semibold">
              h2_siee
            </div>
            <ChevronDown
              v-if="!openMenu"
              @click="openMenu = true"
              fillColor="#ffffff"
              :size="25"
            />
            <ChevronUp
              v-else
              @click="openMenu = false"
              fillColor="#ffffff"
              :size="25"
            />
          </div>
        </button>
      </div>
      <span
        v-if="openMenu"
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
      </span>
    </div>
    <div
      id="SideNav"
      class="py-[8px] px-[12px] fixed z-50 bg-black h-[100%] w-[280px]"
    >
      <!-- <RouterLink to="/">
        <img width="125" src="/images/icons/spotify-logo.png" alt="" />
      </RouterLink> -->
      <!-- <div class="my-8"></div> -->
      <ul class="flex flex-col items-start">
        <RouterLink to="/">
          <MenuItem
            name="Home"
            :iconSize="21"
            iconString="home"
            pageUrl="/"
            class="ml-[1px]"
          />
        </RouterLink>
        <RouterLink to="/search">
          <MenuItem
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
          <MenuItem
            name="Your Library"
            :iconSize="21"
            iconString="library"
            pageUrl="/library"
            class="ml-[1px]"
          />
          <div class="flex items-center">
            <button
              type="button"
              class="rounded-full bg-[#000000B3] hover:bg-[#282828] p-[2px] cursor-pointer"
            >
              <Plus fillColor="#FFFFFF" :size="24" />
            </button>
            <button
              type="button"
              class="rounded-full bg-[#000000B3] hover:bg-[#282828] p-[2px] hover:bg-[#] ml-[8px] cursor-pointer"
            >
              <ChevronRight fillColor="#FFFFFF" :size="24" />
            </button>
          </div>
        </RouterLink>
      </ul>
      <div class="overflow-hidden flex items-center gap-[8px] py-[8px]">
        <span
          class="h-[32px] min-w-fit flex items-center justify-center rounded-full text-white bg-[#000000B3] font-normal text-sm px-[12px] py-[4px] cursor-pointer hover:bg-[#282828]"
          ><a href="#!">Playlists</a></span
        >
        <span
          class="h-[32px] min-w-fit flex items-center justify-center rounded-full text-white bg-[#000000B3] font-normal text-sm px-[12px] py-[4px] cursor-pointer hover:bg-[#282828]"
          ><a href="#!">Albums</a></span
        >
        <span
          class="h-[32px] min-w-fit flex items-center justify-center rounded-full text-white bg-[#000000B3] font-normal text-sm px-[12px] py-[4px] cursor-pointer hover:bg-[#282828]"
        >
          <a href="#!">Podcasts </a></span
        >
        <span
          class="h-[32px] min-w-fit rounded-full text-white bg-[#000000B3] font-normal text-sm px-[12px] py-[4px] cursor-pointer hover:bg-[#282828]"
          ><a href="#!">Top Trending</a></span
        >
      </div>
      <div class="border-b border-b-gray-700">
        <ul>
          <li
            class="font-semibold mt-3 text-gray-300 text-[13px] hover:text-white"
          >
            My Playlist #1
          </li>
          <li
            class="font-semibold mt-3 text-gray-300 text-[13px] hover:text-white"
          >
            My Playlist #2
          </li>
          <li
            class="font-semibold mt-3 text-gray-300 text-[13px] hover:text-white"
          >
            My Playlist #3
          </li>
          <li
            class="font-semibold mt-3 text-gray-300 text-[13px] hover:text-white"
          >
            My Playlist #4
          </li>
          <li
            class="font-semibold mt-3 text-gray-300 text-[13px] hover:text-white"
          >
            My Playlist #5
          </li>
        </ul>
      </div>
    </div>
    <div
      class="ml-[280px] h-[100%] overflow-hidden bg-gradient-to-b from-[#1c1c1c] to-black max-w-[calc(100%-280px)]"
    >
      <div class="mt-[60px]"></div>
      <RouterView />
      <div class="mb-[100px]"></div>
      <Controller class="z-20" />
    </div>
  </div>
</template>
