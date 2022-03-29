<template>
  <t-menu theme="light" @change="changeHandler">
    <template #logo>
      <img
        width="136"
        class="t-menu__logo--center"
        src="https://www.tencent.com/img/index/menu_logo_hover.png"
        alt="logo"
      />
    </template>
    <t-menu-item 
      v-for="(item, index) in routes"
      :value="index"
      :key="index"
    >
      <span>{{item.name}}</span>
    </t-menu-item>
  </t-menu>
</template>

<script lang="ts" setup>
import routes from '~pages'
const router = useRouter()

const changeHandler = (active: any) => {
  router.push(routes[active].path)
  console.log('change', active);
};
</script>

<style scoped lang="scss">
</style>