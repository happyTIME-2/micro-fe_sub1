<template>
  <div class="about m-auto">
    <h1 text="red center 2xl">About</h1>
    <p text-3xl>{{ msg }}</p>
  </div>
</template>

<script setup lang="ts">
  const msg = ref('hello world!')
</script>