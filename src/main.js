// Datos de ejemplo para la pastelería
const sampleProducts = {
    cakes: [
        {
            id: 1,
            name: "Torta Red Velvet",
            description: "Capas clásicas de red velvet con suave betún de queso crema y un toque de vainilla",
            price: "$45.00",
            imageUrl: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 2,
            name: "Elegancia de Chocolate",
            description: "Bizcocho de chocolate intenso con ganache oscuro y delicados detalles de hoja de oro",
            price: "$52.00",
            imageUrl: "https://th.bing.com/th/id/OIP.fqGHrXr26oXwqk6jJPFAUAHaE8?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            id: 3,
            name: "Frescura de Fresa",
            description: "Bizcocho de vainilla ligero con fresas frescas y crema batida",
            price: "$38.00",
            imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        }
    ],
    desserts: [
        {
            id: 4,
            name: "Macarons Franceses",
            description: "Delicadas galletas de almendra con ganache sedoso en sabores surtidos",
            price: "$24.00/docena",
            imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1w源自w=400&h=300"
        },
        {
            id: 5,
            name: "Cheesecake de Frutos Rojos",
            description: "Cremoso cheesecake estilo Nueva York con compota de frutos rojos",
            price: "$8.50/rebanada",
            imageUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 6,
            name: "Trufas de Chocolate",
            description: "Trufas artesanales con cacao premium y sabores exóticos",
            price: "$18.00/caja",
            imageUrl: "https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 7,
            name: "Croissants de Mantequilla",
            description: "Crujientes y mantecosos, horneados a diario con técnica francesa",
            price: "$3.50 c/u",
            imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 8,
            name: "Muffins de Arándano",
            description: "Muffins suaves llenos de arándanos silvestres y ralladura de limón",
            price: "$4.25 c/u",
            imageUrl: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 9,
            name: "Galletas con Chispas de Chocolate",
            description: "Galletas clásicas con chispas de chocolate belga y toque de sal marina",
            price: "$2.75 c/u",
            imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        }
    ],
    bites: [
        {
            id: 7,
            name: "Croissants de Mantequilla",
            description: "Crujientes y mantecosos, horneados a diario con técnica francesa",
            price: "$3.50 c/u",
            imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 8,
            name: "Muffins de Arándano",
            description: "Muffins suaves llenos de arándanos silvestres y ralladura de limón",
            price: "$4.25 c/u",
            imageUrl: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 9,
            name: "Galletas con Chispas de Chocolate",
            description: "Galletas clásicas con chispas de chocolate belga y toque de sal marina",
            price: "$2.75 c/u",
            imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        }
    ]
};

const sampleReviews = [
    {
        id: 1,
        name: "Sarah Johnson",
        testimonial: "La torta Red Velvet fue absolutamente perfecta para el cumpleaños de mi hija. Todos los invitados hablaron maravillas de lo húmeda y sabrosa que estaba. ¡Sin duda volveré a pedir!",
        rating: 5,
        imageUrl: "https://img.freepik.com/foto-gratis/mujer-hermosa-joven-mirando-camara-chica-moda-verano-casual-camiseta-blanca-pantalones-cortos-hembra-positiva-muestra-emociones-faciales-modelo-divertido-aislado-amarillo_158538-15796.jpg"
    },
    {
        id: 2,
        name: "Michael Chen",
        testimonial: "¡Sus macarons franceses son increíbles! La textura perfecta y los sabores muy auténticos. Ahora soy cliente frecuente y siempre recomiendo Azúcar y Sal a mis amigos.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        testimonial: "Vengo aquí desde hace más de un año y cada pastelito es una obra de arte. La atención al detalle y los ingredientes de calidad realmente se notan. ¡Mi lugar favorito en la ciudad!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
    }
];

// Funciones utilitarias
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function createProductCard(product) {
    return `
        <div class="product-card bg-bakery-cream rounded-xl overflow-hidden shadow-custom hover:shadow-custom-hover hover:-translate-y-1 transition-all duration-300">
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image w-full h-[200px] object-cover cursor-pointer" onclick='showProductModal(${JSON.stringify(product)})'>
            <div class="product-info p-6">
                <h4 class="product-name text-xl font-semibold text-bakery-text mb-2 font-playfair">${product.name}</h4>
                <p class="product-description text-bakery-text opacity-70 mb-4 leading-relaxed">${product.description}</p>
                <div class="product-footer flex justify-between items-center">
                    <span class="product-price text-lg font-semibold text-bakery-brown">${product.price}</span>
                    <button class="product-button bg-bakery-brown text-white border-none px-4 py-2 rounded-lg font-medium hover:bg-bakery-text transition-colors duration-300" onclick="addToCart('${product.name}')">Agregar al carrito</button>
                </div>
            </div>
        </div>
    `;
}

