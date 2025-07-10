import React, { useState, useEffect } from 'react';
import { Home, Star, Users, Image, MessageCircle, Phone } from 'lucide-react';
import logo from '/public/images/logo.png'

function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    // Función para scroll suave a las secciones
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 100; // Ajuste para el navbar fijo
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
      setIsMenuOpen(false); // Cerrar menú móvil después de hacer clic
    };

    // Detectar sección activa mientras se hace scroll
    useEffect(() => {
      const handleScroll = () => {
        const sections = ['inicio', 'especialidades', 'nosotros', 'galeria', 'testimonios', 'contactanos'];
        const scrollPosition = window.scrollY + 150;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
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
          <button 
            onClick={() => scrollToSection('inicio')}
            className="
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              md:static md:left-0 md:top-0 md:translate-x-0 md:translate-y-0
              flex items-center hover:scale-105 transition-transform duration-200
            "
          >
            <img 
              src={logo} 
              alt="Logo Pastelería" 
              className="h-12 md:h-20 w-auto object-contain"
            />
          </button>
  
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
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className={`
                    flex items-center py-2 px-3 w-full md:w-auto
                    transition-all duration-300
                    md:bg-transparent md:hover:bg-pink-100 
                    rounded-lg relative
                    ${activeSection === 'inicio' 
                      ? 'text-pink-700 after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-pink-600 after:rounded-full' 
                      : 'text-pink-600 hover:text-pink-800'
                    }
                  `}
                >
                  <Home className="mr-2" size={20} />
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('especialidades')}
                  className={`
                    flex items-center py-2 px-3 w-full md:w-auto
                    transition-all duration-300
                    md:bg-transparent md:hover:bg-pink-100 
                    rounded-lg relative
                    ${activeSection === 'especialidades' 
                      ? 'text-pink-700 after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-pink-600 after:rounded-full' 
                      : 'text-pink-600 hover:text-pink-800'
                    }
                  `}
                >
                  <Star className="mr-2" size={20} />
                  Especialidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('nosotros')}
                  className={`
                    flex items-center py-2 px-3 w-full md:w-auto
                    transition-all duration-300
                    md:bg-transparent md:hover:bg-pink-100 
                    rounded-lg relative
                    ${activeSection === 'nosotros' 
                      ? 'text-pink-700 after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-pink-600 after:rounded-full' 
                      : 'text-pink-600 hover:text-pink-800'
                    }
                  `}
                >
                  <Users className="mr-2" size={20} />
                  Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('galeria')}
                  className={`
                    flex items-center py-2 px-3 w-full md:w-auto
                    transition-all duration-300
                    md:bg-transparent md:hover:bg-pink-100 
                    rounded-lg relative
                    ${activeSection === 'galeria' 
                      ? 'text-pink-700 after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-6 after:h-0.5 after:bg-pink-600 after:rounded-full' 
                      : 'text-pink-600 hover:text-pink-800'
                    }
                  `}
                >
                  <Image className="mr-2" size={20} />
                  Galería
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonios')}
                  className={`
                    flex items-center py-2 px-3 w-full md:w-auto
                    transition-colors duration-300
                    md:bg-transparent md:hover:bg-pink-100 
                    rounded-lg
                    ${activeSection === 'testimonios' 
                      ? 'text-pink-800 bg-pink-100 md:bg-pink-50 font-semibold' 
                      : 'text-pink-600 hover:text-pink-800'
                    }
                  `}
                >
                  <MessageCircle className="mr-2" size={20} />
                  Testimonios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contactanos')}
                  className={`
                    flex items-center py-2 px-3 w-full md:w-auto
                    transition-colors duration-300
                    md:bg-transparent md:hover:bg-pink-100 
                    rounded-lg
                    ${activeSection === 'contactanos' 
                      ? 'text-pink-800 bg-pink-100 md:bg-pink-50 font-semibold' 
                      : 'text-pink-600 hover:text-pink-800'
                    }
                  `}
                >
                  <Phone className="mr-2" size={20} />
                  Contáctanos
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

export default NavbarComponent