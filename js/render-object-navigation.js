document.addEventListener('DOMContentLoaded', function () {
    /**
     * Renderiza la lista de navegación en el contenedor especificado.
     * @param {Array} data - Un array de objetos de navegación.
     */
    function renderObjectNavigation(data) {
        const container = document.getElementById('object-nav-container')
        if (!container) return;
        container.innerHTML = '';
        data.forEach(item => {
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
            container.appendChild(groupDiv);
        });
    }
    if (typeof objectNavigationData !== 'undefined') {
        renderObjectNavigation(objectNavigationData);
    }
    window.Uplanner = window.Uplanner || {};
    window.Uplanner.renderObjectNavigation = renderObjectNavigation;
});