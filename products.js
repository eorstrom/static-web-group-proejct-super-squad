var products = [];
var productContent = document.getElementsByClassName("products");

var product1 = {
    name: "Authentic Cowboy Hat",
    url: "http://www.fashionsthree.com/wp-content/uploads/2015/08/cowboy-hats-11.jpg",
    price: "$10.99",
    description: "An authentic cowboy hat to showcase your country style while touring around Music City."
};
var product2 = {
    name: "Cowboy Boots",
    url: "http://www.rustyzipper.com/full/163315L.jpg",
    price: "$39.99",
    description: "A perfect outfit pairing for the cowboy hat."
};
var product3 = {
    name: "Southern Artisian Chocolate Bars",
    url: "http://blog.imogeneandwillie.com/wp-content/uploads/2012/09/oliveSinclair-640x5381.jpg",
    price: "$25.99",
    description: "Some of the most delicious chocolate bars you will ever eat"
};
var product4 = {
    name: "Belt Buckle",
    url: "http://ecx.images-amazon.com/images/I/817%2BjCDD7SL._UL1500_.jpg",
    price: "$19.99",
    description: "Complete your outfit with this over-sized belt buckle."
};
var product5 = {
    name: "Corsair Distillery Tour Tickets",
    url: "https://pbs.twimg.com/media/CVflwVAWUAEwT8k.jpg",
    price: "$25.99 per ticket",
    description: "Tour the Corsair Distillery"
};
var product6 = {
    name: "Nashville Predators: Pekka Rinne Jersey",
    url: "http://www.dickssportinggoods.com/graphics/product_images/pDSP1-14413812dt.jpg",
    price: "$49.99",
    description: "Nashville Predators hockey jersey - Pekka Rinne"
};
var product7 = {
    name: "Loveless Cafe",
    url: "https://pantograph0.goldbely.com/uploads/product_image/image/6981/jammin-biscuits.df030c77ef14aa17c26e92c36a3d4f89.jpg",
    price: "$19.99",
    description: "Food voucher for Loveless Cafe."
};
var product8 = {
    name: "Hatch Show Print",
    url: "http://static1.squarespace.com/static/54f600d9e4b01218eac2804d/t/564133e4e4b0250517e9b0b9/1447113712524/Posters+at+the+Hatch+Show+Print+Gift+Shop",
    price: "$21.99",
    description: "Historic screenprinted posters featuring Nashville icons"
};

// Each Item MUST have: name, description, price, and URL for the product image

// Add each object into the array using .push()
products.push(product1, product2, product3, product4, product5, product6, product7, product8);
console.log(products);


// Implement a for loop over each object to add the different parts of the DOM

for (var i = 0; i < products.length; i++) {
    var contents = "";
    contents += '<h2>' + products[i].name + '</h2>';
    contents += '<img src="' + products[i].url +'"/>';
    contents += '<p>Price: ' + products[i].price + '</p>' + '<hr>';
    contents += '<p class="product-description">Description: ' + products[i].description + '</p>';
    productContent[i].innerHTML = contents;
};

