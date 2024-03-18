Nora Cleary
https://a1-noracleary.glitch.me/

## Technical Achievements
- **Styled page with CSS**:
    - Added rule for h1 tag to decrease the margin space between the h1 text and the following line (margin-bottom: -20px;) -> Made page more cohesive without large gaps between lines. Challenging to figure out how to adjust the pixels, after trial and error discovered that the default margin is 0px, so to make it smaller I made the margin negative.
    - Added rule for blockquote tag to italicize the font (font-style: italics;) and font color (color: white;) -> emphasized importance and made it stand out. Challenging to figure out the best way to organize in order to make the CSS rule most effective. 
    - Made the table a different color (background-color: xxx;) and changed the font -> differentiate from the rest of the text, made more readable
    - Top row of the table a seperate color from the bottom rows. Challenging to make to the CSS file more efficient. I wanted to write rules for all the boxes in the table, but also specify additional rules for the top row of boxes. Eventually figured out I can write rules for more than one element and add to just one element in a seperate rule - reduces redundancy.
    - Added a rule to make all text in the table alligned on the left, bolded and padded. Made borders of table thicker.
    - Used ID's to style the images/animation. Used #IDName to write CSS rules -> allowed me to easily edit size of images and overlay the two. Challenging to work with the images - lots of experiementing with the relotive and abolute position rules, diffucult to format.
    - Added a heading class in order to group multiple tags together and style as one -> experimental - would like to learn more about classes in the future.
    - Added a rule for two sections (section and aside) using float to divide the screen in half. made section to the right and aside to the left.Challenging to figure out how font/table size effected the format. It was difficult to get them to allign horizontally but evenutaukly figured out the percentages cannot exceed eachother.
- **Javascript Animation**:
    - Used https://youtu.be/vqkzxwKlsqY?si=ZAehT70Dqz0oslE_ to help. Biggest challenge was due to my unfamilirity with JS - I did not make a seperate JS file and was trying to write directly in the existing server.js file. After making a seperate animation.js file and linking in teh server.js file, it was mostly trial and error to get familiar with the code.
    - Wrote a function and called it in HTML when the page is loaded. Challenging to learn the syntax of JS - how to create variables (I had my position variable set as const for a while and was not able to increase my position on the screen) and how to format function.
- **Other Semantic HTML Tags**:
    - Link -> Used <a href> attribute in order to link a page I quoted in my website. I wanted the title of the hyperlink to be custom, so I used the href. 
    - Table -> I made a table to display my technology experience to make it clear and concise. The challenge was mostly with implementing (some rows are blank - my solution was empty <p></p> tags, there most likely is a better solution) and design (lots of rules in CSS file - th, td, table)
    - Image -> Used the image tag to include the background and object for my animation. The biggest challenege was figureing out I needed to add the image files to the correct directory, and point to them in the server.js file.

## Design Achievements
    - Used color pallete and implemented in various CSS rules (body, section, table, blockquote) - saved in a1-colorPalette.jpg. Challenging to make engaging as well as readable.
    - Used the Oswald font from google fronts for my primary font. Used arial in the table to make more readable. Only challenge was appending the server.js file to accept the new link.
    - Used summary/details tags to make an interactive dropdown style list of CS courses.
