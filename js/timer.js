let inputs, clock, alarm, hours, minutes, seconds, repeater, wakeLock;

window.addEventListener('load', () => {
    inputs = Array.from(document.getElementsByClassName('number'));
    clock = document.querySelector('.clock');
    alarm = new Audio('../src/mp3/school-music-pupil-student-university-study-background-intro-theme-263089.mp3');
});

// Función para activar Wake Lock
async function requestWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            wakeLock = await navigator.wakeLock.request('screen');
            console.log('🔋 Wake Lock activado - Pantalla no se apagará');
            
            wakeLock.addEventListener('release', () => {
                console.log('🔋 Wake Lock liberado');
            });
        }
    } catch (err) {
        console.error('❌ Error al activar Wake Lock:', err);
    }
}

// Función para liberar Wake Lock
function releaseWakeLock() {
    if (wakeLock !== null) {
        wakeLock.release();
        wakeLock = null;
        console.log('🔋 Wake Lock liberado manualmente');
    }
}

// Función principal MODIFICADA
function startTimer() {
    // Activar Wake Lock antes de iniciar el timer
    requestWakeLock();
    
    // Lógica original del timer
    parseTime();
    setTimer();
    countdown();
}

// Función para detener el timer MODIFICADA
function stopTimer() {
    clearInterval(repeater);
    releaseWakeLock(); // Liberar Wake Lock al detener
    alarm.pause();
    alarm.currentTime = 0;
    location.reload();
}

// Funciones originales se mantienen igual
function parseTime() {
    hours = Number(inputs[0].value);
    minutes = Number(inputs[1].value);
    seconds = Number(inputs[2].value);
}

function setTimer() {
    clock.innerHTML = `<p class="number">${hours > 9 ? hours : ('0' + hours)}</p><span>hs</span><p class="number">${minutes > 9 ? minutes : ('0' + minutes)}</p><span>min</span><p class="number">${seconds > 9 ? seconds : ('0' + seconds)}</p><span>sec</span>`;
    document.title = `${hours > 9 ? hours : ('0' + hours)}:${minutes > 9 ? minutes : ('0' + minutes)}:${seconds > 9 ? seconds : ('0' + seconds)}`;
}

function countdown() {
    repeater = setInterval(runner, 1000);
}

function runner() {
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else {
            if (hours > 0 ) {
                seconds = 59;
                minutes = 59;
                hours--;
            } else {
                alarm.play();
                releaseWakeLock(); // Liberar Wake Lock cuando termina
            }
        }
    }
    setTimer();
}

// Manejar cuando la página pierde/gana visibilidad
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && repeater) {
        // Si la página vuelve a ser visible y el timer está corriendo, reactivar Wake Lock
        requestWakeLock();
    } else if (document.visibilityState === 'hidden') {
        // Opcional: Podrías liberar el Wake Lock cuando la app está en segundo plano
        // releaseWakeLock();
    }
});