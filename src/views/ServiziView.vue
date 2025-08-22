<template>
  <div class="services-page">
    <section class="py-24 bg-gradient-to-br from-brand-800 via-brand-900 to-brand-800 text-white">
      <div class="container-custom">
  <h1 class="text-4xl md:text-5xl font-extrabold mb-6">Servizi professionali</h1>
        <p class="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-10 mx-auto">Installazione e manutenzione di impianti idraulici e climatizzazione con approccio tecnico aggiornato e proporzionato alle reali necessità.</p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <a href="tel:+393467563517" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold transition-colors"><PhoneCall :size="18" /> Chiama Ora</a>
          <a href="mailto:placeholder@email.it" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 font-semibold backdrop-blur border border-white/15 transition-colors"><Mail :size="18" /> Scrivici</a>
        </div>
      </div>
    </section>

  <section class="py-20 bg-white">
      <div class="container-custom">
  <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-12">Principali interventi</h2>
        <div class="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <div v-for="s in services" :key="s.title" class="rounded-2xl border border-gray-200 p-7 bg-gradient-to-br from-white to-gray-50 flex flex-col">
            <div class="flex items-center gap-4 mb-5">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-600/10 text-brand-600"><component :is="s.icon" :size="24" /></div>
              <h3 class="font-semibold text-xl text-gray-800">{{ s.title }}</h3>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed mb-6 flex-1">{{ s.desc }}</p>
            <a href="tel:+393467563517" class="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-500">Contatta <PhoneCall :size="14" /></a>
          </div>
          <div v-for="p in placeholders" :key="p" class="rounded-2xl border border-dashed border-gray-300 p-7 flex items-center justify-center text-gray-400 text-sm">
            Prossimamente
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gradient-to-r from-brand-800 via-brand-700 to-brand-800 text-white">
      <div class="container-custom text-center max-w-3xl mx-auto">
  <h2 class="text-3xl md:text-4xl font-bold mb-6">Hai un progetto o un impianto da realizzare?</h2>
        <p class="text-white/80 mb-10 leading-relaxed">Parla direttamente con un tecnico: riceverai una valutazione proporzionata e un preventivo chiaro.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+393467563517" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold transition-colors"><PhoneCall :size="20" /> Chiama</a>
          <a href="mailto:placeholder@email.it" class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 font-semibold backdrop-blur border border-white/15 transition-colors"><Mail :size="20" /> Scrivici</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Wrench, Fan, Thermometer, Flame, PhoneCall, Mail } from 'lucide-vue-next'

interface Service { icon: any; title: string; desc: string }

const services: Service[] = [
  { icon: Wrench, title: 'Installazione impianti idraulici', desc: 'Progettazione e posa completa di impianti civili con materiali conformi.' },
  { icon: Fan, title: 'Installazione climatizzazione', desc: 'Sistemi split e multisplit installati con linee ottimizzate.' },
  { icon: Thermometer, title: 'Manutenzione climatizzazione', desc: 'Sanificazione, controllo pressioni, verifica efficienza e consumi.' },
  { icon: Flame, title: 'Installazione caldaie', desc: 'Sostituzione caldaia, collegamenti e taratura iniziale documentata.' }
]

// Placeholder slot (espansioni future)
const placeholders = Array.from({ length: 2 }).map((_, i) => i)
</script>

<style scoped>
/* minimal custom styles if needed */
</style>
