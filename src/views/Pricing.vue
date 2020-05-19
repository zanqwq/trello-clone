<template>
  <div class="wrapper">
    <Navbar />
    <div class="content text-center">
      <h1 class="">Trello clone Your Way</h1>
      <p>
        Trusted by ...
      </p>
      <!-- <table>
        <tr>
          <th>STANDARD FEATURES</th>
        </tr>
        <tr>
          <td>Unlimited Personal Boards</td>
          <td>Unlimited Personal Boards</td>
          <td>Unlimited Personal Boards</td>
        </tr>
        <tr>
          <td>Unlimited Cards</td>
          <td>Unlimited Cards</td>
          <td>Unlimited Cards</td>
        </tr>
        <tr>
          <td>Unlimited Lists</td>
          <td>Unlimited Lists</td>
          <td>Unlimited Lists</td>
        </tr>
        <tr>
          <td>10MB per File Attachment</td>
          <td>10MB per File Attachment</td>
          <td>10MB per File Attachment</td>
        </tr>
        <tr>
          <td></td>
          <td>AdvancedChecklists</td>
          <td>AdvancedChecklists</td>
        </tr>
        <tr>
          <td></td>
          <td>Priority Support</td>
          <td>Priority Support</td>
        </tr>
        <tr>
          <td></td>
          <td>Observers</td>
          <td>Observers</td>
        </tr>
        <tr>
          <td></td>
          <td>Custom Background & Stickers</td>
          <td>Custom Background & Stickers</td>
        </tr>
      </table> -->
      <b-container class="plans text-center">
        <b-row no-gutters align-h="center">
          <b-col
            cols="12"
            md="4"
            class="plan d-flex flex-column align-items-center mb-3"
          >
            <div
              class="plan-header first-plan-header d-flex flex-column align-items-center justify-content-center w-100"
            >
              <h3>Free</h3>
              <h4>$0</h4>
              <p>per user per month</p>
              <h5>forever</h5>
              <b-button>Get Started</b-button>
            </div>

            <div class="feature-title w-100">
              <span class="d-inline d-md-none">
                STANDARD FEATURES
              </span>
            </div>

            <div class="feature w-100">Unlimited Personal Boards</div>
            <div class="feature w-100">Unlimited Cards</div>
            <div class="feature w-100">Unlimited Lists</div>
            <div class="feature w-100">10MB per File Attachment</div>
            <div class="feature d-none d-md-block w-100"></div>
            <div class="feature d-none d-md-block w-100"></div>
            <div class="feature d-none d-md-block w-100"></div>
            <div class="feature d-none d-md-block w-100"></div>

            <div class="feature-title w-100">
              <span class="d-inline d-md-none">
                TEAM FEATURES
              </span>
            </div>

            <div class="feature w-100">10 Team Boards</div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>

            <div class="feature-title w-100">
              <span class="d-inline d-md-none">
                POWER-UPS
              </span>
            </div>

            <div class="feature w-100">1 Power-Up per Board</div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>

            <div class="feature-title w-100">
              <span class="d-inline d-md-none">
                AUTOMATION BY BUTLER
              </span>
            </div>

            <div class="feature w-100">
              Add simple automation to your everyday tasks.
            </div>
            <div class="feature w-100">
              Commands limited to 1 card button, 1 board button, and 1 rule
            </div>
            <div class="feature w-100">50 Command runs per month</div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>

            <div class="feature-title w-100">
              <span class="d-inline d-md-none">
                ADMIN AND SECURITY FEATURES
              </span>
            </div>

            <div class="feature w-100">2-Factor Authentication</div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>

            <div
              class="plan-footer first-plan-footer d-flex align-items-center justify-content-center w-100"
            >
              <b-button>Get Started</b-button>
            </div>
          </b-col>

          <!-- --------------------------------------------- -->

          <b-col
            cols="12"
            md="4"
            class="plan d-flex flex-column align-items-center mb-3"
          >
            <div
              class="plan-header second-plan-header d-flex flex-column align-items-center justify-content-center w-100"
            >
              <h3>Business Class</h3>
              <h4>$9.99</h4>
              <p>per user per month</p>
              <p>anually</p>
              <b-button variant="success">Try It Free</b-button>
            </div>

            <div class="feature-title w-100">
              <span>
                STANDARD FEATURES
              </span>
            </div>

            <div class="feature w-100">Unlimited Personal Boards</div>
            <div class="feature w-100">Unlimited Cards</div>
            <div class="feature w-100">Unlimited Lists</div>
            <div class="feature w-100">250MB per File Attachment</div>
            <div class="feature w-100">Advanced Checklists</div>
            <div class="feature w-100">Priority Support</div>
            <div class="feature w-100">Observers</div>
            <div class="feature w-100">Custom Backgrounds & Stickers</div>

            <div class="feature-title w-100">
              <span>
                TEAM FEATURES
              </span>
            </div>

            <div class="feature w-100">Unlimited Team Boards</div>
            <div class="feature w-100">Board Collections</div>
            <div class="feature w-100">Team Board Templates</div>

            <div class="feature-title w-100">
              <span>
                POWER-UPS
              </span>
            </div>

            <div class="feature w-100">Unlimited Power-Ups</div>
            <div class="feature w-100">Custom Fields</div>
            <div class="feature w-100">List Limits</div>
            <div class="feature w-100">Card Repeater</div>
            <div class="feature w-100">Calendar View</div>
            <div class="feature w-100">Map View</div>
            <div class="feature w-100">Voting</div>
            <div class="feature w-100">100+ App Integrations</div>

            <div class="feature-title w-100">
              <span>
                AUTOMATION BY BUTLER
              </span>
            </div>

            <div class="feature w-100">
              Unleash the power of automation across your entire team.
            </div>
            <div class="feature w-100">
              Unlimited buttons, rules, and scheduled commands
            </div>
            <div class="feature w-100">
              1,000 Command runs per team + 200 per user, team quota pools up to
              6,000 max per month
            </div>
            <div class="feature w-100">Scheduled Commands</div>
            <div class="feature w-100">Command Administration</div>
            <div class="feature w-100">EmailNotifications</div>
            <div class="feature w-100">HTTP Requests</div>

            <div class="feature-title w-100">
              <span>
                ADMIN AND SECURITY FEATURES
              </span>
            </div>

            <div class="feature w-100">2-Factor Authentication</div>
            <div class="feature w-100">Advanced Admin Permissions</div>
            <div class="feature w-100">Domain-Restricted Invites</div>
            <div class="feature w-100">Deactivate Members</div>
            <div class="feature w-100">Google Apps Sign-on</div>
            <div class="feature w-100">Simple Data Export</div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>
            <div class="feature w-100 d-none d-md-block"></div>

            <div
              class="plan-footer second-plan-footer d-flex align-items-center justify-content-center w-100"
            >
              <b-button variant="success">Try It Free</b-button>
            </div>
          </b-col>

          <!-- ----------------------------------------- -->

          <b-col
            cols="12"
            md="4"
            class="plan d-flex flex-column align-items-center mb-3"
          >
            <div
              class="plan-header third-plan-header d-flex flex-column align-items-center justify-content-center w-100"
            >
              <h3>Enterprise</h3>
              <h4>$20.83</h4>
              <p>per user per month</p>
              <p>for 20 users</p>
              <b-button variant="success">Learn More</b-button>
            </div>

            <div class="feature-title w-100">
              <span class="d-inline d-md-none">
                STANDARD FEATURES
              </span>
            </div>

            <div class="feature w-100">Unlimited Personal Boards</div>
            <div class="feature w-100">Unlimited Cards</div>
            <div class="feature w-100">Unlimited Lists</div>
            <div class="feature w-100">250MB per File Attachment</div>
            <div class="feature w-100">Advanced Checklists</div>
            <div class="feature w-100">Priority Support</div>
            <div class="feature w-100">Observers</div>
            <div class="feature w-100">Custom Backgrounds & Stickers</div>

            <div class="feature-title w-100">
              <span class="d-inline d-md-none">
                TEAM FEATURES
              </span>
            </div>

            <div class="feature w-100">Unlimited Team Boards</div>
            <div class="feature w-100">Board Collections</div>
            <div class="feature w-100">Team Board Templates</div>

            <div class="feature-title w-100">
              <span class="d-inline d-md-none">
                POWER-UPS
              </span>
            </div>

            <div class="feature w-100">Unlimited Power-Ups</div>
            <div class="feature w-100">Custom Fields</div>
            <div class="feature w-100">List Limits</div>
            <div class="feature w-100">Card Repeater</div>
            <div class="feature w-100">Calendar View</div>
            <div class="feature w-100">Map View</div>
            <div class="feature w-100">Voting</div>
            <div class="feature w-100">100+ App Integrations</div>

            <div class="feature-title w-100">
              <span class="d-inline d-md-none">
                AUTOMATION BY BUTLER
              </span>
            </div>

            <div class="feature w-100">
              Take your company to the next level with advanced automation.
            </div>
            <div class="feature w-100">
              Unlimited buttons, rules, and scheduled commands
            </div>
            <div class="feature w-100">Unlimited command runs</div>
            <div class="feature w-100">Scheduled Commands</div>
            <div class="feature w-100">Command Administration</div>
            <div class="feature w-100">EmailNotifications</div>
            <div class="feature w-100">HTTP Requests</div>

            <div class="feature-title w-100">
              <span class="d-inline d-md-none">
                ADMIN AND SECURITY FEATURES
              </span>
            </div>

            <div class="feature w-100">2-Factor Authentication</div>
            <div class="feature w-100">Advanced Admin Permissions</div>
            <div class="feature w-100">Domain-Restricted Invites</div>
            <div class="feature w-100">Deactivate Members</div>
            <div class="feature w-100">Google Apps Sign-on</div>
            <div class="feature w-100">Simple Data Export</div>
            <div class="feature w-100">Single Sign-On for all SAML IdPs</div>
            <div class="feature w-100">Power-Up Administration</div>
            <div class="feature w-100">Attachment Restrictions</div>
            <div class="feature w-100">Organization Wide Permissions</div>
            <div class="feature w-100">Organization Visible Boards</div>
            <div class="feature w-100">Public Board Management</div>

            <div
              class="plan-footer third-plan-footer d-flex align-items-center justify-content-center w-100"
            >
              <b-button variant="success">Learn More</b-button>
            </div>
          </b-col>
        </b-row>

        <b-row align-h="center" class="my-3">
          <h3>Looking for non-profit and educational discounts?</h3>
        </b-row>

        <b-row align-h="center">
          <b-button variant="outline-primary">
            Learn More
          </b-button>
        </b-row>
      </b-container>
    </div>

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
.wrapper {
  background-image: linear-gradient(rgb(232, 234, 255), rgb(255, 255, 255));
  padding: 5rem;
}

