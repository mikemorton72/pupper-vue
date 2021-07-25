<template>
  <div class="home">
    <h1>Add a Puppy to the Site</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <form v-on:submit.prevent="submit()">
      <div>
        <label>Name: </label>
        <input type="text" v-model="newPuppy.name" />
      </div>
      <div>
        <label>Age: </label>
        <input type="text" v-model="newPuppy.age" />
      </div>
      <div>
        <label>Breed: </label>
        <input type="text" v-model="newPuppy.breed" />
      </div>
      <input type="submit" value="Submit" />
    </form>
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
      newPuppy: {},
      errors: {},
    };
  },
  created: function () {},
  methods: {
    submit: function () {
      axios
        .post("/puppies", this.newPuppy)
        .then((response) => {
          this.newPuppy = {};
          this.$router.push("/puppies");
        })
        .catch((errors) => {
          this.errors = errors.response.data.errors;
        });
    },
  },
};
</script>
