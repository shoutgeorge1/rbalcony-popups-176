// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Cost Calculator Function
function calculateCost() {
    const size = document.getElementById('balconySize').value;
    const type = document.getElementById('repairType').value;
    const resultDiv = document.getElementById('costResult');
    
    if (!size || size <= 0) {
        alert('Please enter a valid balcony size');
        return;
    }
    
    let costPerSqFt;
    switch(type) {
        case 'minor':
            costPerSqFt = 15;
            break;
        case 'major':
            costPerSqFt = 35;
            break;
        case 'replacement':
            costPerSqFt = 75;
            break;
        default:
            costPerSqFt = 25;
    }
    
    const totalCost = size * costPerSqFt;
    const minCost = totalCost * 0.8;
    const maxCost = totalCost * 1.2;
    
    resultDiv.innerHTML = `
        <h4>Estimated Cost Range:</h4>
        <p>$${minCost.toLocaleString()} - $${maxCost.toLocaleString()}</p>
        <p><small>Based on ${size} sq ft at $${costPerSqFt}/sq ft</small></p>
    `;
    resultDiv.style.display = 'block';
}

// Notification Function
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Dropdown Functions
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const button = dropdown.previousElementSibling;
    
    // Close other dropdowns
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(dd => {
        if (dd.id !== dropdownId) {
            dd.classList.remove('show');
            dd.previousElementSibling.classList.remove('active');
        }
    });
    
    // Toggle current dropdown
    dropdown.classList.toggle('show');
    button.classList.toggle('active');
}

function selectService(service) {
    showNotification(`${service} service selected!`, 'success');
    toggleDropdown('servicesDropdown');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            const content = dropdown.querySelector('.dropdown-content');
            const button = dropdown.querySelector('.dropdown-btn');
            if (content && button) {
                content.classList.remove('show');
                button.classList.remove('active');
            }
        }
    });
});

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const inspectionForm = document.querySelector('.inspection-form');
    if (inspectionForm) {
        inspectionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            
            if (name && email && phone && date) {
                showNotification('Inspection request submitted successfully!', 'success');
                closeModal('inspectionModal');
                inspectionForm.reset();
            } else {
                showNotification('Please fill in all fields', 'error');
            }
        });
    }
});

// Enhanced tooltip functionality
document.addEventListener('DOMContentLoaded', function() {
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');
    
    tooltipTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', function() {
            // Add any additional tooltip logic here if needed
        });
    });
});

// Keyboard navigation for modals
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal[style*="block"]');
        openModals.forEach(modal => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
});

// Smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Utility function to create custom notifications
function createCustomNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" style="margin-left: 10px; background: none; border: none; color: white; cursor: pointer;">×</button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, duration);
}
