/*/Cargar el contenido y obtener el ID de lso elementos /*/
document.addEventListener('DOMContentLoaded', function(){
    const tabla = document.getElementById('tabla').getElementById('tbody')[0];
    let idFila = 1;
    /*/Función para añadir una fila /*/
    function añadirFila(){
        const nuevaFila = document.createElement('tr')/*/ Crear el tr en el tbody/*/
        const celdas = ['#', 'Productos', 'Precios', 'Cantidad existente'].map((texto, index) => {/*/Un arreglo (array) /*/
        const celda = document.createElement('td'); /*/ Creando la fila /*/
        if(index === 0){
            celda.textContent = ifFila++; /*/ Permite que el ID sea autoincrementable /*/
        }
    }
}