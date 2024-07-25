import { message, Popconfirm, PopconfirmProps } from 'antd'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { productsItems } from '../../assets/products'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import {
	default as userStore,
	default as UserStore,
} from '../../stores/UserStore'
import './Cart.css'

export const Cart: React.FC = observer(() => {
	const handleClear = () => {
		userStore.clearCart()
	}
	const handleRemove = (id: number) => {
		userStore.removeFromCart(id)
	}
	const calculateTotal = () => {
		const prodPrices = UserStore.cart.map(item => {
			const product = productsItems.find(p => p.id === item.id)
			return product ? item.quantity * product.price : 0
		})
		return prodPrices.reduce((total, price) => total + price, 0)
	}
	const totalPrice = calculateTotal()
	const delivery = 3
	const total = totalPrice + delivery

	const [messageApi, contextHolder] = message.useMessage()

	const success = () => {
		console.log('Success function called')
		messageApi.open({
			type: 'success',
			content: 'Order Submitted Successfully!!!',
		})

		UserStore.clearCart()
	}

	const confirm: PopconfirmProps['onConfirm'] = () => {
		handleClear()
		message.success('Cart cleared')
	}

	const cancel: PopconfirmProps['onCancel'] = () => {
		message.error('Cart clear canceled')
	}

	return (
		<>
			<Navbar />

			<div className='cart-container'>
				{contextHolder}
				<h1 className='cart-title'>Your Cart</h1>
				<div className='cart-items'>
					{userStore.cart.length > 0 ? (
						userStore.cart.map(item => {
							const product = productsItems.find(p => p.id === item.id)

							if (!product) {
								return null
							}

							return (
								<div key={item.id} className='cart-item'>
									<img
										src={product.image}
										alt={product.name}
										className='cart-item-image'
									/>
									<div className='cart-item-info'>
										<span className='cart-item-title'>{product.name}</span>
										<span className='cart-item-quantity'>
											Quantity: {item.quantity}
										</span>
										<button
											className='remove-button'
											onClick={() => handleRemove(item.id)}
										>
											Remove
										</button>
									</div>
								</div>
							)
						})
					) : (
						<p className='empty-cart-message'>Your cart is empty</p>
					)}
				</div>
				<div
					className={
						UserStore.cart.length > 0 ? 'cart-summary' : 'cart-summary hidden'
					}
				>
					<Popconfirm
						title='Are you sure you want to clear all items from the cart?'
						description='This action cannot be undone.'
						onConfirm={confirm}
						onCancel={cancel}
						okText='Yes'
						cancelText='No'
					>
						<button className='clear-all-button'>Clear All</button>
					</Popconfirm>

					<div className='order'>
						<div className='mini-container'>
							<h2 className='summary-title'>Order Summary</h2>
							<p className='summary-item'>
								Total Price: ${totalPrice.toFixed(2)}
							</p>
							<p className='summary-item'>
								Delivery Fee: ${delivery.toFixed(2)}
							</p>
							<p className='summary-item'>Grand Total: ${total.toFixed(2)}</p>
							<button className='submit-button' onClick={success}>
								Submit Order
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
})
