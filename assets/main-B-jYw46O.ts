import App from './App.vue'
import './style.css'
import { ViteSSG } from 'vite-ssg'
import routes from './router'
import { DEFAULT_TITLE, DEFAULT_DESC, DEFAULT_OG_IMAGE, SITE_ORIGIN, OG_LOCALE, SITE_NAME, TWITTER_SITE } from './meta'

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
				const meta = (route.meta || {}) as any
				const title = meta.title || DEFAULT_TITLE
				const description = meta.description || DEFAULT_DESC
				const ogImage = meta.ogImage || DEFAULT_OG_IMAGE
				const robots = meta.robots || 'index,follow'
				const canonical = SITE_ORIGIN + (route.path === '/' ? '/' : route.path)
				const escape = (s:string)=> s.replace(/"/g,'&quot;')
				const pushUnique = (predicate: RegExp, tag: string) => { ctx.head = (ctx.head||[]).filter(h=>!predicate.test(h)); ctx.head.push(tag) }
				pushUnique(/^<title>/, `<title>${escape(title)}</title>`)
				pushUnique(/meta name=\"description\"/, `<meta name="description" content="${escape(description)}">`)
				pushUnique(/meta name=\"robots\"/, `<meta name="robots" content="${robots}">`)
				pushUnique(/<link rel=\"canonical\"/, `<link rel="canonical" href="${canonical}">`)
				const ogPairs: [string,string][] = [
					['og:title', title],
					['og:description', description],
					['og:type', 'website'],
					['og:url', canonical],
					['og:image', ogImage],
					['og:site_name', SITE_NAME],
					['og:locale', OG_LOCALE],
				]
				ogPairs.forEach(([p,v]) => pushUnique(new RegExp(`property=\\"${p}\\"`), `<meta property="${p}" content="${escape(v)}">`))
				// JSON-LD structured data (array of objects)
				if (Array.isArray(meta.jsonld)) {
					meta.jsonld.forEach((obj: any, i: number) => {
						try { pushUnique(new RegExp(`data-jsonld-${i}`), `<script type="application/ld+json" data-jsonld-${i}>${JSON.stringify(obj)}</script>`) } catch {}
					})
				}
				pushUnique(/name=\"twitter:card\"/, '<meta name="twitter:card" content="summary_large_image">')
				pushUnique(/name=\"twitter:title\"/, `<meta name="twitter:title" content="${escape(title)}">`)
				pushUnique(/name=\"twitter:description\"/, `<meta name="twitter:description" content="${escape(description)}">`)
				pushUnique(/name=\"twitter:image\"/, `<meta name="twitter:image" content="${ogImage}">`)
				if (TWITTER_SITE && TWITTER_SITE !== '@') pushUnique(/name=\"twitter:site\"/, `<meta name="twitter:site" content="${TWITTER_SITE}">`)
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
				const meta = (to.meta || {}) as any
				const title = meta.title || DEFAULT_TITLE
				const description = meta.description || DEFAULT_DESC
				const ogImage = meta.ogImage || DEFAULT_OG_IMAGE
				const robots = meta.robots || 'index,follow'
				const canonical = SITE_ORIGIN + (to.path === '/' ? '/' : to.path)
				if (title) document.title = title
				const ensureName = (name: string, content: string) => {
					if (!content) return
					let tag = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null
					if (!tag) { tag = document.createElement('meta'); tag.setAttribute('name', name); document.head.appendChild(tag) }
					tag.setAttribute('content', content)
				}
				const ensureProp = (prop: string, content: string) => {
					if (!content) return
					let tag = document.querySelector(`meta[property='${prop}']`) as HTMLMetaElement | null
					if (!tag) { tag = document.createElement('meta'); tag.setAttribute('property', prop); document.head.appendChild(tag) }
					tag.setAttribute('content', content)
				}
				ensureName('description', description)
				ensureName('robots', robots)
				ensureName('twitter:card', 'summary_large_image')
				ensureName('twitter:title', title)
				ensureName('twitter:description', description)
				ensureName('twitter:image', ogImage)
				if (TWITTER_SITE && TWITTER_SITE !== '@') ensureName('twitter:site', TWITTER_SITE)
				ensureProp('og:title', title)
				ensureProp('og:description', description)
				ensureProp('og:type', 'website')
				ensureProp('og:url', canonical)
				ensureProp('og:image', ogImage)
				ensureProp('og:site_name', SITE_NAME)
				ensureProp('og:locale', OG_LOCALE)
				// Replace existing JSON-LD scripts injected previously
				Array.from(document.querySelectorAll('script[data-jsonld-route]')).forEach(n => n.remove())
				if (Array.isArray(meta.jsonld)) {
					meta.jsonld.forEach((obj: any, i: number) => {
						const tag = document.createElement('script')
						tag.type = 'application/ld+json'
						tag.setAttribute('data-jsonld-route', String(i))
						tag.textContent = JSON.stringify(obj)
						document.head.appendChild(tag)
					})
				}
				let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
				if (!link) { link = document.createElement('link'); link.rel='canonical'; document.head.appendChild(link) }
				link.href = canonical
			})
		}
	}
)
