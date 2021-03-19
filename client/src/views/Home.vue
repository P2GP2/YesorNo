<template>
  <div class="home container">
    <div class="d-block flex-column align-items-center">
      <!-- from template -->
      <div class="container-fluid" style="height: 100vh;margin-top: 2vh;margin-bottom: 2vh;">
        <!-- ------------------------------------------ BUTTON START ------------------------------------------ -->
        <div id="ready-btn" style="position: absolute;z-index: 1;left: 45vw;top:2vh; background-color: white">
          <ButtonReady/>
            <!-- <button type="button" class="btn btn-success btn-lg" style="padding: 20px;" >&nbsp; &nbsp; &nbsp; &nbsp; READY! &nbsp; &nbsp; &nbsp; &nbsp;</button> -->
        </div>
        <!-- ------------------------------------------ BUTTON END ------------------------------------------ -->
        <div id="question-timers" style="left: 19vw;position: relative;">
          <Question/>
        </div>
        <div class="row" style="height: 100vh;">
          <div class="col-sm border-right" style="border-right: 11px solid #dee2e6 !important;">
            
            <div class="d-flex flex-row justify-content-start" style="position: relative;top: 12vh;min-height: 11vh; max-height: 20vh;">
                <Avatar />
                <div class="p-2">
                    <img class="rounded-circle" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                    data-holder-rendered="true" style="width: 80px">
                </div>
                <div class="p-2">
                    <img class="rounded-circle" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                    data-holder-rendered="true" style="width: 80px" >
                </div>
              </div>
                <ButtonTrue />
          </div>

          <div class="col-sm">
            
            <div class="d-flex flex-row justify-content-start" style="position: relative;top: 12vh;min-height: 11vh; max-height: 20vh;">
                <Avatar />
                <div class="p-2">
                    <img class="rounded-circle" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                    data-holder-rendered="true" style="width: 80px">
                </div>
                <div class="p-2">
                    <img class="rounded-circle" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                    data-holder-rendered="true" style="width: 80px" >
                </div>
              </div>
              <ButtonFalse />
          </div>
        </div>
      </div>
      <!-- from template -->

      <router-view></router-view>

    </div>
  </div>
</template>

<script>
import ButtonReady from '@/components/ButtonReady'
import Question from '@/components/QuestionBox'
import Avatar from '@/components/Avatar'
import ButtonTrue from '@/components/ButtonTrue'
import ButtonFalse from '@/components/ButtonFalse'

export default {
  name: 'Home',
  components: {
    ButtonReady,
    Question,
    Avatar,
    ButtonTrue,
    ButtonFalse
  },
  sockets: {
    joined(payload) {
      this.$store.commit("joined", payload);
    },
    players(payload) {
      this.$store.commit("players", payload);
    },
  },
};
</script>
