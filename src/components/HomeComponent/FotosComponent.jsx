import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';



const FotosComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

 const fotos = [
  { id: 1, src: '/images/pastel1.jpg', alt: '' },
  { id: 2, src: '/images/pastel2.jpg', alt: '' },
  { id: 3, src: '/images/pastel3.jpg', alt: '' },
  { id: 4, src: '/images/pastel4.jpg', alt: '' },
  { id: 5, src: '/images/pastel5.jpg', alt: '' },
  { id: 6, src: '/images/pastel6.jpg', alt: '' },
  { id: 7, src: '/images/pastel7.jpg', alt: '' },
];


  const openImage = (index) => {
    setSelectedImage(fotos[index].src);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? fotos.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === fotos.length - 1 ? 0 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(fotos[newIndex].src);
  };

  return (
    <div className="min-h-screen relative overflow-hidden -mt-14 ">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-56 h-56 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-800 mb-4">
              Nuestra Galería
            </h2>
            <p className="text-lg sm:text-xl text-pink-700 max-w-2xl mx-auto">
              Descubre nuestros exquisitos diseños y creaciones únicas
            </p>
          </div>

          {/* Galería Mosaico Mejorada - Diseño Pinterest para 7 imágenes */}
          <div className="max-w-6xl mx-auto">
  {/* Mobile: Stack vertical */}
  <div className="block sm:hidden space-y-4">
    {fotos.map((foto, index) => (
      <div
        key={index}
        className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:-translate-y-1"
        onClick={() => openImage(index)}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <img
          src={foto.src}
          alt={foto.alt}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent transition-all duration-500 ${
          hoveredIndex === index ? 'opacity-100' : 'opacity-0'
        } flex items-center justify-center rounded-2xl`}>
          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-4">
            <ZoomIn className="w-8 h-8 text-white mx-auto mb-2 opacity-90" />
            <p className="text-white text-sm font-medium leading-tight">
              {foto.alt}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Tablet: Grid 2 columnas */}
  <div className="hidden sm:block lg:hidden">
    <div className="grid grid-cols-2 gap-4 auto-rows-[280px]">
      {/* Imagen principal más grande */}
      <div 
        className="col-span-2 relative group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer rounded-2xl transform hover:-translate-y-2"
        onClick={() => openImage(0)}
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <img
          src={fotos[0].src}
          alt={fotos[0].alt}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 rounded-2xl"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent transition-all duration-500 ${
          hoveredIndex === 0 ? 'opacity-100' : 'opacity-0'
        } flex items-center justify-center rounded-2xl`}>
          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-4">
            <ZoomIn className="w-12 h-12 text-white mx-auto mb-3 opacity-90" />
            <p className="text-white text-lg font-semibold leading-tight">
              {fotos[0].alt}
            </p>
          </div>
        </div>
      </div>

      {/* Resto de imágenes */}
      {fotos.slice(1).map((foto, index) => (
        <div 
          key={index + 1}
          className="relative group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer rounded-2xl transform hover:-translate-y-2"
          onClick={() => openImage(index + 1)}
          onMouseEnter={() => setHoveredIndex(index + 1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={foto.src}
            alt={foto.alt}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 rounded-2xl"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent transition-all duration-500 ${
            hoveredIndex === index + 1 ? 'opacity-100' : 'opacity-0'
          } flex items-center justify-center rounded-2xl`}>
            <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-4">
              <ZoomIn className="w-8 h-8 text-white mx-auto mb-2 opacity-90" />
              <p className="text-white text-sm font-medium leading-tight">
                {foto.alt}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Desktop: Grid asimétrico */}
  <div className="hidden lg:grid grid-cols-4 gap-4 auto-rows-[250px] md:gap-6">
    {/* Fila 1: Imagen grande + 2 medianas */}
    <div 
      className="col-span-2 row-span-2 relative group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer rounded-2xl transform hover:-translate-y-2"
      onClick={() => openImage(0)}
      onMouseEnter={() => setHoveredIndex(0)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img
        src={fotos[0].src}
        alt={fotos[0].alt}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 rounded-2xl"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent transition-all duration-500 ${
        hoveredIndex === 0 ? 'opacity-100' : 'opacity-0'
      } flex items-center justify-center rounded-2xl`}>
        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-4">
          <ZoomIn className="w-12 h-12 text-white mx-auto mb-3 opacity-90" />
          <p className="text-white text-lg font-semibold leading-tight">
            {fotos[0].alt}
          </p>
        </div>
      </div>
    </div>

    <div 
      className="col-span-1 row-span-1 relative group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer rounded-2xl transform hover:-translate-y-2"
      onClick={() => openImage(1)}
      onMouseEnter={() => setHoveredIndex(1)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img
        src={fotos[1].src}
        alt={fotos[1].alt}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 rounded-2xl"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent transition-all duration-500 ${
        hoveredIndex === 1 ? 'opacity-100' : 'opacity-0'
      } flex items-center justify-center rounded-2xl`}>
        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-4">
          <ZoomIn className="w-8 h-8 text-white mx-auto mb-2 opacity-90" />
          <p className="text-white text-sm font-medium leading-tight">
            {fotos[1].alt}
          </p>
        </div>
      </div>
    </div>

    <div 
      className="col-span-1 row-span-1 relative group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer rounded-2xl transform hover:-translate-y-2"
      onClick={() => openImage(2)}
      onMouseEnter={() => setHoveredIndex(2)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img
        src={fotos[2].src}
        alt={fotos[2].alt}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 rounded-2xl"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent transition-all duration-500 ${
        hoveredIndex === 2 ? 'opacity-100' : 'opacity-0'
      } flex items-center justify-center rounded-2xl`}>
        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-4">
          <ZoomIn className="w-8 h-8 text-white mx-auto mb-2 opacity-90" />
          <p className="text-white text-sm font-medium leading-tight">
            {fotos[2].alt}
          </p>
        </div>
      </div>
    </div>

    {/* Fila 2: 2 medianas (completando el espacio) */}
    <div 
      className="col-span-1 row-span-1 relative group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer rounded-2xl transform hover:-translate-y-2"
      onClick={() => openImage(3)}
      onMouseEnter={() => setHoveredIndex(3)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img
        src={fotos[3].src}
        alt={fotos[3].alt}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 rounded-2xl"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent transition-all duration-500 ${
        hoveredIndex === 3 ? 'opacity-100' : 'opacity-0'
      } flex items-center justify-center rounded-2xl`}>
        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-4">
          <ZoomIn className="w-8 h-8 text-white mx-auto mb-2 opacity-90" />
          <p className="text-white text-sm font-medium leading-tight">
            {fotos[3].alt}
          </p>
        </div>
      </div>
    </div>

    <div 
      className="col-span-1 row-span-1 relative group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer rounded-2xl transform hover:-translate-y-2"
      onClick={() => openImage(4)}
      onMouseEnter={() => setHoveredIndex(4)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img
        src={fotos[4].src}
        alt={fotos[4].alt}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 rounded-2xl"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent transition-all duration-500 ${
        hoveredIndex === 4 ? 'opacity-100' : 'opacity-0'
      } flex items-center justify-center rounded-2xl`}>
        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-4">
          <ZoomIn className="w-8 h-8 text-white mx-auto mb-2 opacity-90" />
          <p className="text-white text-sm font-medium leading-tight">
            {fotos[4].alt}
          </p>
        </div>
      </div>
    </div>

    {/* Fila 3: 2 imágenes horizontales */}
    <div 
      className="col-span-2 row-span-1 relative group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer rounded-2xl transform hover:-translate-y-2"
      onClick={() => openImage(5)}
      onMouseEnter={() => setHoveredIndex(5)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img
        src={fotos[5].src}
        alt={fotos[5].alt}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 rounded-2xl"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent transition-all duration-500 ${
        hoveredIndex === 5 ? 'opacity-100' : 'opacity-0'
      } flex items-center justify-center rounded-2xl`}>
        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-4">
          <ZoomIn className="w-10 h-10 text-white mx-auto mb-2 opacity-90" />
          <p className="text-white text-sm font-medium leading-tight">
            {fotos[5].alt}
          </p>
        </div>
      </div>
    </div>

    <div 
      className="col-span-2 row-span-1 relative group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer rounded-2xl transform hover:-translate-y-2"
      onClick={() => openImage(6)}
      onMouseEnter={() => setHoveredIndex(6)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img
        src={fotos[6].src}
        alt={fotos[6].alt}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 rounded-2xl"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent transition-all duration-500 ${
        hoveredIndex === 6 ? 'opacity-100' : 'opacity-0'
      } flex items-center justify-center rounded-2xl`}>
        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-4">
          <ZoomIn className="w-10 h-10 text-white mx-auto mb-2 opacity-90" />
          <p className="text-white text-sm font-medium leading-tight">
            {fotos[6].alt}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* MODAL - Mantengo tu código original */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          {/* Overlay para cerrar */}
          <div className="absolute inset-0" onClick={closeImage}></div>
          
          {/* Contenedor del modal */}
          <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
            {/* Imagen principal */}
            <div className="relative flex items-center justify-center max-w-5xl max-h-[85vh] w-full h-full">
              <img
                src={selectedImage}
                alt={fotos[currentIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Botones y controles */}
          <button 
            onClick={closeImage}
            className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-all duration-200"
          >
            <X size={24} />
          </button>

          <button 
            onClick={() => navigate('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 transition-all duration-200"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={() => navigate('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 transition-all duration-200"
          >
            <ChevronRight size={24} />
          </button>

          {/* Info y navegación inferior */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 text-center">
            <div className="bg-black bg-opacity-60 rounded-lg px-4 py-2 mb-4">
              <h3 className="text-white text-lg font-semibold">
                {fotos[currentIndex].alt}
              </h3>
              <p className="text-pink-200 text-sm">
                {currentIndex + 1} / {fotos.length}
              </p>
            </div>
            
            <div className="flex space-x-2 justify-center">
              {fotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSelectedImage(fotos[index].src);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-pink-400 w-6' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FotosComponent;