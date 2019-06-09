// show cart

(function() {
  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");

  cartInfo.addEventListener("click", function() {
    cart.classList.toggle("show-cart");
  })
})();

//add item to the cart

(function() {

  const cartBtn = document.querySelectorAll(".store-item-icon");

  cartBtn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      // console.log(event.target);

      if (event.target.parentElement.classList.contains("store-item-icon")) {
        let fullPath = event.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf("img") + 3;
        let partPath = fullPath.slice(pos);

        const item = {};
        item.img = `img-cart${partPath}`;
        let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
        item.name = name;

        //console.log(name);
        //console.log(item);

        const cartItem = document.createElement("div");
        cartItem.classList.add(
          "cart-item",
          "d-flex",
          "justify-content-between",
          "text-capitalize",
          "my-3"
        );
        cartItem.innerHTML = `
<img src = "${item.img}" class="img-fluid" rounded-circle" id="item-img" alt="">
<div class ="item-text">
 <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
</div>
<a href="#" id="cart-item-remove" clas="cart-item-remove">
 <i class="fas fa-trash"></i>
</a>
`;
        //select cart
        const cart = document.getElementById("cart");
        cart.insertBefore(cartItem, null);
        alert("item added to the cart");


      }

    })
  })
})();
