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
/*
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
*/

function scrollMenu(){
   const anchors = document.querySelectorAll('a[href*="#"]:not([href="#"]');
   animationTime = 300;
   framesCount = 15;
   anchors.forEach(item => {
   item.addEventListener('click', function(e) {
   e.preventDefault();
   let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
// запускаем интервал, в котором
   let scroller = setInterval(function() {
   // считаем на сколько скроллить за 1 такт
   let scrollBy = coordY / framesCount;
   // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
   // и дно страницы не достигнуто
   if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
   // то скроллим на к-во пикселей, которое соответствует одному такту
   window.scrollBy(0, scrollBy);
   } else {
   // иначе добираемся до элемента и выходим из интервала
   window.scrollTo(0, coordY);
   clearInterval(scroller);
   }
   // время интервала равняется частному от времени анимации и к-ва кадров
   }, animationTime / framesCount);
   });
   });
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
   } else {
      scrollButton.classList.remove("active");
   }
}

function goUp() {
   if (window.pageYOffset > 0) {
     window.scrollBy(0, -80);
     setTimeout(goUp, 0);
   };
   document.querySelector(".active").classList.remove("active");
   document.querySelectorAll('[href="#home"]')[0].classList.add("active")
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