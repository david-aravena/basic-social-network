const ListMessagesUI = ({messages}) => {
  
  return(
    <>
      {messages.map((message) => {
        return(
          <div>
            <div>
              <h2>{message.user.charAt(0).toUpperCase() + message.user.slice(1).toLowerCase()}</h2>
              <p>{message.message}</p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ListMessagesUI