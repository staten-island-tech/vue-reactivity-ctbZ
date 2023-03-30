<template>
  <div class="home">
      <h1 v-if="graduated">{{ student }}</h1>
      <h1 v-else>They did not yet graduate</h1>
  </div>
</template>

<script>

export default {
  name: "Home"
  components: {
    student: String,
    graduated: Boolean,
    animals: String
  },
  data() {
      return {
          student: "Harry",
          graduated: true,
          animals: [""]
      
      };
  },
};
</script>