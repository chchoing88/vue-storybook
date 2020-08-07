import { createNamespacedHelpers } from 'vuex';
import mutations from './mutation';
import actions from './actions';

const NAMESPACE = 'Todo';

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i += 1) {
        if (
          localStorage.key(i) !== 'userName' &&
          localStorage.key(i) !== 'loglevel:webpack-dev-server'
        ) {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }

    return arr;
  },
};

const Todo = {
  state: {
    todoItems: storage.fetch(),
    userName: '',
  },
  getters: {
    checkCount() {
      const total = this.todoItems.length;
      const left = this.todoItems.filter((todoItem) => !todoItem.completed).length;

      return {
        total,
        left,
      };
    },
  },
  mutations,
  actions,
};

export default Todo;
export const { mapState, mapGetters, mapActions } = createNamespacedHelpers(NAMESPACE);
