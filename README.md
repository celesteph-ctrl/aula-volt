# ⚡ Aula Volt — Curso de electricidad desde cero

Sitio web educativo en **HTML, CSS y JavaScript**, listo para publicar mediante **GitHub Pages**. No requiere Node.js, base de datos, hosting pago, API de ChatGPT ni pasos de compilación.

## Qué incluye

- 33 clases organizadas en 8 módulos, ahora con explicaciones complementarias en **cada clase**.
- Biblioteca con 12 casos prácticos y glosario de 37 términos.
- Tres diagramas SVG integrados a clases de circuitos.
- 22 prácticas guiadas según los materiales que tengas.
- 4 simuladores: ley de Ohm, resistencias serie/paralelo, consumo y LED virtual.
- **Nuevo: laboratorio visual** con 4 misiones de predicción, circuitos SVG animados, cálculo explicado y registro de experimentos.
- Cuestionarios, anotaciones, seguimiento del progreso, exportación e importación JSON.
- Diseño adaptable para computadora y celular.

## 🚀 Publicar gratis con GitHub Pages

1. Ingresá a https://github.com e iniciá sesión.
2. Creá un repositorio nuevo, por ejemplo `aula-volt`. En GitHub Free elegí **Public** para usar Pages.
3. Descargá el ZIP de este proyecto y **descomprimilo**.
4. En tu repositorio, hacé clic en **Add file > Upload files** y subí **el contenido descomprimido**, no el ZIP. La estructura debe dejar `index.html` directamente en la raíz del repositorio.
5. Confirmá los cambios con **Commit changes** en la rama `main`.
6. Abrí **Settings > Pages**. En **Build and deployment > Source** elegí **Deploy from a branch**. Seleccioná `main`, carpeta `/(root)` y **Save**.
7. Al finalizar la publicación, accedé a `https://TU_USUARIO.github.io/aula-volt/`, reemplazando `TU_USUARIO` por tu nombre de usuario y `aula-volt` por el nombre real del repositorio.

También se puede usar Git en tu computadora:

```bash
git init
git add .
git commit -m "Publicar Aula Volt"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/aula-volt.git
git push -u origin main
```

> El comando supone que ya creaste un repositorio vacío en GitHub y configuraste Git. Si creaste un README desde GitHub al abrirlo, conviene usar el método de carga por la web o clonar antes el repositorio para evitar conflictos.

## 📁 Estructura de archivos

```text
aula-volt/
├── index.html                    # Punto de entrada de la web
├── assets/
│   ├── css/
│   │   └── styles.css            # Colores, diseños y adaptación móvil
│   ├── js/
│   │   ├── course-data.js        # Módulos, clases, preguntas y prácticas
│   │   └── app.js                # Interfaz, simuladores y progreso
│   └── icons/
│       └── favicon.svg          # Ícono del sitio
├── .nojekyll                     # Evita el procesamiento Jekyll
├── .gitignore
└── README.md
```

## 🛠️ Cómo modificar el curso

- **Más clases y preguntas:** editá `assets/js/course-data.js` y seguí el formato de una clase existente (con `id` único y `module` correspondiente).
- **Más prácticas:** agregá registros en `COURSE.labs`, dentro del mismo archivo.
- **Colores y diseño:** editá `assets/css/styles.css`.
- **Funcionamiento de las evaluaciones y simuladores:** editá `assets/js/app.js`.
- **Título, descripción e ícono:** editá `index.html` y el SVG.

Para agregar módulos, revisá la lista `COURSE.modules` y asigná a cada clase el índice de su módulo (el primero es `0`). En esta versión cada cuestionario de clase tiene tres preguntas.

## 🔌 Probar sin publicarlo

Abrí `index.html` con Chrome, Firefox, Edge o Safari desde tu computadora. No hace falta conexión a internet.

Si querés probarlo mediante HTTP local (más parecido a GitHub Pages), abrí una terminal en la carpeta de la web y ejecutá:

```bash
python -m http.server 8000
```

Después visitá `http://localhost:8000`.

## 💾 Guardado del progreso

El progreso se guarda en **localStorage**, que es local al navegador y al origen de la web. Por eso, **el avance que hiciste abriendo `index.html` desde tu computadora no se transfiere automáticamente al sitio de GitHub Pages**.

Antes de cambiar de ubicación o dispositivo: abrí **Mi progreso > Exportar copia** en el sitio anterior. Luego en el sitio nuevo usá **Mi progreso > Importar copia**. Si ya terminaste las primeras tres clases y no tenés la copia, podés utilizar la función para reconocerlas como completadas.

Este sitio **no incluye cuentas, sincronización entre dispositivos ni una base de datos**. Cada navegador conserva su propia información. Evitá subir archivos JSON personales con notas o progreso al repositorio público.

