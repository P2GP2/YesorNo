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
      if (this.$store.state.isGame) {
        if (!this.gamePaused) {
          this.$socket.emit("timeOut", this.$store.state.question.answer);
        } else {
          this.$store.commit("changeCounter", 3);
          this.$store.commit("timeCounter");
        }
      }
    },
  },
  computed: {
    timeCounter() {
      if (this.$store.state.timeCounter === 0) {
        this.changeCounter();
      }
      return this.$store.state.timeCounter;
    },
    gamePaused() {
      return this.$store.state.gamePaused;
    },
  },
};
</script>
