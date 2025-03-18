document.addEventListener('DOMContentLoaded', function() {
    // Initialization of the application
    console.log('Plootus application initialized');

    // Added event listeners for buttons, for making the button dynamic but at this moment not using it because wasn't required in task, as to develop static page.
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:', this.textContent.trim());
        });
    });

    // Added event listeners for agent cards
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Viewing details for agent:', this.closest('.bg-white').querySelector('h3').textContent);
        });
    });
});