

//LISTA
let listWord=[
    ["1	","Age	    ","Edad	    ","I am 32","	Tengo 32 años","	Many languages use the verb 'have' to express age; in English, we use 'be'"],
    ["2	","Age	    ","Edad	    ","I'm 32 or I am 32 years old","	Tengo 32 o tengo 32 años de edad","	Refers to age, again using 'be' in English instead of 'have'"],
    ["3	","Cold	    ","Frío	    ","I am cold","	Tengo frío","	In English, 'be' is used to describe physical states like feeling cold"],
    ["4	","Cold	    ","Frío	    ","I am cold or I feel cold","	Tengo frío o siento frío","	'Feel' can also describe a physical sensation"],
    ["5	","Thirsty	","Sed	    ","I am thirsty","	Tengo sed","	English uses 'be' to express thirst instead of 'have'"],
    ["6	","Thirsty	","Sed	    ","I am thirsty or I need something to drink","	Tengo sed o necesito algo de beber","	Alternate way to express needing a drink"],
    ["7	","Wrong	    ","Equivocado	","You are wrong","	Estás equivocado/a","	Expresses being incorrect in a situation"],
    ["8	","Cold	    ","Frío	    ","It is cold today","	Hoy hace frío","	Refers to weather using 'it is'"],
    ["9	","Hot	    ","Calor	    ","It was hot yesterday","	Ayer hizo calor","	Past tense example for weather conditions"],
    ["10	","Sad	    ","Triste	    ","She is sad today","	Ella está triste hoy","	Describes emotional states using 'is'"],
    ["11	","feel","	sentir","	I feel terrible today (something you feel inside)","	Me siento terrible hoy (algo que sientes por dentro","Se usa 'feel' para describir emociones o sensaciones físicas internas."],
    ["12	","sound","	sonar","	You sound tired (this is my opinion - I detect tiredness in your voice)","	Suenas cansado (esta es mi opinión - detecto cansancio en tu voz","Sound se refiere a la impresión que da la voz de alguien."],
    ["13	","didn't sound","	no sonaba","	She didn't sound Italian (again, this is my opinion going by her voice)","	Ella no sonaba italiana (nuevamente, es mi opinión por su voz","Didn't sound se usa para negar la impresión que daba la voz de alguien en el pasado."],
    ["14	","look","	parecer","	You look fabulous today (this is my opinion when I look at you)","	Te ves fabulosa hoy (esta es mi opinión al mirarte","Look se refiere a la apariencia física de alguien."],
    ["15	","doesn't look","	no parece","	He doesn't look very happy today (again my opinion What my eyes tell me)","	Él no parece muy feliz hoy (nuevamente mi opinión, lo que mis ojos me dicen","Doesn't look se usa para negar la apariencia física de alguien."],
    ["16	","tastes","	sabe","	This milk tastes funny","	Esta leche sabe raro","Tastes se refiere al sabor de algo."],
    ["17	","great to see","	encantado de ver","	It was really great to see you again","	Fue realmente un placer volver a verte","Great to see es una expresión de alegría al ver a alguien."],
    ["18	","fed up with","	harto de","	He is fed up with cleaning every day","	Está harto de limpiar todos los días","Fed up with significa estar cansado o disgustado de algo que se repite."],
    ["19	","tired of working","	cansado de trabajar","	She is tired of working so many hours","	Está cansada de trabajar tantas horas","Tired of significa estar cansado o sin energía para algo."],
    ["20","	Come","	Venir","	He comes from Berlin","	Él viene de Berlín","	Expresa un hecho real, se usa el presente simple para indicar algo verdadero"],
    ["21","	Coming","	Viniendo","	He's coming from Berlin","	Él está viniendo de Berlín","	Expresa una acción en progreso en el momento de hablar, por eso se usa el presente continuo"],
    ["22","	Have","	Tener","	I have a shower every morning","	Me ducho cada mañana","	Indica un hábito, por lo que se usa el presente simple"],
    ["23","	Live","	Vivir","	I live in London","	Vivo en Londres","	Expresa un hecho real o una verdad general, por eso se usa el presente simple"],
    ["24","	Leave","	Salir","	We leave for Berlin tomorrow at 7pm","	Salimos para Berlín mañana a las 7 pm","	Se usa el presente simple para referirse a horarios o eventos programados en el futuro"],
    ["25","	Play","	Jugar","	I play tennis","	Juego tenis","	Expresa un hecho o una verdad general"],
    ["26","	Play","	Jugar","	I play tennis every week","	Juego tenis cada semana","	Indica un hábito, por lo que se usa el presente simple"],
    ["27","	Know","	Conocer","	I know John","	Conozco a John","	Expresa un estado o un hecho, por lo que se usa el presente simple"],
    ["28","	Break","	Romper","	If you drop an egg, it breaks","	Si dejas caer un huevo, se rompe","	Se usa el presente simple para indicar una consecuencia natural o un hecho general"],
    ["29","	Get up","	Levantarse","	If we get up early, we always go jogging","	Si nos levantamos temprano, siempre salimos a trotar","	Expresa una acción que ocurre cada vez que sucede otra"],
    ["30","	Watch","	Ver","	The boy and his father are watching TV","	El niño y su padre están viendo televisión","	Se usa el presente continuo para describir una acción en progreso en el momento"],
    ["31","	Watching","	Viendo","	Am I watching the movie?","	¿Estoy viendo la película?","	Pregunta en presente continuo para saber si una acción está ocurriendo ahora"],
    ["32","	Watching","	Viendo","	You aren't watching the movie","	Tú no estás viendo la película","	Negación en presente continuo para indicar que la acción no está ocurriendo en ese momento"],
    ["33","	Where","	Dónde","	Where is he going? Where's he going?","	¿A dónde va él?","	Se usa el presente continuo para preguntar sobre una acción en progreso"],
    ["34","	What","	Qué","	What is she doing? What's she doing?","	¿Qué está haciendo ella?","	Se usa el presente continuo para preguntar sobre una acción en progreso"]

]

