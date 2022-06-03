import {io} from "socket.io-client";
let socket = io()


const init = () => {
	// console.log("socket starting...")
	socket = io("http://localhost:3001", {transports: ["websocket"]})

	socket.on("connect", () => {
		// console.log("socket has started.")
	})

}


const sendMessage = (message) => {

	if (!socket) {
		return false
	}
	socket.emit("message", message)
}

const listenMessage = (context) => {
	if (!socket) {
		return false
	}

	socket.on("receive-message", (listeningMessage) => {
		context.setMessages(prevState => [...prevState, listeningMessage])
	})


}

const initial = (context) => {
	if (!socket) return false
	socket.on("db", (db) => {
		context.setMessages(db)
	})
}


export {
	init,
	sendMessage,
	listenMessage,
	initial
}