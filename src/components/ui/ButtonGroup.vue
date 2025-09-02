<template>
  <div class="flex space-x-4 justify-center">
    <!-- LinkedIn -->
    <a 
      href="https://www.linkedin.com/in/rafael-cordeiro-de-almeida" 
      target="_blank" 
      class="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md shadow-lg transition transform hover:scale-110"
    >
    <Linkedin/>
    </a>

    <!-- GitHub -->
    <a 
      href="https://github.com/RCordeiroAlmeida" 
      target="_blank" 
      class="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-md shadow-lg transition transform hover:scale-110"
    >
      <Github/>
    </a>

    <!-- WhatsApp -->
    <a 
      href="https://wa.me/5511952793798" 
      target="_blank" 
      class="bg-green-500 hover:bg-green-600 text-white p-3 rounded-md shadow-lg transition transform hover:scale-110"
    >
      <Phone/>
    </a>
  </div>
</template>

<script setup>
import { Github, Linkedin, Phone } from 'lucide-vue-next';


</script>
