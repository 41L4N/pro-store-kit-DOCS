import { defineConfig } from 'vitepress'

const githubRepo = 'https://github.com/41L4N/pro-store-kit-DOCS'

const localSearch = {
	provider: 'local' as const,
	options: {
		locales: {
			root: {
				translations: {
					button: {
						buttonText: 'Buscar',
						buttonAriaLabel: 'Buscar en la documentación',
					},
					modal: {
						noResultsText: 'Sin resultados',
						resetButtonTitle: 'Limpiar',
						footer: {
							selectText: 'para seleccionar',
							navigateText: 'para navegar',
							closeText: 'para cerrar',
						},
					},
				},
			},
			en: {
				translations: {
					button: {
						buttonText: 'Search',
						buttonAriaLabel: 'Search documentation',
					},
					modal: {
						noResultsText: 'No results',
						resetButtonTitle: 'Reset',
						footer: {
							selectText: 'to select',
							navigateText: 'to navigate',
							closeText: 'to close',
						},
					},
				},
			},
		},
	},
}

export default defineConfig({
	// GitHub Pages (repo proyecto): https://41L4N.github.io/pro-store-kit-DOCS/
	base: '/pro-store-kit-DOCS/',

	srcExclude: ['README.md'],

	locales: {
		root: {
			label: 'Español',
			lang: 'es-ES',
			title: 'Pro Store Kit',
			description: 'Documentación de dominio y modelos',
			themeConfig: {
				logo: '/logo.svg',

				sidebar: [
					{ text: 'Inicio', link: '/' },
					{ text: 'Formatos', link: '/Formats' },
					{
						text: 'Usuario',
						collapsed: false,
						items: [
							{ text: 'Usuario', link: '/models/User/User' },
							{ text: 'Estado (Enum)', link: '/models/User/StatusEnum' },
						],
					},
					{
						text: 'Contacto',
						collapsed: false,
						items: [
							{ text: 'Contacto', link: '/models/Contact/Contact' },
							{ text: 'Tipo (Enum)', link: '/models/Contact/TypeEnum' },
						],
					},
					{
						text: 'Producto',
						collapsed: false,
						items: [
							{ text: 'Producto', link: '/models/Product/Product' },
						],
					},
					{
						text: 'Adjunto',
						collapsed: false,
						items: [
							{ text: 'Adjunto', link: '/models/Attachment/Attachment' },
							{
								text: 'Tipo de dueño (Enum)',
								link: '/models/Attachment/OwnerTypeEnum',
							},
							{ text: 'Tipo (Enum)', link: '/models/Attachment/TypeEnum' },
						],
					},
				],

				socialLinks: [{ icon: 'github', link: githubRepo }],
				search: localSearch,

				outline: {
					label: 'En esta página',
					level: [2, 3],
				},

				docFooter: {
					prev: 'Anterior',
					next: 'Siguiente',
				},

				footer: {
					message: 'Pro Store Kit — documentación de dominio',
					copyright: 'MIT License',
				},
			},
		},

		en: {
			label: 'English',
			lang: 'en-US',
			link: '/en/',
			title: 'Pro Store Kit',
			description: 'Domain documentation and models',
			themeConfig: {
				logo: '/logo.svg',

				sidebar: [{ text: 'Home', link: '/en/' }],

				socialLinks: [{ icon: 'github', link: githubRepo }],
				search: localSearch,

				outline: {
					label: 'On this page',
					level: [2, 3],
				},

				docFooter: {
					prev: 'Previous',
					next: 'Next',
				},

				footer: {
					message: 'Pro Store Kit — domain documentation',
					copyright: 'MIT License',
				},
			},
		},
	},
})
