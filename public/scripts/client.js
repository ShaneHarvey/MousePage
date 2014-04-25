/* Setup function callbacks */
function init() {
	initWebsocket();
}

function initWebsocket() {
	var socket = io.connect(document.URL);
	socket.on('hello', function (data) {
		console.log(data);
	});
}