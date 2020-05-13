<template>
  <div>
    <Header class="header" :hasLogin="true" />

    <b-container fluid="xl" class="body">
      <b-row>
        <b-col cols="4">
          <div class="sidebar">
            <ul class="sidebar-list">
              <router-link
                class="mb-3 d-block"
                :to="{ name: 'user-boards', params: { username: 'zan' } }"
              >
                <b-icon icon="layout-three-columns"></b-icon>
                Boards
              </router-link>
              <router-link class="mb-3 d-block" :to="{ name: 'templates' }">
                <b-icon icon="clipboard"></b-icon>
                Templates
              </router-link>
            </ul>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="4"> </b-col>
        <b-col cols="8">
          <b-row fluid class="content">
            <b-col cols="6" md="4" lg="3">
              <h3>Templates</h3>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
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
  position: fixed;
  z-index: 999;
}

.sidebar-list a {
  color: black;
}

.sidebar-list a:hover {
  text-decoration: none;
}

.sidebar-list a.router-link-exact-active {
  color: #0079bf;
}
</style>
