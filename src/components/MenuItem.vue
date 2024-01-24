<script setup>
import { ref, toRefs, watchEffect } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const props = defineProps({
  iconString: String,
  iconSize: Number,
  pageUrl: String,
  name: String,
});
const { iconString, pageUrl, name, iconSize } = toRefs(props);

let icon = ref(null);
let textIsHover = ref(false);
watchEffect(() => {
  if (route.path == pageUrl.value) {
    icon.value = iconString.value + "-active";
    textIsHover.value = true;
  } else {
    icon.value = iconString.value + "-inactive";
    textIsHover.value = false;
  }
});
const isHover = () => {
  if (icon.value === iconString.value + "-active") return;
  if (icon.value === iconString.value + "-inactive") {
    icon.value = iconString.value + "-inactive-hover";
    textIsHover.value = true;
  } else {
    icon.value = iconString.value + "-inactive";
    textIsHover.value = false;
  }
};
</script>
<template>
  <li
    class="flex items-center justify-start cursor-pointer h-[48px] py-[4px] px-[12px] gap-[20px]"
    @mouseenter="isHover()"
    @mouseleave="isHover()"
  >
    <img
      :height="iconSize"
      :width="iconSize"
      :src="`./src/assets/img/icons/${icon}.png`"
      alt=""
    />
    <div
      :class="textIsHover ? 'text-white' : 'text-[#b3b3b3]'"
      class="font-bold text-[16px]"
    >
      <span :class="route.path == pageUrl ? 'text-white' : ''">
        {{ name }}</span
      >
    </div>
  </li>
</template>

<style></style>
