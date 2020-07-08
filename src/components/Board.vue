<template>
  <div>
    <Header />

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
      <transition-group name="list" tag="div" class="d-flex align-items-start">
        <List
          class="ml-3 p-2 rounded shadow"
          v-for="(list, listIndex) of lists"
          :key="list.id"
          :lists="lists"
          :listIndex="listIndex"
          :title="list.title"
          :cards="list.cards"
          @edit-list-title="editListTitle($event, list)"
          @remove-list="removeList(listIndex)"
          @edit-card="openModal($event)"
          @drag-start="
            ondragstart($event, {
              dragType: 'list',
              fromListIndex: listIndex
            })
          "
          @drop-on-list="dropOnList($event, listIndex)"
        >
        </List>
      </transition-group>

      <!-- list adder -->
      <div class="ml-3">
        <input
          type="text"
          class="list-adder w-100"
          placeholder="+ Add another list"
          @keyup.enter="addList($event)"
        />
      </div>
    </div>

    <b-modal id="card-modal" ok-title="Save" @ok="editCard">
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
import List from "@/components/List.vue";
import { mapGetters } from "vuex";
import { uid } from "@/utils/utils.js";

export default {
  data() {
    return {
      isEditingListTitle: false,
      editedCard: null,
      editedCardTitle: "",
      editedCardDescription: ""
    };
  },
  computed: {
    ...mapGetters(["getBoardById"]),
    board() {
      return this.getBoardById(this.$route.params.id);
    },
    lists() {
      return this.board.lists;
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
    removeList(listIndex) {
      this.$store.commit("REMOVE_LIST", { lists: this.board.lists, listIndex });
    },
    openModal(card) {
      this.editedCard = card;
      this.editedCardTitle = card.title;
      this.editedCardDescription = card.description;

      this.$root.$emit("bv::show::modal", "card-modal");
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
      e.dataTransfer.setData("data", JSON.stringify(data));
    },
    dropOnList(e, toListIndex) {
      let data = JSON.parse(e.dataTransfer.getData("data"));
      let dragType = data.dragType;

      let listDropOnList = dragType === "list";
      let cardDropOnList = dragType === "card";
      let lists = this.board.lists;
      let fromListIndex = data.fromListIndex;

      if (listDropOnList) {
        this.$store.commit("MOVE_LIST", { lists, fromListIndex, toListIndex });
      } else if (cardDropOnList) {
        let fromCards = lists[fromListIndex].cards;
        let fromCardIndex = data.fromCardIndex;
        let toCards = lists[toListIndex].cards;
        // if a card is drop on a list then put this card at the end of those cards
        let toCardIndex = toCards.length;

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
    Header,
    List
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
  color: #f9fffc;
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

.list-adder {
  min-width: 275px;
  max-width: 350px;
  height: 3rem;
  border: none;
}

.list-adder:focus {
  outline: none;
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

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(200px);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-in-out;
}

.list-move {
  transition: all 0.5s ease-in-out;
}
</style>
