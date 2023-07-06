<template>
  <div class="alert alert-success" role="alert">
    <h6 class="alert-heading">Add Users</h6>
  </div>

  <div class="form-group">
    <label for="name">Name</label>
    <input
      type="text"
      class="form-control"
      name="name"
      id="name"
      aria-describedby="helpId"
      placeholder="Name"
      v-model="user.name"
    />
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input
      type="email"
      class="form-control"
      name="email"
      id="email"
      aria-describedby="helpId"
      placeholder="Email"
      v-model="user.email"
    />
  </div>

  <button
    type="button"
    class="btn btn-primary float-right"
    @click="sendUserDetails"
  >
    Add User
  </button>
</template>

<script>
export default {
  emits: ["getData"],
  data() {
    return {
      user: {
        name: "",
        email: "",
      },
    };
  },

  methods: {
    sendUserDetails() {
      this.$emit("getData", this.user);
      this.user = {};
    },
  },
};
</script>

<style>
</style>