const teamA_numStart=document.getElementById("teamA_numStart"),
      teamA_numEnd=document.getElementById("teamA_numEnd"),
      totalList=document.getElementById("totalList");
      totalList.textContent=listWord.length;
      
let numStart=teamA_numStart.value-1,
numEnd=teamA_numEnd.value-1;//listWord.length/2 →22 
let teamA_rowRamdon=teamA_numAleatorio(numStart,numEnd),
    teamA_colNum=listWord[teamA_rowRamdon][0],  
    teamA_colWordEN=listWord[teamA_rowRamdon][1],  
    teamA_colWordES=listWord[teamA_rowRamdon][2],  
    teamA_colPhraseEN=listWord[teamA_rowRamdon][3],  
    teamA_colPhraseES=listWord[teamA_rowRamdon][4],
    teamA_num_random=document.getElementById("teamA_num_random");  


  

//CARGA DEFAULT
document.addEventListener("DOMContentLoaded",(e)=>{    
    teamA_phraseToSpeak(); 
    teamA_num_random.textContent= teamA_colNum;
    teamA_num_random.setAttribute("href",`#teamA_fila${teamA_colNum}`);

    const teamA_numStart=document.getElementById("teamA_numStart"),
      teamA_numEnd=document.getElementById("teamA_numEnd");


    teamA_numStart.value=1;
    teamA_numEnd.value=listWord.length;

});  

// ingresar área de estudio
function fromToArea() {
    const teamA_numStart=document.getElementById("teamA_numStart").value-1,
      teamA_numEnd=document.getElementById("teamA_numEnd").value-1;
    numStart=teamA_numStart;
      numEnd=teamA_numEnd;
    //numStart=teamA_numStart
}
  


//Función consegir un número aleatorio
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function  teamA_numAleatorio(numStart,numEnd) {
    const minCeiled = Math.ceil(numStart);
    const maxFloored = Math.floor(numEnd);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}



let teamA_inputEN_phrase=document.getElementById("teamA_inputEN_phrase"),
    teamA_wordEnglish=document.getElementById("teamA_wordEnglish"),
    teamA_wordSpanish=document.getElementById("teamA_wordSpanish");

 
teamA_inputEN_phrase.textContent=teamA_colPhraseEN;
teamA_wordEnglish.textContent=teamA_colWordEN; 

// BOTON REPETIR
document.getElementById('teamA_btn_repeat').addEventListener("click",()=>{
    teamA_phraseToSpeak();  
});
document.getElementById('teamA_btn_repeat_word').addEventListener("click",()=>{
    teamA_wordToSpeak();
    console.log()
});

//BOTON MUESTRAME

