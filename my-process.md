#Notes on my thought process throught the exercise

##HTML

- I immediately noted there were some important parts missing at the top:
  - doctype > Included the html5 doctype
  - charset > Included the utf-8 charset
  - default language > chose "en" for this exercise
  - Added some conditional comments to target old IE browsers with classes (a bit overkill for this project, but we can target this browsers easily with this)

##CSS

- All the styles are dumped into one file (styles.sass), so I started by dividing into modules and concerns:
  - All styles are to be moved out the main file (style.sass), this file will import all the other files.
  - Base: all styles and helpers are to be located here:
    - normalize.css (my choice whe it comes to a browser styles reset)
    - things like mixins, colour palette, fonts import, etc. would be located in their own file in this folder