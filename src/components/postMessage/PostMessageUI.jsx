const PostMessageUI = ({functions}) => {
  return(
    <div style={{background: "red", display: "flex", justifyContent: "center"}}>
      <form onSubmit={functions.newMessage} style={{background: "gray", padding: "0 5rem"}}>
        <div style={{margin: "10px 0"}}>
          <input type="text" id="user" placeholder="Nombre del autor del mensaje" />
        </div>
        <div style={{margin: "10px 0"}}>
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