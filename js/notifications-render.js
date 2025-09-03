document.addEventListener('DOMContentLoaded', function () {
    /**
     * Renderiza la lista de notificaciones en el contenedor especificado.
     * @param {Array} data - Un array de objetos de notificación.
     */
    function renderNotifications(data) {
        const container = document.getElementById('notifications-list');
        if (!container) return; // Salida segura si el contenedor no existe

        container.innerHTML = ''; // Limpiar notificaciones anteriores
        data.forEach(notification => {
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
            container.appendChild(li);
        });
    }

    /**
     * Actualiza el contador visual de notificaciones no leídas.
     */
    function updateNotificationBadge() {
        const unreadCount = document.querySelectorAll('.notification-unread').length;
        const badge = document.getElementById('notification-badge');
        if (!badge) return; // Salida segura

        if (unreadCount > 0) {
            badge.textContent = unreadCount > 99 ? "+99" : unreadCount;
            badge.classList.remove('d-none');
        } else {
            badge.classList.add('d-none');
        }
    }

    // --- Lógica para el filtro de "Solo no leídas" ---
    const unreadNotificationsSwitch = document.getElementById('flexSwitchCheckDefault');
    const notificationsList = document.querySelector('.notifications-scrollable-ul');

    if (unreadNotificationsSwitch && notificationsList) {
        unreadNotificationsSwitch.addEventListener('change', function () {
            notificationsList.classList.toggle('filter-unread', this.checked);
        });
    }

    // --- Inicialización ---
    // Se asume que la variable `notificationsData` está disponible globalmente desde `notifications-data-student.js`
    if (typeof notificationsData !== 'undefined') {
        renderNotifications(notificationsData);
        updateNotificationBadge();
    }

    // Exponer funciones globalmente si se necesitan llamar desde fuera
    window.Uplanner = window.Uplanner || {};
    window.Uplanner.renderNotifications = renderNotifications;
    window.Uplanner.updateNotificationBadge = updateNotificationBadge;
});