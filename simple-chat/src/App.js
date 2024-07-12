import './App.css';
import { Chat } from './ChatComponent';
import conversationExample from './sampleConversation.json';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Chat
          conversation={conversationExample}
          onSubmit={(e) => console.log(e)}
          onUserMessageUpdateRequest={(e) => console.log(e)}
          onUserRegenerationRequest={(e) => console.log(e)}
          onUserFeedbackRequest={(e) => console.log(e)}
          onMessageElementSelected={(e) => console.log(e)}
          onChatFullscreenChange={(e) => console.log(e)}
          onChatDockingChange={(e) => console.log(e)}
          onChatClosed={(e) => console.log(e)}
          onHeaderMenuItemSelected={(e) => console.log(e)}
          onUserStreamInterrupt={(e) => console.log(e)}
          onMessageStreamingDone={(e) => console.log(e)}
          onMessageElementTagSelected={(e) => console.log(e)}></Chat>
      </div>
    </div>
  );
}

export default App;
