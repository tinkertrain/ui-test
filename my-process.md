>###Notes on my thought process throught the exercise

#HTML

- I immediately noted there were some important parts missing at the top:
  - doctype > Included the html5 doctype
  - charset > Included the utf-8 charset
  - default language > chose "en" for this exercise
  - Added some conditional comments to target old IE browsers with classes (a bit overkill for this project, but we can target this browsers easily with this).
- Added ARIA roles for accesibility.

##Header

- Wrapped the header in a `<header>` tag for semantic purposes.


###Navigation

- Changed the `<div class="navigation">` for a `<nav>` html tag
- Regarding the logo: I thought the main navigation was confusing/redundant by having a home link *and* a logo since the common practice and what people are used to is that the logo *is* the home link, by looking at the way it was, they would click the logo (I know I would) and don't even notice the 'home' link at the beginning. So I removed that link and moved the logo at the beginning, eliminating redundancy and saving some space.

###Section[Main]

- Wrapped in an `<article>` tag each mini article, as they function independently (if they were taken out the page they still make sense).
- Image section: 
    - Implemented as an unordered list
    - Removed classes like `.first-image` and `.image-container`
    - Instead use `<figure>` and `<figcaption>` and css pseudo classes
    - Removed floats, use `display: inline-block` instead




#CSS

- All the styles are dumped into one file (styles.sass), so I started by dividing into modules and concerns:
  - All styles are to be moved out the main file (style.sass), this file will import all the other files.
  - Base: all styles and helpers are to be located here:
    - normalize.css (my choice whe it comes to a browser styles reset)
    - things like mixins, colour palette, fonts import, etc. would be located in their own file in this folder
  - Elements: Small modules that can be used through the site are located here:
      - Buttons
      - Lightbox
  - Sections: Sections of the page
      - Global: General styles that would apply to every page on the site
      - Header
      - Footer
      - Navigation
      - Body (the main section of the page)