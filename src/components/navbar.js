/* eslint-disable */
import React from 'react'
import { Link } from 'gatsby'

import './style.scss'

const Navbar = () => (
  <div className="hero-head">
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item has-text-white" to="/">
            Tiffany White
          </Link>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <span className="navbar-item">
              <a
                className="button is-danger is-inverted is-white"
                href="mailto:tiffany@tiffanyrwhite.com"
              >
                <span className="icon">👋</span>
                <span>Say Hello</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar
