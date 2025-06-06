function subscribe() {
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    sessionStorage.setItem("subscriberEmail", email);
    alert("Thanks for subscribing!");
  } else {
    alert("Please enter a valid email address.");
  }
}

function addToCart(itemName) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(itemName);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${itemName} added to cart.`);
}

function loadCartItems() {
  const cartList = document.getElementById("cartItems");
  if (!cartList) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    return;
  }

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}

function processOrder() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty. Add items before placing an order.");
    return;
  }

  if (sessionStorage.getItem("orderProcessed") === "true") {
    alert("Order already processed.");
    return;
  }

  sessionStorage.setItem("orderProcessed", "true");
  alert("Order successfully processed. Thank you!");
}

function clearCart() {
  localStorage.removeItem("cart");
  const cartList = document.getElementById("cartItems");
  if (cartList) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
  }
  alert("Cart has been cleared.");
}

document.addEventListener('DOMContentLoaded', () => {
  loadCartItems();

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      alert("Thank you for contacting us! We'll get back to you soon.");
      this.reset();
    });
  }

  const customOrderForm = document.getElementById('customOrderForm');
  if (customOrderForm) {
    customOrderForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const orderDetails = this.orderDetails.value.trim();

      if (!name || !email || !orderDetails) {
        alert('Please fill in all required fields.');
        return;
      }

      alert(`Thank you, ${name}! Your custom order request has been received. We will contact you soon.`);
      this.reset();
    });
  }
});



