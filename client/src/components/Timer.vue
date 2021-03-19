<template>
  <div>
    <b-card class="text-center">
      <b-card-text>{{ timeCounter }}</b-card-text>
    </b-card>
  </div>
  <!-- <circular-count-down-timer
    :initial-value="setTimer"
    :steps="7"
    :size="120"
    :padding="10"
    :paused="!isTimeOut"
    @updated="checkTimer"
  ></circular-count-down-timer> -->
</template>

<script>
export default {
  name: "Timer",
  // methods: {
  //   changeCounter() {
  //     this.$store.commit("changeCounter", 3);
  //   },
  // },
  // computed: {
  //   timeCounter() {
  //     return this.$store.state.timeCounter;
  //   },
  //   resetCounter() {
  //     if (this.timeCounter === 0) {
  //       this.changeCounter();
  //       this.$store.commit("timeCounter");
  //     }
  //     return false;
  //   },
  // },
  computed: {
    isTimeOut() {
      return this.$store.state.isReady;
    },
    questions() {
      const index = Math.floor(
        Math.random() * this.$store.state.questions.length
      );
      let question = this.$store.state.questions[index];
      console.log(index, question);
      return question;
    },
    setTimer() {
      // buat set ulang timer
      return this.$store.state.setTime;
    },
  },
  methods: {
    checkTimer(status) {
      if (status.value === 0) {
        // logic check jawaban
      }
    },
  },
};
</script>
