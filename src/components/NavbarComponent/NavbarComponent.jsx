import React, { useState } from 'react';
import { Home, Image, ShoppingCart, Users } from 'lucide-react';
import logo from '/public/images/logo.png'

function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="fixed w-full z-20 top-0 left-0 bg-white/70 backdrop-blur-md shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-between mx-auto p-4 relative">
          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-pink-500 rounded-lg hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200"
            >
              <span className="sr-only">Abrir menú</span>
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
  
          {/* Logo - Centrado en móvil, a la izquierda en desktop */}
          <a 
            href="/" 
            className="
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              md:static md:left-0 md:top-0 md:translate-x-0 md:translate-y-0
              flex items-center
            "
          >
            <img 
              src={logo} 
              alt="Logo Pastelería" 
              className="h-12 md:h-20 w-auto object-contain"
            />
          </a>
  
          {/* Menú de navegación */}
          <div className={`
            ${isMenuOpen ? 'block' : 'hidden'} 
            w-full md:block md:w-auto absolute md:relative top-full left-0 md:top-auto md:left-auto
            bg-white/90 md:bg-transparent
          `}>
            <ul className="
              flex flex-col md:flex-row 
              p-4 md:p-0 mt-4 md:mt-0 
              font-medium 
              border border-pink-100 md:border-none 
              rounded-lg 
              bg-pink-50/80 md:bg-transparent
            ">
              <li>
                <a 
                  href="/" 
                  className="
                    flex items-center py-2 px-3 
                    text-pink-600 hover:text-pink-800 
                    transition-colors duration-300
                    md:bg-transparent md:hover:bg-pink-100 
                    rounded-lg
                  "
                >
                  <Home className="mr-2" size={20} />
                  Inicio
                </a>
              </li>
              <li>
                <a 
                  href="/galeria" 
                  className="
                    flex items-center py-2 px-3 
                    text-pink-600 hover:text-pink-800 
                    transition-colors duration-300
                    md:bg-transparent md:hover:bg-pink-100 
                    rounded-lg
                  "
                >
                  <Image className="mr-2" size={20} />
                  Galería
                </a>
              </li>
              <li>
                <a 
                  href="/productos" 
                  className="
                    flex items-center py-2 px-3 
                    text-pink-600 hover:text-pink-800 
                    transition-colors duration-300
                    md:bg-transparent md:hover:bg-pink-100 
                    rounded-lg
                  "
                >
                  <ShoppingCart className="mr-2" size={20} />
                  Productos
                </a>
              </li>
              <li>
                <a 
                  href="/nosotros" 
                  className="
                    flex items-center py-2 px-3 
                    text-pink-600 hover:text-pink-800 
                    transition-colors duration-300
                    md:bg-transparent md:hover:bg-pink-100 
                    rounded-lg
                  "
                >
                  <Users className="mr-2" size={20} />
                  Nosotros
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default NavbarComponent
