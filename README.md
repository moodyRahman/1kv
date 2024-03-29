## 1kv

A simple Destiny 2 clip showcase with Sveltekit's serverside rendering, and Strapi 
as a self-hosted CMS. 

Having grown disillusioned with the massive payloads generated by React, and with Single Page Applications as a philosophy, I wanted to write an 
app that returns us to more lightweight era. I did some work on SSG during one of my internships, so I figured that this project, with infrequently 
changing data would be a good candidate to implement this. While I did have to implement some additional infrastructure needed to make this happen, 
I think it's well worth the trade off. 

This website is built using server-side generated Svelte that makes a request to my selfhosted CMS (content managment service).
All of the video and thumbnails are also hosted on my server, compressed and generated by a variety of scripts. 
Additionally, I have a Jenkins pipeline implemented that will rebuild this site on any change in the CMS or in the source code repo.

If I were to build this in vanilla React, I'd probably have it make a request to the CMS on every page load and dynamically render the contents,
thus eliminating the need for a pipeline to keep the site contents up to date. 
I could opt for Next.js and use their SSG features, but for such a small project, where the value of a modern framework is more for the convenience and 
abstractions that are provided rather than any actual complex state management, SvelteKit felt like a much stronger fit. 
