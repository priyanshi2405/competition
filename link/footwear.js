// document.querySelector(".add-to-cart").addEventListener("click", function () {
//     this.innerHTML = '<i class="fa-solid fa-check"></i> Added to cart';
//     this.disabled = true;

//     setTimeout(() => {
//         this.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Add to cart';
//         this.disabled = false;
//     }, 1600);
// });

// document.querySelector(".add-to-cart").addEventListener("click", function () {
//     this.innerHTML = '<i class="fa-solid fa-check"></i> Added to cart';
//     this.style.backgroundColor = "#22c55e";
//     this.style.color = "#ffffff";
//     this.disabled = true;
  
//     setTimeout(() => {
//       this.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Add to cart';
//       this.style.backgroundColor = "green";
//       this.style.color = "";
//       this.disabled = false;
//     }, 1600);
//   });


document.querySelectorAll(".add-to-cart").forEach(function (button) {
    button.addEventListener("click", function () {
      this.innerHTML = '<i class="fa-solid fa-check"></i> Added to cart';
      this.style.backgroundColor = "#80ff80";
     this.style.color = "black";
      this.disabled = true;
  
      setTimeout(() => {
        this.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Add to cart';
        this.style.backgroundColor = "green" ;
        this.style.color = ""
        this.disabled = false;
      }, 1600);
    });
  });