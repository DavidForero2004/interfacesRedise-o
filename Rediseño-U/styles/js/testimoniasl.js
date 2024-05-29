document.addEventListener("DOMContentLoaded", function() {
    let testimonials = document.querySelectorAll('.testimonial');
    let index = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        index = (index + 1) % testimonials.length;
        showTestimonial(index);
    }

    // Inicializar
    showTestimonial(index);

    // Cambiar testimonio cada 5 segundos
    setInterval(nextTestimonial, 5000);
});
