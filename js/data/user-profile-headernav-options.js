var userButtonStudentOptions = {
    image: 'https://placehold.co/100x100/E2E8F0/475569?text=AB',
    name: 'Aquiles Bailo',
    email: 'aquiles.bailo@1up.com',
    role: 'Estudiante',
    icon: 'bi-backpack-fill',
    menu: [
        {
            type: 'button',
            icon: 'bi-person',
            text: 'Perfil',
            action: '#'
        },
        {
            type: 'button',
            icon: 'bi-gear',
            text: 'Configuración de mi cuenta',
            action: '#'
        },
        {
            type: 'button',
            icon: 'bi-person-gear',
            text: 'Cambiar de Rol',
            action: '#',
            dataBs: {
                toggle: 'modal',
                target: '#rolesModal'
            }
        },
        {
            type: 'divider',
        },
        {
            type: 'button',
            icon: 'bi-book',
            text: 'Aprendizaje',
            action: '#'
        },
        {
            type: 'button',
            icon: 'bi-clipboard-check',
            text: 'Evaluaciones',
            action: '#'
        },
        {
            type: 'button',
            icon: 'bi-building',
            text: 'Servicios universitarios',
            action: '#'
        },
        {
            type: 'divider',
        },
        {
            type: 'button',
            icon: 'bi-chat-heart',
            text: 'Feedback & Soporte',
            action: '#'
        },
        {
            type: 'button',
            icon: 'bi-box-arrow-right',
            text: 'Cerrar sesión',
            action: '#'
        },
    ]
};