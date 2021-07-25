<template>
  <div class="home">
    <h1>Puppies</h1>
    <hr />
    <div v-for="puppy in puppies">
      <p> Name: {{ puppy.name }} </p>
      <p> Age (years): {{ puppy.age }} </p>
      <p> Breed: {{ puppy.breed }} </p>
      <hr />
    </div>

  </div>
</template>

<style>
img {
  height: 250px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      puppies: [],
    };
  },
  created: function () {
    this.puppiesIndex();
  },
  methods: {
    puppiesIndex: function () {
      axios.get("http://localhost:3000/puppies").then((response) => {
        this.puppies = response.data;
      });
    },
  },
};
</script>
