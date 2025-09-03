// Script para generar bricks y schedulers en servicesStudentData
// Uso: node generate-schedulers.js > nuevo-services-data-student.js

const fs = require('fs');
const path = require('path');

// 1. Importa el array original
eval(fs.readFileSync(path.join(__dirname, 'services-data-student.js'), 'utf8'));

// 2. Configuración de días y feriados
const SEMESTER_START = new Date('2025-08-04');
const SEMESTER_END = new Date('2025-11-28');
const WEEK_DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const DAY_NUM_TO_NAME = ['Domingo', ...WEEK_DAYS, 'Sábado'];
const FERiados_CL = [
  // Feriados Chile 2025 entre 4-ago y 28-nov (puedes editar)
  '2025-08-15', // Asunción de la Virgen
  '2025-09-18', // Independencia
  '2025-09-19', // Glorias del Ejército
  '2025-10-12', // Encuentro de Dos Mundos
  '2025-10-31', // Día de las Iglesias Evangélicas
  '2025-11-01', // Todos los Santos
  '2025-11-02', // Día de los Muertos
];

// 3. Configuración de periodicidad por categoría
const CATEGORY_PERIODICITY = {
  'Académico': { perWeek: 1 },
  'Salud Mental': { perWeek: 1 },
  'Rendimiento Académico': { perWeek: 3 },
  'Carrera Profesional': { perWeek: 1 },
  'Financiero': { perWeek: 0.5 }, // 1 cada dos semanas
  'Desarrollo Estudiantil': { perWeek: 1 },
};

// 4. Horarios fijos para bricks según día
const FIXED_SHIFTS_BY_DAY = {
  'Lunes':    ['09:00-10:00', '10:00-11:00', '11:00-12:00', '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00'],
  'Martes':   ['09:00-10:00', '10:00-11:00', '11:00-12:00', '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00'],
  'Miércoles':['09:00-10:00', '10:00-11:00', '11:00-12:00', '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00'],
  'Jueves':   ['09:00-10:00', '10:00-11:00', '11:00-12:00', '14:00-15:00', '15:00-16:00', '16:00-17:00', '17:00-18:00'],
  'Viernes':  ['09:00-10:00', '10:00-11:00', '11:00-12:00']
};
const ALL_WEEK_DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

function isHoliday(dateStr) {
  return FERiados_CL.includes(dateStr);
}

function formatDate(date) {
  return `${date.getFullYear()}-${date.toLocaleString('en-US', { month: 'short' })}-${String(date.getDate()).padStart(2, '0')}`;
}

function getDayName(date) {
  return DAY_NUM_TO_NAME[date.getDay()];
}

function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

function getAllSessionDates({ start, end, perWeek, per2Weeks, weekDays }) {
  // Devuelve array de fechas para bricks
  let result = [];
  let current = new Date(start);
  let week = 0;
  while (current <= end) {
    if (WEEK_DAYS.includes(getDayName(current))) {
      if (
        (per2Weeks && week % 2 === 0) ||
        (!per2Weeks && perWeek > 0)
      ) {
        weekDays.forEach(day => {
          const d = addDays(current, (WEEK_DAYS.indexOf(day) - current.getDay() + 1 + 7) % 7);
          if (d >= start && d <= end && !isHoliday(d.toISOString().slice(0, 10))) {
            result.push(new Date(d));
          }
        });
      }
    }
    current = addDays(current, 7);
    week++;
  }
  return result;
}

function randomModality(modality) {
  if (modality === 'Híbrido') return Math.random() < 0.5 ? 'Online' : 'Presencial';
  return modality;
}

function getCategoryPeriodicity(cat) {
  if (cat === 'Financiero') return { perWeek: 0.5, per2Weeks: true };
  if (cat === 'Rendimiento Académico') return { perWeek: 3, per2Weeks: false };
  return { perWeek: 1, per2Weeks: false };
}

function getWeeklyShifts(count) {
  // Devuelve un array de objetos {day, start, end} distribuidos por los días y horarios disponibles
  let result = [];
  let days = [...ALL_WEEK_DAYS];
  let shiftIndices = Array(days.length).fill(0);
  let used = 0;
  let dayIdx = 0;
  while (used < count) {
    let day = days[dayIdx % days.length];
    let slots = FIXED_SHIFTS_BY_DAY[day];
    let slotIdx = shiftIndices[dayIdx % days.length] % slots.length;
    let [start, end] = slots[slotIdx].split('-');
    result.push({ day, start, end });
    shiftIndices[dayIdx % days.length]++;
    used++;
    dayIdx++;
  }
  return result;
}

servicesStudentData.forEach(service => {
  const dataBlindings = service.dataBlindings;
  const cat1 = dataBlindings.find(x => x.field === 'category_1')?.value;
  const modality = dataBlindings.find(x => x.field === 'modality')?.value || 'Presencial';
  const periodicity = getCategoryPeriodicity(cat1);
  const shifts = getWeeklyShifts(periodicity.perWeek === 0.5 ? 1 : periodicity.perWeek);
  const sessionDates = [];
  let current = new Date(SEMESTER_START);
  let week = 0;
  while (current <= SEMESTER_END) {
    if (periodicity.per2Weeks && week % 2 !== 0) {
      current = addDays(current, 7);
      week++;
      continue;
    }
    for (let s = 0; s < shifts.length; s++) {
      const shift = shifts[s];
      // Encuentra el próximo día igual al shift.day en la semana
      let d = new Date(current);
      let dayOffset = ALL_WEEK_DAYS.indexOf(shift.day) - d.getDay() + 1;
      if (dayOffset < 0) dayOffset += 7;
      d = addDays(current, dayOffset);
      if (d < SEMESTER_START || d > SEMESTER_END) continue;
      const dateStr = d.toISOString().slice(0, 10);
      if (!isHoliday(dateStr)) {
        sessionDates.push({
          date: formatDate(d),
          start_time: shift.start,
          end_time: shift.end,
          modality: randomModality(modality)
        });
      }
    }
    current = addDays(current, 7);
    week++;
  }
  // 1. Agrega scheduler
  dataBlindings.push({
    field: 'session_schedule',
    alias: 'Cronograma',
    is_visible: false,
    is_column: false,
    icon: '',
    color: '',
    modifiable: false,
    value: sessionDates
  });
  // 2. Actualiza sessions
  let sessionsObj = dataBlindings.find(x => x.field === 'sessions');
  if (sessionsObj) sessionsObj.value = String(sessionDates.length);
  // 3. Actualiza session_shifts
  let sessionShiftsObj = dataBlindings.find(x => x.field === 'session_shifts');
  if (sessionShiftsObj) {
    sessionShiftsObj.value = shifts.map(shift => ({
      day: shift.day,
      session_start_time: shift.start,
      session_end_time: shift.end
    }));
  }
  // 4. Actualiza startDate y endDate
  let startDateObj = dataBlindings.find(x => x.field === 'startDate');
  let endDateObj = dataBlindings.find(x => x.field === 'endDate');
  if (startDateObj && sessionDates.length) startDateObj.value = sessionDates[0].date;
  if (endDateObj && sessionDates.length) endDateObj.value = sessionDates[sessionDates.length - 1].date;
});

// Imprime el array listo para pegar
console.log('var servicesStudentData = ' + JSON.stringify(servicesStudentData, null, 2) + ';');
