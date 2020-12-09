import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0a192f;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const MobileNav = ({ open }) => {
  return (
    <StyledList open={open}>
      <Fade>
        <li>
          <Link to="hero" className="menu-text" smooth duration={1000}>
            <span className="menu-numbers">01.</span> Intro &nbsp;
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" className="menu-text" smooth duration={1000}>
            <span className="menu-numbers">02.</span> About &nbsp;
          </Link>
        </li>
        <li>
          {" "}
          <Link to="projects" className="menu-text" smooth duration={1000}>
            <span className="menu-numbers">03.</span> Projects &nbsp;
          </Link>
        </li>
        <li>
          <Link to="contact" className="menu-text" smooth duration={1000}>
            <span className="menu-numbers">04.</span> Contact &nbsp;
          </Link>
        </li>
      </Fade>
    </StyledList>
  );
};

export default MobileNav;
