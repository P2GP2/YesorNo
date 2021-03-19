<template>
  <b-col
    class="border position-relative"
    style="height: 100vh; background-color: gray;"
  >
    <ul>
      <li v-for="player in players" :key="player.id">
        <span :class="getListClass(player)">
          {{ player.name }}
        </span>
      </li>
    </ul>
    <b-btn
      v-if="isGame && !gamePaused"
      type="button"
      :variant="btnVariant"
      class="position-absolute"
      style="bottom: 8%;left: 40%;"
      @click="answer"
    >
      {{ btnText }}
    </b-btn>
  </b-col>
</template>

<script>
export default {
  name: "Board",
  props: ["boardState"],
  data() {
    return {
      btnVariant: this.boardState ? "primary" : "danger",
      btnText: this.boardState ? "Yes" : "No",
    };
  },
  methods: {
    getListClass(player) {
      return player.isReady ? "" : "text-secondary";
    },
    answer() {
      this.$socket.emit("answer", this.boardState);
    },
  },
  computed: {
    players() {
      return this.boardState
        ? this.$store.getters.playersTrue
        : this.$store.getters.playersFalse;
    },
    isGame() {
      return this.$store.state.isGame;
    },
    gamePaused() {
      return this.$store.state.gamePaused;
    },
  },
};
</script>

<style></style>
