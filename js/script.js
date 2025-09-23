qlet cart = [];
function addToCart(name, price){
  cart.push({name, price});
  renderCart();
}
function renderCart(){
  let cartDiv = document.getElementById('cart-items');
  cartDiv.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    cartDiv.innerHTML += `<div class="cart-item">${item.name} - ₹${item.price}</div>`;
  });
  document.getElementById('total').innerText = 'Total: ₹'+total;
}
function checkout(){
  if(cart.length===0){ alert("Cart is empty!"); return; }
  alert("This is a demo checkout. No real payment is processed.");
  cart=[];
  renderCart();
}
