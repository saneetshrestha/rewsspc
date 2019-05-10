
$(document).ready(function(){

  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay:true,
    autoplaySpeed:2000,
  });
});


    
window.sr=ScrollReveal();
sr.reveal('.sTop',{
duration: 1500,
origin:"top",
distance:'100px'
});  
sr.reveal('.sRight',{
duration: 1500,
origin:"right",
distance:'200px'
});
sr.reveal('.sLeft',{
duration: 1500,
origin:"left",
distance:'200px'
});
sr.reveal('.sBottom',{
duration: 1500,
origin:"bottom",
distance:'100px'
});
sr.reveal('.sfade',{
duration: 1500,
origin:"right",
distance:'0'
});

$(window).scroll(function(){$('nav').toggleClass('scrolled', $(this).scrollTop() > 500);});
$(window).scroll(function(){$('nav .nav-link').toggleClass('text-color', $(this).scrollTop() > 500);});
$(window).scroll(function(){$('nav .logo-text').toggleClass('text-color', $(this).scrollTop() > 500);});
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

$(document).ready(function(){

  $('[data-fancybox="images"]').fancybox();
})