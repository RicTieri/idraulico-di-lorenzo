<template>
  <footer class="bg-gradient-to-br from-brand-800 via-gray-900 to-black text-white mt-auto relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
      <div class="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
      <div class="absolute top-1/2 left-1/3 w-16 h-16 border border-white rounded-full"></div>
    </div>
    
    <div class="container-custom py-16 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div class="footer-section">
          <div class="flex items-center space-x-3 mb-6">
      <div class="w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
              <Wrench :size="24" />
            </div>
            <div>
              <h3 class="text-xl font-black text-white" style="font-family: 'Poppins', sans-serif;">
        Idraulico <span class="text-brand-400">Di Lorenzo</span>
              </h3>
              <p class="text-xs text-gray-400">Impianti & Climatizzazione Professionale</p>
            </div>
          </div>
          <p class="text-gray-300 leading-relaxed mb-6">
            Interventi proporzionati alle reali esigenze: installazione e manutenzione impianti idraulici e climatizzazione nel Basso Molise e Vastese.
          </p>
          <div class="flex space-x-4 justify-center">
            <div class="w-10 h-10 bg-brand-600/20 rounded-lg flex items-center justify-center text-brand-400 cursor-pointer hover:bg-brand-600 hover:text-white transition-all duration-300">
              <Mail :size="18" />
            </div>
            <div class="w-10 h-10 bg-brand-600/20 rounded-lg flex items-center justify-center text-brand-400 cursor-pointer hover:bg-brand-600 hover:text-white transition-all duration-300">
              <Phone :size="18" />
            </div>
            <div class="w-10 h-10 bg-brand-600/20 rounded-lg flex items-center justify-center text-brand-400 cursor-pointer hover:bg-brand-600 hover:text-white transition-all duration-300">
              <MapPin :size="18" />
            </div>
          </div>
        </div>
        
        <div class="footer-section">
          <h4 class="text-lg font-bold text-white mb-6 text-left" style="font-family: 'Poppins', sans-serif;">
            Contatti Diretti
          </h4>
          <div class="space-y-4">
            <div class="flex items-center space-x-3 group">
              <div class="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center text-red-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <PhoneCall :size="16" />
              </div>
              <div>
                <p class="text-white font-semibold">+39 346 756 3517</p>
                <p class="text-gray-400 text-sm">Telefono principale</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 group">
              <div class="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center text-green-400 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                <Mail :size="16" />
              </div>
              <div>
                <p class="text-white font-semibold">placeholder@email.it</p>
                <p class="text-gray-400 text-sm">Risposta in giornata</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 group">
              <div class="w-8 h-8 bg-orange-600/20 rounded-lg flex items-center justify-center text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                <MapPin :size="16" />
              </div>
              <div>
                <p class="text-white font-semibold">Montenero di Bisaccia</p>
                <p class="text-gray-400 text-sm">Basso Molise & Vastese</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-section">
          <h4 class="text-lg font-bold text-white mb-6 text-left" style="font-family: 'Poppins', sans-serif;">
            Servizi Principali
          </h4>
          <ul class="space-y-3">
            <li class="text-gray-300 flex items-center space-x-3 group cursor-pointer">
              <span class="w-2 h-2 bg-brand-400 rounded-full group-hover:bg-white transition-colors duration-300"></span>
              <span class="group-hover:text-white transition-colors duration-300">Riparazione perdite</span>
            </li>
            <li class="text-gray-300 flex items-center space-x-3 group cursor-pointer">
              <span class="w-2 h-2 bg-brand-400 rounded-full group-hover:bg-white transition-colors duration-300"></span>
              <span class="group-hover:text-white transition-colors duration-300">Installazione impianti</span>
            </li>
            <li class="text-gray-300 flex items-center space-x-3 group cursor-pointer">
              <span class="w-2 h-2 bg-brand-400 rounded-full group-hover:bg-white transition-colors duration-300"></span>
              <span class="group-hover:text-white transition-colors duration-300">Manutenzione caldaie</span>
            </li>
            <li class="text-gray-300 flex items-center space-x-3 group cursor-pointer">
              <span class="w-2 h-2 bg-brand-400 rounded-full group-hover:bg-white transition-colors duration-300"></span>
              <span class="group-hover:text-white transition-colors duration-300">Pronto intervento 24/7</span>
            </li>
            <li class="text-gray-300 flex items-center space-x-3 group cursor-pointer">
              <span class="w-2 h-2 bg-brand-400 rounded-full group-hover:bg-white transition-colors duration-300"></span>
              <span class="group-hover:text-white transition-colors duration-300">Spurgo e disostruzione</span>
            </li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4 class="text-lg font-bold text-white mb-6" style="font-family: 'Poppins', sans-serif;">
            Orari e Disponibilità
          </h4>
          <div class="space-y-4">
            <div class="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
        <h5 class="text-white font-semibold mb-2">Orari</h5>
              <div class="space-y-1 text-gray-300 text-sm">
                <div class="flex justify-between">
                  <span>Lun-Ven:</span>
          <span class="text-green-400 font-semibold">08:00 - 18:00</span>
                </div>
                <div class="flex justify-between">
          <span>Sab-Dom:</span>
          <span class="text-yellow-400 font-semibold">Chiuso</span>
                </div>
                <div class="flex justify-between">
          <span>Emergenze:</span>
          <span class="text-red-400 font-semibold">Su richiesta</span>
                </div>
              </div>
            </div>
            <div class="bg-red-600/20 backdrop-blur-sm rounded-lg flex flex-col items-center p-4 border border-red-400/30">
              <h5 class="text-red-400 font-bold mb-2 flex items-center space-x-2">
                <AlertTriangle :size="18" />
                <span>Emergenze 24/7</span>
              </h5>
              <p class="text-gray-300 text-sm">Disponibili sempre per situazioni urgenti</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Section -->
      <div class="border-t border-gray-600/50 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <p class="text-gray-400 text-sm">
              © {{ currentYear }} <strong class="text-white">Idraulico Di Lorenzo</strong>. Tutti i diritti riservati.
            </p>
            <div class="flex space-x-6 text-sm">
              <a href="#" class="text-gray-400 hover:text-brand-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" class="text-gray-400 hover:text-brand-400 transition-colors duration-300">Cookie Policy</a>
              <a href="#" class="text-gray-400 hover:text-brand-400 transition-colors duration-300">Termini di Servizio</a>
            </div>
          </div>
          
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2 text-sm">
              <span class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span class="text-gray-300">Online e disponibili</span>
            </div>
            <a href="tel:+393467563517" class="btn btn-danger text-sm px-4 py-2">
              <PhoneCall :size="16" class="mr-2" />
              Chiama Ora
            </a>
          </div>
        </div>
        
        <!-- Company Info -->
        <div class="mt-6 pt-6 border-t border-gray-600/30 text-center">
          <p class="text-gray-400 text-xs leading-relaxed">
            <strong class="text-white">Di Lorenzo Remo</strong> - P.IVA: 00650030703 | Sede: Montenero di Bisaccia (CB) | Tecnici certificati Bosch
          </p>
          <p class="text-gray-500 text-xs mt-2">
            Installazione e manutenzione impianti idraulici & climatizzazione • Basso Molise e Vastese • Soluzioni proporzionate
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { 
  Wrench, 
  Mail, 
  Phone, 
  MapPin, 
  PhoneCall,
  AlertTriangle
} from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())
</script>
