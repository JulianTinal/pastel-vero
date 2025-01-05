import React from 'react'
import {Star, ArrowRight} from 'lucide-react';

function ProductosComponent() {
  const products = [
    {
      name: "Pastel de Bodas Elegante",
      description: "Diseño sofisticado con acabados perfectos para tu día especial",
      price: "$1,200",
      rating: 5
    },
    {
      name: "Tarta de Frutas Frescas",
      description: "Combinación perfecta de frutas de temporada y crema suave",
      price: "$450",
      rating: 5
    },
    {
      name: "Pastel de Chocolate Premium",
      description: "Triple chocolate con ganache y decoración artesanal",
      price: "$580",
      rating: 5
    },
    {
      name: "Pastel de Chocolate Premium",
      description: "Triple chocolate con ganache y decoración artesanal",
      price: "$580",
      rating: 5
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-800 mb-3 sm:mb-4 leading-tight max-w-4xl mx-auto">
          Nuestras Creaciones Más Populares
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-pink-700 max-w-2xl mx-auto leading-relaxed">
          Descubre nuestros pasteles más solicitados, cada uno elaborado con pasión y expertise
        </p>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="group relative bg-gradient-to-br from-white to-pink-50 rounded-2xl overflow-hidden border border-pink-100 hover:border-pink-300 transition-colors duration-300"
          >
            {/* Divisor superior */}
            <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
            
            <div className="relative">
              <img 
                src="/api/placeholder/400/400"
                alt={product.name}
                className="w-full aspect-square object-cover transition-all duration-500 group-hover:scale-105"
              />
              
              {/* Precio */}
              <div className="absolute top-3 right-3 rounded-lg bg-white/80 backdrop-blur-sm border border-pink-200 shadow-lg">
                <div className="px-3 py-1.5 bg-gradient-to-r from-pink-50 to-white">
                  <span className="text-sm font-bold text-pink-800">{product.price}</span>
                </div>
              </div>
            </div>

            <div className="relative p-4">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(product.rating)].map((_, i) => (
                  <Star key={i} className="fill-pink-500 text-pink-500" size={12} />
                ))}
              </div>
              
              {/* Contenido */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-pink-800">
                  {product.name}
                </h3>
                <p className="hidden sm:block text-sm text-pink-600">
                  {product.description}
                </p>
              </div>
              
              {/* Botón */}
              <div className="mt-4">
                <button className="group/btn relative w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-pink-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  <div className="relative px-4 py-2.5 flex items-center justify-center gap-2">
                    <span className="font-semibold">Ver Detalles</span>
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                  </div>
                </button>
              </div>
            </div>

            {/* Divisor inferior */}
            <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8 sm:mt-12">
        <button className="group inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-pink-200 hover:border-pink-400 shadow-lg hover:shadow-xl transition-all duration-300">
          <span className="font-semibold text-pink-600">Ver Todos los Productos</span>
          <ArrowRight className="text-pink-600 group-hover:translate-x-1 transition-transform duration-300" size={20} />
        </button>
      </div>
    </div>
  );
}

export default ProductosComponent