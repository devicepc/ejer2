
const preguntas =[
    {
        titulo: "Año en el que estamos",
        respuesta: "2022",
        tipo:"TEXT"
    },
    
    {
        titulo: "En que pais estamos? ",
        respuesta: ["Uruguay"],
        tipo:"SELECT_SINGLE"
    },

    {
        titulo: "Snoopy es un perro?",
        respuesta: "Si",
        tipo:"SELECT_SINGLE"
    }
];

function mostrarPreguntas(){
     console.log(preguntas[0].titulo)
    let respuesta =prompt("Su respuesta es : ");
        console.log("Su respuesta es :"+respuesta)
         if(respuesta == preguntas[0].respuesta){
        console.log("correcto")
        console.log(preguntas[1].titulo)
        let respuesta2 = prompt("su respuesta es : ");
        console.log("Su respuesta es :"+respuesta2)
        if(respuesta2 == preguntas[1].respuesta){
       console.log("correcto")
       console.log(preguntas[2].titulo)
       let respuesta3 = prompt("su respuesta es : ");
        console.log("Su respuesta es :"+respuesta3)
        if(respuesta3 == preguntas[2].respuesta){
       console.log("correcto, haz terminado")
        }
    }
    } else{
        console.log("Incorrecto");
        console.log(preguntas[0].titulo);
        let respuesta3 =prompt("Su respuesta es : ");
        console.log("Su respuesta es :"+respuesta3)
        if(respuesta3 == preguntas[0].respuesta){
            console.log("correcto")
            console.log(preguntas[1].titulo)
        }
            
    }  


}
function responderPreguntas(respuesta){

}
function verificacionRespuesta(){

}


    mostrarPreguntas();
    responderPreguntas();
    verificacionRespuesta();