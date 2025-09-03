/**
 * Módulo de renderizado de servicios
 * Este módulo proporciona funcionalidad para renderizar servicios en la interfaz
 */

// Función para renderizar servicios
function renderServices(servicesToRender = [], options = {}) {
    // Obtener elementos del DOM y opciones
    const servicesGrid = options.servicesGrid || document.getElementById('services-grid');
    const noResultsMessage = options.noResultsMessage || document.getElementById('no-results');
    const bootstrapColors = window.bootstrapColors || options.bootstrapColors || {};

    if (!servicesGrid) return;
    servicesGrid.innerHTML = '';

    if (servicesToRender.length === 0) {
        if (noResultsMessage) noResultsMessage.classList.remove('d-none');
    } else {
        if (noResultsMessage) noResultsMessage.classList.add('d-none');
    }

    servicesToRender.forEach(service => {
        const cardWrapper = document.createElement('div');
        cardWrapper.className = "col";
        const serviceCard = document.createElement('div');
        serviceCard.className = "service-card card rounded-4 border-light p-2 h-100 shadow card-hover-lift";
        serviceCard.setAttribute('data-bs-toggle', 'modal');
        serviceCard.setAttribute('data-bs-target', '#serviceDetailModal');
        serviceCard.setAttribute('data-bs-id', service.id);
        serviceCard.setAttribute('data-service-id', service.id);


        if (service.dataBlindings) {
            serviceCard.dataset.id = service.id;
            // Agregar otros atributos de datos relevantes
            service.dataBlindings.forEach(binding => {
                if (binding.badge && binding.value) {
                    serviceCard.dataset[binding.field] = binding.value;
                }
            });
            // Verificar si está inscrito
            const enrolledBinding = service.dataBlindings.find(b => b.field === 'enrolled');
            const isEnrolled = enrolledBinding && enrolledBinding.value ? true : false;
            // Obtener categoría para el badge principal
            const categoryBinding = service.dataBlindings.find(b => b.field === 'category_1');
            const category = categoryBinding ? categoryBinding.value : '';
            const categoryColor = categoryBinding ? bootstrapColors[categoryBinding.color] : bootstrapColors['black'];

            // Generar badges HTML
            const detailsHtml = service.dataBlindings
                .filter(binding => binding.badge && binding.is_visible && binding.field !== 'category_1' && binding.field !== 'room')
                .map(binding => {
                    const colorClass = binding.color ? bootstrapColors[binding.color] : bootstrapColors['gray-200'];
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
        servicesGrid.appendChild(cardWrapper);
    });
}

/**
 * Renderiza el HTML detallado para un servicio específico basado en su ID y extrae las coordenadas del mapa.
 * @param {string | number} serviceId - El ID del servicio a renderizar.
 * @returns {{html: string, coords: [number, number] | null} | null} - Un objeto con el HTML y las coordenadas, o null si el servicio no se encuentra.
 */
// function renderServiceDetails(serviceId) {
//     const serviceToRender = servicesStudentData.find(s => s.id.toString() === serviceId.toString());
//     if (!serviceToRender) {
//         console.error(`Servicio con ID "${serviceId}" no encontrado.`);
//         const errorHtml = '<div class="alert alert-danger">Error: No se pudo cargar la información del servicio.</div>';
//         return { html: errorHtml, coords: null };
//     }
//     const serviceDetailsModalBody = document.getElementById('serviceDetailModalBody');
//     serviceDetailsModalBody.innerHTML = '';
//     const serviceCard = document.createElement('div');
//     const categories = getObjects(serviceToRender, ["category_1", "category_2", "category_3"]);
//     const campus = getObjects(serviceToRender, ["campus"]);
//     const location = getObjects(serviceToRender, ["location"]);
//     const geolocation = getObjects(serviceToRender, ["geolocation"]);
//     const coords = geolocation.length > 0 ? geolocation[0].value.split(',').map(Number) : null;
//     const room = getObjects(serviceToRender, ["room"]);
//     const modality = getObjects(serviceToRender, ["modality"]);
//     const startDate = getObjects(serviceToRender, ["startDate"]);
//     const endDate = getObjects(serviceToRender, ["endDate"]);
//     const enrollment_deadline = getObjects(serviceToRender, ["enrollment_deadline"]);
//     const sessions = getObjects(serviceToRender, ["sessions"]);
//     const session_shifts = getObjects(serviceToRender, ["session_shifts"]);
//     const sessionSchedule = getObjects(serviceToRender, ["session_schedule"]);
//     const targets = getObjects(serviceToRender, ["targets"]);
//     const instructor = getObjects(serviceToRender, ["attendant"]);
//     const capacity = getObjects(serviceToRender, ["capacity"]);

//     const badgesCategories = categories.map(category => {
//         return `<li class="nav-item">
//                     <span class="badge rounded-pill bg-${category.field === 'category_1' ? 'primary' : 'secondary'} mr-1 fs-6 fw-light">
//                         ${category.value}
//                     </span>
//                 </li>`;
//     }).join('');
//     const targetsList = targets.map(target => {
//         return `<li class="list-group-item">
//                     <i class="bi bi-check-circle text-info me-2"></i>
//                     ${target.value}
//                 </li>`;
//     }).join('');
//     const scheduleList = sessionSchedule.map(schedule => {
//         const sessionValues = schedule.value.map((session, index) => {
//             let session_location;
//             if(session.modality === 'Online') {
//                 session_location = session.modality ;
//             } else {
//                 session_location = location[0].value;
//             }
//             const currentSessionNumber = index + 1;
//             return `<tr>
//                         <th scope="row">${currentSessionNumber}</th>
//                         <td>${session.date}</td>
//                         <td>${session.start_time} - ${session.end_time}</td>
//                         <td>${session_location}</td>
//                 </tr>`;
//         }).join('');
//         return sessionValues;
//     }).join('');
//     serviceCard.className = "row";
//     // serviceCard.innerHTML = `
//     const html = `
//         <div class="row">
//             <div class="col-lg-7">
//                 <!-- Jerarquía de categorías -->
//                 <ul class="nav nav-pills rounded-pill category-pills mb-3 gap-2">
//                     ${badgesCategories}
//                 </ul>
//                 <!-- Título y tópico del servicio -->
//                 <h5 class="fw-bold mt-4">${serviceToRender.title}</h5>
//                 <p class="text-muted">${serviceToRender.resume}</p>
//                 <!-- Objetivos -->
//                 <h5 class="fw-bold mt-4">Objetivos del servicio</h5>
//                 <ul class="list-group list-group-flush">
//                     ${targetsList}
//                 </ul>
//                 <!-- Cronograma -->
//                 <h5 class="fw-bold mt-4">Cronograma</h5>
//                 <table class="table table-striped table-hover">
//                     <thead>
//                         <tr>
//                             <th scope="col">Sesión</th>
//                             <th scope="col">Fecha</th>
//                             <th scope="col">Hora</th>
//                             <th scope="col">Lugar / Enlace</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         ${scheduleList}
//                     </tbody>
//                 </table>
//             </div>
//             <!-- Columna 2 -->
//             <div class="col-lg-5">
//                 <div class="card bg-light border-0 p-3 sticky-top" style="top: 20px;">
//                     <h5 class=""fw-bold">Información del servicio</h5>
//                     <div id="map" class=""mt-2"></div>
//                     <ul class="list-group list-group-flush mt-3 bg-light">
//                         <li class="list-group-item bg-light"><i class="bi bi-geo-alt-fill me-2 text-primary"></i><strong>Lugar:</strong> ${campus[0].value}</li>
//                         <li class="list-group-item bg-light"><i class="bi bi-building me-2 text-primary"></i><strong>Edificio:</strong> ${location[0].value}</li>
//                         <li class="list-group-item bg-light"><i class="bi bi-door-open-fill me-2 text-primary"></i><strong>Recurso:</strong> ${room[0].value}</li>
//                         <li class="list-group-item bg-light"><i class="bi bi-laptop me-2 text-primary"></i><strong>Modalidad:</strong> ${modality[0].value}</li>
//                         <li class="list-group-item bg-light"><i class="bi bi-person-fill me-2 text-primary"></i><strong>Instructor:</strong> ${instructor[0].value}</li>
//                         <li class="list-group-item bg-light"><i class="bi bi-people-fill me-2 text-primary"></i><strong>Cupos:</strong> ¡Quedan ${serviceToRender.progress.usage} de ${serviceToRender.progress.capacity}!</li>
//                         <li class="list-group-item bg-light"><i class="bi bi-calendar-x me-2 text-primary"></i><strong>Inscripción hasta:</strong> ${enrollment_deadline[0].value}</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>`;
//         return { html, coords };
//     // serviceDetailsModalBody.appendChild(serviceCard);
//     // return serviceCard;
// }

function getObjects(data, desiredFields) {
    const objects = data.dataBlindings
        .filter(binding => desiredFields.includes(binding.field))
        .sort((a, b) => desiredFields.indexOf(a.field) - desiredFields.indexOf(b.field));
    return objects;
}

// Exponer la función como variable global para evitar problemas de CORS
window.renderServices = renderServices;
