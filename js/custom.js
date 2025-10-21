$(document).ready(function () {
    AOS.init();
//Hover Menu Dropdown in Bootstrap
    jQuery('ul.navbar-nav li.dropdown').hover(function () {
        jQuery(this).find('.dropdown-menu').stop(true, true).show();
        jQuery(this).addClass('open');
    }, function () {
        jQuery(this).find('.dropdown-menu').stop(true, true).hide();
        jQuery(this).removeClass('open');
    });
// Scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    $(".fancybox").fancybox();
    //Add div clearfix after 3 list
    $("ul.services-ul li:nth-child(3n)").after("<div class='clearfix'></div>")
});

// var swiper = new Swiper(".dwkSwiper", {
//     slidesPerView: 2.3, 
//     spaceBetween: 30,
//     centeredSlides: true,
//     loop: true, 
    
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },  
//     pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//         formatFractionCurrent: function (number) {
//             var totalSlides = 5; 
//             return (number > totalSlides) ? number % totalSlides || totalSlides : number;
//         }
//     },
//     observer: true,
//     observeParents: true,
// });

var swiper = new Swiper(".dwkSwiper", {
    slidesPerView: 1.8,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,

    navigation: {
       
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        
        el: ".swiper-pagination", 
        type: "fraction",
       
    },

    observer: true,
    observeParents: true,
});
// Fixed menu
$("header").waypoint(function () {
    $(".btm-header").toggleClass("navbar-fixed-top animated fadeInDown");
    $(".btm-header.js-toggleClass").toggleClass("js-toggleClass");
    return false;
}, {offset: '-0.1px'});

/**
 * dwk_animateCounter
 */
function dwk_animateCounter(duration = 2000) {
    const counters = document.querySelectorAll('.dwk-counter h2[data-target]');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target'); 
        const suffixSpan = counter.querySelector('span'); 
        let startTimestamp = null; 

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = timestamp - startTimestamp; 
            
            const currentCount = Math.min(Math.floor((progress / duration) * target), target);

          
            if (target >= 1000) {
                
                if (currentCount >= 1000) {
                     
                    const kValue = Math.floor(currentCount / 100) / 10;
                    counter.textContent = kValue + 'K';
                } else {
                     
                    counter.textContent = currentCount;
                }
            } else {
               
                counter.textContent = currentCount;
            }

            
            if (suffixSpan) {
                counter.appendChild(suffixSpan);
            }

            
            if (progress < duration) {
                
                window.requestAnimationFrame(step);
            } else {
                
                if (target === 30000) {
                    counter.textContent = '30K';
                } else {
                    counter.textContent = target;
                }
                
                if (suffixSpan) {
                    counter.appendChild(suffixSpan);
                }
            }
        };

        window.requestAnimationFrame(step);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    dwk_animateCounter(2000); 
});