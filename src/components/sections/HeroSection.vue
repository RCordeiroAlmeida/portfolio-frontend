<template>
  <section class="h-screen flex flex-col justify-center items-center text-gray-600 dark:text-white">
    <h1 class="text-5xl font-bold mb-4 animate__animated animate__fadeInDown">Olá, me chamo Rafael</h1>
    <p class="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">Seja bem-vindo ao meu portfólio</p>
    <ButtonGroup class="mb-5 animate__animated animate__fadeIn animate__delay-1s"/>
    <button
      @click="scrollToAbout"
      class="bg-indigo-500 hover:bg-indigo-700 rounded-full p-2 
             animate__animated animate__fadeInDown animate__delay-2s"
    >
    <ArrowDown class="text-white" />
  </button>
  </section>
</template>

<script setup>
import { ArrowDown } from 'lucide-vue-next';
import ButtonGroup from '../ui/ButtonGroup.vue';

const scrollToAbout = () => {
  const about = document.getElementById('about-section');
  if (about) {
    about.scrollIntoView({ behavior: 'smooth' });
  }
};

</script>