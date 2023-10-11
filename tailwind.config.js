/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			colors: {
				test: {
					DEFAULT: 'rgba(255, 0, 0, 0.2)',
					red: 'rgba(255, 0, 0, 0.2)',
					green: 'rgba(0, 255, 0, 0.2)',
					blue: 'rgba(0, 0, 255, 0.2)',
					purple: 'rgba(255, 0, 255, 0.2)'
				}
			}
		}
	},
	plugins: [
		// This extracts tailwinds colors as css variables example: --color-gray-300
		function ({ addBase, theme }) {
			function extractColorVars(colorObj, colorGroup = '') {
				return Object.keys(colorObj).reduce((vars, colorKey) => {
					const value = colorObj[colorKey]

					const newVars =
						typeof value === 'string'
							? { [`--color${colorGroup}-${colorKey}`]: value }
							: extractColorVars(value, `-${colorKey}`)

					return { ...vars, ...newVars }
				}, {})
			}

			addBase({
				':root': extractColorVars(theme('colors'))
			})
		},
		require('@tailwindcss/container-queries')
	]
}
