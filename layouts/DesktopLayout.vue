<template>
  <DesktopHeader />
  <div class="row">
    <slot />
  </div>
  <DesktopFooter />
</template>

<script>
import DesktopHeader from '~/components/layouts/desktop/DesktopHeader.vue';
import DesktopFooter from '~/components/layouts/desktop/DesktopFooter.vue';

export default {
  name: "Desktop",
  components: [
    DesktopHeader,
    DesktopFooter
  ],
  data() {
    return {

    }
  }
}
</script>


<style scoped>

</style>