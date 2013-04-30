# Lonely Planet UI Test

The purpose of this test is for you to show us how you would refactor some basic code if you were to write it in the scope of a large project.

The code in this repo works fine and will render a webpage but would *not* scale. How you refactor it is entirely up to you. You can split up the files, remove libraries, add libraries, rewrite the structure completely if you wish.

===========================
# Directions to get started
- Fork this repository
- Make your changes
- Submit a Pull Request


## Running the application

````bash
$ git clone <your fork>
$ bundle install
$ ruby app.rb
````

You should then be able to view the page at http://127.0.0.1:4567


## Compiling the assets

````bash
$ bundle exec guard
````

Guard will watch for any changes that you make to app/assets and publish them to public/assets


===========================
# What we would like to see

## HTML

- Update the html structure to use a style you would adopt in a large project.
- Feel free to use as many/few html5 elements as you would like.
- Comment on any decisions you have made that may be of interest.

## CSS

- The css is written in Sass. It's ugly and has no real structure to it.
- Refactor into a structure you would be happy with.
- Comment on any decisions you have made that may be of interest.

## JS

- There is a read more widget and a lightbox implemented on the page.
- The Javascript is written in coffeescript. It is fully functional but far from testable.
- Refactor it into your preferred style.
- Your code should be performant, scalable and testable.
- The finished product should be user friendly.
- Comment on any decisions you have made that may be of interest.


===========================
# Thanks :)

For taking the time to do this test. We don't expect you to spend hours on it but you should be able to give us a flavour of how you organise your code and how you make decisions.


