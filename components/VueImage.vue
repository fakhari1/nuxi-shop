<template>
  <img :src="url" alt="" :style="{...styles}">
</template>

<script>
export default {
  name: 'VueImage',
  props: {
    url: {
      required: true,
      type: String,
    },
    styles: {
      default: {
        width: 'auto',
        height: 'auto',
      }
    },
  }
}
</script>


<style scoped>

</style>