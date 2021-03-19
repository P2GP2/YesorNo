<template>
  <div>
    <ButtonReady></ButtonReady>
    <ul>
      <li v-for="player in players" :key="player.id">
        <span :class="getListClass(player)">
          {{ player.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import ButtonReady from "../../components/ButtonReady.vue";
export default {
  name: "WaitingRoom",
  components: { ButtonReady },
  methods: {
    getListClass(player) {
      return player.isReady ? "text-success" : "";
    },
  },
  computed: {
    players() {
      return this.$store.state.players;
    },
  },
};
</script>

<style></style>
