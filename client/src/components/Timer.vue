<template>
  <div>
    <b-card class="text-center">
      <b-card-text>{{ timeCounter }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Timer",
  methods: {
    changeCounter() {
      this.$store.commit("changeCounter", 3);
    },
  },
  computed: {
    timeCounter() {
      return this.$store.state.timeCounter;
    },
    resetCounter() {
      if (this.timeCounter === 0) {
        this.changeCounter();
        this.$store.commit("timeCounter");
      }
      return false;
    },
  },
};
</script>

<style></style>
