import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import Character from './pages/Character';
import Chile from './pages/Chile';

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<Character />} />
          <Route path="/chile" element={<Chile />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;