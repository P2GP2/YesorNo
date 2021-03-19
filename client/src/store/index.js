import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: "",
    isGame: false,
    isAlive: true,
    players: [],
    question: "",
    timeCounter: 7,
    gamePaused: false,
  },
  mutations: {
    emptyUserId(state) {
      state.userId = "";
    },
    joined(state, payload) {
      state.userId = state.userId !== "" ? state.userId : payload.userId;
      state.players = payload.players;
    },
    players(state, payload) {
      state.players = payload;
    },
    gameOn(state, payload) {
      state.isGame = true;
      state.players = payload.players;
      state.question = payload.question;
      if (
        state.players.findIndex((player) => player.id === state.userId) === -1
      ) {
        state.isAlive = false;
      }
    },
    changeCounter(state, payload) {
      state.timeCounter = payload;
    },
    timeCounter(state) {
      const interval = setInterval(() => {
        state.timeCounter--;
        if (state.timeCounter === 0) {
          clearInterval(interval);
          state.gamePaused = !state.gamePaused;
        }
      }, 1000);
    },
    gamePaused(state) {
      state.gamePaused = !state.gamePaused;
    },
    winner(state) {
      state.userId = "";
      state.isGame = false;
      state.isAlive = true;
      state.players = [];
      state.question = "";
      state.timeCounter = 7;
      state.gamePaused = false;
    },
    //divider
    startTime(state, payload) {
      state.timeOut = payload;
    },
    setQuestion(state, payload) {
      state.questions.push(payload);
    },
  },
  actions: {
    SOCKET_sendQuestion(context, questionData) {
      context.commit("setQuestion", questionData);
    },
  },
  getters: {
    playersTrue(state) {
      return state.players.filter((player) => player.answer);
    },
    playersFalse(state) {
      return state.players.filter((player) => !player.answer);
    },
    isReady(state) {
      return state.players.filter((player) => {
        return player.id === state.userId;
      })[0].isReady;
    },
  },
  modules: {},
});
