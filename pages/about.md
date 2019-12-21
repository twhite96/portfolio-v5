---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**

Hi I am **{{ site.author.name }}** 👋🏾,<br>
I am a front-end dev at ICF working remotely in my comfy little apartment in Swatara Twp, PA. I have been programming as an autodidact and university student for three years. I attended the University of Pittsburgh for two years after a stint in a few junior colleges.

My toolbox contains JavaScript, React, some Rails, and Styled Components 💅.

<div class="row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>
