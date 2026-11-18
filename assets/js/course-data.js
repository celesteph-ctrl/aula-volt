// Contenido del curso: módulos, clases, cuestionarios y prácticas.
// Podés editar este archivo para agregar nuevas lecciones.
const COURSE = {
  "modules": [
    "Empezar de cero",
    "Entender circuitos",
    "Cálculos eléctricos",
    "Pilas y componentes",
    "Medición y seguridad",
    "Corriente alterna y hogar",
    "Resolver problemas reales",
    "Proyecto integrador"
  ],
  "lessons": [
    {
      "id": 1,
      "title": "¿Qué es la electricidad?",
      "module": 0,
      "minutes": 18,
      "intro": "Empezá por entender qué sucede dentro de un circuito.",
      "sections": [
        {
          "h": "Materia y carga",
          "p": "Los materiales están formados por átomos. La carga eléctrica es una propiedad de ciertas partículas. En algunos materiales, como el cobre, los electrones pueden moverse con facilidad."
        },
        {
          "h": "Fuente y recorrido",
          "p": "Una pila establece una diferencia de potencial. Para que circule corriente por una carga, tiene que existir un camino completo desde una terminal de la fuente hasta la otra."
        },
        {
          "h": "Energía, no magia",
          "p": "Una linterna transforma energía química de la pila en energía eléctrica y finalmente en luz y calor. La energía no aparece de la nada."
        }
      ],
      "solved": "Pensá en una linterna: pila → contactos → interruptor → lámpara o LED → regreso a la pila.",
      "challenge": "Dibujá los componentes de una linterna y marcá por dónde imaginás que circula la corriente.",
      "questions": [
        {
          "q": "En un circuito simple, ¿qué pasa al abrir el interruptor?",
          "options": [
            "Se corta el recorrido",
            "La corriente aumenta",
            "La pila deja de tener voltaje"
          ],
          "answer": 0,
          "why": "Abrir el interruptor interrumpe el camino conductor."
        },
        {
          "q": "¿Qué objeto suele aportar energía en una linterna?",
          "options": [
            "El interruptor",
            "La pila",
            "El vidrio"
          ],
          "answer": 1,
          "why": "La pila aporta la energía que el circuito convierte en luz y calor."
        },
        {
          "q": "¿Cuál suele ser buen conductor?",
          "options": [
            "Plástico seco",
            "Vidrio",
            "Cobre"
          ],
          "answer": 2,
          "why": "El cobre conduce muy bien; el plástico seco suele aislar."
        }
      ],
      "labs": [
        "observar-linterna",
        "ruta-papel"
      ]
    },
    {
      "id": 2,
      "title": "Tensión, corriente y resistencia",
      "module": 0,
      "minutes": 20,
      "intro": "Tres magnitudes distintas que vas a encontrar en todas las clases.",
      "sections": [
        {
          "h": "Tensión: voltios (V)",
          "p": "La tensión o voltaje es la diferencia de potencial entre dos puntos. Una pila AA nueva indica aproximadamente 1,5 V entre sus terminales."
        },
        {
          "h": "Corriente: amperios (A)",
          "p": "La corriente es carga que atraviesa una sección del circuito por unidad de tiempo. También se expresa en miliamperios: 1 A equivale a 1000 mA."
        },
        {
          "h": "Resistencia: ohmios (Ω)",
          "p": "La resistencia relaciona tensión y corriente para elementos óhmicos. Cuanto mayor es la resistencia de un resistor, menor es la corriente para la misma tensión."
        }
      ],
      "solved": "Si el circuito tiene 0,020 A, podés escribir lo mismo como 20 mA: 0,020 × 1000 = 20.",
      "challenge": "Anotá tres aparatos y buscá —sin abrirlos— si una etiqueta menciona V, A o W.",
      "questions": [
        {
          "q": "¿En qué unidad se expresa la tensión?",
          "options": [
            "Voltios",
            "Amperios",
            "Ohmios"
          ],
          "answer": 0,
          "why": "La unidad de tensión es el voltio (V)."
        },
        {
          "q": "0,1 A equivale a…",
          "options": [
            "1 mA",
            "100 mA",
            "1000 mA"
          ],
          "answer": 1,
          "why": "0,1 × 1000 = 100 mA."
        },
        {
          "q": "Si sube la resistencia y el voltaje es fijo, la corriente…",
          "options": [
            "Disminuye",
            "Sube",
            "Se mantiene siempre"
          ],
          "answer": 0,
          "why": "Para un resistor ideal, I = V / R."
        }
      ],
      "labs": [
        "etiquetas-casa",
        "unidades-cuaderno"
      ]
    },
    {
      "id": 3,
      "title": "La ley de Ohm",
      "module": 0,
      "minutes": 25,
      "intro": "Aprendé a relacionar tensión, corriente y resistencia.",
      "sections": [
        {
          "h": "Una relación útil",
          "p": "En un resistor ideal, I = V / R. También podés despejar V = I × R y R = V / I."
        },
        {
          "h": "Importa la unidad",
          "p": "Si usás voltios y ohmios, la corriente sale en amperios. Para pasar a mA, multiplicás por 1000."
        },
        {
          "h": "Límites de la fórmula",
          "p": "La ley de Ohm describe resistores óhmicos. Un LED, un motor o una batería real no se comportan como resistores constantes."
        }
      ],
      "solved": "Con 6 V y 300 Ω: I = 6/300 = 0,02 A = 20 mA. Para ese resistor, P = 6 × 0,02 = 0,12 W.",
      "challenge": "Entrá en el simulador de Ohm: fijá 6 V y probá 300 Ω y 600 Ω. Anotá qué pasa.",
      "questions": [
        {
          "q": "6 V / 300 Ω es…",
          "options": [
            "20 mA",
            "2 A",
            "300 mA"
          ],
          "answer": 0,
          "why": "6/300 = 0,02 A = 20 mA."
        },
        {
          "q": "Al duplicar la resistencia con voltaje fijo, la corriente…",
          "options": [
            "Se duplica",
            "Se reduce a la mitad",
            "No cambia"
          ],
          "answer": 1,
          "why": "I es inversamente proporcional a R."
        },
        {
          "q": "¿Qué expresión es correcta?",
          "options": [
            "I = R / V",
            "V = I × R",
            "R = I × V"
          ],
          "answer": 1,
          "why": "La ley de Ohm puede escribirse V = I × R."
        }
      ],
      "labs": [
        "ohm-papel"
      ]
    },
    {
      "id": 4,
      "title": "Circuito abierto y cerrado",
      "module": 1,
      "minutes": 16,
      "intro": "El recorrido importa tanto como los componentes.",
      "sections": [
        {
          "h": "Circuito cerrado",
          "p": "El camino permite circulación de corriente a través de la carga. En una linterna encendida el circuito está cerrado."
        },
        {
          "h": "Circuito abierto",
          "p": "Un interruptor abierto deja una interrupción que impide la corriente en esa rama."
        },
        {
          "h": "Cortocircuito",
          "p": "Un camino de muy baja resistencia que evita la carga puede producir corriente peligrosa. Nunca conectes directamente los polos de una pila con un cable o metal."
        }
      ],
      "solved": "Si un foco está en serie con un interruptor, abrirlo apaga el foco porque ya no hay recorrido completo.",
      "challenge": "Dibujá dos versiones de un circuito de pila, interruptor y lámpara: una abierta y otra cerrada.",
      "questions": [
        {
          "q": "¿Cuál es la condición para que circule corriente en el circuito simple?",
          "options": [
            "Un recorrido cerrado",
            "Un cable muy largo",
            "Dos interruptores"
          ],
          "answer": 0,
          "why": "El recorrido conductor debe estar cerrado."
        },
        {
          "q": "¿Qué hace un interruptor abierto?",
          "options": [
            "Aumenta la pila",
            "Interrumpe el circuito",
            "Une ambos polos de la pila"
          ],
          "answer": 1,
          "why": "Abre el camino y corta la corriente."
        },
        {
          "q": "¿Qué NO es una prueba segura?",
          "options": [
            "Dibujar el circuito",
            "Simularlo",
            "Unir los polos de una pila con un clip"
          ],
          "answer": 2,
          "why": "Unir directamente los polos genera un cortocircuito."
        }
      ],
      "labs": [
        "ruta-papel",
        "interruptor-led"
      ]
    },
    {
      "id": 5,
      "title": "Símbolos de un esquema",
      "module": 1,
      "minutes": 18,
      "intro": "Aprendé a leer dibujos eléctricos sin confundirlos con fotos.",
      "sections": [
        {
          "h": "El esquema no es una foto",
          "p": "En un diagrama usamos símbolos para mostrar conexiones y funciones. La posición gráfica no indica dónde está físicamente cada elemento."
        },
        {
          "h": "Elementos frecuentes",
          "p": "Una fuente de corriente continua se representa con líneas de distinto largo; una resistencia con un rectángulo o zigzag; y el interruptor con contactos."
        },
        {
          "h": "Seguir el camino",
          "p": "Para entender un circuito, elegí un punto y seguí cada conductor hasta regresar a la fuente; distinguí las ramas."
        }
      ],
      "solved": "Una batería conectada a un resistor y un interruptor en el mismo camino forma un circuito serie, aunque los símbolos estén separados en el dibujo.",
      "challenge": "En papel, inventá una leyenda para pila, resistencia, LED e interruptor.",
      "questions": [
        {
          "q": "¿Para qué sirve un diagrama eléctrico?",
          "options": [
            "Para mostrar conexiones",
            "Para medir temperatura",
            "Para dar la escala de un aparato"
          ],
          "answer": 0,
          "why": "El esquema muestra cómo se conectan los elementos."
        },
        {
          "q": "¿El dibujo muestra siempre la posición física real?",
          "options": [
            "Sí",
            "No",
            "Solo si es de CC"
          ],
          "answer": 1,
          "why": "Un esquema prioriza conexiones y funciones."
        },
        {
          "q": "¿Qué conviene seguir al interpretar un circuito?",
          "options": [
            "Solo los colores",
            "El camino de los conductores",
            "El precio de las piezas"
          ],
          "answer": 1,
          "why": "Las conexiones determinan el comportamiento."
        }
      ],
      "labs": [
        "ruta-papel"
      ]
    },
    {
      "id": 6,
      "title": "Conductores y aislantes",
      "module": 1,
      "minutes": 18,
      "intro": "Entendé por qué elegimos materiales diferentes.",
      "sections": [
        {
          "h": "Conductores",
          "p": "Metales como cobre y aluminio conducen por su gran movilidad de carga. No todos conducen igual."
        },
        {
          "h": "Aislantes",
          "p": "Plásticos, cerámicas y vidrio pueden ser aislantes en condiciones adecuadas. No hay aislante perfecto: humedad, tensión y daño cambian el riesgo."
        },
        {
          "h": "Probá sin peligro",
          "p": "Usando solo un circuito educativo de pilas con resistencia limitadora podés comprobar si un objeto metálico cierra el circuito, sin usar jamás un tomacorriente."
        }
      ],
      "solved": "Un cable comercial usa un conductor metálico adentro y un recubrimiento aislante por fuera: cumplen funciones diferentes.",
      "challenge": "Hacé una tabla con diez objetos: marcá cuáles esperás que sean conductores y cuáles aislantes. No uses la red eléctrica para probarlos.",
      "questions": [
        {
          "q": "El cobre se usa en cables principalmente porque…",
          "options": [
            "Es buen conductor",
            "Es transparente",
            "Es muy aislante"
          ],
          "answer": 0,
          "why": "El cobre tiene buena conductividad."
        },
        {
          "q": "Un aislante es seguro en cualquier tensión y condición?",
          "options": [
            "Sí",
            "No",
            "Solo si es azul"
          ],
          "answer": 1,
          "why": "Ningún material garantiza seguridad en cualquier condición."
        },
        {
          "q": "¿Con qué fuente harías un ensayo didáctico autorizado?",
          "options": [
            "Red doméstica",
            "Pilas con circuito limitado",
            "Cable de alargue"
          ],
          "answer": 1,
          "why": "Solo muy baja tensión de pilas con corriente limitada."
        }
      ],
      "labs": [
        "tabla-materiales",
        "probador-materiales"
      ]
    },
    {
      "id": 7,
      "title": "Resistencias en serie",
      "module": 1,
      "minutes": 22,
      "intro": "Descubrí cómo se suman las resistencias.",
      "sections": [
        {
          "h": "Mismo camino",
          "p": "En serie no hay bifurcaciones: la corriente es la misma por todos los resistores."
        },
        {
          "h": "Equivalente",
          "p": "La resistencia equivalente de resistores en serie es Rtotal = R1 + R2 + ..."
        },
        {
          "h": "Caídas de tensión",
          "p": "La tensión de la fuente se reparte entre resistores; la suma de las caídas coincide con el total en el circuito ideal."
        }
      ],
      "solved": "Dos resistores de 100 Ω y 200 Ω en serie equivalen a 300 Ω; con 6 V circulan 6/300 = 0,02 A.",
      "challenge": "En el simulador Serie/Paralelo elegí 100 Ω y 200 Ω; calculá antes de mirar la respuesta.",
      "questions": [
        {
          "q": "100 Ω + 200 Ω en serie equivalen a…",
          "options": [
            "50 Ω",
            "300 Ω",
            "20000 Ω"
          ],
          "answer": 1,
          "why": "Las resistencias en serie se suman."
        },
        {
          "q": "En una rama única, la corriente en cada resistencia es…",
          "options": [
            "La misma",
            "Siempre cero",
            "Distinta por definición"
          ],
          "answer": 0,
          "why": "En serie circula la misma corriente."
        },
        {
          "q": "Si agregás otra resistencia en serie, R total…",
          "options": [
            "Baja",
            "Queda igual",
            "Aumenta"
          ],
          "answer": 2,
          "why": "Al sumarse resistencias positivas, la equivalente aumenta."
        }
      ],
      "labs": [
        "resistencias-papel"
      ]
    },
    {
      "id": 8,
      "title": "Resistencias en paralelo",
      "module": 1,
      "minutes": 24,
      "intro": "Ahora hay dos o más caminos posibles.",
      "sections": [
        {
          "h": "Bifurcaciones",
          "p": "En paralelo, cada rama está conectada entre los mismos dos nodos; por eso tiene la misma tensión."
        },
        {
          "h": "Equivalente",
          "p": "Para dos resistencias ideales: 1/Rtotal = 1/R1 + 1/R2. Para dos iguales, el resultado es la mitad."
        },
        {
          "h": "La corriente se divide",
          "p": "La corriente total es la suma de las corrientes de rama, no una corriente idéntica en todas ellas."
        }
      ],
      "solved": "Dos resistores de 200 Ω en paralelo equivalen a 100 Ω. Con 6 V cada rama lleva 30 mA, y el total es 60 mA.",
      "challenge": "Compará en el simulador 200 Ω + 200 Ω primero en serie, luego en paralelo.",
      "questions": [
        {
          "q": "Dos resistores de 200 Ω en paralelo equivalen a…",
          "options": [
            "400 Ω",
            "100 Ω",
            "200 Ω"
          ],
          "answer": 1,
          "why": "Dos resistores iguales en paralelo equivalen a R/2."
        },
        {
          "q": "En paralelo la tensión de cada rama es…",
          "options": [
            "La misma",
            "Siempre distinta",
            "La mitad obligatoriamente"
          ],
          "answer": 0,
          "why": "Cada rama conecta los mismos nodos."
        },
        {
          "q": "La corriente total en paralelo es…",
          "options": [
            "La suma de las ramas",
            "La más pequeña",
            "Siempre cero"
          ],
          "answer": 0,
          "why": "La corriente se reparte y las ramas se suman."
        }
      ],
      "labs": [
        "resistencias-papel"
      ]
    },
    {
      "id": 9,
      "title": "Comprender el valor de una resistencia",
      "module": 2,
      "minutes": 22,
      "intro": "Reconocé los valores que aparecen en electrónica.",
      "sections": [
        {
          "h": "Ohmios y prefijos",
          "p": "1 kΩ = 1000 Ω. 2,2 kΩ = 2200 Ω. La coma decimal importa."
        },
        {
          "h": "Valor nominal y tolerancia",
          "p": "Los resistores comerciales tienen un valor nominal y una tolerancia, por ejemplo ±5 %. Una medida real puede variar."
        },
        {
          "h": "No es solo el número",
          "p": "Cada resistencia soporta cierta potencia máxima. Elegir solo los ohmios sin mirar la potencia puede ser inseguro."
        }
      ],
      "solved": "Un resistor de 1 kΩ con 5 V tiene I = 5/1000 = 0,005 A = 5 mA, y disipa P = 5 × 0,005 = 0,025 W.",
      "challenge": "Convertí: 330 Ω a kΩ, 4,7 kΩ a Ω y 0,5 A a mA.",
      "questions": [
        {
          "q": "1 kΩ son…",
          "options": [
            "100 Ω",
            "1000 Ω",
            "10000 Ω"
          ],
          "answer": 1,
          "why": "El prefijo kilo significa mil."
        },
        {
          "q": "4,7 kΩ equivale a…",
          "options": [
            "470 Ω",
            "4700 Ω",
            "47 Ω"
          ],
          "answer": 1,
          "why": "4,7 × 1000 = 4700 Ω."
        },
        {
          "q": "Además del valor en Ω, importa…",
          "options": [
            "La potencia soportada",
            "El color de la mesa",
            "El largo del dibujo"
          ],
          "answer": 0,
          "why": "La disipación de potencia limita el uso."
        }
      ],
      "labs": [
        "resistor-multimetro"
      ]
    },
    {
      "id": 10,
      "title": "Potencia: watts",
      "module": 2,
      "minutes": 23,
      "intro": "¿Qué tan rápido se transfiere energía?",
      "sections": [
        {
          "h": "Definición",
          "p": "La potencia es la energía por unidad de tiempo. Se mide en watts (W)."
        },
        {
          "h": "Fórmulas",
          "p": "P = V × I. Para un resistor ideal: P = I² × R y P = V² / R."
        },
        {
          "h": "Interpretar etiquetas",
          "p": "Una etiqueta de 10 W indica una potencia nominal bajo determinadas condiciones; no dice directamente cuánto tiempo funcionará."
        }
      ],
      "solved": "Un artefacto que opera a 12 V y toma 0,5 A consume 12 × 0,5 = 6 W.",
      "challenge": "Buscá dos etiquetas en aparatos sin abrirlos. Compará las potencias declaradas.",
      "questions": [
        {
          "q": "La potencia se mide en…",
          "options": [
            "Amperios",
            "Watts",
            "Ohmios"
          ],
          "answer": 1,
          "why": "La unidad de potencia es el watt."
        },
        {
          "q": "12 V × 0,5 A son…",
          "options": [
            "6 W",
            "24 W",
            "0,04 W"
          ],
          "answer": 0,
          "why": "P = 12 × 0,5 = 6 W."
        },
        {
          "q": "¿Potencia y energía son lo mismo?",
          "options": [
            "Sí",
            "No",
            "Solo con pilas"
          ],
          "answer": 1,
          "why": "La energía considera además el tiempo."
        }
      ],
      "labs": [
        "etiquetas-casa"
      ]
    },
    {
      "id": 11,
      "title": "Energía: Wh y kWh",
      "module": 2,
      "minutes": 22,
      "intro": "Entendé cómo se acumula el consumo.",
      "sections": [
        {
          "h": "Potencia por tiempo",
          "p": "Energía = potencia × tiempo. 1 Wh equivale a 1 W durante una hora."
        },
        {
          "h": "Kilowatt-hora",
          "p": "1 kWh = 1000 Wh. Es una unidad de energía, no de potencia."
        },
        {
          "h": "Aplicación",
          "p": "Un aparato de 100 W encendido cinco horas consume 500 Wh, o 0,5 kWh. El consumo real depende del funcionamiento."
        }
      ],
      "solved": "Una lámpara de 10 W durante 3 h: 10 × 3 = 30 Wh = 0,03 kWh.",
      "challenge": "En el simulador de consumo compará una lámpara de 10 W con una de 60 W durante 4 horas.",
      "questions": [
        {
          "q": "Un aparato de 100 W durante 2 h consume…",
          "options": [
            "200 Wh",
            "100 W",
            "50 Wh"
          ],
          "answer": 0,
          "why": "100 × 2 = 200 Wh."
        },
        {
          "q": "1000 Wh equivalen a…",
          "options": [
            "1 kWh",
            "100 kWh",
            "0,01 kWh"
          ],
          "answer": 0,
          "why": "Kilo significa mil."
        },
        {
          "q": "El kWh mide…",
          "options": [
            "Tensión",
            "Energía",
            "Resistencia"
          ],
          "answer": 1,
          "why": "El kWh es una unidad de energía."
        }
      ],
      "labs": [
        "consumo-casa",
        "factura-observar"
      ]
    },
    {
      "id": 12,
      "title": "Calor, eficiencia y límites",
      "module": 2,
      "minutes": 20,
      "intro": "La electricidad también produce calor.",
      "sections": [
        {
          "h": "Calor resistivo",
          "p": "Al circular corriente por un resistor se disipa energía en forma de calor. La potencia ideal es P = I²R."
        },
        {
          "h": "Eficiencia",
          "p": "Un dispositivo convierte energía de entrada en formas útiles y no útiles; hay pérdidas en calor, ruido u otras formas."
        },
        {
          "h": "Seguridad",
          "p": "Los componentes y cables tienen límites térmicos. No experimentes con enchufes, cables de red ni resistencias calentándolas intencionalmente."
        }
      ],
      "solved": "Con 0,1 A por un resistor de 100 Ω, P = (0,1)² × 100 = 1 W: podría calentar un resistor pequeño.",
      "challenge": "En papel calculá qué sucede con P si duplicás I manteniendo R fija.",
      "questions": [
        {
          "q": "Con I fija, al subir R la potencia I²R…",
          "options": [
            "Sube",
            "Baja siempre",
            "Es cero"
          ],
          "answer": 0,
          "why": "P = I²R para un resistor."
        },
        {
          "q": "Al duplicar I y mantener R, la potencia se multiplica por…",
          "options": [
            "2",
            "4",
            "8"
          ],
          "answer": 1,
          "why": "(2I)² = 4I²."
        },
        {
          "q": "¿Es seguro calentar resistencias adrede en casa?",
          "options": [
            "Sí",
            "No",
            "Solo tocándolas"
          ],
          "answer": 1,
          "why": "No es una práctica adecuada para principiantes."
        }
      ],
      "labs": [
        "calor-papel"
      ]
    },
    {
      "id": 13,
      "title": "Pilas y baterías",
      "module": 3,
      "minutes": 20,
      "intro": "Fuentes de corriente continua que ya conocés.",
      "sections": [
        {
          "h": "Terminales",
          "p": "Una pila tiene polos positivo (+) y negativo (−). La tensión indicada es aproximada y depende del estado y la carga."
        },
        {
          "h": "Serie de pilas",
          "p": "Dos pilas AA de 1,5 V en un portapilas preparado para serie entregan unos 3 V; tres, unos 4,5 V."
        },
        {
          "h": "Nunca cortocircuitar",
          "p": "No unas terminales con clips o cables. No mezcles pilas usadas y nuevas, no cargues pilas no recargables ni uses celdas hinchadas o dañadas."
        }
      ],
      "solved": "Un portapilas para tres AA marca aproximadamente 4,5 V (3 × 1,5 V) sin carga; puede variar.",
      "challenge": "Observá una pila AA o la etiqueta de una linterna y escribí su tensión nominal.",
      "questions": [
        {
          "q": "Dos AA de 1,5 V correctamente colocadas en serie suman…",
          "options": [
            "1,5 V",
            "3 V",
            "0,75 V"
          ],
          "answer": 1,
          "why": "En serie las tensiones se suman."
        },
        {
          "q": "¿Qué NO debés hacer?",
          "options": [
            "Leer la etiqueta",
            "Guardar las pilas bien",
            "Unir los polos con metal"
          ],
          "answer": 2,
          "why": "Un cortocircuito puede provocar calentamiento o daños."
        },
        {
          "q": "Las pilas comunes aportan…",
          "options": [
            "Corriente continua",
            "Corriente alterna de red",
            "Frecuencia de red"
          ],
          "answer": 0,
          "why": "Las pilas suministran tensión continua."
        }
      ],
      "labs": [
        "pila-multimetro",
        "observar-linterna"
      ]
    },
    {
      "id": 14,
      "title": "Polaridad y diodos LED",
      "module": 3,
      "minutes": 25,
      "intro": "Hacé que un LED encienda sin dañarlo.",
      "sections": [
        {
          "h": "Un LED tiene sentido",
          "p": "Un LED permite principalmente el paso de corriente en una dirección. Para encenderlo, conectá ánodo al lado positivo a través de una resistencia y cátodo hacia negativo."
        },
        {
          "h": "Resistencia obligatoria",
          "p": "Un LED no es una resistencia ideal. Necesita limitación de corriente, por ejemplo 1 kΩ en serie para una fuente de tres pilas AA con portapilas."
        },
        {
          "h": "Ensayo educativo seguro",
          "p": "Usá solo portapilas con 3 AA, resistor de 1 kΩ (al menos ¼ W), un LED estándar y cables aislados. Si no tenés alguno de esos elementos, hacé el montaje en papel o simulador."
        }
      ],
      "solved": "Con 4,5 V, un LED rojo de caída aproximada 2 V y 1000 Ω, la corriente estimada es (4,5−2)/1000 ≈ 2,5 mA. No es una predicción exacta.",
      "challenge": "Explicá por qué NO conectarías un LED directamente a una pila sin una resistencia apropiada.",
      "questions": [
        {
          "q": "¿Qué elemento limita la corriente en el montaje LED educativo?",
          "options": [
            "La resistencia en serie",
            "El cartón",
            "El interruptor abierto siempre"
          ],
          "answer": 0,
          "why": "El resistor limita la corriente."
        },
        {
          "q": "Un LED común tiene…",
          "options": [
            "Polaridad",
            "Siempre dos estados aleatorios",
            "Funcionamiento idéntico en ambos sentidos"
          ],
          "answer": 0,
          "why": "Un LED es un diodo y tiene orientación."
        },
        {
          "q": "¿Qué fuente se permite en nuestra práctica?",
          "options": [
            "Tomacorriente",
            "Tres AA en portapilas",
            "Cable de una lámpara de 220 V"
          ],
          "answer": 1,
          "why": "Solo pila/baterías de baja tensión según las instrucciones."
        }
      ],
      "labs": [
        "led-seguro"
      ]
    },
    {
      "id": 15,
      "title": "Interruptores y contactos",
      "module": 3,
      "minutes": 20,
      "intro": "Controlá un circuito sin cambiar la fuente.",
      "sections": [
        {
          "h": "El interruptor",
          "p": "Un interruptor manual abre o cierra el circuito. No agrega energía."
        },
        {
          "h": "Serie con la carga",
          "p": "Colocarlo en serie con la carga permite cortar el único camino de corriente."
        },
        {
          "h": "Contactos reales",
          "p": "Los contactos pueden tener resistencias o fallas. Para ensayos con clips metálicos, solo usamos un pequeño circuito a pilas y jamás la red."
        }
      ],
      "solved": "Un circuito educativo de 3 AA, 1 kΩ y LED se apaga si se abre el interruptor en serie.",
      "challenge": "Dibujá una pila, resistor, LED e interruptor conectados en serie.",
      "questions": [
        {
          "q": "¿Qué hace un interruptor abierto?",
          "options": [
            "Cierra el circuito",
            "Interrumpe el camino",
            "Duplica el voltaje"
          ],
          "answer": 1,
          "why": "Abre el camino conductor."
        },
        {
          "q": "¿Dónde va el interruptor para controlar una sola rama simple?",
          "options": [
            "En serie",
            "Fuera del circuito",
            "Cortocircuitando la fuente"
          ],
          "answer": 0,
          "why": "En serie abre o cierra el recorrido."
        },
        {
          "q": "¿Puede un clip sustituir un interruptor de 220 V?",
          "options": [
            "Sí",
            "No",
            "Si es grande"
          ],
          "answer": 1,
          "why": "Solo se puede usar como contacto en prácticas muy baja tensión y limitadas."
        }
      ],
      "labs": [
        "interruptor-led"
      ]
    },
    {
      "id": 16,
      "title": "¿Qué hace un capacitor?",
      "module": 3,
      "minutes": 18,
      "intro": "Un primer encuentro con otro componente común.",
      "sections": [
        {
          "h": "Almacenamiento",
          "p": "Un capacitor almacena energía en un campo eléctrico. Se mide en faradios (F) y suele encontrarse en microfaradios (µF)."
        },
        {
          "h": "Carga y descarga",
          "p": "En circuitos simples puede cargarse y descargarse. Su comportamiento depende de la tensión, capacidad y conexiones."
        },
        {
          "h": "Advertencia",
          "p": "Algunos capacitores mantienen carga aun desenchufados. No abras fuentes de alimentación ni electrodomésticos para buscar capacitores."
        }
      ],
      "solved": "Un capacitor de 100 µF tiene mayor capacitancia que uno de 10 µF. Eso no autoriza a conectarlos a cualquier fuente.",
      "challenge": "Buscá una foto o un dibujo de un capacitor y anotá qué datos suelen estar impresos: capacidad y tensión nominal.",
      "questions": [
        {
          "q": "La capacitancia se mide en…",
          "options": [
            "Faradios",
            "Ohmios",
            "Amperios"
          ],
          "answer": 0,
          "why": "La unidad es el faradio."
        },
        {
          "q": "¿Pueden quedar capacitores cargados con un aparato desenchufado?",
          "options": [
            "Sí",
            "No",
            "Solo de día"
          ],
          "answer": 0,
          "why": "Algunos conservan carga peligrosa."
        },
        {
          "q": "¿Debés abrir una fuente para ver sus capacitores?",
          "options": [
            "Sí",
            "No",
            "Solo si no se ve luz"
          ],
          "answer": 1,
          "why": "No; puede ser peligroso incluso desconectada."
        }
      ],
      "labs": [
        "capacitor-papel"
      ]
    },
    {
      "id": 17,
      "title": "Multímetro: conocerlo primero",
      "module": 4,
      "minutes": 22,
      "intro": "Qué mide y cómo evitar errores.",
      "sections": [
        {
          "h": "Funciones comunes",
          "p": "Un multímetro puede medir tensión (V), resistencia (Ω) y otras magnitudes según el modelo. No todos tienen las mismas protecciones."
        },
        {
          "h": "Puntas y bornes",
          "p": "Para medir tensión de una pila, normalmente se usan COM (negro) y V/Ω (rojo), y selector de V continua; consultá siempre el manual del equipo."
        },
        {
          "h": "Riesgo por configuración",
          "p": "Nunca coloques el instrumento en modo A/mA para medir directamente entre polos de una batería; eso puede hacer un cortocircuito. No midas tomacorrientes ni tableros."
        }
      ],
      "solved": "Para una pila AA suelta, un multímetro en V continua puede mostrar un valor cercano a 1,5 V. Si aparece signo negativo, las puntas pueden estar invertidas.",
      "challenge": "Identificá en una foto o en tu instrumento apagado dónde figuran V, Ω, COM y V/Ω.",
      "questions": [
        {
          "q": "Para medir tensión de una AA, se selecciona…",
          "options": [
            "V continua",
            "A conectado a ambos polos",
            "Ω de red"
          ],
          "answer": 0,
          "why": "Se usa la función V DC según el manual."
        },
        {
          "q": "¿Qué conexión NO corresponde?",
          "options": [
            "COM y V/Ω para voltaje",
            "Puntas en modo corriente directamente sobre la pila",
            "V DC en pila suelta"
          ],
          "answer": 1,
          "why": "Podés cortocircuitar la pila o dañar el equipo."
        },
        {
          "q": "¿Es nuestro curso una autorización para medir un enchufe?",
          "options": [
            "No",
            "Sí",
            "Si dura un segundo"
          ],
          "answer": 0,
          "why": "Solo prácticas de muy baja tensión con pilas."
        }
      ],
      "labs": [
        "pila-multimetro"
      ]
    },
    {
      "id": 18,
      "title": "Medir tensión en pilas",
      "module": 4,
      "minutes": 24,
      "intro": "De la pantalla a una medición real simple.",
      "sections": [
        {
          "h": "Preparación",
          "p": "Leé el manual. Revisá las puntas, elegí V continua y conectá los cables a los bornes indicados para tensión."
        },
        {
          "h": "Medición educativa",
          "p": "Solo medí una pila AA o AAA suelta, en buen estado, con manos secas y superficie despejada. No hagas puentes entre polos."
        },
        {
          "h": "Interpretación",
          "p": "Una lectura algo inferior al valor nominal puede ser normal; la tensión sin carga no revela por sí sola toda la capacidad disponible."
        }
      ],
      "solved": "Si el instrumento indica −1,48 V, quizá invertiste las puntas: la magnitud es 1,48 V y el signo marca la polaridad.",
      "challenge": "Con multímetro disponible, medí una AA suelta siguiendo las precauciones. Sin multímetro, dibujá los bornes y el selector correctos.",
      "questions": [
        {
          "q": "Una lectura negativa en V DC suele indicar…",
          "options": [
            "Polaridad invertida entre puntas",
            "Un enchufe roto",
            "Una pila sin energía necesariamente"
          ],
          "answer": 0,
          "why": "El signo depende de cuál punta está en cada terminal."
        },
        {
          "q": "¿Qué fuente usamos para practicar?",
          "options": [
            "Una AA suelta",
            "Un tablero",
            "Un tomacorriente"
          ],
          "answer": 0,
          "why": "Limitamos la práctica a una pila suelta."
        },
        {
          "q": "¿El voltaje sin carga mide directamente la capacidad restante?",
          "options": [
            "Siempre",
            "No de forma suficiente",
            "Sí al 100 %"
          ],
          "answer": 1,
          "why": "No permite inferir con precisión la capacidad útil restante."
        }
      ],
      "labs": [
        "pila-multimetro"
      ]
    },
    {
      "id": 19,
      "title": "Medir resistencia y continuidad",
      "module": 4,
      "minutes": 23,
      "intro": "Una prueba útil con componentes desconectados.",
      "sections": [
        {
          "h": "Resistencia",
          "p": "En modo Ω, el instrumento aplica una señal interna pequeña. Solo se mide con el componente completamente desconectado de toda alimentación."
        },
        {
          "h": "Continuidad",
          "p": "El modo de continuidad suele emitir un sonido si hay una resistencia baja, dependiendo del modelo."
        },
        {
          "h": "Regla de oro",
          "p": "No uses funciones de Ω o continuidad sobre circuitos energizados. En el curso solo probamos resistores sueltos o cables sin fuente conectada."
        }
      ],
      "solved": "Un resistor suelto de 1 kΩ puede medir alrededor de 1000 Ω, dentro de su tolerancia.",
      "challenge": "Si tenés multímetro y una resistencia suelta, medí su valor sin ninguna fuente conectada.",
      "questions": [
        {
          "q": "¿Medís resistencia en un circuito energizado?",
          "options": [
            "Sí",
            "No",
            "Solo de noche"
          ],
          "answer": 1,
          "why": "El modo Ω no se usa en circuitos energizados."
        },
        {
          "q": "1 kΩ equivale a…",
          "options": [
            "1000 Ω",
            "100 Ω",
            "10 Ω"
          ],
          "answer": 0,
          "why": "kilo representa mil."
        },
        {
          "q": "El modo continuidad puede…",
          "options": [
            "Indicar baja resistencia",
            "Medir siempre watts",
            "Reemplazar un profesional"
          ],
          "answer": 0,
          "why": "Sirve para comprobar conexiones, según el modelo."
        }
      ],
      "labs": [
        "resistor-multimetro"
      ]
    },
    {
      "id": 20,
      "title": "Errores frecuentes de medición",
      "module": 4,
      "minutes": 18,
      "intro": "Aprendé a reconocer trampas habituales.",
      "sections": [
        {
          "h": "Modo equivocado",
          "p": "Confundir V DC, V AC, Ω y A puede causar resultados inútiles o situaciones peligrosas."
        },
        {
          "h": "Conexión incorrecta",
          "p": "Medir tensión requiere conexión entre dos puntos y la posición de puntas indicada en el manual. Medir corriente requiere otra conexión y conocimientos adicionales; no lo practicamos."
        },
        {
          "h": "Sobreconfianza",
          "p": "Un indicador de cero o una pantalla apagada no certifican una instalación segura. Para trabajos en red se requieren procedimientos, equipos y personal competente."
        }
      ],
      "solved": "Una pila puede mostrar un signo negativo sin estar dañada: puede deberse a polaridad invertida de las puntas.",
      "challenge": "Escribí una lista de cinco cosas que comprobarías ANTES de medir una pila AA.",
      "questions": [
        {
          "q": "Para una pila AA, la función correcta es…",
          "options": [
            "V DC",
            "Modo A con puntas en ambos polos",
            "V AC en un enchufe"
          ],
          "answer": 0,
          "why": "V de corriente continua para esa medición."
        },
        {
          "q": "La lectura 0 V en la red significa que podés tocar un cable?",
          "options": [
            "Sí",
            "No",
            "Depende del color del cable"
          ],
          "answer": 1,
          "why": "Una lectura no valida un procedimiento seguro."
        },
        {
          "q": "¿Qué tiene prioridad?",
          "options": [
            "Medir rápido",
            "Leer el manual y verificar configuración",
            "Probar con enchufes"
          ],
          "answer": 1,
          "why": "La revisión previa es esencial."
        }
      ],
      "labs": [
        "checklist-multimetro"
      ]
    },
    {
      "id": 21,
      "title": "Corriente continua y alterna",
      "module": 5,
      "minutes": 21,
      "intro": "Dos formas de comportamiento que conviene diferenciar.",
      "sections": [
        {
          "h": "Corriente continua (CC)",
          "p": "En un circuito sencillo a pilas, la corriente mantiene su dirección mientras las condiciones no cambien."
        },
        {
          "h": "Corriente alterna (CA)",
          "p": "La tensión y corriente alternas cambian de signo periódicamente. La distribución domiciliaria utiliza CA."
        },
        {
          "h": "Frecuencia",
          "p": "La frecuencia se mide en hertz (Hz). En Argentina la frecuencia nominal de la red es 50 Hz, pero no mediremos esa red en este curso."
        }
      ],
      "solved": "Una linterna a pilas suele usar CC. Una heladera conectada a la red recibe CA, aunque parte de su electrónica funcione internamente con CC.",
      "challenge": "Clasificá: pila AA, cargador USB en su salida, tomacorriente doméstico (solo teórico), panel solar.",
      "questions": [
        {
          "q": "Una pila AA proporciona…",
          "options": [
            "CC",
            "CA de 50 Hz",
            "CA de 100 Hz"
          ],
          "answer": 0,
          "why": "La pila entrega corriente continua."
        },
        {
          "q": "La frecuencia se mide en…",
          "options": [
            "Hz",
            "W",
            "Ω"
          ],
          "answer": 0,
          "why": "Hz significa ciclos por segundo."
        },
        {
          "q": "¿Practicaremos midiendo tensión en tomacorrientes?",
          "options": [
            "Sí",
            "No",
            "Solo si hay alguien mirando"
          ],
          "answer": 1,
          "why": "No: ninguna práctica con red domiciliaria."
        }
      ],
      "labs": [
        "clasificar-fuentes"
      ]
    },
    {
      "id": 22,
      "title": "Cómo llega la energía a una casa",
      "module": 5,
      "minutes": 19,
      "intro": "Un mapa conceptual, no un instructivo de instalación.",
      "sections": [
        {
          "h": "Generación y distribución",
          "p": "La electricidad se genera, transporta y distribuye mediante sistemas diseñados para distintas tensiones y capacidades."
        },
        {
          "h": "La instalación de vivienda",
          "p": "Una instalación doméstica incluye conductores, protecciones, puntos de consumo y conexión a tierra, bajo normas locales."
        },
        {
          "h": "Límite profesional",
          "p": "Conocer los nombres de esos elementos no habilita a abrir tableros, reparar cableados ni manipular protecciones."
        }
      ],
      "solved": "Esquema conceptual: generación → transporte → distribución → protección domiciliaria → consumo.",
      "challenge": "Dibujá la cadena desde la generación hasta una lámpara sin dibujar ni tocar cables reales.",
      "questions": [
        {
          "q": "La red domiciliaria puede presentar peligro grave?",
          "options": [
            "Sí",
            "No",
            "Solo cuando llueve"
          ],
          "answer": 0,
          "why": "La tensión de red puede causar lesiones graves o muerte."
        },
        {
          "q": "Comprender un esquema habilita a hacer una instalación?",
          "options": [
            "Sí",
            "No",
            "Si se entiende el vocabulario"
          ],
          "answer": 1,
          "why": "La práctica profesional requiere formación y habilitaciones aplicables."
        },
        {
          "q": "¿Qué protege una instalación bien diseñada?",
          "options": [
            "Personas y circuitos",
            "Solo el color de la pared",
            "El precio de la energía"
          ],
          "answer": 0,
          "why": "Las protecciones cumplen funciones de seguridad específicas."
        }
      ],
      "labs": [
        "mapa-energia"
      ]
    },
    {
      "id": 23,
      "title": "Fase, neutro y tierra: conceptos",
      "module": 5,
      "minutes": 20,
      "intro": "Aprendé vocabulario sin tocar una instalación.",
      "sections": [
        {
          "h": "Conductor activo",
          "p": "En sistemas de distribución hay conductores activos que pueden estar a tensión peligrosa respecto de tierra y otros puntos."
        },
        {
          "h": "Neutro",
          "p": "El neutro cumple una función específica de retorno y referencia en muchos sistemas. Nunca lo supongas seguro al tacto."
        },
        {
          "h": "Conductor de protección",
          "p": "La puesta a tierra de protección está diseñada para ayudar a reducir riesgos por fallas, junto con otras medidas. No reemplaza protecciones ni mantenimiento."
        }
      ],
      "solved": "En un esquema de una vivienda distinguí función de circuito y función de protección; no intentes identificar conductores por colores en una instalación real.",
      "challenge": "Escribí una frase sobre por qué nunca se debe asumir que el neutro es seguro.",
      "questions": [
        {
          "q": "¿El neutro se puede considerar siempre seguro para tocar?",
          "options": [
            "Sí",
            "No",
            "Solo si es azul"
          ],
          "answer": 1,
          "why": "Nunca puede asumirse seguro al tacto."
        },
        {
          "q": "La tierra de protección sirve para…",
          "options": [
            "Ayudar a reducir riesgo en fallas",
            "Conectar una pila",
            "Aumentar los watts"
          ],
          "answer": 0,
          "why": "Forma parte de la protección frente a ciertas fallas."
        },
        {
          "q": "¿Se debe identificar un cable real solo por su color?",
          "options": [
            "Sí",
            "No",
            "Siempre"
          ],
          "answer": 1,
          "why": "El color no reemplaza verificación por personal competente."
        }
      ],
      "labs": [
        "mapa-energia"
      ]
    },
    {
      "id": 24,
      "title": "Protecciones y prevención",
      "module": 5,
      "minutes": 25,
      "intro": "Reconocé las funciones generales de seguridad.",
      "sections": [
        {
          "h": "Interruptor termomagnético",
          "p": "Está destinado a proteger conductores y circuitos ante sobrecorriente, según su diseño y coordinación."
        },
        {
          "h": "Interruptor diferencial",
          "p": "Está diseñado para detectar diferencias de corriente y desconectar ante determinadas fugas. No protege frente a todas las situaciones."
        },
        {
          "h": "Prevención primero",
          "p": "No sobrecargues prolongadores, no uses cables dañados, mantené electricidad lejos del agua y contactá personal habilitado para anomalías."
        }
      ],
      "solved": "Un disyuntor diferencial y una térmica protegen frente a fenómenos distintos; ninguno hace seguro tocar conductores energizados.",
      "challenge": "Observá desde fuera —sin abrir ni accionar un tablero— qué elementos de seguridad conocés. Si ves algo dañado, avisá a un profesional.",
      "questions": [
        {
          "q": "La termomagnética protege principalmente contra…",
          "options": [
            "Sobrecorriente",
            "Solo humedad",
            "Tensión 0 V"
          ],
          "answer": 0,
          "why": "Actúa según la corriente y sus características."
        },
        {
          "q": "El diferencial detecta…",
          "options": [
            "Ciertas corrientes residuales",
            "Temperatura ambiental",
            "El uso del celular"
          ],
          "answer": 0,
          "why": "Compara corrientes para detectar desequilibrios."
        },
        {
          "q": "¿Un diferencial hace seguro tocar cables bajo tensión?",
          "options": [
            "Sí",
            "No",
            "Si es nuevo"
          ],
          "answer": 1,
          "why": "No elimina todos los peligros."
        }
      ],
      "labs": [
        "seguridad-casa"
      ]
    },
    {
      "id": 25,
      "title": "Pensar un circuito antes de montarlo",
      "module": 6,
      "minutes": 20,
      "intro": "El buen hábito de dibujar, calcular y recién después evaluar.",
      "sections": [
        {
          "h": "Definí el objetivo",
          "p": "¿Querés luz, una indicación o una medición? Elegí primero qué debería ocurrir."
        },
        {
          "h": "Identificá componentes",
          "p": "Detallá fuente, carga, interruptor y limitación de corriente. No uses componentes sin conocer sus características."
        },
        {
          "h": "Predicción y revisión",
          "p": "Antes de conectar nada, calculá tensiones y corrientes estimadas y verificá polaridad, límites y ausencia de cortocircuitos."
        }
      ],
      "solved": "Proyecto LED: portapilas 3 AA (4,5 V aproximados), resistor de 1 kΩ, LED rojo estándar. Corriente estimada ~2,5 mA.",
      "challenge": "Armá en papel tu lista de materiales y señalá dónde estaría el resistor en serie con el LED.",
      "questions": [
        {
          "q": "¿Qué se hace primero?",
          "options": [
            "Dibujar y calcular",
            "Conectar al enchufe",
            "Improvisar"
          ],
          "answer": 0,
          "why": "Planificar reduce errores."
        },
        {
          "q": "El LED educativo necesita…",
          "options": [
            "Un resistor en serie",
            "Red de 220 V",
            "Un capacitor grande"
          ],
          "answer": 0,
          "why": "El resistor limita la corriente."
        },
        {
          "q": "¿Es conveniente conectar una fuente sin verificar polaridad y valores?",
          "options": [
            "Sí",
            "No",
            "Si el cable es corto"
          ],
          "answer": 1,
          "why": "Siempre revisá el montaje antes de energizar con pilas."
        }
      ],
      "labs": [
        "led-seguro",
        "ruta-papel"
      ]
    },
    {
      "id": 26,
      "title": "Caída de tensión en serie",
      "module": 6,
      "minutes": 23,
      "intro": "La misma corriente produce distintas caídas de tensión.",
      "sections": [
        {
          "h": "Suma de caídas",
          "p": "En un circuito serie ideal, la suma de tensiones de los elementos equivale a la tensión de la fuente."
        },
        {
          "h": "Ejemplo",
          "p": "Con 6 V y resistencias de 100 Ω y 200 Ω, I = 6/300 = 0,02 A. Las caídas son 2 V y 4 V."
        },
        {
          "h": "Cuidado con el divisor",
          "p": "Esta regla vale para resistores; conectar una carga extra a un punto intermedio puede cambiar el resultado."
        }
      ],
      "solved": "100 Ω × 0,02 A = 2 V y 200 Ω × 0,02 A = 4 V; 2 + 4 = 6 V.",
      "challenge": "Calculá caídas con 9 V y resistores de 100 Ω y 200 Ω sin usar fuentes físicas.",
      "questions": [
        {
          "q": "Dos resistores en serie suman caídas iguales a…",
          "options": [
            "La tensión total",
            "El doble siempre",
            "Cero"
          ],
          "answer": 0,
          "why": "Las caídas suman la tensión de la fuente."
        },
        {
          "q": "Con 6 V, 100 y 200 Ω, la caída en 200 Ω es…",
          "options": [
            "2 V",
            "4 V",
            "6 V"
          ],
          "answer": 1,
          "why": "I=0,02 A y V=0,02×200=4 V."
        },
        {
          "q": "¿La corriente en ambos resistores en serie es…",
          "options": [
            "La misma",
            "Siempre distinta",
            "Infinita"
          ],
          "answer": 0,
          "why": "Serie es un camino único."
        }
      ],
      "labs": [
        "resistencias-papel"
      ]
    },
    {
      "id": 27,
      "title": "Comparar tecnologías de iluminación",
      "module": 6,
      "minutes": 19,
      "intro": "Usá ejemplos reales para ejercitar potencia y energía.",
      "sections": [
        {
          "h": "Brillo versus consumo",
          "p": "El flujo luminoso se expresa en lúmenes (lm). Los watts indican potencia eléctrica, no directamente el brillo."
        },
        {
          "h": "Eficiencia",
          "p": "Dos lámparas con lúmenes similares pueden tener potencias muy distintas."
        },
        {
          "h": "Etiquetas",
          "p": "Compará lm, W, tensión nominal y tipo de lámpara en envases o etiquetas; no cambies lámparas ni manipules portalámparas para hacer el ejercicio."
        }
      ],
      "solved": "Si una lámpara consume 8 W y otra 60 W durante 5 h, las energías serán 40 Wh y 300 Wh.",
      "challenge": "Buscá en una caja de lámpara o etiqueta accesible lm y W, y anotá ambos valores.",
      "questions": [
        {
          "q": "Los lúmenes indican…",
          "options": [
            "Flujo luminoso",
            "Resistencia",
            "Tensión"
          ],
          "answer": 0,
          "why": "Los lúmenes miden flujo luminoso."
        },
        {
          "q": "Los watts indican…",
          "options": [
            "Potencia eléctrica",
            "Color de la luz",
            "Cantidad de horas"
          ],
          "answer": 0,
          "why": "La unidad de potencia es el watt."
        },
        {
          "q": "¿Dos lámparas de iguales lúmenes consumen siempre igual?",
          "options": [
            "Sí",
            "No",
            "Solo en invierno"
          ],
          "answer": 1,
          "why": "Depende de la eficiencia y tecnología."
        }
      ],
      "labs": [
        "etiquetas-casa",
        "comparar-lamparas"
      ]
    },
    {
      "id": 28,
      "title": "Leer una etiqueta de equipo",
      "module": 6,
      "minutes": 21,
      "intro": "Interpretá aparatos de tu casa sin intervenirlos.",
      "sections": [
        {
          "h": "Tensión nominal",
          "p": "Podés ver datos como 5 V DC, 12 V DC o 220–240 V AC. La tensión debe corresponder a la alimentación del equipo."
        },
        {
          "h": "Corriente y potencia",
          "p": "Si conocés V e I, podés estimar P = V × I en condiciones nominales, especialmente para CC simple."
        },
        {
          "h": "Entrada y salida",
          "p": "En cargadores hay datos de entrada de red y salida de muy baja tensión. Leerlos no implica que debas abrir o modificar el cargador."
        }
      ],
      "solved": "Salida de cargador: 5 V y 2 A indica hasta unos 10 W en ese modo; no significa consumo constante de 10 W.",
      "challenge": "Fotografiá o copiá los datos visibles de un cargador desenchufado; señalá entrada y salida sin conectarlo ni abrirlo.",
      "questions": [
        {
          "q": "5 V × 2 A da…",
          "options": [
            "10 W",
            "2,5 W",
            "0,4 W"
          ],
          "answer": 0,
          "why": "P = V × I."
        },
        {
          "q": "¿La potencia máxima indicada se consume siempre?",
          "options": [
            "Sí",
            "No",
            "Solo con cable largo"
          ],
          "answer": 1,
          "why": "La potencia real varía con la carga."
        },
        {
          "q": "Para leer una etiqueta, ¿debés abrir el equipo?",
          "options": [
            "Sí",
            "No",
            "Solo si es pequeño"
          ],
          "answer": 1,
          "why": "No; observá los datos exteriores accesibles."
        }
      ],
      "labs": [
        "etiquetas-casa"
      ]
    },
    {
      "id": 29,
      "title": "Planificá el consumo de un día",
      "module": 6,
      "minutes": 24,
      "intro": "Aplicá todo en una tabla fácil.",
      "sections": [
        {
          "h": "Hacé un inventario",
          "p": "Anotá equipos, potencia declarada y horas estimadas de funcionamiento diario."
        },
        {
          "h": "Calculá",
          "p": "Wh/día = W × horas/día; pasá a kWh dividiendo por 1000. Sumá equipos."
        },
        {
          "h": "Reconocé la incertidumbre",
          "p": "Heladeras y otros aparatos tienen ciclos de funcionamiento; los cálculos con potencia de etiqueta son estimaciones."
        }
      ],
      "solved": "Notebook de 45 W durante 4 h: 180 Wh = 0,18 kWh estimados.",
      "challenge": "Elegí 3 equipos y armá tu tabla. Después verificá con el simulador de consumo.",
      "questions": [
        {
          "q": "45 W × 4 h =…",
          "options": [
            "180 Wh",
            "11,25 Wh",
            "45 kWh"
          ],
          "answer": 0,
          "why": "45 × 4 = 180 Wh."
        },
        {
          "q": "180 Wh son…",
          "options": [
            "0,18 kWh",
            "18 kWh",
            "180 kWh"
          ],
          "answer": 0,
          "why": "Se divide entre 1000."
        },
        {
          "q": "El cálculo con potencia nominal es…",
          "options": [
            "Una estimación",
            "Siempre una medición exacta",
            "Una lectura de tensión"
          ],
          "answer": 0,
          "why": "El consumo varía con los modos de uso."
        }
      ],
      "labs": [
        "consumo-casa",
        "factura-observar"
      ]
    },
    {
      "id": 30,
      "title": "Detectar errores sobre papel",
      "module": 6,
      "minutes": 24,
      "intro": "Entrená el ojo antes de pasar a circuitos físicos.",
      "sections": [
        {
          "h": "Cortocircuitos en esquemas",
          "p": "Un hilo directamente entre polos de la fuente elude la carga y es una conexión incorrecta y potencialmente peligrosa."
        },
        {
          "h": "LED al revés",
          "p": "En corriente continua, la polaridad incorrecta puede impedir que el LED encienda."
        },
        {
          "h": "Valores de resistores",
          "p": "Fallar por un factor de 1000 al convertir kΩ a Ω cambia mucho los resultados; comprobá las unidades."
        }
      ],
      "solved": "Con 4,5 V y un LED de 2 V, un resistor de 1 kΩ da alrededor de 2,5 mA. Con 1 Ω sería una corriente teórica enorme y peligrosa para el LED.",
      "challenge": "Redactá una lista de cinco fallos comunes y qué control preventivo aplicarías.",
      "questions": [
        {
          "q": "1 kΩ escrito como 1 Ω es un error de factor…",
          "options": [
            "10",
            "100",
            "1000"
          ],
          "answer": 2,
          "why": "1 kΩ = 1000 Ω."
        },
        {
          "q": "Un cable que une directamente polos de pilas puede generar…",
          "options": [
            "Cortocircuito",
            "Resistencia infinita",
            "Corriente cero siempre"
          ],
          "answer": 0,
          "why": "Es una conexión de baja resistencia que debe evitarse."
        },
        {
          "q": "Una revisión útil antes de conectar pilas es…",
          "options": [
            "Verificar valores y polaridad",
            "Tocar cables de red",
            "Probar con más tensión"
          ],
          "answer": 0,
          "why": "Es el control preventivo adecuado."
        }
      ],
      "labs": [
        "errores-papel"
      ]
    },
    {
      "id": 31,
      "title": "Proyecto: linterna educativa a pilas",
      "module": 7,
      "minutes": 30,
      "intro": "Diseñá un circuito seguro y explicá cada componente.",
      "sections": [
        {
          "h": "Objetivo",
          "p": "Prepará un diseño educativo de indicador LED con 3 AA en portapilas, resistor de 1 kΩ, LED estándar e interruptor en serie."
        },
        {
          "h": "Predicción",
          "p": "Estimá la corriente con I ≈ (Vfuente − Vled)/R. Para 4,5 V, LED rojo ≈2 V y 1 kΩ, I ≈2,5 mA."
        },
        {
          "h": "Evaluación",
          "p": "Comprobá que todos los componentes correspondan a muy baja tensión y tengan especificación conocida. Si falta alguna pieza, hacelo exclusivamente en papel o en el simulador."
        }
      ],
      "solved": "Esquema de conexiones: positivo del portapilas → resistor 1 kΩ → ánodo LED → cátodo LED → interruptor → negativo. El orden de los elementos en serie puede variar.",
      "challenge": "Dibujá, rotulá y justificá tu diseño. Si tenés TODOS los materiales, seguí la práctica LED con sus precauciones.",
      "questions": [
        {
          "q": "Con 4,5 V, LED ~2 V y 1 kΩ, I estimada es…",
          "options": [
            "2,5 mA",
            "2,5 A",
            "250 mA"
          ],
          "answer": 0,
          "why": "(4,5−2)/1000 = 0,0025 A."
        },
        {
          "q": "Si no tenés el resistor adecuado…",
          "options": [
            "No conectás el LED",
            "Conectás igual",
            "Usás un cable directo"
          ],
          "answer": 0,
          "why": "No se debe montar sin limitación de corriente."
        },
        {
          "q": "¿Cuál es la fuente prevista?",
          "options": [
            "Tomacorriente",
            "Portapilas con tres AA",
            "Red de iluminación"
          ],
          "answer": 1,
          "why": "Solo portapilas con 3 AA."
        }
      ],
      "labs": [
        "led-seguro",
        "interruptor-led"
      ]
    },
    {
      "id": 32,
      "title": "Proyecto: investigar materiales",
      "module": 7,
      "minutes": 25,
      "intro": "Una práctica de método científico con metal y plástico.",
      "sections": [
        {
          "h": "Hipótesis",
          "p": "Proponé qué pasaría al insertar un material sólido en un circuito limitado a pilas."
        },
        {
          "h": "Variable controlada",
          "p": "Si hacés un ensayo con un probador de baja tensión y LED, cambiá un solo objeto por vez y mantené el resto igual."
        },
        {
          "h": "Registro",
          "p": "Anotá materiales, predicción, observación y explicación. No pruebes líquidos, cuerpos humanos, enchufes ni circuitos alimentados desde la red."
        }
      ],
      "solved": "Un clip metálico limpio tiende a cerrar el camino. Un pedazo de plástico seco normalmente no lo hace.",
      "challenge": "Completá tabla para clip, moneda, goma y cartón. Ensayo físico solo con el probador seguro y todos los materiales.",
      "questions": [
        {
          "q": "¿Qué cambia en un ensayo controlado?",
          "options": [
            "Un elemento a la vez",
            "Todo al mismo tiempo",
            "La red eléctrica"
          ],
          "answer": 0,
          "why": "Controlar variables permite interpretar resultados."
        },
        {
          "q": "¿Cuál suele conducir?",
          "options": [
            "Clip metálico",
            "Goma seca",
            "Cartón seco"
          ],
          "answer": 0,
          "why": "El metal suele conducir mejor."
        },
        {
          "q": "¿Qué NO se prueba con el circuito de pilas?",
          "options": [
            "Cartón seco",
            "Clip metálico",
            "Agua o personas"
          ],
          "answer": 2,
          "why": "No son muestras apropiadas para esta actividad."
        }
      ],
      "labs": [
        "probador-materiales",
        "tabla-materiales"
      ]
    },
    {
      "id": 33,
      "title": "Desafío final: pensar como electricista",
      "module": 7,
      "minutes": 35,
      "intro": "Comprobá qué comprendiste y prepará el próximo nivel.",
      "sections": [
        {
          "h": "Explicar",
          "p": "Definí V, A, Ω, W y kWh con ejemplos propios."
        },
        {
          "h": "Calcular",
          "p": "Resolvé un circuito serie y otro paralelo con resistores ideales; justificá cada paso y las unidades."
        },
        {
          "h": "Decidir con seguridad",
          "p": "Diferenciá tareas educativas de baja tensión de tareas en instalaciones domiciliarias reservadas a personal competente."
        },
        {
          "h": "Próximo objetivo",
          "p": "Luego de aprobar el desafío, podés elegir estudiar electrónica básica, instalaciones eléctricas como teoría o profundizar mediciones seguras."
        }
      ],
      "solved": "Desafío: R1=100 Ω y R2=200 Ω en serie con 9 V. Rtotal=300 Ω; I=30 mA; Ptotal=0,27 W.",
      "challenge": "Elegí tres prácticas del catálogo que puedas realizar con tus materiales; redactá sus conclusiones y explicá por qué son seguras.",
      "questions": [
        {
          "q": "Con 9 V y 300 Ω, la corriente es…",
          "options": [
            "30 mA",
            "3 A",
            "300 mA"
          ],
          "answer": 0,
          "why": "9/300=0,03 A=30 mA."
        },
        {
          "q": "¿El kWh mide…",
          "options": [
            "Potencia",
            "Energía",
            "Resistencia"
          ],
          "answer": 1,
          "why": "kWh es una unidad de energía."
        },
        {
          "q": "¿Qué proyecto es adecuado para principiantes?",
          "options": [
            "Montaje LED limitado con 3 AA",
            "Abrir tablero de casa",
            "Medir tomacorriente"
          ],
          "answer": 0,
          "why": "Muy baja tensión con resistencia y límites definidos."
        }
      ],
      "labs": [
        "ruta-papel",
        "consumo-casa",
        "led-seguro"
      ]
    }
  ],
  "labs": [
    {
      "id": "observar-linterna",
      "title": "Anatomía de una linterna",
      "kind": "Observación",
      "minutes": 12,
      "need": [
        "linterna",
        "papel"
      ],
      "goal": "Identificar fuente, control y salida sin desmontar componentes.",
      "steps": [
        "Buscá una linterna portátil que tenga un interruptor accesible. Si funciona con pilas reemplazables, observá solamente la tapa del compartimento según su manual; no abras otros componentes.",
        "Identificá interruptor, lente y compartimento externo de pilas.",
        "Encendé y apagá con el mando normal.",
        "Dibujá el recorrido conceptual pila → interruptor → LED/lámpara → pila.",
        "Anotá qué transforma la energía y qué pieza interrumpe la corriente."
      ],
      "result": "La linterna enciende cuando el circuito interno permite alimentar la lámpara o LED.",
      "care": "No abras la electrónica, ni manipules contactos internos ni uses linternas dañadas.",
      "lesson": [
        1,
        13
      ]
    },
    {
      "id": "ruta-papel",
      "title": "Dibujar el camino de la corriente",
      "kind": "Papel / lápiz",
      "minutes": 10,
      "need": [
        "papel"
      ],
      "goal": "Comprender circuitos abiertos y cerrados.",
      "steps": [
        "Dibujá una pila, un interruptor y una lámpara unidos por una línea cerrada.",
        "Usá flechas para seguir la corriente convencional del + de la pila al − por el circuito externo.",
        "Dibujá otro circuito con el interruptor abierto.",
        "Compará en cuál tendría corriente la lámpara.",
        "Marcá con una cruz una conexión que uniría directamente + y − (solo en papel, nunca físicamente)."
      ],
      "result": "Circuito cerrado: corriente posible; interruptor abierto: no hay corriente en esa rama.",
      "care": "Ejercicio exclusivamente sobre papel. Jamás hagas el cortocircuito dibujado.",
      "lesson": [
        1,
        4,
        5,
        25,
        31,
        32
      ]
    },
    {
      "id": "unidades-cuaderno",
      "title": "Convertir unidades en una hoja",
      "kind": "Papel / lápiz",
      "minutes": 12,
      "need": [
        "papel"
      ],
      "goal": "Usar A, mA, Ω y kΩ con soltura.",
      "steps": [
        "Escribí 0,01 A, 0,25 A y 1,2 A.",
        "Convertí esos valores a mA multiplicando por 1000.",
        "Escribí 0,33 kΩ, 2,2 kΩ y 4,7 kΩ.",
        "Convertí a Ω multiplicando por 1000.",
        "Comprobá tus resultados con una calculadora o a mano."
      ],
      "result": "10, 250 y 1200 mA; 330, 2200 y 4700 Ω.",
      "care": "No requiere componentes eléctricos.",
      "lesson": [
        2,
        9
      ]
    },
    {
      "id": "ohm-papel",
      "title": "Predecir antes de mover el simulador",
      "kind": "Simulador",
      "minutes": 12,
      "need": [],
      "goal": "Comprobar experimentalmente la ley de Ohm ideal.",
      "steps": [
        "Entrá a «Simuladores» y abrí «Ley de Ohm».",
        "Elegí 6 V y 300 Ω. Anotá la corriente.",
        "Mantené 6 V, duplicá la resistencia a 600 Ω y compará.",
        "Ahora mantené 600 Ω y duplicá la tensión de 6 a 12 V.",
        "Explicá cuál variable aumenta o disminuye la corriente."
      ],
      "result": "A 6 V y 300 Ω circulan 20 mA; con 600 Ω circulan 10 mA; con 12 V y 600 Ω, 20 mA.",
      "care": "Es una simulación de resistores ideales. No requiere ningún montaje.",
      "lesson": [
        3
      ]
    },
    {
      "id": "etiquetas-casa",
      "title": "Leer etiquetas sin abrir nada",
      "kind": "Observación",
      "minutes": 15,
      "need": [
        "etiquetas",
        "papel"
      ],
      "goal": "Encontrar voltios, watts y amperios en objetos comunes.",
      "steps": [
        "Elegí dos aparatos con etiquetas EXTERIORES accesibles (por ejemplo linterna, radio portátil o cargador desenchufado).",
        "Sin abrirlos ni retirar tapas, copiá exactamente los números y unidades visibles.",
        "Separá datos de entrada (INPUT) y salida (OUTPUT) si aparecen.",
        "Identificá cuál expresa voltaje (V), corriente (A) o potencia (W).",
        "Anotá qué dato no podés concluir de la etiqueta por sí solo."
      ],
      "result": "Podrás distinguir datos nominales de potencia, tensión y corriente.",
      "care": "Para observar un cargador, debe estar desenchufado. No abras equipos ni toques instalaciones.",
      "lesson": [
        2,
        10,
        27,
        28
      ]
    },
    {
      "id": "tabla-materiales",
      "title": "Tabla de materiales: ¿conduce?",
      "kind": "Papel / lápiz",
      "minutes": 12,
      "need": [
        "papel"
      ],
      "goal": "Formular hipótesis sin montar circuitos.",
      "steps": [
        "Dibujá una tabla con columnas «objeto», «predicción» y «por qué».",
        "Agregá clip metálico, moneda, goma, cartón seco, cuchara metálica y plástico.",
        "Marcá probable conductor o aislante en condiciones normales.",
        "Escribí por qué no usarías red eléctrica para comprobarlo.",
        "Revisá tus hipótesis con lo estudiado."
      ],
      "result": "Metales suelen conducir; goma, cartón seco y plástico suelen ser aislantes en ciertas condiciones.",
      "care": "No hagas ensayos eléctricos con objetos de la casa conectados a la red.",
      "lesson": [
        6,
        32
      ]
    },
    {
      "id": "resistencias-papel",
      "title": "Serie contra paralelo",
      "kind": "Simulador",
      "minutes": 15,
      "need": [],
      "goal": "Comparar equivalentes y corrientes.",
      "steps": [
        "Abrí «Simuladores» y elegí «Serie y paralelo».",
        "Poné 6 V, R1 = 100 Ω y R2 = 200 Ω.",
        "Anotá la resistencia y corriente en serie.",
        "Cambiá a paralelo y registrá los resultados.",
        "Explicá por qué la corriente total cambia aun con la misma fuente."
      ],
      "result": "Serie: 300 Ω y 20 mA; paralelo: ≈66,7 Ω y ≈90 mA.",
      "care": "Simulación teórica, sin componentes reales.",
      "lesson": [
        7,
        8,
        26
      ]
    },
    {
      "id": "consumo-casa",
      "title": "Calcular consumo de un aparato",
      "kind": "Simulador",
      "minutes": 15,
      "need": [
        "papel"
      ],
      "goal": "Calcular Wh y kWh usando potencia y tiempo.",
      "steps": [
        "Buscá la potencia en W en una etiqueta externa, o inventá un ejemplo de 10 W.",
        "Anotá cuántas horas por día suponés que funciona.",
        "Multiplicá W × h para obtener Wh.",
        "Dividí por 1000 para obtener kWh.",
        "Contrastá el resultado en «Simuladores → Consumo»."
      ],
      "result": "10 W durante 4 h son 40 Wh o 0,04 kWh.",
      "care": "Solo lectura de etiquetas accesibles; no abras ni midas equipos alimentados desde la red.",
      "lesson": [
        11,
        29,
        32
      ]
    },
    {
      "id": "factura-observar",
      "title": "Entender unidades en una factura",
      "kind": "Observación",
      "minutes": 15,
      "need": [
        "factura",
        "papel"
      ],
      "goal": "Reconocer el kWh facturado.",
      "steps": [
        "Si tenés una factura de electricidad, buscá el consumo medido en kWh. No compartas datos personales.",
        "Anotá un valor aproximado en tu cuaderno, sin registrar número de cliente, domicilio ni nombre.",
        "Buscá el período de facturación.",
        "Dividí los kWh por la cantidad de días para estimar promedio diario.",
        "Explicá por qué no es un valor exacto de cada día."
      ],
      "result": "El kWh de la factura mide energía acumulada durante un período.",
      "care": "No requiere manipular medidores ni instalaciones eléctricas.",
      "lesson": [
        11,
        29
      ]
    },
    {
      "id": "calor-papel",
      "title": "Calor y potencia sobre papel",
      "kind": "Papel / lápiz",
      "minutes": 10,
      "need": [
        "papel"
      ],
      "goal": "Comprender el riesgo de potencias altas.",
      "steps": [
        "Calculá P = I²R para R = 100 Ω e I = 0,1 A.",
        "Repetí con I = 0,2 A.",
        "Compará potencias.",
        "Escribí por qué un resistor físico debe tener una potencia nominal suficiente."
      ],
      "result": "1 W y 4 W: duplicar la corriente cuadruplica la potencia.",
      "care": "No realices un montaje físico ni calientes resistencias.",
      "lesson": [
        12
      ]
    },
    {
      "id": "led-seguro",
      "title": "Encender un LED con 3 pilas AA",
      "kind": "Pilas / muy baja tensión",
      "minutes": 20,
      "need": [
        "pilas-aa",
        "portapilas3",
        "led",
        "resistor1k",
        "cables",
        "cinta"
      ],
      "goal": "Armar un indicador luminoso de corriente limitada.",
      "steps": [
        "Confirmá que tenés un portapilas para tres AA en SERIE, tres pilas AA similares y en buen estado, un LED estándar, un resistor de 1 kΩ de al menos ¼ W, cables aislados y cinta.",
        "Dejá las pilas FUERA del portapilas mientras armás. Trabajá en mesa seca no metálica, con el resistor siempre en serie.",
        "Conectá positivo del portapilas → resistor 1 kΩ → ánodo (+) del LED; cátodo (−) del LED → negativo del portapilas. Si no conocés la polaridad del LED, consultá su hoja de datos o un kit didáctico.",
        "Separá y aislá uniones para que no se toquen accidentalmente. Revisá que ningún hilo puentee directamente los polos.",
        "Solo después de revisar, insertá las tres pilas AA según sus marcas de polaridad; observá el LED brevemente.",
        "Retirá las pilas al terminar. Si algo calienta, huele raro o se daña, desconectá quitando las pilas y no continúes."
      ],
      "result": "Un LED adecuado puede iluminarse tenuemente o moderadamente. Si no lo hace, no aumentes tensión ni elimines el resistor.",
      "care": "Nunca uses enchufes, cargadores USB abiertos, baterías de litio ni pilas botón. No unas polos directamente. No dejes el montaje desatendido. Para menores, supervisión adulta.",
      "lesson": [
        14,
        25,
        31
      ]
    },
    {
      "id": "interruptor-led",
      "title": "Un clip como interruptor de pilas",
      "kind": "Pilas / muy baja tensión",
      "minutes": 15,
      "need": [
        "pilas-aa",
        "portapilas3",
        "led",
        "resistor1k",
        "cables",
        "cinta",
        "clips"
      ],
      "goal": "Observar qué pasa al abrir una rama.",
      "steps": [
        "Primero completá de manera segura la práctica «Encender un LED con 3 pilas AA».",
        "Sacá las pilas antes de modificar conexiones.",
        "En una sección del circuito EN SERIE con el resistor y LED, prepará dos extremos aislados que puedan tocarse mediante un clip limpio colocado como contacto manual. Sujetá con cinta para evitar que toque otros puntos.",
        "Comprobá otra vez que NO exista un camino directo entre + y − y que siempre esté el resistor en serie.",
        "Insertá las pilas, cerrá brevemente el contacto y luego abrilo. Retirá las pilas al finalizar."
      ],
      "result": "Cerrado: puede encender el LED; abierto: se apaga.",
      "care": "Solo pilas AA y resistor 1 kΩ. Nunca uses clips como interruptores para la red, ni toques piezas que se calienten.",
      "lesson": [
        4,
        15,
        31
      ]
    },
    {
      "id": "probador-materiales",
      "title": "Probador educativo de conductores",
      "kind": "Pilas / muy baja tensión",
      "minutes": 20,
      "need": [
        "pilas-aa",
        "portapilas3",
        "led",
        "resistor1k",
        "cables",
        "cinta",
        "clips"
      ],
      "goal": "Probar piezas sólidas SECAS usando corriente limitada.",
      "steps": [
        "Partí del circuito LED de tres AA con resistor de 1 kΩ, sin pilas colocadas.",
        "Dejá una abertura en serie para insertar un objeto entre dos extremos aislados, sin permitir que los extremos toquen los polos de la pila.",
        "Probá solo piezas secas, limpias y sin conexión con instalaciones u otros equipos: clip, moneda, plástico, cartón.",
        "Insertá pilas solo después de revisar las conexiones. Hacé contacto breve para cada objeto y anotá si el LED enciende.",
        "Quitá las pilas antes de reacomodar los contactos; completá la tabla de predicción y observación."
      ],
      "result": "Los metales suelen cerrar el circuito; plástico o cartón seco normalmente no.",
      "care": "Nunca pruebes agua, líquidos, plantas, cuerpo humano, enchufes, cables de instalaciones ni aparatos conectados. No cortocircuites pilas; resistor siempre en serie.",
      "lesson": [
        6,
        32
      ]
    },
    {
      "id": "pila-multimetro",
      "title": "Medir una pila AA suelta",
      "kind": "Multímetro / CC",
      "minutes": 15,
      "need": [
        "multimetro",
        "pilas-aa"
      ],
      "goal": "Leer tensión continua en una fuente muy baja tensión.",
      "steps": [
        "Leé el manual de tu multímetro y comprobá que funcione correctamente, con puntas intactas.",
        "Colocá punta negra en COM y roja en V/Ω (nunca en A/mA) de acuerdo con el manual.",
        "Seleccioná V DC (símbolo de línea continua y línea punteada) y una escala adecuada si no es autorango.",
        "Poné la punta roja en + y la negra en − de una pila AA SUELTA y en buen estado, sin unir polos con metal.",
        "Registrá lectura y signo. Retirá puntas y guardá el instrumento."
      ],
      "result": "Lectura típicamente cercana a 1,5 V, variable con estado y condiciones.",
      "care": "No midas tomacorrientes, tableros, cargadores abiertos ni baterías dañadas; nunca pongas modo corriente A directamente entre polos.",
      "lesson": [
        13,
        17,
        18
      ]
    },
    {
      "id": "resistor-multimetro",
      "title": "Medir resistencia fuera de circuito",
      "kind": "Multímetro / CC",
      "minutes": 12,
      "need": [
        "multimetro",
        "resistor"
      ],
      "goal": "Comprobar valor de un resistor desconectado.",
      "steps": [
        "Tomá un resistor SUELTO, sin conexiones a ninguna fuente.",
        "Revisá el manual y colocá las puntas en COM y V/Ω.",
        "Seleccioná Ω en el multímetro, sin conectar ninguna pila ni fuente al resistor.",
        "Tocá un extremo del resistor con cada punta.",
        "Compará lectura con el valor nominal y su tolerancia."
      ],
      "result": "La lectura suele estar próxima al valor nominal, dentro de tolerancia y precisión del instrumento.",
      "care": "Nunca uses Ω/continuidad en equipos energizados o capacitores sin procedimiento seguro; trabajá solo con un resistor suelto.",
      "lesson": [
        9,
        19
      ]
    },
    {
      "id": "capacitor-papel",
      "title": "Investigar capacitores sin abrir aparatos",
      "kind": "Papel / lápiz",
      "minutes": 12,
      "need": [
        "papel"
      ],
      "goal": "Reconocer características y precauciones.",
      "steps": [
        "Dibujá un símbolo genérico de capacitor y anotá la unidad faradio.",
        "Escribí la relación 1 µF = 0,000001 F.",
        "Compará en papel un capacitor de 10 µF y otro de 100 µF.",
        "Anotá por qué no debemos manipular capacitores internos de fuentes de alimentación."
      ],
      "result": "100 µF es diez veces 10 µF. Algunos capacitores pueden conservar carga.",
      "care": "No abras dispositivos ni toques capacitores desconocidos.",
      "lesson": [
        16
      ]
    },
    {
      "id": "checklist-multimetro",
      "title": "Lista previa a una medición",
      "kind": "Papel / lápiz",
      "minutes": 10,
      "need": [
        "papel"
      ],
      "goal": "Instalar hábitos de seguridad.",
      "steps": [
        "Escribí cinco preguntas antes de medir: ¿qué quiero medir?, ¿cuál es la fuente?, ¿en qué modo?, ¿qué bornes?, ¿el elemento está permitido?",
        "Aplicá la lista al caso de una pila AA suelta.",
        "Señalá por qué modo A directamente sobre una pila es incorrecto.",
        "Explicá cuándo corresponde detenerse y consultar el manual."
      ],
      "result": "Para pila AA: V DC, bornes COM y V/Ω, puntas intactas, nunca A directamente a polos.",
      "care": "Ejercicio de razonamiento. No pruebes instrumentos en red eléctrica.",
      "lesson": [
        17,
        20
      ]
    },
    {
      "id": "clasificar-fuentes",
      "title": "Detective: CC y CA",
      "kind": "Papel / lápiz",
      "minutes": 12,
      "need": [
        "papel"
      ],
      "goal": "Clasificar fuentes comunes sin manipularlas.",
      "steps": [
        "Anotá: pila AA, salida de cargador USB, tomacorriente doméstico y panel solar.",
        "Clasificá conceptualmente como CC o CA.",
        "Anotá qué unidades de frecuencia se usarían para CA.",
        "Explicá por qué saber el tipo de alimentación no autoriza a conectar o reparar un dispositivo."
      ],
      "result": "AA y salida de USB nominal: CC; red domiciliaria: CA; panel solar: CC bajo irradiación.",
      "care": "Solo estudio teórico; no midas enchufes, no abras cargadores ni conectes paneles.",
      "lesson": [
        21
      ]
    },
    {
      "id": "mapa-energia",
      "title": "Mapa de una instalación: solo conceptos",
      "kind": "Papel / lápiz",
      "minutes": 15,
      "need": [
        "papel"
      ],
      "goal": "Diferenciar funciones de distribución y protección.",
      "steps": [
        "Dibujá cajas: generación, transporte, distribución, protecciones, consumo.",
        "Unilas con flechas conceptuales.",
        "Escribí al lado de las protecciones los nombres «termomagnética» y «diferencial».",
        "Anotá una frase sobre la importancia del personal habilitado para intervenir instalaciones.",
        "Añadí la función general de la puesta a tierra de protección."
      ],
      "result": "Una representación conceptual del sistema, no un plano de montaje.",
      "care": "No abras tableros ni actives o desactives protecciones para estudiar.",
      "lesson": [
        22,
        23
      ]
    },
    {
      "id": "seguridad-casa",
      "title": "Auditoría visual sin tocar instalaciones",
      "kind": "Observación",
      "minutes": 12,
      "need": [
        "papel"
      ],
      "goal": "Identificar riesgos visibles y actuar con prudencia.",
      "steps": [
        "Desde una ubicación normal y segura, observá solamente enchufes y cables accesibles sin acercarte a los que parezcan dañados.",
        "En tu cuaderno hacé una lista de señales de alerta: enchufes ennegrecidos, cables pelados, humedad, sobrecarga de zapatillas.",
        "Pensá qué harías si detectaras cada una: evitar el uso y avisar a una persona responsable o electricista habilitado.",
        "No toques, abras, pruebes ni repares nada."
      ],
      "result": "Reconocimiento preventivo de riesgos con intervención cero.",
      "care": "Si hay olor a quemado, chispas o daño, alejate y contactá ayuda competente; no manipules la instalación.",
      "lesson": [
        24
      ]
    },
    {
      "id": "comparar-lamparas",
      "title": "Comparar W y lúmenes en envases",
      "kind": "Observación",
      "minutes": 12,
      "need": [
        "etiquetas",
        "papel"
      ],
      "goal": "Separar luminosidad de potencia.",
      "steps": [
        "Elegí dos cajas de lámparas o fichas técnicas de fabricantes, no las lámparas instaladas.",
        "Copiá watts (W) y lúmenes (lm).",
        "Calculá lúmenes por watt para cada una, si tenés ambos datos.",
        "Compará y explicá cuál produce más flujo luminoso por watt en condiciones declaradas."
      ],
      "result": "lm/W es una medida orientativa de eficacia luminosa.",
      "care": "No desenrosques lámparas ni manipules portalámparas durante el ejercicio.",
      "lesson": [
        27
      ]
    },
    {
      "id": "errores-papel",
      "title": "Cinco errores para detectar",
      "kind": "Papel / lápiz",
      "minutes": 12,
      "need": [
        "papel"
      ],
      "goal": "Identificar fallos con razonamiento.",
      "steps": [
        "Imaginá un LED conectado directamente a una fuente sin resistor; identificá el error.",
        "Imaginá una medición en modo A entre polos de una pila; marcá el riesgo.",
        "Imaginá una medición de Ω en circuito alimentado; explicá por qué no corresponde.",
        "Imaginá un cálculo que confunde 1 kΩ con 1 Ω; corregilo.",
        "Escribí para cada error la alternativa segura o una simulación equivalente."
      ],
      "result": "Cinco riesgos o errores teóricos con correcciones razonadas.",
      "care": "Todos los ejemplos problemáticos son SOLO teóricos. No los reproduzcas.",
      "lesson": [
        30
      ]
    }
  ]
};
