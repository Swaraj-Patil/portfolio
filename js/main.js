$(document).ready(function(){
    // ========================= Navbar effects on Scroll =============================
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

    // ================================== Typing animation ==============================

    var typed = new Typed(".typing", {
        strings: ["a Graphic Designer", "a Web Developer", "an App Developer", "a Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["a Graphic Designer", "a Web Developer", "an App Developer", "a Freelancer"],
        typeSpeed: 60,
        backSpeed: 35,
        loop: true
    });

    // ================================== Skills Bar filling animation =======================================

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll >= 1800){
            $('.innerDiv.html').css('width', '90%');
            $('.innerDiv.css').css('width', '60%');
            $('.innerDiv.js').css('width', '75%');
            $('.innerDiv.ps').css('width', '85%');
            $('.innerDiv.ai').css('width', '80%');
        }else if(scroll <= 1400){
            $('.innerDiv').css('width', '0%');
        }
    });
    // ================================== All non <a> elements made clickable here =====================================
    $('.service-web').click(function(){
        window.location = $(".box").data("location");
    });
    $('.pricing .wrapper .table .pkg-btn').click(function(){
        window.location = $(".pricing .wrapper .table .pkg-btn").data("location");
    });
    

});



// ================================ Image Carousel ==================================

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


// ===================================== Parallax Effect =====================================

document.addEventListener('mousemove', parallax);

function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX*speed)/100;
        const y = (window.innerHeight - e.pageY*speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}
