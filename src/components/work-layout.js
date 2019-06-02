import React from 'react'
import './style.scss'
import Helmet from './helmet'
import BlogHeader from './blog-header'
import Footer from './footer'
import Work from './work'

const WorkLayout = ({ posts }) => (
	<div>
		<Helmet />
		<BlogHeader title='My Work' />
		<Work posts={posts} />
		<Footer />
	</div>
)

export default WorkLayout
