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
    <Timer/>
  </div>
</template>

<script>

import Timer from './Timer.vue'
export default {
  components: {
    Timer
  },
  data () {
    return {
      round: 10
    }
  },
  computed: {
    isReady () {
      return this.$store.getters.isReady
    },
    isTimeOut () {
      return this.$store.state.isReady
    }
  },
  sockets: {
    gameOn (question) {
      // const index = Math.floor(Math.random() * this.$store.state.questions.length)
      // let question = this.$store.state.questions[index]
      // console.log(index, question)
      return question
    }
  },
  methods: {
    questions () {
      return this.gameOn
    }
  }
}
</script>

<style>

</style>