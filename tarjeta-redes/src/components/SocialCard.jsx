import React, { useState } from 'react';

export default function SocialCard() {
  // Estado para los likes comenzando en un número exacto
  const [likes, setLikes] = useState(1240);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <div className="w-full max-w-md bg-white border border-gray-300 rounded-3xl shadow-2xl overflow-hidden my-6">
      
      {/* 1. HEADER DE LA TARJETA */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-3">
          <img 
            src="https://i.pinimg.com/originals/7f/f7/9f/7ff79ff3d15d53055bdf87200223eb83.jpg" 
            alt="Perfil" 
            className="w-9 h-9 rounded-full object-cover border border-gray-300 shadow-sm"
          />
          <div>
            <h3 className="font-bold text-gray-900 text-sm leading-tight">lindarys fragozo</h3>
            <p className="text-xs text-gray-500">Estudiante de ingeniería multimedia</p>
          </div>
        </div>

        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 p-0.5 shadow-sm">
          <img 
            src="https://i.pinimg.com/originals/02/db/2f/02db2f2ed9be36a9fc107c692ce296e0.jpg" 
            alt="Logo Instagram" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* 2. IMAGEN DE LA PUBLICACIÓN PRINCIPAL */}
      <div className="w-full h-72 bg-gray-100 overflow-hidden">
        <img 
          src="https://i.pinimg.com/originals/5d/13/5d/5d135da0ee7841c9da46a4e9c76bcf09.jpg" 
          alt="Publicación principal" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 3. SECCIÓN DE SEGUIDORES, SEGUIDOS Y LIKES */}
      <div className="p-4 bg-gray-50 border-t border-gray-200 grid grid-cols-3 gap-3 text-center">
        <div className="bg-white border border-gray-200 rounded-2xl p-2.5 shadow-sm">
          <span className="block font-extrabold text-gray-900 text-base">14.2K</span>
          <span className="text-xs text-gray-500 font-medium">Seguidores</span>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-2.5 shadow-sm">
          <span className="block font-extrabold text-gray-900 text-base">450</span>
          <span className="text-xs text-gray-500 font-medium">Seguidos</span>
        </div>
        
        {/* CUADRO INTERACTIVO DE LIKES */}
        <button 
          onClick={handleLike}
          className="bg-white border border-pink-200 hover:border-pink-500 hover:bg-pink-50/50 rounded-2xl p-2.5 shadow-sm transition active:scale-95 cursor-pointer flex flex-col items-center justify-center w-full"
        >
          <span className="block font-extrabold text-pink-600 text-base">
            {likes.toLocaleString()}
          </span>
          <span className="text-xs text-gray-500 font-medium">Likes </span>
        </button>
      </div>

      {/* 4. BOTONES DE ACCIÓN A REDES SOCIALES */}
      <div className="p-4 bg-white border-t border-gray-200 space-y-2.5">
        <a 
          href="#instagram" 
          className="flex items-center justify-center w-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white font-semibold py-3 rounded-2xl shadow-md transition text-sm"
        >
          Sígueme en Instagram
        </a>
        <a 
          href="#tiktok" 
          className="flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-2xl shadow transition text-sm"
        >
          Ver mi perfil de TikTok
        </a>
      </div>

    </div>
  );
}