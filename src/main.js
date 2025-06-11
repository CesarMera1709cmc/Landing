// Datos de ejemplo para la pastelería
const sampleProducts = {
    cakes: [
        {
            id: 1,
            name: "Pastel Sencillo",
            description: "Torta decorada con crema o chantilly, decoración sencilla si tiene alguna tematica en especial se cotizara a parte.",
            price: "$18.00 lb",
            imageUrl: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 2,
            name: "Pastel con fondant",
            description: " Torta decorada con fondant, decoración sencilla si tiene alguna temática en especial se cotizara aparte.",
            price: "$25.00 lb",
            imageUrl: "https://th.bing.com/th/id/OIP.fqGHrXr26oXwqk6jJPFAUAHaE8?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
    ],
    desserts: [
        {
            id: 4,
            name: "CupCake con crema",
            description: "Deliciosos cupcakes con crema de mantequilla y decoraciones personalizadas",
            price: "$1.50 c/u",
            imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1w源自w=400&h=300"
        },
        {
            id: 5,
            name: "Cupcake con fondant",
            description: "Cupcakes decorados con fondant, ideales para fiestas y eventos",
            price: "desde $2.00 c/u",
            imageUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 6,
            name: "Mini Chessecakes",
            description: "Mora, fresa, maracuya, chocolate, nutella, manjar. ",
            price: "desde $2.50 c/u",
            imageUrl: "https://images.unsplash.com/photo-1511381939415-e44015466834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 7,
            name: "Cakepops",
            description: "De acuerdo a la temática se cotiza el precio",
            price: "desde $2.50 c/u",
            imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 8,
            name: "ChocoOreo",
            description: "Oreos cubiertas de chocolate con relleno de crema de vainilla",
            price: "desde $2.50 c/u",
            imageUrl: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 9,
            name: "Galletas",
            description: "Galletas decoradas con fondant ideales para fiestas y eventos",
            price: "desde $1.5 c/u",
            imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
        },
        // Nuevos postres
        {
            id: 10,
            name: "Shot de postre",
            description: "Mouse de maracura, cheesecake de frutos rojos, tiramisu, dulce limeño, torta mojada de chocolate.",
            price: "desde $2.00 c/u",
            imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        },
        
    ],
    bites: [
        {
            id: 11,
            name: "Huevo Mollo",
            description: "Relleno de almendras o nueces",
            price: "$20.00 ciento",
            imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 12,
            name: "Alfajores",
            description: "Relleno de manjar o crema pastelera",
            price: "$18.00 ciento",
            imageUrl: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 13,
            name: "Conitos",
            description: "Relleno de manjar o crema pastelera",
            price: "$20.00 ciento",
            imageUrl: "https://images.unsplash.com/photo-1504674900247-ec6b0b1b798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 14,
            name: "Empanadas de piña",
            description: "Deliciosa masa de empanada rellena de piña",
            price: "$25 ciento",
            imageUrl: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 15,
            name: "Frutitas de mazapan",
            description: "Mazapanes en forma de frutas coloridas y deliciosas",
            price: "$20.00 ciento",
            imageUrl: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 16,
            name: "Cocadas",
            description: "Dulces de coco rallado con leche condensada decoradas o de colores",
            price: "$25.00 ciento",
            imageUrl: "https://images.unsplash.com/photo-1504674900247-ec6b0b1b798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 17,
            name: "Bigadeiros",
            description: "Chocolate, nutella, menta, maracuya, cafe, mora. ",
            price: "$45.00 ciento",
            imageUrl: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 18,
            name: "Brigadeiros tematicos",
            description: "Brigadeiros decorados de acuerdo a tu evento",
            price: "$60.00 ciento",
            imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 19,
            name: "Trufas de galleta y coco",
            description: "Trufas de galleta con coco rallado",
            price: "$20.00 ciento",
            imageUrl: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 20,
            name: "Trufas de chocolate",
            description: "Negro o blanco",
            price: "$45.00 ciento",
            imageUrl: "https://images.unsplash.com/photo-1504674900247-ec6b0b1b798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 21,
            name: "Alfajores bañados de chocolate",
            description: "Decorados de acuerdo a la temática de tu fiesta",
            price: "$40.00 ciento",
            imageUrl: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 22,
            name: "Bolitas de nuez",
            description: "Deliciosa bolitas de nuez",
            price: "$30 ciento",
            imageUrl: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 23,
            name: "Profiteroles",
            description: "Relleno de manjar o crema pastelera",
            price: "$35.00 ciento",
            imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 24,
            name: "Bocaditos de menta bañados en chocolate",
            description: "Bocaditos de menta con chocolate",
            price: "$40.00 ciento",
            imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
        },
        {
            id: 25,
            name: "Tartaletas",
            description: "Relleno crema pastelera decorada con frutas",
            price: "$50.00 ciento",
            imageUrl: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
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
        <div class="product-card bg-bakery-cream rounded-xl overflow-hidden shadow-custom hover:shadow-custom-hover hover:-translate-y-1 transition-all duration-300 w-80 min-w-[20rem] flex-shrink-0 cursor-pointer flex flex-col"
            onclick="abrirModalProducto(${product.id}, '${product.name.replace(/'/g, "\\'")}', '${product.description.replace(/'/g, "\\'")}', '${product.price}', '${product.imageUrl}')">
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image w-full h-[200px] object-cover">
            <div class="product-info p-6 flex flex-col flex-1">
                <h4 class="product-name text-xl font-semibold text-bakery-text mb-2 font-playfair">${product.name}</h4>
                <p class="product-description text-bakery-text opacity-70 mb-4 leading-relaxed">${product.description}</p>
                <div class="product-footer flex justify-between items-center mt-auto pt-4">
                    <span class="product-price text-lg font-semibold text-bakery-brown">${product.price}</span>
                    <button class="product-button bg-bakery-brown text-white border-none px-4 py-2 rounded-lg font-medium hover:bg-bakery-text transition-colors duration-300" onclick="event.stopPropagation();addToCart('${product.name}')">Agregar al carrito</button>
                </div>
            </div>
        </div>
    `;
}

function createReviewCard(review) {
    const stars = "⭐".repeat(review.rating);
    return `
        <div class="review-card bg-white p-8 rounded-xl shadow-custom transition-transform duration-300 hover:shadow-custom-hover hover:scale-105 min-w-[20rem] w-80 flex-shrink-0">
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
    // Pasteles
    const cakesGrid = document.getElementById('cakes-scroll');
    cakesGrid.innerHTML = sampleProducts.cakes.map(createProductCard).join('');

    // Postres (debe mostrar sampleProducts.desserts)
    const dessertsGrid = document.getElementById('desserts-scroll');
    dessertsGrid.innerHTML = sampleProducts.desserts.map(createProductCard).join('');

    // Bocados de sal (debe mostrar sampleProducts.bites)
    const bitesGrid = document.getElementById('bites-scroll');
    bitesGrid.innerHTML = sampleProducts.bites.map(createProductCard).join('');
}

function loadReviews() {
    const reviewsGrid = document.getElementById('reviews-grid');
    reviewsGrid.innerHTML = sampleReviews.map(createReviewCard).join('');
}
let arraycard = [];

function addToCart(productName) {
    // Buscar si el producto ya está en el carrito
    const found = arraycard.find(item => item.name === productName);
    if (found) {
        found.cantidad += 1;
    } else {
        arraycard.push({ name: productName, cantidad: 1 });
    }
    alert(`¡"${productName}" agregado al carrito! 🛒`);
}

function showCartList() {
    if (arraycard.length === 0) {
        return "El carrito está vacío.";
    } else {
        return `<ul>${arraycard.map(p => `<li>${p.name} <span class="text-gray-500">x${p.cantidad}</span></li>`).join("")}</ul>`;
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

    // Scroll horizontal para Pasteles SOLO en móvil
    function isMobile() {
        return window.innerWidth < 768;
    }
    function handleCakesScroll() {
        const cakesScroll = document.getElementById('cakes-scroll');
        if (cakesScroll) {
            cakesScroll.className = "product-grid flex flex-nowrap overflow-x-auto gap-8 scroll-smooth py-4 px-2 md:justify-center";
            cakesScroll.style.overflowX = 'auto';
        }
    }
    handleCakesScroll();
    window.addEventListener('resize', handleCakesScroll);

    // Llama a addHorizontalScroll SOLO UNA VEZ por sección
    addHorizontalScroll('cakes-scroll', 'scrollLeftCakes', 'scrollRightCakes');
    addHorizontalScroll('desserts-scroll', 'scrollLeftDesserts', 'scrollRightDesserts');
    addHorizontalScroll('bites-scroll', 'scrollLeftBites', 'scrollRightBites');
});

function addHorizontalScroll(scrollId, leftBtnId, rightBtnId) {
    const scrollDiv = document.getElementById(scrollId);
    const btnLeft = document.getElementById(leftBtnId);
    const btnRight = document.getElementById(rightBtnId);

    function updateButtons() {
        if (!scrollDiv) return;
        btnLeft.style.display = scrollDiv.scrollLeft > 10 ? 'block' : 'none';
        btnRight.style.display = (scrollDiv.scrollWidth - scrollDiv.clientWidth - scrollDiv.scrollLeft) > 10 ? 'block' : 'none';
    }

    function scrollToCard(direction) {
        const cards = scrollDiv.querySelectorAll('.product-card');
        if (!cards.length) return;

        // Encuentra la card más cercana al centro del scroll actual
        const scrollCenter = scrollDiv.scrollLeft + scrollDiv.offsetWidth / 2;
        let closestIndex = 0;
        let minDistance = Infinity;
        cards.forEach((card, i) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(cardCenter - scrollCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = i;
            }
        });

        // Calcula el nuevo índice
        let newIndex = direction === 'right' ? closestIndex + 1 : closestIndex - 1;
        newIndex = Math.max(0, Math.min(cards.length - 1, newIndex));
        const targetCard = cards[newIndex];
        if (targetCard) {
            const cardLeft = targetCard.offsetLeft;
            const scrollTo = cardLeft - (scrollDiv.offsetWidth / 2) + (targetCard.offsetWidth / 2);
            scrollDiv.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    }

    // Elimina listeners previos para evitar duplicados
    btnLeft.onclick = null;
    btnRight.onclick = null;
    scrollDiv.removeEventListener('scroll', updateButtons);
    window.removeEventListener('resize', updateButtons);

    if (scrollDiv && btnLeft && btnRight) {
        btnLeft.onclick = () => scrollToCard('left');
        btnRight.onclick = () => scrollToCard('right');
        scrollDiv.addEventListener('scroll', updateButtons);
        window.addEventListener('resize', updateButtons);
        setTimeout(updateButtons, 500);
    }
}

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

function abrirModalProducto(id, name, description, price, imageUrl) {
    const modal = document.getElementById('successModal');
    const modalContent = modal.querySelector('.modal-content');
    modalContent.innerHTML = `
        <div class="modal-header flex justify-between items-center px-8 py-4 border-b border-gray-200">
            <h3 class="text-bakery-text text-xl font-semibold font-playfair">${name}</h3>
            <button class="modal-close bg-transparent border-none text-bakery-text text-2xl cursor-pointer p-1"
                onclick="closeModal()">×</button>
        </div>
        <div class="modal-body px-8 py-6 flex flex-col items-center">
            <img src="${imageUrl}" alt="${name}" class="w-40 h-40 object-cover rounded-xl mb-4">
            <p class="text-bakery-text leading-relaxed mb-2">${description}</p>
            <span class="text-lg font-semibold text-bakery-brown mb-4">${price}</span>
            <button class="bg-bakery-brown text-white border-none px-6 py-2 rounded-lg font-medium hover:bg-bakery-text transition-colors duration-300" onclick="addToCart('${name}')">Agregar al carrito</button>
        </div>
    `;
    // Mostrar modal (fondo gris sin transición)
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    // Transición solo para el contenido
    setTimeout(() => {
        modalContent.classList.add('opacity-100', 'scale-100');
        modalContent.classList.remove('opacity-0', 'scale-95');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('successModal');
    const modalContent = modal.querySelector('.modal-content');
    // Transición de salida solo para el contenido
    modalContent.classList.remove('opacity-100', 'scale-100');
    modalContent.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 300); // Debe coincidir con la duración de la transición
}