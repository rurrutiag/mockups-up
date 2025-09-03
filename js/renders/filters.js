/**
 * Módulo de Filtros y Búsqueda
 * Proporciona una clase reutilizable para filtrar y buscar en un conjunto de datos.
 */
class FilterSystem {
    constructor(config) {
        // Asignación de elementos DOM y configuración
        this._assignConfig(config);

        // Generar mapeos y opciones a partir de la configuración
        this._processFilterSettings();

        // Estado interno del componente
        this.activeFilters = {};
        this.currentFilterType = '';
        this.searchTimeout = null;

        // Inicializar instancia de Modal de Bootstrap
        this.filterModalInstance = window.bootstrap && this.filterModalElement ? new bootstrap.Modal(this.filterModalElement) : null;

        this._initFilters();
        this._initEventListeners();
    }

    /**
     * Inicializa el sistema de filtros, renderizando la UI inicial.
     */
    init() {
        this._updateUI();
        this._applyFiltersAndRender();
    }

    // --- MÉTODOS PRIVADOS DE INICIALIZACIÓN ---

    /**
     * Asigna la configuración y las propiedades del constructor.
     */
    _assignConfig(config) {
        const required = ['filterBar', 'filterSidebarBody', 'searchInput', 'servicesData', 'filterSettings'];
        required.forEach(prop => {
            if (!config[prop]) throw new Error(`FilterSystem: la propiedad '${prop}' es requerida en la configuración.`);
        });

        Object.assign(this, config);
        this.renderCallback = config.renderCallback || (() => {});
    }

    /**
     * Procesa el objeto filterSettings para generar los mapeos y opciones de filtro.
     */
    _processFilterSettings() {
        this.filterFieldMapping = {};
        this.filterFieldName = {};
        this.filterOptions = {};

        for (const key in this.filterSettings) {
            const setting = this.filterSettings[key];
            this.filterFieldMapping[key] = setting.field;
            this.filterFieldName[key] = setting.name;

            // Extraer opciones únicas y válidas de los datos de servicios
            const options = [...new Set(
                this.servicesData.map(service => this._getBindingValue(service, setting.field))
            )].filter(Boolean); // filter(Boolean) elimina nulos, undefined, etc.

            this.filterOptions[key] = options.sort(); // Opcional: ordenar alfabéticamente
        }
    }

    /**
     * Inicializa la estructura de los filtros activos.
     */
    _initFilters() {
        Object.keys(this.filterFieldMapping).forEach(key => {
            this.activeFilters[key] = [];
        });
    }

    /**
     * Centraliza la inicialización de todos los manejadores de eventos.
     */
    _initEventListeners() {
        this._initSearchEvents();
        this._initModalEvents();
        this._initSidebarEvents();
        this._initFilterBarEvents();
    }

    _initSearchEvents() {
        this.searchBtn?.addEventListener('click', () => this._applyFiltersAndRender());
        this.searchInput?.addEventListener('keyup', e => {
            clearTimeout(this.searchTimeout);
            if (e.key === 'Enter') {
                this._applyFiltersAndRender();
            } else {
                this.searchTimeout = setTimeout(() => this._applyFiltersAndRender(), 300);
            }
        });
    }

    _initModalEvents() {
        this.filterModalElement?.addEventListener('show.bs.modal', e => {
            if (e.relatedTarget?.closest('.remove-filter-btn')) {
                e.preventDefault();
                return;
            }
            const filterType = e.relatedTarget?.dataset.bsFilterType;
            if (filterType) {
                this.currentFilterType = filterType;
                this._populateFilterModal(filterType);
            }
        });

        this.applyFiltersBtn?.addEventListener('click', () => {
            const selected = Array.from(this.filterModalBody.querySelectorAll('input:checked')).map(input => input.value);
            this.activeFilters[this.currentFilterType] = selected;
            this._applyFiltersAndRender();
            this.filterModalInstance?.hide();
        });
    }

    _initSidebarEvents() {
        this.filterSidebarToggleBtn?.addEventListener('click', () => this.filterSidebar.style.transform = 'translateX(0)');
        this.closeFilterSidebarBtn?.addEventListener('click', () => this.filterSidebar.style.transform = 'translateX(-100%)');

        this.applyFiltersSidebarBtn?.addEventListener('click', () => {
            this.filterSidebar.style.transform = 'translateX(-100%)';
            this._applyFiltersAndRender();
        });

        this.clearFiltersSidebarBtn?.addEventListener('click', () => {
            this._initFilters(); // Resetea los filtros
            this.filterSidebarBody.querySelectorAll('input:checked').forEach(cb => cb.checked = false);
            this._applyFiltersAndRender();
        });

        this.filterSidebarBody?.addEventListener('change', e => {
            if (e.target.matches('.filter-checkbox')) {
                const { filterType, filterValue } = e.target.dataset;
                this._updateActiveFilter(filterType, filterValue, e.target.checked);
            }
        });
    }

    _initFilterBarEvents() {
        this.filterBar?.addEventListener('click', e => {
            const removeBtn = e.target.closest('.remove-filter-btn');
            if (removeBtn) {
                e.stopPropagation();
                const { filterType, filterValue } = removeBtn.dataset;
                this._updateActiveFilter(filterType, filterValue, false);
                this._applyFiltersAndRender();
            }
        });
    }

