<template>
  <div class="home container">
    <!-- Button Ready & Question section -->
    <div class="d-block flex-column align-items-center">
      <!-- <ButtonReady />
      <Question /> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  sockets: {
    joined(payload) {
      this.$store.commit("joined", payload);
    },
  },
};
</script>
