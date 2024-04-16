<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
</script>
<template>
  <div class="bg-[#202020] pt-[42px]">
    <section>
      <div class="container-re px-[64px]">
        <div class="flex justify-between items-end">
          <div class="font-montser leading-[80px]">
            <p class="text-white text-2xl font-semibold">Квест-перфоманс</p>
            <p class="text-red-500 text-[64px] font-bold">Синистер</p>
            <div
              class="flex gap-[16px] text-white text-opacity-90 text-xl font-normal font-montser pt-[24px]"
            >
              <p
                v-for="(tag, index) in tags"
                :key="index"
                class="px-[16px] py-[4px] border-solid border-[1px] border-white/60 rounded-[16px]"
              >
                {{ tag }}
              </p>
            </div>
          </div>
          <div class="text-white font-montser text-end">
            <p class="text-2xl font-medium">бронь по номеру</p>
            <p class="text-5xl font-bold">79998480686</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="pt-[24px] pl-[64px]">
        <swiper
          class="relative"
          :slides-per-view="2.6"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(image, index) in images" :key="index"
            ><img :src="image" alt=""
          /></swiper-slide>
          <div
            class="absolute top-0 right-0 h-full w-[400px] bg-gradient-to-r from-[#202020]/10 to-[#202020]/100 z-20"
          ></div>
        </swiper>
      </div>
    </section>
    <section>
      <div class="px-[64px] pt-[48px] flex items-center justify-between">
        <div class="flex gap-[40px] items-center justify-start">
          <div
            class="flex flex-col gap-[24px] max-w-[100px] font-semibold font-montser text-[16px] text-[#5F5F5F] text-center justify-center"
          >
            <p>Игроков</p>
            <p class="text-white">1-8 человек</p>
          </div>
          <div class="border-r-[1px] bordre-white border-solid h-[100px] w-0"></div>
          <div
            class="flex flex-col gap-[24px] max-w-[100px] font-semibold font-montser text-[16px] text-[#5F5F5F] text-center justify-center"
          >
            <p>Время</p>
            <p class="text-white">60 минут</p>
          </div>
          <div class="border-r-[1px] bordre-white border-solid h-[100px] w-0"></div>
          <div
            class="flex flex-col gap-[24px] max-w-[100px] font-semibold font-montser text-[16px] text-[#5F5F5F] text-center justify-center"
          >
            <p>Цена</p>
            <p class="text-white">от 6 000 р</p>
          </div>
          <div class="border-r-[1px] bordre-white border-solid h-[100px] w-0"></div>
          <div
            class="flex flex-col gap-[24px] max-w-[100px] font-semibold font-montser text-[16px] text-[#5F5F5F] text-center justify-center"
          >
            <p>Сложность</p>
            <p class="text-white">Средний</p>
          </div>
          <div class="border-r-[1px] bordre-white border-solid h-[100px] w-0"></div>
          <div
            class="flex flex-col gap-[24px] max-w-[100px] font-semibold font-montser text-[16px] text-[#5F5F5F] text-center justify-center"
          >
            <p>Возраст</p>
            <p class="text-white">18+</p>
          </div>
        </div>
        <p
          class="bg-stone-50 rounded-2xl text-black text-opacity-90 text-[32px] font-normal font-montser px-[22px] py-[18px]"
        >
          забронировать
        </p>
      </div>
    </section>
    <section>
      <div class="px-[64px] pt-[42px] font-montser text-white">
        <p class="text-[64px] font-black">О квесте</p>
        <p class="pt-[24px] text-[24px]">
          Писатель Эллисон Освальт, зарабатывающий на жизнь написанием криминальных романов и
          детективов по мотивам реальных событий и преступлений, переезжает с семьёй в новый дом,
          где почти год назад развернулась леденящая душу трагедия — была убита семя Стивенсонов,
          кроме одной девочки…Стефани – она чудесным образом, пропала. Делом в городе никто не
          занимался. Писатель случайно находит видеозаписи, которые являются ключом к тайне
          преступления и решает посвятить новую книгу расследованию убийству целой семьи, членов
          которых повесили на дереве. Но ничто не дается даром: в доме начинают происходить жуткие
          вещи. Они столкнулись с чем-то, от чего нет спасения… Эшли – дочь известного писателя - в
          руках она держит старинную камеру, которой снимает все происходящее, и топор. Девочка
          обещала отцу, что сделает его знаменитым. Надежда найти пропавших не покидала лишь лучшего
          друга писателя. К счастью, вы отозвались на его многочисленные просьбы о помощи. Однако
          вам самим придется полностью прожить случившееся с пропавшей семьей, от начала и до конца.
          Проклятый проектор дожидается своего нового владельца. Надеемся, что среди плёнок не
          появится новая запись - «Домашнего рисования».
        </p>
      </div>
    </section>
    <section>
      <div class="pt-[36px] px-[64px]">
        <p class="text-[64px] font-black font-montser text-white leading-[72px]">
          Онлайн <br />
          бронирование
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ['страшные', 'популярные', 'хоррор'],
      images: ['../src/assets/image1.png', '../src/assets/image2.png', '../src/assets/image3.png']
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange
    }
  }
}
</script>

<style scoped></style>
