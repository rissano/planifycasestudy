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

    // Function to toggle description for research or prototyping items
    function toggleDescription(item) {
        const description = item.querySelector('.prototyping-description');
        if (description) {
            description.style.display = 'block';
        }
    };

    function hideDescription(item) {
        const description = item.querySelector('.prototyping-description');
        if (description) {
            description.style.display = 'none';
        }
    };

    // Get all prototyping items
    const prototypingItems = document.querySelectorAll('.prototyping-item');

    // Add event listeners to each prototyping item for mouseenter and mouseleave
    prototypingItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            toggleDescription(item);
        });

        item.addEventListener('mouseleave', function() {
            hideDescription(item);
        });
    });
});



function toggleDescription(item) {
    const description = item.querySelector('.testing-description');
    if (description) {
        description.style.display = 'block';
    }
};

function hideDescription(item) {
    const description = item.querySelector('.testing-description');
    if (description) {
        description.style.display = 'none';
    }
};

// Get all testing items
const testingItems = document.querySelectorAll('.testing-item');

// Add event listeners to each prototyping item for mouseenter and mouseleave
testingItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        toggleDescription(item);
    });

    item.addEventListener('mouseleave', function() {
        hideDescription(item);
    });
});


