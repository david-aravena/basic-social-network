import PostMessage from './components/postMessage/PostMessage'
import ListMessages from './components/listMessages/ListMessages'
import MessageProvider from './context/MessageProvider'
import './css/messages.css'

function App() {

  return (
    <>
      <MessageProvider>
        <PostMessage />
        <ListMessages />
      </MessageProvider>
    </>
  )
}

export default App
