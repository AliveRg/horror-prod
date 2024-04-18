<script setup></script>
<template></template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      date: this.booking_date || '',
      quest: this.quest_name || '',
      people: this.count_people || null,
      price: this.price || 'null'
    }
  },
  props: {
    user_phone: String,
    booking_date: String,
    user_mail: String,
    quest_name: String,
    count_people: Number,
    prices: Number
  },
  methods: {
    submitForm() {
      // Здесь можно добавить логику отправки данных формы
      console.log('Отправлено!')
    }
  }
}
</script>

<style></style>
