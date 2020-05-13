<template>
  <div>
    <Header :hasLogin="true" />
    <div class="body d-flex align-items-start overflow-auto">
      <div
        class="list ml-3 p-2 rounded shadow"
        v-for="(list, index) of board.lists"
        :key="index"
        draggable="true"
      >
        <template>
          <h6>{{ list.title }}</h6>
          <div
            class="card my-2 p-1 rounded-lg text-wrap shadow-sm"
            v-for="(card, index) of list.cards"
            :key="index"
            draggable="true"
          >
            {{ card.title }}
          </div>
          <input
            type="text"
            class="card-adder pl-1 w-100 bg-transparent"
            placeholder="+ Add another card "
            @keyup.enter="addCard(list, $event)"
          />
        </template>
      </div>
      <div class="list ml-3">
        <input
          type="text"
          class="list-adder w-100"
          placeholder="+ Add another list"
          @keyup.enter="addList($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { mapGetters } from "vuex";
import { uid } from "@/utils/utils.js";
export default {
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

      this.$store.commit("ADD_LIST", { board: this.board, list });

      e.target.value = "";
    },
    addCard(list, e) {
      let card = {
        id: uid(),
        title: e.target.value,
        description: ""
      };

      this.$store.commit("ADD_CARD", { list, card });

      e.target.value = "";
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.body {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  padding-top: 5rem;
  background-color: #38a89d;
}

.list {
  min-width: 275px;
  max-width: 350px;

  word-wrap: break-word;
  color: #172b4d;
  background: #dae1e7;
}

.list:hover {
  cursor: pointer;
}

.card {
  background: var(--white);
  transition: all 0.3s ease-in-out;
}

.card:hover {
  background: #e9e9e9;
  cursor: pointer;
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

.list-adder {
  height: 3rem;
  border: none;
}

.list-adder:focus {
  outline: none;
}
</style>
