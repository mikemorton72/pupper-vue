<template>
  <div class="home">
    <h1>Edit Puppy</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <form v-on:submit.prevent="submit()">
      <div>
        <label>Name: </label>
        <input type="text" v-model="editPuppy.name" />
      </div>
      <div>
        <label>Age: </label>
        <input type="text" v-model="editPuppy.age" />
      </div>
      <div>
        <label>Breed: </label>
        <input type="text" v-model="editPuppy.breed" />
      </div>
      <br />
      <input type="submit" value="Submit" />
    </form>
    <br />
    <br />
    <button v-on:click="puppiesDestroy">Delete</button>
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
      editPuppy: {},
      errors: {},
    };
  },
  created: function () {
    this.puppiesShow();
  },
  methods: {
    puppiesShow: function () {
      axios.get(`/puppies/${this.$route.params.id}`).then((response) => {
        this.editPuppy = response.data;
      });
    },
    submit: function () {
      axios
        .patch(`/puppies/${this.editPuppy.id}`, this.editPuppy)
        .then((respose) => {
          this.$router.push(`/puppies/${this.editPuppy.id}`);
        })
        .catch((errors) => {
          this.errors = errors.response.data.errors;
        });
    },
    puppiesDestroy: function () {
      axios.delete(`/puppies/${this.editPuppy.id}`).then((response) => {
        this.$router.push(`/puppies`);
      });
    },
  },
};
</script>
