Era Kalaja
http://a1-erakalaja.glitch.me

This project shows some general information about me and my experience with Computer Science courses at WPI. In order to render the page accordingly I used the following files: index.html (HTML used for structuring and organizing how the content on the page is presented), animation.js (javascript used for behavior of the page, I was able to create a class to be used in CSS to move the positioning of my star image and thereby create an animation of a shotting star), style.css(CSS used to style my page with the colors and positions I desired). 

## Technical Achievements
- **Styled page with CSS**: Added rules for the p, header, table, td, tr, ul, article, footer, star(refers to my image of a shooting star), animate(class added from javascript to animate the star/change its placement linearly), and h2. The numerous style rules I implemented helped me refresh my memory of how to style with css. It was initially a challenge for me to recall the syntax of creating your own tag (for example I used #star to reference the image tag id "star"), at first I thought it wasn't possible, but after some searching I understood the syntax. 
    - **Why/What I used these style rules for**:
        - p: text color and alignment
        - header: text color, decoration(underline), alignment, and padding(placement)
        - table, td, tr:  border and text color 
        - ul:  text alignment, color, list-style
        - article: text color and alignment
        - footer: background color, text color and alignment
        - star: image padding and width 
        - animate: moving star linearly from start position to end position 
        - h2: background color, text color and alignment

- **Added a javascript animation**: I created an animation on my page by firstly referencing the image in my HTML. Then in javascript I added a call to animate to create it as class referenced in css, doing this will activate the movement visually by changing the placement of the star. Then in CSS I added a keyframes function that transforms the placement of the star from start to finish which is called by .animate which defines how the image will get from start to finish. This was something new I learned about and found really interesting since I interpreted CSS to be more static. This was a challenge for me since I hadn't coded an animation in javascript before, I knew I needed the image to move across the screen incrementally to make it look animated but my initial tries werent doing what I wanted them to. I did a deep search into animation techniques and found an approach that changes the position of the image with the help of CSS style tag .animate. 

- **Used different HTML tags**: Experimented with the following semantic HTML tags: links(link), images(img), tables(table,tr,td), header(header), footer(footer), lists(ul,li), articles(article), body(body), paragraphs(p), breaks(br). This was a challenge since I couldn't recall how to create custom tags that can be referenced specifically, but once I figured out the id parameter this challenge was overcome. 


## Design Achievements
- **Used the Roboto Font from Google Fonts**: I used Roboto as the font for the primary copy text in my site. This was initially challenge since I had to go through the Google API to understand how to properly reference the font in both my html and css files. 

- **Created and used a Color Palette from Adobe**: I created an Adobe color palette using the triad setting to generate 6 colors. I then implemented this color palette into my CSS by using the hex codes for various sections (ie. color fonts, page background, etc.). I have included a screenshot of my color wheel with the associated hex values of my palette in the repo. I actually had to mock up multiple color palettes because some of the colors in my original palette were illegible on the website. It was challenging to create a good looking palette that also had legible colors. 
