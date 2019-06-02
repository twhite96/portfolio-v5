import React from 'react'
import WorkLayout from '../components/work-layout'
import { graphql } from 'gatsby'

const WorkPage = ({ data }) => (
	<WorkLayout posts={data.allMarkdownRemark.edges} />
)

export const workQuery = graphql`
	query WorkIndexQuery {
		allMarkdownRemark(
			filter: { frontmatter: { path: { regex: "/(projects)/" } } }
		) {
			edges {
				node {
					id
					frontmatter {
						path
						title
						thumbnail
						github
						link
					}
				}
			}
		}
	}
`

export default WorkPage
