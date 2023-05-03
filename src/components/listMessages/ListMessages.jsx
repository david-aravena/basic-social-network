import { useContext } from 'react'
import ListMessagesUI from './ListMessagesUI'
import {MessageContext} from "./../../context"

const ListMessages = () => {
  const {messages} = useContext(MessageContext)


  return(
    <>
      {messages.length > 0 ?
        <ListMessagesUI messages={messages} />
      :
        <h2 style={{color: "white"}}>No hay mensajes publicados</h2>
      }
    </>
  )
}

export default ListMessages