import { ConfigProvider } from 'antd'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Products } from './components/Products/Products'

export default function App() {
	const theme = {
		token: {
			colorPrimary: '#1a1a1a', // Primary color
			colorBgBase: '#1a1a1a', // Background color
			colorTextBase: '#f0f0f0', // Text color
			colorBgContainer: '#1a1a1a', // Container background color
			colorBorderSecondary: '#333', // Border color
			colorTextSecondary: '#f0f0f0', // Secondary text color
			fontSizeHeading1: 64, // Font size without units
		},
	}

	return (
		<ConfigProvider theme={theme}>
			<Navbar />
			<Hero />
			<Products />
			<Footer />
		</ConfigProvider>
	)
}
