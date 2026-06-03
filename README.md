
# Sistema Memory Selah

 crear un ambiente propicio para el aprendizaje y la meditación.

## Producto Mínimo Viable (MVP) 
### 1. Funcionamiento actual

- [x] __Nucleo__: Repetición continua audio de una frase durante un bloque - de tiempo (ej. 3 minutos).
- [ ] El tiempo de descanzo de frase a frase debe ser **dinámico y aleatorio** (aleatoriamente 20 a 30 segundos)
- [x] **Interactividad:** Pantalla limpia con 4 botones circulares 
- [x] (Control de flujo: repetir, siguiente, español, inglés, repetir buble español o inglés, pausar). Traducción "a demanda" (oculta el español/inglés hasta que haces clic).
- [x] **Segmentación**: Capacidad de agrupar por bloques de datos a la necesidad del usuario ejemplo (pista de 5,10,20 etc...) y activa reproducción aleatoria dentro de ese tramo, 
- [x] **Dopamina sana(color):** ademas todos los datos lo puedes encontra en una tabla debajo de  la aplicacion , aqui te va poniendo el color de la frase que se esta repitiendo ,es decir de poner con  color las frase que ya se han dicho. 
Lo recomendable es repetir cada bloque de 10 frases.
- [x] **Motor de Audio:** Voz sintetizada lineal (Google TTS) sobre una pista de música de fondo elegida por ti.
Utility: Temporizador de fin de sesión.
### 2. Ajusta el bucle a ráfagas de 30 segundos:
- [x] La frase cambia cada 3 minutos (aleatoriamente del bloque de 10 frases)
- [x] la frase dentro del bloque de 3 minutos se repite cada 30 segundos(el tiempo de frase a frase es incierta todo depende de la longitud de la frase).El cerebro retiene más ante el reencuentro que ante la insistencia.
### 3. Implementa Variabilidad de Voces:Romper la habituación auditiva.
- [ ] Configurar el sistema (APIs de Google TTS) para que rote de voz de forma aleatoria cada vez que cambie la frase. Que la frase 1 la diga una voz masculina con acento americano, la frase 2 una voz femenina con acento británico, y la frase 3 una voz diferente. Esta ligera variación despierta instantáneamente la atención selectiva del cerebro.Causa fatiga por monotonía tras 15-20 minutos de uso continuo.
### 4. Automatiza pausas musicales reales:Ritmo adaptativo.
- [ ] En lugar de una pausa fija de 4 segundos en silencio, haz que durante esos 4 segundos la música de fondo suba ligeramente de volumen (fade-up) y cuando la voz hable, la música baje (fade-down). Ese balance dinámico de audio mantiene el cerebro enganchado al ritmo, emulando la producción de un set de música o de un Reel.

### El veredicto científico: 
Tu base metodológica es real y funciona. Las aplicaciones comerciales te dominan porque controlan tus niveles de dopamina mediante la variedad visual y auditiva. Introduciendo variedad en las voces (TTS dinámico) y reduciendo la duración del bucle, transformarás tu herramienta de un reproductor monótono a un sistema de inmersión ágil y adictivo para tu propio beneficio.
## La lógica.
Lo impotante es que despues de la frase dure de 4 a 5 segundos para que asimile la información y luego en la siguiente frase lo coja de sorpresa(22 a 35 segundos)
```javascript
// Configuración de los parámetros científicos
const CONFIG = {
  tiempoBloqueTotal: 180000, // 3 minutos por frase base
  pausaMinima: 22000,        // 22 segundos de base para dar tiempo a la mente
  pausaMaxima: 35000         // Hasta 35 segundos para romper la predicción
};

// Función para calcular un intervalo variable aleatorio entre los 22 y 35 segundos
function calcularPausaAleatoria() {
  return Math.floor(Math.random() * (CONFIG.pausaMaxima - CONFIG.pausaMinima + 1)) + CONFIG.pausaMinima;
}
```
