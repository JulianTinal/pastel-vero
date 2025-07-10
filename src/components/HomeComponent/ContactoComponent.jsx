import React, { useState } from 'react';
import { Phone, Mail, MapPin, Cake, User, MessageSquare, Tag } from 'lucide-react';

const ContactoComponent = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "+529991746477";
    const message = `*Mensaje de contacto*%0A%0A*Nombre:* ${formData.nombre}%0A*Correo:* ${formData.correo}%0A*Asunto:* ${formData.asunto}%0A%0A*Mensaje:*%0A${formData.mensaje}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Coordenadas exactas de tu negocio en Mérida
  const latitud = 20.87555373653631;
  const longitud = -89.81394052505493;

  return (
    <div className="w-full py-12 sm:py-16 -mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título "Contáctanos" */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-800">
            Contáctanos
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 h-full">
            <form onSubmit={handleSubmit} className="h-full flex flex-col">
              <div className="space-y-5 flex-grow">
                {/* Campo Nombre */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-pink-500" />
                  </div>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all"
                    placeholder="Nombre completo"
                  />
                </div>

                {/* Campo Correo */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-pink-500" />
                  </div>
                  <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all"
                    placeholder="Correo electrónico"
                  />
                </div>

                {/* Campo Asunto */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Tag className="h-5 w-5 text-pink-500" />
                  </div>
                  <input
                    type="text"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all"
                    placeholder="Asunto"
                  />
                </div>

                {/* Campo Mensaje */}
                <div className="relative flex-grow">
                  <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-pink-500" />
                  </div>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="w-full h-full pl-10 pr-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                    rows="5"
                  ></textarea>
                </div>
              </div>

              {/* Botón de enviar */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white font-medium py-3 px-6 rounded-xl hover:from-pink-700 hover:to-pink-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Enviar mensaje
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Mapa */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
            <div className="h-full w-full relative">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitud-0.005}%2C${latitud-0.005}%2C${longitud+0.005}%2C${latitud+0.005}&layer=mapnik&marker=${latitud}%2C${longitud}`}
                className="absolute inset-0"
              ></iframe>
              
              {/* Marcador personalizado */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-pink-600 text-white p-2 rounded-full shadow-lg">
                  <MapPin size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoComponent;