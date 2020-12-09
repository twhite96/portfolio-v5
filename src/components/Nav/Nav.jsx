import React, { useState, useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";
import { Link } from 'react-scroll';
import { Container, Row, Col } from "react-bootstrap";


const Nav = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <Container id="navbar" className="navbar">
      <Row>
        <Col>
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={500}
            distance="30px"
          >
           <div>   
            <Link to="hero" className="menu-text" smooth duration={1000}>
              <span className="menu-numbers">01.</span> Intro &nbsp;
            </Link>
            <Link to="about" className="menu-text" smooth duration={1000}>
              <span className="menu-numbers">02.</span> About &nbsp;
            </Link>
            <Link to="projects" className="menu-text" smooth duration={1000}>
              <span className="menu-numbers">03.</span> Projects &nbsp;
            </Link>
            <Link to="contact" className="menu-text" smooth duration={1000}>
              <span className="menu-numbers">04.</span> Contact &nbsp;
            </Link>
           </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav;
