/* Laboratorio visual de Aula Volt. No usa servicios externos ni modifica las clases ya realizadas. */
'use strict';
const VISUAL_LAB = (() => {
  const missions = [
    {id:'switch', title:'1. Abrir y cerrar un circuito', subtitle:'Descubrí por qué el interruptor controla la corriente.', topic:'Circuito completo', related:4, materials:'Papel, lápiz y una linterna de pilas cerrada (opcional).', steps:['Dibujá una pila, una carga y un interruptor.','Predecí la corriente con el interruptor abierto y con él cerrado.','Probá ambos estados en el circuito virtual.','Si tenés una linterna, accioná su interruptor sin abrir ni modificar el aparato.'], caution:'No abras ni modifiques una linterna conectada a un cargador. No unas directamente los polos de una pila.'},
    {id:'ohm', title:'2. Probar la ley de Ohm', subtitle:'Compará tensión, resistencia y corriente.', topic:'V = I × R', related:9, materials:'Papel y lápiz. Multímetro y pilas sueltas son opcionales para otras actividades guiadas.', steps:['Elegí una tensión y una resistencia en el simulador.','Calculá la corriente con I = V/R antes de comprobar.','Cambiá solamente la tensión y anotá cómo cambia la corriente.','Volvé al valor inicial y cambiá solo la resistencia.'], caution:'No midas corriente en pilas conectando un multímetro directamente entre sus polos. Para esta actividad no necesitás hacer conexiones reales.'},
    {id:'series', title:'3. Serie o paralelo', subtitle:'Investigá cómo cambia la resistencia equivalente.', topic:'Dos caminos posibles', related:10, materials:'Papel, lápiz y dos resistencias sueltas (opcionales para identificar bandas).', steps:['Seleccioná serie y anotá la resistencia equivalente.','Predecí la corriente total y comprobala.','Cambiá a paralelo conservando los valores y repetí.','Explicá por qué la resistencia equivalente en paralelo es menor que la más pequeña.'], caution:'Esta experiencia es un modelo con resistencias ideales. No hagas pruebas con enchufes, prolongadores ni instalaciones de la casa.'},
    {id:'led', title:'4. Encender un LED con seguridad', subtitle:'Aprendé por qué el LED necesita una resistencia.', topic:'Limitación de corriente', related:18, materials:'Simulador; opcionalmente 2 o 3 pilas AA, portapilas, LED rojo estándar, resistencia 220–1000 Ω de ¼ W y cables aislados.', steps:['Elegí la cantidad de pilas y el resistor.','Predecí la corriente aproximada del LED.','Compará tu resultado con el modelo de caída de 2 V.','Solo si tenés todos los componentes adecuados, seguí una práctica guiada de baja tensión: fuente desconectada durante el armado, resistencia siempre en serie, polaridad correcta, y desconectá al terminar.'], caution:'Nunca conectes un LED directamente a una pila o fuente sin limitación de corriente, ni a la red eléctrica. No improvises componentes ni trabajes con acumuladores de litio.'}
  ];
  const defaults = {
    switch:{voltage:'3', resistance:'330', closed:'no'},
    ohm:{voltage:'3', resistance:'470'},
    series:{voltage:'3', r1:'330', r2:'680', mode:'serie'},
    led:{voltage:'3', resistance:'330', closed:'si'}
  };
  const choices = {
    voltage:[['1.5','1 pila AA · 1,5 V'],['3','2 pilas AA · 3 V'],['4.5','3 pilas AA · 4,5 V']],
    resistor:[['220','220 Ω'],['330','330 Ω'],['470','470 Ω'],['680','680 Ω'],['1000','1.000 Ω']],
    binary:[['no','Abierto'],['si','Cerrado']],
    layout:[['serie','En serie'],['paralelo','En paralelo']]
  };
  let selected = 'switch';
  let config = JSON.parse(JSON.stringify(defaults));
  let outcomes = {};
  let predictions = {};
  const fmt = (n,d=2)=>Number(n).toLocaleString('es-AR',{maximumFractionDigits:d});
  const safe = (x)=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function isDone(id){return Array.isArray(store.workshopDone)&&store.workshopDone.includes(id)}
  function calc(id){
    const c = config[id]; const v=Number(c.voltage);
    if(id==='switch') {
      const r=Number(c.resistance), on=c.closed==='si';
      const ma=on?v/r*1000:0;
      return {ma, v, equivalent:r, active:on, watt:v*ma/1000, equation:on?`I = ${fmt(v)} V ÷ ${fmt(r)} Ω = ${fmt(ma)} mA`:'Interruptor abierto: no hay camino completo, I = 0 mA.', reason:on?'El circuito está cerrado y la corriente puede circular por la resistencia.':'El interruptor interrumpe el camino: idealmente no circula corriente.'};
    }
    if(id==='ohm'){
      const r=Number(c.resistance), ma=v/r*1000;
      return {ma,v,equivalent:r,active:true,watt:v*ma/1000,equation:`I = ${fmt(v)} V ÷ ${fmt(r)} Ω = ${fmt(ma)} mA`,reason:'Para una resistencia fija, más tensión implica más corriente; para una tensión fija, más resistencia implica menos corriente.'};
    }
    if(id==='series') {
      const a=Number(c.r1),b=Number(c.r2),isSeries=c.mode==='serie';
      const eq=isSeries?a+b:a*b/(a+b),ma=v/eq*1000;
      return {ma,v,equivalent:eq,active:true,watt:v*ma/1000,equation:`R eq = ${isSeries?`${a} + ${b}`:`(${a} × ${b}) ÷ (${a} + ${b})`} = ${fmt(eq)} Ω; I total = ${fmt(v)} ÷ ${fmt(eq)} = ${fmt(ma)} mA`,reason:isSeries?'En serie, las resistencias se suman y toda la corriente atraviesa ambas.':'En paralelo, hay dos ramas y la resistencia equivalente es menor que cualquiera de las individuales.'};
    }
    const r=Number(c.resistance),on=c.closed==='si',ma=on?Math.max(0,v-2)/r*1000:0;
    return {ma,v,equivalent:r,active:on&&v>2,watt:(v-2>0?Math.max(0,v-2):0)*ma/1000,equation:on?`I ≈ (${fmt(v)} V − 2 V) ÷ ${fmt(r)} Ω = ${fmt(ma)} mA`:'Interruptor abierto: I = 0 mA.',reason:on?'El LED rojo se modela con una caída aproximada de 2 V. El resto de la tensión cae sobre el resistor, que limita la corriente. En un LED real el valor depende del modelo y la temperatura.':'El interruptor abierto interrumpe la corriente y el LED queda apagado.'};
  }
  function selector(key,label,options){
    const value=config[selected][key];
    return `<label class="lv-field">${label}<select data-lv-config="${key}">${options.map(([v,t])=>`<option value="${v}" ${v===value?'selected':''}>${safe(t)}</option>`).join('')}</select></label>`;
  }
  function options(){
    let c='';
    if(selected==='switch') c+=selector('voltage','Alimentación',choices.voltage.slice(0,2))+selector('resistance','Resistencia',choices.resistor)+selector('closed','Interruptor',choices.binary);
    if(selected==='ohm') c+=selector('voltage','Alimentación',choices.voltage)+selector('resistance','Resistencia',choices.resistor);
    if(selected==='series') c+=selector('voltage','Alimentación',choices.voltage)+selector('r1','Resistencia R1',choices.resistor)+selector('r2','Resistencia R2',choices.resistor)+selector('mode','Tipo de conexión',choices.layout);
    if(selected==='led') c+=selector('voltage','Alimentación',choices.voltage.slice(1))+selector('resistance','Resistencia en serie',choices.resistor)+selector('closed','Interruptor',choices.binary);
    return c;
  }
  function drawResistor(x,y,w=72,label='R'){
    const nodes=8,dx=w/nodes;
    let p=`M ${x} ${y}`;
    for(let i=0;i<nodes;i++)p+=` L ${(x+dx*(i+.5)).toFixed(2)} ${y+(i%2===0?-11:11)}`;
    p+=` L ${x+w} ${y}`;
    return `<path d="${p}" class="lv-resistor"/><text x="${x+w/2}" y="${y-25}" text-anchor="middle" class="lv-value">${label}</text>`;
  }
  function draw(){
    const v=calc(selected),c=config[selected],run=!!outcomes[selected]&&v.active;
    const animated=run?' lv-flow':'';
    let symbol='';
    let wires='';
    if(selected==='series'&&c.mode==='paralelo'){
      wires=`<path d="M100 105 H198 V73 H315 M388 73 H494 V105 H690 V224 H100 V168" class="lv-wire${animated}"/><path d="M198 105 V161 H315 M388 161 H494 V105" class="lv-wire${animated}"/>`;
      symbol=drawResistor(315,73,73,`R1 · ${c.r1} Ω`)+drawResistor(315,161,73,`R2 · ${c.r2} Ω`);
    } else if(selected==='series'){
      wires=`<path d="M100 105 H255 M327 105 H466 M538 105 H690 V224 H100 V168" class="lv-wire${animated}"/>`;
      symbol=drawResistor(255,105,72,`R1 · ${c.r1} Ω`)+drawResistor(466,105,72,`R2 · ${c.r2} Ω`);
    } else if(selected==='led') {
      wires=`<path d="M100 105 H222 M252 105 H330 M402 105 H539 M591 105 H690 V224 H100 V168" class="lv-wire${animated}"/>`;
      const open=c.closed!=='si';
      symbol=`<circle cx="222" cy="105" r="4" class="lv-contact"/><circle cx="252" cy="105" r="4" class="lv-contact"/><path d="${open?'M222 105 L246 85':'M222 105 L252 105'}" class="lv-switch"/>`;
      symbol+=drawResistor(330,105,72,`${c.resistance} Ω`);
      symbol+=`<circle cx="565" cy="105" r="26" class="lv-led ${run?'lv-on':''}"/><text x="565" y="111" text-anchor="middle" class="lv-led-text">LED</text><path d="M578 69 L596 49 M592 71 L611 51" stroke="#d4a425" stroke-width="3"/>`;
    } else if(selected==='switch') {
      const open=c.closed!=='si';
      wires=`<path d="M100 105 H222 M252 105 H407 M479 105 H690 V224 H100 V168" class="lv-wire${animated}"/>`;
      symbol=`<circle cx="222" cy="105" r="4" class="lv-contact"/><circle cx="252" cy="105" r="4" class="lv-contact"/><path d="${open?'M222 105 L246 85':'M222 105 L252 105'}" class="lv-switch"/>`+drawResistor(407,105,72,`${c.resistance} Ω`);
    } else {
      wires=`<path d="M100 105 H407 M479 105 H690 V224 H100 V168" class="lv-wire${animated}"/>`;
      symbol=drawResistor(407,105,72,`${c.resistance} Ω`);
    }
    const msg=outcomes[selected] ? (v.active?'Corriente simulada':'Sin corriente') : 'Primero predecí el resultado';
    return `<svg class="lv-svg" viewBox="0 0 780 270" role="img" aria-label="Esquema digital del circuito de ${safe(missions.find(m=>m.id===selected).title)}. ${safe(msg)}.">
      <rect x="1" y="1" width="778" height="268" rx="18" class="lv-paper"/>
      ${wires}
      <path d="M100 105 V115 M100 172 V224" class="lv-wire${animated}"/>
      <rect x="65" y="115" width="70" height="57" rx="8" class="lv-source"/><text x="100" y="136" text-anchor="middle" class="lv-source-text">PILAS</text><text x="100" y="158" text-anchor="middle" class="lv-source-text">${fmt(v.v)} V</text>
      ${symbol}
      <text x="395" y="253" text-anchor="middle" class="lv-hint">${safe(msg)}</text>
    </svg>`;
  }
  function answerBox(){
    const out=outcomes[selected]; if(!out) return `<div class="lv-blank" aria-live="polite">Ingresá tu predicción y presioná <strong>Comprobar</strong> para descubrir la corriente.</div>`;
    const actual=out.value.ma;
    const diff=Math.abs(out.predicted-actual);
    const close=diff<=Math.max(0.3,actual*.10);
    const commentary=close?'¡Buena estimación! Tu predicción coincide aproximadamente con el modelo.':'Tu hipótesis fue diferente del cálculo. Eso es parte del aprendizaje: revisá las unidades y la fórmula y probá otra combinación.';
    return `<div class="lv-answer" aria-live="polite"><span class="pill ${close?'green':'yellow'}">${close?'Predicción aproximada':'Resultado para revisar'}</span><h3>${fmt(actual)} mA <span class="lv-muted">· corriente total</span></h3><p>Tu predicción: <strong>${fmt(out.predicted)} mA</strong>. ${commentary}</p><p class="lv-formula">${safe(out.value.equation)}</p><p>${safe(out.value.reason)}</p><p class="small">Potencia aproximada disipada en el conjunto resistivo: ${fmt(out.value.watt,3)} W. Modelo teórico, sin tolerancias ni resistencias internas.</p></div>`;
  }
  function render(){
    const m=missions.find(x=>x.id===selected);
    const doneCount=missions.filter(x=>isDone(x.id)).length;
    return `<section class="hero"><div class="eyebrow">AULA VOLT · LABORATORIO VISUAL</div><h1>Predecí. Probá. Entendé.</h1><p>Cuatro experiencias interactivas para poner a prueba tus ideas antes de ver el resultado. No necesitás comprar materiales para empezar.</p></section>
      <div class="lv-progress"><span><strong>${doneCount} de 4</strong> experimentos realizados</span><div class="pbar"><div style="width:${doneCount*25}%"></div></div><span class="small">Se registra en tu misma copia JSON del progreso.</span></div>
      <div class="lv-tabs" role="group" aria-label="Elegir experimento">${missions.map(x=>`<button type="button" class="lv-tab ${x.id===selected?'selected':''}" data-lv-mission="${x.id}" aria-pressed="${x.id===selected?'true':'false'}"><span>${isDone(x.id)?'✓ ':''}${safe(x.title)}</span><small>${safe(x.topic)}</small></button>`).join('')}</div>
      <section class="surface lv-lesson"><div class="row between"><span class="pill">${safe(m.topic)}</span><span class="pill ${isDone(m.id)?'green':'yellow'}">${isDone(m.id)?'✓ Experimentado':'Por explorar'}</span></div><h2>${safe(m.title)}</h2><p>${safe(m.subtitle)}</p>
      <div class="lv-layout"><div class="lv-graphic">${draw()}<p class="small">Esquema simplificado, no es una guía de cableado. Las líneas animadas aparecen después de comprobar.</p></div><div class="lv-controls"><h3>Elegí los componentes</h3>${options()}</div></div>
      <form id="lv-form"><div class="lv-predict"><div><div class="eyebrow">PASO 1 · ANTES DE VER EL RESULTADO</div><h3>¿Cuánta corriente creés que circulará?</h3><p>Escribí una estimación en <strong>mA (miliamperios)</strong>, incluso 0 si creés que no circulará corriente. Podés usar coma o punto decimal.</p></div><label class="lv-field" for="lv-current">Mi predicción (mA)<input id="lv-current" name="estimate" inputmode="decimal" autocomplete="off" placeholder="Ej.: 6,4" value="${safe(predictions[selected]||'')}"></label><button type="submit" class="btn">Comprobar predicción →</button></div></form>
      <div id="lv-result">${answerBox()}</div></section>
      <section class="surface"><div class="eyebrow">PASO 2 · DEL SIMULADOR A LA VIDA REAL</div><h2>Practicá con lo que tengas</h2><p><strong>Materiales:</strong> ${safe(m.materials)}</p><ol class="lv-steps">${m.steps.map(s=>`<li>${safe(s)}</li>`).join('')}</ol><div class="safety"><strong>Precaución:</strong> ${safe(m.caution)}</div><h3>Mi conclusión</h3><p class="small">Anotá qué predijiste, qué pasó y cómo lo explicarías con tus palabras. Se guarda automáticamente en este dispositivo.</p><textarea class="notes" data-note="visual-${m.id}" placeholder="Primero pensé que… luego comprobé…">${safe(store.notes['visual-'+m.id]||'')}</textarea><div class="row"><button type="button" class="btn alt" data-lesson="${m.related}">Repasar clase relacionada →</button>${selected!=='led'?`<button type="button" class="btn" data-lv-next>Ir al siguiente experimento →</button>`:''}</div></section>
      <div class="safety"><strong>⚠️ Seguridad:</strong> Los valores de este laboratorio son simulados. Usá solamente pilas AA y componentes educativos adecuados en las actividades físicas opcionales. Nunca hagas conexiones a tomacorrientes, 220 V, fuentes abiertas, cables de red ni baterías de litio. No hagas cortocircuitos.</div>`;
  }
  function bind(){
    document.querySelectorAll('[data-lv-mission]').forEach(b=>b.addEventListener('click',()=>{selected=b.dataset.lvMission;renderApp()}));
    document.querySelectorAll('[data-lv-config]').forEach(el=>el.addEventListener('change',()=>{
      config[selected][el.dataset.lvConfig]=el.value;
      outcomes[selected]=null;
      predictions[selected]='';
      renderApp();
    }));
    const form=document.getElementById('lv-form');
    if(form) form.addEventListener('submit',e=>{
      e.preventDefault();
      const input=document.getElementById('lv-current');
      const raw=input.value.trim().replace(',','.');
      if(!/^\d+(?:\.\d+)?$/.test(raw)||!Number.isFinite(Number(raw))||Number(raw)>100000){
        input.setCustomValidity('Escribí un número positivo válido, por ejemplo 5,3 o 0.');
        input.reportValidity();
        input.setCustomValidity('');return;
      }
      const predicted=Number(raw);
      predictions[selected]=input.value.trim();
      outcomes[selected]={predicted,value:calc(selected)};
      if(!Array.isArray(store.workshopDone))store.workshopDone=[];
      if(!store.workshopDone.includes(selected))store.workshopDone.push(selected);
      save();renderApp();
      document.getElementById('lv-result')?.scrollIntoView({block:'nearest',behavior:'smooth'});
    });
    document.querySelector('[data-lv-next]')?.addEventListener('click',()=>{
      selected=missions[(missions.findIndex(m=>m.id===selected)+1)%missions.length].id;renderApp();window.scrollTo(0,0);
    });
    function renderApp(){
      const box=document.getElementById('app');
      box.innerHTML=render();bind();
      renderChrome();
    }
  }
  return {render,bind};
})();
