<template>
  <div>
    <b-navbar type="dark" variant="dark" fixed="top">
      <b-navbar-brand to="/home">Trello Clone</b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <template v-if="!hasLogin">
          <b-nav-item :to="{ name: 'login' }">
            Log In
          </b-nav-item>
          <b-button :to="{ name: 'signup' }" variant="primary">
            Sign Up
          </b-button>
        </template>
        <template v-else-if="hasLogin">
          <b-button
            variant="primary"
            :to="{
              name: 'user-boards',
              params: { username: user.username }
            }"
          >
            Go to Your Boards
          </b-button>
        </template>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
    hasLogin() {
      return this.user;
    }
  }
};
</script>

<style scoped></style>
