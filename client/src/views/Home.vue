<template>
  <b-container fluid>
    <b-row>
      <Board
        v-for="(boardState, idx) in boardStates"
        :key="idx"
        :boardState="boardState"
      ></Board>
      <div class="position-absolute w-100 d-flex justify-content-center">
        <div class="d-flex mt-3">
          <router-view></router-view>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import swal from "sweetalert";
import Board from "../components/Board";

export default {
  name: "Home",
  components: {
    Board,
  },
  data() {
    return {
      boardStates: [true, false],
    };
  },
  sockets: {
    joined(payload) {
      this.$store.commit("joined", payload);
    },
    players(payload) {
      this.$store.commit("players", payload);
    },
    gameOn(payload) {
      this.$store.commit("gameOn", payload);
      setTimeout(() => {
        if (this.$route.name !== "Game") {
          this.$router.push("/game");
        }
        this.$store.commit("changeCounter", 7);
        this.$store.commit("timeCounter");
      }, 1000);
    },
    winner(payload) {
      this.$store.commit("winner");
      swal(`The winner is ${payload}`).then(() => {
        this.$router.push("/join");
      });
    },
  },
};
</script>
