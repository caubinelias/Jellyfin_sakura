/* ============================================================
   JELLYFIN OTAKU SANCTUARY — CUSTOM JAVASCRIPT
   Pegar en: Dashboard → General → Custom JavaScript
   ============================================================ */
window.addEventListener('load', function() {
   // AQUÍ DEBERÍA IR TODO TU CÓDIGO DE LOS PÉTALOS
   console.log("Sakura JS cargado y ejecutándose");
});

function initSakura() {
    // Eliminamos la restricción de "solo login" para probar si aparecen en cualquier lado
    // Si funciona, luego lo restringimos de nuevo
    if (document.getElementById('sakura-container')) return;

    console.log("🌸 Ejecutando lluvia de pétalos...");

    const container = document.createElement('div');
    container.id = 'sakura-container';
    document.body.appendChild(container);

    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'sakura';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 3 + 4) + 's';
        container.appendChild(petal);
        setTimeout(() => petal.remove(), 8000);
    }, 500);
}

// Ejecutar de todas las formas posibles
window.addEventListener('DOMContentLoaded', initSakura);
window.addEventListener('load', initSakura);
window.addEventListener('hashchange', initSakura);
setInterval(initSakura, 2000); // Re-chequeo cada 2 segundos

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
