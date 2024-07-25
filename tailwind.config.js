/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'blue-gradient':
					'radial-gradient(64.18% 64.18% at 94.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)',
			},
			backgroundColor: {
				'blue-gradient':
					'radial-gradient(64.18% 64.18% at 94.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)',
			},
			colors: {
				primary: '#00040f',
				secondary: '#db5ce6',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				outfit: ['Outfit', 'sans-serif'],
			},
		},
		screens: {
			xs: '400px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [],
}
