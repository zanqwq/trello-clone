<template>
  <div>
    <b-navbar type="dark" variant="dark" fixed="top">
      <b-navbar-brand
        to="/home"
        style="position: absolute; left: 50%; transform: translateX(-50%)"
      >
        Trello Clone
      </b-navbar-brand>

      <b-navbar-nav>
        <template v-if="!hasLogin">
          <b-nav-item to="/home">HOME</b-nav-item>
          <b-nav-item href="#">TOUR</b-nav-item>
          <b-nav-item :to="{ name: 'blog' }">BLOG</b-nav-item>
        </template>
        <template v-else>
          <b-navbar-nav>
            <b-button size="sm" class="mr-1">
              <b-icon icon="grid3x3-gap"></b-icon>
            </b-button>

            <b-button
              size="sm"
              class="mr-1"
              :to="{ name: 'user-boards', params: { username: user.username } }"
            >
              <b-icon icon="house-fill"></b-icon>
            </b-button>

            <b-button size="sm">
              <b-icon icon="layout-three-columns"></b-icon>
              <span class="ml-1">Boards</span>
            </b-button>
          </b-navbar-nav>
        </template>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <template v-if="!hasLogin">
          <b-button size="sm" class="mr-1" variant="success" to="/signup">
            Sign Up
          </b-button>
          <b-button size="sm" variant="primary" to="/login">
            Log In
          </b-button>
        </template>

        <template v-else>
          <b-button size="sm" class="mr-1">
            <b-icon icon="plus"></b-icon>
          </b-button>

          <b-button size="sm" class="mr-1">
            <b-icon icon="info-circle"></b-icon>
          </b-button>

          <b-button size="sm" class="mr-1">
            <b-icon icon="bell"></b-icon>
          </b-button>

          <!-- <b-avatar icon="people-circle" button></b-avatar> -->
          <b-dropdown right menu-class="mt-3" no-caret>
            <template #button-content>
              <b-icon icon="people-circle"></b-icon>
            </template>
            <b-dropdown-text>
              {{ user.username }}
            </b-dropdown-text>

            <b-dropdown-divider></b-dropdown-divider>

            <b-dropdown-item
              :to="{
                name: 'user-profile',
                params: { username: user.username }
              }"
            >
              Profile and Visibility
            </b-dropdown-item>
            <b-dropdown-item
              :to="{
                name: 'user-activity',
                params: { username: user.username }
              }"
            >
              Activity
            </b-dropdown-item>
            <b-dropdown-item
              :to="{ name: 'user-cards', params: { username: user.username } }"
            >
              Cards
            </b-dropdown-item>
            <b-dropdown-item
              :to="{
                name: 'user-account',
                params: { username: user.username }
              }"
            >
              Settings
            </b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item :to="{ name: 'logout' }">Log out</b-dropdown-item>
          </b-dropdown>
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
