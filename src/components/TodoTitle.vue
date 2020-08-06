<template>
  <div class="title">
    <p class="title-message">{{ message }}</p>
    <span ref="test" contenteditable="true" @keyup.enter="handleName">{{ propsname }}</span>
    <p class="title-task">
      You've got
      <span class="title-task-count">
        <em class="title-task-left">{{ propsdata.left }}</em>
        <span v-if="propsdata.total" class="num-total">/ {{ propsdata.total }}</span>
      </span>
      tasks today.
    </p>
  </div>
</template>

<script>
import { getDate } from '../utils/lib';
export default {
  name: 'TodoTitle',
  props: {
    propsdata: {
      type: Object,
    },
    propsname: {
      type: String,
    },
  },
  data() {
    return {
      message: '',
    };
  },
  method: {
    handleName(e) {
      const originalName = this.propsname;
      const newName = e.target.innnerText;
      if (newName !== originalName) {
        if (newName === '') {
          e.target.innnerText = originalName;
        } else {
          this.$emit('changeName', newName);
        }
      }
    },
  },
  mounted() {
    this.message = getDate().daytime;
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
