function ejer1() {
	
	var ini = parseInt(document.getElementById("txtInicio").value);
	var fin = parseInt(document.getElementById("txtFin").value);

	if (ini <= fin) {
		for (var i = ini; i <= fin; i++) {
			console.log(i);
		}
	} else {
		window.alert("El numero de inicio debe ser menor que el de fin");
	}
}

function comprobar(){
	var can = document.getElementById("cantidad").value;
	var pre = document.getElementById("precio").value;
	
	var resultado =can*pre;
	window.alert(resultado.toFixed(2));
	
	
}

function secreto(){
	var secret = document.getElementById("txt3").value;
	
	if(secret==17){
		window.alert("Conoces el numero secreto");
	}else{
		window.alert("No conoces el numero secreto");
	}
}