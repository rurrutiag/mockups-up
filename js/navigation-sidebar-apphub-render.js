/**
 * Datos de navegación para el portal de Cuidado al Estudiante
 * Este archivo contiene los datos de navegación utilizados en la interfaz de usuario
 */

// Datos de enlaces de la barra lateral
var appsData = [
    { href: '#', icon: 'bi-gear-wide-connected', title: 'Eficiencia Institucional', subtitle: '(Institutional Efficiency)', aka: 'institutional-efficiency' },
    { href: '#', icon: 'bi-award', title: 'Calidad Académica', subtitle: '(Academic Quality and Delivery)', aka: 'academic-quality' },
    { href: '#', icon: 'bi-people', title: 'Relación Estudiantil', subtitle: '(Student Experience)', aka: 'student-experience' },
    { href: '#', icon: 'bi-bar-chart-line', title: 'Análisis Institucional', subtitle: '(Institutional Analytics)', aka: 'institutional-analytics' },
    { href: '#', icon: 'bi-robot', title: 'Asistente Digital', subtitle: '(Pathways Digital Assistant)', aka: 'digital-assistant' },
];

class AppRender {
    constructor(config) {
        this.appActive = config.appActive;
        this.appList = config.appSidebarBody;
        this.mobileAppHubBtn = config.mobileAppHubBtn;
        this.appHubModal = config.appHubModal;
        this.closeAppHubModalBtn = config.closeAppHubModalBtn;
        this.appHubGrid = config.appHubGrid;
        this.appSidebar = config.appSidebar;
        this.appSidebarToggleBtn = config.appSidebarToggleBtn;
        this.mainHeader = config.mainHeader;
        this.secondaryNav = config.secondaryNav;
        this.mainContent = config.mainContent;
    }

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
    }

    appHubRender() {
        if (!this.appHubGrid) return;
        this.appHubGrid.innerHTML = '';
        appsData.forEach(app => {
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

    appSidebarRender() {
        this.appList.innerHTML = '';
        appsData.forEach(app => {
            const linkElement = document.createElement('a');
            linkElement.href = app.href;
            linkElement.className = `nav-link app-link d-flex align-items-top text-white rounded gap-2 mb-2 ${app.aka === this.appActive ? 'active' : ''}`;
            linkElement.innerHTML = `
                <i class="bi ${app.icon} fs-4 p-1" data-bs-toggle="tooltip" data-bs-placement="right" title="${app.title}"></i>
                <div class="app-link-text">
                    <p class="fs-6 fw-semibold mb-0">${app.title}</p>
                    <small class="text-white-50">${app.subtitle}</small>
                </div>`;
            this.appList.appendChild(linkElement);
        });
    };
} 

window.AppRender = AppRender;