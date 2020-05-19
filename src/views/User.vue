<template>
  <div>
    <Header />
    <div class="tab-pane-header text-center">
      <h1>{{ this.$store.state.user.username }}</h1>
    </div>
    <b-nav tabs align="center" class="my-5">
      <b-nav-item
        :to="{ name: 'user-profile' }"
        @click="index = 0"
        :active="index === 0"
        >Profile and Visibility</b-nav-item
      >
      <b-nav-item
        :to="{ name: 'user-activity' }"
        @click="index = 1"
        :active="index === 1"
        >Activity</b-nav-item
      >
      <b-nav-item
        :to="{ name: 'user-cards' }"
        @click="index = 2"
        :active="index === 2"
        >Cards</b-nav-item
      >
      <b-nav-item
        :to="{ name: 'user-account' }"
        @click="index = 3"
        :active="index === 3"
        >Settings</b-nav-item
      >
      <b-nav-item
        :to="{ name: 'user-billing' }"
        @click="index = 4"
        :active="index === 4"
        >Trello clone Gold</b-nav-item
      >
    </b-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  data() {
    return {
      index: null
    };
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.tab-pane-header {
  margin-top: 5rem;
}
</style>
