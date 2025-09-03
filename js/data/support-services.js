/**
 * Datos de servicios para el portal de Cuidado al Estudiante
 */

var servicesStudentData = [
    {
      "keywords": "cálculo asesoría rendimiento presencial campus",
      "id": "0",
      "title": "Taller de Cálculo II",
      "resume": "Refuerza tus conocimientos con un tutor experto. Sesiones personalizadas para resolver dudas.",
      "dataBindings": [
        {
          "field": "campus",
          "alias": "Campus",
          "value": "Campus Peñalolen",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-geo-alt-fill",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "location",
          "alias": "Ubicación",
          "value": "Edificio C",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-building",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "geolocation",
          "alias": "Geolocalización",
          "value": "-33.4897152,-70.5147969,20",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "room",
          "alias": "Sala",
          "value": "Sala 301",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "modality",
          "alias": "Modalidad",
          "value": "Presencial",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-people",
          "color": "teal-200",
          "modifiable": false
        },
        {
          "field": "startDate",
          "alias": "Fecha de Inicio",
          "value": "2025-Aug-04",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-calendar3-event",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "endDate",
          "alias": "Fecha de Fin",
          "value": "2025-Nov-24",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrollment_deadline",
          "alias": "Fin de inscripciones",
          "value": "15/10/2025",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "sessions",
          "alias": "Sesiones",
          "value": "17",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-clock",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "session_shifts",
          "alias": "Bloques de Horario",
          "value": [
            {
              "day": "Lunes",
              "session_start_time": "09:00",
              "session_end_time": "10:00"
            }
          ],
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_1",
          "alias": "Categoría",
          "value": "Académico",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "black",
          "modifiable": false
        },
        {
          "field": "category_2",
          "alias": "Área",
          "value": "Cálculo Integral",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_3",
          "alias": "Tema",
          "value": "Sumas de Riemann",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "description",
          "alias": "Descripción",
          "value": "En esta asesoría intensiva, abordaremos desde cero el concepto de las Sumas de Riemann, un pilar fundamental para entender las integrales definidas en Cálculo 2. Se realizarán ejercicios prácticos para preparar la próxima evaluación.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "targets",
          "alias": "Objetivos",
          "value": [
            "Comprender la definición formal de una integral definida.",
            "Aproximar el área bajo la curva usando rectángulos.",
            "Resolver problemas de aplicación práctica."
          ],
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed",
          "alias": "Publico",
          "value": "Estudiantes",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed_details",
          "alias": "Dirigido a",
          "value": "Estudiantes de Ingeniería Civil y Plan Común que estén cursando Cálculo 2 y necesiten reforzar la materia para la Solemne 2.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant",
          "alias": "Impartido por",
          "value": "Manuel Fuenzalida",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_details",
          "alias": "Detalles del instructor",
          "value": "Ayudante de Cátedra con 3 años de experiencia en docencia de cálculo.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_img",
          "alias": "Foto de perfil del instructor",
          "value": "https://www.uai.cl/_next/image?url=https%3A%2F%2Fuai.cdn7pm.net%2Fprofesores%2Fmanuel-fuenzalida-3.jpg&w=1200&q=75",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrolled",
          "alias": "Inscrito",
          "value": "",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "bi-ticket-perforated",
          "color": "success",
          "modifiable": false
        },
        {
          "field": "session_schedule",
          "alias": "Cronograma",
          "is_visible": false,
          "is_column": false,
          "icon": "",
          "color": "",
          "modifiable": false,
          "value": [
            {
              "date": "2025-Aug-04",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-11",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-18",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-25",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-01",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-08",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-15",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-22",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-29",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-06",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-13",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-20",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-27",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-03",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-10",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-17",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-24",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            }
          ]
        }
      ],
      "progress": {
        "usage": 20,
        "capacity": 30,
        "label": "Cupos Utilizados"
      }
    },
    {
      "keywords": "estrés bienestar salud mental híbrida institución",
      "id": "1",
      "title": "Taller de Manejo del Estrés",
      "resume": "Aprende técnicas para manejar el estrés académico y personal en un ambiente de apoyo.",
      "progress": {
        "usage": 20,
        "capacity": 30,
        "label": "Cupos Utilizados"
      },
      "dataBindings": [
        {
          "field": "campus",
          "alias": "Campus",
          "value": "Campus Peñalolen",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-geo-alt-fill",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "location",
          "alias": "Ubicación",
          "value": "Edificio C",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-building",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "geolocation",
          "alias": "Geolocalización",
          "value": "-33.498921,-70.515348,19",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "room",
          "alias": "Sala",
          "value": "Sala 301",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "modality",
          "alias": "Modalidad",
          "value": "Híbrido",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-camera-video",
          "color": "yellow-200",
          "modifiable": false
        },
        {
          "field": "startDate",
          "alias": "Fecha de Inicio",
          "value": "2025-Aug-04",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-calendar3-event",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "endDate",
          "alias": "Fecha de Fin",
          "value": "2025-Nov-24",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrollment_deadline",
          "alias": "Fin de inscripciones",
          "value": "04/08/2025",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "sessions",
          "alias": "Sesiones",
          "value": "17",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-clock",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "session_shifts",
          "alias": "Bloques de Horario",
          "value": [
            {
              "day": "Lunes",
              "session_start_time": "09:00",
              "session_end_time": "10:00"
            }
          ],
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_1",
          "alias": "Categoría",
          "value": "Salud Mental",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-900",
          "modifiable": false
        },
        {
          "field": "category_2",
          "alias": "Área",
          "value": "Manejo del Estrés",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_3",
          "alias": "Tema",
          "value": "Técnicas de apoyo",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "description",
          "alias": "Descripción",
          "value": "Este taller teórico-práctico entrega herramientas para identificar y manejar el estrés académico y personal. A través de sesiones dinámicas, los estudiantes aprenderán técnicas de relajación y mindfulness para mejorar su bienestar y rendimiento en un ambiente de apoyo y confianza.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "targets",
          "alias": "Objetivos",
          "value": [
            "Identificar las principales fuentes de estrés personal.",
            "Aplicar técnicas de respiración y mindfulness para reducir la ansiedad.",
            "Desarrollar un plan personal de manejo del tiempo y autocuidado."
          ],
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed",
          "alias": "Publico",
          "value": "Estudiantes",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed_details",
          "alias": "Dirigido a",
          "value": "Estudiantes de todas las carreras que busquen mejorar su bienestar y aprender a manejar la presión académica y personal de manera saludable.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant",
          "alias": "Impartido por",
          "value": "Ps. Valeria Campos",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_details",
          "alias": "Detalles del instructor",
          "value": "Psicóloga clínica con especialización en terapia breve y manejo de la ansiedad en jóvenes.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_img",
          "alias": "Foto de perfil del instructor",
          "value": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=75",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrolled",
          "alias": "Inscrito",
          "value": "",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "bi-ticket-perforated",
          "color": "success",
          "modifiable": false
        },
        {
          "field": "session_schedule",
          "alias": "Cronograma",
          "is_visible": false,
          "is_column": false,
          "icon": "",
          "color": "",
          "modifiable": false,
          "value": [
            {
              "date": "2025-Aug-04",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-11",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Aug-18",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Aug-25",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-01",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-08",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-15",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-22",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-29",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-06",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-13",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-20",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-27",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-03",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-10",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-17",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-24",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            }
          ]
        }
      ]
    },
    {
      "keywords": "cálculo asesoría rendimiento presencial campus",
      "id": "2",
      "title": "Asesoría de Cálculo I",
      "resume": "Refuerza tus conocimientos con un tutor experto. Sesiones personalizadas para resolver dudas.",
      "progress": {
        "usage": 30,
        "capacity": 30,
        "label": "Cupos Utilizados"
      },
      "dataBindings": [
        {
          "field": "campus",
          "alias": "Campus",
          "value": "Campus República",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-geo-alt-fill",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "location",
          "alias": "Ubicación",
          "value": "Biblioteca",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-building",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "geolocation",
          "alias": "Geolocalización",
          "value": "-33.4448, -70.6627,18",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "room",
          "alias": "Sala",
          "value": "Sala de estudio B",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "modality",
          "alias": "Modalidad",
          "value": "Presencial",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-people",
          "color": "teal-200",
          "modifiable": false
        },
        {
          "field": "startDate",
          "alias": "Fecha de Inicio",
          "value": "2025-Aug-04",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-calendar3-event",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "endDate",
          "alias": "Fecha de Fin",
          "value": "2025-Nov-26",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrollment_deadline",
          "alias": "Fin de inscripciones",
          "value": "13/08/2025",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "sessions",
          "alias": "Sesiones",
          "value": "51",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-clock",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "session_shifts",
          "alias": "Bloques de Horario",
          "value": [
            {
              "day": "Lunes",
              "session_start_time": "09:00",
              "session_end_time": "10:00"
            },
            {
              "day": "Martes",
              "session_start_time": "09:00",
              "session_end_time": "10:00"
            },
            {
              "day": "Miércoles",
              "session_start_time": "09:00",
              "session_end_time": "10:00"
            }
          ],
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_1",
          "alias": "Categoría",
          "value": "Rendimiento Académico",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-900",
          "modifiable": false
        },
        {
          "field": "category_2",
          "alias": "Área",
          "value": "Cálculo I",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_3",
          "alias": "Tema",
          "value": "Tutoría experta",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "description",
          "alias": "Descripción",
          "value": "Esta asesoría personalizada se enfoca en resolver dudas específicas de Cálculo I. Es una sesión intensiva con un tutor experto, ideal para prepararse para evaluaciones, aclarar conceptos clave y reforzar la materia con ejercicios prácticos para asegurar tu éxito académico.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "targets",
          "alias": "Objetivos",
          "value": [
            "Resolver ejercicios complejos sobre límites y derivadas.",
            "Comprender la aplicación de teoremas fundamentales.",
            "Aumentar la confianza para enfrentar la próxima evaluación solemne."
          ],
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed",
          "alias": "Publico",
          "value": "Estudiantes",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed_details",
          "alias": "Dirigido a",
          "value": "Estudiantes de primer año de Ingeniería o Ciencias que estén cursando Cálculo I y necesiten un apoyo personalizado para reforzar la materia.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant",
          "alias": "Impartido por",
          "value": "Prof. Felipe Riquelme",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_details",
          "alias": "Detalles del instructor",
          "value": "Estudiante de Magíster en Matemáticas Aplicadas y ayudante de cátedra con 4 años de experiencia.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_img",
          "alias": "Foto de perfil del instructor",
          "value": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&q=75",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrolled",
          "alias": "Inscrito",
          "value": "Inscrito",
          "badge": true,
          "is_visible": false,
          "is_column_available": false,
          "icon": "bi-ticket-perforated",
          "color": "success",
          "modifiable": false
        },
        {
          "field": "session_schedule",
          "alias": "Cronograma",
          "is_visible": false,
          "is_column": false,
          "icon": "",
          "color": "",
          "modifiable": false,
          "value": [
            {
              "date": "2025-Aug-04",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-05",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-06",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-11",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-12",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-13",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-18",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-19",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-20",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-25",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-26",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-27",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-01",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-02",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-03",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-08",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-09",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-10",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-15",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-16",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-17",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-22",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-23",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-24",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-29",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-30",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-01",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-06",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-07",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-08",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-13",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-14",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-15",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-20",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-21",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-22",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-27",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-28",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-29",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-03",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-04",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-05",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-10",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-11",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-12",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-17",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-18",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-19",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-24",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-25",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-26",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            }
          ]
        }
      ]
    },
    {
      "keywords": "orientación vocacional carrera online sede",
      "id": "3",
      "title": "Orientación Vocacional",
      "resume": "Descubre tus intereses y habilidades para planificar tu futuro profesional con un orientador.",
      "progress": {
        "usage": 0,
        "capacity": 30,
        "label": "Sin restricción"
      },
      "dataBindings": [
        {
          "field": "campus",
          "alias": "Campus",
          "value": "Campus Sporting",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-geo-alt-fill",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "location",
          "alias": "Ubicación",
          "value": "Online",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-building",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "geolocation",
          "alias": "Geolocalización",
          "value": "",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "room",
          "alias": "Sala",
          "value": "Zoom",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "modality",
          "alias": "Modalidad",
          "value": "Online",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-laptop",
          "color": "cyan-100",
          "modifiable": false
        },
        {
          "field": "startDate",
          "alias": "Fecha de Inicio",
          "value": "2025-Aug-04",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-calendar3-event",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "endDate",
          "alias": "Fecha de Fin",
          "value": "2025-Nov-24",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrollment_deadline",
          "alias": "Fin de inscripciones",
          "value": "05/09/2025",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "sessions",
          "alias": "Sesiones",
          "value": "17",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-clock",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "session_shifts",
          "alias": "Bloques de Horario",
          "value": [
            {
              "day": "Lunes",
              "session_start_time": "09:00",
              "session_end_time": "10:00"
            }
          ],
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_1",
          "alias": "Categoría",
          "value": "Carrera Profesional",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-900",
          "modifiable": false
        },
        {
          "field": "category_2",
          "alias": "Área",
          "value": "Orientación Vocacional",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_3",
          "alias": "Tema",
          "value": "Planificación de carrera",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "description",
          "alias": "Descripción",
          "value": "Este programa te guiará en el descubrimiento de tus pasiones e intereses a través de tests y entrevistas con un orientador. El objetivo es que puedas alinear tus habilidades con un plan de carrera profesional claro y motivador para tu futuro.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "targets",
          "alias": "Objetivos",
          "value": [
            "Identificar intereses y aptitudes personales.",
            "Explorar diversas áreas profesionales y de especialización.",
            "Construir un plan de desarrollo profesional a corto y largo plazo."
          ],
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed",
          "alias": "Publico",
          "value": "Estudiantes",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed_details",
          "alias": "Dirigido a",
          "value": "Estudiantes que se sientan indecisos sobre su futuro profesional, elección de especialidad o que busquen alinear sus intereses con un plan de carrera.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant",
          "alias": "Impartido por",
          "value": "Sofía Reyes, Orientadora Vocacional",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_details",
          "alias": "Detalles del instructor",
          "value": "Magíster en Psicología Educacional con más de 10 años de experiencia en orientación vocacional para jóvenes y adultos.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_img",
          "alias": "Foto de perfil del instructor",
          "value": "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&q=75",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrolled",
          "alias": "Inscrito",
          "value": "",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "bi-ticket-perforated",
          "color": "success",
          "modifiable": false
        },
        {
          "field": "session_schedule",
          "alias": "Cronograma",
          "is_visible": false,
          "is_column": false,
          "icon": "",
          "color": "",
          "modifiable": false,
          "value": [
            {
              "date": "2025-Aug-04",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Aug-11",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Aug-18",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Aug-25",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-01",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-08",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-15",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-22",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-29",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-06",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-13",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-20",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-27",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-03",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-10",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-17",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-24",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            }
          ]
        }
      ]
    },
    {
      "keywords": "financiero becas cuota online institución",
      "id": "4",
      "title": "Apoyo Financiero y Becas",
      "resume": "Resuelve tus dudas sobre pagos, créditos y accede a las becas disponibles para ti.",
      "progress": {
        "usage": 0,
        "capacity": 30,
        "label": "Sin restricción"
      },
      "dataBindings": [
        {
          "field": "campus",
          "alias": "Campus",
          "value": "Campus La Serena",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-geo-alt-fill",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "location",
          "alias": "Ubicación",
          "value": "Online",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-building",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "geolocation",
          "alias": "Geolocalización",
          "value": "",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "room",
          "alias": "Sala",
          "value": "Microsoft Teams",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "modality",
          "alias": "Modalidad",
          "value": "Online",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-laptop",
          "color": "cyan-100",
          "modifiable": false
        },
        {
          "field": "startDate",
          "alias": "Fecha de Inicio",
          "value": "2025-Aug-04",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-calendar3-event",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "endDate",
          "alias": "Fecha de Fin",
          "value": "2025-Nov-24",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrollment_deadline",
          "alias": "Fin de inscripciones",
          "value": "30/12/2025",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "sessions",
          "alias": "Sesiones",
          "value": "9",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-clock",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "session_shifts",
          "alias": "Bloques de Horario",
          "value": [
            {
              "day": "Lunes",
              "session_start_time": "09:00",
              "session_end_time": "10:00"
            }
          ],
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_1",
          "alias": "Categoría",
          "value": "Financiero",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-900",
          "modifiable": false
        },
        {
          "field": "category_2",
          "alias": "Área",
          "value": "Apoyo Financiero",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_3",
          "alias": "Tema",
          "value": "Becas y Créditos",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "description",
          "alias": "Descripción",
          "value": "Este es un canal de apoyo continuo para resolver todas tus consultas sobre aranceles, cuotas, créditos universitarios, becas internas y externas y otros beneficios estudiantiles. Contacta a un asistente para recibir orientación personalizada y oportuna.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "targets",
          "alias": "Objetivos",
          "value": [
            "Comprender el sistema de pagos y aranceles de la institución.",
            "Identificar y postular a las becas y créditos disponibles.",
            "Resolver problemas de morosidad o dudas sobre el estado financiero."
          ],
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed",
          "alias": "Publico",
          "value": "Estudiantes",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed_details",
          "alias": "Dirigido a",
          "value": "Todos los estudiantes y sus apoderados que necesiten información u orientación sobre temas financieros relacionados con la universidad.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant",
          "alias": "Impartido por",
          "value": "Departamento de Asuntos Estudiantiles (DAE)",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_details",
          "alias": "Detalles del instructor",
          "value": "Equipo de asistentes sociales y administrativos dedicados a apoyar a los estudiantes en materias financieras y de beneficios.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_img",
          "alias": "Foto de perfil del instructor",
          "value": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&q=75",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrolled",
          "alias": "Inscrito",
          "value": "",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "bi-ticket-perforated",
          "color": "success",
          "modifiable": false
        },
        {
          "field": "session_schedule",
          "alias": "Cronograma",
          "is_visible": false,
          "is_column": false,
          "icon": "",
          "color": "",
          "modifiable": false,
          "value": [
            {
              "date": "2025-Aug-04",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Aug-18",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-01",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-15",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-29",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-13",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-27",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-10",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-24",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            }
          ]
        }
      ]
    },
    {
      "keywords": "debate club desarrollo presencial campus",
      "id": "5",
      "title": "Club de Debate",
      "resume": "Mejora tu oratoria y pensamiento crítico en un ambiente competitivo y amigable.",
      "progress": {
        "usage": 5,
        "capacity": 30,
        "label": "Cupos Utilizados"
      },
      "dataBindings": [
        {
          "field": "campus",
          "alias": "Campus",
          "value": "Campus República",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-geo-alt-fill",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "location",
          "alias": "Ubicación",
          "value": "Auditorio",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-building",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "geolocation",
          "alias": "Geolocalización",
          "value": "-33.4449, -70.6628,19",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "room",
          "alias": "Sala",
          "value": "Auditorio Principal",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "modality",
          "alias": "Modalidad",
          "value": "Presencial",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-people",
          "color": "teal-200",
          "modifiable": false
        },
        {
          "field": "startDate",
          "alias": "Fecha de Inicio",
          "value": "2025-Aug-04",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-calendar3-event",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "endDate",
          "alias": "Fecha de Fin",
          "value": "2025-Nov-24",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrollment_deadline",
          "alias": "Fin de inscripciones",
          "value": "30/09/2025",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "sessions",
          "alias": "Sesiones",
          "value": "17",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-clock",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "session_shifts",
          "alias": "Bloques de Horario",
          "value": [
            {
              "day": "Lunes",
              "session_start_time": "09:00",
              "session_end_time": "10:00"
            }
          ],
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_1",
          "alias": "Categoría",
          "value": "Desarrollo Estudiantil",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-900",
          "modifiable": false
        },
        {
          "field": "category_2",
          "alias": "Área",
          "value": "Club de Debate",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_3",
          "alias": "Tema",
          "value": "Oratoria y Pensamiento Crítico",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "description",
          "alias": "Descripción",
          "value": "Únete al Club de Debate para desarrollar tus habilidades de argumentación, oratoria y pensamiento crítico. Participarás en debates semanales sobre temas de actualidad en un ambiente competitivo y amigable, preparándote para torneos internos y externos.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "targets",
          "alias": "Objetivos",
          "value": [
            "Estructurar argumentos lógicos y persuasivos.",
            "Hablar en público con confianza y claridad.",
            "Analizar críticamente diferentes puntos de vista sobre temas complejos."
          ],
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed",
          "alias": "Publico",
          "value": "Estudiantes",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed_details",
          "alias": "Dirigido a",
          "value": "Estudiantes de todas las carreras con interés en el debate, la argumentación y el desarrollo de habilidades comunicacionales para potenciar su perfil.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant",
          "alias": "Impartido por",
          "value": "Prof. Ricardo Lagos",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_details",
          "alias": "Detalles del instructor",
          "value": "Docente de la Facultad de Derecho y ex-campeón nacional de debate universitario, con amplia experiencia formando equipos competitivos.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_img",
          "alias": "Foto de perfil del instructor",
          "value": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=75",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrolled",
          "alias": "Inscrito",
          "value": "",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "bi-ticket-perforated",
          "color": "success",
          "modifiable": false
        },
        {
          "field": "session_schedule",
          "alias": "Cronograma",
          "is_visible": false,
          "is_column": false,
          "icon": "",
          "color": "",
          "modifiable": false,
          "value": [
            {
              "date": "2025-Aug-04",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-11",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-18",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-25",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-01",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-08",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-15",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-22",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-29",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-06",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-13",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-20",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-27",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-03",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-10",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-17",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-24",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            }
          ]
        }
      ]
    },
    {
      "keywords": "escritura académica tesis híbrida sede",
      "id": "6",
      "title": "Taller de Escritura Académica",
      "resume": "Aprende a estructurar y redactar tus trabajos, ensayos y tesis con estándares profesionales.",
      "progress": {
        "usage": 10,
        "capacity": 30,
        "label": "Cupos Utilizados"
      },
      "dataBindings": [
        {
          "field": "campus",
          "alias": "Campus",
          "value": "Campus Presidente Vitacura",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-geo-alt-fill",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "location",
          "alias": "Ubicación",
          "value": "Edificio A",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-building",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "geolocation",
          "alias": "Geolocalización",
          "value": "-33.3999,-70.5657,18",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "room",
          "alias": "Sala",
          "value": "Sala 101",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "modality",
          "alias": "Modalidad",
          "value": "Híbrido",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-camera-video",
          "color": "yellow-200",
          "modifiable": false
        },
        {
          "field": "startDate",
          "alias": "Fecha de Inicio",
          "value": "2025-Aug-04",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-calendar3-event",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "endDate",
          "alias": "Fecha de Fin",
          "value": "2025-Nov-26",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrollment_deadline",
          "alias": "Fin de inscripciones",
          "value": "14/10/2025",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "sessions",
          "alias": "Sesiones",
          "value": "51",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-clock",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "session_shifts",
          "alias": "Bloques de Horario",
          "value": [
            {
              "day": "Lunes",
              "session_start_time": "09:00",
              "session_end_time": "10:00"
            },
            {
              "day": "Martes",
              "session_start_time": "09:00",
              "session_end_time": "10:00"
            },
            {
              "day": "Miércoles",
              "session_start_time": "09:00",
              "session_end_time": "10:00"
            }
          ],
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_1",
          "alias": "Categoría",
          "value": "Rendimiento Académico",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-900",
          "modifiable": false
        },
        {
          "field": "category_2",
          "alias": "Área",
          "value": "Escritura Académica",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_3",
          "alias": "Tema",
          "value": "Redacción y Estructura",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "description",
          "alias": "Descripción",
          "value": "Este taller teórico-práctico entrega las herramientas clave para la redacción de textos académicos. Aprenderás a formular una hipótesis, estructurar tus ideas y usar correctamente normas de citación (APA, Vancouver), potenciando la calidad de tus trabajos, ensayos y tesis.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "targets",
          "alias": "Objetivos",
          "value": [
            "Formular una pregunta de investigación y una hipótesis clara y coherente.",
            "Estructurar un texto académico de manera lógica y persuasiva.",
            "Aplicar correctamente las normas de citación y referenciación más comunes."
          ],
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed",
          "alias": "Publico",
          "value": "Estudiantes",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed_details",
          "alias": "Dirigido a",
          "value": "Estudiantes de pregrado y postgrado que se encuentren en la etapa de redacción de trabajos de investigación, ensayos o su proyecto de tesis.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant",
          "alias": "Impartido por",
          "value": "Dra. Isabel Castillo",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_details",
          "alias": "Detalles del instructor",
          "value": "Doctora en Lingüística y especialista en comunicación escrita. Editora de la revista académica de la universidad y asesora de tesis.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_img",
          "alias": "Foto de perfil del instructor",
          "value": "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=500&q=75",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrolled",
          "alias": "Inscrito",
          "value": "",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "bi-ticket-perforated",
          "color": "success",
          "modifiable": false
        },
        {
          "field": "session_schedule",
          "alias": "Cronograma",
          "is_visible": false,
          "is_column": false,
          "icon": "",
          "color": "",
          "modifiable": false,
          "value": [
            {
              "date": "2025-Aug-04",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Aug-05",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-06",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-11",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Aug-12",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Aug-13",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-18",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-19",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Aug-20",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Aug-25",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Aug-26",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-27",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-01",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-02",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-03",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-08",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-09",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-10",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-15",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-16",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-17",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-22",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-23",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-24",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-29",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-30",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-01",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-06",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-07",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-08",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-13",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-14",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-15",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-20",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-21",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-22",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-27",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-28",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-29",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-03",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-04",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-05",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-10",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-11",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-12",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-17",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-18",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-19",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-24",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-25",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-26",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            }
          ]
        }
      ]
    },
    {
      "keywords": "salud nutrición bienestar online institución",
      "id": "7",
      "title": "Consejería de Salud y Nutrición",
      "resume": "Recibe orientación personalizada para mejorar tus hábitos alimenticios y tu bienestar general.",
      "progress": {
        "usage": 0,
        "capacity": 30,
        "label": "Sin restricción"
      },
      "dataBindings": [
        {
          "field": "campus",
          "alias": "Campus",
          "value": "Campus República",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-geo-alt-fill",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "location",
          "alias": "Ubicación",
          "value": "Online",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-building",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "geolocation",
          "alias": "Geolocalización",
          "value": "",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "room",
          "alias": "Sala",
          "value": "Google Meet",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "modality",
          "alias": "Modalidad",
          "value": "Online",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-laptop",
          "color": "cyan-100",
          "modifiable": false
        },
        {
          "field": "startDate",
          "alias": "Fecha de Inicio",
          "value": "2025-Aug-04",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-calendar3-event",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "endDate",
          "alias": "Fecha de Fin",
          "value": "2025-Nov-24",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrollment_deadline",
          "alias": "Fin de inscripciones",
          "value": "03/10/2025",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "sessions",
          "alias": "Sesiones",
          "value": "17",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-clock",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "session_shifts",
          "alias": "Bloques de Horario",
          "value": [
            {
              "day": "Lunes",
              "session_start_time": "09:00",
              "session_end_time": "10:00"
            }
          ],
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_1",
          "alias": "Categoría",
          "value": "Salud Mental",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-900",
          "modifiable": false
        },
        {
          "field": "category_2",
          "alias": "Área",
          "value": "Salud y Nutrición",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_3",
          "alias": "Tema",
          "value": "Hábitos Alimenticios",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "description",
          "alias": "Descripción",
          "value": "En dos sesiones personalizadas, una nutricionista te ayudará a evaluar tus hábitos alimenticios y a crear un plan balanceado y adaptado a tu estilo de vida. Mejora tu energía y bienestar general con una guía profesional y práctica para tu día a día universitario.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "targets",
          "alias": "Objetivos",
          "value": [
            "Evaluar la calidad de la dieta actual e identificar áreas de mejora.",
            "Diseñar un plan de alimentación personalizado, realista y económico.",
            "Aprender a leer etiquetas nutricionales y tomar decisiones informadas."
          ],
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed",
          "alias": "Publico",
          "value": "Estudiantes",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed_details",
          "alias": "Dirigido a",
          "value": "Cualquier estudiante interesado en mejorar su nutrición, manejar su peso, o simplemente aprender a comer más saludablemente con un presupuesto y tiempo limitados.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant",
          "alias": "Impartido por",
          "value": "Nut. Francisca Vidal",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_details",
          "alias": "Detalles del instructor",
          "value": "Nutricionista dietista certificada, con experiencia en nutrición deportiva y comunitaria, enfocada en el bienestar estudiantil.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_img",
          "alias": "Foto de perfil del instructor",
          "value": "https://images.unsplash.com/photo-1612794174538-3e4a2e584285?w=500&q=75",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrolled",
          "alias": "Inscrito",
          "value": "",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "bi-ticket-perforated",
          "color": "success",
          "modifiable": false
        },
        {
          "field": "session_schedule",
          "alias": "Cronograma",
          "is_visible": false,
          "is_column": false,
          "icon": "",
          "color": "",
          "modifiable": false,
          "value": [
            {
              "date": "2025-Aug-04",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Aug-11",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Aug-18",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Aug-25",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-01",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-08",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-15",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-22",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-29",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-06",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-13",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-20",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-27",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-03",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-10",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-17",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-24",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            }
          ]
        }
      ]
    },
    {
      "keywords": "voluntariado comunidad presencial campus",
      "id": "8",
      "title": "Voluntariado Comunitario",
      "resume": "Participa en proyectos sociales y genera un impacto positivo en la comunidad local.",
      "progress": {
        "usage": 2,
        "capacity": 30,
        "label": "Cupos Utilizados"
      },
      "dataBindings": [
        {
          "field": "campus",
          "alias": "Campus",
          "value": "Campus República",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-geo-alt-fill",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "location",
          "alias": "Ubicación",
          "value": "Varios",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-building",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "geolocation",
          "alias": "Geolocalización",
          "value": "",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "room",
          "alias": "Sala",
          "value": "Coordinación DAE",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "modality",
          "alias": "Modalidad",
          "value": "Presencial",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-people",
          "color": "teal-200",
          "modifiable": false
        },
        {
          "field": "startDate",
          "alias": "Fecha de Inicio",
          "value": "2025-Aug-04",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-calendar3-event",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "endDate",
          "alias": "Fecha de Fin",
          "value": "2025-Nov-24",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrollment_deadline",
          "alias": "Fin de inscripciones",
          "value": "29/10/2025",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "sessions",
          "alias": "Sesiones",
          "value": "17",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-clock",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "session_shifts",
          "alias": "Bloques de Horario",
          "value": [
            {
              "day": "Lunes",
              "session_start_time": "09:00",
              "session_end_time": "10:00"
            }
          ],
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_1",
          "alias": "Categoría",
          "value": "Desarrollo Estudiantil",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-900",
          "modifiable": false
        },
        {
          "field": "category_2",
          "alias": "Área",
          "value": "Voluntariado",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_3",
          "alias": "Tema",
          "value": "Proyectos Sociales",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "description",
          "alias": "Descripción",
          "value": "Inscríbete en los distintos proyectos de voluntariado y acción social que la universidad organiza con fundaciones locales. Es una oportunidad única para contribuir a la comunidad, desarrollar habilidades blandas como el liderazgo y el trabajo en equipo, y conocer nuevas personas.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "targets",
          "alias": "Objetivos",
          "value": [
            "Contribuir activamente en proyectos con impacto social positivo.",
            "Desarrollar empatía, liderazgo y conciencia social.",
            "Fomentar el trabajo en equipo en contextos diversos y desafiantes."
          ],
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed",
          "alias": "Publico",
          "value": "Estudiantes",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed_details",
          "alias": "Dirigido a",
          "value": "Todos los estudiantes con vocación de servicio que deseen participar en actividades de voluntariado y marcar una diferencia positiva en la comunidad.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant",
          "alias": "Impartido por",
          "value": "Coordinación DAE",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_details",
          "alias": "Detalles del instructor",
          "value": "El Departamento de Asuntos Estudiantiles (DAE) organiza y supervisa las actividades de voluntariado en conjunto con diversas fundaciones.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_img",
          "alias": "Foto de perfil del instructor",
          "value": "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&q=75",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrolled",
          "alias": "Inscrito",
          "value": "",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "bi-ticket-perforated",
          "color": "success",
          "modifiable": false
        },
        {
          "field": "session_schedule",
          "alias": "Cronograma",
          "is_visible": false,
          "is_column": false,
          "icon": "",
          "color": "",
          "modifiable": false,
          "value": [
            {
              "date": "2025-Aug-04",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-11",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-18",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-25",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-01",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-08",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-15",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-22",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-29",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-06",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-13",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-20",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-27",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-03",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-10",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-17",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-24",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            }
          ]
        }
      ]
    },
    {
      "keywords": "emprendedores startup carrera híbrida institución",
      "id": "9",
      "title": "Asesoría para Emprendedores",
      "resume": "Obtén mentoría para desarrollar tu idea de negocio y lanzar tu propia startup.",
      "progress": {
        "usage": 6,
        "capacity": 30,
        "label": "Cupos Utilizados"
      },
      "dataBindings": [
        {
          "field": "campus",
          "alias": "Campus",
          "value": "Campus República",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-geo-alt-fill",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "location",
          "alias": "Ubicación",
          "value": "Centro de Innovación",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-building",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "geolocation",
          "alias": "Geolocalización",
          "value": "-33.4448, -70.6627,18",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "room",
          "alias": "Sala",
          "value": "Sala de Co-Work",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "modality",
          "alias": "Modalidad",
          "value": "Híbrido",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-camera-video",
          "color": "yellow-200",
          "modifiable": false
        },
        {
          "field": "startDate",
          "alias": "Fecha de Inicio",
          "value": "2025-Aug-04",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-calendar3-event",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "endDate",
          "alias": "Fecha de Fin",
          "value": "2025-Nov-24",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrollment_deadline",
          "alias": "Fin de inscripciones",
          "value": "30/11/2025",
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "sessions",
          "alias": "Sesiones",
          "value": "17",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "bi-clock",
          "color": "gray-200",
          "modifiable": false
        },
        {
          "field": "session_shifts",
          "alias": "Bloques de Horario",
          "value": [
            {
              "day": "Lunes",
              "session_start_time": "09:00",
              "session_end_time": "10:00"
            }
          ],
          "badge": false,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_1",
          "alias": "Categoría",
          "value": "Carrera Profesional",
          "badge": true,
          "is_visible": true,
          "is_column_available": true,
          "icon": "",
          "color": "gray-900",
          "modifiable": false
        },
        {
          "field": "category_2",
          "alias": "Área",
          "value": "Emprendimiento",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "category_3",
          "alias": "Tema",
          "value": "Desarrollo de Negocio",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "description",
          "alias": "Descripción",
          "value": "Este programa de mentorías te conecta con emprendedores experimentados para ayudarte a validar tu idea de negocio, desarrollar un Producto Mínimo Viable (MVP) y crear un pitch efectivo para buscar financiamiento. Ideal para lanzar tu propia startup con bases sólidas.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "targets",
          "alias": "Objetivos",
          "value": [
            "Validar una idea de negocio usando la metodología Lean Startup.",
            "Construir un modelo de negocio Canvas sólido y escalable.",
            "Preparar un pitch de inversión para presentar a potenciales inversionistas."
          ],
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed",
          "alias": "Publico",
          "value": "Estudiantes",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "aimed_details",
          "alias": "Dirigido a",
          "value": "Estudiantes con una idea de negocio o una startup en etapa temprana que busquen guía y mentoría experta para acelerar su crecimiento y desarrollo.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant",
          "alias": "Impartido por",
          "value": "Incubadora de Negocios U+",
          "badge": false,
          "is_visible": false,
          "is_column_available": true,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_details",
          "alias": "Detalles del instructor",
          "value": "Red de mentores de la incubadora de negocios de la universidad, compuesta por emprendedores y ejecutivos de la industria con amplia trayectoria.",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "attendant_img",
          "alias": "Foto de perfil del instructor",
          "value": "https://plus.unsplash.com/premium_photo-1661766252119-39903a447842?w=500&q=75",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "",
          "color": "",
          "modifiable": false
        },
        {
          "field": "enrolled",
          "alias": "Inscrito",
          "value": "",
          "badge": false,
          "is_visible": false,
          "is_column_available": false,
          "icon": "bi-ticket-perforated",
          "color": "success",
          "modifiable": false
        },
        {
          "field": "session_schedule",
          "alias": "Cronograma",
          "is_visible": false,
          "is_column": false,
          "icon": "",
          "color": "",
          "modifiable": false,
          "value": [
            {
              "date": "2025-Aug-04",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-11",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-18",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Aug-25",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-01",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-08",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-15",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Sep-22",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Sep-29",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-06",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-13",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Oct-20",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Oct-27",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Online"
            },
            {
              "date": "2025-Nov-03",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-10",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-17",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            },
            {
              "date": "2025-Nov-24",
              "start_time": "09:00",
              "end_time": "10:00",
              "modality": "Presencial"
            }
          ]
        }
      ]
    }
  ];