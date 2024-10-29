import Swal from 'sweetalert2';

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
    const mainContent = $('.main-content');

    // Reusable function to handle button clicks
    function setupButton(buttonSelector, sectionSelector) {
        const button = $(buttonSelector);
        const section = $(sectionSelector);

        button.on('click', function(event) {
            event.preventDefault();
            mainContent.empty();
            mainContent.append(section);
            section.show();
        });
    }

    // Call the reusable function for each button/section pair
    setupButton('#customerBtn', '.customer');
    setupButton('#productBtn', '.product');
    setupButton('#cash-registerBtn', '.cash-register');
    setupButton('#userBtn', '.user');
    setupButton('#invoiceBtn', '.invoice');
    setupButton('#dashboardBtn', '.dashboard');


    // sign out button
    const signOutBtn = $('#sign-out-btn');

    signOutBtn.on('click', function(event) {
        event.preventDefault(); // Prevent default action

        // Hide header, aside, and main content
        $('#header').hide();
        $('#aside').hide();
        $('#main-content').hide();

        // Show the login page
        $('.login-page').css('display', 'flex');
    });
});

// if the cart is not empty, you want to navigate to another page show an alert and if the user click ok then navigate to the page and empty the cart
$(document).ready(function() {
    const mainContent = $('.main-content');
    const cart = $('#cart'); // Assuming cart is a ul element

    // Reusable function to handle button clicks
    function setupButton(buttonSelector, sectionSelector) {
        const button = $(buttonSelector);
        const section = $(sectionSelector);

        button.on('click', function(event) {
            event.preventDefault();

            if (cart.children().length > 0) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You have items in your cart. Do you want to navigate away and empty the cart?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, navigate away'
                }).then((result) => {
                    if (result.isConfirmed) {
                        cart.empty(); // Empty the cart
                        mainContent.empty();
                        mainContent.append(section);
                        section.show();
                    }
                });
            } else {
                mainContent.empty();
                mainContent.append(section);
                section.show();
            }
        });
    }

    // Call the reusable function for each button/section pair
    setupButton('#customerBtn', '.customer');
    setupButton('#productBtn', '.product');
    setupButton('#cash-registerBtn', '.cash-register');
    setupButton('#userBtn', '.user');
    setupButton('#invoiceBtn', '.invoice');
    setupButton('#dashboardBtn', '.dashboard');
});
