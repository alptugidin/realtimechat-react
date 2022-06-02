import {useChat} from "../context/chatContext";
import {useState} from "react";

const InputBox = () => {

	const context = useChat()
	const [message, setMessage] = useState("")


	const handleChange = (e) => {
		if (e.target.textContent === "") {
			e.target.innerHTML = ""
		} else if (e.target.innerText.includes("\n")) {
			context.setMessages([...context.messages, message])
			e.target.innerHTML = ""
		} else {
			setMessage(e.target.textContent)
		}
	}

	return (
		<div id="edit" onInput={handleChange} data-placeholder="Write a message..." contentEditable="true"
			 className={"w-[400px] max-h-20 overflow-auto bg-white m-auto outline-none rounded-b-lg p-2 text-xl text-gray-700 cursor-text"}>
		</div>
	)

}

export default InputBox