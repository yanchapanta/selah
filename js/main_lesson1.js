// Usando async datos fuera
const jsonFile = document.body.getAttribute('data-json');
async function fetchData() {
    try {
        const response = await fetch(jsonFile);
        const data = await response.json();
        return data; // Devuelve los datos para usarlos fuera de la función
    } catch (error) {
        console.error('Error:', error);
    }
}
const  totalList=document.getElementById("totalList");
const teamA_numStart=document.getElementById("teamA_numStart"),
      teamA_numEnd=document.getElementById("teamA_numEnd");


let numStart=teamA_numStart.value-1,
numEnd=teamA_numEnd.value-1;//data.length/2 →22 
let teamA_rowRamdon=teamA_numAleatorio(numStart,numEnd),      
    teamA_num_random=document.getElementById("teamA_num_random");  


const tblBody_teamA = document.createElement("tbody");
const teamA_tablas=document.getElementById("teamA_tablas");

let datosOriginales = null;  // Variable global para guardar copia

async function useData() {
    console.log("🟢 useData EJECUTADA a las:", new Date().toLocaleTimeString());
    const data = await fetchData(); 

    // GUARDAR UNA COPIA INALTERABLE DE LOS DATOS ORIGINALES
    if (!datosOriginales) {
        datosOriginales = JSON.parse(JSON.stringify(data));
        console.log("💾 Datos originales guardados - Inglés:", datosOriginales[0][1]);
    }

     // SIEMPRE usar la copia original para mostrar
    const dataParaMostrar = JSON.parse(JSON.stringify(datosOriginales));
    
    console.log("📊 Mostrando - Inglés:", dataParaMostrar[0][1]); 
    // Limpiar tabla antes de mostrar
    while (tblBody_teamA.firstChild) {
        tblBody_teamA.removeChild(tblBody_teamA.firstChild);
    }
    
    showLista(dataParaMostrar, tblBody_teamA, teamA_tablas);
    // Llama a otras funciones y pasa los datos


    totalList.textContent=data.length;
    //  console.log('Datos de la función:', data[0][2]);
    showColumna(dataParaMostrar);

    cargarDefault(dataParaMostrar)
    btnNext(dataParaMostrar);
    //btnNextES(dataParaMostrar);
   
    btnShowMe(dataParaMostrar);
    btnColores(dataParaMostrar);
    btnAutoES(dataParaMostrar);
    btnAutoEN(dataParaMostrar);
    //    btnAutoENforTest(dataParaMostrar);
    btnAutoPausar(dataParaMostrar);    
}
useData();

function cargarDefault(dataParaMostrar){
    let teamA_colNum = dataParaMostrar[teamA_rowRamdon][0];
    document.addEventListener("DOMContentLoaded", (e) => {    
        teamA_num_random.textContent = teamA_colNum;
        teamA_num_random.setAttribute("href", `#teamA_fila${teamA_colNum}`);
    
        const teamA_numStart = document.getElementById("teamA_numStart");
        const teamA_numEnd = document.getElementById("teamA_numEnd");
    
        teamA_numStart.value = 1;
        teamA_numEnd.value = dataParaMostrar.length;
    });
}
function showColumna(dataParaMostrar) {
    // Usar los datos que recibe como parámetro, NO variables globales
    let teamA_colNum = dataParaMostrar[teamA_rowRamdon][0];
    let teamA_colWordEN = dataParaMostrar[teamA_rowRamdon][1];
    let teamA_colWordES = dataParaMostrar[teamA_rowRamdon][2];
    let teamA_colPhraseEN = dataParaMostrar[teamA_rowRamdon][3];
    let teamA_colPhraseES = dataParaMostrar[teamA_rowRamdon][4];
    
    teamA_wordEnglish.textContent = teamA_colWordEN;
    teamA_wordSpanish.textContent = teamA_colWordES;
    teamA_inputEN_phrase.textContent = teamA_colPhraseEN;
}
function  teamA_numAleatorio(numStart,numEnd) {
    const minCeiled = Math.ceil(numStart);
    const maxFloored = Math.floor(numEnd);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}



let teamA_inputEN_phrase=document.getElementById("teamA_inputEN_phrase"),
    teamA_wordEnglish=document.getElementById("teamA_wordEnglish"),
    teamA_wordSpanish=document.getElementById("teamA_wordSpanish");

 
