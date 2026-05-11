import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('.', import.meta.url)), '..')
const src = resolve(root, 'public', 'index.html')
const dest = resolve(root, '.vitepress', 'dist', 'index.html')

if (!existsSync(src)) {
	console.error('copy-root-redirect: missing', src)
	process.exit(1)
}
copyFileSync(src, dest)
console.log('copy-root-redirect: wrote', dest)
