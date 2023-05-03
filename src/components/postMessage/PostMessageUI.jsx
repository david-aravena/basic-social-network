import './css/postMessageUI.css'

const PostMessageUI = ({functions}) => {
  return(
    <div className='form-message-container'>
      <form onSubmit={functions.newMessage} className="form_message">
        <div className="input-name-container">
          <input type="text" id="user" placeholder="Nombre del autor del mensaje" />
        </div>
        <div className="input-message-container">
          <textarea rows="4" cols="50" id="message" placeholder="escribe aqui el mensaje" />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default PostMessageUI