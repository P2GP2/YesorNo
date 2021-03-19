<template>
    <circular-count-down-timer
    :initial-value="setTimer"
    :steps="7"
    :size="120"
    :padding="10"
    :paused="!isTimeOut"
    @updated='checkTimer'
    ></circular-count-down-timer>
</template>

<script>
export default {
  computed: {
    isTimeOut () {
      return this.$store.state.isReady
    },
    questions () {
      const index = Math.floor(Math.random() * this.$store.state.questions.length)
      let question = this.$store.state.questions[index]
      console.log(index, question)
      return question
    },
    setTimer () {
      // buat set ulang timer
      return this.$store.state.setTime
    }
  },
  methods: {
    checkTimer (status) {
      if (status.value === 0) {
        // logic check jawaban
      }
    }
  }
}
</script>

<style>

</style>