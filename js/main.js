$(function() {
	cargarVistaPatos();
	// setInterval(analizarConexiones, 1000);
	// analizarConexiones();

	$("#addIP").click(function() {
		nombre = $("#nombrePato").val();
		ip = $("#ip").val();

		if (ValidateIPaddress(ip)) {
			agregarPato(nombre, ip);
		}
	});

});

function agregarPato(nombre, ip){
	listaPatos[nombre] = ip;
	cargarVistaPatos();
}


function cargarVistaPatos(){
	$("#listaPatos").text("");

	//Añade el simulador a la lista en el HTML
	$("#listaPatos").append('<li><div class="form-inline"><img src="/img/off.png"/><div class="cajaNombrePatoLista" id='+"Simulador"+'>'+'<div class="F">'+"Simulador"+'</div></div><div class="float-right X" id='+"Simulador"+'X>X</div></div></li>'); //mostrar lista patos
	$("#Simulador").click(function() { 
		if(!getEstado()){        //Permite conectar en el caso de que el cliente no se haya conectado antes
			conectarPato();
		}
	});

	$("#SimuladorX").click(function() {
		desconectarPato();
	});
};

cargarVistaPatos();