<template>
  <div class="home-page">
    <!-- HERO NUOVO -->
    <section class="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-900 to-brand-800 text-white">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-brand-600/30 blur-3xl rounded-full"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-brand-500/20 blur-3xl rounded-full"></div>
      </div>
      <!-- Badge Bosch spostato in alto a destra -->
      <div class="absolute top-4 right-4 md:top-6 md:right-6 z-20 inline-flex items-center gap-2 px-4 py-1.5  text-xs uppercase tracking-wide font-medium backdrop-blur">
        <p class="hidden sm:block">Assistenza certificata</p>
        <div class="rounded-full bg-white/10 border border-white/15 backdrop-blur">
          <img src="/images/bosch_logo.png" alt="Logo Bosch" class="h-28 md:h-28" />
        </div>
      </div>
      <div class="container-custom relative z-10 py-28 md:py-40 flex flex-col gap-14">
        <div class="max-w-4xl">
          <!-- Badge rimosso da qui (spostato in posizione assoluta) -->
          <h1 class="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Impianti idraulici & climatizzazione professionale
            <span class="block text-brand-200">nel Basso Molise e Vastese</span>
          </h1>
          <p class="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
            Installazione e manutenzione proporzionate alle reali esigenze. Consulenza, affidabilità e aggiornamento continuo al tuo servizio.
          </p>
          <div class="flex flex-wrap gap-4 items-center mb-10">
            <a href="tel:+393467563517" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold shadow transition-colors">
              <PhoneCall :size="18" /> Chiama Ora
            </a>
            <a href="mailto:placeholder@email.it" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur border border-white/15 transition-colors">
              <Mail :size="18" /> Scrivici
            </a>
            <router-link to="/servizi" class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:border-white/40 text-white font-semibold transition-colors">
              <Search :size="18" /> Servizi
            </router-link>
            <!-- Dark mode toggle removed -->
          </div>
          <ul class="flex flex-wrap gap-6 text-sm text-white/70">
            <li class="flex items-center gap-2"><ShieldCheck :size="16" class="text-brand-200" /> Soluzioni proporzionate</li>
            <li class="flex items-center gap-2"><Timer :size="16" class="text-brand-200" /> Preventivi rapidi</li>
            <li class="flex items-center gap-2"><CheckCircle :size="16" class="text-brand-200" /> Affidabilità tecnica</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SERVIZI PRIORITARI -->
  <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div class="mx-auto max-w-full">
            <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-3">Servizi principali</h2>
            <p class="text-gray-600 max-w-xl">Interventi mirati con materiali conformi e tecnici aggiornati.</p>
          </div>
        </div>
        <div class="flex justify-end items-center mb-6">
          <router-link to="/servizi" class="text-sm font-semibold text-brand-600 hover:text-brand-500 flex items-center gap-1">
            Tutti i servizi
            <ArrowBigRight :size="18" class="text-brand-600 group-hover:text-brand-500 transition-colors" />
          </router-link>
        </div>
        <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div v-for="s in priorityServices" :key="s.title" class="group flex flex-col items-center justify-between rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-brand-600/10 text-brand-600 group-hover:scale-110 transition-transform">
              <component :is="s.icon" :size="24" />
            </div>
            <h3 class="font-semibold text-lg mb-2 text-gray-800">{{ s.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ s.desc }}</p>
            <a href="tel:+393467563517" class="inline-flex gap-1 text-xs font-semibold text-brand-600 hover:text-brand-500">Contatta <PhoneCall :size="14" /></a>
          </div>
        </div>
      </div>
    </section>

    <!-- METODO -->
  <section class="py-20 bg-gradient-to-br from-brand-50 to-brand-100/40">
      <div class="container-custom">
  <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-14 text-center">Il nostro metodo</h2>
        <div class="grid gap-10 md:grid-cols-4">
          <div v-for="(step, i) in steps" :key="step.title" class="flex flex-col items-center">
            <div class="mb-4 w-10 h-10 rounded-full bg-brand-600/10 text-brand-600 flex items-center justify-center font-bold text-sm">
              {{ i+1 }}
            </div>
            <h3 class="font-semibold mb-2 text-gray-800">{{ step.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AREE SERVITE -->
  <section class="py-20 bg-white">
      <div class="container-custom">
        <div class="max-w-3xl mb-12 mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Zone di intervento</h2>
          <p class="text-gray-600">Copertura quotidiana nel Basso Molise e area del Vastese con pianificazione rapida e disponibilità programmata.</p>
        </div>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="a in areas" :key="a.city" class="rounded-xl border border-gray-200 p-5 bg-gradient-to-br from-white to-gray-50">
            <h3 class="font-semibold mb-1 text-gray-800">{{ a.city }}</h3>
            <p class="text-xs text-gray-500 mb-3">{{ a.tag }}</p>
            <p class="text-sm text-gray-600 leading-relaxed">{{ a.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FIDUCIA -->
    <section class="py-20 bg-gradient-to-r from-brand-800 via-brand-700 to-brand-800 text-white">
      <div class="container-custom grid md:grid-cols-3 gap-12 items-start">
        <div class="md:col-span-1">
          <h2 class="text-3xl font-bold mb-4">Perché fidarsi</h2>
          <p class="text-brand-100/90 text-sm leading-relaxed">Approccio tecnico aggiornato e consulenza trasparente: proponiamo solo ciò che serve davvero.</p>
        </div>
        <div class="md:col-span-2 grid sm:grid-cols-2 gap-8">
          <div v-for="t in trust" :key="t.title" class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-brand-100">
              <component :is="t.icon" :size="20" />
            </div>
            <div>
              <h3 class="font-semibold mb-1 text-left">{{ t.title }}</h3>
              <p class="text-sm text-brand-100/80 leading-relaxed">{{ t.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FINALE -->
  <section class="py-24 bg-white">
      <div class="container-custom text-center max-w-3xl mx-auto">
  <h2 class="text-3xl md:text-4xl font-bold mb-6">Parla ora con un tecnico</h2>
  <p class="text-gray-600 mb-10 leading-relaxed">Spiegaci l'impianto che vuoi realizzare o la manutenzione di cui hai bisogno: riceverai indicazioni chiare e proporzionate.</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="tel:+393467563517" class="btn btn-danger flex items-center px-8 py-4 text-lg"><PhoneCall :size="20" class="mr-2" /> Chiama</a>
          <a href="mailto:placeholder@email.it" class="btn btn-secondary flex items-center px-8 py-4 text-lg"><Mail :size="20" class="mr-2" /> Scrivici</a>
          <router-link to="/servizi" class="btn btn-outline flex items-center px-8 py-4 text-lg border border-gray-300 hover:border-brand-500 hover:text-brand-700 transition-colors"><Search :size="20" class="mr-2" /> Servizi</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { 
  Wrench, Search, PhoneCall, Timer, ShieldCheck, CheckCircle, Flame, Mail, Droplets, Fan, Thermometer,
  ArrowBigRight
} from 'lucide-vue-next'
import { } from 'vue'

interface PriorityService { icon: any; title: string; desc: string }
interface Step { title: string; desc: string }
interface Area { city: string; tag: string; desc: string }
interface TrustItem { icon: any; title: string; desc: string }

const priorityServices: PriorityService[] = [
  { icon: Wrench, title: 'Installazione impianti idraulici', desc: 'Progettazione e posa completa di impianti civili proporzionati alle reali necessità.' },
  { icon: Fan, title: 'Installazione climatizzazione', desc: 'Sistemi di climatizzazione efficienti con posizionamento ottimizzato e linee pulite.' },
  { icon: Thermometer, title: 'Manutenzione climatizzazione', desc: 'Pulizia, controlli e sanificazione periodica per mantenere performance e igiene.' },
  { icon: Flame, title: 'Installazione caldaie', desc: 'Sostituzione e messa in servizio con taratura e documentazione conforme.' }
]

const steps: Step[] = [
  { title: 'Ascolto & consulenza', desc: 'Raccogliamo esigenze e contesto reale.' },
  { title: 'Valutazione tecnica', desc: 'Analisi proporzionata senza lavori superflui.' },
  { title: 'Preventivo chiaro', desc: 'Soluzione mirata, costi trasparenti.' },
  { title: 'Esecuzione & supporto', desc: 'Installazione certificata e assistenza.' }
]

const areas: Area[] = [
  { city: 'Montenero di Bisaccia', tag: 'Sede', desc: 'Pianificazione rapida e interventi programmati.' },
  { city: 'Vasto', tag: 'Vastese', desc: 'Copertura installazioni e manutenzioni periodiche.' },
  { city: 'San Salvo', tag: 'Vastese', desc: 'Supporto su climatizzazione e impianti nuovi.' },
  { city: 'Termoli', tag: 'Basso Molise', desc: 'Interventi su richiesta e consulenza dedicata.' }
]

const trust: TrustItem[] = [
  { icon: ShieldCheck, title: 'Tecnici certificati', desc: 'Competenza verificata e formazione continua.' },
  { icon: CheckCircle, title: 'Soluzioni proporzionate', desc: 'Mai interventi sovradimensionati.' },
  { icon: Timer, title: 'Risposta rapida', desc: 'Preventivi e pianificazione tempestivi.' },
  { icon: Droplets, title: 'Materiali conformi', desc: 'Componenti selezionati e documentabili.' }
]

// Dark mode logic removed
</script>

<style scoped>
@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
/* Legacy animation kept if needed */
.animate-float { animation: float 6s ease-in-out infinite; }
</style>
