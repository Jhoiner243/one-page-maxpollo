import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Inicio/page/inicio'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
