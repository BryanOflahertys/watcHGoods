let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};




var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  

  // Clear previous error messages
  var errorElements = document.getElementsByClassName('error');
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].innerHTML = '';
  }

  // Validate inputs
  var fullName = document.getElementById('full_name').value.trim();
  var email = document.getElementById('email').value.trim();
  var countryRegion = document.getElementById('country_region').value.trim();
  var message = document.getElementById('message').value.trim();
  var agreement = document.getElementById('agreement').checked;

  var isValid = true;

  if (fullName === '') {
    showError('full_name', 'Please enter your full name.');
    isValid = false;
  }

  if (email === '') {
    showError('email', 'Please enter your email address.');
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError
  }
});


// var swiper = new Swiper(".team-slider", {
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 10,
//     breakpoints: {
//       "0": {
//         slidesPerView: 1,
//         autoplay:{
//             delay:700,
//             disableOnInteraction:false,
//         },
//       },
//       "768": {
//         slidesPerView: 2,
          
//       },
//       "1020": {
//         slidesPerView: 3,
          
//       },
//     },
//   });