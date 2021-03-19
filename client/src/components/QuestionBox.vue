<template>
  <div>
    <b-card class="text-center position-sticky w-50 h-auto"
    v-show="isReady"
    >
      <b-card-text class="">{{questions}}</b-card-text>
    <circular-count-down-timer
    :initial-value="10"
    :steps="7"
    :size="120"
    :padding="10"
    :paused="!isReady"
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