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

form.addEventListener('submit', e=>{
  e.preventDefault()

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






