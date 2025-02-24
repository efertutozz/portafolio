import React from "react";

function ConVideo() {
  return (
    <div className="text-black">
      <p className="text-center underline underline-offset-4">
        Algunas Funciones
      </p>
      <ul className="mt-6 border-4 space-y-4 text-sm text-pretty md:text-xl">
        <li className="flex items-center mt-2 gap-4 text-sm md:text-base">
          • Ver rutas.
        </li>
        <li className="flex items-center  gap-4 text-sm md:text-base">
          • Registro de tags.
        </li>
        <li className="flex items-center gap-4 text-sm md:text-base">
          • Registro de observaciones.
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

        <video
          className="w-full mx-10 max-w-[200px] max-h-[200px]  rounded-lg shadow-lg"
          controls
        >
          <source src="/videos/conductor.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
    </div>
  );
}

export default ConVideo;