.content {
  margin-top: 55.87px;
  /* background-image: linear-gradient(rgb(102, 92, 158), rgb(61, 89, 137)); */
}

.plan {
  max-width: 400px;
}

.plan-header {
  height: 250px;
  color: white;
  background-image: linear-gradient(rgb(102, 92, 158), rgb(61, 89, 137));
}

.first-plan-header {
  border-radius: 10px 0 0 0;
}

.third-plan-header {
  border-radius: 0 10px 0 0;
}

.feature-title {
  height: 50px;
  background-color: #d5d2eb;
  color: #746db9;
  font-size: 18px;
  font-weight: 500;
  line-height: 50px;
  text-transform: uppercase;
}

.feature {
  border: 1px solid rgb(216, 195, 230);
  height: 50px;

  line-height: 50px;

  background: white;
}

.plan-footer {
  height: 80px;
  color: white;
  background-image: linear-gradient(rgb(102, 92, 158), rgb(61, 89, 137));
}

.first-plan-footer {
  border-radius: 0 0 0 10px;
}

.third-plan-footer {
  border-radius: 0 0 10px 0;
}

@media (max-width: 768px) {
  .plan-header {
    border-radius: 10px 10px 0 0;
  }

  .plan-footer {
    border-radius: 0 0 10px 10px;
  }
}
</style>
