/**
 * Renderiza un botón de perfil de usuario con un menú desplegable dinámico.
 * @param {string} containerId - El ID del elemento contenedor donde se renderizará el botón.
 * @param {object} userData - El objeto de datos que contiene la información del usuario y las opciones del menú.
 */
function renderUserButton(containerId, userData) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Error: Contenedor con id "${containerId}" no encontrado.`);
        return;
    }

    // Generar dinámicamente los items del menú
    const menuItemsHtml = userData.menu.map(item => {
        if (item.type === 'divider') {
            return '<li><hr class="dropdown-divider"></li>';
        }

        if (item.type === 'button') {
            // Construir atributos data-bs-* si existen
            const dataAttributes = item.dataBs 
                ? Object.entries(item.dataBs).map(([key, value]) => `data-bs-${key}="${value}"`).join(' ')
                : '';

            return `
                <li>
                    <button class="dropdown-item" type="button" href="${item.action || '#'}" ${dataAttributes}>
                        <i class="bi ${item.icon} me-2"></i>${item.text}
                    </button>
                </li>
            `;
        }
        return ''; // Ignorar tipos de item desconocidos
    }).join('');

    // Plantilla completa del componente
    const componentHtml = `
        <div class="dropdown">
            <button id="userDropdownBtn" class="btn btn-light d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <div class="position-relative">
                    <img class="rounded-circle" src="${userData.image}" alt="Foto de perfil de ${userData.name}" style="width: 40px; height: 40px;">
                    <span class="position-absolute bottom-0 end-0 bg-light border border-light rounded-circle align-items-center justify-content-center d-flex" style="width: 18px; height: 18px;">
                        <i class="bi ${userData.icon} text-primary" style="font-size: 0.8rem; line-height: 1;"></i>
                    </span>
                </div>
                <div class="text-start d-none d-md-flex align-items-center ms-2">
                    <div class="d-flex flex-column flex-1">
                        <p class="fw-semibold small mb-0">${userData.name}</p>
                        <p class="text-muted mb-0" style="font-size: 0.75rem;">Rol: ${userData.role}</p>
                    </div>
                </div>
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow border border-light p-2" aria-labelledby="userDropdownBtn">
                <li class="p-3 border-bottom bg-light">
                    <div class="d-flex gap-2 align-items-center">
                        <div class="position-relative">
                            <img class="rounded-circle" src="${userData.image}" alt="Foto de perfil de ${userData.name}" style="width: 50px; height: 50px;">
                        </div>
                        <div class="text-start d-md-flex align-items-center ms-2">
                            <div>
                                <p class="fw-semibold mb-1 text-secondary">${userData.name}</p>
                                <p class="fw-normal small mb-0 text-secondary">${userData.email}</p>
                            </div>
                        </div>
                    </div>
                </li>
                ${menuItemsHtml}
            </ul>
        </div>
    `;

    container.innerHTML = componentHtml;
}