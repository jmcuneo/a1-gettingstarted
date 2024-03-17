Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Glitch

Ivy Bixler
http://a1-ivybixler.glitch.me

This project shows ...

## Technical Achievements
* **Styled page with CSS**: added rules for :root, .p, .head, #foot, #content, #catspace, #cat, #cat-1, #cat-2
  * root: declares variables for the colors i added from adobe colors see color palate.png it sets the background to white and sets the default font faily to the one i added from google fonts
  * .p is a class that I created to hold a heading and a paragraph tag to represent one subject being described
  * .head is a class for the different headers used i could have used h1, h2 but I did it this way for whatever reason
  * #foot is simply a div that holds all the content for the website footer
  * #content is a div that encompasses all of the content on the page, it contrains their width and adds padding to all sides
  * #catspace is a div that holds the different images of my cat, they spin when you click on them, she's so silly! 
  * #cat - cat 2 are ids for each of the cats there was absolutely a better way to inteligently space them out but spacing is why i separated each image into its own id, as well as for my javascript function which takes an id name as an perameter
  * table, th, td were styled simply to add a border
* **made cat spin in animation.js**
  * i originally way over complicated the animation bit, thats commented out below, it gave me a chance to screw around with js's anonymous functions, neat
  * i also originally planned on the cat bouncing across the bottom of the screen but felt that a simple spin would suffice
  * triggerSpin is a function that takes a cad id string, selects its element, sets a 2 second duration for the spin there is an helper function that takes the amount of time for the animation as an argument. if start is uninitialized it starts at the duration of 2000, then the angle is calulated as progress divided by duration which gives the angle the cat should be rotated to. the requestAnimationFrame function is called and the animate helper is passed. the animationframe function iterates through the duration and the cat spins for 2 seconds.
* **used 5 semantic tags**
  * footer was used to hold the content for the footer rendered by the browser as well as a link to the animation.js script, this was done so the page finishes loading before the javascript is loaded in. This was originally done to fix a bug in my first attempt.
  * img was used to add a couple pictures of my cat
  * table was used to add a pros and cons table of a few different languages
  * ol was used to make an ordered list of different languages
  * header was used to hold the title, chaset, and links to resources such as the font and the stylesheet


## Design Achievements
* **Used the Nosifer Font from Google Fonts**: I used Nosifer as the font for the primary copy text in my site.
* **Used a color palate from adobe color**: [here](https://fonts.google.com/specimen/Nosifer?query=nos)
