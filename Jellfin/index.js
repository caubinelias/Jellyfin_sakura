/* ============================================================
   JELLYFIN OTAKU SANCTUARY — CUSTOM JAVASCRIPT
   Pegar en: Dashboard → General → Custom JavaScript
   ============================================================ */
window.addEventListener('load', function() {
   // AQUÍ DEBERÍA IR TODO TU CÓDIGO DE LOS PÉTALOS
   console.log("Sakura JS cargado y ejecutándose");
});

/* ============================================================
   JELLYFIN SAKURA ENGINE — FIXED VERSION
   ============================================================ */

(function() {
    console.log("🌸 Sakura Engine: Iniciando...");
    
    function initSakura() {
        // Solo actuar si estamos en el login
        if (!document.querySelector('.loginPage')) return;
        
        // No duplicar el contenedor
        if (document.getElementById('sakura-container')) return;

        const container = document.createElement('div');
        container.id = 'sakura-container';
        // Estilo básico de seguridad para el contenedor
        container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:999998;pointer-events:none;overflow:hidden;';
        document.body.appendChild(container);

        // Generador de pétalos
        const petalInterval = setInterval(function() {
            if (!document.querySelector('.loginPage')) {
                clearInterval(petalInterval);
                container.remove();
                return;
            }

            const petal = document.createElement('div');
            petal.className = 'sakura';
            
            // Variedad aleatoria
            const size = Math.random() * 10 + 10 + 'px';
            petal.style.width = size;
            petal.style.height = size;
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.animationDuration = (Math.random() * 3 + 5) + 's';
            petal.style.animationDelay = Math.random() * 2 + 's';
            
            container.appendChild(petal);

            // Limpieza de memoria: eliminar pétalo tras caer
            setTimeout(function() { 
                if(petal) petal.remove(); 
            }, 9000);
            
        }, 450);
    }

    // Disparadores para Jellyfin
    window.addEventListener('load', initSakura);
    window.addEventListener('hashchange', initSakura);
    
    // Observador para cambios de página internos de Jellyfin
    const observer = new MutationObserver(function() {
        if (document.querySelector('.loginPage')) {
            initSakura();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();

    window.addEventListener('load', initSakura);
    window.addEventListener('hashchange', initSakura);
    new MutationObserver(initSakura).observe(document.body, { childList: true });
})();

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
