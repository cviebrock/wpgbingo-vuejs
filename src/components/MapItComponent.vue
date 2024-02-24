<script setup lang="ts">
const props = defineProps<{
  dist: number;
  url: string;
}>();
</script>

<template>
  <aside>
    <section>
      <div class="dist">{{ props.dist }} km</div>
      <a :href="props.url" target="_blank">Map It</a>
    </section>
  </aside>
</template>

<style scoped>
aside {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 1rem;
}
section {
  width: 6rem;
  height: 6rem;
  border-radius: 5rem;
  border-bottom-right-radius: 0;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--primary-lightest);
  box-shadow: var(--shadow-dark);

}
.dist {
  font-size: 1rem;
  line-height: 1.2;
  font-weight: var(--weight-black);
}
a {
  font-size: 0.875rem;
  color: var(--primary-lightest);
  text-decoration: none;
}

@media (min-width: 768px) {
  .dist {
    font-size: 1.2rem;
  }
}
</style>
