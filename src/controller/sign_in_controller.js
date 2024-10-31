export let user_id;

// Retrieve users from localStorage
function getUsersFromLocalStorage() {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    return storedUsers ? storedUsers : []; // Return an empty array if no users are stored
}

// Check username and password against localStorage data
function checkUser(username, password) {
    const users = getUsersFromLocalStorage();
    return users.find(user => user._username === username && user._password === password);
}

// Enter into the dashboard if the username and password are correct
function login(event) {
    event.preventDefault();
    const username = $('#username').val();
    const password = $('#password').val();
    const user = checkUser(username, password);

    if (user) {
        // Make header, aside, and main content visible
        $('#header').show();
        $('#aside').show();
        $('#main-content').show();
        $('#user-text').text(`${user._username}`);
        user_id = user._id;
        // Load the dashboard
        loadDashboard();

        // Optionally, hide the login page
        $('.login-page').hide();
    } else {
        alert('Invalid username or password');
    }
}

// Load the dashboard
function loadDashboard() {
    const mainContent = $('.main-content');
    const dashboardSection = $('.dashboard');

    // Clear existing content
    mainContent.empty();
    mainContent.append(dashboardSection);
    dashboardSection.show();
}

$(document).ready(function() {
    const signInBtn = $('#signInBtn');
    signInBtn.on('click', login);
});
