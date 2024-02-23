<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
      <RouterLink :to="{ name: 'wall-of-fame' }">Wall Of Fame</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  a {
    text-decoration: none;
    color: var(--gray);
    border-bottom: 2px solid transparent;
    transition: var(--link-transition);

    &:hover {
      color: var(--primary);
      border-bottom-color: var(--primary-lighter);
    }
  }

  a:first-child {
    margin-right: auto;
  }
}

@media (min-width: 768px) {
  header {
    padding: 1rem 2rem;
  }
  nav {
    gap: 2rem;
  }
}
</style>
