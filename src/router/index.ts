import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiziView from '../views/ServiziView.vue'
import ChiSiamoView from '../views/ChiSiamoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Idraulico Di Lorenzo Remo | Impianti & Climatizzazione Basso Molise e Vastese',
        description: 'Installazione e manutenzione impianti idraulici, climatizzazione, caldaie. Tecnici certificati a Montenero di Bisaccia con copertura Basso Molise e Vastese.'
      }
    },
    {
      path: '/servizi',
      name: 'servizi',
      component: ServiziView,
      meta: {
        title: 'Servizi Idraulici e Climatizzazione | Di Lorenzo Remo Montenero di Bisaccia',
        description: 'Installazione impianti idraulici civili, climatizzazione (split e multisplit), manutenzione e sanificazione, installazione caldaie. Copertura Montenero di Bisaccia, Vasto, San Salvo, Termoli.'
      }
    },
    {
      path: '/chi-siamo',
      name: 'chi-siamo',
      component: ChiSiamoView,
      meta: {
        title: 'Chi Siamo | Idraulico Di Lorenzo Remo Montenero di Bisaccia',
        description: 'Dal 2003 installazione e manutenzione impianti idraulici e climatizzazione nel Basso Molise e Vastese. Interventi proporzionati, materiali conformi, consulenza trasparente.'
      }
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    // Sempre scrolla in cima quando si naviga
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

// Meta title & description dynamic update
router.afterEach((to) => {
  const defaultTitle = 'Idraulico Di Lorenzo Remo | Assistenza Idraulica Professionale';
  const defaultDesc = 'Idraulico professionale a Montenero di Bisaccia: riparazioni urgenti, manutenzione caldaie, climatizzazione e impianti. Servizio rapido e trasparente in Basso Molise e Vastese.';

  const title = (to.meta as any)?.title || defaultTitle;
  const description = (to.meta as any)?.description || defaultDesc;

  if (title) document.title = title;

  function setMeta(name: string, content: string) {
    if (!content) return;
    let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  }

  setMeta('description', description);
});
