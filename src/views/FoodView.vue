<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const foodItems = ref([]);
const loading = ref(true);

const fetchFood = async () => {
  try {
    // ⚡ DOUBLE CHECK THIS URL ⚡
    const response = await axios.get('http://localhost:8000/products');
    foodItems.value = response.data;
  } catch (error) {
    console.error("API Call Failed:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchFood();
});
</script>

<template>
  <div class="p-4">
    <div v-if="loading" class="text-center py-10 text-chhab-text-muted">
      Loading Menu...
    </div>

    <div v-else class="grid grid-cols-2 gap-4">
      <div v-for="item in foodItems" :key="item.id"
        class="bg-white rounded-[24px] p-3 shadow-sm border border-gray-100 flex flex-col gap-2">

        <div class="w-full aspect-square bg-gray-50 rounded-[20px] overflow-hidden">
          <img :src="item.image_url" :alt="item.name" class="w-full h-full object-cover">
        </div>

        <div class="px-1 mt-1">
          <h3 class="font-bold text-sm text-chhab-text-bold leading-tight truncate">{{ item.name }}</h3>
          <p class="text-[10px] text-chhab-text-muted">Code: {{ item.id }}</p>
        </div>

        <div class="flex justify-between items-center mt-1">
          <span class="text-chhab-primary font-bold text-sm">${{ item.price }}</span>
          <button class="bg-chhab-primary text-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
