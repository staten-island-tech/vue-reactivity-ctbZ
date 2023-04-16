<template>
  <div class="card">
    <img :src="image" :alt="name" /><br />
    <h2>{{ name }}</h2>
    <h3>Price: ${{ price }}</h3>

    <button @click="removeFromCart" class="button" type="click">
      Remove from Cart
    </button>
  </div>
</template>

<script>
import { cartList } from "../cartList";
import { Price } from "../totalPrice";
export default {
  name: "Card",
  props: {
    name: String,
    price: Number,
    image: String,
  },
  methods: {
    removeFromCart: function (index) {
      cartList.splice(index, 1);
      let newPrice = (Price.totalPrice -= this.price);
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

img {
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
}
.button {
    display: inline-block;
    background: #4f4f4f;
    color: #f5f4f4;
    border: 2px solid #4f4f4f;
    height: auto;
    width: auto;
    margin-top: 1rem;
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

h2,h3 {
  color: #4A4A4A;
}
</style>