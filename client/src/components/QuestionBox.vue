<template>
  <div>
    <b-card class="text-center">
      <b-card-text :class="classAnswer">{{ question }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "QuestionBox",
  computed: {
    question() {
      return this.$store.state.gamePaused
        ? this.$store.state.question.question
        : this.$store.state.question.statement;
    },
    classAnswer() {
      return !this.$store.state.gamePaused
        ? ""
        : this.$store.state.question.answer
        ? "text-success"
        : "text-danger";
    },
  },
};
</script>

<style></style>
