import {useChat} from "../context/chatContext";

const popup = (e, index) => {

	return (
		<p key={index}
		   className={"bg-white w-fit max-w-full break-all px-2 py-1  rounded-r-lg shadow-md rounded-bl-lg"}>
			{e}
		</p>
	)

}

const ChatBox = () => {

	const context = useChat()

	return (
		<div
			className={"flex flex-col gap-2 w-[400px] h-[500px] overflow-auto mx-auto bg-green-300 rounded-t-lg p-2"}>
			{context.messages.map((e, index) => popup(e, index))}
		</div>

	)
}

export default ChatBox