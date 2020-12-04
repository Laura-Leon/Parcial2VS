class CpreguntaRealizada{
constructor(cpr){
    this.cpr = cpr;

}

render =()=>{
let component = document.createElement('div');
component.className = 'fi2';

let lista = document.createElement('div');
lista.className = "lista";
lista.innerHTML = (
    '<p>'+this.cpr.NuevaPregunta+ '</p>');

    
  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'deleteBtn';
  deleteBtn.innerHTML = 'X';


component.appendChild(lista);
component.appendChild(deleteBtn);

//eliminar comentario
deleteBtn.addEventListener('click',()=>{

    const database = firebase.database();
   
   database.ref('preguntas/PV'+this.cpr.id).set(null);

});

    return component;

}


}