<template>
  <button type="button" :class="btnClass" @click="answer">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: "ButtonAnswer",
  props: ["boardState"],
  data() {
    return {
      btnClass: `btn rounded-circle d-flex justify-content-center align-item-center btn-custom ${
        this.boardState ? "btn-primary" : "btn-danger"
      }`,
      btnText: this.boardState ? "V" : "X",
    };
  },
  methods: {
    answer() {
      this.$socket.emit("answer", this.boardState);
    },
  },
};
</script>

<style>
.btn-custom {
  width: 75px;
  height: 75px;
  font-size: 2.5rem;
}
</style>
