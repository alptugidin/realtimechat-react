import express from "express"
const app = express()
import http from "http"
const server = http.createServer(app)
import {Server} from "socket.io";
const io = new Server(server)

// app.get("/",(req,res) => {
// 	console.log("server worked")
// 	res.send(200)
// })


let db = []
io.on("connection", (socket) => {
	console.log("connected >> " + socket.id)
	io.emit("db", db)
	socket.on("disconnect", () => {
		console.log("disconnected >> " + socket.id)
	})

	socket.on("message", (message) => {
		db.push(message)
		console.log(db.at(-1))
		// io.emit("db", db)
		socket.broadcast.emit("receive-message", message, socket.id)
	})

})


server.listen(3001, () => {
	console.log("Listening 3001...")
})




