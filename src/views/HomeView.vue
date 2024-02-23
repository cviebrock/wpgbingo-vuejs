<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { challenges } from '@/data/challenges';
import ModalComponent from '@/components/ModalComponent.vue';
import PoppedWarningComponent from '@/components/PoppedWarningComponent.vue';
import { onBeforeMount, ref } from 'vue';

// can change all this to use Pinia store if/when there are new persistent features
const seenWarning = ref(false);
const sessionKey = 'wpgbingo-warning';

function closeWarning() {
  sessionStorage.setItem(sessionKey, 'true');
  seenWarning.value = true;
}

onBeforeMount(() => {
  if (sessionStorage.getItem(sessionKey)) {
    seenWarning.value = true;
  }
});

</script>

<template>
  <main>
    <section class="welcome">
      <h1>
        <div class="surtitle">Welcome to</div>
        Winnipeg Bike Bingo!
      </h1>
      <nav class="challenges">
        <template v-for="(item, key) in challenges" :key="key">
          <RouterLink :to="{ name: 'challenge', params: { id: key } }">
            {{ item.name }}
          </RouterLink>
        </template>
      </nav>
    </section>
    <section class="map">
      <img src="/images/map.jpg" />
    </section>
    <nav class="header">
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
      <RouterLink :to="{ name: 'wall-of-fame' }">Wall Of Fame</RouterLink>
    </nav>
  </main>

  <ModalComponent v-if="!seenWarning" :closeText="'I agree'" @unpop="closeWarning">
    <PoppedWarningComponent />
  </ModalComponent>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  max-width: initial;
  margin: 0;

  padding: 0;
  display: flex;
  flex-direction: column;
}

section {
  width: 100%;
}
nav {
  display: flex;
}

.welcome {
  align-self: center;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h1 {
  font-size: 3rem;
  line-height: 3rem;
  font-weight: 700;
  color: var(--color-heading);

  .surtitle {
    font-size: 2rem;
    color: var(--color-heading-muted);
  }
}

nav.challenges {
  padding: 1rem 0;
  gap: 0.5rem;
  flex-flow: wrap;

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
}

nav.header {
  order: -1;
  gap: 2rem;
  padding: 1rem 2rem;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: var(--gray);
    border-bottom: 2px solid transparent;

    &:hover {
      color: var(--primary);
      border-bottom-color: var(--primary-lighter);
    }
  }

}

.map {
  flex-grow: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media (min-width: 768px) {
  main {
    display: grid;
    grid-template-columns: minmax(25rem, 40%) 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header map'
      'welcome map';
  }
  .welcome {
    grid-area: welcome;
  }
  .map {
    grid-area: map;
  }
  .header {
    grid-area: header;
  }
}
</style>
