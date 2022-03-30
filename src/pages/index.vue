<script lang="ts" setup>
import commonStore from '@/stores';
const updateStore = () => {
  commonStore.setGlobalState({
    name: 'Vue',
  });
}

const count = commonStore.getGlobalState('count');
console.log(count);
</script>

<template>
  <div text="red 3xl" hover:m2>
    <h1 m-10 p-3 bth>Hello World</h1>
    <button @click="updateStore" btn>updateStore</button>
    <div i-carbon-sun text-3xl icon-btn/>
    <div i-logos-vue text-2xl m-auto
      animate-bounce-alt animate-count-infinite animate-1s
    />
  </div>
</template>

<style lang="scss" scoped>

</style>