const menuHamburger = document.querySelector(".menu-hamburger");
const wrapperLogo = document.querySelector(".wrapper-logo");
const menu = document.querySelector(".nav__ul");
const trainersInfo = document.querySelectorAll(".div-trainers--info");
const wrapperInfo = document.querySelectorAll(".wrapper-trainers-info");
const blogThumb = document.querySelectorAll(".div-blog-thumb");
const span = document.querySelectorAll(".span");
const linkBlogThumb = document.querySelectorAll(".a-blog");
const thumbTrainer = document.querySelectorAll(".heading5");
const divPrices = document.querySelectorAll(".div-prices");
const pricingTitle = document.querySelectorAll(".h3-pricing-title");
const priceWrapper = document.querySelectorAll(".price-wrapper");
const pricingLi = document.querySelectorAll(".ul-pricing__li");
const btnSignUp = document.querySelectorAll(".btn-sign-up");

//desaparece o aaparece el menu hamburguesa mobile al hacer clcik
menuHamburger.addEventListener("click", ()=>{
    if(menu.classList.contains("is-hidden")){
        menu.classList.add("is-visible");
        menu.classList.remove("is-hidden");
        wrapperLogo.style.borderBottom = "1px solid #999";
    }else{
        menu.classList.add("is-hidden");
        menu.classList.remove("is-visible");
        wrapperLogo.style.border = "none";
    }
});

//al pasar el mouse sobre los entrenadores aparece su info y
//al dejar el mouse desaparece la info
for(let i=0;i<wrapperInfo.length;i++){
    wrapperInfo[i].addEventListener("mouseenter", function(){
        trainersInfo[i].classList.add("is-flex");
        trainersInfo[i].classList.remove("is-hidden");
    });
}

for(let i=0;i<wrapperInfo.length;i++){
    wrapperInfo[i].addEventListener("mouseleave", function(){
        trainersInfo[i].classList.add("is-hidden");
        trainersInfo[i].classList.remove("is-flex");
    });
}

//al hacer hover en las thumg del blog cambian color:#fff
for(let i=0;i<blogThumb.length;i++){
    blogThumb[i].addEventListener("mouseenter", function(){
        span[i].classList.add("span--white");
        linkBlogThumb[i].classList.add("a-blog--white");
        thumbTrainer[i].classList.add("heading5--white");
    });
}

//al salir del hover vuelve a la normalidad
for(let i=0;i<blogThumb.length;i++){
    blogThumb[i].addEventListener("mouseleave", function(){
    span[i].classList.remove("span--white");
    linkBlogThumb[i].classList.remove("a-blog--white");
    thumbTrainer[i].classList.remove("heading5--white");    
    });
}

//al entrar div de precios cambia la estetica
for(let i=0;i<divPrices.length;i++){
    divPrices[i].addEventListener("mouseenter", function(){
        divPrices[i].style.transition="all 1.5s ease";
        divPrices[i].style.backgroundColor="white";
        pricingTitle[i].style.color="#444";
        priceWrapper[i].style.backgroundColor="#222";
        for(let i=0; i<pricingLi.length;i++){
            pricingLi[i].style.color="#444";
        }
        btnSignUp[i].style.visibility ="visible";
    });
}

//al salir del div de precios vuelve ala normalidad
for(let i=0;i<divPrices.length;i++){
    divPrices[i].addEventListener("mouseleave", function(){
        divPrices[i].style.backgroundColor="transparent";
        pricingTitle[i].style.color="#fff";
        priceWrapper[i].style.backgroundColor="#27253A";
        for(let i=0; i<pricingLi.length;i++){
            pricingLi[i].style.color="#fff";
        }
        btnSignUp[i].style.visibility ="hidden";
    });
}

//smooth scroll
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
