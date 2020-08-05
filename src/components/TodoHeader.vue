<template>
  <header class="header">
    <h1 class="logo">My Todo</h1>
    <p class="date">{{ timestamp }}</p>
  </header>
</template>

<script>
import { getDate } from '../utils/lib';

export default {
  name: 'TodoHeader',
  data() {
    return {
      timestamp: '',
    };
  },
  created() {
    this.timestamp = `${getDate().month}/${getDate().date} ${getDate().week}`;
  },
};
</script>

<style lang="scss" scoped>
.header {
  color: red;
}
</style>
