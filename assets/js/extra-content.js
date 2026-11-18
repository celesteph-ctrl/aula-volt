// Complementos didácticos, casos prácticos y glosario. Sin servicios externos.
const EXTRA = {
  "lessons": {
    "1": {
      "idea": "La electricidad no se “gasta” como una sustancia: lo que se transfiere es energía. En un circuito cerrado, las cargas pueden moverse por el material conductor; en el circuito de una linterna, esa energía termina principalmente como luz y calor.",
      "vida": "Mirá una linterna de pilas apagada: identificá dónde están la fuente, el interruptor y la lámpara. Si es de apertura sencilla, inspeccionala solamente con las pilas retiradas; no fuerces piezas.",
      "reto": "En papel dibujá dos contactos de una pila, un interruptor y una lámpara. Mostrá el recorrido cerrado y después abrí el interruptor con una separación.",
      "error": "No imagines que el interruptor “crea” electricidad: solamente permite o interrumpe el recorrido.",
      "respuesta": "Una linterna no encendería si faltara uno de los contactos: el circuito estaría abierto."
    },
    "2": {
      "idea": "La tensión compara dos puntos; la corriente expresa cuánta carga circula por segundo; y la resistencia es una propiedad de los componentes. No son tres nombres para lo mismo.",
      "vida": "Una pila AA se rotula con ~1,5 V: eso no significa que por ella circulen 1,5 A. La corriente depende del circuito que se conecte.",
      "reto": "Escribí tres columnas: V, A, Ω. Clasificá los valores 3 V, 200 mA y 1 kΩ; convertí 200 mA a amperios.",
      "error": "Nunca confundas amperios con amperios-hora (Ah). A expresa corriente; Ah, carga eléctrica acumulada.",
      "respuesta": "200 mA equivalen a 0,2 A; 1 kΩ equivale a 1000 Ω."
    },
    "3": {
      "idea": "La relación I = V/R es útil para resistores que se comportan aproximadamente como óhmicos. Si sube V y R no cambia, sube la corriente; si sube R y V no cambia, baja.",
      "vida": "Con una pila ficticia de 6 V y un resistor de 600 Ω, circulan 0,01 A = 10 mA. Con 300 Ω, serían 20 mA.",
      "reto": "Abrí el simulador Ley de Ohm y compará 6 V / 600 Ω con 6 V / 300 Ω. Anotá la corriente y la potencia.",
      "error": "No apliques una resistencia constante para predecir exactamente un LED, una lámpara incandescente o un motor.",
      "respuesta": "Si la resistencia se reduce a la mitad y la fuente es ideal, la corriente se duplica."
    },
    "4": {
      "idea": "Un circuito cerrado tiene un camino continuo a través de la carga; “cerrado” no significa cortocircuitado. Un cortocircuito crea un camino no deseado de resistencia muy baja y puede calentar la fuente.",
      "vida": "La linterna apagada por su interruptor tiene un recorrido interrumpido. Nunca pruebes si una pila funciona uniéndole los extremos con metal.",
      "reto": "Trazá en papel un camino que pase por lámpara e interruptor; marcá dónde habría una interrupción y dónde sería peligroso unir los polos directamente.",
      "error": "Un cortocircuito no es una forma “más fuerte” de encender una lámpara: es una condición peligrosa.",
      "respuesta": "Si se puentea la carga con un conductor de muy baja resistencia, la pila puede entregar demasiada corriente."
    },
    "5": {
      "idea": "Los símbolos representan funciones, no la forma física de las piezas. Dos diagramas muy distintos visualmente pueden describir el mismo circuito.",
      "vida": "Una linterna real puede tener una carcasa curva; en un esquema sus partes se dibujan ordenadas para mostrar conexiones.",
      "reto": "Dibujá los símbolos de pila, resistencia, lámpara e interruptor y explicá la función de cada uno.",
      "error": "La ubicación de un símbolo en el papel no siempre corresponde a la posición del objeto en una caja.",
      "respuesta": "El esquema debe comunicar qué está conectado a qué."
    },
    "6": {
      "idea": "Un conductor facilita el movimiento de carga; un aislante dificulta ese movimiento. Depende del material, su estado y las condiciones; ningún material es absolutamente aislante en cualquier circunstancia.",
      "vida": "En un cable se usa metal en el interior y una cubierta aislante alrededor. Esa cubierta no reemplaza las demás medidas de seguridad.",
      "reto": "Observá cables sueltos sin conectarlos; dibujá la sección de un cable con núcleo metálico y funda aislante.",
      "error": "No ensayes materiales con enchufes ni con electricidad de red. Evitá usar líquidos como prueba de conducción.",
      "respuesta": "La cubierta plástica protege porque dificulta contactos involuntarios con el conductor."
    },
    "7": {
      "idea": "En serie la corriente es la misma a través de cada resistor ideal; las resistencias se suman y la tensión total se reparte entre ellas.",
      "vida": "Dos resistores de 100 Ω y 200 Ω en serie dan 300 Ω. A 6 V, circulan 20 mA; las caídas son 2 V y 4 V.",
      "reto": "Usá el simulador Serie y paralelo: fijá 100 Ω, 200 Ω, 6 V y elegí serie. Calculá antes el resultado en papel.",
      "error": "No sumes las corrientes de cada resistor en serie: son iguales en todos los elementos del lazo.",
      "respuesta": "La suma de caídas 2 V + 4 V coincide con los 6 V de la fuente ideal."
    },
    "8": {
      "idea": "En paralelo todos los ramales ideales reciben la misma tensión, y las corrientes de los ramales se suman en el punto común.",
      "vida": "Un resistor de 300 Ω y otro de 600 Ω, ambos a 6 V, consumen 20 mA y 10 mA respectivamente. La corriente total es 30 mA.",
      "reto": "Dibujá dos ramales; aplicá I = V/R a cada uno. Después comprobá con el simulador.",
      "error": "En paralelo no se suman las resistencias: la equivalente es menor que la menor de las ramas resistivas positivas.",
      "respuesta": "La equivalente de 300 Ω || 600 Ω es 200 Ω."
    },
    "9": {
      "idea": "Un resistor se identifica por su valor nominal, tolerancia y potencia máxima de disipación. El color puede ayudar, pero conviene leer especificaciones o verificar con un multímetro apropiado.",
      "vida": "Un resistor de 1 kΩ y ¼ W puede ser adecuado en circuitos educativos correctamente dimensionados; 1 kΩ = 1000 Ω.",
      "reto": "Si tenés resistores sueltos, mirá las bandas con buena iluminación y anotá lo que interpretás; no hace falta conectarlos.",
      "error": "No confundas el valor de resistencia (Ω) con su potencia nominal (W).",
      "respuesta": "El valor de un resistor se lee en ohmios; su capacidad térmica se suele indicar en watts."
    },
    "10": {
      "idea": "Potencia es la rapidez a la que se transfiere energía: P = V × I en corriente continua para los valores correspondientes; para un resistor también vale P = I²R.",
      "vida": "Una carga ideal de 6 V con 0,1 A recibe 0,6 W. No son 0,6 Wh: esa segunda unidad requeriría hablar de tiempo.",
      "reto": "Buscá una etiqueta accesible y copiate el valor W; convertí 100 W en kW.",
      "error": "La potencia nominal de una fuente y el consumo real de un aparato no son necesariamente iguales.",
      "respuesta": "100 W = 0,1 kW."
    },
    "11": {
      "idea": "La energía es la potencia acumulada durante un tiempo. Si la potencia es constante: Wh = W × h y kWh = Wh/1000.",
      "vida": "Una lámpara de 10 W encendida 5 h consume idealmente 50 Wh = 0,05 kWh. Un mes de 30 días con ese uso serían 1,5 kWh.",
      "reto": "Elegí un aparato con potencia indicada, estimá horas diarias y calculá un consumo mensual; comparalo con el simulador.",
      "error": "Un precio final de factura no equivale siempre a kWh multiplicados por una única tarifa: hay cargos e impuestos.",
      "respuesta": "10 W × 5 h × 30 días ÷ 1000 = 1,5 kWh."
    },
    "12": {
      "idea": "La resistencia eléctrica puede convertir energía en calor. Los cables y componentes tienen límites térmicos; por eso no alcanza con que el cálculo de corriente “dé bien”.",
      "vida": "Para un resistor de 100 Ω con 6 V, P = V²/R = 36/100 = 0,36 W; superaría el límite típico de un resistor de ¼ W.",
      "reto": "Calculá la potencia de un resistor de 100 Ω alimentado hipotéticamente a 3 V y 6 V; compará con 0,25 W sin realizar el montaje.",
      "error": "No hagas pruebas físicas que busquen calentar resistores, cables o pilas.",
      "respuesta": "A 3 V son 0,09 W; a 6 V, 0,36 W. La potencia crece con el cuadrado de V."
    },
    "13": {
      "idea": "Las pilas convierten energía química en eléctrica; la tensión marcada es nominal y varía con la química, el uso y la carga. Las pilas recargables pueden tener otro valor nominal.",
      "vida": "Una pila alcalina AA suele indicarse como 1,5 V; una AA NiMH recargable suele indicar 1,2 V. No todas las pilas AA son eléctricamente idénticas.",
      "reto": "Observá el rótulo de pilas sueltas. Anotá química, tensión, polaridad y símbolos de reciclaje; evitá mezclar pilas nuevas y usadas.",
      "error": "No abras ni perfores pilas, no las cargues si no son recargables y no cortocircuites sus bornes.",
      "respuesta": "Dos alcalinas de 1,5 V en serie darían aproximadamente 3 V en condiciones ideales."
    },
    "14": {
      "idea": "La polaridad indica cómo debe orientarse un componente. Un LED permite corriente principalmente en un sentido y necesita limitar la corriente cuando se usa con pilas.",
      "vida": "En un LED convencional suele identificarse el cátodo por el lado plano del encapsulado; la pata larga suele ser ánodo si no fue cortada. Confirmá con la hoja de datos.",
      "reto": "En el simulador LED virtual, observá qué sucede al abrir el interruptor y al cambiar la resistencia en serie.",
      "error": "Nunca conectes un LED directamente a una pila o a una fuente de alimentación sin calcular una limitación de corriente adecuada.",
      "respuesta": "Con un LED rojo de caída estimada 2 V, 4,5 V y 1 kΩ: I ≈ (4,5−2)/1000 = 2,5 mA."
    },
    "15": {
      "idea": "Un interruptor mecánico cambia el estado del contacto: abierto o cerrado. Su función se distingue de la fuente y de la carga.",
      "vida": "En una linterna apagada, el botón interrumpe el camino. En las llaves domésticas hay reglas de instalación, pero aquí solo estudiaremos su función sin intervenir en ellas.",
      "reto": "Dibujá un interruptor abierto, y después cerrado, dentro de un esquema de pila y LED virtual.",
      "error": "No reutilices interruptores de red desconocidos para prácticas con pilas; usá componentes educativos adecuados.",
      "respuesta": "Al abrir un único lazo en serie, la corriente cae a cero en el modelo ideal."
    },
    "16": {
      "idea": "Un capacitor almacena energía en un campo eléctrico. Su capacidad se expresa en faradios (F), comúnmente µF o nF en electrónica.",
      "vida": "En circuitos, los capacitores pueden ayudar a suavizar variaciones o introducir demoras, pero no son baterías.",
      "reto": "Buscá en una foto o placa de aparato didáctico la inscripción µF sin abrir dispositivos ni manipular fuentes; explicá cuál sería su función.",
      "error": "Algunos capacitores conservan carga después de desconectar un equipo. No abras aparatos para inspeccionarlos.",
      "respuesta": "1000 µF equivalen a 0,001 F."
    },
    "17": {
      "idea": "Un multímetro reúne varias funciones, pero cada medición requiere un modo y bornes correctos. La mayoría de los errores proviene de usar una configuración que no corresponde.",
      "vida": "Para medir una pila AA independiente se suele utilizar tensión continua (V⎓), punta negra en COM y roja en V; nunca el borne A para esta tarea.",
      "reto": "Sin conectar nada, estudiá las posiciones de la perilla de tu multímetro y localizá los bornes en su manual.",
      "error": "No uses un instrumento desconocido sobre la red doméstica. No pongas la perilla en A o Ω para medir tensión de una pila.",
      "respuesta": "La lectura V⎓ corresponde a tensión continua; V~ indica tensión alterna."
    },
    "18": {
      "idea": "Medir tensión implica colocar el voltímetro entre los dos puntos que se quieren comparar, en paralelo con el elemento. En la práctica se limita a pilas separadas de todo circuito.",
      "vida": "Al medir una pila AA en V⎓, la lectura puede ser algo distinta del nominal 1,5 V; si invertís las puntas puede aparecer signo negativo.",
      "reto": "Solo si contás con un multímetro funcional y su manual, medí una pila suelta siguiendo la guía de la práctica; si no, hacé el esquema en papel.",
      "error": "Nunca hagas la prueba con la punta roja conectada a una entrada de corriente (A/mA).",
      "respuesta": "Un signo negativo normalmente indica puntas invertidas para esa referencia, no una pila “de voltaje negativo”."
    },
    "19": {
      "idea": "Resistencia y continuidad se comprueban únicamente en elementos completamente separados de toda fuente eléctrica. El multímetro aplica una señal propia pequeña.",
      "vida": "Un resistor suelto de 1 kΩ puede leerse cerca de 1000 Ω, dentro de su tolerancia y la del instrumento.",
      "reto": "Dibujá dónde apoyarías las puntas en un resistor aislado; si tenés un multímetro, seguí su manual y verificá que no haya pilas conectadas al componente.",
      "error": "Nunca uses Ω o continuidad sobre una pila ni sobre aparatos conectados o capacitores potencialmente cargados.",
      "respuesta": "Un pitido de continuidad indica resistencia baja según el umbral del instrumento; no significa “todo está perfecto”."
    },
    "20": {
      "idea": "La escala o puerto equivocado puede provocar lecturas sin sentido o dañar el equipo. Medir corriente no se hace como medir tensión.",
      "vida": "Un voltímetro se conecta entre puntos; un amperímetro se integra en serie y requiere diseño específico. Para empezar, calculá corriente: no la midas físicamente.",
      "reto": "Dibujá dos conexiones de multímetro en papel: en paralelo para V y una hipotética en serie para A. Señalá cuál NO realizarás.",
      "error": "Jamás conectes una entrada de corriente directamente entre los bornes de una pila o enchufe.",
      "respuesta": "Colocar la entrada de amperios en paralelo con una fuente puede provocar cortocircuito."
    },
    "21": {
      "idea": "La corriente continua (CC) mantiene polaridad, aunque su valor puede variar. La alterna (CA) cambia de sentido periódicamente; en redes domésticas suele ser sinusoidal.",
      "vida": "Las pilas suministran CC. Los tomacorrientes domiciliarios suministran CA; estudiá esa diferencia sin hacer mediciones en ellos.",
      "reto": "Clasificá pilas AA, enchufe de pared y salida USB de un cargador cerrado como CC o CA; la salida USB normal es CC.",
      "error": "No abras cargadores ni enchufes para comprobar qué sucede dentro.",
      "respuesta": "Pila y USB trabajan normalmente con CC; el enchufe de red entrega CA."
    },
    "22": {
      "idea": "La red eléctrica conecta generación, transporte, distribución y consumo. Existen transformadores y protecciones en diferentes etapas; entenderlo no implica realizar trabajos en esas instalaciones.",
      "vida": "Una etiqueta en un artefacto puede decir “220–240 V~, 50 Hz”, valores de entrada nominales habituales en Argentina.",
      "reto": "Observá etiquetas accesibles de electrodomésticos desenchufados. Localizá V~, Hz y W, sin retirar cubiertas.",
      "error": "No tomes tensión de un tomacorriente para comprobar los valores de una etiqueta.",
      "respuesta": "50 Hz significa 50 ciclos completos por segundo."
    },
    "23": {
      "idea": "Fase, neutro y protección a tierra cumplen roles distintos. Los colores y designaciones de los conductores dependen de normas y de una instalación correctamente ejecutada.",
      "vida": "Que un cable esté identificado como neutro no garantiza que sea seguro tocarlo; una falla o cableado incorrecto puede energizarlo.",
      "reto": "Sobre un dibujo de instalación conceptual, señalá fase, neutro y protección a tierra sin tocar ninguna parte de una instalación real.",
      "error": "No identifiques conductores solamente por color, ni abras cajas o tomacorrientes para “reconocerlos”.",
      "respuesta": "El conductor de protección no debe utilizarse como retorno normal de corriente."
    },
    "24": {
      "idea": "Las protecciones actúan ante situaciones distintas. Un interruptor termomagnético ayuda ante sobrecorrientes; un diferencial detecta desequilibrios de corriente asociados a fugas.",
      "vida": "Una protección diferencial no reemplaza una correcta puesta a tierra ni evita todos los accidentes posibles.",
      "reto": "Hacé una tabla con riesgo de sobrecarga, contacto indirecto, cortocircuito y medidas preventivas; todo sobre papel.",
      "error": "No pruebes protecciones creando fallas eléctricas ni intervengas tableros.",
      "respuesta": "El riesgo se reduce con diseño, instalación, protecciones, mantenimiento y conductas seguras."
    },
    "25": {
      "idea": "Un esquema previo permite detectar conexiones incompletas y componentes mal elegidos antes de construir algo. Es la etapa más barata para equivocarse.",
      "vida": "Para un LED rojo y tres AA alcalinas, una resistencia de 1 kΩ en serie limita la corriente a unos pocos mA; el cálculo usa una caída aproximada de 2 V.",
      "reto": "Dibujá un lazo de 3 pilas AA en portapilas, resistencia 1 kΩ, LED e interruptor. Marcá polaridades y el circuito de vuelta.",
      "error": "No reemplaces la resistencia por cables, clips ni alambres; antes de montar revisá la potencia y las conexiones.",
      "respuesta": "El recorrido debe tener fuente, limitación de corriente, LED y regreso a la fuente."
    },
    "26": {
      "idea": "En una serie de resistores, cada caída de tensión es I × R. La suma de las caídas debe coincidir con la tensión suministrada en el modelo ideal.",
      "vida": "Con 6 V, 100 Ω y 200 Ω en serie, la corriente es 20 mA: caen 2 V en el primero y 4 V en el segundo.",
      "reto": "Calculá V1 y V2 para resistencias 200 Ω y 400 Ω a 6 V en serie.",
      "error": "No repartas la tensión por igual salvo que los valores resistivos sean iguales.",
      "respuesta": "R total 600 Ω; I = 10 mA; V1 = 2 V; V2 = 4 V."
    },
    "27": {
      "idea": "Para comparar lámparas, distinguí potencia eléctrica (W), luz útil (lúmenes) y eficiencia luminosa (lm/W). Los dos primeros números no son sinónimos.",
      "vida": "Una lámpara de 8 W y 800 lm entrega aproximadamente 100 lm/W. Otra de 10 W y 800 lm entrega 80 lm/W.",
      "reto": "Usá dos etiquetas o cajas de lámparas apagadas y compará W, lm, temperatura de color y vida útil declarada.",
      "error": "No manipules casquillos ni bombillas conectadas a la red. Las etiquetas pueden usar condiciones de ensayo específicas.",
      "respuesta": "A igual cantidad de lúmenes, menos W suele significar mejor eficiencia luminosa."
    },
    "28": {
      "idea": "Una etiqueta puede informar tensión de entrada, corriente, potencia, frecuencia y clase de aislamiento. Leerla correctamente previene interpretaciones equivocadas.",
      "vida": "Si una fuente dice “salida 5 V ⎓ 2 A”, indica capacidad nominal de hasta 2 A, no que siempre entrega exactamente 2 A.",
      "reto": "Sin enchufar ni abrir nada, copiá el texto de entrada y salida de un cargador que tengas y distinguí ambos lados.",
      "error": "No uses fuentes de tensión desconocida en experimentos ni cortes conectores de cargadores.",
      "respuesta": "5 V × 2 A = 10 W es capacidad máxima ideal de esa salida según los valores marcados."
    },
    "29": {
      "idea": "Planificar consumo consiste en sumar la energía de cada uso, no solamente las potencias de las etiquetas.",
      "vida": "Una lámpara 9 W por 4 h = 36 Wh; una notebook 45 W por 2 h = 90 Wh. En conjunto son 126 Wh = 0,126 kWh, suponiendo potencias constantes.",
      "reto": "Inventá un día típico con tres aparatos y sus horas. Sumá Wh y dividí entre 1000 para obtener kWh.",
      "error": "No se puede deducir el consumo exacto de aparatos de potencia variable solo por su potencia nominal.",
      "respuesta": "Para el ejemplo: 36 + 90 = 126 Wh = 0,126 kWh."
    },
    "30": {
      "idea": "Buscar errores es comparar el esquema con las reglas: circuito cerrado, polaridad, corriente limitada y ausencia de conexiones que puenteen cargas.",
      "vida": "Un LED al revés podría no iluminar; un circuito abierto no deja circular corriente; y un cable que une directamente extremos de la pila causa una condición peligrosa.",
      "reto": "En papel dibujá tres esquemas con un fallo cada uno: interruptor abierto, LED invertido y puente directo de la fuente. Identificá por qué falla cada uno.",
      "error": "Nunca reproduzcas físicamente un fallo peligroso para “ver qué pasa”.",
      "respuesta": "Antes de conectar piezas, verificá que no haya camino directo entre polos sin carga/limitación."
    },
    "31": {
      "idea": "Un proyecto sencillo se diseña con especificaciones: fuente, limitación de corriente, elemento luminoso, interruptor, consumo estimado y condiciones de seguridad.",
      "vida": "Para 3 AA alcalinas (~4,5 V en serie), LED rojo (~2 V) y resistor de 1 kΩ: I ≈ 2,5 mA en un modelo simplificado.",
      "reto": "Empezá dibujando y simulando. Solo si contás con portapilas, LED, 1 kΩ, cables aislados y un interruptor educativo, seguí la práctica de montaje con guía.",
      "error": "La corriente real depende de la pila y del LED. No cortocircuites pilas ni uses tomacorrientes.",
      "respuesta": "Potencia aproximada en resistor: 0,0025² × 1000 ≈ 0,0063 W, muy por debajo de ¼ W."
    },
    "32": {
      "idea": "Para investigar materiales no hace falta introducir electricidad en objetos desconocidos. Se puede usar observación, fuentes de consulta y diseños hipotéticos.",
      "vida": "La aleación, el diámetro y la longitud afectan la resistencia de un conductor. El aislamiento depende del material y su estado.",
      "reto": "Elegí cinco objetos cotidianos y clasificá sus materiales visibles. Dibujá cómo los probarías con un sistema didáctico seguro, sin montar conexiones improvisadas.",
      "error": "No ensayes materiales con tomacorrientes, baterías de alta energía, líquidos o piezas conectadas a otros equipos.",
      "respuesta": "Al clasificar, diferenciá el material del objeto completo: un cable tiene parte conductora y aislante."
    },
    "33": {
      "idea": "Resolver un problema eléctrico requiere identificar datos, dibujar, elegir un modelo adecuado, calcular, comprobar unidades y evaluar seguridad.",
      "vida": "En un esquema ideal de 9 V con dos resistores de 300 Ω en serie: R total 600 Ω; I = 15 mA; cada resistor recibe 4,5 V.",
      "reto": "Escribí una explicación para alguien que recién empieza: qué representa V, qué pasa si duplicás R y por qué se usa una resistencia con LED.",
      "error": "Una fórmula correcta fuera de su ámbito de validez puede llevar a decisiones equivocadas.",
      "respuesta": "Una buena respuesta incluye cálculo, unidad, explicación y advertencia de límites del modelo."
    }
  },
  "cases": [
    {
      "id": "linterna",
      "title": "Radiografía de una linterna",
      "tag": "Observación",
      "minutes": 15,
      "lessons": [
        1,
        4,
        5,
        15
      ],
      "materials": [
        "Linterna a pilas",
        "Papel y lápiz"
      ],
      "goal": "Reconocer las partes de un circuito completo sin conexiones nuevas.",
      "steps": [
        "Poné la linterna apagada sobre una mesa. Identificá el lugar donde van las pilas y dónde está el mando.",
        "Sin hacer modificaciones, anotá qué parte creés que funciona como fuente, interruptor y carga.",
        "Dibujá un lazo cerrado. Indicá cómo cambia al accionar el interruptor.",
        "Comprobá que el dibujo tenga regreso a la pila."
      ],
      "analysis": "¿Por qué el circuito de una linterna necesita dos contactos eléctricos de la pila?",
      "result": "Porque la corriente necesita un recorrido completo entre ambos terminales a través de la carga.",
      "caution": "Si la linterna está dañada, caliente o con pilas hinchadas o derramadas, no la manipules. No cortocircuites pilas."
    },
    {
      "id": "etiquetas",
      "title": "Descifrador de etiquetas",
      "tag": "Observación",
      "minutes": 20,
      "lessons": [
        2,
        10,
        22,
        28
      ],
      "materials": [
        "Etiquetas accesibles de equipos cerrados",
        "Cuaderno"
      ],
      "goal": "Interpretar V, A, W, Hz y los valores de entrada y salida.",
      "steps": [
        "Elegí tres etiquetas o cajas de aparatos, preferiblemente desconectados.",
        "Copiá las unidades, los símbolos CC/CA y los datos de entrada/salida.",
        "Separá tensión nominal, corriente máxima, potencia y frecuencia.",
        "Construí una tabla en tu cuaderno y compará los tres ejemplos."
      ],
      "analysis": "Si la salida de un cargador dice 5 V CC y 2 A, ¿siempre consume 10 W?",
      "result": "No. 10 W es V×I a la corriente nominal indicada, no consumo constante. También hay pérdidas y variaciones de carga.",
      "caution": "No retires tapas ni desenchufes equipos tirando del cable; no abras cargadores o fuentes."
    },
    {
      "id": "conversor",
      "title": "Las unidades cambian; la física no",
      "tag": "Papel",
      "minutes": 12,
      "lessons": [
        2,
        3,
        9
      ],
      "materials": [
        "Papel y lápiz"
      ],
      "goal": "Dominar A↔mA, Ω↔kΩ y W↔kW.",
      "steps": [
        "Escribí 0,015 A, 0,3 A y 250 mA.",
        "Convertí los tres valores a la misma unidad.",
        "Convertí 2,2 kΩ a Ω y 750 W a kW.",
        "Verificá multiplicando o dividiendo por mil."
      ],
      "analysis": "¿Cuánto son 0,015 A en mA?",
      "result": "15 mA; además 2,2 kΩ = 2200 Ω y 750 W = 0,75 kW.",
      "caution": "No requiere conexión eléctrica ni materiales adicionales."
    },
    {
      "id": "circuito-papel",
      "title": "Detective de circuitos",
      "tag": "Papel",
      "minutes": 20,
      "lessons": [
        4,
        5,
        25,
        30
      ],
      "materials": [
        "Papel y lápiz"
      ],
      "goal": "Identificar con lógica interrupciones y cortocircuitos en dibujos.",
      "steps": [
        "Dibujá una pila, interruptor, lámpara y regreso a la pila.",
        "Dejá el interruptor abierto y marcá dónde se corta el camino.",
        "Dibujá otro esquema idéntico pero cerrado.",
        "En un tercer dibujo representá, solo en papel, un puente que evita la lámpara. Escribí por qué no se debe construir."
      ],
      "analysis": "¿Cerrar el interruptor equivale a cortocircuitar la pila?",
      "result": "No. Si hay una carga adecuada en el lazo, cerrar el interruptor permite su funcionamiento normal.",
      "caution": "Las conexiones que puentean directamente una pila son solo ejercicios teóricos; no las construyas."
    },
    {
      "id": "resistencias",
      "title": "Dos resistencias, dos resultados",
      "tag": "Simulación",
      "minutes": 20,
      "lessons": [
        3,
        7,
        8,
        26
      ],
      "materials": [
        "Simulador integrado",
        "Papel y lápiz"
      ],
      "goal": "Diferenciar serie y paralelo con valores calculados.",
      "steps": [
        "Elegí en el simulador R1 = 100 Ω, R2 = 200 Ω y V = 6 V.",
        "Predecí resistencia equivalente en serie y verificá.",
        "Repetí en paralelo y anotá cómo cambia la corriente.",
        "Explicá con tus palabras por qué en paralelo la resistencia equivalente es menor."
      ],
      "analysis": "¿Qué resistencia equivalente da en paralelo 100 Ω y 200 Ω?",
      "result": "R = 100×200/(100+200) ≈ 66,7 Ω. El modelo ideal predice ~90 mA a 6 V.",
      "caution": "Solo simulación: no uses esos valores para montar un circuito sin analizar límites de potencia."
    },
    {
      "id": "energia",
      "title": "Una factura explicada con números",
      "tag": "Cálculo",
      "minutes": 20,
      "lessons": [
        10,
        11,
        27,
        29
      ],
      "materials": [
        "Factura o tarifa de referencia (opcional)",
        "Papel y lápiz"
      ],
      "goal": "Estimar consumos sin confundir watts con kilowatt-hora.",
      "steps": [
        "Tomá una lámpara de 9 W y suponé uso 4 h por día durante 30 días.",
        "Calculá su energía: 9 × 4 × 30 ÷ 1000.",
        "Repetí con otro aparato de potencia indicada y horas de uso estimadas.",
        "Sumá los kWh de ambos y distinguí energía de precio final."
      ],
      "analysis": "¿Cuál es el consumo mensual estimado de la lámpara?",
      "result": "1,08 kWh. Es una estimación basada en potencia constante; la factura puede agregar cargos e impuestos.",
      "caution": "No abras tableros ni medidores para conocer consumos."
    },
    {
      "id": "pilas",
      "title": "Pilas: etiquetas y polaridad",
      "tag": "Observación",
      "minutes": 15,
      "lessons": [
        13,
        14,
        18
      ],
      "materials": [
        "Pilas AA independientes",
        "Papel y lápiz"
      ],
      "goal": "Diferenciar tensión nominal, química, polaridad y capacidad.",
      "steps": [
        "Leé la inscripción de una pila AA suelta sin conectarla.",
        "Copiá V, química y símbolos +/−.",
        "Dibujá dos pilas en serie y calculá el valor nominal conjunto.",
        "Repetí en papel con pilas de 1,2 V recargables."
      ],
      "analysis": "Dos AA recargables de 1,2 V en serie, ¿qué tensión nominal suman?",
      "result": "2,4 V nominales; la tensión real depende de la química, estado y carga.",
      "caution": "No mezcles pilas nuevas con usadas, ni químicas distintas, ni las cortocircuites."
    },
    {
      "id": "multimetro",
      "title": "Conocé tu multímetro antes de usarlo",
      "tag": "Instrumentos",
      "minutes": 20,
      "lessons": [
        17,
        18,
        19,
        20
      ],
      "materials": [
        "Multímetro con manual (opcional)",
        "Papel y lápiz"
      ],
      "goal": "Reconocer bornes, selector y precauciones básicas sin medir red.",
      "steps": [
        "Con el instrumento desconectado, ubicá el borne COM y el borne V/Ω en el manual.",
        "Buscá los símbolos V⎓, V~ y Ω y escribí qué significan.",
        "Dibujá dónde irían las puntas para medir una pila AA suelta en modo V⎓.",
        "Anotá dos modos que jamás usarías para medir tensión de una pila: A/mA y Ω."
      ],
      "analysis": "¿Qué puede ocurrir si se ponen las puntas en entrada de A directamente entre bornes de una pila?",
      "result": "Puede producirse un cortocircuito; no se debe hacer.",
      "caution": "No realices mediciones de tensión de red ni pruebes entradas A/mA. Seguí siempre el manual."
    },
    {
      "id": "medir-aa",
      "title": "Medir la tensión de una pila AA",
      "tag": "Medición opcional",
      "minutes": 15,
      "lessons": [
        18,
        20
      ],
      "materials": [
        "Pila AA suelta",
        "Multímetro con manual"
      ],
      "goal": "Practicar una medición de CC muy baja tensión, solo si tenés equipo y conocés sus bornes.",
      "steps": [
        "Verificá que la pila esté suelta, fuera de cualquier aparato y sin signos de daño.",
        "Según el manual del instrumento, colocá la punta negra en COM y la roja en la entrada marcada V/Ω.",
        "Elegí el modo tensión continua V⎓, con escala adecuada (por ejemplo 20 V en modelos manuales).",
        "Tocá con las puntas los dos extremos de la pila sin que se toquen entre sí. Leé la tensión y retiralas.",
        "Anotá tensión medida y nominal, sin diagnosticar la capacidad de la pila por una única lectura."
      ],
      "analysis": "Si la lectura muestra -1,4 V, ¿qué suele significar?",
      "result": "Habitualmente que las puntas quedaron invertidas respecto de la polaridad de referencia.",
      "caution": "NO usar entrada A/mA, Ω ni continuidad sobre una pila. No medir nunca tomacorrientes ni baterías grandes en este curso."
    },
    {
      "id": "resistencia-suelta",
      "title": "Medir un resistor suelto",
      "tag": "Medición opcional",
      "minutes": 15,
      "lessons": [
        9,
        19,
        20
      ],
      "materials": [
        "Resistor suelto, sin alimentación",
        "Multímetro con manual"
      ],
      "goal": "Leer ohmios sin exponer el instrumento a fuentes.",
      "steps": [
        "Comprobá que el resistor está totalmente aislado y no conectado a pilas, capacitores ni otros componentes.",
        "Leé las indicaciones del multímetro para medir Ω; usá COM y V/Ω si así lo marca su manual.",
        "Apoyá una punta en cada extremo del resistor y anotá el valor.",
        "Compará la lectura con la inscripción/código y su tolerancia."
      ],
      "analysis": "¿Por qué la lectura de 1 kΩ podría no ser exactamente 1000 Ω?",
      "result": "Por tolerancia del resistor, precisión del instrumento y contacto de las puntas.",
      "caution": "Nunca midas resistencia de piezas aún conectadas a una fuente o un equipo, incluso apagado."
    },
    {
      "id": "led-virtual",
      "title": "Tu primera luz, primero en simulación",
      "tag": "Simulación",
      "minutes": 15,
      "lessons": [
        14,
        15,
        25,
        31
      ],
      "materials": [
        "Simulador integrado"
      ],
      "goal": "Dimensionar un indicador LED de forma virtual y entender su polaridad.",
      "steps": [
        "Abrí LED virtual; elegí 4,5 V y resistencia 1000 Ω.",
        "Anotá el valor estimado de corriente con interruptor cerrado.",
        "Abrí el interruptor virtual y observá el cambio.",
        "Estimá la potencia en la resistencia con P = I²R."
      ],
      "analysis": "Con una caída supuesta de LED de 2 V, ¿qué corriente estimada aparece a 4,5 V y 1 kΩ?",
      "result": "Aproximadamente 2,5 mA; el resultado depende de las características reales del LED.",
      "caution": "Este caso es solo simulación. Nunca conectes un LED directamente a una batería."
    },
    {
      "id": "luz-eficiente",
      "title": "Comparar dos lámparas",
      "tag": "Observación",
      "minutes": 15,
      "lessons": [
        10,
        11,
        27,
        28
      ],
      "materials": [
        "Cajas o etiquetas accesibles",
        "Papel y lápiz"
      ],
      "goal": "Comparar lúmenes, W y eficacia sin tocar instalaciones.",
      "steps": [
        "Copiá de dos cajas de lámparas los valores de W y lm.",
        "Calculá lúmenes divididos por watts para cada una.",
        "Anotá temperatura de color y características publicadas.",
        "Compará cuál ilumina más por watt según etiquetas."
      ],
      "analysis": "Una lámpara de 800 lm / 8 W, ¿qué eficacia declarada tiene?",
      "result": "100 lm/W. Las condiciones reales y el resto de características también importan.",
      "caution": "No extraigas lámparas energizadas ni manipules portalámparas."
    }
  ],
  "glossary": [
    [
      "Amperio (A)",
      "Unidad de corriente eléctrica; equivale a un coulomb de carga por segundo."
    ],
    [
      "Amperio-hora (Ah)",
      "Unidad de carga eléctrica; no es lo mismo que amperio ni mide energía directamente."
    ],
    [
      "Aislante",
      "Material que dificulta el paso de la corriente en condiciones especificadas."
    ],
    [
      "Batería",
      "Conjunto de una o más celdas electroquímicas que almacenan energía."
    ],
    [
      "Caída de tensión",
      "Diferencia de potencial entre extremos de un elemento por el que pasa corriente."
    ],
    [
      "Capacitor",
      "Componente que almacena energía en un campo eléctrico."
    ],
    [
      "Carga eléctrica",
      "Propiedad física de la materia, medida en coulombs (C)."
    ],
    [
      "Circuito abierto",
      "Recorrido interrumpido en el que no circula corriente de lazo ideal."
    ],
    [
      "Circuito cerrado",
      "Recorrido completo de corriente a través de los elementos previstos."
    ],
    [
      "Cortocircuito",
      "Camino de impedancia muy baja no previsto; puede generar corrientes peligrosas."
    ],
    [
      "Corriente alterna (CA)",
      "Corriente cuyo sentido cambia periódicamente."
    ],
    [
      "Corriente continua (CC)",
      "Corriente con sentido de flujo sostenido; su magnitud puede variar."
    ],
    [
      "Corriente (I)",
      "Flujo de carga eléctrica por unidad de tiempo, medido en amperios."
    ],
    [
      "Diodo",
      "Componente semiconductor que conduce principalmente en un sentido."
    ],
    [
      "Disyuntor diferencial",
      "Protección que detecta desequilibrio de corrientes y puede desconectar un circuito."
    ],
    [
      "Eficacia luminosa",
      "Relación entre flujo luminoso y potencia, expresada en lm/W."
    ],
    [
      "Energía (Wh)",
      "Cantidad de energía equivalente al funcionamiento de 1 W durante 1 hora."
    ],
    [
      "Faradio (F)",
      "Unidad de capacitancia eléctrica."
    ],
    [
      "Frecuencia (Hz)",
      "Cantidad de ciclos por segundo."
    ],
    [
      "Interruptor",
      "Elemento que abre o cierra un circuito según su diseño."
    ],
    [
      "Kilowatt-hora (kWh)",
      "Unidad de energía; 1 kWh equivale a 1000 Wh."
    ],
    [
      "LED",
      "Diodo que emite luz; necesita limitación de corriente."
    ],
    [
      "Lumen (lm)",
      "Unidad de flujo luminoso."
    ],
    [
      "Multímetro",
      "Instrumento con funciones de medida como V, Ω y, según modelo, A."
    ],
    [
      "Ohmio (Ω)",
      "Unidad de resistencia eléctrica."
    ],
    [
      "Paralelo",
      "Conexión de ramas con extremos comunes y la misma tensión ideal."
    ],
    [
      "Pila",
      "Celda electroquímica que produce diferencia de potencial."
    ],
    [
      "Polaridad",
      "Identificación de terminales positivo y negativo en circuitos CC."
    ],
    [
      "Potencia (W)",
      "Rapidez de transferencia de energía, medida en watts."
    ],
    [
      "Resistencia (R)",
      "Oposición al paso de corriente; para resistor ideal R = V/I."
    ],
    [
      "Resistor",
      "Componente fabricado para ofrecer un valor especificado de resistencia."
    ],
    [
      "Serie",
      "Conexión de elementos por el mismo camino de corriente."
    ],
    [
      "Termomagnético",
      "Protección contra sobrecorriente con mecanismos térmico y magnético."
    ],
    [
      "Tierra de protección",
      "Conductor/circuito de seguridad destinado a protección; no es retorno normal de carga."
    ],
    [
      "Tensión (V)",
      "Diferencia de potencial eléctrico entre dos puntos."
    ],
    [
      "Voltio (V)",
      "Unidad de tensión eléctrica."
    ],
    [
      "Watt (W)",
      "Unidad de potencia; 1 watt = 1 joule por segundo."
    ]
  ]
};
