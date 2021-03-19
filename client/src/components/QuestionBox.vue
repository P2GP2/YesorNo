<template>
  <div>
    <b-card class="text-center position-sticky w-50 h-auto" style="height: 15vh;"
    v-show="isReady"
    >
      <b-card-text class="">{{questions}}</b-card-text>
    <circular-count-down-timer
    :initial-value="10"
    :steps="7"
    :size="120"
    :padding="10"
    :paused="!isReady"
    style="width: 102px; height: 120px; padding-top: 10px; margin: 0px auto; box-sizing: border-box;top: -4vh;position: relative;"
    ></circular-count-down-timer>
    </b-card>

  </div>
</template>

<script>

export default {
  data () {
    return {
      round: 10
    }
  },
  computed: {
    isReady () {
      return this.$store.state.isReady
    },
    isTimeOut () {
      return this.$store.state.isReady
    },
    questions () {
      const index = Math.floor(Math.random() * this.$store.state.questions.length)
      let question = this.$store.state.questions[index]
      console.log(index, question)
      return question
    }
  }
}
</script>

<style>

</style>