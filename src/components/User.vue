<template>
  <div class="row">
    <div class="col-8">
      <div class="alert alert-success" role="alert">
        <h6 class="alert-heading">Users</h6>
      </div>
      <table class="table table-striped table-inverse">
        <thead class="thead-inverse">
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button
                type="button"
                class="btn btn-danger"
                @click="deleteUser(index)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col">
      <AddUser @getData="addUser($event)" />
    </div>
  </div>
</template>

<script>
import AddUser from "./AddUser.vue";
export default {
  components: {
    AddUser,
  },
  data() {
    return {
      users: [
        { name: "David Chamling Rai", email: "David@example.com" },
        { name: "Bishal Chamling Rai", email: "Bishal@example.com" },
        { name: "Sagar Puma Rai", email: "Sagar@example.com" },
      ],
    };
  },
  methods: {
    addUser(data) {
      this.users.push(data);
    },
    deleteUser(index) {
      this.users.splice(index, 1);
    },
  },
};
</script>

<style>
</style>