<template>
  <div>
    <b-container>
      <b-row align-h="center">
        <h3>Manage your personal information</h3>
      </b-row>
      <b-row align-h="center">
        <p>control which information people see and Power-Ups may access.</p>
      </b-row>
      <b-row class="mt-3" align-h="center">
        About
      </b-row>
      <b-row align-h="center">
        <hr class="w-50" />
      </b-row>
      <b-row align-h="center">
        <strong>Username : </strong> {{ this.$store.state.user.username }}
      </b-row>
      <b-row align-h="center">
        <strong>Email address : </strong> {{ this.$store.state.user.email }}
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
