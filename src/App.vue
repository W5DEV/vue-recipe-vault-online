<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <RouterView v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
  <Footer />
</template>
<!-- Style is necessary for page transition animation. -->
<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-to {
  position: absolute;
  right: 0;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>
