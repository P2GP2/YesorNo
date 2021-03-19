<template>
  <div>
    <QuestionBox></QuestionBox>
    <Timer></Timer>
  </div>
</template>

<script>
import QuestionBox from "../../components/QuestionBox.vue";
import Timer from "../../components/Timer.vue";

export default {
  name: "Game",
  components: { QuestionBox, Timer },
};
</script>

<style></style>
