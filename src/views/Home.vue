<template>
  <div>
    <Navbar />

    <b-jumbotron fluid bg-variant="dark" text-variant="white" class="mt-3">
      <template v-slot:header>
        Trello Clone
      </template>

      <template v-slot:lead>
        Trello lets you work more collaboratively and get more done.
      </template>

      <hr style="background-color: white" class="my-4" />

      <p>
        Trello's boards, lists and cards enable you to organize and prioritize
        your projects in a fun, flexible, and rewarding way.
      </p>

      <b-form>
        <b-form-group>
          <b-input-group class="mt-3">
            <b-form-input
              type="email"
              v-model="email"
              placeholder="enter your Email address"
            ></b-form-input>
            <b-input-group-append>
              <b-button :to="{ name: 'signup' }" variant="success">
                Sign Up - It's Free!
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-form>
    </b-jumbotron>

    <b-container>
      <b-row align-v="center" align-h="center" class="mb-5">
        <b-col cols="12" md="8" order-md="2">
          <div class="home-card-0 rounded-lg"></div>
        </b-col>

        <b-col cols="12" md="4" order-md="1">
          <h3 class="text-sm-center text-md-left text-center">
            Work with any team
          </h3>
          <p class="text-sm-center text-md-left text-center">
            Whether it's for work, a side project or even the next family
            vacation, Trello helps your team stay organized.
          </p>
          <div class="text-sm-center text-md-left text-center">
            <b-button :to="{ name: 'signup' }" href="#" variant="primary">
              <span class="mr-3">Start doing</span>
              <b-icon icon="arrow-right" animation="cylon"></b-icon>
            </b-button>
          </div>
        </b-col>
      </b-row>

      <b-row align-v="center" align-h="center" class="mb-5">
        <b-col cols="6" md="4">
          <div class="home-card-1 rounded-lg"></div>
        </b-col>

        <b-col cols="12" md="8">
          <h3 class="text-sm-center text-md-left text-center">
            Information at a glance
          </h3>
          <p class="text-sm-center text-md-left text-center">
            Dive into the detail by adding comments, attachments, due dates, and
            more directly to Trello cards. Collaborate on projects from
            beginning to end.
          </p>
        </b-col>
      </b-row>

      <b-row align-v="start" align-h="around" class="mb-5">
        <b-col cols="12" md="4" order-md="2">
          <div class="home-card-2 rounded-lg"></div>
        </b-col>

        <b-col cols="12" md="8" order-md="1">
          <h3>
            Built-In Workflow Automation With Butler
          </h3>
          <p class>
            Let the robots do the work! Boost productivity by unleashing the
            power of automation across your entire team with Bulter, and remove
            tedious tasks from your to-do lists with :
          </p>
          <ul>
            <li>Rule-Based Triggers</li>
            <li>Custom Card & Board Buttons</li>
            <li>Calendar Commands</li>
            <li>Due Date Commands</li>
          </ul>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <h2 class="text-center">See how it works</h2>
          <p class="text-center">
            Go from idea to action in seconds with Trello's intuitively simple
            boards, lists, and cards.
          </p>
        </b-col>
      </b-row>

      <b-row align-h="around" class="mb-5">
        <b-col cols="12" md="8">
          <b-carousel
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px"
          >
            <b-carousel-slide
              caption="Blank Image"
              img-blank
              img-alt="Blank image"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eros felis, tincidunt a tincidunt eget, convallis
                vel est. Ut pellentesque ut lacus vel interdum.
              </p>
            </b-carousel-slide>

            <b-carousel-slide
              caption="Blank Image"
              img-blank
              img-alt="Blank image"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eros felis, tincidunt a tincidunt eget, convallis
                vel est. Ut pellentesque ut lacus vel interdum.
              </p>
            </b-carousel-slide>

            <b-carousel-slide
              caption="Blank Image"
              img-blank
              img-alt="Blank image"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eros felis, tincidunt a tincidunt eget, convallis
                vel est. Ut pellentesque ut lacus vel interdum.
              </p>
            </b-carousel-slide>

            <b-carousel-slide
              caption="Blank Image"
              img-blank
              img-alt="Blank image"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eros felis, tincidunt a tincidunt eget, convallis
                vel est. Ut pellentesque ut lacus vel interdum.
              </p>
            </b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>

      <b-row align-h="center" class="mb-5">
        <b-col cols="8">
          <h3 class="text-center">Trello your way</h3>
          <p class="text-center">
            User Trello the way your team works best. We've got the flexibility
            & features to fit any team's style.
          </p>
        </b-col>
      </b-row>

      <b-row align-h="center" class="mb-5">
        <b-col cols="12" lg="4">
          <div class="text-center">
            <b-card
              title="The Team Playbook"
              img-src="https://picsum.photos/600/300/?image=7"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <p>
                  It's easy to get your team up and running with Trello. We've
                  collected all of the boards and tools you need to succeed in
                  one handy resource
                </p>
              </b-card-text>

              <b-button href="#" variant="primary">Make A Game Plan</b-button>
            </b-card>
          </div>
        </b-col>

        <b-col cols="12" lg="4">
          <div class="text-center">
            <b-card
              title="A Productivity Platform"
              img-src="https://picsum.photos/600/300/?image=20"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <p>
                  Integrate the apps your team already uses directly into your
                  workflow. Powers-Ups turn Trello boards into living
                  applications to meet your team's unique business need.
                </p>
              </b-card-text>

              <b-button href="#" variant="primary">
                Power-Up Your Workflow
              </b-button>
            </b-card>
          </div>
        </b-col>

        <b-col cols="12" lg="4">
          <div class="text-center">
            <b-card
              title="Always In Sync"
              img-src="https://picsum.photos/600/300/?image=3"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <p>
                  No matter Where you are, Trello stays in sync across all of
                  your devices. Collaborate with your team anywhere, from
                  sitting on the bus to sitting on the beach.
                </p>
              </b-card-text>

              <b-button href="#" variant="secondary" class="mr-2">
                App Store
              </b-button>

              <b-button href="#" variant="secondary">
                Google Play
              </b-button>
            </b-card>
          </div>
        </b-col>
      </b-row>

      <b-row align-h="center" class="mb-5">
        <b-col>
          <h3 class="text-center">Start Planning Today</h3>
          <p class="text-center">
            Sign up and become one of the millions of people around the world
            using Trello to get more done.
          </p>
          <div class="text-center">
            <b-button :to="{ name: 'signup' }" variant="success">
              Get Started - It's Free!
            </b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  data() {
    return {
      slide: 0,
      email: ""
    };
  },
  components: {
    Footer,
    Navbar
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === "signup") {
      to.params.email = this.email;
    }
    next();
  }
};
</script>

<style scoped>
.home-card-0 {
  height: 400px;
  background: linear-gradient(#3eb9de, #3a80de);
}

.home-card-1 {
  height: 300px;
  background: linear-gradient(#696cbf, #e2859f);
}

.home-card-2 {
  height: 200px;
  background: linear-gradient(to right, #3eb9de, #3a80de);
}
</style>
