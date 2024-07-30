document.addEventListener('DOMContentLoaded', function() {
    // Get all tab links
    const tabLinks = document.querySelectorAll('#caseStudyTabs .nav-link');
    // Get all tab content panes
    const tabPanes = document.querySelectorAll('#caseStudyTabContent .tab-pane');

    // Add click event listeners to each tab link
    tabLinks.forEach((tabLink, index) => {
        tabLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Remove active class from all tab links
            tabLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked tab link
            tabLink.classList.add('active');

            // Hide all tab content panes
            tabPanes.forEach(pane => pane.classList.remove('show', 'active'));

            // Show the corresponding tab content pane
            const targetPane = document.querySelector(tabLink.getAttribute('href'));
            targetPane.classList.add('show', 'active');
        });
    });
});


   