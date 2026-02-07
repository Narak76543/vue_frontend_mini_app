<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);

const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8000/products');
    products.value = response.data;
  } catch (error) {
    console.error("Mission failed: Could not fetch products", error);
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <h3>Home</h3>
  <div class="p-4">
    <div class="grid grid-cols-2 gap-4">
      <div v-for="product in products" :key="product.id"
        class="bg-white rounded-[24px] p-3 shadow-sm border border-gray-100 flex flex-col gap-2">

        <div class="w-full aspect-square bg-gray-100 rounded-[20px] overflow-hidden">
          <img :src="product.image_url" :alt="product.name" class="w-full h-full object-cover">
        </div>

        <div class="mt-1">
          <h3 class="font-bold text-sm text-chhab-text-bold leading-tight">{{ product.name }}</h3>
          <p class="text-[10px] text-chhab-text-muted mt-0.5">Code: {{ product.id }}</p>
        </div>

        <div class="flex justify-between items-center mt-2">
          <span class="text-chhab-primary font-bold text-sm">${{ product.price }}</span>

          <button class="bg-chhab-primary text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-sm">
            Add +
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
