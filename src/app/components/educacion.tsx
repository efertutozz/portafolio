import React from "react";

function Educacion() {
  return (
    <section
      id="educacion"
      className="mx-auto mt-4 bg-fondo rounded-3xl md:mx-24 xl:mx-80 md:mt-6 "
    >
      <div className="max-w-lg mx-auto p-6 bg-fondo rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center color-letras-principales mb-4">
          🎓 Educación
        </h2>

        <div className="space-y-4 text-white">
          <div className="flex items-center gap-3">
            <span className="text-blue-500 text-lg">📍</span>
            <div>
              <p className="font-semibold text-sm md:text-xl">
                INACAP, Chile – Maipú
              </p>
              <p className="text-sm md:text-xl">
                Analista Programador (2018 – 2020)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-green-500 text-lg">📍</span>
            <div>
              <p className="font-semibold text-sm md:text-xl">
                INACAP, Chile – Valparaíso
              </p>
              <p className="text-sm md:text-xl">
                Ingeniero en Informática (2022 – 2023)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Educacion;
