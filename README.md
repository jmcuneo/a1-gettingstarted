Éamonn Prendergast
http://a1-eprendergast.glitch.me

This project shows ...

## Technical Achievements
- **Styled page with CSS**: Added rules for h# tags, header, img, footer, body, tables, as well as special rules for various ids and classes: title, imgdiv, site, tornado. I encountered quite a few issues both with deciding on how to style my page and how to implement it. I did not want an ugly website, so styling was rather important to me. I decided that I did not want my page to be too wide, so as to avoid it being an eyesore, so I put a big constraint on page width. I encountered major issues with my image styling in order to get it to respect width resitrctions while also maintaining aspect ratio. I solved this by putting it into a div with a specified width and setting max-width and max-height to 100% on the image. Another issue I encountered was with my styling of headers and footers. Due to my use of rounded corners for the main content of the page, when I applied background colors to my header and footer it created an ugly protuding rectangle that did not respect my nice rounded borders. I was able to solve this by hiding overflow on my top div. There was also an issue with their background color not extending to the full width of the "content" side of the page, so I had to figure out how to fill this, and was eventually able to do so by giving the header and footer tags negative margins, which allowed their colors to fill the page content.

- **Added simple javascript animation**: If the photograph of the tornado is clicked, an animation of a tornado crossing the page will appear. I wanted to have a nice animation that moved somewhat "dynamically" rather than in just a straight line. I had to figure out how to use javascript's Math.sin function in order ot have movement that was both fluid and not just in a straight line. It was also a challenge at first to not have the animation stretch out the page once it reached the end, as setting the left tag to 100% would result in the tornado going past the right edge of the screen. I eventually settled on reversing it, and going from 100% to 0% right, which solved my stretching problem.

- **Added HTML tags**: Tags for a table, two links, images, a header, and a footer were added. When I first created my table, I had issues with the rows not working. I realized that each row would have to be it's own tag, instead of being able to work with two sections for the two columns I had. It was somewhat confusing when my initial attempt at making the table stretched beyond the second column. I also encountered issues with serving images locally, even with modifications to the server.js, so I decided to host them externally in order to resolve my issue. While using the header and footer tags was not particularly difficult, I had trouble deciding how exactly to use them. I decided on a traditional footer with a copyright notice and a mailto link, and a simple header only containing the page title.

## Design Achievements
- **Used the UnifrakturCook Font from Google Fonts**: Used for h# tags. Ran into some difficulties with actually using the font once linked to my site. At first the font refused to render for me, and I was confused as to why my seemingly correct styling was not working. I eventually found that I had made a typo in my link to Google's servers.

- **Used a color palette from Adboe**: See color palette below. While actually using the colors themselves was not particularly hard, it was difficult to decide on a final color palette. I finally decided on a simple color palette from the adobe 'Shades' option, which allowed for a visual look (with various shades of gray) that was pleasing to my eyes.

![Adobe Color Palette](https://i.postimg.cc/g0sqtKzQ/adobecolor.png)
