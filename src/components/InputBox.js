import {useChat} from "../context/chatContext";
import {useState} from "react";
import {sendMessage} from "../socket/chatSocket";

const InputBox = () => {

	const context = useChat()
	const [message, setMessage] = useState({source: "", time: "", text: "", status: "sent"})

	const handleChange = (e) => {
		if (e.target.textContent === "") {
			e.target.innerHTML = ""
		} else if (e.target.innerText.includes("\n")) {
			context.setMessages([...context.messages, message])
			sendMessage(message)
			e.target.innerHTML = ""
		} else {
			let timeStamp = new Date().getHours() + ":" + (new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes())

			setMessage({...message, source: context.user, time: timeStamp, text: e.target.textContent})
		}
	}

	return (
		<div id="edit" onInput={handleChange} data-placeholder="Write a message..." contentEditable="true"
			 className={"w-[600px] max-h-20 overflow-auto bg-gray-200 m-auto outline-none rounded-b-lg p-2 text-xl text-gray-700 cursor-text"}>
		</div>
	)

}

export default InputBox