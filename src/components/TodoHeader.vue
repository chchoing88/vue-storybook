<template>
  <header class="header">
    <h1 class="logo">My Todo</h1>
    <p class="date">{{ timestamp }}</p>
  </header>
</template>

<script>
export default {
  name: 'TodoHeader',
  data() {
    return {
      timestamp: '',
    };
  },
  created() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const weekList = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
    const week = weekList[now.getDay()];
    this.timestamp = `${month}/${date} ${week}`;
  },
};
</script>

<style lang="scss" scoped>
.header {
  color: red;
}
</style>
