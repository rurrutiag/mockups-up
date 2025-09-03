class SuiteRender {
    constructor(config) {
        // Aplicación que se muestra activa
        this.appActive = config.appActive;

        // Barra lateral de aplicaciones (desktop)
        this.appSidebar = config.appSidebar;

        // Cuerpo de barra lateral de aplicaciones (desktop)
        this.appSidebarBody = config.appSidebarBody;

        // Botón para abrir/ocultar barra lateral de aplicaciones (desktop)
        this.appSidebarToggleBtn = config.appSidebarToggleBtn;

        // Botón para abrir hub de aplicaciones (mobile)
        this.mobileAppHubBtn = config.mobileAppHubBtn;

        // Modal de hub de aplicaciones (mobile)
        this.appHubModal = config.appHubModal;

        // Botón para cerrar modal de hub de aplicaciones (mobile)
        this.closeAppHubModalBtn = config.closeAppHubModalBtn;

        // Grid de aplicaciones en modal de hub (mobile)
        this.appHubGrid = config.appHubGrid;

        // Contenedor de navegación por objetos
        this.objectNavContainer = config.objectNavContainer;

        // Botón de perfil de usuario
        this.userProfileBtn = config.userProfileBtn;

        // Contenedor de notificaciones
        this.notificationsContainer = config.notificationsContainer;

        // Badge de notificaciones
        this.notificationsBadge = config.notificationsBadge;

        // Switch de notificaciones
        this.notificationsSwitch = config.notificationsSwitch;

        // Notificaciones no leídas
        this.notificationsUnread = config.notificationsUnread;

        // Data de aplicaciones
        this.appsData = config.appsData;

        // Data de objetos para navegación secundaria
        this.objectNavigationData = config.objectNavigationData;

        // Data de opciones del menú del encabezado
        this.userButtonOptions = config.userButtonOptions;

        // Data de notificaciones
        this.notificationsData = config.notificationsData;
    }

    // Iniciar eventos
    initEvents() {
        this.appSidebarRender();
        this.appHubRender();
        if (this.mobileAppHubBtn && this.appHubModal) {
            this.mobileAppHubBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const appHubModalInstance = bootstrap.Modal.getOrCreateInstance(this.appHubModal);
                appHubModalInstance.show();
            });
        }

        if (this.closeAppHubModalBtn && this.appHubModal) {
            this.closeAppHubModalBtn.addEventListener('click', () => {
                const content = this.appHubModal.querySelector('.user-modal-content');
                if (content) content.classList.add('scale-95', 'opacity-0');
                setTimeout(() => this.appHubModal.classList.add('hidden'), 200);
            });
        }

        if (this.appSidebarToggleBtn) {
            this.appSidebarToggleBtn.addEventListener('click', () => {
                const isExpanded = this.appSidebar.classList.toggle('expanded');
                const newSize = isExpanded ? '250px' : '80px';
                this.appSidebar.style.width = newSize;
                this.mainHeader.style.left = newSize;
                this.secondaryNav.style.left = newSize;
                this.mainContent.style.paddingLeft = newSize;
            });
        }
        this.objectNavigationRender();
        this.notificationsRender();
        this.notificationsFilter();
        this.updateNotificationBadge();
        this.userButtonRender();
    }

    // Renderizar barra lateral de aplicaciones (desktop)
    appSidebarRender() {
        this.appSidebarBody.innerHTML = '';
        this.appsData.forEach(app => {
            const linkElement = document.createElement('a');
            linkElement.href = app.href;
            linkElement.className = `nav-link app-link d-flex align-items-top text-white rounded gap-2 mb-2 ${app.aka === this.appActive ? 'active' : ''}`;
            linkElement.innerHTML = `
                <i class="bi ${app.icon} fs-4 p-1" data-bs-toggle="tooltip" data-bs-placement="right" title="${app.title}"></i>
                <div class="app-link-text">
                    <p class="fs-6 fw-semibold mb-0">${app.title}</p>
                    <small class="text-white-50">${app.subtitle}</small>
                </div>`;
            this.appSidebarBody.appendChild(linkElement);
        });
    }

    // Renderizar hub de aplicaciones (mobile)
    appHubRender() {
        if (!this.appHubGrid) return;
        this.appHubGrid.innerHTML = '';
        this.appsData.forEach(app => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col';
            const appCard = document.createElement('a');
            appCard.href = app.href;
            appCard.className = `card h-100 text-decoration-none ${app.aka === this.appActive ? 'border-primary' : ''}`;
            const cardBody = document.createElement('div');
            cardBody.className = `card-body d-flex flex-column align-items-center text-center p-3 ${app.aka === this.appActive ? 'bg-primary bg-opacity-10': ''}`;
            const iconDiv = document.createElement('div');
            iconDiv.className = 'mb-2';
            iconDiv.innerHTML = `<i class="bi ${app.icon} fs-1 ${app.aka === this.appActive ? 'text-primary' : 'text-secondary'}"></i>`;
            
            const titleElement = document.createElement('h6');
            titleElement.className = 'card-title mb-0 fw-bold';
            titleElement.textContent = app.title;

            const subtitleElement = document.createElement('p');
            subtitleElement.className = 'card-text small text-muted mb-0';
            subtitleElement.textContent = app.subtitle;

            cardBody.appendChild(iconDiv);
            cardBody.appendChild(titleElement);
            cardBody.appendChild(subtitleElement);
            appCard.appendChild(cardBody);
            colDiv.appendChild(appCard);
            this.appHubGrid.appendChild(colDiv);
        });
    }

    // Renderizar navegación por objetos
    objectNavigationRender() {
        if (!this.objectNavContainer) return;

        this.objectNavContainer.innerHTML = '';
        this.objectNavigationData.forEach(item => {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'btn-group';
            groupDiv.setAttribute('role', 'group');
            
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `btn btn-sm dropdown-toggle ${item.active ? 'btn-primary active' : 'btn-light'}`;
            button.setAttribute('data-bs-toggle', 'dropdown');
            button.setAttribute('aria-expanded', 'false');
            button.textContent = item.buttonText;
            const ul = document.createElement('ul');
            ul.className = 'dropdown-menu';

            item.items.forEach(itemData => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.className = 'dropdown-item';
                a.href = itemData.href;
                a.textContent = itemData.text;
                if (itemData.tooltip) {
                    a.setAttribute('data-bs-toggle', 'tooltip');
                    a.setAttribute('title', itemData.tooltip);
                    a.setAttribute('data-bs-placement', 'right');
                }
                li.appendChild(a);
                ul.appendChild(li);
            });
            groupDiv.appendChild(button);
            groupDiv.appendChild(ul);
            this.objectNavContainer.appendChild(groupDiv);
        });
    }

    // User  Profile Button
    userButtonRender() {
        if (!this.userProfileBtn) return;
        // Generar dinámicamente los items del menú
        const menuItemsHtml = this.userButtonOptions.menu.map(item => {
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
                    <img class="rounded-circle" src="${this.userButtonOptions.image}" alt="Foto de perfil de ${this.userButtonOptions.name}" style="width: 40px; height: 40px;">
                    <span class="position-absolute bottom-0 end-0 bg-light border border-light rounded-circle align-items-center justify-content-center d-flex" style="width: 18px; height: 18px;">
                        <i class="bi ${this.userButtonOptions.icon} text-primary" style="font-size: 0.8rem; line-height: 1;"></i>
                    </span>
                </div>
                <div class="text-start d-none d-md-flex align-items-center ms-2">
                    <div class="d-flex flex-column">
                        <p class="fw-semibold small mb-0 text-secondary text-nowrap">${this.userButtonOptions.name}</p>
                        <p class="text-muted mb-0 text-nowrap" style="font-size: 0.75rem;">Rol: ${this.userButtonOptions.role}</p>
                    </div>
                </div>
            </button>
            <ul class="dropdown-menu dropdown-menu-end shadow border border-light p-2" aria-labelledby="userDropdownBtn">
                <li class="p-3 border-bottom bg-light">
                    <div class="d-flex gap-2 align-items-center">
                        <div class="position-relative">
                            <img class="rounded-circle" src="${this.userButtonOptions.image}" alt="Foto de perfil de ${this.userButtonOptions.name}" style="width: 50px; height: 50px;">
                        </div>
                        <div class="text-start d-md-flex align-items-center ms-2">
                            <div>
                                <p class="fw-semibold mb-1 text-secondary">${this.userButtonOptions.name}</p>
                                <p class="fw-normal small mb-0 text-secondary">${this.userButtonOptions.email}</p>
                            </div>
                        </div>
                    </div>
                </li>
                ${menuItemsHtml}
            </ul>
        </div>`;
        this.userProfileBtn.innerHTML = componentHtml;
    }

    // Notifications: Renderiza la lista de notificaciones en el contenedor especificado
    notificationsRender() {
        if (!this.notificationsContainer) return;

        this.notificationsContainer.innerHTML = '';
        this.notificationsData.forEach(notification => {
            const li = document.createElement('li');
            li.classList.add('nav-item', 'w-100', notification.read ? 'notification-read' : 'notification-unread');
            li.setAttribute('role', 'presentation');
            li.innerHTML = `
                <button class="nav-link w-100 text-start d-flex align-items-top" data-bs-toggle="tab" type="button">
                    <div class="position-relative">
                        <img class="rounded-circle"
                        src="${notification.img}"
                        alt="Foto de ${notification.from}"
                        style="width: 40px; height: 40px;">
                    </div>
                    <div class="ms-1">
                        <div>
                            <div class="d-flex">
                                <p class="fw-semibold text-dark small mb-0">${notification.activity} ${notification.fromType === 'course' ? 'en ' + notification.from : 'de ' + notification.from}</p>
                                <p class="text-muted ms-auto" style="font-size: 0.75rem;">${notification.time}</p>
                            </div>
                            <p class="text-muted" style="font-size: 0.75rem;">${notification.message}</p>
                        </div>
                    </div>
                </button>
            `;
            this.notificationsContainer.appendChild(li);
        });
    }

    // Notifications: Actualiza el contador visual de notificaciones no leídas
    updateNotificationBadge() {
        const unreadCount = this.notificationsUnread.length;
        const badge = this.notificationsBadge;
        if (!badge) return; // Salida segura

        if (unreadCount > 0) {
            badge.textContent = unreadCount > 99 ? "+99" : unreadCount;
            badge.classList.remove('d-none');
        } else {
            badge.classList.add('d-none');
        }
    }

    // Notifications: Lógica para el filtro de "Solo no leídas"
    notificationsFilter() {
        const switchElement = this.notificationsSwitch;
        const notificationsList = this.notificationsContainer;
        if (!switchElement || !notificationsList) return;

        switchElement.addEventListener('change', () => {
            notificationsList.classList.toggle('filter-unread', switchElement.checked);
        });
    }

}

window.SuiteRender = SuiteRender;