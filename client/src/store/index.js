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
    setTime: 10,
    questions: [],
    isWinner: false
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
    isReady(state) {
      return state.players.filter((player) => {
        return player.id === state.userId;
      })[0].isReady;
    },
  },
  modules: {},
});
