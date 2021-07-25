<template>
  <div class="home">
    <h1>Puppies</h1>
    <p>Sort by: </p> <button v-on:click="sortById()">ID</button> <button v-on:click="sortByName()">Name</button>
    <hr /> 
    <div v-for="puppy in puppies">
      <p>id: {{ puppy.id }}</p>
      <p> Name: {{ puppy.name }} </p>
      <p> Age (years): {{ puppy.age }} </p>
      <p> Breed: {{ puppy.breed }} </p>
      <a v-bind:href="`/puppies/${puppy.id}`"> More Info </a>
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
  // computed: function (sortMethod) {
  //   sortedPuppies: sortMethod(this.puppies);
  // },
  methods: {
    puppiesIndex: function () {
      axios.get("/puppies").then((response) => {
        this.puppies = response.data;
      });
    },
    sortById: function () {
      this.puppies.sort((a, b) => a.id - b.id);
    },
    sortByName: function () {
      this.puppies.sort((a, b) => a.name.localeCompare(b.name));
    },
  },
};
</script>
