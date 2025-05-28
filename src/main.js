// Sample data for the bakery
const sampleProducts = {
    cakes: [
        {
            id: 1,
            name: "Red Velvet Dream",
            description: "Classic red velvet layers with silky cream cheese frosting and a hint of vanilla",
            price: "$45.00",
            imageUrl: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 2,
            name: "Chocolate Elegance",
            description: "Rich chocolate sponge with dark ganache and delicate gold leaf accents",
            price: "$52.00",
            imageUrl: "https://images.unsplash.com/photo-156 connective3729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 3,
            name: "Strawberry Bliss",
            description: "Light vanilla sponge layered with fresh strawberries and whipped cream",
            price: "$38.00",
            imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        }
    ],
    desserts: [
        {
            id: 4,
            name: "French Macarons",
            description: "Delicate almond cookies with silky ganache in assorted flavors",
            price: "$24.00/dozen",
            imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1w源自w=400&h=300"
        },
        {
            id: 5,
            name: "Berry Cheesecake",
            description: "Creamy New York style cheesecake with mixed berry compote",
            price: "$8.50/slice",
            imageUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 6,
            name: "Chocolate Truffles",
            description: "Hand-rolled truffles with premium cocoa and exotic flavor infusions",
            price: "$18.00/box",
            imageUrl: "https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 7,
            name: "Butter Croissants",
            description: "Flaky, buttery croissants baked fresh daily with French technique",
            price: "$3.50 each",
            imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 8,
            name: "Blueberry Muffins",
            description: "Tender muffins bursting with wild blueberries and lemon zest",
            price: "$4.25 each",
            imageUrl: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 9,
            name: "Chocolate Chip Cookies",
            description: "Classic cookies with Belgian chocolate chips and sea salt finish",
            price: "$2.75 each",
            imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        }
    ],
    bites: [
        {
            id: 7,
            name: "Butter Croissants",
            description: "Flaky, buttery croissants baked fresh daily with French technique",
            price: "$3.50 each",
            imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 8,
            name: "Blueberry Muffins",
            description: "Tender muffins bursting with wild blueberries and lemon zest",
            price: "$4.25 each",
            imageUrl: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 9,
            name: "Chocolate Chip Cookies",
            description: "Classic cookies with Belgian chocolate chips and sea salt finish",
            price: "$2.75 each",
            imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        }
    ]
};

