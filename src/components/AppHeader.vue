<template>
  <header class="bg-white/90 backdrop-blur-md text-gray-800 shadow-xl border-b border-gray-100 sticky top-0 z-50">
    <div class="container-custom">
      <div class="flex flex-wrap items-center justify-between py-4 gap-4">
        <div class="logo">
          <router-link to="/" class="flex items-center space-x-3 group">
            <div class="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Wrench :size="24" />
            </div>
            <div>
              <h1 class="text-xl md:text-2xl font-black text-gray-800" style="font-family: 'Poppins', sans-serif;">
                Idraulico <span class="text-brand-600">Di Lorenzo</span>
              </h1>
              <p class="text-xs text-gray-500 font-medium">Dal 2003 al vostro servizio</p>
            </div>
          </router-link>
        </div>
        
        <!-- Emergency Contact -->
        <div class="hidden lg:flex items-center space-x-4">
          <div class="text-center">
            <p class="text-xs text-gray-500 font-medium">Emergenze 24/7</p>
            <a href="tel:+393467563517" class="text-red-600 font-bold text-lg hover:text-red-700 transition-colors">
              +39 346 756 3517
            </a>
          </div>
        </div>
        
        <!-- Mobile menu button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden flex items-center px-3 py-2 border-2 rounded-xl text-gray-600 border-gray-300 hover:text-brand-600 hover:border-brand-400 transition-all duration-300"
        >
          <Menu :size="20" />
        </button>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex flex-1 justify-center">
          <ul class="flex space-x-2">
            <li>
              <router-link 
                to="/" 
                class="text-gray-700 hover:text-brand-600 px-6 py-3 rounded-xl transition-all duration-300 font-semibold relative group"
                :class="{ 'bg-brand-600 text-white shadow-lg': $route.path === '/' }"
              >
                <span class="relative z-10">Home</span>
                <div class="absolute inset-0 bg-brand-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" v-if="$route.path !== '/'"></div>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/servizi" 
                class="text-gray-700 hover:text-brand-600 px-6 py-3 rounded-xl transition-all duration-300 font-semibold relative group"
                :class="{ 'bg-brand-600 text-white shadow-lg': $route.path === '/servizi' }"
              >
                <span class="relative z-10">Servizi</span>
                <div class="absolute inset-0 bg-brand-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" v-if="$route.path !== '/servizi'"></div>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/chi-siamo" 
                class="text-gray-700 hover:text-brand-600 px-6 py-3 rounded-xl transition-all duration-300 font-semibold relative group"
                :class="{ 'bg-brand-600 text-white shadow-lg': $route.path === '/chi-siamo' }"
              >
                <span class="relative z-10">Chi Siamo</span>
                <div class="absolute inset-0 bg-brand-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" v-if="$route.path !== '/chi-siamo'"></div>
              </router-link>
            </li>
          </ul>
        </nav>
        
        <!-- CTA Button -->
        <div class="hidden md:flex items-center">
          <a href="tel:+393467563517" class="btn btn-danger text-sm px-4 py-2">
            <PhoneCall :size="16" class="mr-2" />
            Chiama Ora
          </a>
        </div>
      </div>
      
      <!-- Mobile Navigation -->
      <nav 
        v-show="isMobileMenuOpen" 
  class="md:hidden pb-6 border-t border-gray-200 mt-4 pt-4"
      >
        <ul class="flex flex-col space-y-3">
          <li>
            <router-link 
              to="/" 
              @click="isMobileMenuOpen = false"
              class="block text-gray-700 px-4 py-3 rounded-xl transition-all duration-300 font-semibold"
              :class="{ 'bg-brand-600 text-white shadow-lg': $route.path === '/' }"
            >
              <div class="flex items-center space-x-3">
                <Home :size="18" />
                <span>Home</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link 
              to="/servizi" 
              @click="isMobileMenuOpen = false"
              class="block text-gray-700 hover:text-white px-4 py-3 rounded-xl transition-all duration-300 font-semibold"
              :class="{ 'bg-brand-600 text-white shadow-lg': $route.path === '/servizi' }"
            >
              <div class="flex items-center space-x-3">
                <Settings :size="18" />
                <span>Servizi</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link 
              to="/chi-siamo" 
              @click="isMobileMenuOpen = false"
              class="block text-gray-700 hover:text-white px-4 py-3 rounded-xl transition-all duration-300 font-semibold"
              :class="{ 'bg-brand-600 text-white shadow-lg': $route.path === '/chi-siamo' }"
            >
              <div class="flex items-center space-x-3">
                <Users :size="18" class="text-white" />
                <span>Chi Siamo</span>
              </div>
            </router-link>
          </li>
          <li class="pt-4 border-t border-gray-200">
            <a href="tel:+393467563517" class="btn btn-danger w-full justify-center text-lg">
              <Phone :size="18" class="mr-2" />
              Emergenza 24/7
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  Wrench, 
  Home, 
  Settings, 
  Users, 
  PhoneCall,
  Menu,
  Phone
} from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)
</script>
