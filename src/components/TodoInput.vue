<template>
  <div class="todo-add">
    <input type="text" class="add-input" placeholder="Enter your task" v-model="newTodoItem" />
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
        const value = {
          item: this.newTodoItem,
          date: `${new Date().getMonth() + 1}/${new Date().getDate()}`,
          completed: false,
        };
        localStorage.setItem(this.newTodoItem, JSON.stringify(value));
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },
};
</script>
