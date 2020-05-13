<template>
  <div class="flex-containe mx-auto">
    <div class="flex-ite"></div>
    <div class="flex-ite"></div>
    <div class="flex-ite"></div>
    <div class="flex-ite"></div>
    <div class="flex-ite"></div>
    <div class="flex-ite"></div>
    <div class="flex-ite"></div>
    <div class="flex-ite"></div>
    <div class="flex-ite"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.flex-containe {
  display: flex;
  flex: 1 1 100px;

  width: 600px;
  height: 800px;
  border: 1px solid red;
}

.flex-ite {
  width: 100px;
  height: 100px;
  border: 1px solid blue;
}
</style>
