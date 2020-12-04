class Cpregunta{
    constructor(cpregunta){
        this.cpregunta = cpregunta;

    }
    render = ()=>{
        let component = document.createElement('div');
        component.className = 'fi';

       let pregu = document.createElement('div');
       pregu.className = "pregu";
       pregu.innerHTML = (
           '<p>'+this.cpregunta.NuevaPregunta+'</p>');

           let deleteBtn = document.createElement('button');
           deleteBtn.className = 'deletebtn';
           deleteBtn.innerHTML = 'X';

        component.appendChild(pregu);
        component.appendChild(deleteBtn); 

        //eliminar comentario
deleteBtn.addEventListener('click',()=>{

    const database = firebase.database();
   
    
    database.ref('preguntas/PV/'+this.cpregunta.id).set(null);

});

       return component;
    }
}