Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Glitch

---

Brianna Sahagian
http://a1-briannasahagian.glitch.me

This project shows all design and technical achievements required for the first CS4241 assignment plus a special creative touch!

## Technical Achievements
- **Styled page with CSS**: Added rules for the body, t, table, th, and ul selectors. Also added seven classes for unique divs and other specific features. These extra classes include:<br>
&nbsp; [1] .background class for page background<br>
&nbsp; [2] .text_background class for the background behind the text on the page<br>
&nbsp; [3] .header_background class for the background behind the webpage title<br>
&nbsp; [4] .class_num class for the class numbers in the table<br>
&nbsp; [5] .class_name class for the class names in the table<br>
&nbsp; [6] .spawner_button class for the fish spawner button<br>
&nbsp; [7] .fish_div class for the fish animation div<br>
On these classes, I implemented many style rules. I will describe five of these below:<br>
&nbsp; [1] The display rule: I implemented display: flex for my container classes so that I could move text and other elements around inside these containers. My background, text_background, and header_background classes are all flex containers that implement this style rule.<br>
&nbsp; [2] The background_color rule: I implemented this rule to put colors from my color palette onto my webpage. The difference between this style rule and the color style rule (which I also used) is that the background_color rule colors the whole element (container, button, etc.) whereas the color style rule colors the text inside the element.<br>
&nbsp; [3] The font-weight, font-size rules, border, border-radius: I implemented these rules to determine different aspects about my text and table features. The font-weight determines boldness, the font-size determines text size, the border rule determines the size and solidity of a border line on an element, and the border-radius determines the roundness of an element (I used it for my button).<br>
&nbsp; [4] The visibility rule: I used this rule to determine when to hide and show my fish image to emulate spawning. visibility: hidden makes the image invisible while visibility: visible shows the image on the page. <br>
&nbsp; [5] The text-align rule: I used this rule to change the position of the text for the body and class_name selectors. The body of the page is aligned in the center, but the class_name data looked better aligned left in my opinion.

- **Added a simple JavaScript animation**: I added a fish animation to spawn and swim to the left across the screen of my webpage. Using my JavaScript functions I was able to make the fish show when the user clicked the "Fish Spawner" button and swim across the screen. If the user clicks the spawner button while a fish is already swimming, the fish's speed will randomize. Once the fish swims off the screen, the button will spawn another fish in the starting position.

- **Experimented with HTML tags**: I experimented with five different and interesting HTML semantic tags on my webpage.<br>
&nbsp; [1] I used the **ul** tag to include the list of CS experience that I have with each specific tool. I used the **li** tag to represent each bullet in the list.<br>
&nbsp; [2] I used the **table** tag to organize both the undergraduate and graduate CS courses I have taken. The **th** tags were used to denote the Class Number and Class Title columns of the table, the **tr** tags included the information within each table row. The **td** tags contained the actual data for each column (ex: CS2022 or Discrete Mathematics).<br>
&nbsp; [3] I used the **img** tag to allow me to put my fish gif on the page. I animated the gif myself using an external tool and then exported the gif from this external tool. The fish.gif is still in this directory, though I ended up using the asset link from glitch to ensure consistency across both the repo and the glitch page.
&nbsp; [4] I used the **span** tag to allow me to put colors on some of the text in a section of my page. I used it to color the "Undergraduate" and "Graduate" labels on my tables to ensure that the user knows the difference between these tables. I also used the tag to color the levels of experience differently and make those fields stand out in the bulleted list.<br>
&nbsp; [5] I used the **t** tag to customize some of my headers. I liked the spacing better for some of my headers using this tag instead of the built-in **h1** or **h2** tags, though I used these tags as well for other headers.<br>

## Design Achievements
- **Used a Blue/Purple Color Palette from adobe.com**: I used a blue and purple color palette that I created on adobe.com. This palette includes the following colors: #418FF0, #6241F0, #4158F0, #41C7F0, #9834FS, and #919DF0. I used the #418FF0 blue for my text_background class, the #4158F0 for my background class, the #919DF0 for my header_background class, and used the other three colors for my labeling. The #41C7F0 is the button color and Expert color. The #6241F0 labels the tables and Novice levels. The #9834FS labels the intermediate levels.
- **Used the BioRhyme Font from Google Fonts**: I used Google's BioRhyme font as the primary font in my webpage. The font was the perfect balance of interesting without going too far (I tried Tangerine and thought it was too fancy).

Overall I am very happy with how my webpage came out. My favorite part is my fish.gif that I created with an external animation tool and then moved across the screen on this page. I find that this homemade gif reflects my own unique artistic flare!