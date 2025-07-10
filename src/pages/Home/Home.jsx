import React, { useState, useEffect } from 'react';
import CarruselComponent from '../../components/HomeComponent/CarruselComponent/CarruselComponent';
import MomentosComponent from '../../components/HomeComponent/MomentosComponent/MomentosComponent';
import ProductosComponent from '../../components/HomeComponent/ProductosComponent/ProductosComponent';
import TestimoniosComponent from '../../components/HomeComponent/TestimoniosComponent/TestimoniosComponent';
import PastelesComponent from '../../components/HomeComponent/PastelesComponent/PastelesComponent';
import ImageComponent from '../../components/HomeComponent/ImageComponent';
import FotosComponent from '../../components/HomeComponent/FotosComponent';
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa'; 
import ContactoComponent from '../../components/HomeComponent/ContactoComponent';

const Home = () => {
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Controla la visibilidad basada en el scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mostrar/ocultar basado en dirección del scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsFloatingMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleFloatingMenu = () => {
    setIsFloatingMenuOpen(!isFloatingMenuOpen);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 overflow-hidden">
      {/* Patrón de fondo geométrico */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-pink-200/30" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, rgba(219, 39, 119, 0.1) 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Carrusel - Fade up */}
        <div id="inicio" data-aos="fade-up">
          <ImageComponent/>
        </div>
        
        {/* Pasteles - Fade up */}
        <div id="especialidades" data-aos="fade-up" className="py-12">
          <PastelesComponent/>
        </div>

        {/* Bienvenida y CTA - Fade right */}
        <div id="nosotros" data-aos="fade-right" className="py-12">
          <MomentosComponent/>
        </div>

        {/* Productos Destacados - Zoom in */}
        <div id="galeria" data-aos="zoom-in" className="py-12">
          <FotosComponent/>
        </div>

        {/* Testimonios - Fade up */}
        <div id="testimonios" data-aos="fade-up" className="py-12">
          <TestimoniosComponent/>
        </div>
        <div id="contactanos" data-aos="fade-up" className="py-12">
          <ContactoComponent/>
        </div>
      </div>

      {/* Botones flotantes mejorados */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
      }`}>
        <div className="flex flex-col gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/521XXXXXXXXXX" // Reemplaza por tu número real
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={32} />
          </a>
          
          {/* Messenger */}
          <a
            href="https://m.me/USUARIO" // Reemplaza por tu usuario real de Messenger
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Messenger"
          >
            <FaFacebookMessenger size={32} />
          </a>
        </div>
      </div>

      {/* Overlay sutil para móviles */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-100/50 to-transparent lg:hidden pointer-events-none"></div>
    </div>
  );
};

export default Home;