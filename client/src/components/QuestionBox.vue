<template>
  <div>
    <b-card class="text-center position-sticky w-50 h-auto"
    v-show="isReady"
    >
      <b-card-text class="">{{questions}}</b-card-text>
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
      return this.$store.state.isReady
    }
  }
}
</script>

<style>

</style>