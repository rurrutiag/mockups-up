class ServicesListRender {
    constructor(config) {
        this.servicesData = config.servicesData;
        this.servicesGrid = config.servicesGrid;
        this.noResultsMessage = config.noResultsMessage;
        this.bootstrapColors = config.bootstrapColors;
    }
    initEvents() {
        if (!this.servicesGrid) return;
        this.servicesRender();
    }
    servicesRender() {
        this.servicesGrid.innerHTML = '';

        if (this.servicesData.length === 0) {
            if (this.noResultsMessage) this.noResultsMessage.classList.remove('d-none');
        } else {
            if (this.noResultsMessage) this.noResultsMessage.classList.add('d-none');
        }
        this.servicesData.forEach(service => {
            const cardWrapper = document.createElement('div');
            cardWrapper.className = "col";
            const serviceCard = document.createElement('div');
            serviceCard.className = "service-card card rounded-4 border-light p-2 h-100 shadow card-hover-lift";
            serviceCard.setAttribute('data-bs-toggle', 'modal');
            serviceCard.setAttribute('data-bs-target', '#serviceDetailModal');
            serviceCard.setAttribute('data-bs-id', service.id);
            serviceCard.setAttribute('data-service-id', service.id);

            if (service.dataBindings) {
                serviceCard.dataset.id = service.id;
                service.dataBindings.forEach(binding => {
                    if (binding.badge && binding.value) {
                        serviceCard.dataset[binding.field] = binding.value;
                    }
                });
                // Verificar si está inscrito
                const enrolledBinding = service.dataBindings.find( b=> b.field === 'enrolled');
                const isEnrolled = enrolledBinding && enrolledBinding.value ? true : false;
                // Obtener categoría para el badge principal
                const categoryBinding = service.dataBindings.find(b => b.field === 'category_1');
                const category = categoryBinding ? categoryBinding.value : '';
                const categoryColor = categoryBinding ? this.bootstrapColors[categoryBinding.color] : this.bootstrapColors['dark'];
                // Generar badges HTML
                const detailsHtml = service.dataBindings
                .filter(binding => binding.badge && binding.is_visible && binding.field !== 'category_1' && binding.field !== 'room')
                .map(binding => {
                    const colorClass = binding.color ? this.bootstrapColors[binding.color] : this.bootstrapColors['gray-200'];
                    let displayValue = binding.value;
                    if (binding.field === 'startDate') {
                        displayValue = `Inicia: ${binding.value}`;
                    } else if (binding.field === 'sessions') {
                        const sessionCount = parseInt(binding.value) || 0;
                        displayValue = sessionCount === 1 ? '1 Sesión' : `${sessionCount} Sesiones`;
                    }
                    return `<span class="badge badgeColors rounded-pill" style="background-color: ${colorClass};">
                        <div class="d-flex align-items-center gap-2 fs-6 fw-light text-muted">
                            <i class="bi ${binding.icon || ''}" title="${binding.alias}"></i> ${displayValue}
                        </div>
                    </span>`;
                }).join('');
                const progressPercentage = (service.progress.usage / service.progress.capacity) * 100;
                const progressRelation = service.progress.label ? 
                    `${service.progress.usage}/${service.progress.capacity} ${service.progress.label}` : 
                    `${service.progress.usage}/${service.progress.capacity}`;
                const progressColor = progressPercentage >= 100 ? 'bg-danger' : progressPercentage >= 40 ? 'bg-warning' : 'bg-success';

                serviceCard.innerHTML = `
                    <div class="card-body d-flex flex-column ${isEnrolled ? 'bg-light bg-gradient' : ''}">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <span class="badge bg-gradient text-white fw-light fs-6 rounded-pill"
                            style="background-color: ${categoryColor};">
                                ${category}
                            </span>
                            ${isEnrolled ? `<span class="badge bg-success bg-gradient text-white fw-light fs-6 rounded-pill">
                                <i class="bi bi-ticket-perforated"></i> Inscrito</span>` : ''}
                        </div>
                        <h3 class="fs-4 fw-bold mb-3">${service.title}</h3>
                        <p class="text-secondary fs-6 mb-4">${service.resume}</p>
                        <div class="d-flex flex-fill"></div>
                        <div class="d-flex flex-column bottom-0 start-0">
                            <div class="d-flex flex-wrap align-items-start mb-3 gap-2">
                                ${detailsHtml}
                            </div>
                            <span class="text-secondary small">${progressRelation}</span>
                            <div class="progress" style="height: 6px;">
                                <div class="progress-bar ${progressColor}" role="progressbar" style="width: ${progressPercentage}%" aria-valuenow="${service.progress.usage}" aria-valuemin="0" aria-valuemax="${service.progress.capacity}"></div>
                            </div>
                        </div>
                    </div>
                `;
            }
            cardWrapper.appendChild(serviceCard);
            this.servicesGrid.appendChild(cardWrapper);
        })
    }
}

window.ServicesListRender = ServicesListRender;