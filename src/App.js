import ChatBox from "./components/ChatBox";
import InputBox from "./components/InputBox";
import {ChatContextProvider} from "./context/chatContext";

function App() {



	return (
		<div className={"p-10 bg-white h-screen"}>
			<ChatContextProvider>
				<div className={"w-fit shadow-lg rounded-lg mx-auto"}>
					<ChatBox/>
					<InputBox/>
				</div>
			</ChatContextProvider>
		</div>
	);
}

export default App;
