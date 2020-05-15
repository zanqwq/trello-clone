<template>
  <div>
    <Header :hasLogin="true" />

    <div class="toolbar">
      <input
        type="text"
        class="board-title-editor border-0 ml-3 rounded font-weight-bold"
        :value="board.title"
        @input="editBoardTitle($event)"
        @keyup.enter="$event.target.blur()"
      />
    </div>

    <div class="body d-flex align-items-start overflow-auto">
      <!-- lists of board -->
      <div
        class="list ml-3 p-2 rounded shadow"
        v-for="(list, listIndex) of board.lists"
        :key="listIndex"
        :draggable="!isEditingBoardTitle"
        @dragstart.self="
          ondragstart($event, {
            dragType: 'list',
            fromListIndex: listIndex
          })
        "
        @dragenter.prevent
        @dragover.prevent
        @drop.prevent="dropOnList($event, listIndex)"
      >
        <template>
          <div class="clearfix">
            <input
              type="text"
              class="list-title-editor d-inline-block px-2 border-0 rounded-sm"
              :value="list.title"
              @input="editListTitle($event, list)"
              @focus="isEditingBoardTitle = true"
              @blur="isEditingBoardTitle = false"
              @keyup.enter="$event.target.blur()"
            />
            <b-button
              class="float-right remove-list"
              variant="danger"
              size="sm"
              @click="removeList(listIndex)"
            >
              <b-icon icon="trash" />
            </b-button>
          </div>

          <!-- cards of list -->
          <div
            class="card my-2 p-2 rounded-lg text-wrap shadow-sm"
            v-for="(card, cardIndex) of list.cards"
            :key="cardIndex"
            draggable="true"
            @dragstart.self="
              ondragstart($event, {
                dragType: 'card',
                fromCards: list.cards,
                fromCardIndex: cardIndex
              })
            "
            @dragenter.prevent
            @dragover.prevent
            @drop.prevent="dropOnCard($event, list.cards, cardIndex)"
          >
            <div>
              {{ card.title }}
              <b-button
                class="float-right remove-card"
                variant="danger"
                size="sm"
                @click="removeCard(list, cardIndex)"
              >
                <b-icon icon="trash" />
              </b-button>
              <b-button
                class="float-right mr-1 edit-card"
                variant="success"
                size="sm"
                @click="setCardDataForModal(card)"
                v-b-modal.modal
              >
                <b-icon icon="pencil" />
              </b-button>
            </div>
          </div>

          <!-- card adder -->
          <input
            type="text"
            class="card-adder pl-1 w-100 bg-transparent"
            placeholder="+ Add another card "
            @keyup.enter="addCard($event, list.cards)"
          />
        </template>
      </div>

      <!-- list adder -->
      <div class="list ml-3">
        <input
          type="text"
          class="list-adder w-100"
          placeholder="+ Add another list"
          @keyup.enter="addList($event)"
        />
      </div>
    </div>

    <b-modal id="modal" ok-title="Save" @ok="editCard">
      <template #modal-title>
        <input
          type="text"
          class="card-title-editor border-0 rounded-sm"
          v-model="editedCardTitle"
          placeholder="edit your card title here"
          @keyup.enter="$event.target.blur()"
        />
      </template>
      <textarea
        class="card-description-editor w-100 border-0 rounded-sm"
        placeholder="edit your card description here"
        v-model="editedCardDescription"
        rows="10"
      ></textarea>
    </b-modal>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { mapGetters } from "vuex";
