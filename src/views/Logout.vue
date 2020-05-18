<template>
  <div>
    <Navbar />
    <div class="content w-100 text-center">
      <div
        class="box d-flex flex-column align-items-center justify-content-center w-100"
      >
        <h1>Tranks for using Trello clone</h1>
        <p>You’re all logged out. So now what?</p>
      </div>
      <div
        class="box d-flex flex-column align-items-center justify-content-center w-100"
      >
        <h1>
          Using a Shared Computer?
        </h1>
        <p>
          We've saved some of your preferences for the next time you log in, but
          if you'd like you can clear those now.
        </p>
        <b-button>
          Remove Saved Preferences
        </b-button>
      </div>
      <div
        class="box d-flex flex-column align-items-center justify-content-center w-100"
      >
        <p>
          <strong>Do you have the apps?</strong> I've got apps for iPhone, iPad,
          Android phones, tablets, and watches. You probably have one of those.
        </p>
        <b-button to="/platforms">Download the apps</b-button>
      </div>
      <div
        class="box d-flex flex-column align-items-center justify-content-center w-100 "
      >
        <h1>Follow me</h1>
        <p>
          ...on
          <b-link href="https://github.com/zanqwq" class="text-muted"
            >github</b-link
          >
        </p>
      </div>
      <div
        class="box d-flex flex-column align-items-center justify-content-center w-100"
      >
        <h1>
          Share Trello clone to let your friends know me :) !
        </h1>
        <p>
          Help me spread the word and get some friends
        </p>
      </div>
      <div
        class="box d-flex flex-column align-items-center justify-content-center w-100"
      >
        <h1>
          “Thanks, Trello clone, but I’m done for the day.”
        </h1>
        <h1 class="mt-1">Bye !</h1>
      </div>
    </div>
    <Footer class="mt-5"></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
.content {
  margin-top: 55.87px;
}

.box {
  height: 300px;
}

.box p {
  max-width: 400px;
}

.box:nth-of-type(1) {
  background: white;
}

.box:nth-of-type(2) {
  background: #fdfae5;
}

.box:nth-of-type(3) {
  background: #bcd9ea;
}

.box:nth-of-type(4) {
  background: white;
}

.box:nth-of-type(5) {
  background: #f5ea92;
}

.box:nth-of-type(6) {
  color: white;
  background: #0079bf;
}
</style>
