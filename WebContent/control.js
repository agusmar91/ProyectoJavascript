function comprobar(){
	
	var primo = window.prompt("Dime numero primo del 1 al 10")
	if (primo==1 || primo==2 || primo==3 || primo==5||primo==7|| primo==9){
		window.alert("Lo has conseguido");
	}else{
		window.alert("Eso no es un numero primo, underground");
	}

}

function viajar(){
	var destino=window.prompt();
	
	switch(destino){
	case "Roma":
		window.alert("500€");
		break;
	case "Paris":
		window.alert("450€");
		break;
	case "París":
		window.alert("450€");
		break;
	case "Berlin":
		window.alert("387€");
		break;
	default:
		window.alert("Pida presupuesto");
		break;
	
	}
}