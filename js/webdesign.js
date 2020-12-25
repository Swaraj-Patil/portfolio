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

    // ================================== All non <a> elements made clickable here =====================================
    $('.pricing .wrapper .table .btn').click(function(){
        window.location = $(".pricing .wrapper .table .pkg-btn").data("location");
    });
    

});

// ====================================== Carousel Effects ==============================
/*
document.addEventListener("DOMContentLoaded", () => {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        animationTimingFunc: 'ease-in-out',
        gap: 200,
        perView: 3
    }).mount();

    let prevBtn = document.getElementById('prev');
    let nextBtn = document.getElementById('next');

    let background = document.querySelector('.background');
    let indices = document.querySelectorAll('.index');

    let bgImgs = ["edutechss.png", "pipboyss.png", "portfolioss.png"];

    let currentIndex = 0;

    indices.forEach(index => index.classList.remove('active'));
    indices[currentIndex].classList.add('active');

    var myAnimation1 = new hoverEffect({
        parent: document.querySelector('.background'),
        intensity: 0.3,
        imagesRatio: 1080/1920,
        image1: `../images/${bgImgs[0]}`,
        image2: `../images/${bgImgs[1]}`,
        displacementImage: "../images/distortion image.jpg",
        hover: false
    });

    var myAnimation2 = new hoverEffect({
        parent: document.querySelector('.background'),
        intensity: 0.3,
        imagesRatio: 1080/1920,
        image1: `../images/${bgImgs[1]}`,
        image2: `../images/${bgImgs[2]}`,
        displacementImage: "../images/distortion image.jpg",
        hover: false
    });

    var myAnimation3 = new hoverEffect({
        parent: document.querySelector('.background'),
        intensity: 0.3,
        imagesRatio: 1080/1920,
        image1: `../images/${bgImgs[2]}`,
        image2: `../images/${bgImgs[0]}`,
        displacementImage: "../images/distortion image.jpg",
        hover: false
    });

    let distortAnimations = [
        myAnimation1,
        myAnimation2,
        myAnimation3
    ];

    function startNextDistortAnimation(){
        let prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % 3;
        indices.forEach(index => index.classList.remove('active'));
        indices[currentIndex].classList.add('active');
        distortAnimations[prevIndex].next();

        showTextAnimation('next');

        setTimeout(() => {
            let canvas = background.querySelectorAll('canvas');
            background.appendChild(canvas[0]);
            distortAnimations[prevIndex].previous();
        }, 1200);
    }

    function startPrevDistortAnimation(){
        currentIndex = (currentIndex - 1) < 0 ? 2 : (currentIndex - 1);
        indices.forEach(index => index.classList.remove('active'));
        indices[currentIndex].classList.add('active');
        distortAnimations[currentIndex].next();

        showTextAnimation('prev');

        setTimeout(() => {
            let canvas = background.querySelectorAll('canvas');
            background.insertBefore(canvas[canvas.length - 1], background.firstChild);
            distortAnimations[currentIndex].previous();
        }, 500)
    }

    nextBtn.addEventListener('click', () => {
        startNextDistortAnimation();
    });

    prevBtn.addEventListener('click', () => {
        startPrevDistortAnimation();
    });

    let titleDisplacement = 0;
    let descriptionDisplacement = 0;

    function showTextAnimation(direction){
        if(titleDisplacement === 0 && direction === "prev"){
            titleDisplacement = -540;
        }else if(titleDisplacement === -540 && direction === "next"){
            titleDisplacement = 0;
        }else{
            titleDisplacement = (direction === "next") ? titleDisplacement - 180 : titleDisplacement + 180;
        }

        if (descriptionDisplacement === 0 && direction === "prev") {
            descriptionDisplacement = -165;
          } 
          else if(descriptionDisplacement === -165 && direction === "next"){
            descriptionDisplacement = 0;
          }
          else {
            descriptionDisplacement =
              direction === "next" 
                ? descriptionDisplacement - 55
                : descriptionDisplacement + 55;
          }

        let title = document.querySelectorAll('#title h4');
        let description = document.querySelectorAll('#description p')

        title.forEach(title => {
            TweenMax.to(title, 1, {
                top: `${titleDisplacement}px`,
                ease: Strong.easeInOut
            });
        });

        description.forEach((description, index) => {
            let opacity = 0;
            if(index === currentIndex){
                opacity = 1;
            }else{
                opacity = 0;
            }

            TweenMax.to(description, 1, {
                top: `${descriptionDisplacement}px`,
                ease: Strong.easeInOut,
                opacity: opacity
            });
        })
    }

});

*/
