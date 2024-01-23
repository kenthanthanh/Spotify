<script setup>
import { ref, toRefs } from "vue";
import { RouterLink } from "vue-router";
import uniqolor from "uniqolor";

const randomColor = ref(uniqolor.random());
const color = randomColor.value.color;
const props = defineProps({
  image: String,
  category: String,
});
const { image, category } = toRefs(props);
</script>
<template>
  <RouterLink to="library">
    <div
      v-if="randomColor"
      :style="`background-color: ${color};`"
      class="select-none contrast-[2] brightness-[0.87] rounded-xl aspect-square relative overflow-hidden"
    >
      <div class="font-bold text-white text-2xl p-[16px] truncate">
        {{ category }}
      </div>
      <img
        :src="image"
        alt=""
        class="absolute rounded-lg contrast-[0.55] -right-3.5 bottom-0 max-w-[100px] rotate-[25deg]"
      />
    </div>
  </RouterLink>
</template>
<style></style>
