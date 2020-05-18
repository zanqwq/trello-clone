<template>
  <div>
    <div class="wrapper mx-auto my-5 text-center">
      <h1>Trello clone</h1>

      <b-form
        @submit.prevent="onsubmit"
        class="form my-5 p-3 border-secondary shadow"
      >
        <h6 class="mb-3">Log in to Trello clone</h6>
        <b-form-input
          class="my-3"
          type="email"
          required
          placeholder="Enter email"
          v-model="email"
          :state="state"
          @focus="state = null"
        ></b-form-input>

        <b-form-invalid-feedback :state="state">
          this account is not exist
        </b-form-invalid-feedback>
        <b-button
          type="submit"
          class="my-3"
          block
          :disabled="!email"
          variant="success"
        >
          Login
        </b-button>
        <p class="my-3 text-muted">OR</p>
        <b-button class="my-3" block>Login with Google</b-button>
        <b-button class="my-3" block>Login with Microsoft</b-button>
        <hr />
        <b-link :to="{ name: 'signup' }">Sign up for an account</b-link>
      </b-form>

      <p></p>
    </div>
    <Footer class="footer position-absolute" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  data() {
    return {
      email: "",
      state: null
    };
  },
  methods: {
    onsubmit() {
      if (!this.email) {
        this.state = null;
        return;
      }

      let user = JSON.parse(localStorage.getItem(this.email));
      if (!user) {
        this.state = false;
        return;
      }

      this.state = null;
      this.$store.commit("LOGIN_USER", { email: user.email });

      this.$router.push({
        name: "user-boards",
        params: { username: user.username }
      });
    }
  },
  components: {
    Footer
  }
};
</script>

<style scoped>
.wrapper {
  max-width: 400px;
}

.footer {
  bottom: 0px;

  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
