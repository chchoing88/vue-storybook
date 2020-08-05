<template>
  <div id="Todo">
    <TodoHeader />
    <TodoTitle :propsdata="checkCount" />
    <TodoInput @addItem="addOneItem" />
    <TodoController @clearAll="clearAllItem" />
    <TodoList :propsdata="todoItems" @removeItem="removeOneItem" @toggleItem="toggleOneItem" />
    <TodoFooter />
  </div>
</template>
<script>
import TodoHeader from '../components/TodoHeader';
import TodoTitle from '../components/TodoTitle';
import TodoInput from '../components/TodoInput';
import TodoController from '../components/TodoController';
import TodoList from '../components/TodoList';
import TodoFooter from '../components/TodoFooter';
import { getDate } from '../utils/lib';

export default {
  name: 'Todo',
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  computed: {
    checkCount() {
      const total = this.todoItems.length;
      const left = this.todoItems.filter((todoItem) => !todoItem.completed).length;

      return {
        total,
        left,
      };
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i += 1) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  methods: {
    addOneItem(todoItem) {
      const value = {
        item: todoItem,
        date: `${getDate().date} ${getDate().week}`,
        time: getDate().time,
        completed: false,
      };
      localStorage.setItem(todoItem, JSON.stringify(value));
      this.todoItems.push(value);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem() {
      this.todoItems = [];
      localStorage.clear();
    },
  },
};
</script>
<style lang="scss"></style>
