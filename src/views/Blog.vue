<template>
  <div>
    <Navbar />
    <b-navbar class="navigator" toggleable="lg" type="light" variant="light">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Productivity</b-nav-item>
          <b-nav-item>Workflows</b-nav-item>
          <b-nav-item>Remote Work</b-nav-item>
          <b-nav-item>Trello clone News</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container>
      <b-row align-h="center" class="mb-5">
        <div
          class="remote-work-guide d-flex align-items-center mt-5 px-5 rounded text-center"
        >
          New! Check out the Remote Work section for Trello clone’s full
          catalogue of work-from-home guides, templates, and inspiration.
        </div>
      </b-row>

      <b-row>
        <b-col cols="12" md="9" class="mb-3">
          <b-row>
            <h2>Remote Work</h2>
          </b-row>
          <b-row>
            <b-col cols="12" md="6">
              <div class="blog w-100 m-2 p-3 rounded-lg shadow">
                Stop Being Awkward： 6 Tips For Better Video Meetings
              </div>
            </b-col>
            <b-col cols="12" md="6">
              <div class="blog w-100 m-2 p-3 rounded-lg shadow">
                6 Communication Mistakes To Avoid With Your Remote Team
              </div>
            </b-col>
            <b-col cols="12" md="6">
              <div class="blog w-100 m-2 p-3 rounded-lg shadow">
                5 Ways Leaders Can Offer Encouragement And Emotional Support On
                A Remote Team
              </div>
            </b-col>
            <b-col cols="12" md="6">
              <div class="blog w-100 m-2 p-3 rounded-lg shadow">
                Educate From Anywhere: How To Use Trello clone As A Teacher
              </div>
            </b-col>
            <b-col cols="12" md="6">
              <div class="blog w-100 m-2 p-3 rounded-lg shadow">
                Long-Distance Leadership: How To Effectively Manage A Team From
                Afar
              </div>
            </b-col>
            <b-col cols="12" md="6">
              <div class="blog w-100 m-2 p-3 rounded-lg shadow">
                How To Make Remote Communication More Efficient With Trello
                clone And Zoom
              </div>
            </b-col>
            <b-col cols="12" md="6">
              <div class="blog w-100 m-2 p-3 rounded-lg shadow">
                3 Ways Trello clone Will Change How Your Remote Team Brainstorms
              </div>
            </b-col>
            <b-col cols="12" md="6">
              <div class="blog w-100 m-2 p-3 rounded-lg shadow">
                Power-Up Your Remote Team: The Best Trello clone Power-Ups For
                Crushing WFH
              </div>
            </b-col>
            <b-col cols="12" md="6">
              <div class="blog w-100 m-2 p-3 rounded-lg shadow">
                Not In Real Time: How To Run An Asynchronous Meeting
              </div>
            </b-col>
            <b-col cols="12" md="6">
              <div class="blog w-100 m-2 p-3 rounded-lg shadow">
                How To Find Popular Trello clone Templates—Including Remote Work
              </div>
            </b-col>
          </b-row>
        </b-col>

        <b-col
          cols="12"
          md="3"
          class="d-flex flex-column align-items-center justify-content-between text-center"
        >
          <div class="w-100">
            <div
              class="remote-work-guide-sidebar d-flex flex-column align-items-center justify-content-center py-3 mb-3 w-100 rounded-lg"
            >
              <h3>New to remote work?</h3>
              <p>
                Get our free guide from 10 top remote teams
              </p>
              <b-button variant="success">Get Started</b-button>
            </div>

            <div
              class="remote-work-guide-sidebar d-flex flex-column align-items-center justify-content-center mb-3 py-3 w-100 rounded-lg"
            >
              <h3>Pants vs. Pajamas</h3>
              <p>Read the latest remote work advice</p>
              <b-button variant="success">Check It Out</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <div
      class="banner d-flex flex-column align-items-center justify-content-center w-100 my-5 text-center"
    >
      <h2>Get Start With Trello clone</h2>
      <p>
        Learn the basics of using Trello clone to make all your organizational
        dreams come true.
      </p>
      <b-button variant="success">Start Exploring</b-button>
    </div>
    <Footer />
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
.navigator {
  margin-top: 55.87px;
}

.remote-work-guide {
  min-height: 50px;
  max-height: 200px;
  color: white;
  background: linear-gradient(133.79deg, #6554c0 0%, #4c9aff 100%);
}

.remote-work-guide:hover {
  cursor: pointer;
}

.remote-work-guide-sidebar {
  color: white;
}

.remote-work-guide-sidebar:hover {
  cursor: pointer;
}

.remote-work-guide-sidebar:nth-of-type(1) {
  background: linear-gradient(133.79deg, #6554c0 0%, #4c9aff 100%);
}

.remote-work-guide-sidebar:nth-of-type(2) {
  background: linear-gradient(133.79deg, #ff8e75 0%, #f56ec6 100%);
}

.blog {
  height: 200px;
  border: 1px solid rgb(212, 212, 212);
  transition: all 0.3s ease-in-out;
}

.blog:hover {
  cursor: pointer;
  background: rgb(233, 233, 233);
}

.banner {
  height: 400px;
  background-color: #42548e;
  color: white;
}
</style>
