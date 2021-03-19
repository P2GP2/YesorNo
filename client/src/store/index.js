import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: "",
    isGame: false,
    isAlive: false,
    players: [],
    // divider
    isReady: false,
    timeOut: false,
    questions: [],
  },
  mutations: {
    joined(state, payload) {
      state.userId = payload.userId;
      state.players = payload.players;
    },
    //divider
    readyButton(state, payload) {
      state.isReady = payload;
    },
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
  modules: {},
});
