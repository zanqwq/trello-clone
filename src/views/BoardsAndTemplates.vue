<template>
  <div>
    <Header />

    <div class="body d-flex align-items-start justify-content-center">
      <div class="sidebar ml-2">
        <router-link
          v-if="user"
          class="mb-3 d-block text-decoration-none"
          :to="{
            name: 'user-boards',
            params: { username: user.username }
          }"
        >
          <b-icon icon="layout-three-columns"></b-icon>
          Boards
        </router-link>
        <router-link
          class="mb-3 d-block text-decoration-none"
          :to="{ name: 'templates' }"
        >
          <b-icon icon="clipboard"></b-icon>
          Templates
        </router-link>
      </div>

      <div class="all-boards w-100 ml-5">
        <template v-if="$route.name === 'user-boards'">
          <div class="d-flex align-items-start flex-wrap">
            <div v-for="(board, index) of user.boards" :key="board.id">
              <router-link
                class="text-decoration-none"
                :to="{
                  name: 'board',
                  params: { id: board.id, title: board.title }
                }"
              >
                <div
                  class="position-relative board-thumnail mr-4 mb-4 font-weight-bold rounded-lg"
                >
                  <p>{{ board.title }}</p>
                  <b-icon
                    class="remove-board"
                    icon="trash"
                    @click.prevent="removeBoard(index)"
                  />
                </div>
              </router-link>
            </div>

            <input
              type="text"
              class="board-adder border-0 rounded-lg text-center"
              placeholder="+ Add another board"
              @keyup.enter="addBoard($event)"
            />
          </div>
        </template>

        <template v-else-if="$route.name === 'templates'">
          <h3>Templates page</h3>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { mapState } from "vuex";
import { uid } from "@/utils/utils.js";
export default {
  computed: {
    ...mapState(["user"])
  },
  methods: {
    addBoard(e) {
      let board = {
        id: uid(),
        title: e.target.value,
        lists: []
      };
      this.$store.commit("ADD_BOARD", { boards: this.user.boards, board });
      e.target.value = "";
    },
    removeBoard(boardIndex) {
      this.$store.commit("REMOVE_BOARD", {
        boards: this.user.boards,
        boardIndex
      });
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.body {
  margin-top: 5rem;
}

.sidebar {
  position: sticky;
  top: 5rem;
  z-index: 999;

  width: 200px;
}

.sidebar a {
  color: black;
}

.sidebar a.router-link-exact-active {
  color: #0079bf;
}

.all-boards {
  min-width: 288px;
  max-width: 900px;
}

.board-thumnail {
  height: 6rem;
  width: 200px;
  padding: 1rem;

  box-shadow: 0px 2px 5px 1px rgb(153, 153, 153);
  word-wrap: break-word;
  overflow: hidden;
  color: white;
  background: #8b88a050;

  transition: all 0.3s ease-in-out;
}

.board-thumnail:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0px 5px 10px 5px rgb(182, 182, 182);
  cursor: pointer;
}

.board-adder {
  height: 6rem;
  width: 200px;
  color: var(--secondary);

  line-height: 6rem;

  box-shadow: 0px 5px 10px 5px rgb(182, 182, 182);

  transform: scale(1.02);
  transition: all 0.3s ease-in-out;
}

.board-adder:hover {
  cursor: pointer;
  background-color: #e7e7e7;
}

.board-adder:focus {
  background-color: #cecece;
  transform: scale(1);
  box-shadow: 0px 2px 5px 1px rgb(153, 153, 153);
  outline: none;
}

.remove-board {
  position: absolute;
  bottom: 10px;
  right: 10px;

  width: 20px;
  height: 20px;

  color: var(--danger);

  opacity: 0;
  transform: translateX(20px);

  transition: all 0.3s ease-in-out;
}

.board-thumnail:hover .remove-board {
  opacity: 1;
  transform: translateX(0px);
}

.remove-board:hover {
  color: red;
  width: 30px;
  height: 30px;
}
</style>
