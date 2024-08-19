document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    $('#ignismyModal').modal('show'); // Show the modal
});