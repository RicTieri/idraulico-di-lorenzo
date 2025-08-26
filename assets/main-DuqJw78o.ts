import App from './App.vue'
import './style.css'
import { ViteSSG } from 'vite-ssg'
import routes from './router'

// ViteSSG crea app sia per CSR che per generazione statica
export const createApp = ViteSSG(
	App,
	{ routes, base: import.meta.env.BASE_URL },
	({ router, isClient, app }) => {
		// Server-side (SSG) meta prerender: inject title & description per route
		// Use onBeforePageRender hook provided by vite-ssg via app
		// We attach only once
		if (!(app as any)._metaHookAdded) {
			(app as any)._metaHookAdded = true
			;(app as any).onBeforePageRender = (route: any, ctx: { head: string[]; html: string }) => {
				const defaultTitle = 'Idraulico Di Lorenzo Remo | Assistenza Idraulica Professionale'
				const defaultDesc = 'Idraulico professionale a Montenero di Bisaccia: riparazioni urgenti, manutenzione caldaie, climatizzazione e impianti. Servizio rapido e trasparente in Basso Molise e Vastese.'
				const meta = (route.meta || {}) as any
				const title = meta.title || defaultTitle
				const description = meta.description || defaultDesc
				const ogImage = meta.ogImage || '/og/default.jpg'
				const canonical = 'https://idraulicodilorenzo.it' + (route.path === '/' ? '/' : route.path)
				// Remove any existing <title> to avoid duplicates then push
				ctx.head = (ctx.head || []).filter(h => !/^<title>/.test(h))
				ctx.head.push(`<title>${title}</title>`)
				// description meta
				ctx.head = ctx.head.filter(h => !/meta name=\"description\"/.test(h))
				ctx.head.push(`<meta name="description" content="${description.replace(/"/g, '&quot;')}">`)
				// canonical
				ctx.head = ctx.head.filter(h => !/<link rel=\"canonical\"/.test(h))
				ctx.head.push(`<link rel="canonical" href="${canonical}">`)
				// Open Graph / Twitter basic
				const ogPairs: [string,string][] = [
					['og:title', title],
					['og:description', description],
					['og:type', 'website'],
					['og:url', canonical],
					['og:image', ogImage],
				]
				ogPairs.forEach(([p,v]) => {
					ctx.head = ctx.head.filter(h => !new RegExp(`property=\\"${p}\\"`).test(h))
					ctx.head.push(`<meta property="${p}" content="${v.replace(/"/g,'&quot;')}">`)
				})
				ctx.head = ctx.head.filter(h => !/name=\"twitter:card\"/.test(h))
				ctx.head.push('<meta name="twitter:card" content="summary_large_image">')
				ctx.head = ctx.head.filter(h => !/name=\"twitter:title\"/.test(h))
				ctx.head.push(`<meta name="twitter:title" content="${title.replace(/"/g,'&quot;')}">`)
				ctx.head = ctx.head.filter(h => !/name=\"twitter:description\"/.test(h))
				ctx.head.push(`<meta name="twitter:description" content="${description.replace(/"/g,'&quot;')}">`)
				ctx.head = ctx.head.filter(h => !/name=\"twitter:image\"/.test(h))
				ctx.head.push(`<meta name="twitter:image" content="${ogImage}">`)
			}
		}
		// Scroll behavior manuale (SSG non supporta history personalizzato qui)
		router.afterEach((_to, _from, saved) => {
			if (!isClient) return
			if (saved) {
			const pos = saved as unknown as { left: number; top: number }
			window.scrollTo(pos.left, pos.top)
			} else {
				window.scrollTo({ top: 0 })
			}
		})

		if (isClient) {
			router.afterEach((to) => {
				const defaultTitle = 'Idraulico Di Lorenzo Remo | Assistenza Idraulica Professionale'
				const defaultDesc = 'Idraulico professionale a Montenero di Bisaccia: riparazioni urgenti, manutenzione caldaie, climatizzazione e impianti. Servizio rapido e trasparente in Basso Molise e Vastese.'
				const title = (to.meta as any)?.title || defaultTitle
				const description = (to.meta as any)?.description || defaultDesc
				const ogImage = (to.meta as any)?.ogImage || '/og/default.jpg'
				const canonical = 'https://idraulicodilorenzo.it' + (to.path === '/' ? '/' : to.path)
				if (title) document.title = title
				const ensure = (name: string, content: string) => {
					if (!content) return
						let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
						if (!tag) {
							tag = document.createElement('meta')
							tag.setAttribute('name', name)
							document.head.appendChild(tag)
						}
						tag.setAttribute('content', content)
				}
				ensure('description', description)
				ensure('twitter:card', 'summary_large_image')
				ensure('twitter:title', title)
				ensure('twitter:description', description)
				ensure('twitter:image', ogImage)
				// canonical
				let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
				if (!link) { link = document.createElement('link'); link.rel='canonical'; document.head.appendChild(link) }
				link.href = canonical
				// OG tags
				const ensureOG = (property: string, content: string) => {
					if (!content) return
					let tag = document.querySelector(`meta[property='${property}']`) as HTMLMetaElement | null
					if (!tag) { tag = document.createElement('meta'); tag.setAttribute('property', property); document.head.appendChild(tag) }
					tag.setAttribute('content', content)
				}
				ensureOG('og:title', title)
				ensureOG('og:description', description)
				ensureOG('og:type', 'website')
				ensureOG('og:url', canonical)
				ensureOG('og:image', ogImage)
			})
		}
	}
)
