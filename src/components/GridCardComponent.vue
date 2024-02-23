<script setup lang="ts">
import type { tCard, tChallengeId } from '@/types';

const props = defineProps<{
  card: tCard;
  challengeId: tChallengeId;
  selected: boolean;
}>();

const emit = defineEmits<{
  popup: [card: tCard];
}>();

const card = props.card;
const gridArea = card.id;
const imageURL = `/images/${props.challengeId}/${card.img}`;
</script>

<template>
  <div :class="['grid-card', selected ? 'selected' : '']">
    <figure>
      <img :src="imageURL" :alt="card.name" :title="card.name" />
      <figcaption @click="emit('popup', card)">
        {{ card.name }}
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
.grid-card {
  padding: 0.25rem;
  grid-area: v-bind(gridArea);

  figure {
    border-radius: var(--radius-md);
    position: relative;
    overflow: hidden;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    /* border-radius: var(--radius-md); */
    object-fit: cover;
  }

  figcaption {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    padding: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.2;
    color: var(--gray-lightest);
    opacity: 0;
    background-color: var(--color-modal-background);
    transition: all 0.3s ease-in-out;
  }

  figure:hover figcaption {
    opacity: 1;
    height: 100%;
  }

  &.selected {
    background-color: var(--complementary-light);
  }
}

@media (min-width: 768px) {
  .grid-card {
    padding: 0.5rem;
  }
}
</style>