## ⚠️ Seguridad eléctrica

Los ejercicios no habilitan a manipular instalaciones eléctricas domiciliarias. No realizar pruebas en tomacorrientes, tableros, cables de 220 V, fuentes abiertas ni aparatos conectados a la red. Los montajes físicos educativos usan únicamente pilas y componentes adecuados de muy baja tensión, siguiendo las indicaciones de cada práctica. No improvisar cuando falten materiales.

## Tecnología y licencias

Aplicación estática independiente, sin servicios externos ni analíticas. El contenido de este proyecto no incorpora una licencia de redistribución específica: podés agregar una licencia a tu repositorio si querés habilitar formalmente su reutilización por terceros.


## Actualización: Biblioteca práctica (noviembre 2026)

Se agregaron los archivos:

- `assets/js/extra-content.js`: profundización de las 33 clases, 12 casos y glosario.
- `assets/css/extra.css`: estilos para fichas, casos y glosario.
- `assets/diagrams/*.svg`: 3 diagramas de circuitos.

Se modificaron `index.html`, `assets/js/app.js` y `README.md`. **No hace falta cambiar `assets/js/course-data.js`** para esta actualización.

### Subir esta actualización al repositorio ya publicado

1. **Antes de nada**, abrí la web publicada, entrá a **Mi progreso** y descargá un archivo JSON de copia. Guardalo fuera del repositorio.
2. Entrá a tu repositorio `celesteph-ctrl/aula-volt` en GitHub y elegí **Add file > Upload files**.
3. Descomprimí el ZIP en tu computadora y cargá el contenido de la carpeta del proyecto (no la carpeta contenedora). GitHub puede pedir confirmar la sustitución de archivos que ya existen.
4. Es indispensable que `index.html` siga en la raíz y los archivos `assets/` mantengan sus nombres y carpetas.
5. Confirmá con **Commit changes** en `main`. No borres tus archivos previos que no figuren en esta actualización.
6. Actualizá la web en el navegador; si ves la versión antigua, probá recarga forzada o una pestaña privada.

El guardado original se mantiene con la misma clave de localStorage (`aula-volt-v2-progress`). Como se usa el mismo dominio y ruta, los avances existentes deberían mantenerse en el mismo navegador, siempre que no hayas borrado sus datos. Podés restaurarlos desde JSON si hace falta. **Nunca subas el JSON personal a un repositorio público**.

### Si GitHub te resulta difícil

Podés subir solo los archivos nuevos (`assets/js/extra-content.js`, `assets/css/extra.css`, `assets/diagrams/*.svg`) y después reemplazar `index.html` y `assets/js/app.js` por las versiones de este paquete.

### Criterios didácticos

Los casos nuevos priorizan observación, cálculo y simulación. Los únicos usos opcionales del multímetro se limitan a pilas AA sueltas o resistores sin fuente, siguiendo el manual del instrumento; ningún caso implica tomar mediciones en la red eléctrica.


## Novedad: Laboratorio visual interactivo

Se sumó una pestaña **Laboratorio visual**, con experimentos de interruptor, ley de Ohm, serie/paralelo y LED limitado por resistencia. Cada ejercicio sigue el método **predecir → comprobar → explicar**, sin conexiones eléctricas reales. Las prácticas opcionales se limitan a pilas AA y materiales adecuados.

Archivos nuevos:

- `assets/js/visual-workshop.js` (modelos de circuitos, diagramas SVG, predicciones)
- `assets/css/visual-workshop.css` (apariencia, animaciones, diseño adaptable)

Archivos modificados: `index.html`, `assets/js/app.js` y `README.md`. La actualización no requiere cambiar las 33 clases ni sus evaluaciones.

**Conservar el progreso:** se mantiene la clave `aula-volt-v2-progress`. Las clases aprobadas y las notas anteriores siguen almacenadas, y los experimentos se guardan en el campo adicional `workshopDone`, incluido en las exportaciones JSON existentes. Antes de actualizar, descargá tu copia de progreso.

**Para subir solo esta actualización:** descomprimí el ZIP de actualización y subí sus archivos a las mismas rutas, sin crear una carpeta anidada. Reemplazá `index.html` y `assets/js/app.js` existentes, y agregá los dos archivos nuevos. Si aún no publicaste la Biblioteca, es mejor subir el **ZIP completo actualizado**, porque contiene también las ampliaciones de clases.

**Límites del simulador:** los cálculos usan resistencias ideales y una caída aproximada de 2 V para el LED rojo. No se representan tolerancias, temperatura, resistencia interna de pilas ni otras características de los componentes reales. No se debe utilizar como herramienta de validación de instalaciones eléctricas.
