//  active menu item
function menuActiveItem(){
   const menuItems = document.querySelectorAll(".item");
   menuItems.forEach(item => item.addEventListener("click", activeItem));
}

function activeItem(){
   let menuItem = event.target;
   document.querySelector(".active").classList.remove("active");
   menuItem.classList.add("active");
}
// scroll menu
function scrollMenu(){
   const anchors = document.querySelectorAll('a[href*="#"]:not([href="#"]');
   anchors.forEach(anchor =>{
      anchor.addEventListener("click", function (e) {
         e.preventDefault();
         const blockID = anchor.getAttribute("href").substr(1);
         document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      })
   })
}

// go to top
let scrollButton = document.querySelector(".scroll_top");

function goToTop(){
   window.addEventListener("scroll", trackScroll);
   scrollButton.addEventListener("click", goUp);
}

function trackScroll() {
   let scrolled = window.scrollY + 200;
   let y = document.documentElement.clientHeight;

   if (scrolled > y) {
      scrollButton.classList.add("active");
   }
   if (scrolled < y) {
      scrollButton.classList.remove("active");
   }
 }

function goUp() {
   if (window.pageYOffset > 0) {
     window.scrollBy(0, -80);
     setTimeout(goUp, 0);
   };
   document.querySelector(".active").classList.remove("active");
   document.querySelector('[href="#home"]').classList.add("active")
 }

// pop-up open

function popupOpen(){
   document.querySelector("#item-contact").addEventListener("click", popup);
}

function popup(){
   document.querySelector(".overlay").classList.add("visible");
   document.querySelector(".popup").classList.add("visible");
}

// to active pop-up button

function checkBox(){
   let checkBox = document.querySelector("#check");
   let popButton = document.querySelector(".pop-button");
   (checkBox.checked)?popButton.removeAttribute("disabled"): popButton.setAttribute("disabled","true"); 
}

// pop-up close 

function popupClose(){
   document.querySelector(".pop-button").addEventListener('submit', close);
   document.querySelector(".close").addEventListener('click', close);
   document.querySelector(".overlay").addEventListener('click', close);
}

function close(){
   document.querySelector(".overlay").classList.remove("visible");
   document.querySelector(".popup").classList.remove("visible");
   document.querySelector(".popup").reset();
}

menuActiveItem()
scrollMenu()
goToTop()
popupOpen()
popupClose()