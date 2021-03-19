<template>
  <div>
    <ButtonReady></ButtonReady>
    <ul>
      <li v-for="player in players" :key="player.id">
        {{ player.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import ButtonReady from "../../components/ButtonReady.vue";
export default {
  name: "WaitingRoom",
  components: { ButtonReady },
  computed: {
    players() {
      return this.$store.state.players;
    },
  },
};
</script>

<style></style>
