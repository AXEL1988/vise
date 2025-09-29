// Navegación móvil
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    // Mark active nav link based on current page
    const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const allLinks = document.querySelectorAll('.nav__link, .footer__nav-link');
    allLinks.forEach(link => {
        const href = (link.getAttribute('href') || '').toLowerCase();
        // Normalize index root path
        const normalizedHref = href === '' || href === '#' ? 'index.html' : href;
        if (normalizedHref.endsWith(currentPage)) {
            link.classList.add('nav__link--active');
        } else {
            link.classList.remove('nav__link--active');
        }
    });

    // Toggle del menú móvil
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        navToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
            navToggle.classList.remove('active');
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show');
            navToggle.classList.remove('active');
        }
    });
});

// Smooth scroll para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de scroll en el header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--white)';
        header.style.backdropFilter = 'none';
    }
});

// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.servicio__card, .section__header, .nosotros__content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contacto__form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = new FormData(form);
            const nombre = formData.get('nombre');
            const email = formData.get('email');
            const mensaje = formData.get('mensaje');
            
            // Validación básica
            if (!nombre || !email || !mensaje) {
                alert('Por favor, completa todos los campos');
                return;
            }
            
            // Simular envío (aquí conectarías con tu backend)
            console.log('Datos del formulario:', {
                nombre: nombre,
                email: email,
                mensaje: mensaje
            });
            
            // Mostrar mensaje de éxito
            alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
            
            // Limpiar formulario
            form.reset();
        });
    }
});

// Efecto parallax suave en la sección home - DESACTIVADO
// window.addEventListener('scroll', function() {
//     const scrolled = window.pageYOffset;
//     const homeSection = document.querySelector('.home');
//     
//     if (homeSection) {
//         const rate = scrolled * -0.5;
//         homeSection.style.transform = `translateY(${rate}px)`;
//     }
// });

// Lazy loading para imágenes (si las agregas después)
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Contador animado (ejemplo para estadísticas si las necesitas)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start < target) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Función para mostrar/ocultar botón de "ir arriba"
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const goTopBtn = document.querySelector('.go-top');
    
    if (goTopBtn) {
        if (scrollTop > 300) {
            goTopBtn.style.display = 'block';
        } else {
            goTopBtn.style.display = 'none';
        }
    }
});

// Función para ir al inicio de la página
function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===== MODAL FUNCTIONALITY =====

// Función para abrir modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }
}

// Función para cerrar modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restaurar scroll del body
    }
}

// Event listeners para modales
document.addEventListener('DOMContentLoaded', function() {
    // Abrir modal desde botones con data-modal
    document.addEventListener('click', function(e) {
        if (e.target.hasAttribute('data-modal')) {
            e.preventDefault();
            const modalId = e.target.getAttribute('data-modal');
            openModal(modalId);
        }
    });

    // Cerrar modal desde botón de cerrar
    document.addEventListener('click', function(e) {
        if (e.target.closest('.modal__close')) {
            const modal = e.target.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        }
    });

    // Cerrar modal desde overlay
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal__overlay')) {
            const modal = e.target.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        }
    });

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal.id);
            }
        }
    });
});
