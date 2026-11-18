'use strict';
// Interfaz, cuestionarios, simuladores y guardado del progreso.
const lessons = COURSE.lessons, labs = COURSE.labs, modules = COURSE.modules;
const complementos = EXTRA; // Fichas por clase, biblioteca y glosario.
const materialNames = { papel: 'Papel y lápiz', linterna: 'Linterna de pilas', etiquetas: 'Etiquetas / cajas de equipos', factura: 'Factura de electricidad', 'pilas-aa': 'Pilas AA', portapilas3: 'Portapilas para 3 AA', led: 'LED estándar', resistor1k: 'Resistencia 1 kΩ (¼ W o más)', resistor: 'Resistencia suelta', cables: 'Cables aislados', cinta: 'Cinta aislante', clips: 'Clips metálicos', multimetro: 'Multímetro con manual' };
const state = { view: 'home', lesson: 1, lab: labs[0].id, sim: 'ohm', filter: 'todos', search: '', onlyAvailable: false, caseId: null };
let store = { done: [], doneLabs: [], materials: ['papel'], scores: {}, notes: {} };
const v2key = 'aula-volt-v2-progress';
function load() { try {
    const obj = JSON.parse(localStorage.getItem(v2key) || 'null');
    if (obj && typeof obj === 'object') {
        store = { ...store, ...obj };
    }
}
catch (e) { } try {
    const prior = JSON.parse(localStorage.getItem('aula-volt-completed') || '[]');
    if (Array.isArray(prior))
        for (const n of prior) {
            if (Number.isInteger(n) && n >= 0 && n <= 2 && !store.done.includes(n + 1))
                store.done.push(n + 1);
        }
}
catch (e) { } sanitizeStore(); }
function sanitizeStore() { store.done = [...new Set((Array.isArray(store.done) ? store.done : []).filter(x => Number.isInteger(x) && x >= 1 && x <= lessons.length))]; store.doneLabs = [...new Set((Array.isArray(store.doneLabs) ? store.doneLabs : []).filter(x => typeof x === 'string' && labs.some(b => b.id === x)))]; store.materials = [...new Set((Array.isArray(store.materials) ? store.materials : []).filter(x => Object.keys(materialNames).includes(x)))]; if (!store.scores || typeof store.scores !== 'object' || Array.isArray(store.scores))
    store.scores = {}; if (!store.notes || typeof store.notes !== 'object' || Array.isArray(store.notes))
    store.notes = {}; }
