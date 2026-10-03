import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import About from './pages/About/About.jsx';
import ContactUs from './pages/Contact/Contactus.jsx';
import Dynamic from './pages/Dynamic.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About/>} />
     <Route path="/contactus" element={<ContactUs/>} />
     <Route path='/collection/:id' element={<Dynamic/>} />

    </Routes>
  </BrowserRouter>,
)
