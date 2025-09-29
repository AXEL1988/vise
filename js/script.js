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

    // Setup ARIA for accessibility
    if (navToggle) {
        navToggle.setAttribute('aria-controls', 'nav-menu');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú');
    }

    function openNav() {
        navMenu.classList.add('show');
        navToggle.classList.add('active');
        navToggle.setAttribute('aria-expanded', 'true');
        navToggle.setAttribute('aria-label', 'Cerrar menú');
        document.body.classList.add('nav-open');
    }

    function closeNav() {
        navMenu.classList.remove('show');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú');
        document.body.classList.remove('nav-open');
    }

    // Toggle del menú móvil
    navToggle.addEventListener('click', function() {
        if (navMenu.classList.contains('show')) {
            closeNav();
        } else {
            openNav();
        }
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeNav();
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            closeNav();
        }
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeNav();
    });
});

// Smooth scroll para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            // Cerrar menú si está abierto antes de desplazar
            const navMenu = document.getElementById('nav-menu');
            const navToggle = document.getElementById('nav-toggle');
            if (navMenu && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                if (navToggle) navToggle.classList.remove('active');
                document.body.classList.remove('nav-open');
            }

            const header = document.querySelector('.header');
            const headerHeight = header ? header.offsetHeight : 0;
            const rawTarget = target.offsetTop - headerHeight;
            const targetPosition = Math.max(0, rawTarget); // evita valores negativos

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== CTA slider controls =====
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('#sectores .cta__cards');
    const prev = document.querySelector('#sectores .cta__prev');
    const next = document.querySelector('#sectores .cta__next');
    if (!track) return;

    const getCardWidth = () => track.querySelector('.cta__card')?.getBoundingClientRect().width || 300;

    function scrollByCard(dir) {
        const delta = getCardWidth() + 16; // include gap
        track.scrollBy({ left: dir * delta, behavior: 'smooth' });
    }

    if (prev) prev.addEventListener('click', () => scrollByCard(-1));
    if (next) next.addEventListener('click', () => scrollByCard(1));

    // Drag / touch support
    let isDown = false, startX = 0, scrollLeft = 0;
    track.addEventListener('pointerdown', (e) => {
        isDown = true;
        track.setPointerCapture(e.pointerId);
        startX = e.clientX;
        scrollLeft = track.scrollLeft;
    });
    track.addEventListener('pointermove', (e) => {
        if (!isDown) return;
        const dx = e.clientX - startX;
        track.scrollLeft = scrollLeft - dx;
    });
    ['pointerup','pointercancel','pointerleave'].forEach(evt => track.addEventListener(evt, () => { isDown = false; }));
});

// ===== Shorten CTA text on small screens =====
document.addEventListener('DOMContentLoaded', function() {
    const ctaBtn = document.querySelector('.footer__cta-button');
    if (!ctaBtn) return;
    const longText = 'Contáctanos o reserva una cita hoy mismo';
    const shortText = 'Contáctanos o reserva una cita';

    function updateCtaText() {
        if (window.matchMedia('(max-width: 480px)').matches) {
            ctaBtn.textContent = shortText;
        } else {
            ctaBtn.textContent = longText;
        }
    }

    updateCtaText();
    window.addEventListener('resize', updateCtaText);
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
