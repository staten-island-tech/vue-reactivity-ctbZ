<script setup>
import Card from "../components/ShopList.vue";
import { switches } from "../ItemsList";
</script>

<template>
  <main class="card">
    <Card
      v-for="keebSwitch in switches"
      :name="keebSwitch.name"
      :price="keebSwitch.price"
      :image="keebSwitch.image"
    />
  </main>
</template>

<style>
.card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;
}
</style>

