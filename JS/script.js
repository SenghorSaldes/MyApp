$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});



// Compteur personnes
var counter = localStorage.getItem('counter');

var initialValue = 0;

if (!counter) {
  counter = initialValue;
} else {
  counter = parseInt(counter);
}

function renderCounter() {
  $('#counter').html(counter);
}

$('.increase').on('click', function() {
  counter++;

  if (counter === 0) {
    counter = initialValue;
  }
  
  localStorage.setItem('counter', counter);
  renderCounter();
})

  renderCounter();

  if (!counter) {
    counter = initialValue;
  } else {
    counter = parseInt(counter);
  }
  
  function renderCounter() {
    $('#counter').html(counter);
  }
  
  $('.decrease').on('click', function() {
    counter--;
  
    if (counter === 0) {
      counter = initialValue;
    }
    
    localStorage.setItem('counter', counter);
    renderCounter();
  })


  function clearAll() {
    window.localStorage.clear();
    counter = initiValue;
    renderCounter();
  }


  function test(){
    console.log("trouducl");
  }



// DOGCOUNTER 
var dog = localStorage.getItem('counter_dog');
var firstValue = 0;
var MyObj, x;
      
MyObj = { "chien": 30, "G??n??rale": 20, "Velo": 12}
x = MyObj["chien"]
document.getElementById("counter_dog").innerHTML = x; 


if (!dog) {
  dog = initialValue;
} else {
  dog = parseInt(dog);
}

function renderDogCounter() {
  $('#dog').html(dog);
}

$('.box').on('click', function() {
  dog++;

  if (counter === 0) {
    dog = initialValue;
  }
  
  localStorage.setItem('dog', dog);
  renderDogCounter();
})

  renderDogCounter();