<template>
  <div>
    <Navbar />
    <div class="content">
      <b-form class="form mx-auto">
        <b-input-group>
          <template #append>
            <b-button variant="primary">
              Search
            </b-button>
          </template>
          <b-form-input></b-form-input>
        </b-input-group>
      </b-form>
      <div class="most-popular mx-auto my-5 text-center">
        <h3 class="mb-5">Most Popular Articles</h3>
        <b-container>
          <b-row>
            <b-col cols="12" md="6">
              <b-link href="#">How To Format Your Text in Trello clone</b-link>
            </b-col>
            <b-col cols="12" md="6">
              <b-link href="#">Archiving and deleting cards</b-link>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="6">
              <b-link href="#">Deleting a board</b-link>
            </b-col>
            <b-col cols="12" md="6">
              <b-link href="#">The Trello clone App for Slack</b-link>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="6">
              <b-link href="#"
                >Loading resources from Trello clone's CDN</b-link
              >
            </b-col>
            <b-col cols="12" md="6">
              <b-link href="#">Using the Calendar Power-up</b-link>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="6">
              <b-link href="#">Using Trello clone with Google Calendar</b-link>
            </b-col>
            <b-col cols="12" md="6">
              <b-link href="#">How to use Trello clone like a pro</b-link>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="6">
              <b-link href="#">Trello clone Gold User Guide</b-link>
            </b-col>
            <b-col cols="12" md="6">
              <b-link href="#">Creating cards by email</b-link>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="category-list d-flex flex-wrap mx-auto">
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          Archived Updates
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          Atlassian Access
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          Atlassian account
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          Butler
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          Getting Started
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          Templates
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          Using Trello clone
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          My Trello clone Account
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          Power-Ups
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          Trello clone Business Class
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          Trello clone Teams
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          Troubleshooting
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          Trello clone Enterprise
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          About Trello clone
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          Apps
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          Trello clone for Android
        </div>
        <div
          class="category d-flex align-items-center justify-content-center m-3 shadow"
        >
          Trello clone for IOS
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar
  }
};
</script>

<style scoped>
.content {
  margin-top: 5rem;
}

.form {
  max-width: 600px;
}

.category-list {
  max-width: 1000px;
}

.category {
  width: 300px;
  height: 100px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

.category:hover {
  background: rgb(245, 245, 245);
  cursor: pointer;
}
</style>
