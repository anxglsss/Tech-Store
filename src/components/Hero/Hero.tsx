import { Modal } from 'antd'
import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import discount from '../../assets/pc-computer-screen-desktop-svgrepo-com.svg'
import robot from '../../assets/transparent_image.png'
import UserStore from '../../stores/UserStore'
import './Hero.css'

export const Hero = observer(() => {
	const userName = UserStore.currentUser ? UserStore.currentUser.name : 'Friend'
	const [open, setOpen] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(true)

	const showLoading = () => {
		setOpen(true)
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}
	type CustomType = number

	const textAnimation = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: (custom: CustomType) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.3 },
		}),
	}
	const modalAnimation = {
		hidden: {
			x: 100,
			opacity: 0,
		},
		visible: (custom: CustomType) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.3 },
		}),
	}
	const pAnimation = {
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
		<motion.div initial='hidden' whileInView='visible'>
			<div className='hero-wrap'>
				<div className='hero-main' onClick={showLoading}>
					<img src={discount} alt='' width='30' className='pl-2' />
					<h1 className='disc-text'>
						Get <b>20%</b> discount for <b>3</b> products
					</h1>
				</div>
				<motion.h1
					custom={1.3}
					variants={textAnimation}
					className='main-text text-nowrap'
				>
					Hello, <span className='text-gradient ml-2'>{userName}!</span>
					<br></br> Welcome to Us!
				</motion.h1>
				<motion.h6 custom={1.3} variants={textAnimation} className='main-desc'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
					omnis, quibusdam debitis consequuntur ipsam mollitia fugiat aliquam
					cumque rerum autem placeat tempora, alias beatae quidem inventore
					tempore vel est blanditiis.
				</motion.h6>

				<motion.div
					custom={1.7}
					className='robo-wrap'
					variants={modalAnimation}
				>
					<div className='robo-bg blue-gradient'></div>
					<img
						width='420'
						className='absolute top-0 left-0 ml-20'
						src={robot}
						alt='Robot'
					/>
				</motion.div>
				<div className='hero-stat'>
					<motion.div variants={pAnimation} custom={1}>
						<h1 className='text-3xl'>
							<span>200+</span>
						</h1>
						<h2 className='text-gradient text-xl '>USER ACTIVE</h2>
					</motion.div>
					<motion.div variants={pAnimation} custom={1.5}>
						<h1 className='text-3xl'>
							<span>30+</span>
						</h1>
						<h2 className='text-gradient text-xl '>PRODUCTS</h2>
					</motion.div>
					<motion.div variants={pAnimation} custom={2}>
						<h1 className='text-3xl'>
							<span>1200+</span>
						</h1>
						<h2 className='text-gradient text-xl '>TRANSFERS</h2>
					</motion.div>
				</div>
			</div>
			<Modal
				title={
					<h1 className='text-secondary text-5xl font-outfit font-bold mt-2'>
						Sales
					</h1>
				}
				loading={loading}
				open={open}
				onCancel={() => setOpen(false)}
				className='custom-modal' // Apply the custom class here
			>
				<p className='text-lg font-outfit mt-6'>
					Upcoming Sales and Promotions At Tech-Store, we're committed to
					bringing you the best deals and offers on the latest tech products.
					Stay tuned for our upcoming sales and promotions:
					<hr className='mt-4 mb-4' />
					We have exciting seasonal sales lined up throughout the year. From
					summer to winter, you can look forward to substantial discounts on a
					wide range of products. Keep an eye on our website and subscribe to
					our newsletter to be the first to know about these fantastic offers..
				</p>
			</Modal>
		</motion.div>
	)
})

export default Hero
