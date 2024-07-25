import { message } from 'antd'
import React, { useRef } from 'react'
import './Footer.css'

export const Footer: React.FC = () => {
	const [messageApi, contextHolder] = message.useMessage()
	const ref = useRef<HTMLInputElement>(null)

	const success = () => {
		messageApi.open({
			type: 'success',
			content: 'Succesfully Subscribed!',
		})
	}

	const error = () => {
		messageApi.open({
			type: 'error',
			content: 'Do not use empty email',
		})
	}

	const handle = () => {
		const value = ref.current?.value || ''
		if (value?.trim().length > 0) {
			success()
			return
		} else {
			error()
			return
		}
	}

	return (
		<footer className='footer-container' id='footer-container'>
			{contextHolder}
			<div className='footer-content'>
				<div className='footer-sections'>
					<div className='footer-about'>
						<h4 className='footer-heading'>About Us</h4>
						<p className='footer-text'>
							TechStore is your one-stop shop for the latest in technology. We
							offer a wide range of products including a lots.
						</p>
					</div>

					<div className='footer-contact'>
						<h4 className='footer-heading'>Contact Us</h4>
						<p className='footer-text'>
							123 Tech Avenue, Silicon Valley, CA
							<br />
							Email: support@techstore.com
							<br />
							Phone: (123) 456-7890
						</p>
					</div>
					<div className='footer-newsletter'>
						<h4 className='footer-heading'>Subscribe to Our Newsletter</h4>
						<p className='footer-text'>
							Stay updated with the latest news and exclusive offers from
							TechStore.
						</p>
						<input
							ref={ref}
							type='email'
							placeholder='Your email address'
							className='footer-newsletter-input'
						/>
						<button
							className='footer-newsletter-button'
							onClick={() => handle()}
						>
							Subscribe
						</button>
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<p>&copy; 2024 TechStore. All rights reserved.</p>
			</div>
		</footer>
	)
}
