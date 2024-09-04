<template>
  <TopAdBanner/>
  <TopNavigationBar/>
</template>

<script>
import TopAdBanner from "~/components/shared/TopAdBanner.vue";
import TopNavigationBar from "~/components/shared/TopNavigationBar.vue";

export default {
  name: "Header",
  components: {TopNavigationBar, TopAdBanner}
}
</script>

<style scoped>

</style>