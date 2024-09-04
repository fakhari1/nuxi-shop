<template>

  <desktop-layout v-if="theme === 'Desktop'">
    <slot/>
  </desktop-layout>

  <mobile-layout v-else>
    <slot/>
  </mobile-layout>

</template>


<script setup>
import DesktopLayout from "~/layouts/DesktopLayout.vue";
import MobileLayout from "~/layouts/MobileLayout.vue";

const theme = useState('theme');
</script>

<style scoped>

</style>