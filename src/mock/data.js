import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "Tiffany White", // e.g: 'Name | Developer'
  lang: "en", // e.g: en, es, fr, jp
  description: "Portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "I'm",
  name: "Tiffany,",
  subtitle: "and JavaScript is my jam.",
  intro:
    "I'm a frontend engineer based in Swatara Twp, PA who builds creative and performant websites and has fun doing it.",
  cta: "More",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne: "Hey! I'm Tiffany.",
  paragraphTwo:
    "When I was 12, I got my first computer, a really old, really clunky, Comodore 128. At the time, you'd need to know a little bit of BASIC to get anything to work, and I didn't find writing code particularly appealing. I created a little graphic, but mostly played games on it. Fast forward to the 21st Century, with smartphones and a maturing web. I picked up an Android phone in 2010, and quickly became enamored with tweaking it, downloading custom ROMs and flashing bootloaders until I finally went to bed. I began to see that the web was going to be THE platform, and that I needed to get in on it. So I started learning to code in 2014, getting some formal CS training from 2015-2017 at the University of Pittsburgh, until finally landing my first spot on a dev team at a multi-national consulting firm.",
  resume: "", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "static-gen.png",
    title: "Static Gen",
    info: "A simple statc site generator built with Ruby",
    info2:
      "In order to show that I can create something from practically scratch, in a language I am not really familiar with with no outside help, I decided to build a static site generator.",
    url: "https://tiffanywhite.dev/2020/12/17/building-a-static-site-generator-with-ruby/",
    repo: "https://github.com/twhite96/static-gen-ruby", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "bumped-v1.png",
    title: "Bumped App Landing Page",
    info: "v1 of the bumped.com landing page.",
    info2:
      "I freelanced with Bumped, a fintech startup in March. We needed to refactor the landing page using Gatsby, styled-components, and Typescript. We were on a tight deadline of two weeks and we got it shipped just shy of that. The landing page has since been refactored since I last worked on it.",
    url: "https://bumped.com",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "checkyoself-v1.png",
    title: "Check Yo Self App, v1",
    info: "A spelling and grammar checker for your markdown blog posts.",
    info2:
      "I built this app because at the time I started writing it, all the tools for checking the spelling and grammar on markdown documents got tripped up on the symbols. This is currently in v1, with the grammar checker and Firebase to be added later.",
    url:
      "https://docs.check-yoself.app/blog/2020/07/01/shipping-v1-with-or-without-grammar-checking",
    repo: "https://github.com/twhite96/checkyoself", // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'kitty.jpeg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: 'https://info.tiffanywhite.dev',
  //   repo: 'https://github.com/twhite96/info-tiff-dev', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: "Want to know more? Great!",
  btn: "Let's talk!",
  email: "tiffany@tiffanyrwhite.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "twitter",
      url: "https://twitter.com/tiffanywhitedev",
    },
    {
      id: nanoid(),
      name: "codepen",
      url: "https://codepen.io/tiffanywhitedev",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://linkedin.com/in/tiffanyrwhite",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/twhite96",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
