let Atr = [
{
    id: Atr2,
    name: "Victoria",
  Price: $40,
   
   
},
{
   id: Atr3,
    name: "My Way",
  Price: $20,
}
]
let cart=document.getElementsByClassName("Atr")
 let cart = JSON.parse(localStorage.getItem('cart')) || [];
  function addToCart(product) {
     cart.push(product); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    updateCartUI();
   }
   function updateCartUI() { 
    const cartItemsContainer = document.querySelector('.cart-items');
     cartItemsContainer.innerHTML = '';
      let total = 0;
       cart.forEach(item => {
         cartItemsContainer.innerHTML += `<p>${item.name} - ${item.price} $</p>`;
          total += item.price;
         });
          document.querySelector('.total-price').innerText = total;
         }
          
           document.querySelectorAll('.add-to-cart').forEach(button => { 
            button.addEventListener('click', (e) => {
               const productDiv = e.target.closest('.Atr');const product = { id: productDiv.dataset.id, name: productDiv.dataset.name, price: parseInt(productDiv.dataset.price) }; addToCart(product); }); }); 