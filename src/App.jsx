import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Balmorex } from "./pages/Balmorex";
import { Vsl } from "./pages/VSL/Vsl";
import { Home } from './pages/Home';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/balmorex" element={<Balmorex />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/vsl" element={<Vsl />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
