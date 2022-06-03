import {useChat} from "../context/chatContext";
import Tick from "./Tick";
import {createRef, useEffect, useRef, useState} from "react";
import {init, initial, listenMessage} from "../socket/chatSocket";

const popup = (e, index, user) => {
	if (e.source === user) {
		return (
			<div key={"c" + index} className={"w-full flex justify-start py-1"}>
				<p className={"bg-green-100 w-fit relative max-w-[500px] break-all pl-1 pr-14 py-1 rounded-r-lg rounded-bl-lg shadow-md"}>
					{e.text}
					<span className={"absolute right-5 bottom-0 text-xs text-gray-500"}>{e.time}</span>
					<Tick status={e.status}/>
				</p>
			</div>
		)
	} else {
		return (
			<div key={"s" + index} className={"w-full flex justify-end py-1"}>
				<p className={"bg-white w-fit relative max-w-[500px] break-all pl-1 pr-14 py-1 rounded-l-lg rounded-br-lg shadow-md"}>
					{e.text}
					<span className={"absolute right-5 bottom-0 text-xs text-gray-500"}>{e.time}</span>
					{/*<Tick status={e.status}/>*/}
				</p>
			</div>
		)
	}
}


const ChatBox = () => {

	const context = useChat()

	const showMessages = createRef()
	const loginDiv = createRef()
	const chatBox = createRef()

	useEffect(() => {
		init()
		listenMessage(context, user)
		initial(context)

	}, [])

	useEffect(() => {
		chatBox.current.scrollTop = chatBox.current.scrollHeight
	}, [showMessages])

	const [user, setUser] = useState("")


	const handleSubmit = (e) => {
		e.preventDefault()
		if (user === "") {
			return false
		}
		context.setUser(user)
		loginDiv.current.classList.toggle("hidden")
		showMessages.current.classList.toggle("hidden")
	}


	const handleChange = (e) => {
		setUser(e.target.value)
	}


	return (
		<div className={"relative"}>
			<div
				ref={loginDiv}
				className={"w-[600px] h-[544px] bg-black absolute opacity-60 rounded-lg"}>
				<div>
					<form action="" onSubmit={handleSubmit} className={"mx-auto mt-40 w-60 relative"}>
						<input type="text"
							   placeholder="Choose a username"
							   onChange={handleChange}
							   value={user}
							   className={"bg-white w-full h-8 rounded-lg pl-1 pr-[57px] outline-none shadow"}/>
						<button
							className={"bg-yellow-500 absolute right-0 text-neutral-900 font-semibold px-2 h-full rounded-r-lg"}>Login
						</button>
					</form>
				</div>
			</div>
			<div
				ref={chatBox}
				className={"flex-row w-[600px] h-[500px] overflow-auto mx-auto bg-orange-200 rounded-t-lg px-2 py-1"}>
				<div ref={showMessages} className={"hidden rounded-lg"}>
					{context.messages.map((e, index) => popup(e, index, user))}
				</div>
			</div>
		</div>

	)
}

export default ChatBox