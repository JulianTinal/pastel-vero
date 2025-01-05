import React, { useState, useEffect } from 'react';
import {  ChevronLeft, ChevronRight } from 'lucide-react';
import slide1 from '/public/images/slider1.png';
import slide2 from '/public/images/slider2.png';
import slide3 from '/public/images/slider3.png';
function CarruselComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
    const carouselImages = [
      {
        src: slide1,
        alt: "Pastel de Chocolate Gourmet"
      },
      {
        src: slide2,
        alt: "Pastel de Boda Elegante"
      },
      {
        src: slide3,
        alt: "Cupcakes Decorados"
      }
    ];
  
   

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };
  
    useEffect(() => {
      const slideInterval = setInterval(nextSlide, 5000);
      return () => clearInterval(slideInterval);
    }, []);
  return (
    <div>
       {/* Carrusel */}
       <div className="relative w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-[510px] object-cover"
              />
            </div>
          ))}
        </div>

        <button 
          onClick={prevSlide} 
          className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-white/50 hover:bg-white/70 rounded-full p-1 md:p-2 transition-all"
        >
          <ChevronLeft className="text-pink-700" size={24} />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-white/50 hover:bg-white/70 rounded-full p-1 md:p-2 transition-all"
        >
          <ChevronRight className="text-pink-700" size={24} />
        </button>

        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                currentSlide === index ? 'bg-pink-600' : 'bg-white/50'
              } transition-colors`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarruselComponent
