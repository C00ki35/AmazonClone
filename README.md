
## Amazon Shop Clone

Followed a Youtube live broadcast tutorial from the Clever Programmer (a link to this fantastic tutorial below) to create a clone of the Amazon website. Originally the cart showed each product on a seperate line, even if it had already been added -for example if the PS4 was added twice it would be on two seperate rows on the cart page. Also each product was hard-coded into each page and there was no view product page. I added the following:

- The cart would show one instance of any product that was added with the 'add to cart' button. If the button was clicked multiply times it would increase the quantity value.
- Added products to a Google's firestore as opposed to hard-coding them into the page
- Added a product page where product info can be viewed in more detail.
- Added a carousel to homepage
- Added further CSS to change colour of cart quantity once item has been added

Please note: The display is not responsive and is best viewed on larger screens.

### `To test the application locally:`

- git clone https://github.com/C00ki35/AmazonClone.git
- cd Amazon-clone
- npm intstall
- npm start


The hosted version of the game can be found here: 
https://shopclone-a2700.web.app


### `Tutorial link:`
https://www.youtube.com/watch?v=1_IYL9ZMR_Y&t=1183s
