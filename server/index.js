import express from "express"
const app = express()
import http from "http"
const server = http.createServer(app)
import {Server} from "socket.io";
const io = new Server(server)


let db = []
io.on("connection", (socket) => {
	console.log("connected >> " + socket.id)
	io.emit("db", db)
	socket.on("disconnect", () => {
		console.log("disconnected >> " + socket.id)
	})

	socket.on("message", (message) => {
		db.push(message)
		socket.broadcast.emit("receive-message", message, socket.id)
	})

})


server.listen(3001, () => {
	console.log("Listening 3001...")
})