function showColumna(dataParaMostrar) {
    let teamA_colNum=dataParaMostrar[teamA_rowRamdon][0],
    teamA_colWordEN=dataParaMostrar[teamA_rowRamdon][1];
    teamA_colWordES=dataParaMostrar[teamA_rowRamdon][2],  
    teamA_colPhraseEN=dataParaMostrar[teamA_rowRamdon][3],  
    teamA_colPhraseES=dataParaMostrar[teamA_rowRamdon][4],
    teamA_wordEnglish.textContent=teamA_colWordEN; 
    teamA_wordSpanish.textContent=teamA_colWordES; 
    teamA_inputEN_phrase.textContent=teamA_colPhraseEN;
}

// BOTON REPETIR
document.getElementById('teamA_btn_repeat').addEventListener("click",()=>{
    teamA_phraseToSpeak();  
});
document.getElementById('teamA_btn_repeat_ES').addEventListener("click",()=>{
    teamA_phraseToSpeak_ES();  
});

document.getElementById('teamA_btn_repeat_word').addEventListener("click",()=>{
    teamA_wordToSpeak();
    
});

//BOTON MUESTRAME
function btnShowMe(dataParaMostrar){
    document.getElementById('teamA_btn_showMe').addEventListener("click",()=>{
       teamA_inputEN_phrase.classList.add("showYes");   
       teamA_wordEnglish.classList.add("showYes");
       //color atomático
       teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
        //  teamA_fila.style.backgroundColor="red";
        for (let i = 0; i < dataParaMostrar.length; i++) {
            
            
            if(i === teamA_rowRamdon){
                teamA_fila.style.backgroundColor="red";
                //teamA_num_random.style.backgroundColor=data[i][1].trim();
               
            }
            for (let j = 0; j < dataParaMostrar[0].length; j++) {
    
            }        
         } 
    
    });
}

//BOTON ESPAÑOL
let teamA_inputES_phrase=document.getElementById("teamA_inputES_phrase");
document.getElementById('teamA_btn_spanish').addEventListener("click",()=>{
    teamA_inputES_phrase.textContent=teamA_colPhraseES;
    teamA_wordSpanish.textContent=teamA_colWordES;
   
});

//TRASFORMACION DE VOZ

let utterance = new SpeechSynthesisUtterance();/* convierte texto a voz */
function teamA_phraseToSpeak(){
   

    // stop any speaking in progress ok
    window.speechSynthesis.cancel();

    // Crear nuevo utterance para evitar conflictos
    const utterance = new SpeechSynthesisUtterance();
    
    utterance.text = teamA_colPhraseEN;
    utterance.rate = 0.5;        //0.5 más lento a 2.0 más rápido
    utterance.pitch = 0.8;        //0.8 tono más lento a 1.5 tono más rápido
    utterance.volume = 1.0;
    utterance.lang = "en-US";
     
    // Buscar voces más expresivas en inglés
    const voices = speechSynthesis.getVoices();
    const singingVoice = voices.find(voice => 
        voice.lang.includes('en') && 
        (voice.name.includes('Google') || 
         voice.name.includes('Samantha') ||
         voice.name.includes('Karen') ||
         voice.name.includes('Alex') ||
         voice.name.includes('Victoria'))
    );
    
    if (singingVoice) {
        utterance.voice = singingVoice;
        console.log('🎵 Usando voz para canto:', singingVoice.name);
    }
    
    window.speechSynthesis.speak(utterance);   
    
}


function teamA_phraseToSpeak_ES(){

      // stop any speaking in progress
    window.speechSynthesis.cancel();

    utterance.text =teamA_colPhraseES;
    utterance.rate="0.5";   //0.5 más lento a 2.0 más rápido
    utterance.pitch = "0.8";  //0.8 tono más lento a 1.5 tono más rápido
    utterance.name = "Microsoft Helena ";
    utterance.voiceURI = "Microsoft Helena ";
    utterance.lang = "es-ES";
     
    window.speechSynthesis.speak(utterance);   
}

function teamA_wordToSpeak(){
      // stop any speaking in progress
    window.speechSynthesis.cancel();
    //teamA_wordEnglish
    utterance.text =teamA_wordEnglish.textContent;
     utterance.rate="0.5";//0.5 más lento a 2.0 más rápido
    utterance.pitch = "0.8";  //0.8 tono más lento a 1.5 tono más rápido 
    utterance.name = "Google US English";
    utterance.voiceURI = "Google US English";
    utterance.lang = "en-US";
     
    window.speechSynthesis.speak(utterance);      
}

