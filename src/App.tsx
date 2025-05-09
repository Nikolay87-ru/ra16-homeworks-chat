import { MessageHistory } from './components/MessageHistory';
import { messages } from './messagesData/messages';
import './index.css';

function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>
      </div>
    </div>
  );
}

export default App;
