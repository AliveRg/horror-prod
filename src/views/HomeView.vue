<script setup>
import { RouterLink, RouterView } from 'vue-router'
import questMixin from '@/mixins/questMixin.js'
import axios from 'axios'
</script>

<template>
  <main class="bg-[#202020] pt-[18px]">
    <section>
      <div
        class="container-bg w-screen h-[641px] pt-[48px] pl-[64px] pr-[76px] pb-[83px] flex flex-col justify-between items-baseline"
      >
        <div
          class="w-[440px] h-[236px] font-montser font-medium leading-[80px] text-[64px] text-white"
        >
          THE

          <span class="text-red-500 font-black">BEST<br /></span>
          <p class="">QUEST</p>
          IN
          <span class="text-red-500 font-black">MOSCOW</span>
        </div>
        <div
          class="w-[595px] h-[194px] text-right font-medium self-end text-[32px] text-white font-montser"
        >
          <span class="">Мы работаем над каждым </span
          ><span class="text-rose-400 font-montser">квестом</span>, чтобы создать атмосферу
          настоящего<span class="font-semibold font-montser"> </span
          ><span class="text-rose-500 font-semibold font-montser">ужаса</span> и заставить
          участников испытать все <span class="text-red-500 font-bold font-montser">эмоции</span>,
          от <span class="text-red-600 font-extrabold font-montser">страха</span> до восторга.
        </div>
      </div>
    </section>
    <section>
      <div class="w-screen pt-[48px] px-[64px] flex flex-col pb-[100px]">
        <p class="text-white text-[64px] font-black font-montser leading-[80px]">Квесты</p>
        <div class="grid grid-cols-2 px-[84px] pt-[36px] gap-[64px]">
          <div
            v-for="cuest in questData"
            :key="cuest.id"
            :class="
              cuest.id % 2 === 0
                ? 'flex items-center justify-end'
                : 'flex items-center justify-start'
            "
          >
            <div
              class="max-w-[460px] zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
            >
              <img
                class="align-middle transition duration-300 ease-linear"
                :src="'../src/assets/curs2.png'"
                alt=""
              />
              <div
                class="absolute w-full h-full top-0 left-0 flex flex-col justify-between px-[20px] pt-[16px] pb-[24px] text-white text-opacity-90 font-semibold font-montser"
              >
                <div class="text-end text-[32px]">
                  <p>от {{ cuest.price }}</p>
                  <p class="flex items-center justify-end gap-[12px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 12C10.35 12 8.9375 11.4125 7.7625 10.2375C6.5875 9.0625 6 7.65 6 6C6 4.35 6.5875 2.9375 7.7625 1.7625C8.9375 0.5875 10.35 0 12 0C13.65 0 15.0625 0.5875 16.2375 1.7625C17.4125 2.9375 18 4.35 18 6C18 7.65 17.4125 9.0625 16.2375 10.2375C15.0625 11.4125 13.65 12 12 12ZM0 24V19.8C0 18.95 0.21875 18.1687 0.65625 17.4562C1.09375 16.7437 1.675 16.2 2.4 15.825C3.95 15.05 5.525 14.4688 7.125 14.0812C8.725 13.6937 10.35 13.5 12 13.5C13.65 13.5 15.275 13.6937 16.875 14.0812C18.475 14.4688 20.05 15.05 21.6 15.825C22.325 16.2 22.9062 16.7437 23.3438 17.4562C23.7812 18.1687 24 18.95 24 19.8V24H0ZM3 21H21V19.8C21 19.525 20.9313 19.275 20.7938 19.05C20.6563 18.825 20.475 18.65 20.25 18.525C18.9 17.85 17.5375 17.3438 16.1625 17.0063C14.7875 16.6688 13.4 16.5 12 16.5C10.6 16.5 9.2125 16.6688 7.8375 17.0063C6.4625 17.3438 5.1 17.85 3.75 18.525C3.525 18.65 3.34375 18.825 3.20625 19.05C3.06875 19.275 3 19.525 3 19.8V21ZM12 9C12.825 9 13.5313 8.70625 14.1188 8.11875C14.7063 7.53125 15 6.825 15 6C15 5.175 14.7063 4.46875 14.1188 3.88125C13.5313 3.29375 12.825 3 12 3C11.175 3 10.4688 3.29375 9.88125 3.88125C9.29375 4.46875 9 5.175 9 6C9 6.825 9.29375 7.53125 9.88125 8.11875C10.4688 8.70625 11.175 9 12 9Z"
                        fill="white"
                        fill-opacity="0.9"
                      />
                    </svg>
                    {{ cuest.players }}
                  </p>
                </div>
                <p class="text-[48px] text-center">{{ cuest.quest_name }}</p>
                <div class="btn flex items-center justify-center">
                  <RouterLink
                    :to="{ name: 'about', params: { id: cuest.id } }"
                    class="px-[60px] pt-[19px] pb-[20px] bg-white/10 hover:bg-white/20 rounded-[16px] text-[32px] border-solid border-[1px] border-white/60"
                  >
                    перейти
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-se px-[64px]">
        <p class="text-white text-[64px] font-black font-montser leading-[80px] pb-[36px]">О нас</p>
        <div class="flex items-center justify-between gap-[36px] pb-[42px]">
          <div class="max-w-[460px] w-full">
            <img class="w-full" src="@/assets/aboutimg2.png" alt="" />
          </div>
          <p
            class="w-2/3 max-w-[600px] font-[600] text-[26px] text-white leading-[36px] font-montser"
          >
            Наша команда, специализирующаяся на создании самых ужасных и захватывающих квестов для
            любителей адреналина и приключений. Мы предлагаем уникальные сценарии, включающие в себя
            заброшенные психиатрические госпитали, дома с проклятиями и загадочные лабиринты
            времени.
          </p>
        </div>
        <div class="flex items-center justify-between gap-[36px]">
          <p
            class="w-2/3 max-w-[600px] font-[600] text-right text-[26px] text-white leading-[36px] font-montser"
          >
            HOOLIGAN QUEST - это место, где смелые и отважные могут испытать настоящий ужас и пройти
            через испытание, которое они никогда не забудут.
          </p>
          <div class="max-w-[460px] w-full">
            <img class="w-full" src="@/assets/aboutimg1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  mixins: [questMixin],
  data() {
    return {
      cuests: [
        {
          id: 1,
          name: 'Синистер',
          price: 6000,
          peopleCount: 4,
          imgUrl: '../src/assets/curs1.png'
        },
        {
          id: 2,
          name: 'Шесть демонов Эмили Роуз',
          price: 6000,
          peopleCount: 4,
          imgUrl: '../src/assets/curs2.png'
        },
        {
          id: 3,
          name: 'Крик',
          price: 6000,
          peopleCount: 4,
          imgUrl: '../src/assets/curs3.png'
        },
        {
          id: 4,
          name: 'Сплит',
          price: 6000,
          peopleCount: 4,
          imgUrl: '../src/assets/curs4.png'
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
.zoom:hover img {
  transform: scale(1.1);
}
</style>
