<template>
  <div class="flex justify-start p-8">
    <!-- Sidebar flutuante -->
    <aside 
      :class="[
        'bg-gray-50 text-gray-900 dark:bg-zinc-900 dark:text-white h-[90vh] transition-all duration-300 rounded-lg shadow-lg flex flex-col',
        isOpen ? 'w-64' : 'w-16'
      ]">
      
      <!-- Top bar: toggle sidebar + theme -->
      <div class="flex justify-between items-center p-2 m-2">
        <!-- Toggle Sidebar -->
        <button 
          @click="toggleSidebar"
          class="p-2 bg-gray-300 dark:bg-zinc-800 rounded hover:bg-gray-400 dark:hover:bg-zinc-700 duration-500">
          <component :is="isOpen ? ArrowLeft : ArrowRight" class="w-5 h-5"/>
        </button>        
      </div>

      <!-- Menu items -->
      <ul class="mt-4 flex-1 justify-between items-center ml-4 mr-3">
        <li class="gap-2 p-2 hover:bg-gray-400 dark:hover:bg-zinc-800 rounded flex items-center cursor-pointer duration-500">
          <Home class="w-5 h-5"/>
          <span v-if="isOpen" >Home</span>
        </li>
        <li class="gap-2 p-2 hover:bg-gray-400 dark:hover:bg-zinc-800 rounded flex items-center cursor-pointer duration-500">
          <User class="w-5 h-5"/>
          <span v-if="isOpen" >Perfil</span>
        </li>
        <li class="gap-2 p-2 hover:bg-gray-400 dark:hover:bg-zinc-800 rounded flex items-center cursor-pointer duration-500">
          <Settings class="w-5 h-5"/>
          <span v-if="isOpen" >Configurações</span>
        </li>
      </ul>

      <div class="flex justify-between items-center p-2 m-2">
        <button 
          @click="toggleTheme"
          class="p-2 bg-gray-300 dark:bg-zinc-800 rounded hover:bg-gray-400 dark:hover:bg-zinc-700">
          <component :is="isDark ? Sun : Moon" class="w-5 h-5"/>
        </button>
      </div>

      <div class="flex justify-between items-center p-2 m-2">
        <button 
          @click="toggleLocale"
          class="p-2 bg-gray-300 dark:bg-zinc-800 rounded hover:bg-gray-400 dark:hover:bg-zinc-700">
          <Languages class="w-5 h-5"/>
        </button>
      </div>

    </aside>

    <!-- Main content -->
    <main class="flex-1 p-4">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Home, User, Settings, ArrowLeft, ArrowRight, Sun, Moon, Languages } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'
import { useLocale } from '@/composables/useLocale'

const isOpen = ref(false)
const { isDark, toggleTheme } = useTheme()
const { locale, toggleLocale } = useLocale()

function toggleSidebar() {
  isOpen.value = !isOpen.value
}


</script>