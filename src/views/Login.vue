<template>
  <div>
    <div class="mx-auto my-5 w-50 text-center">
      <h1>Trello clone</h1>

      <b-form class="form my-5 p-3 border-secondary shadow">
        <h6 class="mb-3">Log in to Trello clone</h6>
        <b-form-input
          class="my-3"
          type="email"
          required
          placeholder="Enter email"
          v-model="email"
          @keyup.enter="login"
        ></b-form-input>
        <p class="text-danger" v-if="!accountIsExist">
          this account is not exist
        </p>
        <b-button
          class="my-3"
          block
          :disabled="!email"
          variant="success"
          @click="login"
          >Login</b-button
        >
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
      accountIsExist: true
    };
  },
  methods: {
    login() {
      if (!this.email) {
        this.accountIsExist = true;
        return;
      }

      let user = JSON.parse(localStorage.getItem(this.email));
      if (!user) {
        this.accountIsExist = false;
        return;
      }

      this.accountIsExist = true;
      this.$store.commit("LOGIN_USER", { email: this.email });
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
.footer {
  bottom: 0px;

  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
