import React from 'react';
import { ArrowRight } from 'lucide-react';
import boda from '/public/images/boda.jpg';
import fiesta from '/public/images/fiesta.jpg';
import xv from '/public/images/xv.jpg';

const PastelesComponent = () => {
  const pasteles = [
    {
      tipo: "Pastel de Boda",
      descripcion: "Diseños elegantes y sofisticados para hacer tu día aún más especial. Personalizamos cada detalle según tus sueños.",
      image: boda,
    },
    {
      tipo: "Pastel de Fiestas",
      descripcion: "Pasteles temáticos llenos de color y diversión. Perfectos para cumpleaños y celebraciones especiales.",
      image: fiesta,
    },
    {
      tipo: "Pastel de XV Años",
      descripcion: "Creaciones únicas y memorables para tu quinceañera. Diseños que harán de tu celebración un momento inolvidable.",
      image: xv,
    }
  ];

  return (
    <div className="w-full  py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-100/30 via-pink-200/30 to-pink-100/30 blur-3xl" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-800 mb-3">
            Nuestras Especialidades
          </h2>
          <p className="text-base sm:text-lg text-pink-700/90 max-w-2xl mx-auto">
            Descubre nuestra exclusiva selección de pasteles para cada momento especial
          </p>
        </div>
        
        {/* Pasteles Grid - Mejorado para responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 auto-rows-min">
          {pasteles.map((pastel, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white">
            
              
              {/* Contenedor de imagen con nuevo aspect ratio */}
              <div className="aspect-[16/10] relative overflow-hidden bg-pink-100">
                <img
                  src={pastel.image}
                  alt={pastel.tipo}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Contenido hover - Mejorado para responsive */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    {pastel.tipo}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3">
                    {pastel.descripcion}
                  </p>
                  <button className="group/btn relative w-fit px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/30 flex items-center gap-2 text-sm sm:text-base">
                    Explorar Diseños
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                  </button>
                </div>
              </div>
              
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastelesComponent;