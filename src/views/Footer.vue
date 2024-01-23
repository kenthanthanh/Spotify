<template>
  <footer class="px-[32px] py-[40px] font-normal text-[#a7a7a7]">
    <div
      class="flex items-start justify-between text-base mt-[40px] border-b border-[#ffffff4d]"
    >
      <div class="flex items-start">
        <ul class="px-[30px] pb-[30px] ml-[-30px] w-[200px]">
          <p class="text-white font-bold pb-[8px]">Company</p>
          <li class="pb-[8px] hover:text-white hover:underline">
            <a href="#!">About</a>
          </li>
          <li class="pb-[8px] hover:text-white hover:underline">
            <a href="#!">Jobs</a>
          </li>
          <li class="pb-[8px] hover:text-white hover:underline">
            <a href="#!">For the Record</a>
          </li>
        </ul>
        <ul class="px-[30px] pb-[30px] ml-[-30px] w-[200px]">
          <p class="text-white font-bold pb-[8px]">Communities</p>
          <li class="pb-[8px] hover:text-white hover:underline">
            <a href="#!">For Artists</a>
          </li>
          <li class="pb-[8px] hover:text-white hover:underline">
            <a href="#!">Developers</a>
          </li>
          <li class="pb-[8px] hover:text-white hover:underline">
            <a href="#!">Advertising</a>
          </li>
          <li class="pb-[8px] hover:text-white hover:underline">
            <a href="#!">Investors</a>
          </li>
          <li class="pb-[8px] hover:text-white hover:underline">
            <a href="#!">Vendors</a>
          </li>
        </ul>
        <ul class="px-[30px] pb-[30px] ml-[-30px] w-[200px]">
          <p class="text-white font-bold pb-[8px]">Useful links</p>
          <li class="pb-[8px] hover:text-white hover:underline">
            <a href="#!">Supports</a>
          </li>
          <li class="pb-[8px] hover:text-white hover:underline">
            <a href="#!">Free Mobile App</a>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-[16px] cursor-pointer">
        <Instagram
          class="rounded-full p-[10px] bg-[#292929] hover:bg-[#ffffff4d]"
          fillColor="#fff"
          :size="20"
          style="display: inline-block"
        />
        <Twitter
          class="rounded-full p-[10px] bg-[#292929] hover:bg-[#ffffff4d]"
          fillColor="#fff"
          :size="20"
          style="display: inline-block"
        />
        <Facebook
          class="rounded-full p-[10px] bg-[#292929] hover:bg-[#ffffff4d]"
          fillColor="#fff"
          :size="20"
          style="display: inline-block"
        />
      </div>
    </div>
    <div class="text-sm flex items-center justify-between pt-[30px]">
      <ul class="flex items-center gap-[16px]">
        <li class="hover:text-white">
          <a href="#!">Legal</a>
        </li>
        <li class="hover:text-white">
          <a href="#!">Privacy Center</a>
        </li>
        <li class="hover:text-white">
          <a href="#!">Privacy Policy</a>
        </li>
        <li class="hover:text-white">
          <a href="#!">About Ads</a>
        </li>
        <li class="hover:text-white">
          <a href="#!">Accessibility</a>
        </li>
      </ul>
      <span>&copy; 2014 Spotify AB</span>
    </div>
  </footer>
</template>

<script>
import Facebook from "vue-material-design-icons/Facebook.vue";
import Twitter from "vue-material-design-icons/Twitter.vue";
import Instagram from "vue-material-design-icons/Instagram.vue";

export default {
  components: {
    // Icon
    Facebook,
    Twitter,
    Instagram,

    // Components
  },
};
</script>

<style scoped></style>
