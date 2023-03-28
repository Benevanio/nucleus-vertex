import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Api from './pages/Api';
import './App.css';
/*85b932b146bd4418943f0e62c98f976a*/
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
