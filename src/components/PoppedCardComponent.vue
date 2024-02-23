<script setup lang="ts">
import type { tCard, tChallengeId } from '@/types';

const props = defineProps<{
  card: tCard;
  challengeId: tChallengeId;
}>();

const emit = defineEmits<{
  unpop: [];
}>();

const card = props.card;
const imagePath = `/src/assets/images/${props.challengeId}/${card.img}`;
const imageURL = new URL(imagePath, import.meta.url).href;
</script>

<template>
  <aside>
    <img :src="imageURL" :alt="card.name" :title="card.name" />
    <div class="details">
      <h2>{{ card.name }}</h2>
      <p>{{ card.desc }}</p>
    </div>
    <div class="button">
      <a @click="emit('unpop')">Close</a>
    </div>
  </aside>
  <div class="modal-bg" @click="emit('unpop')"></div>
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
  width: 30rem;
  max-width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  background-color: var(--gray-lightest);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 100;
  box-shadow: 0 0 1rem var(--color-modal-background);
  animation: pop-in 0.5s;
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

div {
  margin: 2rem 1rem;
}
div.details {
  flex-grow: 1;
}
div.button {
  text-align: right;
}

h2 {
  font-weight: 600;
}

a {
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
</style>
