

//LISTA
let listWord=[
    ["1	","Everything	    ","Todo","	Everything builds up and spills away","	Todo se acumula y se derrama","	 'Everything ' emphasizes the cumulative nature of emotions and experiences"],
    ["2	","Painful	    ","Doloroso","	And it's so painful to see","	Y es tan doloroso de ver","	 'Painful ' highlights the intense emotional suffering caused by the situation"],
    ["3	","Yourself	    ","Tú mismo","	If you can live all by yourself, alone","	Si puedes vivir solo, solo tú","	 'Yourself ' emphasizes the individual's capacity for self-sufficiency, contrasting with the speaker's dependence"],
    ["4	","Lingering	    ","Persistente","	Your scent lingers around me","	Tu aroma persiste a mi alrededor","	 'Lingering ' describes the lingering presence of the past, even though the relationship is over"],
    ["5	","Ringing	    ","Resonante","	Your voice keeps ringing through me, today","	Tu voz sigue resonando en mí, hoy","	 'Ringing ' conveys the persistent and intrusive nature of the memories associated with the ex-partner's voice"],
    ["6	","Ended	        ","Terminado","	And I know that our tale has ended","	Y sé que nuestro cuento ha terminado","	 'Ended ' marks the finality of the relationship, emphasizing the irreversible nature of the breakup"],
    ["7	","Wishing	    ","Deseando","	And I will keep on wishing","	Y seguiré deseando","	 'Wishing ' expresses the speaker's persistent hope for reconciliation or the ex-partner's happiness"],
    ["8	","Heavier	    ","Más pesado","	And each step, feels heavier with each new breath","	Y cada paso, se siente más pesado con cada nueva respiración","	 'Heavier ' symbolizes the emotional burden and difficulty of moving on from the relationship"],
    ["9	","Someday	    ","Algún día","	And if someday I was born again","	Y si algún día volviera a nacer","	 'Someday ' conveys the speaker"],
    ["10	","Sunshine	    ","Sol","	And in the summer sunshine","	Y en el sol de verano","	 'Sunshine ' represents happiness and warmth, contrasting with the current state of sadness and loneliness"],
    ["11	","Snowflakes	    ","Copos de nieve","	Or in the winter's falling snowflakes","	O en los copos de nieve que caen en invierno","	 'Snowflakes ' symbolize the fleeting and ephemeral nature of time and memories"],
    ["12	","Rolling	    ","Rodando","	As the days keep on rolling over","	Mientras los días siguen rodando","	 'Rolling ' describes the continuous passage of time, highlighting the speaker's ongoing struggle with the past"],
    ["13	","Lonely	        ","Solitario","	Yet still, I'm feeling lonely without you","	Sin embargo, todavía me siento solo sin ti","	 'Lonely ' emphasizes the profound sense of isolation and emptiness experienced without the ex-partner"],
    ["14	","Overflows	    ","Desborda","	Cause my love still overflows, and now I know","	Porque mi amor todavía desborda, y ahora sé","	 'Overflows ' conveys the intensity and abundance of the speaker's love, even though it is unrequited"],
    ["15	","Silence	    ","Silencio","	You left this canary in silence to stand","	Dejaste a este canario en silencio para que se parara","	 'Silence ' represents the loneliness and isolation the speaker feels after being abandoned by the ex-partner"],
    ["16	","Rot	        ","Pudrirse","	Alone, in it's dark cage, to rot away","	Solo, en su oscura jaula, para pudrirse","	 'Rot ' symbolizes the speaker's fear of withering away emotionally due to the pain and loneliness"],
    ["17	","Praying	    ","Rezando","	And I will keep on praying","	Y seguiré deseando","	 'Praying ' emphasizes the speaker's fervent hope and desire for a positive outcome"],
    ["18	","Happy	        ","Feliz","	I hope that you'll be happy","	Espero que seas feliz","	 'Happy ' expresses the speaker's genuine wish for the ex-partner's well-being, despite the pain caused by the breakup"]
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



