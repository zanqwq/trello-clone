<template>
  <div>
    <b-navbar type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="#">Trello Clone</b-navbar-brand>

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
              params: { username: this.$store.state.user.name }
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
export default {
  computed: {
    hasLogin() {
      return this.$store.state.user !== undefined;
    }
  }
};
</script>

<style scoped></style>
