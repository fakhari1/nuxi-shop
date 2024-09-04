<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer/>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      theme: useState('theme'),
    }
  },
  methods: {
    checkScreenSize() {
      return window.innerWidth >= 900 ? 'Desktop' : 'Mobile';
    }
  },
  mounted() {
    this.theme = this.checkScreenSize();

    window.addEventListener('resize', () => {
      this.theme = this.checkScreenSize();
    })
  }
}
</script>