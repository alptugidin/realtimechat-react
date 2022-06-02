import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import {ChatContextProvider} from "./context/chatContext";

function App() {
	return (
		<div className={"p-10 bg-gray-200 h-screen"}>
			<ChatContextProvider>
				<div className={"w-fit shadow-lg mx-auto"}>
					<ChatBox/>
					<InputBox/>
				</div>
			</ChatContextProvider>
		</div>
	);
}

export default App;
