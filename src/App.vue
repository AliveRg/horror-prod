<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="">
    <div class="conatiner bg-[#202020] pt-[24px] px-[64px] flex items-center justify-between">
      <img alt="Vue logo" class="logo w-[234px]" src="@/assets/Logo.svg" width="125" height="125" />

      <ul class="flex items-center justify-end gap-[96px]">
        <li class="text-white text-[28px] font-semibold font-montser leading-loose">квесты</li>
        <li class="text-white text-[28px] font-semibold font-montser leading-loose">о нас</li>
        <li class="text-white text-[28px] font-semibold font-montser leading-loose">контакты</li>
      </ul>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
