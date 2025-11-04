<script setup>
</script>

<template>
  <header class="sticky top-0 bg-black border-gray border-b">
    <Container>
      <AppHeader/>
    </Container>
  </header>
  <main class="py-5">
    <Container>
        <slot/>
    </Container>
  </main>
  <footer class="bg-black text-white py-3">
    <Container>
      Copyright
    </Container>
  </footer>
</template>

<style scoped>

</style>
