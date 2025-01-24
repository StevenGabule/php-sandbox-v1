// create websocket connection.
const socket = new WebSocket('ws://localhost:8080');

// connected opened
socket.addEventListener('open', (event) => {
	socket.send("Hello Server!", event.data)
})

socket.addEventListener('message', (event) => {
	console.log('Message from server!', event.data);
})