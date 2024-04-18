<script setup>
import iconPrice from '../components/icon/iconPrice.vue'
import openWindow from '../components/openWindow.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import questMixin from '@/mixins/questMixin.js'
import axios from 'axios'
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
            <p class="text-red-500 text-[64px] font-bold">{{ questDataOnly.quest_name }}</p>
            <div
              class="flex gap-[16px] text-white text-opacity-90 text-xl font-normal font-montser pt-[24px]"
            >
              <p
                v-for="tag in questDataOnly.tags"
                :key="tag.id"
                class="px-[16px] py-[4px] border-solid border-[1px] border-white/60 rounded-[16px]"
              >
                {{ tag.name }}
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
            <p class="text-white">{{ questDataOnly.players }} - {{ questDataOnly.players * 2 }}</p>
          </div>
          <div class="border-r-[1px] bordre-white border-solid h-[100px] w-0"></div>
          <div
            class="flex flex-col gap-[24px] max-w-[100px] font-semibold font-montser text-[16px] text-[#5F5F5F] text-center justify-center"
          >
            <p>Время</p>
            <p class="text-white">{{ questDataOnly.time }} минут</p>
          </div>
          <div class="border-r-[1px] bordre-white border-solid h-[100px] w-0"></div>
          <div
            class="flex flex-col gap-[24px] max-w-[100px] font-semibold font-montser text-[16px] text-[#5F5F5F] text-center justify-center"
          >
            <p>Цена</p>
            <p class="text-white">от {{ questDataOnly.price }} р</p>
          </div>
          <div class="border-r-[1px] bordre-white border-solid h-[100px] w-0"></div>
          <div
            class="flex flex-col gap-[24px] max-w-[100px] font-semibold font-montser text-[16px] text-[#5F5F5F] text-center justify-center"
          >
            <p>Сложность</p>
            <p class="text-white">{{ questDataOnly.level }}</p>
          </div>
          <div class="border-r-[1px] bordre-white border-solid h-[100px] w-0"></div>
          <div
            class="flex flex-col gap-[24px] max-w-[100px] font-semibold font-montser text-[16px] text-[#5F5F5F] text-center justify-center"
          >
            <p>Возраст</p>
            <p class="text-white">{{ questDataOnly.age }}+</p>
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
          {{ questDataOnly.descr }}
        </p>
      </div>
    </section>
    <section class="bg-[#202020]">
      <div class="pt-[36px] px-[64px]">
        <div class="">
          <p class="text-[64px] font-black font-montser text-white leading-[72px]">
            Онлайн <br />
            бронирование
          </p>
        </div>
        <div class="pt-[42px] pb-[32px]">
          <div
            class="flex items-center justify-start gap-[16px] text-white text-xl font-semibold font-['Montserrat'] leading-9"
          >
            <div class="w-36 text-white text-2xl font-semibold font-['Montserrat'] leading-10">
              Стоимость:
            </div>
            <div class="w-24 rounded-lg border-2 border-white">
              <p class="text-center">6000</p>
            </div>
            <div class="w-24 rounded-lg border-2 border-red-500">
              <p class="text-center">8500</p>
            </div>
          </div>
        </div>
        <p class="text-white text-xl font-semibold font-['Montserrat'] leading-9">
          Цена указана за команду до 4-х игроков, доп игрок 1000р
        </p>
        <div class="my-[22px] border-b-white border-solid border-b-[1px]"></div>
        <div v-for="(dataItem, index) in getTimes()" :key="index" class="">
          <div class="flex">
            <h2 class="text-white text-[20px] font-semibold font-montser min-w-fit mr-[56px]">
              {{ dataItem.dayOfWeek }} {{ dataItem.date }} {{ dataItem.month }}
            </h2>
            <ul class="flex flex-wrap gap-[16px]">
              <li v-for="(time, index) in dataItem.times" :key="index">
                <iconPrice
                  :time="time.time"
                  :price="time.price"
                  :bron="time.bron"
                  :questName="questDataOnly.quest_name"
                  :date="dataItem.date"
                  :month="dataItem.month"
                />
              </li>
            </ul>
          </div>
          <div class="pb-[22px] mt-[22px] border-t-white border-solid border-t-[1px]"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mixins: [questMixin],

  data() {
    return {
      getRout: this.$route.params.id,
      questDataOnly: '',
      images: ['../src/assets/image1.png', '../src/assets/image2.png', '../src/assets/image3.png'],
      datas: [
        {
          data: 'пн, 1 апреля',
          timeStart: '10:30',
          timeEnd: '21:30'
        },
        {
          data: 'вт, 2 апреля',

          timeStart: '10:30',
          timeEnd: '21:30'
        },
        {
          data: 'ср, 3 апреля',

          timeStart: '10:30',
          timeEnd: '21:30'
        },
        {
          data: 'чт, 4 апреля',

          timeStart: '10:30',
          timeEnd: '21:30'
        },
        {
          data: 'пт, 5 апреля',

          timeStart: '10:30',
          timeEnd: '21:30'
        },
        {
          data: 'сб, 6 апреля',

          timeStart: '10:30',
          timeEnd: '21:30'
        },
        {
          data: 'вс, 7 апреля',

          timeStart: '10:30',
          timeEnd: '21:30'
        }
      ],
      bookings: []
    }
  },
  mounted() {
    let data = ''

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `http://127.0.0.1:8000/api/getQuest/${this.getRout}`,
      headers: {},
      data: data
    }

    axios
      .request(config)
      .then((responsees) => {
        this.questDataOnly = responsees.data[0]

        let order = axios.post('http://127.0.0.1:8000/api/getOrders')

        order
          .then((response) => {
            console.log(response.data)
            this.bookings = response.data.filter(
              (item) => item.quest_name == responsees.data[0].quest_name
            )
          })
          .catch((error) => {
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  computed: {},
  methods: {
    getTimes() {
      const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
      const months = [
        'янв',
        'фев',
        'мар',
        'апр',
        'май',
        'июн',
        'июл',
        'авг',
        'сен',
        'окт',
        'ноя',
        'дек'
      ]
      const currentDate = new Date() // текущая дата и время
      const futureWeek = []

      // Проходимся по 7 дням вперед
      for (let i = 0; i < 7; i++) {
        const futureDate = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000) // прибавляем день
        const dayOfWeek = daysOfWeek[futureDate.getDay()] // получаем день недели
        const month = months[futureDate.getMonth()] // получаем месяц
        const formattedDate = futureDate.toLocaleDateString('ru-RU', { day: 'numeric' }) // форматируем дату без года

        // Генерируем время только в диапазоне от 10:30 до 21:30 для каждого дня
        const times = []
        let currentTime = new Date(
          futureDate.getFullYear(),
          futureDate.getMonth(),
          futureDate.getDate(),
          10,
          30,
          0
        )
        if (i === 0) {
          // Если сегодня, учитываем текущее время
          const currentHour = currentDate.getHours()
          const currentMinute = currentDate.getMinutes()
          const currentMinutes = currentHour * 60 + currentMinute
          const firstTimeMinutes = 10 * 60 + 30 // 10:30 в минутах
          // if (currentMinutes < firstTimeMinutes) {
          //   currentTime = currentDate // Начинаем с текущего времени, если еще не 10:30
          // }
        }
        const endTime = new Date(
          futureDate.getFullYear(),
          futureDate.getMonth(),
          futureDate.getDate(),
          21,
          30,
          0
        )
        while (currentTime <= endTime) {
          times.push({
            time: currentTime.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
            price: 6000,
            bron: 1
          })
          currentTime = new Date(currentTime.getTime() + 60 * 60000) // добавляем 60 минут
        }
        times.forEach((timeSlot) => {
          this.bookings.forEach((bookingItem) => {
            const bookingDateTime = new Date(bookingItem.booking_date)
            if (
              bookingDateTime.getDate() === futureDate.getDate() &&
              bookingDateTime.getMonth() === futureDate.getMonth() &&
              bookingDateTime.getFullYear() === futureDate.getFullYear() &&
              bookingItem.booking_date.includes(timeSlot.time)
            ) {
              timeSlot.bron = 0
            }
          })
        })
        futureWeek.push({
          dayOfWeek: dayOfWeek,
          date: formattedDate,
          month: month,
          times: times
        })
      }

      return futureWeek
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    openWindow
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
