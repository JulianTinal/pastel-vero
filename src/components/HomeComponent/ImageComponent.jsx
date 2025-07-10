import React from 'react';
import Pastel from '/public/images/pastel.png';
import { ArrowRight } from 'lucide-react';

const ImageComponent = () => {
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

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header con mejor tipografía */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Contenido de texto reorganizado */}
              <div className="space-y-8 text-center lg:text-left">
                <div className="space-y-6">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
                    <span className="block text-pink-800 font-alfa drop-shadow-lg">YUCATÁN</span>
                  </h1>
                  
                  <div className="space-y-2">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-700 font-alfa">
                      ¡EN LA MEJOR
                    </p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-700 font-alfa">
                      PASTELERIA DEL ESTADO!
                    </p>
                  </div>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-pink-800 mx-auto lg:mx-0 rounded-full"></div>
                </div>
                
                {/* Botón mejorado */}
                <div className="pt-4">
                  <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 text-white font-bold px-8 py-4 rounded-full text-lg font-alfa shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                    {/* Efecto de onda */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative z-10">CONTÁCTANOS</span>
                    <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </button>
                </div>
              </div>

              {/* Imagen grande y centrada */}
              <div className="relative">
                <div className="relative aspect-[4/3] lg:aspect-[3/2] max-w-2xl mx-auto">
                  {/* Fondo decorativo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-300/40 to-pink-500/40 rounded-3xl transform rotate-3 scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-pink-400/30 to-pink-600/30 rounded-3xl transform -rotate-2 scale-110"></div>
                  
                  {/* Container de imagen */}
                  <div className="relative h-full bg-white/60 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/50">
                    <div className="h-full overflow-hidden rounded-2xl">
                      <img 
                        src={Pastel}
                        alt="Deliciosa comida"
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                  
                  {/* Elementos decorativos flotantes */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-pink-500 rounded-full shadow-lg opacity-80"></div>
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-pink-600 rounded-full shadow-lg opacity-80"></div>
                  <div className="absolute top-1/2 -left-4 w-6 h-6 bg-pink-400 rounded-full shadow-lg opacity-80"></div>
                  <div className="absolute bottom-1/4 -right-4 w-10 h-10 bg-pink-700 rounded-full shadow-lg opacity-80"></div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Overlay sutil para móviles */}
      <div className="absolute inset-0 bg-gradient-to-t from-pink-100/50 to-transparent lg:hidden pointer-events-none"></div>
    </div>
  );
};

export default ImageComponent;