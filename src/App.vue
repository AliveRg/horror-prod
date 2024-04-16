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

  <footer class="footer pt-[48px] bg-[#202020]">
    <section>
      <div
        class="container-bg w-screen h-[641px] pt-[48px] pl-[64px] pr-[76px] pb-[83px] flex justify-center items-center"
      >
        <div class="font-montser font-medium text-[64px] text-white uppercase text-center">
          <p class="leading-[80px]">
            СМОЖЕШЬ<br />
            ПОБОРОТЬ
          </p>
          <p class="text-red-500 font-extrabold text-[128px] leading-[121px]">СТРАХ</p>
        </div>
        <p class="text-[356px] text-white font-montser font-semibold">?</p>
      </div>
    </section>
    <section class="pt-[42px]">
      <p class="text-white text-[64px] font-black font-montser leading-[80px] pb-[32px] px-[64px]">
        Контакты
      </p>
      <div class="flex">
        <div class="w-2/3 pl-[64px] bg-foot"></div>
        <div class="w-1/3">
          <img class="w-full h-[444px] object-cover" src="@/assets/footer2.png" alt="" />
        </div>
      </div>
    </section>
  </footer>
</template>

<style scoped>
.container-bg {
  background-image: url(@/assets/footer.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* background-attachment: fixed; */
}
.bg-foot {
  background: linear-gradient(139deg, rgba(32, 32, 32, 0) 19.01%, #151611 53.37%, #040404 98.16%);
}
</style>
