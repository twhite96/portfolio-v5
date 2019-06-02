import React from 'react'
import BlogLayout from '../components/blog-layout'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => (
	<BlogLayout posts={data.allMarkdownRemark.edges} />
)

export const blogQuery = graphql`
	query BlogIndexQuery {
		allMarkdownRemark(
			filter: { frontmatter: { path: { regex: "/(blog)/" } } }
		) {
			edges {
				node {
					id
					frontmatter {
						path
						title
						date
						thumbnail
					}
				}
			}
		}
	}
`

export default BlogPage
