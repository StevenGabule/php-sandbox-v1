const output = document.querySelector('#output');
const closeBtn = document.querySelector('#btn');

function writeToScreen(message) {
	const pElem = document.createElement("p")
	pElem.textContent = message;
	output.appendChild(pElem)
}

if(!('WebSocketStream' in self)) {
	writeToScreen('Your browser does not support WebSocketStream')
} else {
	const wsURL = 'ws://127.0.0.1';
	const ws = new WebSocketStream(wsURL)
	console.log(ws.url);

	async function start() {
		const {readable, writable, extensions, protocol} = await ws.opened;
		writable("Connected")
		closeBtn.disabled = false;
		const reader = readable.getReader();
		const writer = writable.getWriter();

		writer.write('Ping');
		writeToScreen('SENT: ping')

		while(true) {
			const {value, done} = await reader.read();
			writeToScreen(`RECEIVED: ${value}`)
			if(done) {
				break;
			}

			setTimeout(() => {
				writer.write('ping')
				writeToScreen('SENT: ping')
			}, 5000);
		}
	}
	
	start();
}