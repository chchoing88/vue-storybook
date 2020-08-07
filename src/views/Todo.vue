<template>
  <div id="Todo">
    <TodoHeader />
    <div v-if="userName">
      <TodoTitle :propsdata="checkCount" :propsname="userName" />
      <TodoInput @addItem="addOneItem" />
    </div>
    <div v-else>
      <TodoHello @addName="addUserName" />
    </div>
    <TodoController @clearAll="clearAllItem" @sortItem="sortAllItem" />
    <TodoList :propsdata="todoItems" @removeItem="removeOneItem" @toggleItem="toggleOneItem" />
    <TodoFooter />
    <Modal v-show="showModal" @close="showModal = false">
      <template v-slot:modal-text>{{ modalText }}</template>
    </Modal>
  </div>
</template>
<script>
import TodoHeader from '../components/TodoHeader';
import TodoTitle from '../components/TodoTitle';
import TodoInput from '../components/TodoInput';
import TodoController from '../components/TodoController';
import TodoList from '../components/TodoList';
import TodoFooter from '../components/TodoFooter';
import TodoHello from '../components/TodoHello';
import { getDate } from '../utils/lib';
import Modal from '../components/common/Modal';

import * as todoStore from '../store/modules/todo/Todo';

export default {
  name: 'Todo',
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter,
    TodoHello,
    Modal,
  },
  data() {
    return {
      showModal: false,
      userName: '',
      // todoItems: [],
      modalText: '',
    };
  },
  computed: {
    ...todoStore.mapState({
      todoItems: (state) => state.todoItems,
    }),

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
    this.userName = localStorage.getItem('userName');

    console.log(this.$store);

    // if (localStorage.length > 0) {
    //   for (let i = 0; i < localStorage.length; i += 1) {
    //     if (
    //       localStorage.key(i) !== 'userName' &&
    //       localStorage.key(i) !== 'loglevel:webpack-dev-server'
    //     ) {
    //       this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    //     }
    //   }
    // }
  },
  methods: {
    soertTodoLatest() {
      this.todoItems.sort(function (a, b) {
        return b.time - a.time;
      });
    },
    sortTodoOldest() {
      this.todoItems.sort(function (a, b) {
        return a.time - b.time;
      });
    },
    sortAllItem(selectedSort) {
      if (selectedSort.value === 'date-desc') {
        this.soertTodoLatest();
      } else if (selectedSort.value === 'date-asc') {
        this.sortTodoOldest();
      }
    },
    addOneItem(todoItem) {
      // 빈 내용인 경우
      if (todoItem === '') {
        this.showModal = !this.showModal;
        this.modalText = 'The form is empty. Please enter your task.';

        return false;
      }

      // 중복되는 내용인 경우
      for (let i = 0; i < this.todoItems.length; i += 1) {
        if (this.todoItems[i].item === todoItem) {
          this.showModal = !this.showModal;
          this.modalText = "I think you've already had the task.";

          return false;
        }
      }
      const value = {
        item: todoItem,
        date: `${getDate().date} ${getDate().week}`,
        time: getDate().time,
        completed: false,
      };
      localStorage.setItem(todoItem, JSON.stringify(value));
      this.todoItems.push(value);

      return true;
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
    addUserName(userName) {
      localStorage.setItem('userName', userName);
      this.userName = userName;
    },
  },
};
</script>
<style lang="scss"></style>
