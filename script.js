let menuItems = document.querySelectorAll(".item");
menuItems.forEach(item => item.addEventListener("click", activeItem))

function activeItem(){
   let menuItem = event.target;
   document.querySelector(".active").classList.remove("active");
   menuItem.classList.add("active");
}