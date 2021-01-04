//header nav
const navDropdown = document.querySelector('.header nav ul')
const navDropdownButton = document.querySelector('.header nav .nav-button')

navDropdownButton.addEventListener('click', e=>{
  navDropdown.classList.toggle('show')
})

// menu nav
const menuNavButton= document.querySelector('#changing-menu-nav');
const menuNavChoise= document.querySelector('.menu');

menuNavButton.addEventListener('click', e=>{
    
    if(e.target.innerText === 'Main Courses'){
       
        menuNavChoise.childNodes[1].classList.add('show')
        menuNavChoise.childNodes[3].classList.remove('show')
        menuNavChoise.childNodes[5].classList.remove('show')
    }else if(e.target.innerText === 'Drinks'){
        
        menuNavChoise.childNodes[1].classList.remove('show')
        menuNavChoise.childNodes[3].classList.add('show')
        menuNavChoise.childNodes[5].classList.remove('show')
    }else if(e.target.innerText === 'Deserts'){
        
        menuNavChoise.childNodes[1].classList.remove('show')
        menuNavChoise.childNodes[3].classList.remove('show')
        menuNavChoise.childNodes[5].classList.add('show')
    }
})

//the space sliter
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}

// sending emails for booking

const form= document.querySelector('.emails .form form');

form.addEventListener('submit', ()=>{

   fetch(`/book/${form.childNodes[1].value}/${form.childNodes[3].value}/${form.childNodes[5].value}/${form.childNodes[7].value}`).then(function (res) {
    var data= res.json()
    return data
  }).then(function(data){
    console.log(data)
  })
  .catch(function (err) {
    console.log(err);
  });

  form.reset()
})

//onlicks to scroll

//sections
const emailsSection= document.querySelector('.emails')
const menuSection= document.querySelector('.menu')
const specialsSection= document.querySelector('#first-menu')
const eventsSection= document.querySelector('.cater')
const aboutSection= document.querySelector('.about')

//buttons top nav
const bookingButton1= document.querySelector('#booking-button')
const menuButton1= document.querySelector('#menu-button-1')
const aboutUsButton1= document.querySelector('#about-us-button-1')
const servicesButton1= document.querySelector('#services-button-1')
const specialsButton1= document.querySelector('#specials-button-1')
//buttons footer
const bookingButton2= document.querySelector('#booking-button-2')
const menuButton2= document.querySelector('#menu-button-2')
const aboutUsButton2= document.querySelector('#about-us-button-2')
const servicesButton2= document.querySelector('#services-button-2')
const specialsButton2= document.querySelector('#specials-button-2')

const bookingButton3= document.querySelector('#booking-button-3')


//nav buttons to scroll
bookingButton1.addEventListener('click', e=>{
  e.preventDefault()
  emailsSection.scrollIntoView();
})
menuButton1.addEventListener('click', e=>{
  e.preventDefault();
  menuSection.scrollIntoView();
})
specialsButton1.addEventListener('click', e=>{
  e.preventDefault();
  specialsSection.scrollIntoView();
})
servicesButton1.addEventListener('click', e=>{
  e.preventDefault();
  eventsSection.scrollIntoView();
})
aboutUsButton1.addEventListener('click', e=>{
  e.preventDefault();
  aboutSection.scrollIntoView();
})
//footer buttons to scroll
bookingButton2.addEventListener('click', e=>{
  e.preventDefault()
  emailsSection.scrollIntoView();
})
menuButton2.addEventListener('click', e=>{
  e.preventDefault();
  menuSection.scrollIntoView();
})
specialsButton2.addEventListener('click', e=>{
  e.preventDefault();
  specialsSection.scrollIntoView();
})
servicesButton2.addEventListener('click', e=>{
  e.preventDefault();
  eventsSection.scrollIntoView();
})
aboutUsButton2.addEventListener('click', e=>{
  e.preventDefault();
  aboutSection.scrollIntoView();
})

bookingButton3.addEventListener('click', e=>{
  e.preventDefault();
  emailsSection.scrollIntoView();
})



