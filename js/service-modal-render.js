function renderServiceDetails(service) {
    if (!service) {
        return { html: '<p class="text-danger">Error: Servicio no encontrado.</p>', coords: null };
    }
    
    // Helper para obtener valores de dataBlindings de forma segura
    const getBindingValue = (fieldName, defaultValue = 'N/A') => {
        const binding = service.dataBlindings.find(b => b.field === fieldName);
        return binding ? binding.value : defaultValue;
    };

    // 1. Extraer y procesar las coordenadas
    let coords = null;
    const geoString = getBindingValue('geolocation', null);
    if (geoString) {
        const parts = geoString.split(',');
        if (parts.length >= 2) {
            coords = [parseFloat(parts[0]), parseFloat(parts[1])];
        }
    }

    // 2. Extraer datos simples y complejos
    const title = service.title || 'Título no disponible';
    const topic = getBindingValue('topic', '');
    const description = getBindingValue('description', 'No hay descripción disponible.');
    const campus = getBindingValue('campus');
    const building = getBindingValue('location'); // 'location' es el field para el edificio
    const resource = getBindingValue('resource');
    const modality = getBindingValue('modality');
    const instructor = getBindingValue('instructor');
    const availableSlots = getBindingValue('available_slots', '0');
    const totalSlots = getBindingValue('total_slots', '0');
    const deadline = getBindingValue('deadline');

    // 3. Procesar datos que son strings JSON (objetivos y cronograma)
    let objectives = [];
    try {
        objectives = JSON.parse(getBindingValue('objectives', '[]'));
    } catch (e) {
        console.error('Error parsing objectives:', e);
    }
    // Generar lista de objetivos
    const objectivesHtml = objectives.map(obj => 
        `<li class="list-group-item"><i class="bi bi-check-circle text-info me-2"></i>${obj}</li>`
    ).join('');

    let schedule = [];
    try {
        schedule = JSON.parse(getBindingValue('schedule', '[]'));
    } catch (e) {
        console.error('Error parsing schedule:', e);
    }

    // Generar filas de la tabla de cronograma
    const scheduleHtml = schedule.map(session => `
        <tr>
            <th scope="row">${session.session}</th>
            <td>${session.date}</td>
            <td>${session.time}</td>
            <td>${session.location.type === 'Online' ? `<a href="${session.location.url ? session.location.url : '#'}" target="_blank">Enlace a Zoom</a>` : session.location.name}</td>
        </tr>`
    ).join('');

    // 4. Generar badges de categorías (asumiendo que `categories` está en el nivel superior)
    const categoriesHtml = (service.categories || []).map(cat => 
        `<li class="nav-item"><span class="badge rounded-pill bg-primary-subtle text-primary-emphasis fw-normal">${cat}</span></li>`
    ).join('');

    // 5. Generar información lateral
    const sideInfoHtml = `
        <li class="list-group-item bg-light"><i class="bi bi-geo-alt-fill me-2 text-primary"></i><strong>Lugar:</strong> ${campus}</li>
        <li class="list-group-item bg-light"><i class="bi bi-building me-2 text-primary"></i><strong>Edificio:</strong> ${building}</li>
        <li class="list-group-item bg-light"><i class="bi bi-door-open-fill me-2 text-primary"></i><strong>Recurso:</strong> ${resource}</li>
        <li class="list-group-item bg-light"><i class="bi bi-laptop me-2 text-primary"></i><strong>Modalidad:</strong> ${modality}</li>
        <li class="list-group-item bg-light"><i class="bi bi-person-fill me-2 text-primary"></i><strong>Instructor:</strong> ${instructor}</li>
        <li class="list-group-item bg-light"><i class="bi bi-people-fill me-2 text-primary"></i><strong>Cupos:</strong> ¡Quedan ${availableSlots} de ${totalSlots}!</li>
        <li class="list-group-item bg-light"><i class="bi bi-calendar-x me-2 text-primary"></i><strong>Inscripción hasta:</strong> ${deadline}</li>
    `;

    // Construir el HTML completo del modal
    const html = `
    <div class="row">
        <div class="col-lg-7">
            <ul class="nav nav-pills rounded-pill category-pills mb-3 gap-2">${categoriesHtml}</ul>
            <h2 class="fw-bold">${title}</h2>
            <p class="lead text-muted">${topic}</p>
            <hr>
            <h5 class="fw-bold mt-4">Descripción</h5>
            <p class="text-muted">${description}</p>
            <h5 class="fw-bold mt-4">Objetivos del servicio</h5>
            <ul class="list-group list-group-flush">${objectivesHtml}</ul>
            <h5 class="fw-bold mt-4">Cronograma</h5>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Sesión</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Lugar / Enlace</th>
                    </tr>
                </thead>
                <tbody>${scheduleHtml}</tbody>
            </table>
        </div>
        <div class="col-lg-5">
            <div class="card bg-light border-0 p-3 sticky-top" style="top: 20px;">
                <h5 class="fw-bold">Información del servicio</h5>
                <div id="map" class="mt-2 rounded" style="height: 200px; background-color: #f0f0f0;"></div>
                <ul class="list-group list-group-flush mt-3 bg-light">
                    ${sideInfoHtml}
                </ul>
            </div>
        </div>
    `;

    return { html: html, coords: coords };
}
