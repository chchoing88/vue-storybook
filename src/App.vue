<template>
  <div id="app">
    <select name="test" id="test" @change="routing">
      <option value="Todo">Todo</option>
      <option value="About">About</option>
    </select>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    routing(e) {
      console.log(e.target.value);
      this.$router.push({ path: e.target.value, name: e.target.value });
    },
  },
};
</script>
<style lang="scss"></style>
