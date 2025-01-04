import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';

function App() {

  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-100 via-pink-100 to-pink-300 pt-16">
    <NavbarComponent/>
    </div>
  );
}

export default App;