import React from 'react'
import { graphql } from 'gatsby'
import Helmet from '../components/helmet'
import Header from '../components/blog-header'
import Footer from '../components/footer'

export default function Template({
	data // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark

	return (
		<div>
			<Helmet />
			<Header backButton background={frontmatter.thumbnail} />
			<section className='section'>
				<div className='container'>
					<div className='content has-text-centered'>
						<h2 className='has-text-danger'>{frontmatter.title}</h2>
						<h4>{frontmatter.date}</h4>
						<img src={frontmatter.thumbnail} alt={frontmatter.title} />
						<hr />
						<div
							className='blog-post-content'
							dangerouslySetInnerHTML={{ __html: html }}
						/>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				thumbnail
				github
				link
			}
		}
	}
`
