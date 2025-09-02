<template>
  <div class="
    min-h-screen flex 
    bg-gradient-to-r
    from-white
    via-indigo-100
    to-indigo-200
    dark:bg-gradient-to-r
    dark:from-zinc-700 
    dark:via-zinc-800
    dark:to-zinc-900">
    <AppSidebar class="fixed top-0 left-0 h-screen"/> <!-- sidebar fixa -->
    <main class="flex-1 grid grid-cols-6 gap-4">
      <HeroSection class="col-start-2 col-end-6"/>
      <AboutSection class="col-start-2 col-end-6" id="about-section"/>
      <SkillsSection class="col-start-2 col-end-6"/>
      <!-- outras sessões -->
    </main>
  </div>
</template>

<script setup>
import AppSidebar from './components/AppSidebar.vue'
import HeroSection from './components/sections/HeroSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
</script>
