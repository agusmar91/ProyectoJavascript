var nombre = "Juan";

function variables(){
	
	console.log('Llamada a funcion variable');
	
	var numero = 4;
	console.log('El numero es '+numero);
	numero = 1;
	console.log('El numero es '+numero);
	console.log(nombre +' es un underground');
	
	var solucion;
	
	if(numero>=3){
		solucion = "Ok";
		console.log(solucion);
		
	}else{
		solucion = "ERROR";
		console.log(solucion);
	}
	
	var mensaje="En un lugar de la \"Mancha\"";
	
	window.alert(mensaje);
	
}