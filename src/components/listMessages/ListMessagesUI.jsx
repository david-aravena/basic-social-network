import Comment from './../comment/Comment'
import './css/listMessages.css'
const ListMessagesUI = ({messages}) => {
  
  return(
    <div className="list-container">
      {messages.map((message) => {
        return(
          <div className="message-container">
            <div className="message">
              <h2>{message.user.charAt(0).toUpperCase() + message.user.slice(1).toLowerCase()}</h2>
              <p>{message.message}</p>
            </div>
            <div>
              <Comment />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListMessagesUI