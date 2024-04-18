<script setup></script>
<template>
  <div class="flex flex-col items-center justify-start gap-[6px] text-white font-montser">
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
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    time: String,
    price: Number,
    bron: Number
  }
}
</script>

<style></style>
