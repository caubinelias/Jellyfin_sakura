/* ============================================================
   JELLYFIN OTAKU SANCTUARY — CUSTOM JAVASCRIPT
   Pegar en: Dashboard → General → Custom JavaScript
   ============================================================ */
window.addEventListener('load', function() {
   // AQUÍ DEBERÍA IR TODO TU CÓDIGO DE LOS PÉTALOS
   console.log("Sakura JS cargado y ejecutándose");
});

function initSakura() {
    // Solo ejecutar en la página de login
    if (!document.querySelector('.loginPage')) return;

    // Crear contenedor si no existe
    if (!document.getElementById('sakura-container')) {
        const container = document.createElement('div');
        container.id = 'sakura-container';
        document.body.appendChild(container);
        
        // Añadir Kanji de fondo (opcional, decorativo)
        const kanji = document.createElement('div');
        kanji.innerHTML = '桜'; // "Sakura" en Kanji
        kanji.style.cssText = `
            position: fixed;
            bottom: -5%;
            right: -2%;
            font-size: 40vh;
            color: rgba(160, 0, 255, 0.03);
            font-family: 'Noto Sans JP', sans-serif;
            pointer-events: none;
            z-index: 0;
            user-select: none;
        `;
        document.body.appendChild(kanji);
    }

    const container = document.getElementById('sakura-container');
    
    function createPetal() {
        if (!document.querySelector('.loginPage')) return;
        
        const petal = document.createElement('div');
        petal.className = 'sakura';
        
        // Valores aleatorios para variedad
        const size = Math.random() * 15 + 10 + 'px';
        const left = Math.random() * 100 + 'vw';
        const duration = Math.random() * 5 + 5 + 's';
        const delay = Math.random() * 5 + 's';
        
        petal.style.width = size;
        petal.style.height = size;
        petal.style.left = left;
        petal.style.animationDuration = duration;
        petal.style.animationDelay = delay;
        
        container.appendChild(petal);
        
        // Eliminar después de la animación
        setTimeout(() => {
            petal.remove();
        }, (parseFloat(duration) + parseFloat(delay)) * 1000);
    }

    // Crear pétalos iniciales
    for (let i = 0; i < 20; i++) {
        createPetal();
    }

    // Seguir creando pétalos
    const petalInterval = setInterval(() => {
        if (!document.querySelector('.loginPage')) {
            clearInterval(petalInterval);
            if (container) container.innerHTML = '';
            return;
        }
        createPetal();
    }, 400);
}

// Ejecutar al cargar y cuando cambie la ruta (Jellyfin es una SPA)
window.addEventListener('load', initSakura);
window.addEventListener('hashchange', initSakura);

// Observador para cambios en el DOM (Jellyfin carga contenido dinámicamente)
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            initSakura();
        }
    });
});

observer.observe(document.body, { childList: true, subtree: false });

window.addEventListener('load', function() {
   // AQUÍ DEBERÍA IR TODO TU CÓDIGO DE LOS PÉTALOS
   console.log("Sakura JS cargado y ejecutándose");
});
