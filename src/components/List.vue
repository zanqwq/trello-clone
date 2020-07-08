<template>
  <div
    class="list d-flex flex-column"
    :draggable="!isEditing"
    @dragstart.self="$emit('drag-start', $event)"
    @dragenter.prevent
    @dragover.prevent
    @drop.prevent="$emit('drop-on-list', $event)"
  >
    <div class="list-header position-relative clearfix">
      <b-button
        class="float-right remove-list-btn"
        variant="danger"
        size="sm"
        @click="$emit('remove-list')"
      >
        <b-icon icon="trash" />
      </b-button>
      <input
        type="text"
        class="list-title-editor p-2 border-0 rounded-sm"
        placeholder="edit your card title here"
        :value="title"
        @input="$emit('edit-list-title', $event)"
        @click="isEditing = true"
        @blur="isEditing = false"
        @keyup.enter="$event.target.blur()"
      />
    </div>

    <div class="list-cards position-relative">
      <transition-group name="card" tag="div">
        <Card
          class="my-1 px-2 py-1 rounded-lg text-wrap shadow-sm"
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
      </transition-group>
    </div>

    <!-- card adder -->
    <input
      type="text"
      class="card-adder my-2 px-1 border-0 w-100"
      placeholder="+ Add another card "
      @keyup.enter="addCard($event, cards)"
      @focus="isEditing = true"
      @blur="isEditing = false"
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
      isEditing: false
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
  max-height: 80%;

  word-wrap: break-word;
  overflow-x: hidden;
  overflow-y: auto;
  color: #172b4d;
  background: #dae1e7;
}

.list:hover {
  cursor: pointer;
}

.list-header {
  min-height: 20px;
  flex: 0 0 auto;
}

.list-cards {
  top: 0px;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
}

.list:hover .remove-list-btn {
  opacity: 1;
  transform: translateX(0);
}

.remove-list-btn {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.3s ease-in-out;
}

.list-title-editor,
.card-adder {
  outline: none;
  background: transparent;
  transition: all 0.1s ease-in-out;
}

.list-title-editor:hover,
.card-adder:hover {
  background: rgb(204, 204, 204);
  cursor: pointer;
}

.list-title-editor:focus,
.card-adder:focus {
  background: white;
  cursor: text;
}

.list-title-editor::placeholder,
.card-adder::placeholder {
  color: var(--gray);
}

.card-adder {
  height: 40px;
}

.card-enter,
.card-leave-to {
  opacity: 0;
  transform: translateX(-400px);
}

.card-enter-active,
.card-leave-active {
  transition: all 0.5s ease-in-out;
}

.card-move {
  transition: all 0.5s ease-in-out;
}
</style>
