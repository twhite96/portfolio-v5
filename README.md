<div align="center">
  <a href="https://github.com/twhite96/portfolio-v5">
    <img src="https://res.cloudinary.com/twhiteblog/image/upload/c_scale,q_100,w_333/v1600111898/trw-github.png" alt="Tiffany White portfolio" />
  </a>
</div>
<h1 align="center">www.tiffanyrwhite.com - v5</h1>
<p align="center">
  The fifth iteration of <a href="https://www.tiffanyrwhite.com" target="_blank" rel="noopener noreferrer" >tiffanyrwhite.com</a> built with <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer" >Gatsby</a> and hosted with <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" >Netlify</a>
</p>
<p align="center">
  Previous versions:
  <a href="https://github.com/twhite96/v1" target="_blank" rel="noopener noreferrer" >v1</a>,&nbsp;
  <a href="https://github.com/twhite96/v2" target="_blank" rel="noopener noreferrer" >v2</a>,&nbsp;
  <a href="https://github.com/twhite96/v3" target="_blank" rel="noopener noreferrer" >v3</a>,&nbsp;
  <a href="https://github.com/twhite96/v4" target="_blank" rel="noopener noreferrer" >v4</a>
</p>

<p align="center">
  <a href="https://app.netlify.com/sites/twhite-portfolio/deploys"><img src="https://api.netlify.com/api/v1/badges/e3f186c5-5bc0-4578-b552-b71c555f6913/deploy-status" alt="Netlify Status"></a>
</p>

How to use:

1. 🌀 Clone the repo at ``
2. 🏃 Run: `npm i` to install dependencies.
3. 🎊 Have fun with it.

## [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/twhite96/portfolio-v5)

## Motivation for this app

My old portfolio was a Jekyll site that was plain and not appealing. It had little personality and along with a timeline and dubious "skill level bars" I wanted something _different_, something with personality that I could call my own. The Jekyll site was a template hardly modified at all, and as I JavaScript dev, I wanted my site to be written in JavaScript, with most like React and a scaffold of a Gatsby theme.

## 🥞 Stack

I used Gatsby, plain old React, Sass, and styled-components 💅.

## 👊🏽 Wins

This portfolio is _heavily_ inspired by [Brittany Chiang](https://brittanychiang.com/)'s brilliant portfolio. I basically took a theme from the Gatsby starter repo and edited it. It took several days, over a couple of weeks, to get the look I wanted and the modifications I wanted.

## 😐 Difficulties

Adding the navigation was the most difficult part of the whole thing. Rendering the main navigation when the viewport was > 769px was a challenge for me.

At first I tried:

```js
if (isMobile) {
  return <StyledBurger />;
} else {
  return <StyledNav />;
}
```

where `isMobile` is an effect hook that was used in the theme.

I also tried media queries:

```js
const StyledBurger = styled.div`
width: 2rem;
height: 2rem;
position: fixed;
top: 15px;
right: 20px;
z-index: 20;
display: none;
@media (max-width: 768px) {
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
}
div {
  width: 2rem;
  height: 0.25rem;
  background-color: ${({ open }) => open ? '#ccc' : '#333'};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }
  &:nth-child(2) {
    transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
    opacity: ${({ open }) => open ? 0 : 1};
  }
  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}
```

This was just two solutions to the problem I tried.

I ended up searching for a way to use media queries with React navs and came across a little library called [react-socks, a React library to render components only on specific viewports](https://github.com/flexdinesh/react-socks) and was easily able to render the nav and hamburger menus only on certain viewports by simply importing the `BreakpointProvider` and `Breakpoint` components.

## 🚶‍♂️Next steps

This is done for now but there are still some kinks I really need to work out with the CSS.

## ⚡ Refactor ⚡

Not at the moment! This is the 5th version of this site. I'll sit on it for a little bit. 😜

### 📘 Further reading

[Real Artists Ship: Portfolio Finished | Tiffany R. White Blog](https://tiffanywhite.dev/2020/10/12/real-artists-ship/)
