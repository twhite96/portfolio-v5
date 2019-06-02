import React from 'react'
import { FaGithub, FaRssSquare, FaLinkedin } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby'
import './style.scss'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            linkedin
            blog
            github
          }
        }
      }
    `}
    render={data => (
      <footer className="footer center">
        <a
          href={data.site.siteMetadata.linkedin}
          className="footer-social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size="fa-2x" color="grey" className="footer-social" />
        </a>

        <a
          href={data.site.siteMetadata.github}
          className="footer-social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size="fa-2x" color="grey" className="footer-social" />
        </a>

        <a
          href={data.site.siteMetadata.blog}
          className="footer-social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRssSquare size="fas-2x" color="grey" className="footer-social" />
        </a>
      </footer>
    )}
  />
);

export default Footer
