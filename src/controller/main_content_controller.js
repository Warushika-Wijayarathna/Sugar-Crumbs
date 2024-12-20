import {generateProductCards, resetCart} from './order_controller.js';
import {bindProductAddEvents, displayProducts, unbindProductAddEvents} from './product_controller.js';
import {bindCustomerEvents, unbindCustomerEvents} from './customer_controller.js';
import {loadArrays} from "../db/database.js";
import {displayOrders} from "./invoice_controller.js";
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

$(document).ready(function () {
    const main_content = $('.main-content');

    function loadSection(section) {
        unbindProductAddEvents(); // Unbind any previous event handlers
        unbindCustomerEvents(); // Unbind any previous event handlers

        main_content.children().hide(); // Hide all sections
        // Ensure section is a jQuery object
        const sectionElement = $(section);

        main_content.append(sectionElement);
        sectionElement.show(); // Now this should work as sectionElement is a jQuery object

        if (sectionElement.hasClass('product')) {
            bindProductAddEvents(); // Rebind product events if product section is loaded
        } else if (sectionElement.hasClass('customer')) {
            bindCustomerEvents(); // Rebind customer events if customer section is loaded
        }
    }

    // Set up navigation buttons
    setupButton('#customerBtn', '.customer');
    setupButton('#productBtn', '.product');
    setupButton('#cash-registerBtn', '.cash-register');
    setupButton('#userBtn', '.user');
    setupButton('#invoiceBtn', '.invoice');
    setupButton('#dashboardBtn', '.dashboard');

    // ... Add other setupButton calls here if needed

    function setupButton(buttonSelector, section) {
        const button = $(buttonSelector);

        button.on('click', function (event) {
            event.preventDefault();
            loadArrays();
            displayProducts();
            displayOrders();

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
                        resetCart();
                        loadSection(section);
                    }
                });
            } else {
                loadSection(section);
            }
        });
    }

    function isCartEmpty() {
        return $("#cart").children().length === 0; // Check if the cart is empty
    }

    $('#sign-out-btn').on('click', function() {
        Swal.fire({
            title: 'Are you sure you want to logout?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Logout',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                // Reload the index file
                window.location.href = 'index.html';
            }
        });
    });
});





