import React from 'react'
import './style.scss'

const skills = () => {
	return (
		<div className="content has-text-centered">
			<h3 className="has-text-danger">MY SKILLS</h3>
			<h2>Languages, Libraries, and Tools.</h2>
			<div className="tile is-ancestor">
				<div className="tile is-vertical is-8">
					<div className="tile">
						<div className="tile is-parent is-vertical">
							<article className="tile is-child notification is-light">
								<p className="title">Front End</p>
								<div className="tags are-medium">
									<span className="tag is-danger">HTML</span>
									{/* <span className="tag is-danger">CSS</span> */}
									<span className="tag is-danger">Javascript</span>
									<span className="tag is-danger">jQuery</span>
									<span className="tag is-danger">React</span>
									<span className="tag is-danger">Bootstrap</span>
									<span className="tag is-danger">Gatsby</span>
								</div>
							</article>
						</div>
						<div className="tile is-parent">
							<article className="tile is-child notification is-light">
								<p className="title">Back End</p>
								<div className="tags are-medium">
									<span className="tag is-danger">Node/Express</span>
									<span className="tag is-danger">Ruby/Ruby on Rails</span>
									<span className="tag is-danger">MongoDB</span>
									{/* <span className="tag is-danger">GraphQL</span> */}
								</div>
							</article>
						</div>
					</div>
				</div>
				<div className="tile is-parent">
					<article className="tile is-child notification is-light">
						<div className="content">
							<p className="title">Other</p>
							<div className="tags are-medium">
								<span className="tag is-danger">Git</span>
								{/* <span className="tag is-danger">Docker</span> */}
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	)
}

export default skills
