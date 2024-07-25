// src/components/Navbar/Navbar.tsx
import { Drawer, message } from 'antd'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router'
import logo from '../../assets/computer-tv-screen-svgrepo-com.svg'
import cart from '../../assets/shopping-cart (1).png'
import UserStore from '../../stores/UserStore'
import DrawerContent from './DrawerContent'
import './Navbar.css'
import { useDrawer } from './useDrawer'

export const Navbar: React.FC = observer(() => {
	const { open, showDrawer, handleCancel } = useDrawer()
	const [messageApi, contextHolder] = message.useMessage()

	const navigate = useNavigate()

	const success = () => {
		messageApi.open({
			type: 'success',
			content: 'Successfully Entered',
		})
	}
	const error = (e: string) => {
		messageApi.open({
			type: 'error',
			content: e,
		})
	}

	return (
		<>
			{contextHolder}
			<div className='nav-wrap' id='home'>
				<div className='logo'>
					<img src={logo} alt='' width='40' />
					<h1>
						TECH<span className='store'>-STORE</span>
					</h1>
				</div>

				<div>
					<ul className='nav-list'>
						<li>
							<a onClick={() => navigate('/')}>Home</a>
						</li>
						<li>
							<a onClick={() => navigate('/about')}>About Us</a>
						</li>
						<li>
							<a href='#products'>Products</a>
						</li>
						<li>
							<a href='#footer-container'>Contact</a>
						</li>
					</ul>
				</div>

				<div className='flex items-center gap-4'>
					<div className='cart-cont'>
						<img
							className='cart'
							onClick={() => {
								if (localStorage.getItem('currentUser') != undefined) {
									navigate('/cart')
								} else {
									error("You're not logged in")
								}
							}}
							src={cart}
							alt=''
							width='25'
						/>
						<h1 className='total bg-gradient'>
							{UserStore.totalItems > 0 ? UserStore.totalItems : ''}
						</h1>
					</div>
				</div>

				<button
					onClick={() => {
						if (localStorage.getItem('currentUser') != undefined) {
							UserStore.logout()
							navigate('/')
						} else {
							showDrawer()
						}
					}}
					className='control'
				>
					{localStorage.getItem('currentUser') != undefined
						? 'Logout'
						: 'Login'}
				</button>
			</div>
			<Drawer
				title='Create a new account'
				width={520}
				onClose={handleCancel}
				open={open}
				bodyStyle={{
					paddingBottom: 80,
					backgroundColor: '#1a1a1a',
					color: 'white',
				}}
				headerStyle={{
					backgroundColor: '#1a1a1a',
					color: 'white',
					fontSize: '30px',
					fontFamily: 'Outfit',
					fontWeight: 'bold',
				}}
				footerStyle={{
					backgroundColor: '#1a1a1a',
					color: 'white',
				}}
			>
				<DrawerContent success={success} error={error} />
			</Drawer>
		</>
	)
})
