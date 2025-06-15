# CS 601 Final Project

Please take a look around. Please take a look around. You can open index.html in your browser to view the game or launch it live in your IDE with an extension. You can also view the project live on a published GitHub page here: https://cramerfam.github.io/CS601_TermProject_Cramer/index.html.

## About My Project

For my final project, I wanted to focus on some of the more advanced HTML and CSS techniques we learned about. In my full-time job, I work with a proprietary framework build on React, so I wanted to focus on things I don't do during the work day, things that let me flex some creativity. 

### Home Page

When you launch index.html, you will be taken to the homepage of my site. There you will see my name, and a simple garden themed navigation - you will notice a lot of garden theme throughout the site! I wanted to make the site a fun way to get to know me, instead of purely biographical, so I included a lot about my hobbies, my families hobbies, and some creative ways to share more about my background. In the garden, you will see a row of flowers. The flowers are lightly animated, so when you click on the ones that are links, they raise up, like you are "picking" them. Let's go left to right for the sake of ease. When you click on the leftmost flower link, you will be taken to...

### Family Baseball Map

My family and I love baseball. It started with my oldest son, who would play "baseball" in the hallway of our house with a paper towel tube and a squishy ball from about the time he could walk. Both my kids now play baseball, and our goal of visiting all 30 MLB baseball stadiums (in addition to as many minor league stadiums as we can) accounts for most of the big travel we do, and has already taken us to some pretty cool cities we might not have otherwise had a reason to visit. When you load the page, you will see a map with baseballs and teal dots on it, and instructions to hover over the dots. As the user moves around the map and hovers, info about the game we saw appears in the info box. 

I had never used the <map> or <area> features of HTML before, so this was a cool way to learn. I made the image of the map using Canva (I have a subscription) to very specific size constraints. I then opened the map image in the Preview app on my Mac, which allowed me to find the exact coordinates in pixels for the center of each of the circles on the map. Each dot, its center coordinates, and radius in pixels became a circle <area> element in the right size and location to cover the dot. From there, I assigned each <area> a city id name to match the location and gave it an `onFocus` event. As the user hovers over the dot, I use the id of the event to query the game data in our constants to pull the data for that game and render it. Next on the nav bar is...

### Garden

This section is based off of our grid/flexbox week of class. Working full-time, going to school part-time, and parenting two busy kids leaves me with almost no free time. The one hobby I do prioritize is my backyard garden. First, because I love gardening, but second, because it also feeds us nutritious foods, is a great way to teach my kids about the planet, and it gets them excited about trying new foods!

I created a responsive grid of real images from produce I have grown over the last few seasons in my garden. When you hover on the tile, it shows you the name of the produce. Clicking on the name takes you to one of my favorite recipes for that fruit or vegetable. In contrast to the baseball map, where the map is a very specific size and harder to make truly responsive, the garden page is responsive by design and works just as well on mobile as it does on desktop. Then we head to...

### True or Not?

A common ice breaker game for new groups of people to learn about each other is called Two Truths and a Lie. The idea is that you come up with three fun facts about yourself, but only two are true, the last is made up. The rest of the group has to try to pick which is which. I enjoyed the drag & drop lesson and knew I wanted to incorporate that in somehow, and this seemed to be a great way to do it!

When you first load the page, you will see a prompt to load the statement tiles. Pressing this button displays the list of statements the user has to sort into true or false, then disables the button to prevent additional loads. As they drag them into the columns below, they either get a success message with a short explanation of the statement or an error message prompting them to try again. As tiles get moved to the bottom columns, the starting container for the tiles shrinks, in order to keep most of the action visible on the page. Once you get them all correct, a secondary success message will appear. Lastly, the nav bar takes us to...

### Career Story

I have had a very meandering and nontraditional career. I went to college for media studies and film production, absolutely set on working with movies in some capacity. Then I got an internship working in broadcast production for television ads, and really enjoyed that, so that became my first job after graduation. It was really fun, but also a culture of high burnout. I left that job to try teaching, becoming a preschool teacher while I decided if I wanted to get a credential. While teaching, one of the parents of one of my students connected me to a role in the corporate communications and special events department where they worked. I was there for seven years, when I heard of an internal company program to train women without a techinical background to become software engineers. I took a leap, ended up getting into the program, and went through a 3-month fulltime bootcamp. From there, I have been a software engineer at my company for six years. In order to continue my career growth, I need to get a formal degree in computer science or software development, which is how I found myself here. When thinking about my career, I visualize it in chapters; each a distinct part of my life with special coworkers and memories.

I decided to represent this with a book and a pen that you click to write out the chapters of my career. Each click pulls the next index from an array of chapters, and "writes" them onto the blank page of the book. I hadn't really created a CSS animation before, but with a lot of research, trial, and error, I was able to create the handwritten effect I wanted for each chapter. Since so much of my career has been a surprise and not what I expected, I left the last chapter as a series of question marks - who knows where I will go from here!

### Conclusion

It was really fun and educational to try out so many new techniques for this site. It's also been really fun to come up with creative ways to represent myself, my career, my hobby, and my travels. Hopefully you've enjoyed this project too!

Technical notes: I incorporated HTML drag-and-drop API, CSS grid, flexbox, DOM manipulation, fetching from an "external" (self-created) API, JavaScript, and advanced CSS selectors - all of which we covered in this class. I also explored HTML map/area and CSS animations for completing my vision for the project. All images are either taken by me or created by me in Canva. The fonts come from Google. I validated my HTML & CSS files, checked the console for JS errors, and tested in both Chrome and Firefox on Mac. 