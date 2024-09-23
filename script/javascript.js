// JavaScript for handling form submission
document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado pelo contato! Em breve entraremos em contato.');
    this.reset();
});
