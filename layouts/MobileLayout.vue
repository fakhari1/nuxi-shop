<template>
  <MobileHeader/>
  <div class="row">
    <slot/>
  </div>
  <MobileFooter/>
</template>

<script>
import MobileHeader from '~/components/layouts/mobile/MobileHeader.vue';
import MobileFooter from '~/components/layouts/mobile/MobileFooter.vue';

export default {
  name: "Mobile",
  components: [
    MobileHeader,
    MobileFooter
  ],
  data() {
    return {}
  }
}
</script>


<style scoped>

</style>