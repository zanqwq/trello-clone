<template>
  <div>
    <div class="mx-auto my-5 w-50 text-center">
      <h1>Trello clone</h1>

      <b-form class="form my-5 p-3 border-secondary shadow">
        <h6 class="mb-3">Sign up for your account</h6>
        <b-form-input
          class="my-3"
          type="email"
          required
          placeholder="Enter email"
          v-model="email"
          @keyup.enter="signup"
          @focus="accountIsExist = false"
        ></b-form-input>
        <p class="text-danger" v-if="accountIsExist">
          this account has been registered, please choose another email
        </p>
        <b-form-input
          type="text"
          required
          placeholder="Enter username"
          v-model="username"
          @keyup.enter="signup"
        ></b-form-input>
        <b-button
          class="my-3"
          block
          :disabled="!email || !username"
          variant="success"
          @click="signup"
          >continue</b-button
        >
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
      id: uid(),
      accountIsExist: false
    };
  },
  methods: {
    signup() {
      if (!this.email || !this.username) {
        return;
      }

      if (localStorage.getItem(this.email)) {
        this.accountIsExist = true;
        return;
      }

      this.accountIsExist = false;
      this.$store.commit("SIGNUP_USER", {
        user: {
          id: this.id,
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
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.email) {
        vm.email = to.params.email;
      }
    });
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
