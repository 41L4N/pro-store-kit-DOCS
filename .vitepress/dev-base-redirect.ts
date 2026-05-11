import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'

/** Must match `base` in config (without vs with trailing slash). */
const BASE_NO_SLASH = '/pro-store-kit-DOCS'
const BASE_SLASH = `${BASE_NO_SLASH}/`
const DEFAULT_LOCALE = 'es'

type StackLayer = { route: string; handle: (req: IncomingMessage, res: ServerResponse, next: () => void) => void }

function redirectHandler(
	req: IncomingMessage,
	res: ServerResponse,
	next: () => void,
) {
	const raw = req.url
	if (!raw) {
		next()
		return
	}
	const [pathname] = raw.split('?')
	const query = raw.includes('?') ? `?${raw.split('?').slice(1).join('?')}` : ''

	if (pathname === BASE_NO_SLASH) {
		res.writeHead(302, { Location: `${BASE_SLASH}${query}` })
		res.end()
		return
	}

	if (pathname === BASE_SLASH || pathname === `${BASE_NO_SLASH}/index.html`) {
		res.writeHead(302, {
			Location: `${BASE_SLASH}${DEFAULT_LOCALE}/${query}`,
		})
		res.end()
		return
	}

	next()
}

/**
 * Dev-only: Vite exige la barra final con `base`; además no hay página en `/base/`,
 * así que enviamos al locale por defecto (`es`). El middleware va al frente de la pila
 * para ejecutarse antes de la comprobación interna de `base` de Vite.
 */
export function devBaseRedirectPlugin(): Plugin {
	return {
		name: 'pro-store-kit-docs-dev-base-redirect',
		enforce: 'pre',
		apply: 'serve',
		configureServer(server) {
			const stack = (server.middlewares as { stack?: StackLayer[] }).stack
			const layer: StackLayer = { route: '', handle: redirectHandler }
			if (Array.isArray(stack)) {
				stack.unshift(layer)
			} else {
				server.middlewares.use(redirectHandler)
			}
		},
	}
}
