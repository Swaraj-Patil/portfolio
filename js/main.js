$(document).ready(function(){
    //Navbar effects on Scroll
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
    });

    //Toggle Menu button
    $('.menu-btn').on('click',function(){
        $('.navbar .menu').toggleClass('active');        
        $('.menu-btn i').toggleClass('active');
    });

    //Typing animation
    var typed = new Typed(".typing", {
        strings: ["a Graphic Designer", "a Web Developer", "an App Developer"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["a Graphic Designer", "a Web Developer", "an App Developer"],
        typeSpeed: 60,
        backSpeed: 35,
        loop: true
    });








});

// Image Carousel
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

// Manual Slideshow
var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    });
});

//Automatic Slideshow
var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){

            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;
            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
}
repeat();
