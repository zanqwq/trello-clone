<template>
  <div>
    <h1>User {{ $route.params.username }}</h1>
    <router-link :to="{ name: 'user-profile' }"
      >Profile and Visibility</router-link
    >
    | <router-link :to="{ name: 'user-activity' }">Activity</router-link> |
    <router-link :to="{ name: 'user-cards' }">Cards</router-link> |
    <router-link :to="{ name: 'user-account' }">Settings</router-link> |
    <router-link :to="{ name: 'user-billing' }">Trello Gold</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
