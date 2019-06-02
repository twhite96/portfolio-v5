import React from 'react'
import './style.scss'
import Navbar from './navbar'
import { Link } from 'gatsby'

const BlogHeader = ({ title, backButton, background }) => (
	<section className='hero gradientBg--blog is-small'>
		<Navbar />
		<div className='hero-body'>
			<div className='container left'>
				<div className='content'>
					<h1 className='is-uppercase header-title has-text-white'>{title}</h1>
					{backButton && (
						<Link to='/blog' className='button is-medium is-danger'>
							Go back
						</Link>
					)}
				</div>
			</div>
		</div>
	</section>
)

export default BlogHeader
