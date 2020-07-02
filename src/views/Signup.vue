<template>
  <div>
    <div class="wrapper mx-auto my-5 text-center">
      <h1>Trello clone</h1>

      <b-form
        @submit.prevent="onsubmit"
        class="form my-5 p-3 border-secondary shadow"
      >
        <h6 class="mb-3">Sign up for your account</h6>
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
          this account is already exist
        </b-form-invalid-feedback>
        <b-form-input
          class="my-3"
          required
          placeholder="Enter username"
          v-model="username"
        ></b-form-input>
        <b-button
          type="submit"
          class="my-3"
          block
          :disabled="!email || !username"
          variant="success"
        >
          Continue
        </b-button>
        <p class="my-3 text-muted">OR</p>
        <b-button class="my-3" block>Continue with Google</b-button>
        <b-button class="my-3" block>Continue with Microsoft</b-button>
        <hr />
        <b-link :to="{ name: 'login' }">Already have an account? Log in</b-link>
      </b-form>

      <p></p>
    </div>
    <Footer class="footer position-absolute" />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { uid } from "@/utils/utils.js";
export default {
  data() {
    return {
      email: "",
      username: "",
      state: null
    };
  },
  methods: {
    onsubmit() {
      if (!this.email || !this.username) {
        this.state = null;
        return;
      }

      if (localStorage.getItem(this.email)) {
        // if this email has been registered
        this.state = false;
        return;
      }

      this.state = null;
      this.$store.commit("SIGNUP_USER", {
        user: {
          id: uid(),
          email: this.email,
          username: this.username,
          boards: []
        }
      });

      this.$router.push({
        name: "user-boards",
        params: { username: this.username }
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
