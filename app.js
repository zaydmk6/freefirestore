// Handle the "Buy Now" button click
function buyProduct(productId) {
  let productPrice = 0;
  if (productId === 1) {
    productPrice = 1000; // Price for Jewel 1
  } else if (productId === 2) {
    productPrice = 2000; // Price for Jewel 2
  }

  // Show payment form and fill the amount
  document.getElementById('payment-form').style.display = 'block';
  document.getElementById('payment-amount').value = productPrice;
}

// Handle payment form submission
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const email = document.getElementById('paypal-email').value;
  const amount = document.getElementById('payment-amount').value;

  if (!email) {
    alert('Please enter a valid PayPal email.');
    return;
  }

  // Here you can integrate PayPal API or simulate payment
  alert(`Payment of ${amount} to ${email} is successful!`);
  document.getElementById('payment-form').style.display = 'none';
});
