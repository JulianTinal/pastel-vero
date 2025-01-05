import React from 'react'
import {Star} from 'lucide-react';

function TestimoniosComponent() {
    
  const testimonials = [
    {
      name: "María González",
      comment: "El pastel de bodas superó todas nuestras expectativas. ¡Fue el centro de atención!"
    },
    {
      name: "Carlos Ruiz",
      comment: "Los mejores cupcakes que he probado. El servicio es excelente y muy profesional."
    },
    {
      name: "Ana Martínez",
      comment: "Siempre cumplen con los tiempos de entrega y la calidad es excepcional."
    }
  ];
  return (
    <>
        {/* Testimonios */}
        <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-pink-800 mb-4 leading-tight">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-pink-700 max-w-2xl mx-auto leading-relaxed">
              La satisfacción de nuestros clientes es nuestra mejor recompensa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-pink-500 text-pink-500" size={16} />
                  ))}
                </div>
                <p className="text-lg text-pink-700 mb-6 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <p className="text-lg font-semibold text-pink-800">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimoniosComponent
