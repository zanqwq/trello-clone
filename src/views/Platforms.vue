<template>
  <div>
    <Navbar />
    <b-container class="content text-center">
      <b-row align-h="center" class="mb-3">
        <h1>Trello clone seamlessly wherever you are.</h1>
      </b-row>

      <b-row align-h="center">
        <b-col
          cols="12"
          md="4"
          class="d-flex flex-column align-items-center mb-3"
        >
          <b-img src="web-icon.png" alt="" fluid />
          <h3>Web</h3>
          <b-button to="/home" variant="success">Trello clone</b-button>
        </b-col>
        <b-col
          cols="12"
          md="4"
          class="d-flex flex-column align-items-center mb-3"
        >
          <b-img src="mobile-icon.png" alt="" fluid />
          <h3>Mobile</h3>
          <b-button class="mb-1">APP Store</b-button>
          <b-button>Google Play</b-button>
        </b-col>
        <b-col
          cols="12"
          md="4"
          class="d-flex flex-column align-items-center mb-3"
        >
          <b-img src="desktop-icon.png" alt="" fluid />
          <h3>DESKTOP</h3>
          <b-button class="mb-1">APP Store</b-button>
          <b-button>Microsoft</b-button>
        </b-col>
      </b-row>

      <b-row align-h="center" class="my-3">
        <h1>Trello clone is supported in these modern browsers.</h1>
      </b-row>

      <b-row align-h="center">
        <b-col
          cols="6"
          md="3"
          class="d-flex flex-column align-items-center mb-3"
        >
          <b-img src="icon-chrome.png" alt="" fluid />
          <h3>Chrome</h3>
          <p class="text-muted">latest</p>
          <b-button>Download</b-button>
        </b-col>
        <b-col
          cols="6"
          md="3"
          class="d-flex flex-column align-items-center mb-3"
        >
          <b-img src="icon-firefox.png" alt="" fluid />
          <h3>Firefox</h3>
          <p class="text-muted">latest</p>
          <b-button>Download</b-button>
        </b-col>
        <b-col
          cols="6"
          md="3"
          class="d-flex flex-column align-items-center mb-3"
        >
          <b-img src="icon-edge.png" width="120" height="120" alt="" fluid />
          <h3>Edge</h3>
          <p class="text-muted">latest</p>
          <b-button>Download</b-button>
        </b-col>
        <b-col
          cols="6"
          md="3"
          class="d-flex flex-column align-items-center mb-3"
        >
          <b-img src="icon-safari.png" alt="" fluid />
          <h3>Safari</h3>
          <p class="text-muted">latest</p>
          <b-button>Download</b-button>
        </b-col>
      </b-row>
    </b-container>
    <Footer class="mt-5" />
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
  margin-top: 5rem;
}
</style>
