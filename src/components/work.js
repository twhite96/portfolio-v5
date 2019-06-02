import React, { Component } from 'react'
import { FaGithub, FaEye } from 'react-icons/fa'

class work extends Component {
	renderPosts() {
		return this.props.posts.map((post, id) => (
			<div className='column is-one-third' key={id}>
				<div className='card'>
					<div className='card-image'>
						<figure className='image is-4by3'>
							<img
								src={post.node.frontmatter.thumbnail}
								alt={post.node.frontmatter.title}
							/>
						</figure>
					</div>
					<div className='card-content'>
						<div className='content'>
							<h4>{post.node.frontmatter.title}</h4>
						</div>
					</div>
					<footer className='card-footer'>
						<a
							href={post.node.frontmatter.github || '/'}
							className='card-footer-item has-text-white has-background-primary'
							rel='noopener noreferrer'
							target='_blank'>
							<FaGithub color='white' />
							<p style={{ marginLeft: '5px' }}>Source Code</p>
						</a>
						<a
							href={post.node.frontmatter.link || '/'}
							rel='noopener noreferrer'
							target='_blank'
							className='card-footer-item has-text-white has-background-link'>
							<FaEye color='white' />
							<p style={{ marginLeft: '5px' }}>Preview</p>
						</a>
					</footer>
				</div>
			</div>
		))
	}

	render() {
		return (
			<div>
				<section className='section'>
					<div className='container'>
						<div className='columns is-multiline'>{this.renderPosts()}</div>
					</div>
				</section>
			</div>
		)
	}
}

export default work
