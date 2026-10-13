import React from 'react';

export default function SocialCard() {
  return (
    <div className="w-full max-w-md bg-white border border-gray-300 rounded-3xl shadow-2xl overflow-hidden my-6">
      
      {/* 1. HEADER DE LA TARJETA (Estilo Instagram) */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-3">
          {/* Foto de perfil redonda pequeña */}
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

        {/* Logo de Instagram pequeño en la esquina superior */}
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

      {/* 3. IMAGEN LARGA ADICIONAL DEBAJO DE LA PUBLICACIÓN */}
      <div className="w-full h-36 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <img 
          src="https://i.pinimg.com/1200x/46/c5/c4/46c5c43aca5c648cf79ebfe0897698c9.jpg" 
          alt="Banner largo adicional" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 4. SECCIÓN DE SEGUIDORES, SEGUIDOS Y LIKES (Diseñados como botones/tarjetas estéticas) */}
      <div className="p-4 bg-gray-50 border-t border-gray-200 grid grid-cols-3 gap-3 text-center">
        <div className="bg-white border border-gray-200 rounded-2xl p-2.5 shadow-sm hover:border-pink-500 transition cursor-pointer">
          <span className="block font-extrabold text-gray-900 text-base">14.2K</span>
          <span className="text-xs text-gray-500 font-medium">Seguidores</span>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-2.5 shadow-sm hover:border-pink-500 transition cursor-pointer">
          <span className="block font-extrabold text-gray-900 text-base">450</span>
          <span className="text-xs text-gray-500 font-medium">Seguidos</span>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-2.5 shadow-sm hover:border-pink-500 transition cursor-pointer">
          <span className="block font-extrabold text-gray-900 text-base">1.2M</span>
          <span className="text-xs text-gray-500 font-medium">Likes</span>
        </div>
      </div>

      {/* 5. BOTONES DE ACCIÓN A REDES SOCIALES */}
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