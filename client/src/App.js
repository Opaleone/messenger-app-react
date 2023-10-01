import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Signup from './pages/signup';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
