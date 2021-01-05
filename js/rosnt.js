let socket = null;
var estado = false;

function conectarPato(){

	address = 'ws:/localhost:8765'
	socket = new WebSocket(address);
	socket.onopen = function(e){
		alert("Conectado");
		estado = true;
		$("#Simulador").prev().attr("src", "/img/on.png"); //Encender luz
	}
	socket.onmessage = function(event){	

		lineal = separarVelocidad(event.data)[0]
		angular = separarVelocidad(event.data)[1]

		//Edita valores mostrados en la pagina
		$("#quacklometers").text(Math.trunc(lineal*100)/100);
		$("#quackdianes").text(Math.trunc(angular*-100)/100);

		//Manejo de barras de velocidad
		angular /= 8.0;

		ho = (120 - Math.abs(angular)*120).toString(); // HSL
		hv = (120 - Math.abs(lineal)*120).toString(); // HSL

		lineal = Math.abs(lineal*50 - 50)         // 1 -> 0% | 0 -> 50% | -1 -> 100%
		angular = Math.abs(angular*50 - 50)

		$("#indicadorV").css({"top" : lineal+"%", "background-color" : "black"});
		$("#indicadorH").css({"margin-left" : angular+"%", "background-color" : "black"});
		$("#barraV").css({"background-color" : "hsl("+hv+", 100%, 35%)"});
		$("#barraH").css({"background-color" : "hsl("+ho+", 100%, 35%)"});
	};		
	socket.onerror = function(error) {
			alert("Error al intentar conectar. Revisa que el simulador este abierto.");
		};		
}

function desconectarPato(){

	if(socket!= null){
		socket.onclose = function(e){
			alert("Desconectado");
			estado = false
			$("#Simulador").prev().attr("src", "/img/off.png"); // Apagar luz

			//Coloca en default la velocida y las barras al desconectar
			$("#indicadorV").css({"top" : 50+"%", "background-color" : "black"});
			$("#indicadorH").css({"margin-left" : 50+"%", "background-color" : "black"});
			$("#barraV").css({"background-color" : "hsl("+120+", 100%, 35%)"});
			$("#barraH").css({"background-color" : "hsl("+120+", 100%, 35%)"});
			$("#quacklometers").text("0");
			$("#quackdianes").text("0");
			}
			socket.close();
	}
}


//Separa los valores lineales y angulares 
function separarVelocidad(string){
	var separado = string.split(",");
	var lineal = separado[0]
	var angular = separado[1]
	var velocidades = [lineal, angular]
	return velocidades
}

function getEstado(){
	return estado;
}