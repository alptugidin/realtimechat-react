import {createContext, useContext, useState} from "react";

const ChatContext = createContext(null)


const useChat = () => useContext(ChatContext)

const ChatContextProvider = ({children}) => {
	const [messages, setMessages] = useState([])
	const values = {messages,setMessages}
	return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
}


export {
	useChat,
	ChatContextProvider
}