<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Name :" label-for="name">
        <b-form-input
          id="name"
          v-model="name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Join</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Join",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onSubmit() {
      this.$socket.emit("join", this.name);
      this.name = "";
      setTimeout(() => {
        this.$router.push("/waiting-room");
      }, 1000);
    },
  },
};
</script>

<style></style>
