$(function(){

$('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="стрелкавправо"></img>',
   nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="стрелкавправо"></img>',
   asNavFor: '.slider-dots', 
});
$('.slider-dots').slick({
slidesToShow: 4,
slidesToScroll: 1,
asNavFor: '.header__slider',

});

$('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="стрелкавправо"></img>',
   nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="стрелкавправо"></img>',
   asNavFor: '.slider-map',
   focusOnSelect: true,
});

$('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,

})










});