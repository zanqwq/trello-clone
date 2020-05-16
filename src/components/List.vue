<template>
  <div
    class="list"
    :draggable="!isEditingListTitle"
    @dragstart.self="$emit('drag-start', $event)"
    @dragenter.prevent
    @dragover.prevent
    @drop.prevent="$emit('drop-on-list', $event)"
  >
    <div class="clearfix">
      <input
        type="text"
        class="list-title-editor d-inline-block px-2 border-0 rounded-sm"
        :value="title"
        @input="$emit('edit-list-title', $event)"
        @focus="isEditingListTitle = true"
        @blur="isEditingListTitle = false"
        @keyup.enter="$event.target.blur()"
      />
      <b-button
        class="float-right remove-list"
        variant="danger"
        size="sm"
        @click="$emit('remove-list')"
      >
        <b-icon icon="trash" />
      </b-button>
    </div>

    <!-- cards of list -->
    <Card
      class="my-2 p-2 rounded-lg text-wrap shadow-sm"
      v-for="(card, cardIndex) of cards"
      :key="card.id"
      :title="card.title"
      :description="card.description"
      @edit-card="$emit('edit-card', card)"
      @remove-card="removeCard(cards, cardIndex)"
      @drag-start="
        ondragstart($event, {
          dragType: 'card',
          fromListIndex: listIndex,
          fromCardIndex: cardIndex
        })
      "
      @drop-on-card="dropOnCard($event, cards, cardIndex)"
    ></Card>

    <!-- card adder -->
    <input
      type="text"
      class="card-adder pl-1 w-100 bg-transparent"
      placeholder="+ Add another card "
      @keyup.enter="addCard($event, cards)"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { uid } from "@/utils/utils.js";

export default {
  props: {
    lists: {
      typs: Array,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    cards: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isEditingListTitle: false
    };
  },
  computed: {},
  methods: {
    addCard(e, cards) {
      let card = {
        id: uid(),
        title: e.target.value,
        description: ""
      };

      this.$store.commit("ADD_CARD", { cards, card });

      e.target.value = "";
    },
    removeCard(cards, cardIndex) {
      this.$store.commit("REMOVE_CARD", { cards, cardIndex });
    },
    ondragstart(e, data) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.setData("data", JSON.stringify(data));
    },
    dropOnCard(e, toCards, toCardIndex) {
      let data = JSON.parse(e.dataTransfer.getData("data"));
      let dragType = data.dragType;

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

        let fromListIndex = data.fromListIndex;
        let fromCards = this.lists[fromListIndex].cards;
        let fromCardIndex = data.fromCardIndex;

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
    Card
  }
};
</script>

<style scoped>
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

.card-adder {
  outline: none;
  border: none;
}

.card-adder::placeholder {
  color: var(--gray);
}
</style>
