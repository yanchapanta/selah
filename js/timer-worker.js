// timer-worker.js
let timerInterval;

self.onmessage = function(e) {
  const { action, hours, minutes, seconds } = e.data;
  
  if (action === 'start') {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    
    timerInterval = setInterval(() => {
      if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        self.postMessage({ action: 'alarm' });
      } else {
        totalSeconds--;
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;
        
        self.postMessage({ 
          action: 'update', 
          hours: hrs, 
          minutes: mins, 
          seconds: secs 
        });
      }
    }, 1000);
  } else if (action === 'stop') {
    clearInterval(timerInterval);
  }
};