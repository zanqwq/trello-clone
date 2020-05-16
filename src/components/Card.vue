<template>
  <div
    class="card"
    draggable="true"
    @dragstart.self="$emit('drag-start', $event)"
    @dragenter.prevent
    @dragover.prevent
    @drop.prevent="$emit('drop-on-card', $event)"
  >
    <div class="clearfix">
      <b-button
        class="float-right remove-card-btn"
        variant="danger"
        size="sm"
        @click="$emit('remove-card')"
      >
        <b-icon icon="trash" />
      </b-button>

      <b-button
        class="float-right mr-1 edit-card-btn"
        variant="success"
        size="sm"
        @click="$emit('edit-card')"
      >
        <b-icon icon="pencil"></b-icon>
      </b-button>

      <h6>{{ title }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.card {
  background: var(--white);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

.remove-card-btn,
.edit-card-btn {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.3s ease-in-out;
}

.card:hover {
  background: #e9e9e9;
  cursor: pointer;
}

.card:hover .remove-card-btn,
.card:hover .edit-card-btn {
  opacity: 1;
  transform: translateX(0);
}
</style>
