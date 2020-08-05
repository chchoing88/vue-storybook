<template>
  <div class="todo-controller">
    <div class="todo-select">
      <label for="order">Order</label>
      <select name="order" id="order" class="selectbox">
        <option value="date-asc">Date Ascending</option>
        <option value="date-desc">Date Descending</option>
        <option value="name-asc">Name Ascending</option>
        <option value="name-desc">Name Descending</option>
      </select>
    </div>
    <button class="btn-allClear" @click="clearTodo">Clear All</button>
  </div>
</template>

<script>
export default {
  name: 'TodoController',
  methods: {
    clearTodo() {
      this.$emit('clearAll');
    },
  },
};
</script>
