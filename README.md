Jack Weinstein Assignment 1
###########################################################################################################

Technical Achievements:
1. Style Rules
.bar
Visual appearance: Defines the bar's width, height, background color, and rounded corners (border-radius).
Positioning: Makes the bar movable with JavaScript by using position: absolute.

.mainPara, .majorsText
Text Alignment: Centers the text using text-align: center.
Margins: Adds spacing around the paragraphs for readability.
Typography: Controls font size, font family, and makes .majorText bold with font-weight: 800.

.title-text,  .header2
Text Alignment: Centers the headers.
Typography: Sets font sizes, uses "Salsa" font, and applies a specific color to .header2.

.section
Flexbox: Enables flexbox layout using display: flex.
Positioning: Currently, margin-left: 500px is indenting the section from the left. This isn't necessarily related to centering.

.text-content
Flexbox: Allows content within this element to take up the available space (flex: 1).

.divList
Text Alignment: Centers content within this div

.list
Display: Arranges the list items as inline blocks for horizontal placement.
Text Alignment: Aligns list item text to the left.
Typography: Controls font size and font family.

.img
Responsiveness: max-width: 300px and height: auto make the image adapt to its container while maintaining aspect ratio.
Rounded Corners: Applies a subtle curved look.
###########################################################################################################

2. Bar Animation
simple rectanglular bar was created and animated to bounce back and forth across the screen. This was not very challenging as I
have made animations before in software engineering.
- width of screen found to know when the bar reaches the edge
- bar speed global varible can be adjusted
- function updates the bar.style.left to move the bar
###########################################################################################################

3. HTML Tags:
Core Structure
html: The root element of the HTML document, defining it as an HTML file.
head: Contains metadata about the document, including the title, links to stylesheets, and other resources.
body: Houses the visible content of your webpage.

Headers & Content
header: Typically used for site-wide navigation or introductory sections. It appropriately holds the main title of the page.
h1: Denotes the most important heading on the page.
section: Used to group related content. There are sections to break up information about the studies, and a dedicated section for "Experience".
h2: Indicates a subheading within a section. They are used for "Experience" subsections.
p: Represents paragraph text. The descriptions are correctly contained in these tags.

Lists
ul: Represents an unordered list of items. Used this for the skills and work experience.
li: Denotes an individual list item within a list.

Asides
aside: Indicates content that is somewhat related to the main content but could stand independently. This is suitable for the profile image.

Image
img: Embeds an image into the page. Included the essential src attribute to specify the image's path and alt text for accessibility.

###########################################################################################################

Design Achievements:
1. Color Pallete
This was cool, I liked that adobe converts the colors you chose into different types of code.
Going forward, I want to figure out how to define the colors variables in the css file so I can more easily re-refrence them.
See colorWheel.png for a screenshot of the wheel where the colors were selected.
See colorTheme.png for a screenshot of the complete color pallete.
###########################################################################################################

2. Font
I chose 'Salsa' as my font from google fonts. I added that font to each style for the different groups of text.
Going forward I'd like to see if I can set the global font to one thing and not have to change each style.
I liked how google fonts allows you to search by trending and to see whats popular.
