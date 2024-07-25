import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import './About.css'

export const About = () => {
	return (
		<div>
			<Navbar />
			<div className='about-us'>
				<header className='about-us-header'>
					<h1>About Us</h1>
				</header>
				<hr />

				<section className='about-us-intro'>
					<h2>Welcome to Tech-Store</h2>
					<p>
						At <strong>Tech-Store</strong>, we believe in the transformative
						power of technology. Founded in 2022, our mission is to provide
						top-notch electronic products that empower our customers to live
						smarter, work more efficiently, and enjoy their tech-driven lives to
						the fullest.
					</p>
				</section>
				<hr />

				<section className='about-us-story'>
					<h2>Our Story</h2>
					<p>
						Tech-Store started as a small startup with a vision to revolutionize
						the way people interact with technology. What began as a passion
						project has grown into a leading destination for tech enthusiasts
						and everyday consumers alike. With our headquarters located in the
						heart of Silicon Valley, we are strategically positioned to stay at
						the forefront of technological advancements and innovations.
					</p>
				</section>
				<hr />

				<section className='about-us-mission'>
					<h2>Our Mission</h2>
					<p>
						Our mission is to offer a wide range of high-quality tech products
						at competitive prices while ensuring exceptional customer service.
						We are committed to:
					</p>
					<ul>
						<li>
							Providing the latest and most innovative technology products.
						</li>
						<li>Offering personalized and reliable customer support.</li>
						<li>
							Building long-lasting relationships with our customers based on
							trust and transparency.
						</li>
					</ul>
				</section>
				<hr />
				<section className='about-us-values'>
					<h2>Our Values</h2>
					<ul>
						<li>
							<strong>Innovation:</strong> We are dedicated to staying ahead of
							technological trends and continuously improving our product
							offerings.
						</li>
						<li>
							<strong>Customer Focus:</strong> Our customers are at the center
							of everything we do. We strive to understand their needs and
							exceed their expectations.
						</li>
						<li>
							<strong>Integrity:</strong> We conduct our business with honesty
							and transparency, ensuring that our customers receive the best
							value and service.
						</li>
						<li>
							<strong>Excellence:</strong> We are committed to delivering the
							highest quality products and services, and we continually seek to
							enhance our operations and performance.
						</li>
					</ul>
				</section>
				<hr />
				<section className='about-us-products'>
					<h2>Our Products</h2>
					<p>We offer a diverse range of tech products, including:</p>
					<ul>
						<li>
							<strong>Smartphones and Tablets:</strong> Latest models from top
							brands with cutting-edge features.
						</li>
						<li>
							<strong>Laptops and Computers:</strong> High-performance machines
							for work, gaming, and everyday use.
						</li>
						<li>
							<strong>Smart Home Devices:</strong> From smart speakers to home
							security systems, enhance your living space with our smart
							solutions.
						</li>
						<li>
							<strong>Wearables:</strong> Track your health and fitness with our
							range of smartwatches and fitness trackers.
						</li>
						<li>
							<strong>Accessories:</strong> A wide variety of accessories to
							complement and enhance your tech devices.
						</li>
					</ul>
				</section>
				<hr />
				<section className='about-us-team'>
					<h2>Our Team</h2>
					<p>
						At Tech-Store, we are proud of our dedicated and passionate team.
						Our employees come from diverse backgrounds and bring a wealth of
						experience to the table. From our customer service representatives
						to our product developers, each team member plays a crucial role in
						delivering the exceptional experience that Tech-Store is known for.
					</p>
				</section>
				<hr />
				<section className='about-us-community'>
					<h2>Our Community Involvement</h2>
					<p>
						We are committed to giving back to the community. Tech-Store
						regularly participates in local tech fairs, educational programs,
						and charitable events. We believe that by supporting education and
						fostering innovation, we can contribute to a better future for
						everyone.
					</p>
				</section>
				<hr />
				<section className='about-us-contact'>
					<h2>Contact Us</h2>
					<p>
						Have questions or need assistance? Feel free to reach out to us:
					</p>
					<ul>
						<li>
							<strong>Email:</strong>{' '}
							<a href='mailto:support@tech-store.com'>support@tech-store.com</a>
						</li>
						<li>
							<strong>Phone:</strong> +1 (800) 123-4567
						</li>
						<li>
							<strong>Address:</strong> 123 Tech Lane, Silicon Valley, CA 94043,
							USA
						</li>
					</ul>
				</section>
				<hr />
				<section className='about-us-social'>
					<h2>Follow Us</h2>
					<p>
						Stay updated with the latest news and promotions by following us on
						social media:
					</p>
					<ul>
						<li>
							<a href='https://facebook.com/techstore'>Facebook</a>
						</li>
						<li>
							<a href='https://twitter.com/techstore'>Twitter</a>
						</li>
						<li>
							<a href='https://instagram.com/techstore'>Instagram</a>
						</li>
						<li>
							<a href='https://linkedin.com/company/techstore'>LinkedIn</a>
						</li>
					</ul>
				</section>
			</div>
			<Footer />
		</div>
	)
}
