const database = firebase.database();
const ImputNuevaPregunta = document.getElementById('ImputNuevaPregunta');
const Okbtn = document.getElementById('Okbtn');
const PreguntaActual = document.getElementById('PreguntaActual');
let guardar;
var estado = false;

const agregarPregunta = ()=>{
if(estado == true ){
    let refe = database.ref('preguntas/PV/').push();
    let preguVieja ={
        id:refe.key,
NuevaPregunta: guardar,
    }
    database.ref ('preguntas/PA').set(null);

    refe.set(preguVieja);


}

if(ImputNuevaPregunta.value === ' '){
    alert('Ponga el texto');
    return;
}


let referencia = database.ref('preguntas/PA').push();
let pregunta ={
    
id:referencia.key,
NuevaPregunta: ImputNuevaPregunta.value,

};
referencia.set(pregunta);

ImputNuevaPregunta.value = ' ';
}

Okbtn.addEventListener('click',agregarPregunta);

database.ref('preguntas/PA').on('value',function(data) {
  

        data.forEach(pregunta =>{
            let valor = pregunta.val();
            if(valor.NuevaPregunta == null ){
                PreguntaActual.innerHTML = ' ';

            }else{
                PreguntaActual.innerHTML = valor.NuevaPregunta + " "+ valor.promedio;
            guardar = valor.NuevaPregunta;
            estado = true;

            }

    });

});


database.ref('preguntas/PV/').on('value',function(data){
    PreguntaVieja.innerHTML = ' '; //con esto no se repite
data.forEach(preguVieja =>{
    let valores = preguVieja.val();
    let historico = new Cpregunta(valores);
    PreguntaVieja.appendChild(historico.render());
})

});

