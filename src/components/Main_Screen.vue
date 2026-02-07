<template>
  <div class=" min-h-screen bg-chhab-bg ">
<header
    class="sticky top-0 z-50 backdrop-blur-xl bg-chhab-bg/80 border-b border-white/10"
  >
    <div
      class="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-4"
    >
      <!-- Left: Icon -->
      <div
        class="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl
               bg-chhab-primary/15 text-chhab-primary
               flex items-center justify-center
               shadow-lg shadow-chhab-primary/20"
      >
        <span class="text-xl sm:text-2xl">👨‍🍳</span>
      </div>

      <!-- Center: Greeting -->
      <div class="flex-1 text-center sm:text-left">
        <h1
          class="text-base sm:text-lg font-semibold text-chhab-text-bold leading-tight"
        >
          Hello,
          <span class="text-chhab-primary">Name</span>
        </h1>
        <p
          class="text-xs sm:text-sm text-chhab-text-muted mt-0.5 hidden sm:block"
        >
          Welcome back 👋 Ready to order?
        </p>
      </div>

      <!-- Right: Table Badge -->
      <div
        class="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl
               bg-chhab-primary/10 text-chhab-primary
               text-xs sm:text-sm font-medium
               border border-chhab-primary/20"
      >
        Table <span class="font-semibold">TB1</span>
      </div>
    </div>
  </header>
<div class="px-4 sm:px-6 py-3">
  <div class="relative max-w-3xl mx-auto">
    <!-- Search Icon -->
    <span
      class="absolute left-4 top-1/2 -translate-y-1/2
             text-chhab-text-muted group-focus-within:text-chhab-primary
             transition-colors"
    >
      🔍
    </span>

    <!-- Input -->
    <input
      type="text"
      placeholder="Search your menu…"
      class="w-full h-12 sm:h-13
             rounded-2xl
             bg-white/80 backdrop-blur-md
             pl-11 pr-4
             text-sm sm:text-base font-medium
             text-chhab-text-bold
             border border-white/30
             shadow-md shadow-black/5
             outline-none
             transition-all duration-300
             focus:border-chhab-primary/40
             focus:ring-4 focus:ring-chhab-primary/15
             focus:bg-white"
    >
  </div>
</div>
<div class="w-full h-[1px] bg-[#c8a65a]"></div>
<!--  -->
    <div class="w-full h-[100vh] bg-white flex flex-col p-[30px] items-center">

<nav class="px-6 mb-6">
        <div class="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          <router-link to="/food" class="category-btn">🍔 Food</router-link>
          <router-link to="/drink" class="category-btn">🥤 Drinks</router-link>
          <router-link to="/other" class="category-btn">⭐ Other</router-link>
        </div>
      </nav>

      <div class="w-full max-w-[500px] mt-6 flex-grow overflow-y-auto">
        <RouterView />
      </div>
    </div>
  </div>


</template>

<style scoped>
.category-btn {
  @apply px-6 py-2.5 bg-gray-200/60 text-chhab-text-muted rounded-full text-sm font-bold whitespace-nowrap transition-all;
}
.router-link-active {
  @apply bg-chhab-primary text-white shadow-md shadow-chhab-primary/30;
}
</style>
