import React, { useState, useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";
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
            <a href="#hero" className="menu-text">
              <span className="menu-numbers">01.</span> Intro &nbsp;
            </a>
            <a href="#about" className="menu-text">
              <span className="menu-numbers">02.</span> About &nbsp;
            </a>
            <a href="#projects" className="menu-text">
              <span className="menu-numbers">03.</span> Projects &nbsp;
            </a>
            <a href="#contact" className="menu-text">
              <span className="menu-numbers">04.</span> Contact &nbsp;
            </a>
           </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default Nav;