function teamA_wordToSpeakES(){
  

    window.speechSynthesis.cancel();

    const word = teamA_wordSpanish.textContent;
    
    // Crear nuevo utterance para evitar conflictos
    const utterance = new SpeechSynthesisUtterance(word);
    
    // Configuración de canto
    utterance.rate = 0.8;        // Velocidad
    utterance.pitch = 0.8;       // ⭐ Tono más alto para efecto musical
    utterance.volume = 1.0;
    utterance.lang = "es-ES";    // Mejor usar español para palabras españolas
    
    // Buscar voz en español
    const voices = speechSynthesis.getVoices();
    const spanishVoice = voices.find(voice => 
        voice.lang.includes('es') || 
        voice.name.includes('Spanish') ||
        voice.name.includes('Helena') ||
        voice.name.includes('Laura')
    );
    
    if (spanishVoice) {
        utterance.voice = spanishVoice;
    }
     
    window.speechSynthesis.speak(utterance); 
    
    
}

 

 /**
  * LISTA CONTENIDO DE FRASES  team A
  */

function showLista(dataParaMostrar,tblBody_teamA, teamA_tablas){
 

    // Limpiar tabla
    while (tblBody_teamA.firstChild) {
        tblBody_teamA.removeChild(tblBody_teamA.firstChild);
    }
    
    for (let i = 0; i < dataParaMostrar.length; i++) {
        const hilera = document.createElement("tr");
             hilera.setAttribute("id",`teamA_fila${i}`);
     
        for (let j = 0; j < dataParaMostrar[0].length; j++) {
          const celda = document.createElement("td");
          const textoCelda = document.createTextNode(dataParaMostrar[i][j]);
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);
        }
        
        tblBody_teamA.appendChild(hilera);
        
     }
     teamA_tablas.appendChild(tblBody_teamA);
     console.log("nueva lista: ",dataParaMostrar);

}


//COLOREAR FILAS teamA
let teamA_fila=" ";
function btnColores(data){
    teamA_num_random.addEventListener("click",()=>{    
        
        teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
        //  teamA_fila.style.backgroundColor="red";
        for (let i = 0; i < data.length; i++) {
            
            
            if(i === teamA_rowRamdon){
                teamA_fila.style.backgroundColor="red";
               
            }
            for (let j = 0; j < data[0].length; j++) {
    
            }        
         }
        
    });
}



//teamA boton siguiente teamA
let teamA_btn_next=document.getElementById('teamA_btn_next');


function btnNext(data){
    teamA_btn_next.addEventListener("click",()=>{

        teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);    
    
        for (let i = 0; i < data.length; i++) {
            
            if(i !== teamA_rowRamdon){
                teamA_fila.style.backgroundColor="green";
            }
            if(i === teamA_rowRamdon){
                teamA_fila.style.backgroundColor="red";
                teamA_num_random.style.backgroundColor="transparent";
                
            }
            for (let j = 0; j < data[0].length; j++) {
    
            }
            
         }
    
        teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
        teamA_rowRamdon=teamA_numAleatorio(numStart,numEnd);
        teamA_colNum=data[teamA_rowRamdon][0],  
        teamA_colWordEN=data[teamA_rowRamdon][1],  
        teamA_colWordES=data[teamA_rowRamdon][2],  
        teamA_colPhraseEN=data[teamA_rowRamdon][3],  
        teamA_colPhraseES=data[teamA_rowRamdon][4],
    
        
        teamA_phraseToSpeak();
       
      
        teamA_inputEN_phrase.textContent=teamA_colPhraseEN;
        teamA_wordEnglish.textContent=teamA_colWordEN; 
        teamA_wordSpanish.textContent=teamA_colWordES;
        teamA_num_random.textContent=  teamA_colNum;
        teamA_num_random.setAttribute("href",`#teamA_fila${teamA_colNum}`);
        //teamA_fila.style.backgroundColor="red";
    
        teamA_inputES_phrase.textContent=" ";
        teamA_wordSpanish.textContent=" ";
        teamA_inputEN_phrase.classList.remove("showYes");
        teamA_wordEnglish.classList.remove("showYes");     
    
    });
}


teamA_wordEnglish.addEventListener("click",()=>{
    teamA_wordToSpeak();
});
teamA_wordSpanish.addEventListener("click",()=>{
    teamA_wordToSpeakES();
});

let teamA_btn_autoES=document.getElementById("teamA_btn_autoES"),
    teamA_btn_autoEN=document.getElementById("teamA_btn_autoEN"),
    teamA_btn_autoENtest=document.getElementById("teamA_btn_autoENtest"),
    teamA_btn_autoPausar=document.getElementById("teamA_btn_autoPausar");


let intervaloRepetir;
let intervaloSiguiente;



