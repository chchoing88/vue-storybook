import TodoHeader from '../src/components/TodoHeader.vue';

export default {
  title: 'TodoHeader',
};

const todoHeaderTemplate = `<TodoHeader />`;

// default task state
export const Default = () => ({
  components: { TodoHeader },
  template: todoHeaderTemplate,
});
