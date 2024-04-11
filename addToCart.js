function addToCart(productName, price, image) {
  // Check if a cart already exists in local storage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add the item to the cart
  cart.push({ name: productName, price: price, img: image });

  // Save the cart back to local storage
  localStorage.setItem("cart", JSON.stringify(cart));
}
