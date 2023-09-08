import './App.css';
import NavBar from'./components/navBar/index';
import ConversationList from './components/conversationList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ConversationList />
    </div>
  );
}

export default App;