function save() { try {
    localStorage.setItem(v2key, JSON.stringify(store));
}
catch (e) { } }
function h(x) { return String(x ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function toNum(n, d = 1) { return Number(n).toLocaleString('es-AR', { maximumFractionDigits: d }); }
function percent() { return Math.round(store.done.length / lessons.length * 100); }
const app = document.getElementById('app'), side = document.getElementById('side'), topnav = document.getElementById('topnav');
function renderChrome() { const navs = [['home', 'Inicio'], ['lessons', 'Clases'], ['labs', 'Prácticas'], ['sim', 'Simuladores'], ['library', 'Biblioteca'], ['progress', 'Mi progreso']]; topnav.innerHTML = navs.map(([v, t]) => `<button type="button" data-view="${v}" class="${state.view === v ? 'active' : ''}" ${state.view === v ? 'aria-current="page"' : ''}>${t}</button>`).join(''); let moduleGroups = modules.map((m, i) => { const subset = lessons.filter(l => l.module === i); const n = subset.filter(l => store.done.includes(l.id)).length; return `<details ${state.view === 'lessons' && subset.some(l => l.id === state.lesson) ? 'open' : ''}><summary>${i + 1}. ${h(m)} <small>(${n}/${subset.length})</small></summary><div class="inside">${subset.map(l => `<button type="button" class="lessonnav ${state.lesson === l.id && state.view === 'lessons' ? 'active' : ''} ${store.done.includes(l.id) ? 'done' : ''}" data-lesson="${l.id}"><span>${store.done.includes(l.id) ? '✓' : l.id + '.'}</span>${h(l.title)}</button>`).join('')}</div></details>`; }).join(''); side.innerHTML = `<div class="sideblock"><div class="eyebrow">Tu progreso</div><strong>${store.done.length} de ${lessons.length} clases</strong><div class="pbar" aria-label="Progreso de clases"><div style="width:${percent()}%"></div></div><p>${percent()}% completado · ${store.doneLabs.length}/${labs.length} prácticas</p></div><div class="lessonlist"><div class="eyebrow" style="margin-bottom:9px">Módulos y clases</div>${moduleGroups}</div><p class="small">Tus avances se guardan en este navegador cuando está permitido. Exportá una copia desde «Mi progreso».</p>`; }
function hero(tag, title, desc) { return `<section class="hero"><div class="eyebrow">${h(tag)}</div><h1>${h(title)}</h1><p>${h(desc)}</p></section>`; }
function banner() { return `<div class="safety"><strong>⚠️ Seguridad primero.</strong> Todas las prácticas físicas se limitan a observación o circuitos educativos de pilas AA con corriente limitada. Nunca trabajes sobre enchufes, cables de red, tableros, equipos abiertos ni instalaciones energizadas. Una clase no habilita a realizar trabajos eléctricos.</div>`; }
function home() {
    const next = lessons.find(l => !store.done.includes(l.id)) || lessons[lessons.length - 1];
    return `${hero('TU CURSO PERSONAL · SIN INTERNET', 'Electricidad desde cero, a tu ritmo', 'Aprendé con 33 clases reforzadas, 12 nuevos casos, un glosario, simuladores y prácticas según lo que ya tenés.')}
<div class="cards"><div class="stat"><strong>${lessons.length}</strong><span>Clases completas</span></div><div class="stat"><strong>${labs.length}</strong><span>Prácticas guiadas</span></div><div class="stat"><strong>${percent()}%</strong><span>Tu progreso</span></div></div>
<section class="surface"><div class="eyebrow">Seguí por acá</div><h2>${store.done.length ? 'Continuá donde quedaste' : '¡Bienvenido a Aula Volt!'}</h2><p>${store.done.length ? 'Tus clases aprobadas siguen marcadas.' : 'Podés avanzar en orden o elegir libremente cualquier clase.'} Próxima sugerida: <strong>Clase ${next.id}. ${h(next.title)}</strong>.</p><div class="row"><button class="btn" data-lesson="${next.id}">Abrir la clase ${next.id} →</button><button class="btn alt" data-view="labs">Ver prácticas con mis materiales</button></div></section>
<section class="surface"><h2>Cómo está organizado el curso</h2><div class="flow">${modules.map((m, i) => { const subset = lessons.filter(l => l.module === i); const finished = subset.filter(l => store.done.includes(l.id)).length; return `<button class="tile" data-lesson="${subset[0].id}"><span class="pill">Módulo ${i + 1}</span> <span class="pill ${finished === subset.length ? 'green' : ''}">${finished}/${subset.length} clases</span><h3>${h(m)}</h3><p>Clases ${subset[0].id} a ${subset[subset.length - 1].id} · aprox. ${subset.reduce((s, l) => s + l.minutes, 0)} min de estudio</p><span class="small">Abrir primera clase →</span></button>`; }).join('')}</div></section>
<section class="surface"><h2>Aprender con cosas que ya tenés</h2><p>Seleccioná tu inventario una sola vez. La sección de prácticas distinguirá las que podés hacer hoy y las que requieren materiales opcionales.</p><div class="row"><button class="btn alt" data-view="labs">Elegir materiales y prácticas →</button><button class="btn alt" data-view="sim">Abrir simuladores →</button><button class="btn alt" data-view="library">📚 Biblioteca práctica →</button></div></section>${banner()}`;
}
function lessonList() {
    return `${hero('PROGRAMA COMPLETO', 'Todas las clases', 'Podés abrir cualquier clase, rendir un cuestionario de tres preguntas y guardar tus conclusiones.')}
<div class="flow">${lessons.map(l => `<button class="tile" data-lesson="${l.id}"><span class="pill">${h(modules[l.module])}</span><span class="pill ${store.done.includes(l.id) ? 'green' : ''}">${store.done.includes(l.id) ? '✓ Aprobada' : 'Clase ' + l.id}</span><h3>${h(l.title)}</h3><p>${h(l.intro)}</p><span class="small">${l.minutes} min · ${l.labs.length} prácticas relacionadas</span></button>`).join('')}</div>`;
}
function lessonView() {
    const l = lessons.find(x => x.id === state.lesson) || lessons[0];
    const done = store.done.includes(l.id), prev = lessons[l.id - 2], next = lessons[l.id];
    const related = l.labs.map(id => labs.find(x => x.id === id)).filter(Boolean);
    return `${hero(`MÓDULO ${l.module + 1} · CLASE ${l.id} DE ${lessons.length} · ${l.minutes} MIN`, l.title, l.intro)}
<section class="surface onecol"><div class="row between"><span class="pill">${h(modules[l.module])}</span><span class="pill ${done ? 'green' : 'yellow'}">${done ? '✓ Clase aprobada' : 'Pendiente'}</span></div><h2>Explicación paso a paso</h2>${l.sections.map(s => `<h3>${h(s.h)}</h3><p>${h(s.p)}</p>`).join('')}<div class="solved"><strong>📘 Ejemplo resuelto</strong><p>${h(l.solved)}</p></div><div class="task"><strong>✍️ Tu desafío</strong><p>${h(l.challenge)}</p></div></section>
${lessonExtra(l.id)}
<section class="surface onecol"><div class="eyebrow">Aprender haciendo</div><h2>Prácticas relacionadas</h2><p>Si no tenés los materiales de una actividad física, podés hacer su alternativa en papel o simulador.</p><div class="row">${related.length ? related.map(b => `<button class="btn alt sm" data-lab="${h(b.id)}">${h(b.title)} →</button>`).join('') : 'No hay práctica especial para esta clase.'}</div></section>
<section class="surface onecol"><div class="eyebrow">Evaluación interactiva</div><h2>Comprobá lo que sabés</h2><p>Respondé las 3 preguntas. Con 3/3 marcás esta clase como aprobada. Podés volver a intentarlo cuantas veces quieras.</p><form id="quiz" data-quiz-id="${l.id}">${l.questions.map((q, i) => `<fieldset class="q"><legend>${i + 1}. ${h(q.q)}</legend><div class="choices">${q.options.map((a, j) => `<label class="choice"><input type="radio" name="q${i}" value="${j}"><span>${h(a)}</span></label>`).join('')}</div></fieldset>`).join('')}<button class="btn" type="submit">Corregir respuestas</button><div id="feedback" aria-live="polite"></div></form></section>
<section class="surface onecol"><h2>Mi cuaderno de esta clase</h2><p class="small">Anotá qué aprendiste, dudas o resultados. Se guarda en este dispositivo.</p><textarea class="notes" data-note="lesson-${l.id}" placeholder="Mi explicación con mis palabras…">${h(store.notes['lesson-' + l.id] || '')}</textarea></section>
<div class="row">${prev ? `<button class="btn alt" data-lesson="${prev.id}">← Clase ${prev.id}</button>` : ''}${next ? `<button class="btn" data-lesson="${next.id}">Clase ${next.id} →</button>` : `<button class="btn" data-view="progress">Ver progreso final →</button>`}</div>${banner()}`;
}
function available(b) { return b.need.every(id => store.materials.includes(id)); }
function missing(b) { return b.need.filter(id => !store.materials.includes(id)).map(x => materialNames[x]); }
function labHub() {
    let filtered = labs.filter(b => { const search = (b.title + ' ' + b.kind + ' ' + b.goal).toLowerCase(); return (!state.onlyAvailable || available(b)) && (state.filter === 'todos' || b.kind === state.filter) && search.includes(state.search.toLowerCase()); });
    let categories = [...new Set(labs.map(l => l.kind))];
    return `${hero('TALLER PERSONALIZADO', 'Practicá con lo que ya tenés', 'Elegí materiales disponibles. Siempre hay ejercicios de papel y simulación; los montajes requieren piezas y precauciones específicas.')}
<section class="surface"><h2>¿Qué materiales tenés a mano?</h2><p>Marcá únicamente lo que realmente tenés. Las prácticas disponibles se actualizan sin salir de esta página.</p><div class="materials">${Object.entries(materialNames).map(([k, n]) => `<label class="material"><input type="checkbox" data-material="${h(k)}" ${store.materials.includes(k) ? 'checked' : ''}><span>${h(n)}</span></label>`).join('')}</div><div class="tip"><strong>Regla para montajes:</strong> si falta una sola pieza especificada, no improvises sustitutos. Hacé la actividad sobre papel o simulador.</div></section>
<section class="surface"><div class="row between"><h2>Catálogo de prácticas</h2><span class="pill">${filtered.length} de ${labs.length}</span></div><div class="toolbar"><input id="labsearch" type="search" placeholder="Buscar una práctica" value="${h(state.search)}" aria-label="Buscar prácticas"><select id="labcategory" aria-label="Filtrar por tipo"><option value="todos">Todos los tipos</option>${categories.map(c => `<option value="${h(c)}" ${state.filter === c ? 'selected' : ''}>${h(c)}</option>`).join('')}</select><label class="checkline"><input type="checkbox" id="onlyAvailable" ${state.onlyAvailable ? 'checked' : ''}> Solo las que puedo hacer</label></div>
<div class="labs" id="labresults">${labCards(filtered)}</div></section>${banner()}`;
}
function labCards(arr) { if (!arr.length)
    return '<p class="empty">No hay prácticas con esos filtros. Probá desmarcar «Solo las que puedo hacer».</p>'; return arr.map(b => { const ok = available(b), lack = missing(b); return `<article class="labcard"><div class="row"><span class="pill">${h(b.kind)}</span><span class="pill ${store.doneLabs.includes(b.id) ? 'green' : ok ? 'green' : 'yellow'}">${store.doneLabs.includes(b.id) ? '✓ Hecha' : ok ? 'Lista para hacer' : 'Faltan materiales'}</span></div><h3>${h(b.title)}</h3><p>${h(b.goal)}</p><div class="small">${b.minutes} min · ${b.need.length ? b.need.length + ' materiales' : 'sin materiales extra'}</div>${!ok ? `<div class="missing">Faltan: ${h(lack.join(', '))}</div>` : ''}<div class="bottom"><button class="btn alt sm" data-lab="${h(b.id)}">Ver instrucciones →</button></div></article>`; }).join(''); }
function labView() {
    const b = labs.find(x => x.id === state.lab) || labs[0], ok = available(b);
    return `${hero('PRÁCTICA GUIADA · ' + b.kind, b.title, b.goal)}<section class="surface onecol"><div class="row"><span class="pill">${b.minutes} min</span><span class="pill ${ok ? 'green' : 'yellow'}">${ok ? 'Materiales marcados como disponibles' : 'Revisá materiales'}</span></div><h2>Materiales</h2>${b.need.length ? `<ul class="gridless">${b.need.map(id => `<li>${h(materialNames[id])} ${store.materials.includes(id) ? '✓' : '(no marcado)'}</li>`).join('')}</ul>` : '<p>No requiere materiales extra; seguí las instrucciones con papel o el simulador.</p>'}${!ok ? `<div class="safety">Faltan: <strong>${h(missing(b).join(', '))}</strong>. No improvises un montaje físico: podés leer la guía, hacer el análisis en papel o elegir otra práctica disponible.</div>` : ''}
<h2>Guía paso a paso</h2><ol class="step-list">${b.steps.map(x => `<li>${h(x)}</li>`).join('')}</ol><div class="solved"><strong>Qué deberías observar</strong><p>${h(b.result)}</p></div><div class="safety"><strong>Precaución específica</strong><p>${h(b.care)}</p></div><label class="checkline"><input type="checkbox" id="labdone" ${store.doneLabs.includes(b.id) ? 'checked' : ''}> Completé esta práctica o su análisis seguro, y escribí una conclusión.</label><h3>Mi resultado / conclusión</h3><textarea class="notes" data-note="lab-${h(b.id)}" placeholder="Qué hice, qué observé, qué aprendí…">${h(store.notes['lab-' + b.id] || '')}</textarea><div class="row"><button class="btn alt" data-view="labs">← Volver al catálogo</button>${b.kind === 'Simulador' ? '<button class="btn" data-view="sim">Abrir simuladores →</button>' : ''}</div></section>${banner()}`;
}
function simulator() {
    const tabs = [['ohm', 'Ley de Ohm'], ['series', 'Serie y paralelo'], ['energy', 'Consumo'], ['led', 'LED virtual']];
    return `${hero('LABORATORIO 100 % DIGITAL', 'Experimentá sin conectar cables', 'Cambiá los valores y observá qué sucede. Los modelos usan componentes ideales y no sustituyen una verificación de seguridad física.')}
<div class="row" style="margin:0 0 15px">${tabs.map(([id, name]) => `<button class="btn ${state.sim === id ? '' : 'alt'}" data-sim="${id}">${name}</button>`).join('')}</div><section class="surface">${simBody()}</section>`;
}
function simBody() {
    const slider = (id, label, min, max, step, v, unit) => `<div class="simcontrol"><label for="${id}">${label}<output id="${id}Label">${v} ${unit}</output></label><input id="${id}" type="range" min="${min}" max="${max}" step="${step}" value="${v}"></div>`;
    if (state.sim === 'ohm')
        return `<h2>¿Qué pasa si cambio V o R?</h2><div class="simlayout"><section>${slider('v', 'Tensión', 1, 12, 1, 6, 'V')}${slider('r', 'Resistencia', 100, 1000, 50, 300, 'Ω')}</section><section><div class="eyebrow">Corriente calculada</div><div id="simResult" class="bigvalue">20 mA</div><p id="simSecondary"></p><div id="simFormula" class="formula"></div><p class="small">Con un resistor ideal: I = V / R; P = V × I.</p></section></div>`;
    if (state.sim === 'series')
        return `<h2>¿Serie o paralelo?</h2><div class="simlayout"><section><label for="mode">Conexión</label><select id="mode" class="btn alt" style="display:block;margin:8px 0"><option value="serie">En serie</option><option value="paralelo">En paralelo</option></select>${slider('v', 'Fuente', 1, 12, 1, 6, 'V')}${slider('r1', 'Resistencia 1', 100, 1000, 50, 100, 'Ω')}${slider('r2', 'Resistencia 2', 100, 1000, 50, 200, 'Ω')}</section><section><div class="eyebrow">Resistencia equivalente</div><div id="simResult" class="bigvalue"></div><p id="simSecondary"></p><div id="simFormula" class="formula"></div><p class="small">Modelo ideal con dos resistores de valor fijo.</p></section></div>`;
    if (state.sim === 'energy')
        return `<h2>Calculadora de consumo</h2><div class="simlayout"><section>${slider('watts', 'Potencia', 1, 300, 1, 60, 'W')}${slider('hours', 'Horas por día', 0.5, 12, 0.5, 4, 'h')}${slider('days', 'Días', 1, 30, 1, 30, 'd')}</section><section><div class="eyebrow">Energía estimada</div><div id="simResult" class="bigvalue"></div><p id="simSecondary"></p><div id="simFormula" class="formula"></div><p class="small">Una estimación con potencia constante; muchos aparatos varían su consumo.</p></section></div>`;
    return `<h2>Interruptor y LED virtual</h2><div class="simlayout"><section>${slider('v', 'Voltaje (simulado)', 3, 6, 0.5, 4.5, 'V')}${slider('r', 'Resistencia en serie', 1000, 2200, 100, 1000, 'Ω')}<label class="checkline"><input type="checkbox" id="switch" checked> Interruptor cerrado</label><p class="small">Modelo simplificado: LED rojo con caída aproximada de 2 V. Solo simulación.</p></section><section><div id="lamp" class="switchlamp lit" role="img" aria-label="LED virtual"></div><div id="simResult" class="bigvalue"></div><p id="simSecondary"></p><div id="simFormula" class="formula"></div></section></div>`;
}
function bindSim() { for (const elem of app.querySelectorAll('input[type="range"],#mode,#switch')) {
    elem.addEventListener('input', calcSim);
    elem.addEventListener('change', calcSim);
} calcSim(); }
function val(id) { return Number(document.getElementById(id).value); }
function display(id, x) { document.getElementById(id).textContent = x; }
function calcSim() { let ids = ['v', 'r', 'r1', 'r2', 'watts', 'hours', 'days']; for (const id of ids) {
    const el = document.getElementById(id);
    if (el && document.getElementById(id + 'Label'))
        display(id + 'Label', toNum(el.value, 1) + ' ' + ({ v: 'V', r: 'Ω', r1: 'Ω', r2: 'Ω', watts: 'W', hours: 'h', days: 'd' }[id]));
} if (state.sim === 'ohm') {
    let v = val('v'), r = val('r'), i = v / r;
    display('simResult', toNum(i * 1000, 2) + ' mA');
    display('simSecondary', 'Potencia: ' + toNum(v * i, 3) + ' W');
    display('simFormula', `I = ${v} V ÷ ${r} Ω = ${toNum(i, 4)} A`);
}
else if (state.sim === 'series') {
    let v = val('v'), r1 = val('r1'), r2 = val('r2'), mode = document.getElementById('mode').value, eq = mode === 'serie' ? r1 + r2 : r1 * r2 / (r1 + r2);
    display('simResult', toNum(eq, 2) + ' Ω');
    display('simSecondary', 'Corriente total: ' + toNum(v / eq * 1000, 2) + ' mA');
    display('simFormula', mode === 'serie' ? `R = ${r1} + ${r2} = ${eq} Ω` : `R = (${r1} × ${r2}) / (${r1} + ${r2})`);
}
else if (state.sim === 'energy') {
    let w = val('watts'), ho = val('hours'), days = val('days'), kwh = w * ho * days / 1000;
    display('simResult', toNum(kwh, 3) + ' kWh');
    display('simSecondary', 'Por día: ' + toNum(w * ho, 2) + ' Wh');
    display('simFormula', `E = ${w} × ${toNum(ho, 1)} × ${days} ÷ 1000`);
}
else {
    const on = document.getElementById('switch').checked, v = val('v'), r = val('r'), i = on ? Math.max(0, (v - 2) / r) : 0;
    document.getElementById('lamp').className = 'switchlamp' + (on && i > 0 ? ' lit' : '');
    display('simResult', toNum(i * 1000, 2) + ' mA');
    display('simSecondary', on ? 'Interruptor cerrado' : 'Interruptor abierto');
    display('simFormula', on ? `I ≈ (${toNum(v, 1)} − 2) / ${r}` : 'Circuito abierto: I = 0 A');
} }
// Material complementario sin alterar las 33 clases ni el almacenamiento existente.
function lessonExtra(id) {
    const x = complementos.lessons[String(id)];
    if (!x) return '';
    const diagrams = {4:'circuito-simple.svg', 7:'resistencias-serie.svg', 8:'resistencias-paralelo.svg'};
    const pic = diagrams[id] ? `<figure class="diagram"><img src="./assets/diagrams/${diagrams[id]}" alt="Esquema educativo de circuito" style="width:100%;max-width:720px;height:auto" loading="lazy"><figcaption class="small">Esquema simplificado, solo para interpretar. No es una instrucción de instalación.</figcaption></figure>` : '';
    return `<section class="surface onecol enrichment"><div class="eyebrow">NUEVO · PROFUNDIZACIÓN</div><h2>Para entenderlo de verdad</h2>${pic}<div class="enrich-grid"><div class="enrich-block"><strong>🧠 La idea importante</strong><p>${h(x.idea)}</p></div><div class="enrich-block"><strong>🏠 En la vida cotidiana</strong><p>${h(x.vida)}</p></div><div class="enrich-block"><strong>✍️ Probalo de forma segura</strong><p>${h(x.reto)}</p></div><div class="enrich-block"><strong>⚠️ Error frecuente</strong><p>${h(x.error)}</p></div></div><details class="reveal"><summary>Ver respuesta o comprobación del desafío</summary><p>${h(x.respuesta)}</p></details><p class="small" style="margin-top:16px">Complemento de la clase ${id}. Tu evaluación original y tu progreso no cambian.</p></section>`;
}
function libraryHub() {
  return `${hero('AMPLIÁ TUS CONOCIMIENTOS', 'Biblioteca práctica', 'Casos concretos, problemas cotidianos y un diccionario de términos eléctricos. Todo disponible sin internet y sin modificar tu progreso.')}
<section class="surface"><h2>12 casos para aprender haciendo</h2><p>Elegí un caso y seguí sus pasos. Las observaciones, los cálculos y las simulaciones son la base. Las prácticas opcionales con pilas o multímetro indican precauciones particulares.</p><div class="library-grid">${complementos.cases.map(c=>`<button class="case-card" data-case="${h(c.id)}"><span class="pill">${h(c.tag)}</span><strong>${h(c.title)}</strong><p>${h(c.goal)}</p><span class="small">${c.minutes} min · Lecciones ${c.lessons.join(', ')}</span></button>`).join('')}</div></section>
<section class="surface"><div class="eyebrow">CONSULTA RÁPIDA</div><h2>Glosario de electricidad · ${complementos.glossary.length} términos</h2><label for="glossarySearch">Buscá por palabra o significado</label><input id="glossarySearch" class="library-search" type="search" placeholder="Ej.: voltio, amperio, tierra, LED" autocomplete="off"><div id="glossaryResults" class="glossary-grid">${glossaryCards(complementos.glossary)}</div></section>${banner()}`;
}
function glossaryCards(list){
  if(!list.length) return '<p>No se encontraron términos. Probá otra palabra.</p>';
  return list.map(([term,definition])=>`<article class="glossary-entry"><strong>${h(term)}</strong><p>${h(definition)}</p></article>`).join('');
}
function libraryCaseView() {
  const c = complementos.cases.find(x=>x.id===state.caseId);
  if(!c) return libraryHub();
  return `${hero('BIBLIOTECA · ' + c.tag, c.title, c.goal)}
<section class="surface onecol"><div class="case-meta"><span class="pill">${c.minutes} minutos aprox.</span><span class="pill">Clases relacionadas: ${c.lessons.join(', ')}</span></div><h2>Qué vas a necesitar</h2><ul class="gridless">${c.materials.map(m=>`<li>${h(m)}</li>`).join('')}</ul><h2>Paso a paso</h2><ol class="case-steps">${c.steps.map(s=>`<li>${h(s)}</li>`).join('')}</ol><div class="task"><strong>🧠 Comprobá tu comprensión</strong><p>${h(c.analysis)}</p></div><details class="reveal"><summary>Mostrar explicación y resultado</summary><p>${h(c.result)}</p></details><div class="content-small-note"><strong>Seguridad:</strong> ${h(c.caution)}</div><h3>Mi cuaderno del caso</h3><p class="small">Anotá tu respuesta antes de abrir la solución. Se guarda en este navegador con el resto de tus notas.</p><textarea class="notes" data-note="extra-${h(c.id)}" placeholder="Mi hipótesis, resultado y dudas...">${h(store.notes['extra-'+c.id] || '')}</textarea><div class="row"><button class="btn alt" data-view="library">← Volver a la biblioteca</button>${c.lessons.length?`<button class="btn" data-lesson="${c.lessons[0]}">Repasar clase ${c.lessons[0]} →</button>`:''}</div></section>${banner()}`;
}
function progressView() {
    return `${hero('TU CUADERNO DE AVANCES', 'Mi progreso', 'Conservá tus clases y notas. Podés exportar un archivo para recuperar el progreso si cambiás de dispositivo o de ubicación de la página.')}
<div class="cards"><div class="stat"><strong>${store.done.length}/${lessons.length}</strong><span>Clases aprobadas</span></div><div class="stat"><strong>${store.doneLabs.length}/${labs.length}</strong><span>Prácticas realizadas</span></div><div class="stat"><strong>${percent()}%</strong><span>Completado</span></div></div><section class="surface"><h2>Avance por módulo</h2>${modules.map((m, i) => { const subset = lessons.filter(l => l.module === i), done = subset.filter(l => store.done.includes(l.id)).length, pc = Math.round(done / subset.length * 100); return `<div style="margin:16px 0"><div class="row between"><strong>${i + 1}. ${h(m)}</strong><span class="small">${done}/${subset.length}</span></div><div class="pbar"><div style="width:${pc}%"></div></div></div>`; }).join('')}</section><section class="surface"><h2>Guardar o recuperar mis avances</h2><p>La página funciona sin cuentas ni servidor. Los datos quedan en el almacenamiento local del navegador y pueden perderse al borrar sus datos, cambiar de dispositivo o abrir el archivo desde otra ubicación.</p><div class="row">${[1, 2, 3].every(id => store.done.includes(id)) ? '' : '<button class="btn alt" id="old3">Ya terminé las 3 clases del curso anterior</button>'}<button class="btn" id="export">Descargar copia de mi progreso (.json)</button><label class="btn alt" style="cursor:pointer">Importar copia (.json)<input id="import" type="file" accept=".json,application/json" class="hidden"></label><button class="btn danger" id="reset">Reiniciar progreso</button></div><p class="small" id="backupStatus" aria-live="polite">Recomendación: exportá una copia después de completar varios módulos.</p></section><section class="surface"><h2>Calificaciones</h2><p class="small">Las clases requieren 3/3 respuestas correctas para marcarse como aprobadas.</p><div class="flow">${lessons.map(l => `<div class="tile"><span class="pill ${store.done.includes(l.id) ? 'green' : ''}">${store.done.includes(l.id) ? '✓ Aprobada' : 'Pendiente'}</span><strong style="display:block;margin-top:9px">${l.id}. ${h(l.title)}</strong><span class="small">Mejor puntaje: ${Number.isInteger(store.scores[l.id]) ? store.scores[l.id] + '/3' : '—'}</span></div>`).join('')}</div></section>${banner()}`;
}
function render() { renderChrome(); if (state.view === 'home')
    app.innerHTML = home(); if (state.view === 'lessons')
    app.innerHTML = state.lesson ? lessonView() : lessonList(); if (state.view === 'labs')
    app.innerHTML = state.labOpen ? labView() : labHub(); if (state.view === 'sim') {
    app.innerHTML = simulator();
    bindSim();
} if (state.view === 'progress')
    app.innerHTML = progressView(); if (state.view === 'library') app.innerHTML = state.caseId ? libraryCaseView() : libraryHub(); document.title = (state.view === 'lessons' && state.lesson ? lessons[state.lesson - 1].title + ' — ' : '') + 'Aula Volt — Electricidad desde cero'; }
function goto(view) { state.view = view; if(view === 'library') state.caseId = null; if (view === 'labs')
    state.labOpen = false; if (view === 'lessons')
    state.lesson = null; render(); window.scrollTo(0, 0); }
function openLesson(id) { state.lesson = Math.max(1, Math.min(lessons.length, Number(id))); state.view = 'lessons'; render(); window.scrollTo(0, 0); }
function openLab(id) { state.lab = id; state.labOpen = true; state.view = 'labs'; render(); window.scrollTo(0, 0); }
document.addEventListener('click', e => { const t = e.target.closest('button,[data-view]'); if (!t)
    return; if (t.dataset.lesson) {
    openLesson(t.dataset.lesson);
    return;
} if (t.dataset.lab) {
    openLab(t.dataset.lab);
    return;
} if (t.dataset.case) { state.caseId = t.dataset.case; state.view='library'; render(); window.scrollTo(0,0); return; } if (t.dataset.view) {
    goto(t.dataset.view);
    return;
} if (t.dataset.sim) {
    state.sim = t.dataset.sim;
    render();
    return;
} if (t.id === 'old3') {
    if (confirm('¿Confirmás que completaste las tres clases del curso anterior?')) {
        for (const id of [1, 2, 3])
            if (!store.done.includes(id))
                store.done.push(id);
        save();
        render();
    }
    return;
} if (t.id === 'export') {
    const backup = { app: 'Aula Volt', version: 2, exportedAt: new Date().toISOString(), progress: store };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' }), url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url;
    a.download = 'mi-progreso-aula-volt.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 500);
    return;
} if (t.id === 'reset') {
    if (confirm('¿Borrar clases, prácticas, inventario y notas de ESTE navegador? Exportá una copia antes si querés conservarlos.')) {
        store = { done: [], doneLabs: [], materials: ['papel'], scores: {}, notes: {} };
        save();
        render();
    }
    return;
} });
document.addEventListener('change', e => { const t = e.target; if (t.dataset.material) {
    if (t.checked && !store.materials.includes(t.dataset.material))
        store.materials.push(t.dataset.material);
    if (!t.checked)
        store.materials = store.materials.filter(x => x !== t.dataset.material);
    save();
    render();
    return;
} if (t.id === 'onlyAvailable') {
    state.onlyAvailable = t.checked;
    render();
    return;
} if (t.id === 'labcategory') {
    state.filter = t.value;
    render();
    return;
} if (t.id === 'labdone') {
    if (t.checked && !store.doneLabs.includes(state.lab))
        store.doneLabs.push(state.lab);
    if (!t.checked)
        store.doneLabs = store.doneLabs.filter(x => x !== state.lab);
    save();
    render();
    return;
} if (t.id === 'import') {
    const file = t.files && t.files[0];
    if (!file)
        return;
    const reader = new FileReader();
    reader.onload = () => { try {
        const input = JSON.parse(String(reader.result));
        if (input.app !== 'Aula Volt' || input.version !== 2 || !input.progress || typeof input.progress !== 'object')
            throw Error('Archivo de copia inválido.');
        if (!confirm('¿Importar esta copia? Va a reemplazar el progreso actual de este navegador.'))
            return;
        store = input.progress;
        sanitizeStore();
        save();
        render();
        alert('Copia importada correctamente.');
    }
    catch (ex) {
        alert('No se pudo importar: ' + ex.message);
    } };
    reader.readAsText(file);
    return;
} });
document.addEventListener('input', e => { const t = e.target; if (t.id === 'glossarySearch') { const q=t.value.toLocaleLowerCase('es'); const zone=document.getElementById('glossaryResults'); if(zone) zone.innerHTML = glossaryCards(complementos.glossary.filter(([term,definition])=>(term+' '+definition).toLocaleLowerCase('es').includes(q))); return; } if (t.dataset.note) {
    store.notes[t.dataset.note] = t.value;
    save();
} if (t.id === 'labsearch') {
    const pos = t.selectionStart;
    state.search = t.value;
    const zone = document.getElementById('labresults');
    if (zone)
        zone.innerHTML = labCards(labs.filter(b => (!state.onlyAvailable || available(b)) && (state.filter === 'todos' || state.filter === b.kind) && (b.title + ' ' + b.kind + ' ' + b.goal).toLowerCase().includes(state.search.toLowerCase())));
    if (typeof pos === 'number') {
        try {
            t.setSelectionRange(pos, pos);
        }
        catch (err) { }
    }
} });
document.addEventListener('submit', e => { if (e.target.id !== 'quiz')
    return; e.preventDefault(); const l = lessons.find(x => x.id === Number(e.target.dataset.quizId)); let score = 0, answered = 0; const feedback = []; l.questions.forEach((q, i) => { const selected = e.target.querySelector(`input[name="q${i}"]:checked`); if (!selected) {
    feedback.push(`<li><strong>Pregunta ${i + 1}:</strong> sin responder.</li>`);
    return;
} answered++; if (Number(selected.value) === q.answer) {
    score++;
    feedback.push(`<li>✓ <strong>Pregunta ${i + 1}:</strong> bien.</li>`);
}
else {
    feedback.push(`<li>✗ <strong>Pregunta ${i + 1}:</strong> ${h(q.why)}</li>`);
} }); store.scores[l.id] = Math.max(store.scores[l.id] || 0, score); const passed = answered === 3 && score === 3; if (passed && !store.done.includes(l.id))
    store.done.push(l.id); save(); renderChrome(); const box = document.getElementById('feedback'); box.className = 'feedback ' + (passed ? 'success' : 'fail'); box.innerHTML = `<strong>${score}/3 correctas.</strong> ${passed ? '¡Clase aprobada! Tu progreso se guardó.' : 'Revisá estas explicaciones y volvé a intentarlo.'}<ul>${feedback.join('')}</ul>`; if (passed) {
    const label = app.querySelector('.pill.yellow');
    if (label) {
        label.textContent = '✓ Clase aprobada';
        label.className = 'pill green';
    }
} box.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); });
load();
render();
