<template>
  <div class="home container">
    <!-- Button Ready & Question section -->
    <div class="d-block flex-column align-items-center">
      <ButtonReady/>
      <Question/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ButtonReady from '@/components/ButtonReady'
import Question from '@/components/QuestionBox'

export default {
  name: 'Home',
  components: {
    ButtonReady,
    Question
  }
}
</script>
