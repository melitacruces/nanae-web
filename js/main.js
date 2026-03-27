/**
 * ============================================================================
 * SCRIPT PRINCIPAL DEL SITIO WEB DE NANAE
 * ============================================================================
 * Descripción:
 * Maneja la lógica vital de la interfaz de usuario: animaciones al hacer scroll,
 * modificación dinámica del menú de navegación, y los controles manuales para
 * el carrusel de canciones.
 * Todo está escrito en Vanilla JavaScript (JS nativo) sin librerías pesadas.
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
 * 1. EFECTO DINÁMICO DE LA BARRA DE NAVEGACIÓN (NAVBAR)
 * ----------------------------------------------------------------------------
 * Hace que el menú superior pase de ser totalmente transparente (cuando estamos
 * hasta arriba en el Hero) a tener un fondo oscuro semi-transparente estilo
 * 'glassmorphism' (difuso/vidrio esmerilado) al empezar a bajar la vista.
 */
const navbar = document.getElementById("navbar");

// Agregamos un 'listener' (escucha) de eventos amarrado al scroll de la ventana
window.addEventListener("scroll", () => {
    // Si la cantidad de pixeles scrolleados ('bajados') es mayor a 50
    if (window.scrollY > 50) {
        // Agregamos el fondo desenfocado y reducimos el márgen interno vertical (pading py-3 en vez de py-6)
        navbar.classList.add("glass-panel", "py-3");
        navbar.classList.remove("bg-transparent", "py-6");
    } else {
        // Si regresamos hasta arriba del sitio, lo volvemos 100% transparente y con padding normal
        navbar.classList.add("bg-transparent", "py-6");
        navbar.classList.remove("glass-panel", "py-3");
    }
});

/* ----------------------------------------------------------------------------
 * 2. ANIMACIONES AL HACER SCROLL (INTERSECTION OBSERVER)
 * ----------------------------------------------------------------------------
 * Este bloque hace aparecer los elementos .fade-section justo en el momento
 * óptimo cuando se detectan en el "viewport" (pantalla visible del usuario)
 * permitiendo una animación de impacto coordinada, revelando texto e imagenes
 * en secuencia ordenada.
 */
// Esperamos a que la estructura DOM básica (HTML) se cargue completamente en el navegador
document.addEventListener("DOMContentLoaded", () => {
    // Configuración para el Intersection Observer
    const observerOptions = {
        root: null, // Usamos la ventana o viewport del navegador por defecto como marco
        rootMargin: "0px", // No pre-cargamos fuera de la pantalla (margen 0 de distancia)
        threshold: 0.1, // Con tan solo ver el 10% del bloque/texto, se activa la visibilidad o animación
    };

    // Declaramos nuestra instancia de observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            // Evaluamos iterativamente: si el bloque detectado (entry) cruzó el umbral al menos un 10%...
            if (entry.isIntersecting) {
                // Le añadimos la clase que dispara el estado final (is-visible devuelve la opacidad a 1)
                entry.target.classList.add("is-visible");
                // IMPORTANTE: Dejamos de 'observar' que animar una y se detenga para optimizar procesamiento general.
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Ejecutamos la búsqueda de todos los elementos que escondimos inicialmente con clase '.fade-section'.
    // Y para cada uno que encontramos, le decimos a nuestro vigia (observer) que no le quite el ojo de encima.
    document.querySelectorAll(".fade-section").forEach((section) => {
        observer.observe(section);
    });

    /**
     * Extra: Calculamos dinámicamente el año calendario real desde la máquina
     * del visitante para imprimir sobre el copyright en el pie de página
     * así nunca está desfasado!
     */
    const yearContainer = document.getElementById("year");
    if (yearContainer) {
        yearContainer.textContent = new Date().getFullYear();
    }
});

/* ----------------------------------------------------------------------------
 * 3. CONTROL LÓGICO DEL CARRUSEL DE CANCIONES HORIZONTAL (DISCOGRAFÍA)
 * ----------------------------------------------------------------------------
 * En teléfonos o pantallas que no se adaptan todas las tarjetas juntas
 * ofrecemos 2 botones gráficos para avanzar cómodamente sin obligar el arrastre táctil.
 */

window.scrollCarousel = function (direction) {
    const carousel = document.getElementById("music-carousel");
    if (carousel) {
        /*
         * Detectamos el ancho global actual de la pantalla para el paso inteligente.
         * Si estamos en móvil (ancho menor a 768px - Tailwind 'md' point):
         *    Desplazamos el 85% del ancho de la pantalla (porque la tarjeta mide un ~85vw según estilos).
         * Si estamos en Escritorio:
         *    Damos un salto fijo y de ancho de columna estándar un pelín extendido de ~824 píxeles que engloba
         *    una tarjeta de 800px completa más su separación de margen izquierdo en gap de flex (24px aprox).
         */
        const scrollAmount =
            window.innerWidth < 768 ? window.innerWidth * 0.85 : 824;

        // Ejecutamos el desplazamiento del objeto contendor DOM haciendo un 'scrollBy' relativo
        // dependiendo de si mandamos la cadena "left" (negativo) para la Izq o "right" (positivo) para Der
        carousel.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior:
                "smooth" /* Obliga a reproducir una animación de suave derrape sin chocar brusco */,
        });
    }
};
