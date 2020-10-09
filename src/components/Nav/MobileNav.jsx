import React from "react";
import styled from "styled-components";

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
      <li>
        <a href="#hero" className="menu-text">
          <span className="menu-numbers">01.</span> Intro &nbsp;
        </a>
      </li>
      <li>
        {" "}
        <a href="#about" className="menu-text">
          <span className="menu-numbers">02.</span> About &nbsp;
        </a>
      </li>
      <li>
        {" "}
        <a href="#projects" className="menu-text">
          <span className="menu-numbers">03.</span> Projects &nbsp;
        </a>
      </li>
      <li>
        <a href="#contact" className="menu-text">
          <span className="menu-numbers">04.</span> Contact &nbsp;
        </a>
      </li>
    </StyledList>
  );
};

export default MobileNav;
