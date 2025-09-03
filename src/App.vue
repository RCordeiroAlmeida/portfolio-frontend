<template>
  <div
    class="
      min-h-screen
      grid grid-cols-[auto_1fr]
      bg-gradient-to-r from-white via-indigo-100 to-indigo-200
      dark:bg-gradient-to-r dark:from-zinc-700 dark:via-zinc-800 dark:to-zinc-900
    "
  >
    <!-- Sidebar fixa -->
    <AppSidebar class="fixed top-0 left-0 h-screen w-16 lg:w-64" />

    <!-- Conteúdo principal -->
    <main class="ml-16 lg:ml-64 p-4 flex flex-col gap-16">
      <!-- Hero Section -->
      <HeroSection />

      <!-- About Section -->
      <AboutSection id="about-section" />

      <!-- Skills Section -->
      <SkillsSection />

      <!-- outras seções -->
    </main>
  </div>
</template>

<script setup>
import AppSidebar from './components/AppSidebar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
</script>
