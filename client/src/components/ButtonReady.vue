<template>
  <b-button
    @click="ready"
    variant="success"
    class="position-sticky mx-auto mt-2"
    :disabled="isReady"
  >
    Ready
  </b-button>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isReady() {
      return this.$store.getters.isReady;
    },
  },
  methods: {
    ready() {
      this.$socket.emit("ready");
    },
  },
};
</script>

<style></style>
