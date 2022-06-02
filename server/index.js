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


// io.on("connection", (socket) => {
// 	console.log("connected >> " + socket.id)
// 	socket.on("disconnect", () => {
// 		console.log("disconnected >> " + socket.id)
// 	})
//
// 	socket.on("color", (color) => {
// 		console.log("color from clinet >> " + color)
// 		io.emit("color from server", color)
// 	})
//
// })

server.listen(3001, () => {
	console.log("Listening 3001...")
})




