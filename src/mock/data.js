import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tiffany White', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'I\'m',
  name: 'Tiffany.',
  subtitle: 'I build things for the web.',
  intro: 'I\'m a frontend engineer based in Swatara Twp, PA who builds creative and performant websites and has fun doing it.',
  cta: 'See More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hey. My name is Tiffany.',
  paragraphTwo: 'I love coding in JavaScript, React, Gatsby, and am getting up and running with Next.js for fullstack JAMstack apps.',
  resume: '' // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'checkyoself-v1.png',
    title: 'Check Yo Self App, v1',
    info: 'A spelling and grammar checker for your markdown blog posts.',
    info2: 'This project started out using Create React App and Bulma for the UI. It is in v1 and will soon be refactored to a more modern stack, such as Gatsby.',
    url: 'https://check-yoself.app',
    repo: 'https://github.com/twhite96/checkyoself', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bumped-v1.png',
    title: 'Bumped App Landing Page',
    info: 'v1 of the bumped.com landing page.',
    info2: 'I freelanced with Bumped, a fintech startup in March. We needed to refactor the landing page using Gatsby, styled-components, and Typescript. We were on a tight deadline of two weeks and we got it shipped just shy of that. The landing page has since been refactored since I last worked on it.',
    url: 'https://bumped.com',
    repo: '', // if no repo, the button will not show up
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
  cta: '',
  btn: '',
  email: 'tiffany@tiffanyrwhite.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/tiffanywhitedev',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/tiffanywhitedev',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/tiffanyrwhite',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/twhite96',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
