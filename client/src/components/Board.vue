<template>
  <b-col
    class="border position-relative"
    style="height: 100vh; background-color: #f8f5f1;"
  >
    <ul style="margin-top: 60%">
      <li v-for="player in players" :key="player.id">
        <span :class="getListClass(player)">
          {{ player.name }}
        </span>
      </li>
    </ul>
    <ButtonAnswer
      :boardState="boardState"
      v-if="isGame && isAlive && !gamePaused"
      class="position-absolute"
      style="bottom: 8%;left: 40%;"
    ></ButtonAnswer>
  </b-col>
</template>

<script>
import ButtonAnswer from "../components/ButtonAnswer";

export default {
  name: "Board",
  props: ["boardState"],
  components: {
    ButtonAnswer,
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
    isAlive() {
      return this.$store.state.isAlive;
    },
  },
};
</script>

<style></style>
