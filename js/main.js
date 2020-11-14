//Start spinner function 
function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.page', true);
    setVisible('#loading', false);
  });
  //end spinner function 
  //add class active on click 
  var header = document.getElementById("navbar");
  var navItem = header.getElementsByClassName("nav-item");
  for (var i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
  //remove class show on click
  function removeShow() {
    var nav=  document.getElementById('nav');
      nav.classList.remove('show');
     document.getElementById('navbar-toggler').classList.toggle('navbar-togglerClose');
  }
  //change toggler style on click 
  function AddClass(){
  var navToggle =   document.getElementById('navbar-toggler');
    
  }
  var navToggle =   document.getElementById('navbar-toggler');
  if(navToggle){
      navToggle.addEventListener('click', function(){
         this.classList.toggle('navbar-togglerClose');
    });
  }
  var navclose = document.querySelector('.navbar-togglerClose');
  if( navclose){
      navclose.addEventListener('click', function(){
        document.getElementById('nav').classList.remove('show');
    });
  }
 
  //jQuery function
  $(document).ready(function(){
    $(window).scroll(function(){
        if($(document).scrollTop() > 100){
            $('.navbar').addClass('scrolled');
            $('.scroll-dowen').addClass('opacity0')
        }
        else{
            $('.navbar').removeClass('scrolled');
            $('.scroll-dowen').removeClass('opacity0');
        }
    });
    //circlechart
   $('.circlechart').circlechart();
   //iso top
 let projects =$('.projects').isotope({
  itemSelector: '.item'
});
$('ul.filters').on('click', 'li', function(){
  let fiterValue = $(this).attr('data-filter');
  projects.isotope({filter: fiterValue});
  return false;
});
//add class Active ON click
$('li').click(function() { 
  $('li').removeClass('active'); 
  $(this).addClass('active'); 
});
//WOW function
new WOW().init();
//owl-clients
$('.owl-doctors').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsive:{
      0:{
         items:1,
         nav:false,
         loop:true
      },
      640:{
          items:1,
          nav:false,
          loop:true
      },
      768:{
        items:1,
        nav:false,
        loop:true
      },
      1000:{
          items:1,
          nav:false,
          loop:true,
      },
      1200:{
          items:1,
          nav:false,
          loop:true
      }
  
  }
});

});