const sampleReviews = [
    {
        id: 1,
        name: "Sarah Johnson",
        testimonial: "The Red Velvet Dream cake was absolutely perfect for my daughter's birthday. Every guest raved about how moist and flavorful it was. Will definitely be ordering again!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
        id: 2,
        name: "Michael Chen",
        testimonial: "Their French macarons are incredible! The perfect texture and the flavors are so authentic. I'm a regular customer now and always recommend Azúcar y Sal to friends.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        testimonial: "I've been coming here for over a year now, and every single pastry is a work of art. The attention to detail and quality ingredients really show. My favorite spot in the city!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
];

// Utility functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function createProductCard(product) {
    return `
        <div class="product-card bg-bakery-cream rounded-xl overflow-hidden shadow-custom hover:shadow-custom-hover hover:-translate-y-1 transition-all duration-300">
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image w-full h-[200px] object-cover">
            <div class="product-info p-6">
                <h4 class="product-name text-xl font-semibold text-bakery-text mb-2 font-playfair">${product.name}</h4>
                <p class="product-description text-bakery-text opacity-70 mb-4 leading-relaxed">${product.description}</p>
                <div class="product-footer flex justify-between items-center">
                    <span class="product-price text-lg font-semibold text-bakery-brown">${product.price}</span>
                    <button class="product-button bg-bakery-brown text-white border-none px-4 py-2 rounded-lg font-medium hover:bg-bakery-text transition-colors duration-300" onclick="addToCart('${product.name}')">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

function createReviewCard(review) {
    const stars = "⭐".repeat(review.rating);
    return `
        <div class="review-card bg-white p-8 rounded-xl shadow-custom hover:shadow-custom-hover transition-shadow duration-300">
            <div class="review-header flex items-center mb-6">
                <img src="${review.imageUrl}" alt="Happy customer ${review.name}" class="review-avatar w-16 h-16 rounded-full object-cover mr-4">
                <div class="review-info">
                    <h4 class="text-bakery-text font-semibold mb-1 font-playfair">${review.name}</h4>
                    <div class="review-stars text-bakery-brown">${stars}</div>
                </div>
            </div>
            <p class="review-text text-bakery-text opacity-80 italic leading-relaxed">"${review.testimonial}"</p>
        </div>
    `;
}

function loadProducts() {
    // Load cakes
    const cakesGrid = document.getElementById('cakes-grid');
    cakesGrid.innerHTML = sampleProducts.cakes.map(createProductCard).join('');

    // Load desserts
    const dessertsGrid = document.getElementById('desserts-grid');
    dessertsGrid.innerHTML = sampleProducts.desserts.map(createProductCard).join('');

    // Load bites
    const bitesGrid = document.getElementById('bites-grid');
    bitesGrid.innerHTML = sampleProducts.bites.map(createProductCard).join('');
}

function loadReviews() {
    const reviewsGrid = document.getElementById('reviews-grid');
    reviewsGrid.innerHTML = sampleReviews.map(createReviewCard).join('');
}

function addToCart(productName) {
    // In a real implementation, this would add to cart
    alert(`Added "${productName}" to cart! 🛒`);
}

function validateForm() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.form-error').forEach(error => {
        error.classList.remove('hidden');
    });

    // Validate name
    const name = formData.get('name').trim();
    if (!name) {
        showError('name-error', 'Name is required');
        isValid = false;
    }

    // Validate email
    const email = formData.get('email').trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showError('email-error', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate message
    const message = formData.get('message').trim();
    if (!message) {
        showError('message-error', 'Message is required');
        isValid = false;
    }

    return isValid;
}

function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.classList.add('hidden');
}

function showModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('hidden');
}

function resetForm() {
    const form = document.getElementById('contactForm');
    form.reset();
    
    // Clear any error messages
    document.querySelectorAll('.form-error').forEach(error => {
        error.classList.add('hidden');
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Load content
    loadProducts();
    loadReviews();

    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navMobile = document.getElementById('navMobile');
    
    navToggle.addEventListener('click', function() {
        navMobile.classList.toggle('hidden');
        
        // Animate hamburger menu
        const bars = navToggle.querySelectorAll('.nav-toggle-bar');
        navToggle.classList.toggle('active');
        
        if (navToggle.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu if open
                navMobile.classList.add('hidden');
                navToggle.classList.remove('active');
                const bars = navToggle.querySelectorAll('.nav-toggle-bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        // Simulate form submission
        const submitButton = contactForm.querySelector('.form-submit');
        const submitText = submitButton.querySelector('.submit-text');
        const submitLoading = submitButton.querySelector('.submit-loading');
        
        // Show loading state
        submitButton.disabled = true;
        submitText.classList.add('hidden');
        submitLoading.classList.remove('hidden');
        
        // Simulate API call delay
        setTimeout(() => {
            // Reset button state
            submitButton.disabled = false;
            submitText.classList.remove('hidden');
            submitLoading.classList.add('hidden');
            
            // Show success modal
            showModal();
            
            // Reset form
            resetForm();
        }, 2000);
    });

    // Close modal when clicking outside
    const modal = document.getElementById('successModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('shadow-header-scrolled');
            header.classList.remove('shadow-header');
        } else {
            header.classList.add('shadow-header');
            header.classList.remove('shadow-header-scrolled');
        }
    });

    // Add fade-in animation for elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-5');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.product-card, .review-card').forEach(card => {
        card.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-600');
        observer.observe(card);
    });
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('-translate-y-2');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('-translate-y-2');
        });
    });
});