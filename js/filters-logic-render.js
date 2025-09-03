/**
 * Módulo de Filtros y Búsqueda
 * Este módulo proporciona funcionalidad para filtrar y buscar en un conjunto de datos
 * con soporte para filtros múltiples, búsqueda de texto y renderizado dinámico.
 */

// Clase FilterSystem que maneja toda la lógica de filtros y búsqueda
class FilterSystem {
    constructor(config) {
        // Elementos DOM
        this.filterBar = config.filterBar;
        this.filterSidebar = config.filterSidebar;
        this.filterSidebarBody = config.filterSidebarBody;
        this.searchInput = config.searchInput;
        this.searchBtn = config.searchBtn;
        this.filterModalElement = config.filterModalElement;
        this.filterModalTitle = config.filterModalTitle;
        this.filterModalBody = config.filterModalBody;
        this.applyFiltersBtn = config.applyFiltersBtn;
        this.closeFilterSidebarBtn = config.closeFilterSidebarBtn;
        this.filterSidebarToggleBtn = config.filterSidebarToggleBtn;
        this.applyFiltersSidebarBtn = config.applyFiltersSidebarBtn;
        this.clearFiltersSidebarBtn = config.clearFiltersSidebarBtn;
        
        // Datos y configuración
        this.servicesData = config.servicesData || [];
        this.renderCallback = config.renderCallback || this.defaultRenderCallback;
        this.filterFieldMapping = config.filterFieldMapping || {};
        this.filterFieldName = config.filterFieldName || {};
        this.filterOptions = config.filterOptions || {};
        
        // Estado
        this.activeFilters = {};
        this.enrolledServices = {};
        this.favoriteServices = [];
        this.currentFilterType = '';
        this.activeDropdown = null;
        this.filterModalInstance = config.filterModalInstance || null;
        if (!this.filterModalInstance && window.bootstrap && this.filterModalElement) {
            this.filterModalInstance = new bootstrap.Modal(this.filterModalElement);
        }        
        // Inicializar filtros activos
        Object.keys(this.filterFieldMapping).forEach(key => {
            this.activeFilters[key] = [];
        });
        this.activeFilters.search = '';
        
        // Inicializar eventos
        this.initEvents();
    }
    
