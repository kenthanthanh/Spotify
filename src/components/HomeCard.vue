<script setup>
import { toRefs } from "vue";
import { RouterLink } from "vue-router";
const props = defineProps({
  image: String,
  title: String,
  subTitle: String,
});
const { image, title, subTitle } = toRefs(props);
</script>
<template>
  <RouterLink to="library">
    <div
      class="p-[16px] rounded-lg bg-[#181818] hover:bg-[#252525] cursor-pointer select-none"
    >
      <img
        :src="image"
        :alt="title"
        class="rounded-lg w-[170px] h-full object-cover"
      />
      <div class="mt-[16px]">
        <h3 class="text-white font-bold text-base">
          {{ title }}
        </h3>
        <p class="text-sm font-medium text-[#6a6a6a]">{{ subTitle }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<style></style>
