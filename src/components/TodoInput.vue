<template>
  <div class="todo-add">
    <input
      type="text"
      class="add-input"
      placeholder="Enter your task"
      v-model="newTodoItem"
      @keypress.enter="addTodoItem"
    />
    <button class="btn-add" @click="addTodoItem">Add</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      newTodoItem: '',
    };
  },
  methods: {
    addTodoItem() {
      if (this.newTodoItem !== '') {
        this.$emit('addItem', this.newTodoItem);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },
};
</script>
