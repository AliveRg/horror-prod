<script setup>
import axios from 'axios'
</script>
<template>
  <div class="">
    <div
      class="flex flex-col items-center justify-start gap-[6px] text-white font-montser transition-all"
      :class="!bron ? '' : 'hover:scale-[1.1]'"
      @click="openModal"
    >
      <div
        :class="{
          'text-base font-semibold px-[18px] py-[5px] border-[1px] border-solid leading-[20px] rounded-[8px]': true,
          'border-white': bron && price <= 6000,
          'border-red-500': bron && price > 6000,
          'text-gray-500 border-gray-500': !bron
        }"
      >
        {{ time }}
      </div>
      <p v-if="bron" class="text-base font-[600]" v-text="price + ' p'"></p>
    </div>
    <div
      v-if="modalOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30"
      @click.prevent.self.stop="closeModal"
    >
      <button
        @click.prevent.self.stop="closeModal"
        class="bg-red-500 fixed z-40 top-0 right-0 mr-5 hover:bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 mt-4"
      >
        Закрыть форму
      </button>
      <div class="bg-gray-800 rounded-lg p-8 max-w-md w-full overflow-y-scroll h-[600px]">
        <h2 class="text-2xl font-semibold mb-4 text-white">Форма бронирования</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="quest" class="block text-white mb-2">Название квеста</label>
            <input
              readonly
              type="text"
              id="quest"
              v-model="returnName"
              class="w-full rounded-md px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div class="mb-4">
            <label for="price" class="block text-white mb-2">Цена</label>
            <input
              readonly
              type="number"
              id="price"
              v-model="prices"
              class="w-full rounded-md px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div class="mb-4">
            <label for="people" class="block text-white mb-2">Количество людей</label>
            <input
              type="number"
              id="people"
              v-model="people"
              class="w-full rounded-md px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div class="mb-4">
            <label for="name" class="block text-white mb-2">Имя</label>
            <input
              type="text"
              id="name"
              v-model="name"
              class="w-full rounded-md px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="w-full rounded-md px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div class="mb-4">
            <label for="phone" class="block text-white mb-2">Телефон</label>
            <input
              type="tel"
              id="phone"
              v-model="phone"
              class="w-full rounded-md px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div class="mb-4">
            <label for="date" class="block text-white mb-2">Дата бронирования</label>
            <input
              readonly
              type="text"
              id="date"
              :value="data"
              class="w-full rounded-md px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div class="flex justify-end">
            <div
              @click="submitForm()"
              class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              Отправить
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    time: String,
    price: Number,
    questName: String,
    bron: Number,
    date: String,
    month: String
  },
  data() {
    return {
      modalOpen: false,
      name: '',
      email: '',
      phone: '',
      data: '',
      quest: this.questName || 'null',
      people: '',
      prices: this.price || 'null'
    }
  },
  mounted() {
    // Создаем объект Date для текущей даты и времени
    const currentDate = new Date()

    // Получаем текущий год, месяц и день
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() + 1 // добавляем 1, так как месяцы в объекте Date нумеруются с 0
    const currentDay = currentDate.getDate()

    // Собираем строку для текущей даты в формате YYYY-MM-DD
    const formattedDate = `${currentYear}-${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`

    // Собираем строку для времени из props
    const formattedTime = this.time

    // Комбинируем дату и время
    const dateTime = `${formattedDate} ${formattedTime}:00`

    // Записываем результат в this.data
    this.data = dateTime
    console.log(this.data)
  },
  methods: {
    openModal() {
      this.modalOpen = true
    },
    closeModal() {
      this.modalOpen = false
    },
    submitForm() {
      if (
        !this.people ||
        !this.questName ||
        !this.data ||
        !this.price ||
        !this.email ||
        !this.phone
      ) {
        // Если хотя бы одна переменная пуста, выводим сообщение об ошибке
        console.log('Заполните форму')
      } else {
        let data = JSON.stringify({
          count_people: this.people,
          quest_name: this.questName,
          booking_date: this.data,
          order_status: 0,
          price: this.price,
          user_mail: this.email,
          user_phone: this.phone
        })

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'http://127.0.0.1:8000/api/postOrder',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        }

        axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data))
            console.log('Отправлено!')
            this.modalOpen = false
          })
          .catch((error) => {
            console.log(error)
          })

        // Здесь можно добавить логику отправки данных формы
      }
    }
    // Остальные методы компонента...
  },
  computed: {
    booking_date() {
      return '12023'
    },
    returnName() {
      return this.questName
    }
  }
}
</script>

<style></style>
