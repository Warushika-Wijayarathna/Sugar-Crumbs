import { resetCart } from './order_controller.js';
// Import necessary functions from the ProductController
import { reattachAddProductClick } from './product_controller.js';

$(document).ready(function() {
    const main_content = $('.main-content');

    // Reusable function to handle button clicks with cart check
    function setupButton(buttonSelector, sectionSelector) {
        const button = $(buttonSelector);
        const section = $(sectionSelector);

        button.on('click', function(event) {
            event.preventDefault();

            // Check if the cart is empty before proceeding
            if (!isCartEmpty()) {
                Swal.fire({
                    title: 'You have items in your cart',
                    text: "Are you sure you want to leave?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Leave',
                    cancelButtonText: 'Stay'
                }).then((result) => {
                    if (result.isConfirmed) {
                        resetCart(); // Reset the cart method of order_controller.js
                        console.log($("#bill").html()); // After resetCart()
                        loadSection(section, buttonSelector); // Only load if confirmed
                    }
                });
            } else {
                loadSection(section, buttonSelector); // Direct load if cart is empty
            }
        });
    }

    // Load section into main content
    function loadSection(section, buttonSelector) {
        main_content.empty();
        main_content.append(section);

        // Call reattachAddProductClick() if "product-add" button is clicked
        if (buttonSelector === '#productBtn') {
            reattachAddProductClick(); // Reattach click event before showing the modal
        }

        section.show();
    }

    // Call the setup function for each button/section pair
    setupButton('#customerBtn', '.customer');
    setupButton('#productBtn', '.product'); // Ensure this points to your product section
    setupButton('#cash-registerBtn', '.cash-register');
    setupButton('#userBtn', '.user');
    setupButton('#invoiceBtn', '.invoice');
    setupButton('#dashboardBtn', '.dashboard');

    // Helper to check if the cart is empty
    function isCartEmpty() {
        return $("#cart").children().length === 0;
    }
});


////////////////////////////////////////////////////// Sidebar Toggle //////////////////////////////////////////////////////////
$(document).ready(function() {
    $('.nav-item').on('mouseover', function() {
        const navLink = $(this).find('.nav-link');
        navLink.addClass('active');
        navLink.css({
            'background': 'rgba(128, 128, 128, 0.7)',
            'color': '#333333'
        });
    });

    $('.nav-item').on('mouseout', function() {
        const navLink = $(this).find('.nav-link');
        navLink.removeClass('active');
        navLink.css('background', '');
    });
});

/////////////////////////////////////////////////////////// Nav-Brand ///////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    const navbarBrand = $('.header span');

    // Set default color
    navbarBrand.css('color', '#333333');

    // Change color on hover
    navbarBrand.on('mouseover', function () {
        navbarBrand.css('color', 'rgba(128, 128, 128, 0.7)');
    });

    // Revert to default color when not hovering
    navbarBrand.on('mouseout', function () {
        navbarBrand.css('color', 'black');
    });
});

/////////////////////////////////////////////////////////// Sidebar Toggle - Selected //////////////////////////////////////////////////////////
$(document).ready(function() {
    const nav_Links = $('.nav-link');

    nav_Links.on('click', function() {
        // Remove the 'bold' class from all links
        nav_Links.removeClass('bold');

        // Add the 'bold' class to the clicked link
        $(this).addClass('bold');
    });
});


////////////////////////////////////////////////////// Sidebar Toggle //////////////////////////////////////////////////////////
$(document).ready(function() {
    $('.nav-item').on('mouseover', function() {
        const navLink = $(this).find('.nav-link');
        navLink.addClass('active');
        navLink.css({
            'background': 'rgba(128, 128, 128, 0.7)',
            'color': '#333333'
        });
    });

    $('.nav-item').on('mouseout', function() {
        const navLink = $(this).find('.nav-link');
        navLink.removeClass('active');
        navLink.css('background', '');
    });
});

/////////////////////////////////////////////////////////// Nav-Brand ///////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
    const navbarBrand = $('.header span');

    // Set default color
    navbarBrand.css('color', '#333333');

    // Change color on hover
    navbarBrand.on('mouseover', function () {
        navbarBrand.css('color', 'rgba(128, 128, 128, 0.7)');
    });

    // Revert to default color when not hovering
    navbarBrand.on('mouseout', function () {
        navbarBrand.css('color', 'black');
    });
});

/////////////////////////////////////////////////////////// Sidebar Toggle - Selected //////////////////////////////////////////////////////////
$(document).ready(function() {
    const nav_Links = $('.nav-link');

    nav_Links.on('click', function() {
        // Remove the 'bold' class from all links
        nav_Links.removeClass('bold');

        // Add the 'bold' class to the clicked link
        $(this).addClass('bold');
    });
});

/////////////////////////////////////////////////////////// Navigation Buttons Action //////////////////////////////////////////////////////////

$(document).ready(function() {
    const main_content = $('.main-content');

    // Reusable function to handle button clicks with cart check
    function setupButton(buttonSelector, sectionSelector) {
        const button = $(buttonSelector);
        const section = $(sectionSelector);

        button.on('click', function(event) {
            event.preventDefault();

            // Check if the cart is empty before proceeding
            if (!isCartEmpty()) {
                Swal.fire({
                    title: 'You have items in your cart',
                    text: "Are you sure you want to leave?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Leave',
                    cancelButtonText: 'Stay'
                }).then((result) => {
                    if (result.isConfirmed) {
                        resetCart()// Reset the cart method of order controller.js
                        console.log($("#bill").html());  // After resetCart()
                        loadSection(section); // Only load if confirmed
                    }
                });
            } else {
                loadSection(section); // Direct load if cart is empty
            }
        });
    }

    // Load section into main content
    function loadSection(section) {
        main_content.empty();
        main_content.append(section);
        section.show();
    }

    // Call the setup function for each button/section pair
    setupButton('#customerBtn', '.customer');
    setupButton('#productBtn', '.product');
    setupButton('#cash-registerBtn', '.cash-register');
    setupButton('#userBtn', '.user');
    setupButton('#invoiceBtn', '.invoice');
    setupButton('#dashboardBtn', '.dashboard');

    // Helper to check if the cart is empty
    function isCartEmpty() {
        return $("#cart").children().length === 0;
    }
});





