// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Blog Section //
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize all sliders
            const sliders = document.querySelectorAll('.slider-container');
            
            sliders.forEach(container => {
                const slider = container.querySelector('.slider');
                const slides = container.querySelectorAll('.slide');
                const prevBtn = container.querySelector('.prev-btn');
                const nextBtn = container.querySelector('.next-btn');
                const dots = container.querySelectorAll('.dot');
                
                let currentSlide = 0;
                const totalSlides = slides.length;
                
                // Function to update slider position
                function updateSlider() {
                    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
                    
                    // Update dots
                    dots.forEach((dot, index) => {
                        dot.classList.toggle('active', index === currentSlide);
                    });
                }
                
                // Next slide
                nextBtn.addEventListener('click', () => {
                    currentSlide = (currentSlide + 1) % totalSlides;
                    updateSlider();
                });
                
                // Previous slide
                prevBtn.addEventListener('click', () => {
                    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                    updateSlider();
                });
                
                // Dot navigation
                dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        currentSlide = index;
                        updateSlider();
                    });
                });
                
                // Auto slide (optional)
                let slideInterval = setInterval(() => {
                    currentSlide = (currentSlide + 1) % totalSlides;
                    updateSlider();
                }, 5000);
                
                // Pause auto slide on hover
                container.addEventListener('mouseenter', () => {
                    clearInterval(slideInterval);
                });
                
                container.addEventListener('mouseleave', () => {
                    slideInterval = setInterval(() => {
                        currentSlide = (currentSlide + 1) % totalSlides;
                        updateSlider();
                    }, 5000);
                });
            });
            
            // Modal functionality
            const modalTriggers = document.querySelectorAll('.read-more-btn');
            const modals = document.querySelectorAll('.modal');
            const closeButtons = document.querySelectorAll('.close-btn');
            
            modalTriggers.forEach(trigger => {
                trigger.addEventListener('click', function(e) {
                    e.preventDefault();
                    const modalId = this.getAttribute('data-modal');
                    const modal = document.getElementById(modalId);
                    modal.classList.add('active');
                });
            });
            
            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const modal = this.closest('.modal');
                    modal.classList.remove('active');
                });
            });
            
            // Close modal when clicking outside
            modals.forEach(modal => {
                modal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        this.classList.remove('active');
                    }
                });
            });
        });
// End Blog Section //

// Initialize EmailJS with your public key
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS - Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    try {
        emailjs.init("lnmqm_ck0VweNsg3p"); // ✅ CORRECT - Use Public Key
        console.log('EmailJS initialized successfully');
    } catch (error) {   
        console.error('EmailJS initialization failed:', error);
    }

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form elements
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (!name || !email || !message) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Show loading indicator
            document.getElementById('loading').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('errorMessage').style.display = 'none';
            
            // Prepare email parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_email: 'bonjovi.n.sanchez@gmail.com'
            };
            
            // Send email using EmailJS
             emailjs.send('service_huvgu6c', 'template_852w9ki', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    // Hide loading indicator
                    document.getElementById('loading').style.display = 'none';
                    // Show success message
                    document.getElementById('successMessage').style.display = 'block';
                    // Reset form
                    document.getElementById('contactForm').reset();
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    // Hide loading indicator
                    document.getElementById('loading').style.display = 'none';
                    // Show error message
                    document.getElementById('errorMessage').style.display = 'block';
                });
        });
    } else {
        console.error('Contact form not found');
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if(window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = 'white';
                header.style.backdropFilter = 'none';
            }
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

});