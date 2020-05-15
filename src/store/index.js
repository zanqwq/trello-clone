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
    ADD_BOARD(state, { boards, board }) {
      boards.push(board);
    },
    ADD_LIST(state, { lists, list }) {
      lists.push(list);
    },
    ADD_CARD(state, { cards, card }) {
      cards.push(card);
    },
    REMOVE_BOARD(state, { boards, boardIndex }) {
      boards.splice(boardIndex, 1);
    },
    REMOVE_LIST(state, { lists, listIndex }) {
      lists.splice(listIndex, 1);
    },
    REMOVE_CARD(state, { cards, cardIndex }) {
      cards.splice(cardIndex, 1);
    },
    EDIT_BOARD_TITLE(state, { board, title }) {
      board.title = title;
    },
    EDIT_LIST_TITLE(state, { list, title }) {
      list.title = title;
    },
    EDIT_CARD(state, { card, title, description }) {
      card.title = title;
      card.description = description;
    },
    MOVE_LIST(state, { lists, fromListIndex, toListIndex }) {
      let fromList = lists.splice(fromListIndex, 1)[0];
      lists.splice(toListIndex, 0, fromList);
    },
    MOVE_CARD(state, { fromCards, toCards, fromCardIndex, toCardIndex }) {
      let fromCard = fromCards.splice(fromCardIndex, 1)[0];
      toCards.splice(toCardIndex, 0, fromCard);
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
