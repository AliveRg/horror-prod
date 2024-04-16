<script setup>
import Container from 'postcss/lib/container'
</script>

<template>
  <main class="bg-[#202020]">
    <section>
      <div
        class="container-bg w-screen h-[641px] pt-[48px] pl-[64px] pr-[76px] pb-[83px] flex flex-col justify-between items-baseline"
      >
        <div class="w-[440px] h-[236px] font-montser font-medium leading-[80px] text-[64px]">
          <span class="text-white">THE </span>
          <span class="text-red-500 font-black">BEST<br /></span>
          <p class="text-white">QUEST</p>
          <span class="text-white">IN </span>
          <span class="text-red-500 font-black">MOSCOW</span>
        </div>
        <div class="w-[595px] h-[194px] text-right font-medium self-end text-[32px]">
          <span class="text-white font-montser">Мы работаем над каждым </span
          ><span class="text-rose-400 font-montser">квестом</span
          ><span class="text-white font-montser">, чтобы создать атмосферу настоящего</span
          ><span class="text-white font-semibold font-montser"> </span
          ><span class="text-rose-500 font-semibold font-montser">ужаса</span
          ><span class="text-white font-montser"> и заставить участников испытать все </span
          ><span class="text-red-500 font-bold font-montser">эмоции</span
          ><span class="text-white font-montser">, от </span
          ><span class="text-red-600 font-extrabold font-montser">страха</span
          ><span class="text-white font-montser"> до восторга.</span>
        </div>
      </div>
    </section>
    <section>
      <div class="w-screen pt-[48px] px-[64px] flex flex-col justify-between items-baseline">
        <p class="text-white text-[64px] font-black font-montser leading-[80px]">Квесты</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      cuests: [
        {
          name: 'Синистер',
          price: 6000,
          peopleCount: 4
        },
        {
          name: 'Шесть демонов Эмили Роуз',
          price: 6000,
          peopleCount: 4
        },
        {
          name: 'Крик',
          price: 6000,
          peopleCount: 4
        },
        {
          name: 'Сплит',
          price: 6000,
          peopleCount: 4
        }
      ]
    }
  }
}
</script>

<style scoped>
.container-bg {
  background-image: url(@/assets/imagehero.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  /* background-attachment: fixed; */
}
</style>
