<template>
  <img :src="url" alt="" :style="{width: width, height: height}">
</template>

<script>
export default {
  name: 'VueImage',
  props: {
    url: {
      required: true,
      type: String,
    },
    width: {
      default: '100%'
    },
    height: {
      default: 'auto',
    }
  }
}
</script>


<style scoped>

</style>