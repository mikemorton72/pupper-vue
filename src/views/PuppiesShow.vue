<template>
  <div class="home">
    <h1>Puppies</h1>
    <hr />
    <p> Name: {{ puppy.name }} </p>
    <p> Age (years): {{ puppy.age }} </p>
    <p> Breed: {{ puppy.breed }} </p>
    <a v-bind:href="`/puppies/${puppy.id}/edit`">Edit</a>
    <hr />
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
      puppy: {},
    };
  },
  created: function () {
    this.puppiesShow();
  },
  methods: {
    puppiesShow: function () {
      axios.get(`/puppies/${this.$route.params.id}`).then((response) => {
        this.puppy = response.data;
      });
    },
  },
};
</script>
