<template>
  <div id="Todo">
    <TodoHeader />
    <TodoTitle />
    <TodoInput />
    <TodoController />
    <TodoList />
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
};
</script>
<style lang="scss"></style>
