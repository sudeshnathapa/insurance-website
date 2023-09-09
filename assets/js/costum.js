$(document).ready(function () {
    $('.expertise-carousel').owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        items: 1,
        autoplaySpeed: 700,
        autoplayTimeout: 3000,
        smartSpeed: 300,
        transitionStyle: "fade",
        dots: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

$(document).ready(function () {
    $('.individual-carousel').owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        items: 1,
        autoplaySpeed: 700,
        autoplayTimeout: 3000,
        smartSpeed: 300,
        transitionStyle: "fade",
        dots: true,
        autoplay: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

$(document).ready(function () {
    $('.brand-carousel').owlCarousel({
        loop: true,
        margin: 40,
        nav: false,
        items: 4,
        autoplaySpeed: 200,
        smartSpeed: 300,
        transitionStyle: "fade",
        dots: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});

// Animation.js starts
//use 1st function if there are many items and use second if there is single item

function animateElements(elements, animationClass, delayMultiplier) {
    elements.forEach(function (element, index) {
        var elementTop = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        var delay = delayMultiplier * index;

        if (elementTop < windowHeight) {
            element.style.animationDelay = delay + 's';
            element.classList.add('animate__animated', animationClass, 'animate__slow');
        } else {
            element.style.animationDelay = '';
            element.classList.remove('animate__animated', animationClass, 'animate__slow');
        }
    });
}

function animateOneElement(element, animationClass) {
    var elementTop = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (elementTop < windowHeight) {
        element.classList.add('animate__animated', animationClass, 'animate__slow');
    } else {
        element.classList.remove('animate__animated', animationClass, 'animate__slow');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var productCards = document.querySelectorAll('.animation-up');
        var LeftLiItems = document.querySelectorAll('.animation-left');
        var RightLiItems = document.querySelectorAll('.animation-right');
        var centeredImage = document.querySelector('.animation-zoom');

        if (productCards.length > 0) {
            animateElements(productCards, 'animate__fadeInUp', 0);
        }
        if (LeftLiItems.length > 0) {
            animateElements(LeftLiItems, 'animate__fadeInLeft', 0.2);
        }
        if (RightLiItems.length > 0) {
            animateElements(RightLiItems, 'animate__fadeInRight', 0.2);
        }
        if (centeredImage) {
            animateOneElement(centeredImage, 'animate__zoomIn');
        }
    });
});







// about golchha slider
$(".aboutGolchhaSlider").slick({
    vertical: true,
    verticalSwiping: true,
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$(".product-slick-slider").slick({
    vertical: true,
    verticalSwiping: true,
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});


// what we do slider starts

window.addEventListener("DOMContentLoaded", function () {
    var stickyElement = document.getElementById("sticky-element");
    var section = document.querySelector(".what-do-wrapper");

    if (section) {
        var sectionHeight = section.offsetHeight;
        var sectionTop = section.offsetTop;

        window.addEventListener("scroll", function () {
            if (
                window.pageYOffset > sectionTop &&
                window.pageYOffset < sectionTop + sectionHeight
            ) {
                stickyElement.classList.add("stick");
            } else {
                stickyElement.classList.remove("stick");
            }
        });
    }
});