    // --- MÉTODOS PRIVADOS DE LÓGICA Y UI ---

    /**
     * Actualiza el estado de los filtros activos.
     */
    _updateActiveFilter(type, value, shouldAdd) {
        if (!this.activeFilters[type]) this.activeFilters[type] = [];
        const filterSet = new Set(this.activeFilters[type]);
        shouldAdd ? filterSet.add(value) : filterSet.delete(value);
        this.activeFilters[type] = [...filterSet];
    }

    /**
     * Obtiene el valor de un campo de un servicio a través de sus dataBindings.
     */
    _getBindingValue(service, fieldPath) {
        const binding = service.dataBindings?.find(b => b.field === fieldPath);
        return binding ? binding.value : null;
    }

    /**
     * Renderiza la UI completa de filtros (barra y sidebar).
     */
    _updateUI() {
        if (!this.filterBar || !this.filterSidebarBody) return;
        this.filterBar.innerHTML = '';
        this.filterSidebarBody.innerHTML = '';

        Object.keys(this.filterFieldMapping).forEach(filterType => {
            this.filterBar.appendChild(this._createFilterButton(filterType));
            this.filterSidebarBody.appendChild(this._createSidebarSection(filterType));
        });
    }

    /**
     * Crea un botón de filtro para la barra principal.
     */
    _createFilterButton(filterType) {
        const filterLabel = this.filterFieldName[filterType];
        const activeFiltersForType = this.activeFilters[filterType];
        const hasActiveFilters = activeFiltersForType.length > 0;

        const button = document.createElement('button');
        button.className = 'filter-btn btn btn-light btn-sm fw-semibold d-flex align-items-center gap-2 rounded-pill';
        button.dataset.bsToggle = 'modal';
        button.dataset.bsTarget = '#filterModal';
        button.dataset.bsFilterType = filterType;

        let content = `<span class="default-text ${hasActiveFilters ? 'd-none' : ''}">${filterLabel}</span>`;
        if (hasActiveFilters) {
            const tags = activeFiltersForType.map(filter => `
                <span class="badge bg-primary fw-normal fs-6 rounded-pill d-flex align-items-center gap-1">
                    <span>${filter}</span>
                    <button type="button" class="btn-close btn-close-white remove-filter-btn" 
                            data-filter-type="${filterType}" data-filter-value="${filter}" 
                            aria-label="Remove filter" style="font-size: 0.5rem;"></button>
                </span>`).join('');
            content += `
                <div class="active-tags-container d-flex flex-wrap align-items-center gap-2">
                    <span class="text-uppercase small fw-bold text-muted">${filterLabel}</span>
                    ${tags}
                </div>`;
        }
        button.innerHTML = content;
        return button;
    }

    /**
     * Crea una sección con checkboxes para el sidebar de filtros.
     */
    _createSidebarSection(filterType) {
        const section = document.createElement('div');
        section.className = 'mb-3';
        section.innerHTML = `<h5>${this.filterFieldName[filterType]}</h5>`;

        this.filterOptions[filterType].forEach(option => {
            const isChecked = this.activeFilters[filterType].includes(option);
            section.appendChild(this._createCheckbox(filterType, option, isChecked, 'sidebar'));
        });
        return section;
    }

    /**
     * Popula el modal de filtros con las opciones correspondientes.
     */
    _populateFilterModal(filterType) {
        this.filterModalTitle.textContent = `Filtrar por ${this.filterFieldName[filterType]}`;
        this.filterModalBody.innerHTML = '';
        this.filterOptions[filterType].forEach(option => {
            const isChecked = this.activeFilters[filterType].includes(option);
            this.filterModalBody.appendChild(this._createCheckbox(filterType, option, isChecked, 'modal'));
        });
    }

    /**
     * Crea un elemento de checkbox reutilizable.
     */
    _createCheckbox(filterType, option, isChecked, context) {
        const id = `${context}-filter-${filterType}-${option.replace(/\s+/g, '-')}`;
        const div = document.createElement('div');
        div.className = 'form-check';
        div.innerHTML = `
            <input class="form-check-input filter-checkbox" type="checkbox" id="${id}" 
                   value="${option}" data-filter-type="${filterType}" data-filter-value="${option}" ${isChecked ? 'checked' : ''}>
            <label class="form-check-label" for="${id}">${option}</label>`;
        return div;
    }

    /**
     * Aplica los filtros activos y renderiza los resultados.
     */
    _applyFiltersAndRender() {
        const searchTerm = this.searchInput.value.toLowerCase().trim();
        const filteredServices = this.servicesData.filter(service => {
            const matchesSearch = !searchTerm ||
                service.title.toLowerCase().includes(searchTerm) ||
                service.resume?.toLowerCase().includes(searchTerm) ||
                service.keywords?.toLowerCase().includes(searchTerm);

            const matchesFilters = Object.keys(this.filterFieldMapping).every(type => {
                const active = this.activeFilters[type];
                if (active.length === 0) return true;
                const value = this._getBindingValue(service, this.filterFieldMapping[type]);
                return value && active.includes(value);
            });

            return matchesSearch && matchesFilters;
        });

        this.renderCallback(filteredServices);
        this._updateUI();
    }
}

window.FilterSystem = FilterSystem;