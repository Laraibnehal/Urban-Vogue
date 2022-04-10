$document.ready(function(){
 $('.product-slider').slick({
     slidesToShow: 3
 });
 $('.nav-trigger').click(function(){
     $('.site-content-wrapper').toggleClass('scaled');
 })
});
