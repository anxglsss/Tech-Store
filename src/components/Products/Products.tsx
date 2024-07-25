import { motion } from 'framer-motion'
import { forwardRef, useState } from 'react'
import watch from '../../assets/clock.png'
import earphones from '../../assets/headphones.png'
import laptop from '../../assets/laptop.png'
import { productsItems } from '../../assets/products'
import smartphone from '../../assets/smartphone.png'
import tablet from '../../assets/tablet.png'
import MProductItem from './ProductItem'
import './Products.css'

// Define TypeScript interface for product
interface Product {
	id: number
	name: string
	image: string
	description: string
	price: number
	type: string
}

export const Products = forwardRef(() => {
	const [type, setType] = useState<string | null>(null)

	const handleFilter = (category: string) => {
		setType(category === type ? null : category)
	}

	// Filter products based on type
	const filtered = type
		? productsItems.filter((p: Product) => p.type === type)
		: productsItems

	type CustomType = number

	const textAnimation = {
		hidden: {
			y: -100,
			opacity: 0,
		},
		visible: (custom: CustomType) => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.3 },
		}),
	}

	return (
		<motion.div
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.1, once: true }}
		>
			<h1 className='prod-title' id='products'>
				Products
			</h1>
			<motion.div className='product-filter' variants={textAnimation}>
				<img
					onClick={() => handleFilter('laptop')}
					src={laptop}
					alt='Laptop'
					className={type === 'laptop' ? 'selected' : ''}
				/>
				<img
					onClick={() => handleFilter('smartphone')}
					src={smartphone}
					alt='Smartphone'
					className={type === 'smartphone' ? 'selected' : ''}
				/>
				<img
					onClick={() => handleFilter('tablet')}
					src={tablet}
					alt='Tablet'
					className={type === 'tablet' ? 'selected' : ''}
				/>
				<img
					onClick={() => handleFilter('watch')}
					src={watch}
					alt='Watch'
					className={type === 'watch' ? 'selected' : ''}
				/>
				<img
					onClick={() => handleFilter('headphones')}
					src={earphones}
					alt='Headphones'
					className={type === 'headphones' ? 'selected' : ''}
				/>
			</motion.div>
			<div className='product-main'>
				{filtered.map((p: Product) => (
					<MProductItem
						key={p.id}
						name={p.name}
						image={p.image}
						desc={p.description}
						price={p.price}
						type={p.type}
						id={p.id}
					/>
				))}
			</div>
		</motion.div>
	)
})
