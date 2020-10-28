<template>
  <main id="not-found-page" class="app-view-page">
    <h1>No such page exists!</h1>
    <h2>Auto redirect to home.</h2>
  </main>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    autoRedirect() {
      setTimeout(async () => {
        await this.$router.push("/");
      }, 3000);
    }
  },
  created() {
    this.autoRedirect();
  }
}
</script>

<style scoped>

</style>
