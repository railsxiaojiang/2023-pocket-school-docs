<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="footer">© 2021-2023 | Designed and coded with TA Cloud |</div>
    </template>
  </ParentLayout>
</template>

<style lang="css" scoped>
.footer {
  text-align: center;
  margin: 0 auto;
}
</style>
