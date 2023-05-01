import { useState } from "react";
import {MessageContext} from "./index";
export default function MessageProvider({children}){

  const [messages, setMessages] = useState([])
  console.log(messages)

	return(
		<MessageContext.Provider value={{
      setMessages,
      messages
    }}>
			{children}
		</MessageContext.Provider>
	)
}