    /**
     * Inicializa todos los event listeners
     */
    initEvents() {
        // Evento de búsqueda
        if (this.searchBtn) {
            this.searchBtn.addEventListener('click', () => this.applyFiltersAndRender());
        }
        
        if (this.searchInput) {
            this.searchInput.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    this.applyFiltersAndRender();
                } else {
                    // Aplicar filtro después de un breve retraso para evitar muchas llamadas durante la escritura rápida
                    clearTimeout(this.searchInput.searchTimeout);
                    this.searchInput.searchTimeout = setTimeout(() => {
                        this.applyFiltersAndRender();
                    }, 300); // 300ms de retraso
                }
            });
        }
        
        // Eventos del modal de filtros
        if (this.filterModalElement) {
            this.filterModalElement.addEventListener('show.bs.modal', (event) => {
                if (event.relatedTarget && event.relatedTarget.closest('.remove-filter-btn')) {
                    event.preventDefault();
                    return false;
                }
                const button = event.relatedTarget;
                if (button && button.matches('.filter-btn')) {
                    const filterType = button.getAttribute('data-bs-filter-type');
                    this.populateFilterModal(filterType);
                }
            });
        }
        
        if (this.applyFiltersBtn) {
            this.applyFiltersBtn.addEventListener('click', () => {
                const selectedOptions = [];
                this.filterModalBody.querySelectorAll('input[type="checkbox"]:checked').forEach(input => {
                    selectedOptions.push(input.value);
                });
                this.activeFilters[this.currentFilterType] = selectedOptions;
                this.updateFilterButtonUI();
                this.applyFiltersAndRender();
                if (this.filterModalInstance) {
                    this.filterModalInstance.hide();
                }
            });
        }
        
        // Eventos del sidebar de filtros
        if (this.filterSidebarToggleBtn) {
            this.filterSidebarToggleBtn.addEventListener('click', () => {
                if (this.filterSidebar) {
                    this.filterSidebar.style.transform = 'translateX(0)';
                }
            });
        }
        
        if (this.closeFilterSidebarBtn) {
            this.closeFilterSidebarBtn.addEventListener('click', () => {
                if (this.filterSidebar) {
                    this.filterSidebar.style.transform = 'translateX(-100%)';
                }
            });
        }
        
        if (this.applyFiltersSidebarBtn) {
            this.applyFiltersSidebarBtn.addEventListener('click', () => {
                if (this.filterSidebar) {
                    this.filterSidebar.style.transform = 'translateX(-100%)';
                }
                this.applyFiltersAndRender();
            });
        }
        
        if (this.clearFiltersSidebarBtn) {
            this.clearFiltersSidebarBtn.addEventListener('click', () => {
                // Limpiar todos los filtros activos
                Object.keys(this.activeFilters).forEach(key => {
                    if (key !== 'search') {
                        this.activeFilters[key] = [];
                    }
                });
                
                // Desmarcar todos los checkboxes
                const checkboxes = this.filterSidebar.querySelectorAll('.filter-sidebar-check');
                checkboxes.forEach(checkbox => {
                    checkbox.checked = false;
                });
                
                // Actualizar UI y renderizar servicios
                this.applyFiltersAndRender();
            });
        }
        
        // Delegación de eventos para los checkboxes del sidebar
        if (this.filterSidebar) {
            this.filterSidebar.addEventListener('change', (e) => {
                if (e.target && e.target.matches('.filter-sidebar-check')) {
                    const filterType = e.target.dataset.filterType;
                    const filterValue = e.target.dataset.filterValue;
                    
                    if (!this.activeFilters[filterType]) {
                        this.activeFilters[filterType] = [];
                    }
                    
                    if (e.target.checked) {
                        if (!this.activeFilters[filterType].includes(filterValue)) {
                            this.activeFilters[filterType].push(filterValue);
                        }
                    } else {
                        this.activeFilters[filterType] = this.activeFilters[filterType].filter(v => v !== filterValue);
                    }
                }
            });
        }
    }
    
    /**
     * Obtiene un valor de un campo específico de un servicio
     * @param {Object} service - El objeto de servicio
     * @param {String} fieldPath - La ruta al campo en el objeto de servicio
     * @returns {String|null} - El valor del campo o null si no existe
     */
    getBindingValue(service, fieldPath) {
        if (!service || !service.dataBlindings || !fieldPath) return null;
        
        const binding = service.dataBlindings.find(b => b.field === fieldPath);
        return binding ? binding.value : null;
    }
    
    /**
     * Actualiza la UI de los botones de filtro
     */
    updateFilterButtonUI() {
        if (!this.filterBar || !this.filterSidebarBody) return;
        
        // Limpiar contenedores
        this.filterBar.innerHTML = '';
        this.filterSidebarBody.innerHTML = '';
        
        // Crear botones de filtro y contenido del sidebar
        Object.keys(this.filterFieldMapping).forEach(filterType => {
            const filterLabel = this.filterFieldName[filterType];
            
            // filter-bar: Crear botón de filtro
            const filterBtn = document.createElement('button');
            filterBtn.className = 'filter-btn btn btn-light btn-sm fw-semibold d-flex align-items-center gap-2 rounded-pill';
            filterBtn.setAttribute('data-bs-toggle', 'modal');
            filterBtn.setAttribute('data-bs-target', '#filterModal');
            filterBtn.setAttribute('data-bs-filter-type', filterType);
            
            // filter-bar: Crear contenedor para el texto por defecto
            const defaultText = document.createElement('span');
            defaultText.className = 'default-text';
            defaultText.textContent = filterLabel;
            
            // filter-bar: Crear contenedor para las etiquetas activas
            const activeTagsContainer = document.createElement('div');
            activeTagsContainer.className = 'active-tags-container d-none d-flex flex-wrap align-items-center gap-2';

            // filter-bar: Crear etiqueta para el tipo de filtro
            const filterTypeLabel = document.createElement('span');
            filterTypeLabel.className = 'text-uppercase small fw-bold text-muted';
            filterTypeLabel.textContent = filterLabel;
            
            // filter-bar: Agregar etiqueta al contenedor
            activeTagsContainer.appendChild(filterTypeLabel);
            
            // filter-bar: Agregar el texto por defecto al botón
            filterBtn.appendChild(defaultText);
            
            // filter-bar: Agregar el contenedor al botón
            filterBtn.appendChild(activeTagsContainer);


            const activeFiltersForType = this.activeFilters[filterType];

            // filter-bar: Agregar etiquetas para filtros activos
            if (activeFiltersForType && activeFiltersForType.length > 0) {
                defaultText.classList.add('d-none');
                activeTagsContainer.classList.remove('d-none');
                
                activeFiltersForType.forEach(filter => {
                    const badge = document.createElement('span');
                    badge.className = 'badge bg-primary fw-normal fs-6 rounded-pill d-flex align-items-center gap-1';
                    badge.innerHTML = `
                            <span>${filter}</span>
                            <button 
                                type="button" 
                                class="btn-close btn-close-white remove-filter-btn" 
                                style="font-size: 0.5rem;"
                                data-filter-type="${filterType}" 
                                data-filter-value="${filter}"
                                aria-label="Remove filter">
                            </button>
                    `;
                    
                    // Event listener para remover filtro
                    const removeBtn = badge.querySelector('.remove-filter-btn');
                    const filterSystem = this; // Guardar el contexto de la clase
                    
                    if (removeBtn) {
                        removeBtn.addEventListener('mousedown', function (e) {
                            e.stopPropagation();
                            e.preventDefault();                            
                            
                            const type = this.dataset.filterType;
                            const valueToRemove = this.dataset.filterValue;
                            
                            if (filterSystem.activeFilters[type]) {
                                filterSystem.activeFilters[type] = filterSystem.activeFilters[type].filter(item => item !== valueToRemove);
                                filterSystem.applyFiltersAndRender();
                            }
                            return false;
                        });
                    }

                    activeTagsContainer.appendChild(badge);
                });
            }
            // Agregar el botón al contenedor de filtros
            this.filterBar.appendChild(filterBtn);
            
            // Crear sección en el sidebar
            const sidebarSection = document.createElement('div');
            sidebarSection.className = 'mb-3';
            
            const sidebarTitle = document.createElement('h5');
            sidebarTitle.textContent = filterLabel;
            sidebarSection.appendChild(sidebarTitle);
            
            // Crear checkboxes para el sidebar
            this.filterOptions[filterType].forEach(option => {
                const isChecked = this.activeFilters[filterType].includes(option);
                const checkboxDiv = document.createElement('div');
                checkboxDiv.className = 'form-check';
                
                const checkbox = document.createElement('input');
                checkbox.className = 'form-check-input filter-checkbox';
                checkbox.type = 'checkbox';
                checkbox.id = `sidebar-filter-${filterType}-${option.replace(/\s+/g, '-')}`;
                checkbox.value = option;
                checkbox.checked = isChecked;
                checkbox.dataset.filterType = filterType;
                
                checkbox.addEventListener('change', () => {
                    if (checkbox.checked) {
                        // Agregar filtro
                        if (!this.activeFilters[filterType].includes(option)) {
                            this.activeFilters[filterType].push(option);
                        }
                    } else {
                        // Remover filtro
                        const index = this.activeFilters[filterType].indexOf(option);
                        if (index !== -1) {
                            this.activeFilters[filterType].splice(index, 1);
                        }
                    }
                    
                    // Actualizar UI
                    this.updateFilterButtonUI();
                });
                
                const label = document.createElement('label');
                label.className = 'form-check-label';
                label.htmlFor = checkbox.id;
                label.textContent = option;
                
                checkboxDiv.appendChild(checkbox);
                checkboxDiv.appendChild(label);
                sidebarSection.appendChild(checkboxDiv);
            });
            
            this.filterSidebarBody.appendChild(sidebarSection);
        });
    }
    
    /**
     * Popula el modal de filtros con opciones para un tipo de filtro específico
     * @param {String} filterType - El tipo de filtro
     */
    populateFilterModal(filterType) {
        if (!this.filterModalTitle || !this.filterModalBody) return;
        
        // Establecer título del modal
        this.filterModalTitle.textContent = `Filtrar por ${this.filterFieldName[filterType]}`;
        
        // Limpiar y poblar el cuerpo del modal
        this.filterModalBody.innerHTML = '';
        
        // Crear checkboxes para las opciones de filtro
        this.filterOptions[filterType].forEach(option => {
            const isChecked = this.activeFilters[filterType].includes(option);
            const checkboxDiv = document.createElement('div');
            checkboxDiv.className = 'form-check';
            
            const checkbox = document.createElement('input');
            checkbox.className = 'form-check-input filter-checkbox';
            checkbox.type = 'checkbox';
            checkbox.id = `filter-${filterType}-${option.replace(/\s+/g, '-')}`;
            checkbox.value = option;
            checkbox.checked = isChecked;
            checkbox.dataset.filterType = filterType;
            
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    // Agregar filtro
                    if (!this.activeFilters[filterType].includes(option)) {
                        this.activeFilters[filterType].push(option);
                    }
                } else {
                    // Remover filtro
                    const index = this.activeFilters[filterType].indexOf(option);
                    if (index !== -1) {
                        this.activeFilters[filterType].splice(index, 1);
                    }
                }
            });
            
            const label = document.createElement('label');
            label.className = 'form-check-label';
            label.htmlFor = checkbox.id;
            label.textContent = option;
            
            checkboxDiv.appendChild(checkbox);
            checkboxDiv.appendChild(label);
            this.filterModalBody.appendChild(checkboxDiv);
        });
    }
    
    /**
     * Aplica los filtros y renderiza los resultados
     */
    applyFiltersAndRender() {
        const searchTerm = this.searchInput ? this.searchInput.value.toLowerCase().trim() : '';
        const filteredServices = this.servicesData.filter(service => {
            const matchesSearch = !searchTerm ||
                service.title.toLowerCase().includes(searchTerm) ||
                (service.resume && service.resume.toLowerCase().includes(searchTerm)) ||
                (service.keywords && service.keywords.toLowerCase().includes(searchTerm));
            
            // Aplicar filtros para cada tipo definido en filterFieldMapping
            const filterResults = Object.keys(this.filterFieldMapping).map(filterType => {
                const fieldPath = this.filterFieldMapping[filterType];
                const fieldValue = this.getBindingValue(service, fieldPath);
                return this.activeFilters[filterType].length === 0 || 
                    (fieldValue && this.activeFilters[filterType].includes(fieldValue));
            });
            
            // Todos los filtros deben coincidir
            return matchesSearch && filterResults.every(result => result);
        });
        
        // Llamar al callback de renderizado con los servicios filtrados
        this.renderCallback(filteredServices);
        
        // Actualizar la UI de los botones de filtro
        this.updateFilterButtonUI();
    }
    
    /**
     * Callback de renderizado por defecto (no hace nada)
     * @param {Array} services - Los servicios filtrados
     */
    defaultRenderCallback(services) {
        console.log('Servicios filtrados:', services);
    }
    
    /**
     * Inicializa el sistema de filtros
     */
    init() {
        this.updateFilterButtonUI();
        this.applyFiltersAndRender();
    }
}

// Exportar la clase para su uso
window.FilterSystem = FilterSystem;