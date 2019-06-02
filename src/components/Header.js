import React from 'react'
import './style.scss'
import Navbar from './navbar'
import Particles from 'react-particles-js'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
	<section className='hero gradientBg is-medium'>
		<Navbar />
		<Particles
			style={{ position: 'absolute', top: 0, left: 0 }}
			params={{
				particles: {
					number: {
						value: 50,
						density: {
							enable: false
						}
					},
					size: {
						value: 3,
						random: true,
						anim: {
							speed: 4,
							size_min: 0.3
						}
					},
					line_linked: {
						enable: false
					},
					move: {
						random: true,
						speed: 1,
						direction: 'top',
						out_mode: 'out'
					}
				},
				interactivity: {
					events: {
						onhover: {
							enable: true,
							mode: 'bubble'
						},
						onclick: {
							enable: true,
							mode: 'repulse'
						}
					},
					modes: {
						bubble: {
							distance: 250,
							duration: 2,
							size: 0,
							opacity: 0
						},
						repulse: {
							distance: 400,
							duration: 4
						}
					}
				}
			}}
		/>
		<div className='hero-body'>
			<div className='container center'>
				<div className='content'>
					<h1 className='is-uppercase header-title has-text-white'>
					  I CREATE FUNCTIONAL, FAST, AND INTUITIVE WEB APPS.
					</h1>
					<div className='buttons are-large field is-grouped has-text-weight-bold'>
						<Link
							to='/work'
							className='has-text-weight-bold button rounded is-uppercase is-danger'>
							My Work
						</Link>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default Header
