// custom-script.js

document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on the Orders page
    if (window.location.pathname.includes('/admin/orders')) {
        // Wait for the DOM to be fully loaded
        const checkExist = setInterval(() => {
            const printButton = document.querySelector('[aria-label="Print"]'); // Selector for the Print button

            if (printButton) {
                clearInterval(checkExist);

                // Create a new button element
                const customButton = document.createElement('button');
                customButton.innerText = 'My Custom Action';
                customButton.style.marginLeft = '10px';
                customButton.classList.add('Polaris-Button'); // Use Shopify's Polaris styles

                // Define what happens when the custom button is clicked
                customButton.addEventListener('click', function () {
                    alert('Custom button clicked!');
                    // Add your custom action here
                });

                // Insert the custom button next to the Print button
                printButton.parentNode.insertBefore(customButton, printButton.nextSibling);
            }
        }, 100); // Check every 100ms until the Print button is found
    }
});
