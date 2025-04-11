
$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000, //1000ms = 1s;
    autoplayHoverPause: true, autoplayHoverPause: true,
    nav: true, // Enables navigation controls
    navText: [
        '<i class="fas fa-chevron-left"></i>', // Left arrow
        '<i class="fas fa-chevron-right"></i>' // Right arrow
    ],
    responsive: {
        0: { // For small screens (e.g., mobile)
            items: 3 // Display 3 items
        },
        768: { // For medium screens (e.g., tablets)
            items: 4 // Display 4 items
        },
        1024: { // For large screens (e.g., desktops)
            items: 5 // Display 5 items
        }
    }
});