import { uid } from "@/utils/utils.js";
export default {
  data() {
    return {
      isEditingBoardTitle: false,
      editedCard: null,
      editedCardTitle: "",
      editedCardDescription: "",
      dataTransfer: {}
    };
  },
  computed: {
    ...mapGetters(["getBoardById"]),
    board() {
      return this.getBoardById(this.$route.params.id);
    }
  },
  methods: {
    addList(e) {
      let list = {
        title: e.target.value,
        id: uid(),
        cards: []
      };

      this.$store.commit("ADD_LIST", { lists: this.board.lists, list });

      e.target.value = "";
    },
    addCard(e, cards) {
      let card = {
        id: uid(),
        title: e.target.value,
        description: ""
      };

      this.$store.commit("ADD_CARD", { cards, card });

      e.target.value = "";
    },
    removeList(listIndex) {
      this.$store.commit("REMOVE_LIST", { lists: this.board.lists, listIndex });
    },
    removeCard(list, cardIndex) {
      this.$store.commit("REMOVE_CARD", { cards: list.cards, cardIndex });
    },
    setCardDataForModal(card) {
      this.editedCard = card;
      this.editedCardTitle = card.title;
      this.editedCardDescription = card.description;
    },
    editBoardTitle(e) {
      this.$store.commit("EDIT_BOARD_TITLE", {
        board: this.board,
        title: e.target.value
      });
    },
    editListTitle(e, list) {
      let title = e.target.value;
      this.$store.commit("EDIT_LIST_TITLE", { list, title });
    },
    editCard() {
      this.$store.commit("EDIT_CARD", {
        card: this.editedCard,
        title: this.editedCardTitle,
        description: this.editedCardDescription
      });
    },
    ondragstart(e, data) {
      e.dataTransfer.dropEffect = "move";

      this.dataTransfer = { ...data };
    },
    dropOnList(e, toListIndex) {
      let dataTransfer = this.dataTransfer;
      let dragType = dataTransfer.dragType;

      let listDropOnList = dragType === "list";
      let cardDropOnList = dragType === "card";

      if (listDropOnList) {
        let lists = this.board.lists;
        let fromListIndex = dataTransfer.fromListIndex;
        this.$store.commit("MOVE_LIST", { lists, fromListIndex, toListIndex });
        //
      } else if (cardDropOnList) {
        let fromCards = dataTransfer.fromCards;
        let fromCardIndex = dataTransfer.fromCardIndex;
        let toCards = this.board.lists[toListIndex].cards;
        // if a card is frop on a list then put this card at the end of those cards
        let toCardIndex = toCards.length;

        this.$store.commit("MOVE_CARD", {
          fromCards,
          toCards,
          fromCardIndex,
          toCardIndex
        });
      }
    },
    dropOnCard(e, toCards, toCardIndex) {
      let dataTransfer = this.dataTransfer;
      let dragType = dataTransfer.dragType;

      let listDropOnCard = dragType === "list";
      let cardDropOnCard = dragType === "card";

      if (listDropOnCard) {
        // if a list is drop on a card
        // then just return
        // and let the drop event propagates to "dropOnList",
        // and let the "dropOnList" handler handle this event
        return;
      } else if (cardDropOnCard) {
        // if a card is drop on a card
        // then we need to stop the event propagation to
        // in case that the "dropOnList" add a duplicate card for us
        e.stopPropagation();

        let fromCards = dataTransfer.fromCards;
        let fromCardIndex = dataTransfer.fromCardIndex;

        this.$store.commit("MOVE_CARD", {
          fromCards,
          toCards,
          fromCardIndex,
          toCardIndex
        });
      }
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.toolbar {
  position: absolute;
  margin-top: 4rem;
  z-index: 1000;
}

.board-title-editor {
  height: 50px;
  outline: none;
  color: #ffffff;
  font-size: xx-large;
  background: transparent;
  transition: all 0.1s ease-in-out;
}

.board-title-editor:hover {
  background: #288178;
  cursor: pointer;
}

.board-title-editor:focus {
  background: #1c625b;
  cursor: text;
}

.body {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  padding-top: 8rem;
  background-color: #38a89d;
}

.list {
  min-width: 275px;
  max-width: 350px;

  word-wrap: break-word;
  overflow: hidden;
  color: #172b4d;
  background: #dae1e7;
}

.list:hover {
  cursor: pointer;
}

.list:hover .remove-list {
  opacity: 1;
  transform: translateX(0);
}

.list-adder {
  height: 3rem;
  border: none;
}

.list-adder:focus {
  outline: none;
}

.remove-list {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.3s ease-in-out;
}

.list-title-editor {
  background: transparent;
  transition: all 0.1s ease-in-out;
}

.list-title-editor:hover {
  background: rgb(204, 204, 204);
  cursor: pointer;
}

.list-title-editor:focus {
  outline: none;
  background: white;
  cursor: text;
}

.card {
  background: var(--white);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

.remove-card,
.edit-card {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.3s ease-in-out;
}

.card:hover {
  background: #e9e9e9;
  cursor: pointer;
}

.card:hover .remove-card,
.card:hover .edit-card {
  opacity: 1;
  transform: translateX(0);
}

.card-adder {
  outline: none;
  border: none;
}

.card-adder::placeholder {
  color: var(--gray);
}

.card-adder:focus {
  outline: none;
  border: none;
}

.card-title-editor,
.card-description-editor {
  transition: all 0.1s ease-in-out;
}

.card-title-editor:hover,
.card-description-editor:hover {
  background: rgb(238, 238, 238);
  cursor: pointer;
}

.card-title-editor:focus,
.card-description-editor:focus {
  outline: none;
  background: rgb(223, 223, 223);
  cursor: text;
}
</style>
