var cartContainer = document.querySelector('.cart-container');
var productButtons = document.querySelectorAll('.product-item button');

productButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    var productItem = event.target.parentNode;
    var productImage = productItem.querySelector('img').src;
    var productName = productItem.querySelector('h2').textContent;
    var productPrice = productItem.querySelector('p').textContent;
    
    addItemToCart(productImage, productName, productPrice);
  });
});

function addItemToCart(image, name, price) {
  var cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  
  var itemImage = document.createElement('img');
  itemImage.src = image;
  cartItem.appendChild(itemImage);
  
  var itemName = document.createElement('p');
  itemName.textContent = name;
  cartItem.appendChild(itemName);
  
  var itemPrice = document.createElement('p');
  itemPrice.textContent = price;
  cartItem.appendChild(itemPrice);
  
  var removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-button');
  removeButton.addEventListener('click', function() {
    cartItem.remove();
    updateCartTotal();
  });
  cartItem.appendChild(removeButton);
  
  cartContainer.appendChild(cartItem);
  
  updateCartTotal();
}

function updateCartTotal() {
  var cartItems = document.querySelectorAll('.cart-item');
  var total = 0;
  cartItems.forEach(function(item) {
    var priceElement = item.querySelector('p:last-of-type');
    var price = parseFloat(priceElement.textContent.replace('تومان', '').replace(/[^0-9]/g, ''));
    total += price;
  });
  
  var cartTotal = document.querySelector('.cart-total');
  cartTotal.textContent = "مبلغ قابل پرداخت: " + numberWithCommas(total) + "تومان";
}


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
