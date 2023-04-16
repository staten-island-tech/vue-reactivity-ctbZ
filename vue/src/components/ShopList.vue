<template>
  <div class="card">
    <div class="image">
      <img :src="image" :alt="name" />
    </div>
    <h2>{{ name }}</h2>
    <h3>Price: ${{ price }}</h3>
    <br />
    <button @click="addToCart" class="button" type="click">Add to Cart</button>
  </div>
</template>

<script>
import { cartList } from "../cartList.js";
import { Price } from "../totalPrice";
export default {
  name: "Card",
  props: {
    name: String,
    price: Number,
    image: String,
  },
  methods: {
    addToCart: function () {
      cartList.push({
        name: this.name,
        price: this.price,
        image: this.image,
      });
      let totalPrice = (Price.totalPrice += this.price);
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  width: 22%;
  height: fit-content;
  margin: 1rem;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0.3rem;
  padding-bottom: 1rem;
}

.image img {
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
}

h2,h3 {
  color: #4A4A4A;
}

img {
  width: 100%;
}
.button {
    display: inline-block;
    background: #4f4f4f;
    color: #f5f4f4;
    border: 2px solid #4f4f4f;
    height: auto;
    width: auto;
    padding: 9px 1.4em;
    font-family: inherit;
    font-size: 1em;
    line-height: 1.2em;
    vertical-align: middle;
    text-align: center;
    border-radius: 0.3rem;
}

.button:hover {
  background-color: #959da5;
  transition-duration: 0.1s;
  cursor: pointer;
}
</style>