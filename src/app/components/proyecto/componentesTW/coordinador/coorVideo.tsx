import React from "react";

function CoorVideo() {
  return (
    <div className="text-black">
      <p className="text-center underline underline-offset-4">
        Algunas Funciones
      </p>
      <ul className="mt-6 border-4 space-y-4 text-sm text-pretty md:text-xl">
        <li className="flex items-center mt-2 gap-4 text-sm md:text-base">
          • Creación y edición de listados de trabajadores.
        </li>
        <li className="flex items-center  gap-4 text-sm md:text-base">
          • Modificación de datos por parte del coordinador.
        </li>
        <li className="flex items-center gap-4 text-sm md:text-base">
          • Visualización del mes actual de la plantilla que contiene la
          planificación del mes.
        </li>
      </ul>
      <div className="flex mt-3">
        <div>
          <p className="text-xs md:text-base p-4 text-pretty ">
            Pequeña Demostración
          </p>
          <p className="text-xs md:text-base p-4 text-pretty ">
            <strong>Datos de prueba</strong>
          </p>
        </div>

        <video className="mt-3 w-3/4 rounded-lg shadow-lg" controls>
          <source src="/videos/Coor.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
    </div>
  );
}

export default CoorVideo;
