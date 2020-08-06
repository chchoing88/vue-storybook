<template>
  <div class="modal">
    <div class="modal-content">
      <slot name="modal-text"> (여기에 모달 내용이 들어가요) </slot>
    </div>
    <button class="btn-close" @click="$emit('close')">OK</button>
  </div>
</template>

<script>
export default {
  name: 'Modal',
};
</script>
