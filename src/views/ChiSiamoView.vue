<template>
  <div class="about-page">
    <!-- HERO -->
    <section class="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-900 to-brand-800 text-white">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-brand-600/30 blur-3xl rounded-full"></div>
        <div class="absolute bottom-0 right-0 w-80 h-80 bg-brand-500/20 blur-3xl rounded-full"></div>
      </div>
      <div class="container-custom relative z-10 py-24 md:py-36 flex flex-col gap-12">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-wide font-medium mb-6">
            <ShieldCheck :size="16" /> Tecnici certificati
          </div>
          <h1 class="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Chi siamo
            <span class="block text-brand-200">affidabilità tecnica dal 2003</span>
          </h1>
          <p class="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Installazione e manutenzione di impianti idraulici e climatizzazione nel Basso Molise e Vastese. Interventi proporzionati, materiali conformi e consulenza trasparente.
          </p>
        </div>
      </div>
    </section>

    <!-- STORIA & APPROCCIO -->
    <section class="py-20 bg-white">
      <div class="container-custom grid gap-16 md:grid-cols-2 items-start">
        <div class="space-y-8">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight">La nostra storia</h2>
          <p class="text-gray-700 leading-relaxed">
            Dal 2003 operiamo come riferimento locale per impianti idraulici e climatizzazione: un percorso costruito su formazione tecnica continua e ascolto reale delle esigenze del cliente.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Siamo radicati a <strong class="text-brand-600">Montenero di Bisaccia</strong> e serviamo quotidianamente il territorio del <strong class="text-brand-600">Basso Molise</strong> e l'area del <strong class="text-brand-600">Vastese</strong>, pianificando interventi proporzionati e documentabili.
          </p>
          <p class="text-gray-700 leading-relaxed">
            Il nostro obiettivo: soluzioni tecniche pulite, durature e coerenti con il contesto abitativo, evitando sostituzioni o lavori superflui.
          </p>
        </div>
        <div class="space-y-8">
          <h3 class="text-xl font-semibold tracking-tight text-gray-800">Approccio operativo</h3>
          <ul class="space-y-5">
            <li class="flex gap-3">
              <div class="w-10 h-10 rounded-lg bg-brand-600/10 text-brand-600 flex items-center justify-center"><Search :size="18" /></div>
              <div>
                <p class="font-semibold text-gray-800">Analisi proporzionata</p>
                <p class="text-sm text-gray-600 leading-relaxed">Valutiamo lo stato reale prima di proporre interventi o sostituzioni.</p>
              </div>
            </li>
            <li class="flex gap-3">
              <div class="w-10 h-10 rounded-lg bg-brand-600/10 text-brand-600 flex items-center justify-center"><CheckCircle :size="18" /></div>
              <div>
                <p class="font-semibold text-gray-800">Materiali conformi</p>
                <p class="text-sm text-gray-600 leading-relaxed">Componenti selezionati e tracciabili per affidabilità e sicurezza.</p>
              </div>
            </li>
            <li class="flex gap-3">
              <div class="w-10 h-10 rounded-lg bg-brand-600/10 text-brand-600 flex items-center justify-center"><Timer :size="18" /></div>
              <div>
                <p class="font-semibold text-gray-800">Preventivi chiari</p>
                <p class="text-sm text-gray-600 leading-relaxed">Descrizione sintetica, nessuna voce nascosta, pianificazione condivisa.</p>
              </div>
            </li>
            <li class="flex gap-3">
              <div class="w-10 h-10 rounded-lg bg-brand-600/10 text-brand-600 flex items-center justify-center"><ShieldCheck :size="18" /></div>
              <div>
                <p class="font-semibold text-gray-800">Esecuzione controllata</p>
                <p class="text-sm text-gray-600 leading-relaxed">Installazioni pulite, tarature e verifiche funzionali documentate.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- VALORI -->
    <section class="py-20 bg-gradient-to-b from-white via-brand-50 to-white">
      <div class="container-custom">
  <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">I nostri valori</h2>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="v in valori" :key="v.title" class="group rounded-2xl flex flex-col items-center justify-center border border-gray-200 p-6 bg-white hover:shadow-lg transition-all">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-brand-600/10 text-brand-600 group-hover:scale-110 transition-transform">
              <component :is="v.icon" :size="24" />
            </div>
            <h3 class="font-semibold text-lg mb-2 text-gray-800">{{ v.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CERTIFICAZIONI / COMPETENZE -->
    <section class="py-20 bg-white">
      <div class="container-custom">
  <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">Competenze e conformità</h2>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="c in certificazioni" :key="c.title" class="rounded-2xl flex flex-col items-center justify-center border border-gray-200 p-6 bg-gradient-to-br from-white to-gray-50">
            <div class="w-10 h-10 rounded-lg bg-brand-600/10 text-brand-600 flex items-center justify-center mb-4">
              <component :is="c.icon" :size="20" />
            </div>
            <h3 class="font-semibold text-gray-800 mb-2">{{ c.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ c.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- AREE SERVITE -->
    <section class="py-20 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-800 text-white">
      <div class="container-custom">
        <div class="max-w-3xl mb-12 mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">Territorio</h2>
          <p class="text-brand-100/80">Pianificazione rapida e interventi programmati nelle principali aree servite.</p>
        </div>
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="a in areas" :key="a.city" class="rounded-xl p-5 bg-white/5 border border-white/10">
            <h3 class="font-semibold mb-1">{{ a.city }}</h3>
            <p class="text-xs text-brand-100/70 mb-3">{{ a.tag }}</p>
            <p class="text-sm text-brand-100/80 leading-relaxed">{{ a.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-white">
      <div class="container-custom text-center max-w-3xl mx-auto">
  <h2 class="text-3xl md:text-4xl font-bold mb-6">Parliamo del tuo impianto</h2>
        <p class="text-gray-600 mb-10 leading-relaxed">Telefono diretto e risposta rapida: spiegaci l'intervento o la manutenzione di cui hai bisogno e ricevi una valutazione proporzionata.</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="tel:+393467563517" class="btn btn-danger flex items-center px-8 py-4 text-lg"><PhoneCall :size="20" class="mr-2" /> Chiama</a>
          <a href="mailto:placeholder@email.it" class="btn btn-secondary flex items-center px-8 py-4 text-lg"><Mail :size="20" class="mr-2" /> Scrivici</a>
          <router-link to="/servizi" class="btn btn-outline flex items-center px-8 py-4 text-lg border border-gray-300 hover:border-brand-500 hover:text-brand-700 transition-colors"><Wrench :size="20" class="mr-2" /> Servizi</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Wrench, ShieldCheck, CheckCircle, Timer, PhoneCall, Mail, Search, Droplets, Flame, Fan } from 'lucide-vue-next'

interface Valore { icon: any; title: string; desc: string }
interface Cert { icon: any; title: string; desc: string }
interface Area { city: string; tag: string; desc: string }

const valori: Valore[] = [
  { icon: ShieldCheck, title: 'Affidabilità tecnica', desc: 'Formazione continua e procedure controllate.' },
  { icon: CheckCircle, title: 'Proporzione', desc: 'Solo interventi realmente necessari al contesto.' },
  { icon: Droplets, title: 'Materiali conformi', desc: 'Componenti tracciabili e documentabili.' },
  { icon: Timer, title: 'Reattività', desc: 'Preventivi e pianificazione rapidi.' }
]

const certificazioni: Cert[] = [
  { icon: Flame, title: 'Caldaie & riscaldamento', desc: 'Installazione e messa in servizio con taratura.' },
  { icon: Fan, title: 'Climatizzazione', desc: 'Posa split e multisplit con linee pulite.' },
  { icon: Droplets, title: 'Impianti idraulici', desc: 'Realizzazione completa impianti civili.' },
  { icon: ShieldCheck, title: 'Conformità & sicurezza', desc: 'Verifiche funzionali e rispetto normative.' }
]

const areas: Area[] = [
  { city: 'Montenero di Bisaccia', tag: 'Sede', desc: 'Coordinamento e interventi programmati.' },
  { city: 'Vasto', tag: 'Vastese', desc: 'Installazioni e manutenzioni sistematiche.' },
  { city: 'San Salvo', tag: 'Vastese', desc: 'Supporto su climatizzazione e impianti.' },
  { city: 'Termoli', tag: 'Basso Molise', desc: 'Interventi su richiesta e consulenza.' }
]

</script>
