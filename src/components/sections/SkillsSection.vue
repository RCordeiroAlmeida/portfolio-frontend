<template>
  <section id="skills" class="py-16">
    <div class="max-w-6xl mx-auto px-8">
      <h2 class="text-3xl font-bold mb-12 text-gray-800 dark:text-white">Hard Skills</h2>
      <!-- Linguagens -->
      <div class="mb-10">
        <span
          class="gap-2 inline-block bg-indigo-200 dark:bg-indigo-600 text-indigo-800 dark:text-white px-3 py-1 rounded-full font-semibold mb-4"
          >Linguagens</span
        >
        <div class="flex flex-wrap gap-6 mt-4">
          <img
            :src="php"
            alt="PHP"
            class="w-16 h-16 transition-transform transform hover:scale-125 cursor-pointer"
          />
          <img
            :src="js"
            alt="JavaScript"
            class="w-16 h-16 transition-transform transform hover:scale-125 cursor-pointer"
          />
          <img
            :src="python"
            alt="Python"
            class="w-16 h-16 transition-transform transform hover:scale-125 cursor-pointer"
          />
          <img
            :src="java"
            alt="Java"
            class="w-16 h-16 transition-transform transform hover:scale-125 cursor-pointer"
          />
        </div>
      </div>
      <!-- Frameworks -->
      <div class="mb-10">
        <span
          class="inline-block bg-green-200 dark:bg-green-600 text-green-800 dark:text-white px-3 py-1 rounded-full font-semibold mb-4"
          >Frameworks</span
        >
        <div class="flex flex-wrap gap-6 mt-4">
          <img
            :src="vue"
            alt="Vue.js"
            class="w-16 h-16 transition-transform transform hover:scale-125 cursor-pointer"
          />
          <img
            :src="laravel"
            alt="Laravel"
            class="w-16 h-16 transition-transform transform hover:scale-125 cursor-pointer"
          />
          <img
            :src="tailwind"
            alt="Tailwind"
            class="w-16 h-16 transition-transform transform hover:scale-125 cursor-pointer"
          />
          <img
            :src="bootstrap"
            alt="Bootstrap"
            class="w-16 h-16 transition-transform transform hover:scale-125 cursor-pointer"
          />
        </div>
      </div>
      <!-- Bancos de Dados -->
      <div class="mb-10">
        <span
          class="inline-block bg-yellow-200 dark:bg-yellow-600 text-yellow-800 dark:text-white px-3 py-1 rounded-full font-semibold mb-4"
          >Bancos de Dados</span
        >
        <div class="flex flex-wrap gap-6 mt-4">
          <img
            :src="mysql"
            alt="MySQL"
            class="w-16 h-16 transition-transform transform hover:scale-125 cursor-pointer"
          />
          <img
            :src="mongo"
            alt="MongoDB"
            class="w-16 h-16 transition-transform transform hover:scale-125 cursor-pointer"
          />
          <img
            :src="postgres"
            alt="PostgreSQL"
            class="w-16 h-16 transition-transform transform hover:scale-125 cursor-pointer"
          />
        </div>
      </div>
      <!-- Ferramentas -->
      <div>
        <span
          class="inline-block bg-pink-200 dark:bg-pink-600 text-pink-800 dark:text-white px-3 py-1 rounded-full font-semibold mb-4"
          >Ferramentas</span
        >
        <div class="flex flex-wrap gap-6 mt-4">
          <img
            :src="docker"
            alt="Docker"
            class="w-16 h-16 transition-transform transform hover:scale-125 cursor-pointer"
          />
          <img
            :src="wordpress"
            alt="WordPress"
            class="w-16 h-16 transition-transform transform hover:scale-125 cursor-pointer"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import php from '@/assets/icons/php.png'
import js from '@/assets/icons/js.png'
import python from '@/assets/icons/python.png'
import java from '@/assets/icons/java.png'
import vue from '@/assets/icons/vue.png'
import laravel from '@/assets/icons/laravel.png'
import tailwind from '@/assets/icons/tailwind.png'
import bootstrap from '@/assets/icons/bootstrap.png'
import mysql from '@/assets/icons/mysql.png'
import mongo from '@/assets/icons/mongoDb.png'
import postgres from '@/assets/icons/postgreSql.png'
import docker from '@/assets/icons/docker.png'
import wordpress from '@/assets/icons/wordpress.png'
</script>
