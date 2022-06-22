
 /* Chargement debut */
$(window).load(function(){
    $('.preloader').fadeOut(1000);
});


$(document).ready(function() {

  /* Les Vegas Changement Img*/
  $(function() {
    $('body').vegas({
        slides: [
            { src: 'images/slide-1.jpg' },
            { src: 'images/slide-2.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });
  });


   /* Allez en haut */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })
      

  /* Stend de fou */
  new WOW({ mobile: false }).init();

  });

