<template>
  <div>
    <b-button @click="isReady" variant="primary"
    class="position-sticky"
    v-show="!readyStatus"
    >Hit Me to Begin!</b-button>
    <p>Pressed State: <strong>{{ readyStatus }}</strong></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    readyStatus () {
      return this.$store.state.isReady
    }
  },
  methods: {
    isReady () {
      console.log('triggered')
      this.$store.commit('readyButton', true)
    }
  }
}
</script>

<style>

</style>