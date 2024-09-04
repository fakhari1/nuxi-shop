<template>
  <div class="row">
    <VueImage :url="url" :styles="{width: '100%', height: '60px'}"/>
  </div>
</template>

<script>
import VueImage from "~/components/VueImage.vue";

export default {
  name: "TopAdBanner",
  components: {VueImage},
  data() {
    return {
      url: '/ad-service-banners/top-ad-banner.gif'
    }
  }
}
</script>

<style scoped>

</style>