function createReviewCard(review) {
    const stars = "⭐".repeat(review.rating);
    return `
        <div class="review-card bg-white p-8 rounded-xl shadow-custom transition-transform duration-300 hover:shadow-custom-hover hover:scale-105">
            <div class="review-header flex items-center mb-6">
                <img src="${review.imageUrl}" alt="Cliente feliz ${review.name}" class="review-avatar w-16 h-16 rounded-full object-cover mr-4">
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
    // Cargar tortas
    const cakesGrid = document.getElementById('cakes-grid');
    cakesGrid.innerHTML = sampleProducts.cakes.map(createProductCard).join('');

    // Cargar postres
    const dessertsGrid = document.getElementById('desserts-grid');
    dessertsGrid.innerHTML = sampleProducts.desserts.map(createProductCard).join('');

    // Cargar bocados
    const bitesGrid = document.getElementById('bites-grid');
    bitesGrid.innerHTML = sampleProducts.bites.map(createProductCard).join('');
}

function loadReviews() {
    const reviewsGrid = document.getElementById('reviews-grid');
    reviewsGrid.innerHTML = sampleReviews.map(createReviewCard).join('');
}
let arraycard = []
function addToCart(productName) {
    // En una implementación real, esto agregaría al carrito
    alert(`¡"${productName}" agregado al carrito! 🛒`);
    arraycard.push(productName)
}
function showCartList() {
    if (arraycard.length === 0) {
        return "El carrito está vacío.";
    } else {
        return `<ul>${arraycard.map(p => `<li>${p}</li>`).join("")}</ul>`;
    }
}
// main.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('src/componentes/ModalListaProductos.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('beforeend', html);
        });
});

function abrirModal() {
    const modal = document.getElementById("modal-lista");
    const lista = document.getElementById("lista-productos");

    if (modal && lista) {
        lista.innerHTML = showCartList();
        modal.classList.remove('hidden');
    }
}

function cerrarModal() {
    const modal = document.getElementById("modal-lista");
    if (modal) {
        modal.classList.add('hidden');
    }
}



function validateForm() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    let isValid = true;

    // Limpiar errores previos
    document.querySelectorAll('.form-error').forEach(error => {
        error.classList.remove('hidden');
    });

    // Validar nombre
    const name = formData.get('name').trim();
    if (!name) {
        showError('name-error', 'El nombre es obligatorio');
        isValid = false;
    }

    // Validar correo
    const email = formData.get('email').trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showError('email-error', 'El correo es obligatorio');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('email-error', 'Por favor ingresa un correo válido');
        isValid = false;
    }

    // Validar mensaje
    const message = formData.get('message').trim();
    if (!message) {
        showError('message-error', 'El mensaje es obligatorio');
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

    // Limpiar mensajes de error
    document.querySelectorAll('.form-error').forEach(error => {
        error.classList.add('hidden');
    });
}

// Listeners de eventos
document.addEventListener('DOMContentLoaded', function () {
    // Cargar contenido
    loadProducts();
    loadReviews();

    // Toggle navegación móvil
    const navToggle = document.getElementById('navToggle');
    const navMobile = document.getElementById('navMobile');

    navToggle.addEventListener('click', function () {
        navMobile.classList.toggle('hidden');

        // Animar menú hamburguesa
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

    // Scroll suave para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });

                // Cerrar menú móvil si está abierto
                navMobile.classList.add('hidden');
                navToggle.classList.remove('active');
                const bars = navToggle.querySelectorAll('.nav-toggle-bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    });

    // Envío del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Simular envío de formulario
        const submitButton = contactForm.querySelector('.form-submit');
        const submitText = submitButton.querySelector('.submit-text');
        const submitLoading = submitButton.querySelector('.submit-loading');

        // Mostrar estado de carga
        submitButton.disabled = true;
        submitText.classList.add('hidden');
        submitLoading.classList.remove('hidden');

        // Simular retardo de llamada a API
        setTimeout(() => {
            // Restaurar estado del botón
            submitButton.disabled = false;
            submitText.classList.remove('hidden');
            submitLoading.classList.add('hidden');

            // Mostrar modal de éxito
            showModal();

            // Limpiar formulario
            resetForm();
        }, 2000);
    });

    // Cerrar modal al hacer clic fuera
    const modal = document.getElementById('successModal');
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Efecto de scroll en el header
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('shadow-header-scrolled');
            header.classList.remove('shadow-header');
        } else {
            header.classList.add('shadow-header');
            header.classList.remove('shadow-header-scrolled');
        }
    });

    // Animación de fade-in para elementos al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-5');
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    document.querySelectorAll('.product-card, .review-card').forEach(card => {
        card.classList.add('opacity-0', 'translate-y-5', 'transition-all', 'duration-600');
        observer.observe(card);
    });
});

// Agregar algunas características interactivas
document.addEventListener('DOMContentLoaded', function () {
    // Efectos hover en tarjetas de producto
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.classList.add('-translate-y-2');
        });

        card.addEventListener('mouseleave', function () {
            this.classList.remove('-translate-y-2');
        });
    });
});
let currentProduct = null;

function showProductModal(product) {
    currentProduct = product;

    document.getElementById('modalProductImage').src = product.imageUrl;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalProductPrice').textContent = product.price;

    const modal = document.getElementById('productModal');
    const modalCard = document.getElementById('modalCard');
    modal.classList.remove('hidden');
    // Forzar reflujo para que la transición funcione
    void modalCard.offsetWidth;
    modalCard.classList.add('opacity-100', 'scale-100');
    modalCard.classList.remove('opacity-0', 'scale-95');
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    const modalCard = document.getElementById('modalCard');
    modalCard.classList.remove('opacity-100', 'scale-100');
    modalCard.classList.add('opacity-0', 'scale-95');
    // Esperar a que termine la transición antes de ocultar el fondo
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function addToCartFromModal() {
    if (currentProduct) {
        addToCart(currentProduct.name);
        closeProductModal();
    }
}

fetch('src/componentes/ModalProducts.html')
    .then(response => response.text())
    .then(html => {
        document.body.insertAdjacentHTML('beforeend', html);
    });