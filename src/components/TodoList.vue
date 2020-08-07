<template>
  <ul class="list">
    <li class="list-item" v-for="(todoItem, index) in propsdata" :key="todoItem.id">
      <input
        type="checkbox"
        :id="todoItem.item"
        :checked="todoItem.completed"
        @change="toggleComplete(todoItem)"
      />
      <label :for="todoItem.item">
        <span class="txt-list">{{ todoItem.item }}</span>
      </label>
      <p class="list-date">{{ todoItem.date }}</p>
      <button class="btn-delete" @click="removeTodo(todoItem, index)">Delete</button>
    </li>
  </ul>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'TodoList',
  props: {
    propsdata: {
      type: Array,
    },
  },
  computed: {
    // ...mapState(['Todo/todoItems']),
  },

  methods: {
    toggleComplete(todoItem) {
      this.$emit('toggleItem', todoItem);
    },
    removeTodo(todoItem, index) {
      this.$emit('removeItem', todoItem, index);
    },
  },
};
</script>
