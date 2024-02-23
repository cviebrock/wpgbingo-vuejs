<script setup lang="ts">
const props = defineProps<{
  width: string;
}>();

const modalWidth = props.width ?? '30rem'

const emit = defineEmits<{
  close: [];
}>();
</script>

<template>
  <aside class="modal">
    <div class="slot">
      <slot></slot>
    </div>
    <div class="close">
      <a class="btn" @click="emit('close')">Close</a>
    </div>
  </aside>
  <div class="modal-bg" @click="emit('close')"></div>
</template>

<style scoped>
.modal-bg,
aside {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.modal-bg {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: var(--color-modal-background);
  z-index: 1;
}

aside {
  margin: 1rem auto;
  width: v-bind(modalWidth);
  max-width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  background-color: var(--gray-lightest);
  border-radius: var(--radius-lg);
  overflow: hidden scroll;
  display: flex;
  flex-direction: column;
  z-index: 100;
  box-shadow: 0 0 1rem var(--color-modal-background);
  animation: pop-in 0.5s;
}

.slot {
  flex-grow: 1;
}
.close {
  margin: 1rem;
  flex-grow: 0;
  text-align: right;
}
a.btn {
  display: inline-block;
  text-decoration: none;
  white-space: nowrap;
  background-color: var(--color-button);
  color: var(--color-button-text);
  border-radius: var(--radius-sm);
  padding: 0.5rem 1rem;

  &:hover {
    background-color: var(--color-button-primary);
    color: var(--color-button-primary-text);
  }
}

@keyframes pop-in {
  0% {
    opacity: 0;
    transform: scale(0.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@media (min-width: 768px) {
  .close {
    margin: 2rem;
  }
}
</style>
