import React, { useState, useEffect, useCallback, lazy, Suspense, useRef } from 'react';
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Lazy loading de componentes para code splitting
const CarruselComponent = lazy(() => import('../../components/HomeComponent/CarruselComponent/CarruselComponent'));
const MomentosComponent = lazy(() => import('../../components/HomeComponent/MomentosComponent/MomentosComponent'));
const ProductosComponent = lazy(() => import('../../components/HomeComponent/ProductosComponent/ProductosComponent'));
const TestimoniosComponent = lazy(() => import('../../components/HomeComponent/TestimoniosComponent/TestimoniosComponent'));
const PastelesComponent = lazy(() => import('../../components/HomeComponent/PastelesComponent/PastelesComponent'));
const ImageComponent = lazy(() => import('../../components/HomeComponent/ImageComponent'));
const FotosComponent = lazy(() => import('../../components/HomeComponent/FotosComponent'));
const ContactoComponent = lazy(() => import('../../components/HomeComponent/ContactoComponent'));

// Componente de loading optimizado
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
  </div>
);

// Hook personalizado para scroll optimizado con throttling
const useScrollVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    let timeoutId;
    
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 16); // ~60fps
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  return isVisible;
};

// Componente de fondo optimizado con CSS puro
const OptimizedBackground = React.memo(() => (
  <div className="absolute inset-0">
    {/* Gradiente de fondo simplificado */}
    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200"></div>
    
    {/* Grid pattern más eficiente */}
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `radial-gradient(circle at 20px 20px, rgba(219, 39, 119, 0.1) 2px, transparent 2px)`,
        backgroundSize: '40px 40px'
      }}
    />
    
    {/* Elementos decorativos simplificados */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl"></div>
    </div>
  </div>
));

OptimizedBackground.displayName = 'OptimizedBackground';

// Componente de botones flotantes optimizado
const FloatingButtons = React.memo(({ isVisible }) => (
  <div className={`fixed bottom-8 right-8 z-50 transition-transform duration-300 ease-out ${
    isVisible ? 'translate-x-0' : 'translate-x-20'
  }`}>
    <div className="flex flex-col gap-4">
      <a
        href="https://wa.me/5219995461125"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
      
      <a
        href="https://www.messenger.com/t/104440672003285"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Messenger"
      >
        <FaFacebookMessenger size={32} />
      </a>
    </div>
  </div>
));

FloatingButtons.displayName = 'FloatingButtons';

// Componente de sección con lazy loading optimizado Y animaciones AOS
const LazySection = React.memo(({ id, Component, className = "py-12", aosAnimation = "fade-up" }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Múltiples intentos para asegurar que AOS detecte el elemento
  useEffect(() => {
    if (isLoaded && sectionRef.current) {
      const refreshAOS = () => {
        // Forzar refresh múltiples veces
        AOS.refresh();
        
        // Segundo intento después de un frame
        requestAnimationFrame(() => {
          AOS.refresh();
        });
        
        // Tercer intento después de 200ms
        setTimeout(() => {
          AOS.refresh();
        }, 200);
      };

      // Ejecutar inmediatamente
      refreshAOS();
    }
  }, [isLoaded]);

  const handleComponentLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div 
      ref={sectionRef}
      id={id} 
      className={className} 
      data-aos={aosAnimation}
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      {isIntersecting ? (
        <Suspense fallback={<LoadingSpinner />}>
          <ComponentWrapper Component={Component} onLoad={handleComponentLoad} />
        </Suspense>
      ) : (
        <div className="h-32 flex items-center justify-center">
          <div className="text-pink-400">Cargando...</div>
        </div>
      )}
    </div>
  );
});

// Wrapper para manejar el evento de carga
const ComponentWrapper = ({ Component, onLoad }) => {
  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return <Component />;
};

LazySection.displayName = 'LazySection';

const Home = () => {
  const isVisible = useScrollVisibility();

  // Inicializar AOS de forma optimizada
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false, // Cambiado a false para que funcione con lazy loading
      offset: 100,
      delay: 0,
      disable: false // Habilitado para todas las pantallas inicialmente
    });

    // Refresh AOS cuando el componente se monta
    AOS.refresh();

    return () => {
      AOS.refreshHard(); // Limpia AOS al desmontar
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <OptimizedBackground />

      <div className="relative z-10">
        {/* Cargar inmediatamente solo el hero */}
        <div id="inicio" data-aos="fade-up">
          <Suspense fallback={<LoadingSpinner />}>
            <ImageComponent />
          </Suspense>
        </div>
        
        {/* Lazy loading para el resto de componentes con animaciones AOS */}
        <LazySection 
          id="especialidades" 
          Component={PastelesComponent} 
          aosAnimation="fade-up"
        />
        <LazySection 
          id="nosotros" 
          Component={MomentosComponent} 
          aosAnimation="fade-right"
        />
        <LazySection 
          id="galeria" 
          Component={FotosComponent} 
          aosAnimation="zoom-in"
        />
        <LazySection 
          id="testimonios" 
          Component={TestimoniosComponent} 
          aosAnimation="fade-up"
        />
        <LazySection 
          id="contactanos" 
          Component={ContactoComponent} 
          aosAnimation="fade-up"
        />
      </div>

      <FloatingButtons isVisible={isVisible} />
    </div>
  );
};

export default Home;