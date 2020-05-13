import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "zan",
      id: "114514",
      boards: []
    }
  },
  mutations: {
    ADD_BOARD(state, { board }) {
      state.user.boards.push(board);
    },
    ADD_LIST(state, { board, list }) {
      board.lists.push(list);
    },
    ADD_CARD(state, { list, card }) {
      list.cards.push(card);
    }
  },
  actions: {},
  getters: {
    getBoardById(state) {
      return id => state.user.boards.find(board => board.id === id);
    }
  },
  modules: {},
  strict: process.env.NODE_ENV !== "production"
});
