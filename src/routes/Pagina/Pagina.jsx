import react from 'react'
// src/routes/Pagina.jsx
const Pagina = () => {
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
              <h1 className="text-2xl font-bold text-center mb-4">Bem-vindo à Loja de Brinquedo!</h1>
              <p className="text-gray-700 text-center mb-6">
                  Aqui você encontrará os melhores brinquedos para suas crianças.
              </p>
              <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300">
                  Explore os Brinquedos
              </button>
          </div>
      </div>
  );
};

