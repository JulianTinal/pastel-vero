import React from 'react'
import { ShoppingCart, Cake, Heart, Clock } from 'lucide-react';

function MomentosComponent() {
    const features = [
        {
          icon: Heart,
          title: "Amor por la Repostería",
          description: "Cada creación está hecha con dedicación y los mejores ingredientes seleccionados.",
        },
        {
          icon: Cake,
          title: "Diseños Únicos",
          description: "Pasteles personalizados que reflejan tu estilo y hacen especial cada ocasión.",
        },
        {
          icon: Clock,
          title: "Frescura Garantizada",
          description: "Horneamos el mismo día de tu entrega para máxima calidad y sabor.",
        },
        {
          icon: ShoppingCart,
          title: "Pedidos Fáciles",
          description: "Proceso simple de compra y entrega puntual en la comodidad de tu hogar.",
        }
      ];
  return (
    <>
       {/* Bienvenida y CTA */}
       <div className="container -mt-10 mx-auto px-6 py-12 lg:py-16 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-pink-800 mb-4 lg:mb-6 leading-tight max-w-4xl mx-auto">
          Lo que nos diferencia
        </h1>
        <p className="text-xl lg:text-2xl text-pink-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Tradición, creatividad y frescura en cada pedido.
        </p>
        
        
      </div>

      {/* Características */}
      <div className="container mx-auto px-6 -mt-14 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-pink-200 rounded-full scale-125 group-hover:scale-150 transition-transform duration-300" />
                <feature.icon className="relative text-pink-500 group-hover:scale-110 transition-transform duration-300" size={40} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-pink-800">{feature.title}</h3>
              <p className="text-lg text-pink-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MomentosComponent