function btnAutoES(data){
    let tiempoFraseFrase=calcularPausaAleatoria()*2+calcularNumeroCaracteresFrase();// multiplicar 100

    teamA_btn_autoES.addEventListener("click", ()=>{
        clearInterval(intervaloRepetir);
        clearInterval(intervaloSiguiente);
        intervaloRepetir = setInterval(teamA_phraseToSpeak_ES, tiempoFraseFrase);//1 segundo es 1000
        intervaloSiguiente = setInterval(() => {
            teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);    
    
            for (let i = 0; i < data.length; i++) {
                
                if(i !== teamA_rowRamdon){
                    teamA_fila.style.backgroundColor="green";
                }
                if(i === teamA_rowRamdon){
                    teamA_fila.style.backgroundColor="red";
                    teamA_num_random.style.backgroundColor="transparent";
                    
                }
                for (let j = 0; j < data[0].length; j++) {
        
                }
                
             }
        
            teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
            teamA_rowRamdon=teamA_numAleatorio(numStart,numEnd);
            teamA_colNum=data[teamA_rowRamdon][0],  
            teamA_colWordEN=data[teamA_rowRamdon][1],  
            teamA_colWordES=data[teamA_rowRamdon][2],  
            teamA_colPhraseEN=data[teamA_rowRamdon][3],  
            teamA_colPhraseES=data[teamA_rowRamdon][4],
        
            
            teamA_phraseToSpeak_ES();
           
          
            teamA_inputEN_phrase.textContent=teamA_colPhraseEN;
            teamA_wordEnglish.textContent=teamA_colWordEN; 
            teamA_wordSpanish.textContent=teamA_colWordES;
            teamA_num_random.textContent=  teamA_colNum;
            teamA_num_random.setAttribute("href",`#teamA_fila${teamA_colNum}`);
            //teamA_fila.style.backgroundColor="red";
        
            teamA_inputES_phrase.textContent=" ";
            teamA_wordSpanish.textContent=" ";
            teamA_inputEN_phrase.classList.remove("showYes");
            teamA_wordEnglish.classList.remove("showYes");  

            teamA_phraseToSpeak_ES();
            }, 360000); // 2 minutos 180000 
          

    });
}

function btnAutoEN(data){
    let tiempoFraseFrase=calcularPausaAleatoria()*2+calcularNumeroCaracteresFrase();

    teamA_btn_autoEN.addEventListener("click", ()=>{
        clearInterval(intervaloRepetir);
        clearInterval(intervaloSiguiente);
        intervaloRepetir = setInterval(teamA_phraseToSpeak, tiempoFraseFrase);//15 segundos
        intervaloSiguiente = setInterval(() => {
            teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);    
    
            for (let i = 0; i < data.length; i++) {
                
                if(i !== teamA_rowRamdon){
                    teamA_fila.style.backgroundColor="green";
                }
                if(i === teamA_rowRamdon){
                    teamA_fila.style.backgroundColor="red";
                    teamA_num_random.style.backgroundColor="transparent";
                    
                }
                for (let j = 0; j < data[0].length; j++) {
        
                }
                
             }
        
            teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
            teamA_rowRamdon=teamA_numAleatorio(numStart,numEnd);
            teamA_colNum=data[teamA_rowRamdon][0],  
            teamA_colWordEN=data[teamA_rowRamdon][1],  
            teamA_colWordES=data[teamA_rowRamdon][2],  
            teamA_colPhraseEN=data[teamA_rowRamdon][3],  
            teamA_colPhraseES=data[teamA_rowRamdon][4],
        
            
            teamA_phraseToSpeak(); 
            
            
            teamA_inputEN_phrase.textContent=teamA_colPhraseEN;
            teamA_wordEnglish.textContent=teamA_colWordEN; 
            teamA_wordSpanish.textContent=teamA_colWordES;
            teamA_num_random.textContent=  teamA_colNum;
            teamA_num_random.setAttribute("href",`#teamA_fila${teamA_colNum}`);
            //teamA_fila.style.backgroundColor="red";
            
            teamA_inputES_phrase.textContent=" ";
            teamA_wordSpanish.textContent=" ";
            teamA_inputEN_phrase.classList.remove("showYes");
            teamA_wordEnglish.classList.remove("showYes");  
            
            teamA_phraseToSpeak();
            
            }, 360000); // 1 minutos 180000 
          

    });
}


function btnAutoPausar(data){
    teamA_btn_autoPausar.addEventListener("click", ()=>{
        console.log("btnAutoPausar")
        clearInterval(intervaloRepetir);
        clearInterval(intervaloSiguiente);       
    });
}




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
calcularPausaAleatoria();
function calcularNumeroCaracteresFrase(){
    return teamA_inputEN_phrase.textContent.length
}
calcularNumeroCaracteresFrase();