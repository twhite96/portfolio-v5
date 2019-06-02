import React, { Component } from 'react'
import { Link } from 'gatsby'

class blogs extends Component {
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
							<h4>
								<Link to={post.node.frontmatter.path}>
									{post.node.frontmatter.title}
								</Link>
							</h4>
						</div>
					</div>
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

export default blogs
