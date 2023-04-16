<script setup>
import Card from "../components/CartList.vue";
import { cartList } from "../cartList.js";
import { Price } from "../totalPrice";
</script>

<template>
  <h3>Total: ${{ Price.totalPrice }}</h3>
  <main class="card">
    <Card
      v-for="switches in cartList"
      :name="switches.name"
      :price="switches.price"
      :image="switches.image"
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

h3 {
  text-align: center;
}
</style>