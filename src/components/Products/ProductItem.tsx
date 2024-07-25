// src/components/ProductItem.tsx
import { message, Modal, Rate } from 'antd'
import { motion } from 'framer-motion'
import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react'
import minus from '../../assets/minus.png'
import sign from '../../assets/sign.png'
import UserStore from '../../stores/UserStore'
import './ProductItem.css'

interface ProductItemProps {
	name: string
	image: string
	desc: string
	price: number
	type: string
	id: number
}

const ProductItem: React.FC<ProductItemProps> = forwardRef(
	({ name, image, desc, price, id }, ref: ForwardedRef<HTMLDivElement>) => {
		const [messageApi, contextHolder] = message.useMessage()

		const success = () => {
			messageApi.open({
				type: 'success',
				content: 'Succesfully done!',
			})
		}

		const error = (e: string) => {
			messageApi.open({
				type: 'error',
				content: e,
			})
		}

		const [count, setCount] = useState(0)

		useEffect(() => {
			setCount(UserStore.cart.find(item => item.id === id)?.quantity || 0)
		}, [id, UserStore.cart])

		const inc = () => {
			setCount(prev => prev + 1)
			UserStore.addToCart(id)
			success()
		}
		const dec = () => {
			if (count > 0) {
				setCount(prev => prev - 1)
				UserStore.removeFromCart(id)
				success()
				return
			}
			error('Zero Product')
		}

		const [open, setOpen] = useState<boolean>(false)
		const [loading, setLoading] = useState<boolean>(true)

		const showLoading = () => {
			setOpen(true)
			setLoading(true)
			setTimeout(() => {
				setLoading(false)
			}, 500)
		}
		type CustomType = number
		const textAnimation = {
			hidden: {
				y: 100,
				opacity: 0,
			},
			visible: (custom: CustomType) => ({
				y: 0,
				opacity: 1,
				transition: { delay: custom * 0.2 },
			}),
		}

		return (
			<motion.div
				className='product-item'
				variants={textAnimation}
				custom={id + 1}
			>
				{contextHolder}
				<img
					onClick={showLoading}
					src={image}
					width='20'
					height='20'
					alt={name}
				/>
				<hr />
				<h3 className='text-gradient'>{name}</h3>
				<Rate defaultValue={5} className='rate' />
				<p>{desc}</p>
				<p>
					<span className='text-gradient'>Price:</span> ${price}
				</p>
				<img
					onClick={() => {
						if (localStorage.getItem('currentUser') != undefined) {
							inc()
						} else {
							error('Youre not logged in')
						}
					}}
					src={sign}
					alt=''
					className='plus'
				/>
				<h1 className={count == 0 ? 'hidden' : 'number'}>{count}</h1>
				<img
					onClick={dec}
					src={minus}
					alt=''
					className={count == 0 ? 'minus hidden' : 'minus'}
				/>
				<Modal
					title={
						<h1 className='text-secondary text-5xl font-outfit font-bold mt-2'>
							{name}
						</h1>
					}
					loading={loading}
					open={open}
					onCancel={() => setOpen(false)}
					className='custom-modal' // Apply the custom class here
				>
					<img
						src={image}
						className='ml-[104px] rounded-2xl mt-8 '
						width={240}
						alt=''
					/>
					<p className='text-xl font-bold font-outfit mt-6'>
						{desc}
						<hr className='mt-4 mb-4 ' />
						<h1 className='text-secondary text-4xl font-bold mt-4'>
							Price: {price}$
						</h1>
					</p>
				</Modal>
			</motion.div>
		)
	}
)

export default ProductItem
export const MProductItem = motion(ProductItem)
