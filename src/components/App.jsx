import React, { useState, useEffect } from "react";
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Burger from './Nav/Burger';

import { PortfolioProvider } from "../context/context";

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
} from "../mock/data";


function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
    <BreakpointProvider>
      <Breakpoint large>       
        <Nav />
      </Breakpoint>
      <Breakpoint medium down>
        <Burger />
      </Breakpoint>
    </BreakpointProvider>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
