document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL path and extract just the file name
    const windowPathName = window.location.pathname.split("/").pop(); // Gets 'about.html'

    // Select all nav links with the class 'nav-link'
    const navLinks = document.querySelectorAll('.nav-link');

    // Loop through links to match the current page
    navLinks.forEach(link => {
        // Extract only the file name from each link's href attribute
        const linkPathName = link.getAttribute("href").split("/").pop();

        // Check if the link's file name matches the current page file name
        if (linkPathName === windowPathName) {
            link.classList.add('active'); // Add the 'active' class to the current page link
        }
    });
});
