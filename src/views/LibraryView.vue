<script>
import Play from "vue-material-design-icons/Play.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import DotsHorizontal from "vue-material-design-icons/DotsHorizontal.vue";
import Heart from "vue-material-design-icons/Heart.vue";
import ClockTimeThreeOutline from "vue-material-design-icons/ClockTimeThreeOutline.vue";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    Play,
    Pause,
    DotsHorizontal,
    Heart,
    ClockTimeThreeOutline,
    Pause,
  },
  method: {},
  computed: {
    ...mapState([
      "songs",
      "currentIndex",
      "timeProgress",
      "isRandom",
      "isPlaying",
      "isRepeat",
      "volume",
      "player",
      "current",
      "config",
    ]),
    ...mapGetters([
      "getSongs",
      "getCurrentIndex",
      "getTimeProgress",
      "isRandom",
      "isPlaying",
      "isRepeat",
      "getVolume",
      "getPlayer",
    ]),
  },
};
</script>
<template>
  <div class="overflow-x-hidden pt-[4px]">
    <div
      class="flex items-end gap-[16px] pb-[16px] px-[16px]"
      style="
        background: linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%),
          #5f5f5f;
      "
    >
      <div class="w-[128px] h-[128px]">
        <img
          class="h-[100%] w-[100%] object-cover rounded"
          src="../assets/img/avatar.avif"
          alt=""
        />
      </div>
      <div>
        <span class="text-sm text-white">Playlist</span>
        <h1 class="text-white text-8xl font-extrabold">Lyrics thứ tư &lt;3</h1>
        <div class="flex items-center mt-[32px]">
          <img
            src="../assets/img/avatar.avif"
            alt=""
            class="rounded-full bg-[#000000B3]"
            style="width: 24px; height: 24px; object-fit: cover"
          />
          <a href="#!" class="text-white text-[14px] ml-1.5 font-bold"
            >h2_siee</a
          >
          <span class="rounded-full h-[4px] w-[4px] bg-white mx-[4px]"></span>
          <span class="text-white text-[14px] font-normal"
            >129 songs,
            <span class="text-gray-400"> about 7 hr 30 min</span></span
          >
        </div>
      </div>
    </div>
    <div class="px-[16px]">
      <div class="py-[16px] flex justify-between">
        <div class="flex items-center gap-[24px]">
          <button class="p-[16px] rounded-full bg-[#1ed760]">
            <Play v-if="!isPlaying" fillColor="#181818" :size="32" />
            <Pause v-else fillColor="#181818" :size="32" />
          </button>
          <button type="button">
            <DotsHorizontal fillColor="#FFFFFFB2" :size="32" />
          </button>
        </div>
        <button
          type="button"
          class="flex items-center text-[#FFFFFFB2] text-[14px] font-normal px-[8px]"
        >
          List
          <DotsHorizontal class="ml-[8px]" fillColor="#FFFFFFB2" :size="32" />
        </button>
      </div>
    </div>
    <div class="px-[16px]">
      <table class="table-fixed w-[100%] text-left text-sm text-gray-400">
        <thead class="">
          <tr class="px-[16px] border-b border-b-[#2A2A2A] pb-[8px]">
            <th class="pl-[16px] w-[35px]">#</th>
            <th class="w-[32%]">Title</th>
            <th class="w-[22%]">Album</th>
            <th class="w-[17%]">Date added</th>
            <th class="w-[60px]"></th>

            <th class="flex justify-center pr-[16px]">
              <ClockTimeThreeOutline
                style="display: inline-block"
                fillColor="#FFFFFF"
                :size="20"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="song in songs"
            :key="song.id"
            class="h-[56px] hover:text-white"
          >
            <td class="pl-[16px] text-base">{{ song.id }}</td>

            <td>
              <div class="flex items-center">
                <div class="">
                  <img
                    class="object-cover rounded h-[40px] w-[40px]"
                    :src="song.poster"
                    alt="Album cover for {{ song.title }}"
                  />
                </div>
                <div class="ml-[8px] cursor-pointer">
                  <div class="text-base text-white hover:underline">
                    <a href="#!">
                      {{ song.title }}
                    </a>
                  </div>
                  <a href="#!" class="hover:underline">{{ song.singer }}</a>
                </div>
              </div>
            </td>
            <td class="hover:underline cursor-pointer">
              <a href="#!">{{ song.title }}</a>
            </td>
            <td>4 weeks ago</td>
            <td class="text-center cursor-pointer">
              <Heart
                class="fill-white hover:fill-green-400"
                style="display: inline-block"
              />
            </td>
            <td class="text-center pr-[16px]">05:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
td + td,
th + th {
  padding-left: 16px;
}
tbody tr:hover {
  background: hsla(0, 0%, 100%, 0.3);
  user-select: none;
}
</style>
