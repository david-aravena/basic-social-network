import { useContext } from 'react'
import PostMessageUI from './PostMessageUI'
import {MessageContext} from './../../context'

const PostMessage = () => {

  const {messages, setMessages} = useContext(MessageContext)

  const newMessage = (e) => {
    e.preventDefault()

    const message = {
      user: e.target.user.value,
      message: e.target.message.value
    }

    setMessages([...messages, message])

    e.target.user.value = "";
    e.target.message.value= "";
  }

  const functions = {
    newMessage
  }

  return(
    <PostMessageUI functions={functions} />
  )
}

export default PostMessage