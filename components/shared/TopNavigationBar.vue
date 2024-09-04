<template>
  <div class="row py-1 px-5">
    <VueImage :url="url" :style="{marginLeft: '10px', width: '200px'}"/>
  </div>
</template>

<script>
import VueImage from "~/components/VueImage.vue";

export default {
  name: "TopNavigationBar",
  components: {
    VueImage,
  },
  data() {
    return {
      url: '/logos/full-horizontal.svg'
    }
  }
}
</script>

<style scoped>

</style>