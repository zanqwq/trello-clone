<template>
  <div>
    <Navbar />
    <div class="content w-100 text-center">
      <div
        class="box d-flex flex-column align-items-center justify-content-end w-100 p-3"
      >
        <h1>About Trello clone</h1>
        <p>What's behind the boards.</p>
      </div>
      <div
        class="box d-flex flex-column align-items-center justify-content-center w-100 p-3"
      >
        <h1>What's Trello clone</h1>
        Trello clone is the easy, free, flexible, and visual way to manage your
        projects and organize anything, trusted by <strong>nobody</strong> for
        now :)
      </div>
      <div
        class="box d-flex flex-column align-items-center justify-content-center w-100 p-3"
      >
        <h1>A brief history of Trello clone</h1>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            laboriosam cupiditate maiores, sit neque quidem odit aut aliquam
            similique molestias ea veritatis possimus porro iusto architecto
            tenetur facilis quasi perspiciatis!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit
            pariatur distinctio veniam voluptatibus odio, quisquam corporis
            fugit officia aliquam veritatis aspernatur deleniti, nulla, ea nam?
            Aperiam non doloremque repellendus.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            voluptatum adipisci eius nobis illum dolor architecto eligendi
            accusamus, quo incidunt eveniet natus animi illo maxime, omnis,
            distinctio impedit. Beatae, quo.
          </li>
        </ul>
      </div>
      <div
        class="box d-flex flex-column align-items-center justify-content-center w-100 p-3"
      >
        <p>
          This is my first project, no one know Trello clone for now.
        </p>
      </div>
      <div
        class="box d-flex flex-column align-items-center justify-content-center w-100 p-3"
      >
        <h1>Trello clone in the Press</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui corrupti
          placeat quod eum officia est tempore ad numquam, dignissimos minus
          autem iure illo! Eaque voluptas molestias facilis ut ab ea. Assumenda
          labore voluptatibus id sed rem voluptates minus fugiat iusto
          consequatur harum cumque magnam dicta quis est quas, quibusdam magni
          enim dolorem facilis ex voluptatum debitis ipsam obcaecati
          accusantium? Recusandae. Accusantium sunt error perspiciatis,
          aspernatur sequi consequuntur! Atque nostrum, at nam dolores a ex
          libero sit molestiae quaerat corporis sed odio recusandae et. Earum
          eligendi voluptates aperiam ut ipsam perferendis. Cupiditate soluta et
          nostrum dolor, labore quas saepe molestiae sequi neque consequuntur
          impedit repellendus temporibus recusandae in ipsam aliquam nihil
          veniam consequatur! Dolor, neque? Modi optio deleniti ullam itaque
          cupiditate. Ratione minima beatae, eaque consequuntur ad corrupti
          tempora adipisci rerum. Delectus temporibus, voluptate maiores quidem
          atque fugit sunt ullam repellat veniam hic alias voluptates aliquam,
          impedit unde. Aspernatur, odit necessitatibus.
        </p>
      </div>
      <div
        class="box d-flex flex-column align-items-center justify-content-center w-100 p-3"
      >
        <p>
          Talk to me at
          <b-link class="text-secondary" href="mailto:zanqwq@gmail.com"
            >zanqwq@gmail.com</b-link
          >
          or
          <b-link class="text-secondary" href="mailto:zanqwq@163.com"
            >zanqwq@163.com</b-link
          >
        </p>
      </div>
    </div>
    <Footer class="mt-3" />
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
  min-height: 300px;
}

.box p,
.box ul {
  max-width: 400px;
}

.box:nth-of-type(1) {
  color: white;
  background: var(--dark);
}

.box:nth-of-type(2) {
  background: #e4f0f6;
}

.box:nth-of-type(3) {
  background: white;
}

.box:nth-of-type(4) {
  color: white;
  background: #0079bf;
}

.box:nth-of-type(5) {
  background: white;
}

.box:nth-of-type(6) {
  background: #e4f0f6;
}
</style>
