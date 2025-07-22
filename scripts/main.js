// Main JavaScript file for New Beginnings Shelter website
// JavaScript appropriate for CIS133DA with accessibility improvements

// Form validation for contact form
function validateContactForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var inquiryType = document.getElementById('inquiryType').value;
    var message = document.getElementById('message').value;
    
    // Clear any previous error messages
    clearErrorMessages();
    
    var hasErrors = false;
    
    // Check if required fields are filled and show specific errors
    if (firstName == '') {
        showFieldError('firstName', 'First name is required.');
        hasErrors = true;
    }
    if (lastName == '') {
        showFieldError('lastName', 'Last name is required.');
        hasErrors = true;
    }
    if (email == '') {
        showFieldError('email', 'Email address is required.');
        hasErrors = true;
    }
    if (inquiryType == '') {
        showFieldError('inquiryType', 'Please select an inquiry type.');
        hasErrors = true;
    }
    if (message == '') {
        showFieldError('message', 'Message is required.');
        hasErrors = true;
    }
    
    // Email validation
    if (email != '' && (email.indexOf('@') == -1 || email.indexOf('.') == -1)) {
        showFieldError('email', 'Please enter a valid email address.');
        hasErrors = true;
    }
    
    if (hasErrors) {
        // Focus on first error field
        var firstError = document.querySelector('.field-error');
        if (firstError) {
            var fieldId = firstError.getAttribute('data-field');
            var field = document.getElementById(fieldId);
            if (field) {
                field.focus();
            }
        }
        return false;
    }
    
    // Clear form if validation passes
    document.getElementById('contactForm').reset();
    showSuccessMessage('Thank you for your message! We will get back to you within 24 hours.');
    return true;
}

// Donation form validation
function validateDonationForm() {
    var amount = '';
    var amountRadios = document.getElementsByName('amount');
    
    // Check which amount is selected
    for (var i = 0; i < amountRadios.length; i++) {
        if (amountRadios[i].checked) {
            amount = amountRadios[i].value;
            break;
        }
    }
    
    if (amount == '') {
        alert('Please select a donation amount.');
        return false;
    }
    
    // Check custom amount if selected
    if (amount == 'custom') {
        var customAmount = document.getElementById('customAmount').value;
        if (customAmount == '' || customAmount <= 0) {
            alert('Please enter a valid custom amount.');
            return false;
        }
    }
    
    // Check required donor fields
    var donorFirstName = document.getElementById('donorFirstName').value;
    var donorLastName = document.getElementById('donorLastName').value;
    var donorEmail = document.getElementById('donorEmail').value;
    
    if (donorFirstName == '' || donorLastName == '' || donorEmail == '') {
        alert('Please fill in all required donor information.');
        return false;
    }
    
    // Clear form if validation passes
    document.getElementById('donationForm').reset();
    hideCustomAmount();
    alert('Thank you for your donation! You will receive a confirmation email shortly.');
    return true;
}

// Show/hide custom amount field
function showCustomAmount() {
    document.getElementById('customAmountContainer').style.display = 'block';
    document.getElementById('customAmount').focus();
}

function hideCustomAmount() {
    document.getElementById('customAmountContainer').style.display = 'none';
    document.getElementById('customAmount').value = '';
}

// Mobile navigation toggle with accessibility improvements
function toggleMobileMenu() {
    var navMenu = document.getElementById('nav-menu');
    var menuButton = document.querySelector('.mobile-menu-btn');
    
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
        menuButton.setAttribute('aria-expanded', 'false');
    } else {
        navMenu.style.display = 'block';
        menuButton.setAttribute('aria-expanded', 'true');
    }
}

// Error message functions for better accessibility
function showFieldError(fieldId, message) {
    var field = document.getElementById(fieldId);
    if (field) {
        // Add error styling
        field.className = field.className + ' error';
        field.setAttribute('aria-invalid', 'true');
        
        // Create or update error message
        var errorId = fieldId + '-error';
        var existingError = document.getElementById(errorId);
        
        if (existingError) {
            existingError.innerHTML = message;
        } else {
            var errorElement = document.createElement('div');
            errorElement.id = errorId;
            errorElement.className = 'field-error';
            errorElement.setAttribute('data-field', fieldId);
            errorElement.setAttribute('role', 'alert');
            errorElement.setAttribute('aria-live', 'polite');
            errorElement.innerHTML = message;
            
            // Insert after the field
            field.parentNode.insertBefore(errorElement, field.nextSibling);
        }
        
        // Associate error with field
        field.setAttribute('aria-describedby', errorId);
    }
}

function clearErrorMessages() {
    var errors = document.querySelectorAll('.field-error');
    for (var i = 0; i < errors.length; i++) {
        errors[i].parentNode.removeChild(errors[i]);
    }
    
    // Clear error styling and attributes
    var fields = document.querySelectorAll('.error');
    for (var j = 0; j < fields.length; j++) {
        fields[j].className = fields[j].className.replace(' error', '');
        fields[j].removeAttribute('aria-invalid');
        fields[j].removeAttribute('aria-describedby');
    }
}

function showSuccessMessage(message) {
    var successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.setAttribute('role', 'alert');
    successElement.setAttribute('aria-live', 'polite');
    successElement.innerHTML = message;
    
    // Insert at top of page
    document.body.insertBefore(successElement, document.body.firstChild);
    
    // Remove after 5 seconds
    setTimeout(function() {
        if (successElement.parentNode) {
            successElement.parentNode.removeChild(successElement);
        }
    }, 5000);
}

// Update current year in footer
function updateYear() {
    var currentYear = new Date().getFullYear();
    var yearElements = document.getElementsByClassName('current-year');
    for (var i = 0; i < yearElements.length; i++) {
        yearElements[i].innerHTML = currentYear;
    }
}

// Update current date in accessibility statement
function updateCurrentDate() {
    var dateElement = document.getElementById('current-date');
    if (dateElement) {
        var currentDate = new Date();
        var months = ['January', 'February', 'March', 'April', 'May', 'June',
                     'July', 'August', 'September', 'October', 'November', 'December'];
        var formattedDate = months[currentDate.getMonth()] + ' ' + 
                           currentDate.getDate() + ', ' + currentDate.getFullYear();
        dateElement.innerHTML = formattedDate;
    }
}

// Initialize page when it loads
window.onload = function() {
    updateYear();
    updateCurrentDate();
};
