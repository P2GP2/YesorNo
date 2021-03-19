<template>
  <div class="home container">
    <div class="d-block flex-column align-items-center">
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
    players(payload) {
      this.$store.commit("players", payload);
    },
  },
};
</script>
