---
title: Hello World
date: "2020-04-25T00:00:00.000Z"
description: "Traditional first post with little substance but it gets the ball rolling"
---

Over the last 10 years, I've tried and failed to run a personal blog.  On occasion, the failure has been in building the software, but quite often it's down to being a terrible blog author and not understanding that it takes time and practice to write.  My first attempt was a truly horrendous monstrosity of black backgrounds and cyan text running on PHP with a handy module called cute news.  Since then, I've run multiple WordPress sites, I've tried Drupal, Joomla and even (I think) a very brief fling with DotNetNuke.

Getting a prebuilt website set up has always been fairly trivial.  Most hosting platforms have a 1-click deployment of WordPress.  I have always had a very different issue when trying to build my own, and it's a fairly common developer problem.  I think too big and start too soon.  Using the experience (or lack thereof) I have to build a .net hosted blog always ended in an overcomplicated mess.  The project always died.

In early 2019 I decided to jump in and try running a statically hosted website using GatsbyJS.  Gatsby is a super cool framework, it allowed me to build some reusable components, and the tooling would take everything I did, and output static HTML files for me.  For me, this was exactly what I wanted.  I didn't need some fancy application running on the browser, I'm running a blog.  But it scratched a developer itch and gave me a gentle introduction to some technologies (like GraphQL).  Coupling this with Netlify meant I had a wholly hosted website with SSL and a CI/CD solution.

Unfortunately, I let this blog die too.  I really wasn't happy with the look and feel of the blog, and I could not for the life of me settle on a new version so I just ignored it, got on with other projects.  When I finally came round to reviving it, I realised I wanted to build something myself.  I made 2 fairly big decisions for myself.  The first was that the entire project would be a learning project for me.  That meant that the build was as important as the content I produce.  It also means it's likely from time to time, something will break (and I'm ok with this).  The second was that I'm not going to write amazing posts straight away, writing is not natural for me and I'm going to have to practice.  
Recreating it in gatsby did make the most sense, it was already there barring an npm issue which turned out to just be versioning.  I, however, being a fan of making life infinitely more difficult, decided to embark on a Rust based webserver and see what I could do in that space.

For a while the rust server worked well.  Then I decided I wanted to move to a framework that didn't rely on a nightly build.  At this point I realised that the learning opportunity was sporadic and painful.  So here I am, back on gatsby keeping the website out of my way (mostly). 