import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import Home from './pages/Home/Home';

function App() {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen w-full bg-gradient-to-r from-blue-100 via-pink-100 to-pink-300 pt-16">
        <NavbarComponent />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
