<template>
  <div class="title">
    <p class="title-message">{{ message }}</p>
    <p class="title-task">
      You've got
      <span class="num-total">{{ taskTotal }}</span> tasks today.
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoTitle',
  data() {
    return {
      message: 'Hello, nana.',
      taskTotal: 5,
    };
  },
};
</script>
<style lang="scss" scoped>
.title {
  max-width: 500px;
  letter-spacing: 0.03rem;
  color: black;

  &-message {
    font-size: 1.6rem;
  }

  &-task {
    font-weight: bold;

    &-top {
      display: block;
    }

    &-total {
      font-size: 5.4rem;
    }
  }
}
</style>
