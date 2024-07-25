// src/index.tsx
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import { About } from './pages/About/About'
import { Cart } from './pages/Cart/Cart'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/cart',
		element: <Cart />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
)
