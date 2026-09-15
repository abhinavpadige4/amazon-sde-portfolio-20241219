// Contact Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset form status
        formStatus.textContent = '';
        formStatus.className = 'form-status';
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate form
        let isValid = true;
        let errorMessage = '';
        
        if (name === '') {
            isValid = false;
            errorMessage = 'Please enter your name';
        } else if (name.length < 2) {
            isValid = false;
            errorMessage = 'Name must be at least 2 characters long';
        } else if (email === '') {
            isValid = false;
            errorMessage = 'Please enter your email';
        } else if (!isValidEmail(email)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        } else if (message === '') {
            isValid = false;
            errorMessage = 'Please enter your message';
        } else if (message.length < 10) {
            isValid = false;
            errorMessage = 'Message must be at least 10 characters long';
        }
        
        // Show error if validation fails
        if (!isValid) {
            showFormError(errorMessage);
            return;
        }
        
        // Simulate form submission (in real app, this would go to Formspree or backend)
        submitFormData({ name, email, message });
    });
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showFormError(message) {
        formStatus.textContent = message;
        formStatus.className = 'form-status error';
        
        // Also highlight the relevant field
        if (message.includes('name')) {
            document.getElementById('name').focus();
        } else if (message.includes('email')) {
            document.getElementById('email').focus();
        } else if (message.includes('message')) {
            document.getElementById('message').focus();
        }
    }
    
    function showFormSuccess(message) {
        formStatus.textContent = message;
        formStatus.className = 'form-status success';
        
        // Reset form
        contactForm.reset();
    }
    
    function submitFormData(formData) {
        // Show loading state
        formStatus.textContent = 'Sending message...';
        formStatus.className = 'form-status';
        
        // Simulate API delay
        setTimeout(() => {
            // In a real application, this would be an actual fetch to Formspree or your backend
            // For demo purposes, we'll simulate success
            const isSuccess = Math.random() > 0.1; // 90% success rate for demo
            
            if (isSuccess) {
                showFormSuccess('Thank you! Your message has been sent successfully.');
                
                // Optionally, you could redirect or show a success modal
                // setTimeout(() => {
                //     window.location.href = '#hero';
                // }, 1500);
            } else {
                showFormError('Sorry, there was an error sending your message. Please try again.');
            }
        }, 1500);
    }
    
    // Add real-time validation
    const formFields = contactForm.querySelectorAll('input, textarea');
    
    formFields.forEach(field => {
        field.addEventListener('input', function() {
            // Remove error styling when user starts typing
            const parentGroup = this.closest('.form-group');
            if (parentGroup) {
                const errorElement = parentGroup.querySelector('.form-error');
                if (errorElement) {
                    errorElement.textContent = '';
                }
            }
            
            // Hide form status if user starts typing after error
            if (formStatus.className.includes('error') && this.value.trim() !== '') {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }
        });
    });
    
    // Add focus effects
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.style.borderColor = 'var(--primary-color)';
            this.style.boxShadow = '0 0 0 3px rgba(0, 102, 204, 0.25)';
        });
        
        field.addEventListener('blur', function() {
            this.style.borderColor = '';
            this.style.boxShadow = '';
        });
    });
});