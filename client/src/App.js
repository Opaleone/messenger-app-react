import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home'
import Main from './pages/main';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/main' element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
