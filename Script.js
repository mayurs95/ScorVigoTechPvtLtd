$(document).ready(function () {
    $("#contactUsLink").click(function () {
        $("#contactModal").modal('show');
    });
});

$(document).ready(function () {
var currentPage = window.location.pathname;
if (currentPage.includes('home.html')) {
    $('#homeLink').addClass('active');
} else if (currentPage.includes('AboutUs.html')) {
    $('#aboutUsLink').addClass('active');
} else if (currentPage.includes('services.html')) {
    $('#servicesLink').addClass('active');
}
});