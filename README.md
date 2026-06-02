
# Sistema Memory Selah
## Manual
### Nivel Básico

1. Enfocarse en una sola cosa, si es traducción solo en traducción, si es escritura solo escritura.
2. No se puede enficar en varias cosas por que tu cerebro no lo recibe y te aburriras muy  rápido.
3. Empezar por el dictado.
4. Escucha el audio y escribe, escribe solo la palabra que no entiendes, apartalo para que luego lo puedas estudiar con mas calma 
5. Escoger rangos muy bajos, ejemplo en una hora puedes estudiar rangos de 10 palabras en 10 minutos
6. Ver el video de introducción. 
### Nivel intermedio
1. Si ya sabes lo que esta escrito, entoncs ya puedes considerar realizar las tres cosas, eschuchar, ya no tomar nota, sino eschuchar y pronunciar contantemente 
2. Escoger rangos mas altos, es decir en 10 minutos 15 palabras
=======
# selah
SELAH es una aplicación interactiva diseñada para ayudar a memorizar versículos y frases bíblicas mediante un sistema de repetición aleatoria, con música o pistas de fondo para crear un ambiente propicio para el aprendizaje y la meditación.

# Producto Mínimo Viable (MVP) 
Síntesis de tu Aplicación Actual
El Núcleo: Repetición continua de una frase durante un bloque de tiempo (ej. 3 minutos) con pausas de 3 a 5 segundos entre repeticiones.
Interactividad: Pantalla limpia con 4 botones circulares (Control de flujo: repetir, siguiente, etc.). Traducción "a demanda" (oculta el español hasta que haces clic).
Segmentación: Capacidad de agrupar por bloques de datos (pistas de 10 en 10 palabras) y activar reproducción aleatoria dentro de ese tramo.
Motor de Audio: Voz sintetizada lineal (Google TTS) sobre una pista de música de fondo elegida por ti.
Utility: Temporizador de fin de sesión

La segmentación por bloques: Al poder elegir tramos (del 20 al 30, por ejemplo), respetas el principio de Límite de Carga Cognitiva. Intentar procesar 100 frases aleatorias saturaría tu memoria de trabajo; 10 es un número manejable para crear densidad de repetición.

# Recomendaciones para "Hackear" la Adicción (Próximos pasos técnicos)
Para que la app funcione a largo plazo sin aburrirte, no necesitas rediseñarla por completo, solo ajustar los "tornillos" del código actual:
## 1.Ajusta el bucle a ráfagas de 45 segundos:
Reducir el tiempo de exposición.Baja el tiempo por frase de 3 minutos a un máximo de 45-60 segundos. Es preferible que la frase aparezca 3 veces a lo largo del día en momentos aleatorios (Repetición Espaciada) a que se repita 30 veces seguidas en un solo bloque. El cerebro retiene más ante el reencuentro que ante la insistencia.
## 2.Implementa Variabilidad de Voces:Romper la habituación auditiva.
Si estás usando las APIs de Google TTS, configura el sistema para que rote de voz de forma aleatoria cada vez que cambie la frase. Que la frase 1 la diga una voz masculina con acento americano, la frase 2 una voz femenina con acento británico, y la frase 3 una voz diferente. Esta ligera variación despierta instantáneamente la atención selectiva del cerebro.
## 3.Automatiza pausas musicales reales:Ritmo adaptativo.
En lugar de una pausa fija de 4 segundos en silencio, haz que durante esos 4 segundos la música de fondo suba ligeramente de volumen (fade-up) y cuando la voz hable, la música baje (fade-down). Ese balance dinámico de audio mantiene el cerebro enganchado al ritmo, emulando la producción de un set de música o de un Reel.

## El veredicto científico: 
Tu base metodológica es real y funciona. Las aplicaciones comerciales te dominan porque controlan tus niveles de dopamina mediante la variedad visual y auditiva. Introduciendo variedad en las voces (TTS dinámico) y reduciendo la duración del bucle, transformarás tu herramienta de un reproductor monótono a un sistema de inmersión ágil y adictivo para tu propio beneficio.