document.getElementById('teamA_btn_showMe').addEventListener("click",()=>{
   teamA_inputEN_phrase.classList.add("showYes");   
   teamA_wordEnglish.classList.add("showYes");
   //color atomático
   teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
    //  teamA_fila.style.backgroundColor="red";
    for (let i = 0; i < listWord.length; i++) {
        
        
        if(i === teamA_rowRamdon){
            teamA_fila.style.backgroundColor="red";
            //teamA_num_random.style.backgroundColor=listWord[i][1].trim();
           
        }
        for (let j = 0; j < listWord[0].length; j++) {

        }        
     }   
});

//BOTON ESPAÑOL
let teamA_inputES_phrase=document.getElementById("teamA_inputES_phrase");
document.getElementById('teamA_btn_spanish').addEventListener("click",()=>{
    teamA_inputES_phrase.textContent=teamA_colPhraseES;
    teamA_wordSpanish.textContent=teamA_colWordES;
   
});

//TRASFORMACION DE VOZ

let utterance = new SpeechSynthesisUtterance();/* convierte texto a voz */
function teamA_phraseToSpeak(){
     // stop any speaking in progress
    window.speechSynthesis.cancel();

    utterance.text =teamA_colPhraseEN;
    utterance.rate="0.7";
    utterance.pitch = "1.1";  
    utterance.name = "Google US English";
    utterance.voiceURI = "Google US English";
    utterance.lang = "en-US";
     
    window.speechSynthesis.speak(utterance);   

    /** 
     * Google US English _ en-US
        Google UK English Female _ en-GB
        Google UK English Male _ en-GB 
    */ 
}

function teamA_wordToSpeak(){
     // stop any speaking in progress
    window.speechSynthesis.cancel();
    
    utterance.text =teamA_colWordEN;
    utterance.rate="0.7";
    utterance.pitch = "1.1";  
    utterance.name = "Google US English";
    utterance.voiceURI = "Google US English";
    utterance.lang = "en-US";
     
    window.speechSynthesis.speak(utterance);      
}

 

 /**
  * LISTA CONTENIDO DE FRASES  team A
  */
const tblBody_teamA = document.createElement("tbody");
const teamA_tablas=document.getElementById("teamA_tablas");
for (let i = 0; i < listWord.length; i++) {
    const hilera = document.createElement("tr");
         hilera.setAttribute("id",`teamA_fila${i}`);
 
    for (let j = 0; j < listWord[0].length; j++) {
      const celda = document.createElement("td");
      const textoCelda = document.createTextNode(listWord[i][j]
      );
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
    
    tblBody_teamA.appendChild(hilera);
    
 }
 teamA_tablas.appendChild(tblBody_teamA);


//COLOREAR FILAS teamA
let teamA_fila=" ";

teamA_num_random.addEventListener("click",()=>{ 

    
    teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
    //  teamA_fila.style.backgroundColor="red";
    for (let i = 0; i < listWord.length; i++) {
        
        
        if(i === teamA_rowRamdon){
            teamA_fila.style.backgroundColor="red";
           
        }
        for (let j = 0; j < listWord[0].length; j++) {

        }        
     }
    
});




//teamA boton siguiente teamA
let teamA_btn_next=document.getElementById('teamA_btn_next');

teamA_btn_next.addEventListener("click",()=>{
    teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
    for (let i = 0; i < listWord.length; i++) {
        
        if(i !== teamA_rowRamdon){
            teamA_fila.style.backgroundColor="green";
        }
        if(i === teamA_rowRamdon){
            teamA_fila.style.backgroundColor="red";
            teamA_num_random.style.backgroundColor="transparent";
            
        }
        for (let j = 0; j < listWord[0].length; j++) {

        }
        
     }

    teamA_fila=document.getElementById(`teamA_fila${teamA_rowRamdon}`);
    teamA_rowRamdon=teamA_numAleatorio(numStart,numEnd);
    teamA_colNum=listWord[teamA_rowRamdon][0],  
    teamA_colWordEN=listWord[teamA_rowRamdon][1],  
    teamA_colWordES=listWord[teamA_rowRamdon][2],  
    teamA_colPhraseEN=listWord[teamA_rowRamdon][3],  
    teamA_colPhraseES=listWord[teamA_rowRamdon][4],

    
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

teamA_wordEnglish.addEventListener("click",()=>{
    teamA_wordToSpeak();
});



