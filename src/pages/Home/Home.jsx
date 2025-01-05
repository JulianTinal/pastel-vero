import React, { useState, useEffect } from 'react';
import CarruselComponent from '../../components/HomeComponent/CarruselComponent/CarruselComponent';
import MomentosComponent from '../../components/HomeComponent/MomentosComponent/MomentosComponent';
import ProductosComponent from '../../components/HomeComponent/ProductosComponent/ProductosComponent';
import TestimoniosComponent from '../../components/HomeComponent/TestimoniosComponent/TestimoniosComponent';
import PastelesComponent from '../../components/HomeComponent/PastelesComponent/PastelesComponent';

const Home = () => {
  


  


  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-pink-100 to-pink-300">
      {/* Carrusel - Fade up */}
      <div data-aos="fade-up">
        <CarruselComponent/>
      </div>
      <br />
      {/* Carrusel - Fade up */}
      <div data-aos="fade-up">
        <PastelesComponent/>
      </div>

      {/* Bienvenida y CTA - Fade right */}
      <div data-aos="fade-right">
        <MomentosComponent/>
      </div>

      {/* Productos Destacados - Zoom in */}
      <div data-aos="zoom-in">
        <ProductosComponent/>
      </div>

      {/* Testimonios - Fade up */}
      <div data-aos="fade-up">
        <TestimoniosComponent/>
      </div>
    </div>
  );
};

export default Home;