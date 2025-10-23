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
 * dwk_animateCounter - Revised to keep the original <span> element in the DOM 
 * and update the number content before it.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function dwk_animateCounter(duration = 2000) {
    const counters = document.querySelectorAll('.dwk-counter h2[data-target]');

    // Helper function to format the number (e.g., 500 -> "500", 5500 -> "5.5K")
    const formatNumber = (number) => {
        let displayValue = number;

        if (number >= 1000) {
            // Convert to 'K' format (e.g., 5500 -> 5.5K)
            // Math.round(number / 100) / 10 ensures up to one decimal place (e.g., 5.5)
            const kValue = (Math.round(number / 100) / 10);
            
            // Check if it's a whole number (e.g., 5.0) to display as "5K"
            displayValue = (kValue % 1 === 0 ? Math.floor(kValue) : kValue) + 'K';
        }

        return displayValue.toString(); // Return as a string
    };

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        
        // Find the suffix span element
        const suffixSpan = counter.querySelector('span');
        
        let startTimestamp = null;
        
        // Start the counter at '0', leaving the <span> intact.
        // We use textContent on the H2 element itself, which will replace everything *unless* // we re-append the span, but using insertAdjacentText is cleaner for the start.
        // A simple way to set the initial content without affecting the span is:
        if (suffixSpan) {
            counter.prepend('0'); // Temporarily set the number part
        } else {
             counter.textContent = '0';
        }
        
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = timestamp - startTimestamp;
            
            // Calculate the current count
            const currentCount = Math.min(Math.floor((progress / duration) * target), target);

            // Get the formatted number string (e.g., "500" or "5.5K")
            const numberText = formatNumber(currentCount);

            // Update the text node that is *before* the <span> element.
            // If the counter element has a span, its first node should be the text node we want to update.
            if (counter.firstChild && counter.firstChild.nodeType === 3) { // nodeType 3 is a Text Node
                 counter.firstChild.textContent = numberText;
            } else if (suffixSpan) {
                 // If no initial text node exists before the span, create one
                 counter.insertAdjacentText('afterbegin', numberText);
            } else {
                 // No span present, just use textContent
                 counter.textContent = numberText;
            }

            // Continue the animation if not finished
            if (progress < duration) {
                window.requestAnimationFrame(step);
            } else {
                // When finished, set the final formatted target value
                const finalNumberText = formatNumber(target);
                
                if (counter.firstChild && counter.firstChild.nodeType === 3) {
                    counter.firstChild.textContent = finalNumberText;
                } else if (suffixSpan) {
                    counter.insertAdjacentText('afterbegin', finalNumberText);
                } else {
                    counter.textContent = finalNumberText;
                }
            }
        };

        window.requestAnimationFrame(step);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    dwk_animateCounter(2000); 
});