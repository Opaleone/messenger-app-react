import './App.css';
import NavBar from'./components/navBar/index';
import ConversationList from './components/conversationList';
import Conversation from './components/conversation';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id='lower-half'>
        <ConversationList />
        <Conversation />
      </div>
    </div>
  );
}

export default App;
