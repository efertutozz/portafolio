import React from "react";

function Admin2() {
  return (
    <div className="text-black">
      <p className="text-center underline underline-offset-4">
        Algunas Funciones
      </p>
      <ul className="mt-6 border-4 space-y-4 text-sm text-pretty md:text-xl">
        <li className="flex items-center mt-2 gap-4 text-sm md:text-base">
          • Descargar los archivos en formato Excel con el reporte mensual de
          los viajes realizado por los conductores.
        </li>
        <li className="flex items-center  gap-4 text-sm md:text-base">
          • Ver servicios que no se han finalizado (conductores sin cerrar su
          servicio)
        </li>
        <li className="flex items-center gap-4 text-sm md:text-base">
          • Eliminación de cuentas de usuarios.
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
          <source src="/videos/admin2.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
    </div>
  );
}

export default Admin2;
