import './App.css';
import NavBar from'./components/navBar/index';
import ConversationList from './components/conversationList';
import Conversation from './components/conversation';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ConversationList />
      <Conversation />
    </div>
  );
}

export default App;
