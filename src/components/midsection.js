import React from 'react'
import Timeline from './timeline'
import Skills from './skills'
import './style.scss'

const Midsection = () => (
	<div>
		<section className='section'>
			<div className='container'>
				<div className='content has-text-centered'>
					<h3 className='has-text-danger'>ABOUT</h3>
					<h2>Get to know me.</h2>
					<Timeline />
					<hr />
					<Skills />
				</div>
			</div>
		</section>
	</div>
)

export default Midsection
