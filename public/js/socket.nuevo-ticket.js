// comando para establecer la coneccion

var socket = io();

var label = $("#lblNuevoTicket");

socket.on("connect", function () {
	console.log("conectado al servidor");
});

socket.on("disconnect", function () {
	console.log("desconectado del servidor");
});

socket.on("estadoActual", ({ actual }) => {
	label.text(actual);
});

$("button").on("click", () => {
	socket.emit("siguienteTicket", null, (siguienteTicket) => {
		label.text(siguienteTicket);
	});
});
